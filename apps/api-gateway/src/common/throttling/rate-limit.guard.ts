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

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>();
    const clientIp = (req.headers["x-forwarded-for"] as string) || req.socket.remoteAddress || "unknown_ip";
    const key = `${clientIp}:${req.path}`;
    const now = Date.now();

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
