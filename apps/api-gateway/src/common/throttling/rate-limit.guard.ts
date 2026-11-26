import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus, Logger, OnModuleDestroy } from "@nestjs/common";
import { Request } from "express";
import Redis from "ioredis";

/**
 * Redis-backed rate limiter — 100 requests / 60 s per IP per path.
 *
 * Why Redis instead of in-memory Map:
 *   The in-memory store is per-process. With 3+ gateway pods each pod tracks
 *   its own counter, so the effective limit becomes 300 req/min — attackers
 *   simply spread requests across pods. Redis gives one shared counter across
 *   all pods, enforcing a true 100 req/min limit regardless of pod count.
 *
 * Falls back to in-memory if Redis is unavailable (graceful degradation).
 */

interface FallbackRecord { count: number; resetAt: number; }

@Injectable()
export class RateLimitGuard implements CanActivate, OnModuleDestroy {
  private readonly logger = new Logger(RateLimitGuard.name);
  private readonly windowMs = 60_000;      // 1 minute
  private readonly maxRequests = 100;
  private redis: Redis | null = null;
  private redisOk = false;

  // Fallback in-memory store (used only when Redis is down)
  private readonly fallback = new Map<string, FallbackRecord>();
  private readonly maxFallbackSize = 50_000;

  constructor() {
    const url = process.env.REDIS_URL || "redis://localhost:6379";
    try {
      this.redis = new Redis(url, {
        maxRetriesPerRequest: 1,
        enableOfflineQueue: false,
        connectTimeout: 2_000,
        lazyConnect: true,
      });
      this.redis.on("ready", () => { this.redisOk = true; });
      this.redis.on("error", () => { this.redisOk = false; });
      this.redis.connect().catch(() => { this.redisOk = false; });
    } catch {
      this.logger.warn("RateLimitGuard: Redis unavailable — using in-memory fallback");
    }

    // Evict expired fallback entries every 60 s
    setInterval(() => {
      const now = Date.now();
      for (const [k, r] of this.fallback.entries()) {
        if (now > r.resetAt) this.fallback.delete(k);
      }
    }, 60_000).unref();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<Request>();
    const rawFwd = req.headers["x-forwarded-for"];
    const ip = (Array.isArray(rawFwd) ? rawFwd[0] : (rawFwd ?? "").split(",")[0].trim())
      || req.socket?.remoteAddress
      || "0.0.0.0";
    const key = `rl:${ip}:${req.path}`;

    if (this.redisOk && this.redis) {
      return this.checkRedis(key);
    }
    return this.checkFallback(key);
  }

  private async checkRedis(key: string): Promise<boolean> {
    try {
      const pipeline = this.redis!.pipeline();
      pipeline.incr(key);
      pipeline.pttl(key);
      const [[, count], [, ttl]] = (await pipeline.exec()) as [[null, number], [null, number]];

      if (ttl < 0) {
        // Key just created — set expiry
        await this.redis!.pexpire(key, this.windowMs);
      }

      if (count > this.maxRequests) {
        const retryMs = ttl > 0 ? ttl : this.windowMs;
        throw new HttpException(
          { statusCode: 429, code: "RATE_LIMIT_EXCEEDED", message: "Too many requests. Please slow down.", retryAfterMs: retryMs },
          HttpStatus.TOO_MANY_REQUESTS,
        );
      }
      return true;
    } catch (err) {
      if (err instanceof HttpException) throw err;
      // Redis error mid-request — fall through to in-memory
      this.redisOk = false;
      return this.checkFallback(key);
    }
  }

  private checkFallback(key: string): boolean {
    const now = Date.now();
    if (this.fallback.size >= this.maxFallbackSize) this.fallback.clear();

    const rec = this.fallback.get(key);
    if (!rec || now > rec.resetAt) {
      this.fallback.set(key, { count: 1, resetAt: now + this.windowMs });
      return true;
    }
    if (rec.count >= this.maxRequests) {
      throw new HttpException(
        { statusCode: 429, code: "RATE_LIMIT_EXCEEDED", message: "Too many requests. Please slow down.", retryAfterMs: rec.resetAt - now },
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }
    rec.count++;
    return true;
  }

  async onModuleDestroy() {
    await this.redis?.quit().catch(() => {});
  }
}
