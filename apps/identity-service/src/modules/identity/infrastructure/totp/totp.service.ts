import { Injectable } from "@nestjs/common";
import * as crypto from "crypto";

// RFC 4648 Base32 alphabet (used by Google Authenticator, Microsoft Authenticator, 1Password)
const BASE32_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

@Injectable()
export class TotpService {
  /**
   * Base32 encodes a binary buffer into an RFC 4648 string without padding.
   */
  base32Encode(buffer: Buffer): string {
    let bits = 0;
    let value = 0;
    let output = "";

    for (let i = 0; i < buffer.length; i++) {
      value = (value << 8) | buffer[i];
      bits += 8;
      while (bits >= 5) {
        output += BASE32_ALPHABET[(value >>> (bits - 5)) & 31];
        bits -= 5;
      }
    }

    if (bits > 0) {
      output += BASE32_ALPHABET[(value << (5 - bits)) & 31];
    }

    return output;
  }

  /**
   * Base32 decodes an RFC 4648 string back into a binary Buffer.
   */
  base32Decode(input: string): Buffer {
    const cleaned = input.toUpperCase().replace(/[^A-Z2-7]/g, "");
    let bits = 0;
    let value = 0;
    const bytes: number[] = [];

    for (let i = 0; i < cleaned.length; i++) {
      const charIndex = BASE32_ALPHABET.indexOf(cleaned[i]);
      if (charIndex === -1) continue;

      value = (value << 5) | charIndex;
      bits += 5;

      if (bits >= 8) {
        bytes.push((value >>> (bits - 8)) & 255);
        bits -= 8;
      }
    }

    return Buffer.from(bytes);
  }

  /**
   * Generates a new cryptographically secure 20-byte (160-bit) TOTP secret key
   * along with the standard otpauth:// URL for authenticator apps.
   */
  generateSecret(email: string, issuer = "NukkadNow"): { secret: string; otpauthUrl: string } {
    const randomBytes = crypto.randomBytes(20);
    const secret = this.base32Encode(randomBytes);
    const encodedIssuer = encodeURIComponent(issuer);
    const encodedAccount = encodeURIComponent(email);
    const otpauthUrl = `otpauth://totp/${encodedIssuer}:${encodedAccount}?secret=${secret}&issuer=${encodedIssuer}&algorithm=SHA1&digits=6&period=30`;

    return { secret, otpauthUrl };
  }

  /**
   * Generates a deterministic base32 secret for dev/staging seed accounts
   * based on email and a fixed server salt so Google Authenticator codes remain stable.
   */
  getDeterministicSecret(email: string): string {
    const salt = process.env.OTP_HMAC_SECRET || "nukkadnow-totp-hmac-salt-2026-production";
    const hash = crypto.createHmac("sha256", salt).update(email.toLowerCase().trim()).digest();
    // Take first 20 bytes for 160-bit standard secret
    return this.base32Encode(hash.subarray(0, 20));
  }

  /**
   * Generates a 6-digit TOTP code for a given base32 secret and timestamp (RFC 6238).
   */
  generateTotp(secret: string, timestampMs = Date.now()): string {
    const key = this.base32Decode(secret);
    if (key.length === 0) return "000000";

    // 30-second time-step counter
    const timeStep = Math.floor(timestampMs / 1000 / 30);

    // 8-byte big-endian counter buffer
    const counterBuf = Buffer.alloc(8);
    counterBuf.writeBigUInt64BE(BigInt(timeStep));

    // HMAC-SHA1
    const hmac = crypto.createHmac("sha1", key).update(counterBuf).digest();

    // Dynamic truncation (RFC 4226)
    const offset = hmac[hmac.length - 1] & 0x0f;
    const binary =
      ((hmac[offset] & 0x7f) << 24) |
      ((hmac[offset + 1] & 0xff) << 16) |
      ((hmac[offset + 2] & 0xff) << 8) |
      (hmac[offset + 3] & 0xff);

    const otp = (binary % 1000000).toString().padStart(6, "0");
    return otp;
  }

  /**
   * Verifies a 6-digit TOTP code against a secret with a configurable time-step window.
   * Window = 1 allows 30 seconds before and 30 seconds after (standard for clock drift).
   */
  verifyTotp(secret: string, code: string, window = 1): boolean {
    const cleanCode = code.trim().replace(/\s+/g, "");
    if (cleanCode.length !== 6 || !/^\d{6}$/.test(cleanCode)) {
      return false;
    }

    const key = this.base32Decode(secret);
    if (key.length === 0) return false;

    const now = Date.now();
    const currentStep = Math.floor(now / 1000 / 30);

    for (let stepOffset = -window; stepOffset <= window; stepOffset++) {
      const stepTime = (currentStep + stepOffset) * 30 * 1000;
      const expectedCode = this.generateTotp(secret, stepTime);

      if (crypto.timingSafeEqual(Buffer.from(cleanCode), Buffer.from(expectedCode))) {
        return true;
      }
    }

    return false;
  }
}
