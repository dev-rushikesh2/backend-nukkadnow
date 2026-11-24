import { Injectable, UnauthorizedException } from "@nestjs/common";
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
  private readonly jwtSecret: string;
  private readonly issuer: string;
  private readonly audience: string;

  constructor(
    private readonly otpManager: OtpManagerService,
    private readonly userRepo: UserRepositoryPort,
    private readonly sessionRepo: SessionRepositoryPort
  ) {
    if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
      throw new Error("JWT_SECRET env var is required and must be >= 32 chars");
    }
    if (!process.env.JWT_ISSUER) {
      throw new Error("JWT_ISSUER env var is required");
    }
    if (!process.env.JWT_AUDIENCE) {
      throw new Error("JWT_AUDIENCE env var is required");
    }

    this.jwtSecret = process.env.JWT_SECRET;
    this.issuer = process.env.JWT_ISSUER;
    this.audience = process.env.JWT_AUDIENCE;
  }

  async requestLoginOtp(target: string): Promise<{ success: boolean; expiresInSeconds: number; devOtp?: string }> {
    const isEmail = target.includes("@");
    const cleanTarget = isEmail ? target.toLowerCase().trim() : PhoneNumber.create(target).getValue();
    const devOtp = await this.otpManager.requestOtp(cleanTarget);

    return {
      success: true,
      expiresInSeconds: 300,
      ...(process.env.NODE_ENV !== "production" && devOtp ? { devOtp } : {}),
    };
  }

  async verifyLoginOtp(target: string, otp: string, userAgent?: string, ipAddress?: string) {
    const isEmail = target.includes("@");
    const cleanTarget = isEmail ? target.toLowerCase().trim() : PhoneNumber.create(target).getValue();

    await this.otpManager.verifyOtp(cleanTarget, otp);

    let user: User | null = null;
    if (isEmail) {
      user = await this.userRepo.findByEmail(cleanTarget);
      if (!user) {
        // Auto-register pending merchant on email verification
        user = new User({
          id: UniqueIdentifier.generateV7(),
          phoneNumber: PhoneNumber.create("+919800000000"),
          email: cleanTarget,
          fullName: cleanTarget.split("@")[0].replace(/[._-]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
          status: "ACTIVE",
          roles: ["PENDING_MERCHANT"],
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        await this.userRepo.save(user);
      }
    } else {
      user = await this.userRepo.findByPhoneNumber(cleanTarget);
      if (!user) {
        // Auto-register new customer on first phone verification
        user = new User({
          id: UniqueIdentifier.generateV7(),
          phoneNumber: PhoneNumber.create(target),
          status: "ACTIVE",
          roles: ["CUSTOMER"],
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        await this.userRepo.save(user);
      }
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
        email: user.email,
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
      const decoded = jwt.verify(refreshToken, this.jwtSecret, {
        issuer: this.issuer,
        audience: this.audience,
      }) as any;
      const user = await this.userRepo.findById(decoded.sub);
      if (!user || !user.isActive()) {
        throw new UnauthorizedException("Invalid user or account suspended");
      }

      const tokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");
      const session = await this.sessionRepo.findByTokenHash(tokenHash);
      if (!session || !session.isValid()) {
        throw new UnauthorizedException("Revoked or invalid refresh session");
      }

      await this.sessionRepo.revokeAllForUser(user.id);
      return this.issueTokenPair(user);
    } catch (err) {
      throw new UnauthorizedException("Invalid refresh token");
    }
  }

  async logout(userId: string): Promise<void> {
    await this.sessionRepo.revokeAllForUser(userId);
  }

  private async issueTokenPair(user: User, userAgent?: string, ipAddress?: string) {
    const payload = {
      sub: user.id,
      phone: user.phoneNumber,
      roles: user.roles,
      tenantId: user.tenantId,
      outletId: user.outletId,
      merchantName: user.merchantName,
      fullName: user.fullName,
    };

    const accessToken = jwt.sign(payload, this.jwtSecret, {
      expiresIn: "15m",
      issuer: this.issuer,
      audience: this.audience,
    });
    const refreshToken = jwt.sign({ sub: user.id }, this.jwtSecret, {
      expiresIn: "30d",
      issuer: this.issuer,
      audience: this.audience,
    });

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
      expiresIn: 900,
    };
  }
}
