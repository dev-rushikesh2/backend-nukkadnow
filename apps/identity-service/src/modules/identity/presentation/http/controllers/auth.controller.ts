import { Controller, Post, Body, Req } from "@nestjs/common";
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
