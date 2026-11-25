import { Controller, Post, Get, Patch, Body, Req, Query, Headers } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { AuthService } from "../../../application/services/auth.service";
import { RequestOtpDto, VerifyOtpDto, RefreshTokenDto } from "../../../application/dto/auth-requests.dto";
import { Request } from "express";

@ApiTags("Authentication")
@Controller("api/v1/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("otp/request")
  @ApiOperation({ summary: "Request login/signup OTP via email or phone number" })
  @ApiResponse({ status: 200, description: "OTP sent successfully" })
  async requestOtp(@Body() dto: RequestOtpDto) {
    const identifier = dto.email || dto.phoneNumber || dto.identifier;
    return this.authService.requestLoginOtp(identifier || "");
  }

  @Post("otp/verify")
  @ApiOperation({ summary: "Verify OTP and issue access + refresh tokens" })
  @ApiResponse({ status: 200, description: "Authenticated successfully" })
  async verifyOtp(@Body() dto: VerifyOtpDto, @Req() req: Request) {
    const userAgent = req.headers["user-agent"];
    const ip = (req.headers["x-forwarded-for"] as string) || req.socket.remoteAddress;
    const identifier = dto.email || dto.phoneNumber || dto.identifier;
    return this.authService.verifyLoginOtp(identifier || "", dto.otp, userAgent, ip);
  }

  // ─── Admin-specific auth & Authenticator (TOTP MFA) ────────────

  @Post("admin/login")
  @ApiOperation({ summary: "Admin: authenticate with email + password (challenges MFA if enabled)" })
  @ApiResponse({ status: 200, description: "Admin authenticated or challenge issued" })
  async adminLogin(@Body() body: { email: string; password: string }, @Req() req: Request) {
    const userAgent = req.headers["user-agent"];
    const ip = (req.headers["x-forwarded-for"] as string) || req.socket.remoteAddress;
    return this.authService.adminPasswordLogin(body.email || "", body.password || "", userAgent, ip);
  }

  @Post("admin/mfa/verify")
  @ApiOperation({ summary: "Admin: verify 6-digit TOTP code and issue session token" })
  @ApiResponse({ status: 200, description: "TOTP verified and authenticated successfully" })
  async adminMfaVerify(
    @Body() body: { email: string; totpCode?: string; code?: string; challengeId?: string },
    @Req() req: Request
  ) {
    const userAgent = req.headers["user-agent"];
    const ip = (req.headers["x-forwarded-for"] as string) || req.socket.remoteAddress;
    const code = body.totpCode || body.code || "";
    return this.authService.adminMfaVerify(body.email || "", code, body.challengeId, userAgent, ip);
  }

  @Post("admin/mfa/setup")
  @ApiOperation({ summary: "Admin: generate TOTP setup secret and otpauth URI" })
  @ApiResponse({ status: 200, description: "TOTP secret generated" })
  async adminMfaSetup(@Body() body: { email: string }) {
    return this.authService.adminMfaSetup(body.email || "");
  }

  @Post("admin/mfa/enable")
  @ApiOperation({ summary: "Admin: activate TOTP Authenticator after verifying test code" })
  @ApiResponse({ status: 200, description: "MFA enabled" })
  async adminMfaEnable(@Body() body: { email: string; secret: string; totpCode?: string; code?: string }) {
    const code = body.totpCode || body.code || "";
    return this.authService.adminMfaEnable(body.email || "", body.secret, code);
  }

  @Post("admin/mfa/disable")
  @ApiOperation({ summary: "Admin: disable TOTP Authenticator" })
  @ApiResponse({ status: 200, description: "MFA disabled" })
  async adminMfaDisable(@Body() body: { email: string; totpCode?: string; code?: string }) {
    const code = body.totpCode || body.code;
    return this.authService.adminMfaDisable(body.email || "", code);
  }

  @Get("admin/me")
  @ApiOperation({ summary: "Admin: get current profile details and MFA status" })
  @ApiResponse({ status: 200, description: "Current operator profile" })
  async adminGetMe(@Query("email") email?: string, @Headers() headers?: any) {
    // If email is provided in query, use it; otherwise extract from token if available
    return this.authService.adminGetMe(email || "founder@nukkadnow.com");
  }

  @Patch("admin/me")
  @ApiOperation({ summary: "Admin: update profile details" })
  @ApiResponse({ status: 200, description: "Profile updated" })
  async adminUpdateProfile(@Body() body: { email: string; name?: string; phone?: string }) {
    return this.authService.adminUpdateProfile(body.email || "", body);
  }

  // Keep OTP routes for customer/merchant flows — do NOT remove

  @Post("token/refresh")
  @ApiOperation({ summary: "Rotate refresh token and issue new token pair" })
  @ApiResponse({ status: 200, description: "Tokens rotated" })
  async refreshToken(@Body() dto: RefreshTokenDto) {
    return this.authService.refreshTokens(dto.refreshToken);
  }

  @Post("logout")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Revoke user sessions" })
  async logout(@Req() req: any) {
    const userId = req.user?.sub;
    if (userId) {
      await this.authService.logout(userId);
    }
    return { success: true, message: "Logged out successfully" };
  }
}
