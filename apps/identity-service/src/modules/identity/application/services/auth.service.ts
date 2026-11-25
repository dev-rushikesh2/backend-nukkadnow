import { Injectable, UnauthorizedException, BadRequestException, ForbiddenException } from "@nestjs/common";
import { OtpManagerService } from "../../infrastructure/otp/otp-manager.service";
import { TotpService } from "../../infrastructure/totp/totp.service";
import { UserRepositoryPort } from "../../domain/repositories/user.repository.port";
import { SessionRepositoryPort } from "../../domain/repositories/session.repository.port";
import { User } from "../../domain/entities/user.entity";
import { Session } from "../../domain/entities/session.entity";
import { PhoneNumber } from "../../domain/value-objects/phone-number.vo";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";
import * as jwt from "jsonwebtoken";
import * as crypto from "crypto";
import * as bcrypt from "bcryptjs";

@Injectable()
export class AuthService {
  private readonly jwtSecret: string;
  private readonly issuer: string;
  private readonly audience: string;

  constructor(
    private readonly otpManager: OtpManagerService,
    private readonly totpService: TotpService,
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

  /**
   * Resolve default hierarchy role, permissions, and geo assignment for administrative accounts.
   * By default, MFA is disabled initially so users log in directly and then activate Authenticator in profile.
   */
  /**
   * Resolve default hierarchy role, permissions, and geo assignment for administrative accounts.
   * By default, MFA is disabled initially so users log in directly and then activate Authenticator in profile.
   */
  private getAdminAccountDefaults(email: string) {
    const clean = email.toLowerCase().trim();
    if (clean.includes("founder")) {
      return {
        role: "ROOT_ADMIN",
        hierarchyLevel: 1,
        name: "Rajesh Nukkad (Founder)",
        phone: "+919800000001",
        geoAssignment: { cityName: "All Cities (Global)", cityCode: "GLOBAL", state: "Maharashtra" },
        requiresMfa: false,
        isRootProtected: true,
      };
    }
    if (clean.includes("root")) {
      return {
        role: "ROOT_ADMIN",
        hierarchyLevel: 1,
        name: "Rushi Platform Architect",
        phone: "+919800000002",
        geoAssignment: { cityName: "All Cities (Global)", cityCode: "GLOBAL", state: "Maharashtra" },
        requiresMfa: false,
        isRootProtected: true,
      };
    }
    if (clean.includes("admin@") || clean.includes("rushi")) {
      return {
        role: "SUPER_ADMIN",
        hierarchyLevel: 2,
        name: "Rushi Platform Architect",
        phone: "+919800000003",
        geoAssignment: { cityName: "All Cities (Global)", cityCode: "GLOBAL", state: "Maharashtra" },
        requiresMfa: false,
        isRootProtected: false,
      };
    }
    if (clean.includes("akola")) {
      return {
        role: "CITY_OPERATIONS_MANAGER",
        hierarchyLevel: 3,
        name: "Rajesh Sharma (Akola Lead)",
        phone: "+919823000012",
        geoAssignment: { cityName: "Akola", cityCode: "IN-MH-AKL", state: "Maharashtra" },
        requiresMfa: false,
        isRootProtected: false,
      };
    }
    if (clean.includes("amravati")) {
      return {
        role: "CITY_OPERATIONS_MANAGER",
        hierarchyLevel: 3,
        name: "Pooja Deshmukh (Amravati Lead)",
        phone: "+919823000013",
        geoAssignment: { cityName: "Amravati", cityCode: "IN-MH-AMR", state: "Maharashtra" },
        requiresMfa: false,
        isRootProtected: false,
      };
    }
    if (clean.includes("nagpur")) {
      return {
        role: "CITY_OPERATIONS_MANAGER",
        hierarchyLevel: 3,
        name: "Amit Deshpande (Nagpur Lead)",
        phone: "+919823000011",
        geoAssignment: { cityName: "Nagpur", cityCode: "IN-MH-NGP", state: "Maharashtra" },
        requiresMfa: false,
        isRootProtected: false,
      };
    }
    if (clean.includes("pune")) {
      return {
        role: "CITY_OPERATIONS_MANAGER",
        hierarchyLevel: 3,
        name: "Sneha Kulkarni (Pune Lead)",
        phone: "+919823000014",
        geoAssignment: { cityName: "Pune", cityCode: "IN-MH-PUN", state: "Maharashtra" },
        requiresMfa: false,
        isRootProtected: false,
      };
    }
    if (clean.includes("nashik")) {
      return {
        role: "CITY_OPERATIONS_MANAGER",
        hierarchyLevel: 3,
        name: "Vikram Shinde (Nashik Lead)",
        phone: "+919823000015",
        geoAssignment: { cityName: "Nashik", cityCode: "IN-MH-NSK", state: "Maharashtra" },
        requiresMfa: false,
        isRootProtected: false,
      };
    }
    if (clean.includes("mumbai")) {
      return {
        role: "CITY_OPERATIONS_MANAGER",
        hierarchyLevel: 3,
        name: "Rohit Sawant (Mumbai Lead)",
        phone: "+919823000016",
        geoAssignment: { cityName: "Mumbai", cityCode: "IN-MH-MUM", state: "Maharashtra" },
        requiresMfa: false,
        isRootProtected: false,
      };
    }
    if (clean.includes("kyc") || clean.includes("sunita")) {
      return {
        role: "VERIFICATION_STAFF",
        hierarchyLevel: 4,
        name: "Sunita KYC Compliance",
        phone: "+919823000021",
        geoAssignment: { cityName: "Nagpur", cityCode: "IN-MH-NGP", state: "Maharashtra" },
        requiresMfa: false,
        isRootProtected: false,
      };
    }
    if (clean.includes("support") || clean.includes("ananya")) {
      return {
        role: "SUPPORT_STAFF",
        hierarchyLevel: 4,
        name: "Ananya Support Desk",
        phone: "+919823000022",
        geoAssignment: { cityName: "Global Support", cityCode: "GLOBAL", state: "Maharashtra" },
        requiresMfa: false,
        isRootProtected: false,
      };
    }
    if (clean.includes("finance")) {
      return {
        role: "FINANCE_AUDITOR",
        hierarchyLevel: 4,
        name: "Pradeep Joshi (Finance Auditor)",
        phone: "+919823000023",
        geoAssignment: { cityName: "Global Finance", cityCode: "GLOBAL", state: "Maharashtra" },
        requiresMfa: false,
        isRootProtected: false,
      };
    }
    return {
      role: "SUPER_ADMIN",
      hierarchyLevel: 2,
      name: clean.split("@")[0].replace(/[._-]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      phone: "+919800000099",
      geoAssignment: { cityName: "All Cities (Global)", cityCode: "GLOBAL", state: "Maharashtra" },
      requiresMfa: false,
      isRootProtected: false,
    };
  }

  /**
   * Return full permissions list for an admin hierarchy role.
   */
  public getRolePermissions(role: string): string[] {
    const allPermissions = [
      "admin:merchants:read",
      "admin:merchants:create",
      "admin:merchants:update",
      "admin:merchants:suspend",
      "admin:merchants:terminate",
      "admin:merchants:export",
      "admin:kyc:read",
      "admin:kyc:review",
      "admin:kyc:approve",
      "admin:kyc:reject",
      "admin:kyc:re_verify",
      "admin:outlets:read",
      "admin:outlets:manage",
      "admin:outlets:override_hours",
      "admin:outlets:geofence_edit",
      "admin:localities:read",
      "admin:localities:manage",
      "admin:categories:manage",
      "admin:catalog:read",
      "admin:catalog:moderate",
      "admin:catalog:takedown",
      "admin:orders:read",
      "admin:orders:intervene",
      "admin:orders:force_cancel",
      "admin:payments:read",
      "admin:payments:reconcile",
      "admin:payments:webhook_retry",
      "admin:refunds:read",
      "admin:refunds:approve_low",
      "admin:refunds:approve_high",
      "admin:disputes:resolve",
      "admin:subscriptions:read",
      "admin:subscriptions:manage",
      "admin:pricing:manage",
      "admin:support:read",
      "admin:support:assign",
      "admin:support:respond",
      "admin:support:escalate",
      "admin:support:resolve",
      "admin:reviews:read",
      "admin:reviews:moderate",
      "admin:notifications:send_broadcast",
      "admin:notifications:templates_manage",
      "admin:analytics:read",
      "admin:analytics:financial_export",
      "admin:platform:users_read",
      "admin:platform:users_manage",
      "admin:platform:roles_manage",
      "admin:feature_flags:read",
      "admin:feature_flags:toggle",
      "admin:system_health:read",
      "admin:system:maintenance_toggle",
      "admin:audit_logs:read",
      "admin:audit:unmask_pii",
      "admin:settings:manage",
    ];

    switch (role) {
      case "ROOT_ADMIN":
        return allPermissions;
      case "SUPER_ADMIN":
        return allPermissions.filter((p) => p !== "admin:platform:roles_manage");
      case "CITY_OPERATIONS_MANAGER":
        return [
          "admin:merchants:read",
          "admin:merchants:update",
          "admin:merchants:suspend",
          "admin:kyc:read",
          "admin:outlets:read",
          "admin:outlets:manage",
          "admin:outlets:override_hours",
          "admin:localities:read",
          "admin:catalog:read",
          "admin:catalog:moderate",
          "admin:orders:read",
          "admin:orders:intervene",
          "admin:payments:read",
          "admin:refunds:read",
          "admin:refunds:approve_low",
          "admin:subscriptions:read",
          "admin:support:read",
          "admin:support:assign",
          "admin:support:respond",
          "admin:support:resolve",
          "admin:reviews:read",
          "admin:reviews:moderate",
          "admin:notifications:send_broadcast",
          "admin:analytics:read",
          "admin:audit_logs:read",
        ];
      case "VERIFICATION_STAFF":
        return [
          "admin:merchants:read",
          "admin:kyc:read",
          "admin:kyc:review",
          "admin:kyc:approve",
          "admin:kyc:reject",
          "admin:outlets:read",
          "admin:catalog:read",
          "admin:support:read",
          "admin:support:respond",
          "admin:audit_logs:read",
        ];
      case "SUPPORT_STAFF":
        return [
          "admin:merchants:read",
          "admin:outlets:read",
          "admin:orders:read",
          "admin:orders:intervene",
          "admin:payments:read",
          "admin:refunds:read",
          "admin:support:read",
          "admin:support:respond",
          "admin:support:escalate",
          "admin:support:resolve",
          "admin:reviews:read",
          "admin:reviews:moderate",
          "admin:audit_logs:read",
          "admin:audit:unmask_pii",
        ];
      case "FINANCE_AUDITOR":
        return [
          "admin:payments:read",
          "admin:payments:reconcile",
          "admin:refunds:read",
          "admin:subscriptions:read",
          "admin:audit_logs:read",
        ];
      default:
        return allPermissions;
    }
  }

  /**
   * Admin-only: authenticate with email + password.
   * If MFA is enabled on the account, issues an MFA challenge ticket.
   * If MFA is not required (default until activated), returns authenticated session directly.
   */
  async adminPasswordLogin(email: string, password: string, userAgent?: string, ipAddress?: string) {
    const cleanEmail = email.toLowerCase().trim();

    // Derive env-var key from email
    const slug = cleanEmail.replace(/[@.]/g, "_");
    const perAccountHash = process.env[`ADMIN_PWD_${slug.toUpperCase()}`];
    const masterHash = process.env.ADMIN_MASTER_PASSWORD_HASH;
    const storedHash = perAccountHash || masterHash;

    if (!storedHash) {
      if (process.env.NODE_ENV === "production") {
        throw new UnauthorizedException("Admin credentials not configured");
      }
      // fall through in dev
    } else {
      const valid = await bcrypt.compare(password, storedHash);
      if (!valid) {
        throw new UnauthorizedException("Invalid email or password");
      }
    }

    const accountDefaults = this.getAdminAccountDefaults(cleanEmail);
    const primaryRole = accountDefaults.role || "ROOT_ADMIN";

    // Look up user; auto-create if not found (dev/staging)
    let user = await this.userRepo.findByEmail(cleanEmail);
    if (!user) {
      if (process.env.NODE_ENV === "production") {
        throw new UnauthorizedException("Admin account not found");
      }
      const phone = accountDefaults.phone || `+919800${crypto.createHash('md5').update(cleanEmail).digest('hex').replace(/\D/g, '').padEnd(6, '0').slice(0, 6)}`;
      user = new User({
        id: UniqueIdentifier.generateV7(),
        phoneNumber: PhoneNumber.create(phone),
        email: cleanEmail,
        fullName: accountDefaults.name,
        status: "ACTIVE",
        roles: [primaryRole],
        mfaEnabled: false, // Disabled initially; enabled when operator activates Authenticator in profile
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await this.userRepo.save(user);
    } else {
      // Ensure user entity has statutory role
      if (!user.roles || user.roles.length === 0 || !user.roles.includes(primaryRole)) {
        user.setRoles([primaryRole]);
        await this.userRepo.save(user);
      }
    }

    if (!user.isActive()) {
      throw new UnauthorizedException("Admin account is suspended");
    }

    // Check whether MFA has been activated for this operator (requires both flag enabled AND Authenticator secret paired)
    const mfaRequired = user.isMfaEnabled() && Boolean(user.mfaSecret);

    if (mfaRequired) {
      const challengeId = UniqueIdentifier.generateV7();
      return {
        success: true,
        requiresMfa: true,
        mfaRequired: true,
        challengeId,
        email: cleanEmail,
        mfaType: "TOTP",
        message: "Multi-factor authentication required. Please enter your 6-digit TOTP code.",
      };
    }

    // Direct login without MFA (e.g. Support Staff or MFA disabled)
    const tokens = await this.issueTokenPair(user, userAgent, ipAddress);
    const permissions = this.getRolePermissions(primaryRole);

    return {
      success: true,
      requiresMfa: false,
      token: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      expiresAt: Date.now() + tokens.expiresIn * 1000,
      operator: {
        operatorId: user.id,
        name: user.fullName || accountDefaults.name,
        email: cleanEmail,
        role: primaryRole,
        permissions,
        geoAssignment: accountDefaults.geoAssignment,
        isRootProtected: accountDefaults.isRootProtected,
        mfaVerified: false,
      },
    };
  }

  /**
   * Verify 6-digit TOTP code for MFA challenge during Admin login.
   */
  async adminMfaVerify(email: string, totpCode: string, challengeId?: string, userAgent?: string, ipAddress?: string) {
    const cleanEmail = email.toLowerCase().trim();
    const cleanCode = (totpCode || "").trim().replace(/\s+/g, "");

    if (!cleanCode || cleanCode.length !== 6) {
      throw new BadRequestException("A 6-digit TOTP security code is required.");
    }

    const user = await this.userRepo.findByEmail(cleanEmail);
    if (!user) {
      throw new UnauthorizedException("Admin account not found");
    }

    if (!user.isActive()) {
      throw new UnauthorizedException("Admin account is suspended");
    }

    const secret = user.mfaSecret || this.totpService.getDeterministicSecret(cleanEmail);
    const isValid =
      this.totpService.verifyTotp(secret, cleanCode) ||
      (process.env.NODE_ENV !== "production" && cleanCode === "123456");

    if (!isValid) {
      throw new UnauthorizedException("Invalid 6-digit TOTP security code. Please check your authenticator app and try again.");
    }

    const accountDefaults = this.getAdminAccountDefaults(cleanEmail);
    const primaryRole = accountDefaults.role || (Array.isArray(user.roles) && user.roles.length > 0 ? user.roles[0] : "ROOT_ADMIN");
    if (!user.roles || user.roles.length === 0 || !user.roles.includes(primaryRole)) {
      user.setRoles([primaryRole]);
      await this.userRepo.save(user);
    }
    const tokens = await this.issueTokenPair(user, userAgent, ipAddress);
    const permissions = this.getRolePermissions(primaryRole);

    const operatorPayload = {
      operatorId: user.id,
      name: user.fullName || accountDefaults.name,
      email: cleanEmail,
      role: primaryRole,
      permissions,
      geoAssignment: accountDefaults.geoAssignment,
      isRootProtected: accountDefaults.isRootProtected,
      mfaVerified: true,
    };

    return {
      success: true,
      token: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      expiresAt: Date.now() + tokens.expiresIn * 1000,
      operator: operatorPayload,
      data: {
        token: tokens.accessToken,
        refreshToken: tokens.refreshToken,
        expiresAt: Date.now() + tokens.expiresIn * 1000,
        operator: operatorPayload,
      },
    };
  }

  /**
   * Generate an RFC 6238 TOTP setup key and otpauth URI for configuring an Authenticator app.
   */
  async adminMfaSetup(email: string) {
    const cleanEmail = email.toLowerCase().trim();
    const setup = this.totpService.generateSecret(cleanEmail, "NukkadNow Admin");
    return {
      success: true,
      secret: setup.secret,
      otpauthUrl: setup.otpauthUrl,
      issuer: "NukkadNow",
      account: cleanEmail,
    };
  }

  /**
   * Enable TOTP Authenticator for an admin operator after verifying a test code.
   */
  async adminMfaEnable(email: string, secret: string, totpCode: string) {
    const cleanEmail = email.toLowerCase().trim();
    const cleanCode = (totpCode || "").trim().replace(/\s+/g, "");

    const isValid =
      this.totpService.verifyTotp(secret, cleanCode) ||
      (process.env.NODE_ENV !== "production" && cleanCode === "123456");

    if (!isValid) {
      throw new BadRequestException("Verification token does not match. Please verify the code generated in your authenticator app.");
    }

    const user = await this.userRepo.findByEmail(cleanEmail);
    if (!user) {
      throw new UnauthorizedException("User not found");
    }

    user.enableMfa(secret);
    await this.userRepo.save(user);

    return {
      success: true,
      mfaEnabled: true,
      message: "Two-Factor Authenticator (TOTP) successfully activated for this administrator account.",
    };
  }

  /**
   * Disable TOTP Authenticator for an admin operator.
   */
  async adminMfaDisable(email: string, totpCode?: string) {
    const cleanEmail = email.toLowerCase().trim();
    const accountDefaults = this.getAdminAccountDefaults(cleanEmail);

    if (accountDefaults.isRootProtected) {
      throw new ForbiddenException("Two-Factor Authentication is permanently mandated for Level 1 Root Admin accounts.");
    }

    const user = await this.userRepo.findByEmail(cleanEmail);
    if (!user) {
      throw new UnauthorizedException("User not found");
    }

    if (totpCode && user.mfaSecret) {
      const isValid =
        this.totpService.verifyTotp(user.mfaSecret, totpCode) ||
        (process.env.NODE_ENV !== "production" && totpCode === "123456");
      if (!isValid) {
        throw new UnauthorizedException("Invalid security token.");
      }
    }

    user.disableMfa();
    await this.userRepo.save(user);

    return {
      success: true,
      mfaEnabled: false,
      message: "Two-Factor Authentication disabled.",
    };
  }

  /**
   * Return current admin operator details including MFA status.
   */
  async adminGetMe(email: string) {
    const cleanEmail = email.toLowerCase().trim();
    const accountDefaults = this.getAdminAccountDefaults(cleanEmail);
    const user = await this.userRepo.findByEmail(cleanEmail);

    const mfaActive = user ? user.isMfaEnabled() : false;
    const primaryRole = accountDefaults.role || (user?.roles?.[0] as string) || "ROOT_ADMIN";
    const permissions = this.getRolePermissions(primaryRole);

    return {
      id: user?.id || "adm-001",
      name: user?.fullName || accountDefaults.name,
      email: cleanEmail,
      phone: user?.phoneNumber || accountDefaults.phone || "+91 98230 11223",
      roleCode: primaryRole,
      role: primaryRole,
      permissions,
      status: user?.status || "ACTIVE",
      mfaEnabled: mfaActive,
      isRootProtected: accountDefaults.isRootProtected,
      geoScope: accountDefaults.geoAssignment?.cityName || "Global Scope",
      geoAssignment: accountDefaults.geoAssignment,
      avatarUrl: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user?.fullName || accountDefaults.name)}`,
      lastLoginAt: new Date().toISOString(),
      lastLoginIp: "127.0.0.1",
    };
  }

  /**
   * Update personal profile details for admin operator.
   */
  async adminUpdateProfile(email: string, data: { name?: string; phone?: string }) {
    const cleanEmail = email.toLowerCase().trim();
    const user = await this.userRepo.findByEmail(cleanEmail);
    if (user && data.name) {
      user.setFullName(data.name.trim());
      await this.userRepo.save(user);
    }
    return this.adminGetMe(cleanEmail);
  }

  async requestLoginOtp(target: string): Promise<{ success: boolean; expiresInSeconds: number; devOtp?: string }> {
    const isEmail = target.includes("@");
    const cleanTarget = isEmail ? target.toLowerCase().trim() : PhoneNumber.create(target).getValue();
    const devOtp = await this.otpManager.requestOtp(cleanTarget);

    if (isEmail && devOtp) {
      const notifUrl = process.env.NOTIFICATION_SERVICE_URL || "http://localhost:4009";
      fetch(`${notifUrl}/api/v1/notifications/send-email-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanTarget, otp: devOtp }),
      }).catch(() => {});
    }

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

    let merchantCtx: any = null;
    try {
      const merchantUrl = process.env.MERCHANT_SERVICE_URL || "http://localhost:4002";
      const q = isEmail ? `email=${encodeURIComponent(cleanTarget)}` : `phone=${encodeURIComponent(cleanTarget)}`;
      const res = await fetch(`${merchantUrl}/api/v1/merchants/internal/lookup?${q}`);
      if (res.ok) merchantCtx = await res.json();
    } catch {}

    let user: User | null = null;
    if (isEmail) {
      user = await this.userRepo.findByEmail(cleanTarget);
      if (!user) {
        const uniquePhone =
          merchantCtx?.phone ||
          `+9197${crypto.createHash("md5").update(cleanTarget).digest("hex").replace(/\D/g, "").padEnd(8, "0").slice(0, 8)}`;
        user = new User({
          id: UniqueIdentifier.generateV7(),
          phoneNumber: PhoneNumber.create(uniquePhone),
          email: cleanTarget,
          fullName: merchantCtx?.ownerName || cleanTarget.split("@")[0].replace(/[._-]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
          status: "ACTIVE",
          roles: [merchantCtx?.approved ? "MERCHANT_OWNER" : "PENDING_MERCHANT"],
          tenantId: merchantCtx?.tenantId,
          outletId: merchantCtx?.outletId,
          merchantName: merchantCtx?.merchantName,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        await this.userRepo.save(user);
      } else if (merchantCtx?.approved && merchantCtx?.tenantId) {
        user.setTenantContext(merchantCtx.tenantId, merchantCtx.outletId, merchantCtx.merchantName);
        if (!user.roles.includes("MERCHANT_OWNER")) {
          user.setRoles(["MERCHANT_OWNER"]);
        }
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
          roles: [merchantCtx?.approved ? "MERCHANT_OWNER" : "CUSTOMER"],
          tenantId: merchantCtx?.tenantId,
          outletId: merchantCtx?.outletId,
          merchantName: merchantCtx?.merchantName,
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
      email: user.email,
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
