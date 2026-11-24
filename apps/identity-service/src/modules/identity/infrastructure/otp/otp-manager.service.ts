import { Injectable, Logger } from "@nestjs/common";
import * as crypto from "crypto";
import Redis from "ioredis";
import { InvalidOtpError, OtpExpiredError, MaxOtpAttemptsError } from "../../domain/errors/identity-errors";

@Injectable()
export class OtpManagerService {
  private readonly logger = new Logger(OtpManagerService.name);
  private readonly redis: Redis;
  private readonly fallbackMap = new Map<string, { hash: string; attempts: number; expiresAt: number }>();

  constructor() {
    if (!process.env.OTP_HMAC_SECRET || process.env.OTP_HMAC_SECRET.length < 16) {
      throw new Error("OTP_HMAC_SECRET is required");
    }
    const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";
    this.redis = new Redis(redisUrl, {
      maxRetriesPerRequest: 1,
      enableOfflineQueue: false,
      lazyConnect: true,
      retryStrategy: (times) => {
        if (times > 3) return null;
        return Math.min(times * 100, 1000);
      },
    });
    this.redis.on("error", (err) => {
      this.logger.error("Redis connection error in OtpManagerService:", err.message);
    });
  }

  private hashOtp(otp: string): string {
    const secretKey = process.env.OTP_HMAC_SECRET;
    if (!secretKey) throw new Error("OTP_HMAC_SECRET is required");
    return crypto.createHmac("sha256", secretKey).update(otp).digest("hex");
  }

  async requestOtp(target: string): Promise<string | void> {
    const rawOtp = crypto.randomInt(100000, 999999).toString();
    const hash = this.hashOtp(rawOtp);
    try {
      await this.redis.set(`otp:${target}`, hash, "EX", 300);
      await this.redis.set(`otp_attempts:${target}`, "0", "EX", 300);
    } catch (err: any) {
      if (process.env.NODE_ENV !== "production") {
        this.fallbackMap.set(target, { hash, attempts: 0, expiresAt: Date.now() + 300000 });
      } else {
        throw err;
      }
    }

    if (process.env.NODE_ENV !== "production") {
      return rawOtp;
    }
  }

  async verifyOtp(target: string, submittedOtp: string): Promise<boolean> {
    let hash: string | null = null;
    let attempts = 0;
    let isFallback = false;

    try {
      hash = await this.redis.get(`otp:${target}`);
      const attemptsStr = await this.redis.get(`otp_attempts:${target}`);
      attempts = attemptsStr ? parseInt(attemptsStr, 10) : 0;
    } catch (err) {
      if (process.env.NODE_ENV !== "production") {
        const item = this.fallbackMap.get(target);
        if (item && item.expiresAt > Date.now()) {
          hash = item.hash;
          attempts = item.attempts;
          isFallback = true;
        }
      } else {
        throw err;
      }
    }

    if (!hash && process.env.NODE_ENV !== "production") {
      const item = this.fallbackMap.get(target);
      if (item && item.expiresAt > Date.now()) {
        hash = item.hash;
        attempts = item.attempts;
        isFallback = true;
      }
    }

    if (!hash) {
      throw new OtpExpiredError();
    }

    if (attempts >= 3) {
      if (!isFallback) {
        await this.redis.del(`otp:${target}`, `otp_attempts:${target}`);
      } else {
        this.fallbackMap.delete(target);
      }
      throw new MaxOtpAttemptsError();
    }

    const submittedHash = this.hashOtp(submittedOtp);
    const match = crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(submittedHash));

    if (!match) {
      if (!isFallback) {
        await this.redis.incr(`otp_attempts:${target}`);
      } else {
        const item = this.fallbackMap.get(target)!;
        item.attempts++;
      }
      throw new InvalidOtpError();
    }

    if (!isFallback) {
      await this.redis.del(`otp:${target}`, `otp_attempts:${target}`);
    } else {
      this.fallbackMap.delete(target);
    }
    return true;
  }
}
