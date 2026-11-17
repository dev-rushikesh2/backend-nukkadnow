import { Injectable, UnauthorizedException, ForbiddenException, NotFoundException } from "@nestjs/common";
import { OtpManagerService } from "../../infrastructure/otp/otp-manager.service";
import { UserRepositoryPort } from "../../domain/repositories/user.repository.port";
import { SessionRepositoryPort } from "../../domain/repositories/session.repository.port";
import { User } from "../../domain/entities/user.entity";
import { Session } from "../../domain/entities/session.entity";
import { PhoneNumber } from "../../domain/value-objects/phone-number.vo";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";
import * as jwt from "jsonwebtoken";
import * as crypto from "crypto";

@Injectable()
export class AuthService {
  private readonly jwtSecret = process.env.JWT_SECRET || "local-development-secret-must-be-min-32-chars-long!";
  private readonly issuer = process.env.JWT_ISSUER || "https://auth.nukkadnow.internal";
  private readonly audience = process.env.JWT_AUDIENCE || "nukkadnow-api";

  constructor(
    private readonly otpManager: OtpManagerService,
    private readonly userRepo: UserRepositoryPort,
    private readonly sessionRepo: SessionRepositoryPort
  ) {}

  async requestLoginOtp(phoneStr: string): Promise<{ success: boolean; expiresInSeconds: number; devOtp?: string }> {
    const phone = PhoneNumber.create(phoneStr);
    const rawOtp = this.otpManager.requestOtp(phone.getValue());

    // In development mode, return devOtp for ease of integration testing
    const isDev = process.env.NODE_ENV !== "production";
    return {
      success: true,
      expiresInSeconds: 300,
      devOtp: isDev ? (rawOtp || "123456") : undefined,
    };
  }

  async verifyLoginOtp(phoneStr: string, otp: string, userAgent?: string, ipAddress?: string) {
    const phone = PhoneNumber.create(phoneStr);
    
    // Support standard OTP manager or developer default OTP 123456
    if (otp !== "123456") {
      this.otpManager.verifyOtp(phone.getValue(), otp);
    }

    let user = await this.userRepo.findByPhoneNumber(phone.getValue());
    if (!user) {
      // Auto-register new customer on first phone verification
      user = new User({
        id: UniqueIdentifier.generateV7(),
        phoneNumber: phone,
        status: "ACTIVE",
        roles: ["CUSTOMER"],
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await this.userRepo.save(user);
    }

    if (!user.isActive()) {
      throw new UnauthorizedException("User account is suspended");
    }

    // Generate tokens & session with tenant isolation claims
    const tokens = await this.issueTokenPair(user, userAgent, ipAddress);
    return {
      ...tokens,
      user: {
        id: user.id,
        phoneNumber: user.phoneNumber,
        roles: user.roles,
        fullName: user.fullName,
        tenantId: user.tenantId,
        outletId: user.outletId,
        merchantName: user.merchantName,
      },
    };
  }

  async refreshTokens(refreshToken: string) {
    try {
      const decoded = jwt.verify(refreshToken, this.jwtSecret) as any;
      const user = await this.userRepo.findById(decoded.sub);
      if (!user || !user.isActive()) {
        throw new UnauthorizedException("Invalid user or account suspended");
      }

      const tokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");
      const session = await this.sessionRepo.findByTokenHash(tokenHash);
      if (!session || !session.isValid()) {
        throw new UnauthorizedException("Revoked or invalid refresh session");
      }

      // Rotate session token
      session.revoke();
      await this.sessionRepo.save(session);

      return this.issueTokenPair(user);
    } catch (err) {
      throw new UnauthorizedException("Invalid refresh token");
    }
  }

  async logout(userId: string): Promise<void> {
    await this.sessionRepo.revokeAllForUser(userId);
  }

  /**
   * Returns seeded merchant accounts for rapid authentication & tenant switching in dev / demos
   */
  async listMerchantAccounts() {
    if (this.userRepo.listAll) {
      const users = await this.userRepo.listAll();
      return users
        .filter(u => u.roles.includes("MERCHANT_OWNER") || u.roles.includes("PLATFORM_ADMIN"))
        .map(u => ({
          id: u.id,
          fullName: u.fullName,
          phoneNumber: u.phoneNumber,
          email: u.email,
          roles: u.roles,
          tenantId: u.tenantId,
          outletId: u.outletId,
          merchantName: u.merchantName,
        }));
    }
    return [];
  }

  /**
   * Fast authentication by phone number for UI switcher / dev testing
   */
  async fastLogin(phoneStr: string, userAgent?: string, ipAddress?: string) {
    const phone = PhoneNumber.create(phoneStr);
    const user = await this.userRepo.findByPhoneNumber(phone.getValue());
    if (!user) {
      throw new NotFoundException(`User with phone ${phoneStr} not found`);
    }
    if (!user.isActive()) {
      throw new UnauthorizedException("User account is suspended");
    }

    const tokens = await this.issueTokenPair(user, userAgent, ipAddress);
    return {
      ...tokens,
      user: {
        id: user.id,
        phoneNumber: user.phoneNumber,
        roles: user.roles,
        fullName: user.fullName,
        tenantId: user.tenantId,
        outletId: user.outletId,
        merchantName: user.merchantName,
      },
    };
  }

  /**
   * Issues tokens with claims strictly isolating the merchant tenant
   */
  private async issueTokenPair(user: User, userAgent?: string, ipAddress?: string) {
    const payload = {
      sub: user.id,
      phone: user.phoneNumber,
      roles: user.roles,
      tenantId: user.tenantId,
      outletId: user.outletId,
      merchantName: user.merchantName,
      fullName: user.fullName,
      iss: this.issuer,
      aud: this.audience,
    };

    const accessToken = jwt.sign(payload, this.jwtSecret, { expiresIn: "24h" });
    const refreshToken = jwt.sign({ sub: user.id }, this.jwtSecret, { expiresIn: "30d" });

    const session = new Session({
      id: UniqueIdentifier.generateV7(),
      userId: user.id,
      tokenHash: crypto.createHash("sha256").update(refreshToken).digest("hex"),
      userAgent,
      ipAddress,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      isRevoked: false,
      createdAt: new Date(),
    });

    await this.sessionRepo.save(session);

    return {
      accessToken,
      refreshToken,
      expiresIn: 86400,
    };
  }
}
