import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
import { Request } from "express";

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

@Injectable()
export class RateLimitGuard implements CanActivate {
  private readonly memoryStore = new Map<string, RateLimitRecord>();
  private readonly windowMs = 60 * 1000; // 1 minute
  private readonly maxRequests = 100; // 100 requests per minute
  private readonly maxStoreSize = 50000; // Cap to prevent memory exhaustion

  constructor() {
    // Evict expired entries every 60 seconds to prevent heap memory exhaustion
    setInterval(() => {
      const now = Date.now();
      for (const [key, record] of this.memoryStore.entries()) {
        if (now > record.resetAt) {
          this.memoryStore.delete(key);
        }
      }
    }, 60000).unref();
  }

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>();
    const rawForwarded = req.headers["x-forwarded-for"];
    const forwardedIp = Array.isArray(rawForwarded)
      ? rawForwarded[0]
      : typeof rawForwarded === "string"
        ? rawForwarded.split(",")[0].trim()
        : null;
    const clientIp = forwardedIp || req.socket.remoteAddress || "127.0.0.1";
    const key = `${clientIp}:${req.path}`;
    const now = Date.now();

    // Guard against memory DoS under flood attacks
    if (this.memoryStore.size >= this.maxStoreSize) {
      this.memoryStore.clear();
    }

    const record = this.memoryStore.get(key);

    if (!record || now > record.resetAt) {
      this.memoryStore.set(key, { count: 1, resetAt: now + this.windowMs });
      return true;
    }

    if (record.count >= this.maxRequests) {
      throw new HttpException(
        {
          statusCode: HttpStatus.TOO_MANY_REQUESTS,
          code: "RATE_LIMIT_EXCEEDED",
          message: "Too many requests. Please slow down.",
          retryAfterMs: record.resetAt - now,
        },
        HttpStatus.TOO_MANY_REQUESTS
      );
    }

    record.count++;
    return true;
  }
}
