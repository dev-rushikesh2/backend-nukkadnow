import * as crypto from "crypto";

export class ServiceAuthenticator {
  static generateServiceToken(serviceName: string, secretKey: string): string {
    const timestamp = Date.now().toString();
    const hmac = crypto.createHmac("sha256", secretKey);
    hmac.update(`${serviceName}:${timestamp}`);
    const signature = hmac.digest("hex");
    return `${serviceName}:${timestamp}:${signature}`;
  }

  static verifyServiceToken(token: string, secretKey: string, maxSkewMs: number = 30000): boolean {
    const parts = token.split(":");
    if (parts.length !== 3) return false;

    const [serviceName, timestampStr, incomingSignature] = parts;
    const timestamp = parseInt(timestampStr, 10);
    const now = Date.now();

    if (isNaN(timestamp) || Math.abs(now - timestamp) > maxSkewMs) {
      return false; // Skew or expiration failed
    }

    const hmac = crypto.createHmac("sha256", secretKey);
    hmac.update(`${serviceName}:${timestampStr}`);
    const expectedSignature = hmac.digest("hex");

    return crypto.timingSafeEqual(Buffer.from(incomingSignature), Buffer.from(expectedSignature));
  }
}
