import {
  Controller,
  Post,
  Get,
  Body,
  Req,
  Headers,
  ServiceUnavailableException,
  UnauthorizedException,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { ProxyDispatcherService } from "../../clients/proxy-dispatcher.service";
import { Request } from "express";

@ApiTags("Merchant Authentication")
@Controller("api/v1/merchant/auth")
export class MerchantAuthController {
  private readonly identityServiceUrl =
    process.env.IDENTITY_SERVICE_URL as string; // asserted non-null at startup

  constructor(private readonly proxy: ProxyDispatcherService) {}

  /**
   * Step 1 — request an email or phone OTP.
   * Delegates entirely to identity-service. No fallback.
   */
  @Post("otp/request")
  @ApiOperation({ summary: "Request merchant login OTP via email or phone number" })
  @ApiResponse({ status: 200, description: "OTP dispatched" })
  async requestOtp(@Body() body: { email?: string; phoneNumber?: string }) {
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/auth/otp/request", {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  /**
   * Step 2 — verify OTP and receive a scoped merchant JWT.
   * No fallback, no seeded bypass. If identity-service is unreachable the
   * ProxyDispatcherService throws ServiceUnavailableException automatically.
   */
  @Post("otp/verify")
  @ApiOperation({ summary: "Verify OTP and issue scoped merchant access token" })
  @ApiResponse({ status: 200, description: "Authenticated — tokens issued" })
  @ApiResponse({ status: 401, description: "Invalid or expired OTP" })
  @ApiResponse({ status: 503, description: "Identity service unavailable" })
  async verifyOtp(@Body() body: { email?: string; phoneNumber?: string; otp: string }, @Req() req: Request) {
    const forwardedHeaders: Record<string, string> = {};
    if (req.headers["user-agent"]) forwardedHeaders["user-agent"] = req.headers["user-agent"] as string;
    if (req.headers["x-forwarded-for"]) forwardedHeaders["x-forwarded-for"] = req.headers["x-forwarded-for"] as string;
    if (req.headers["x-correlation-id"]) forwardedHeaders["x-correlation-id"] = req.headers["x-correlation-id"] as string;

    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/auth/otp/verify", {
      method: "POST",
      headers: forwardedHeaders,
      body: JSON.stringify(body),
    });
  }

  /**
   * Rotate the refresh token pair.
   */
  @Post("token/refresh")
  @ApiOperation({ summary: "Rotate merchant refresh token" })
  async refreshToken(@Body() body: { refreshToken: string }) {
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/auth/token/refresh", {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  /**
   * Revoke the current session.
   */
  @Post("logout")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Revoke current merchant session" })
  async logout(@Req() req: Request) {
    const authHeader = req.headers.authorization;
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/auth/logout", {
      method: "POST",
      headers: authHeader ? { authorization: authHeader } : {},
    });
  }

  /**
   * Return the authenticated merchant's current session context.
   */
  @Get("me")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get current merchant session context from identity service" })
  async getMe(@Req() req: Request) {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new UnauthorizedException("No token provided");
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/auth/me", {
      method: "GET",
      headers: { authorization: authHeader },
    });
  }
}
