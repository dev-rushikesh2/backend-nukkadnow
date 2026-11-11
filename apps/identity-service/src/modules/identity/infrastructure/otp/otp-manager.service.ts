import { Injectable } from "@nestjs/common";
import * as crypto from "crypto";
import { InvalidOtpError, OtpExpiredError, MaxOtpAttemptsError } from "../../domain/errors/identity-errors";

interface OtpRecord {
  hash: string;
  expiresAt: number;
  attempts: number;
}

@Injectable()
export class OtpManagerService {
  private readonly store = new Map<string, OtpRecord>();
  private readonly secretKey = process.env.OTP_HMAC_SECRET || "nukkadnow-otp-secret-key-32chars!";

  requestOtp(phoneNumber: string): string {
    const rawOtp = crypto.randomInt(100000, 999999).toString();
    const hash = this.hashOtp(rawOtp);
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes

    this.store.set(phoneNumber, { hash, expiresAt, attempts: 0 });

    // In local dev/test, log OTP; in production, dispatches to SMS provider
    return rawOtp;
  }

  verifyOtp(phoneNumber: string, submittedOtp: string): boolean {
    const record = this.store.get(phoneNumber);
    if (!record) {
      throw new OtpExpiredError();
    }

    if (Date.now() > record.expiresAt) {
      this.store.delete(phoneNumber);
      throw new OtpExpiredError();
    }

    if (record.attempts >= 3) {
      this.store.delete(phoneNumber);
      throw new MaxOtpAttemptsError();
    }

    const submittedHash = this.hashOtp(submittedOtp);
    const match = crypto.timingSafeEqual(Buffer.from(record.hash), Buffer.from(submittedHash));

    if (!match) {
      record.attempts++;
      throw new InvalidOtpError();
    }

    this.store.delete(phoneNumber);
    return true;
  }

  private hashOtp(otp: string): string {
    return crypto.createHmac("sha256", this.secretKey).update(otp).digest("hex");
  }
}
