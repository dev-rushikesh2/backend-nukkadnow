import { Controller, Post, Body, Req, UseGuards } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { ProxyDispatcherService } from "../../clients/proxy-dispatcher.service";
import { RateLimitGuard } from "../../common/throttling/rate-limit.guard";
import { Request } from "express";

@ApiTags("Customer Authentication")
@Controller("api/v1/customer/auth")
@UseGuards(RateLimitGuard)
export class CustomerAuthController {
  private readonly identityServiceUrl = process.env.IDENTITY_SERVICE_URL || "http://localhost:4001";

  constructor(private readonly proxyDispatcher: ProxyDispatcherService) {}

  @Post("otp/request")
  @ApiOperation({ summary: "Request login/signup OTP via phone number" })
  @ApiResponse({ status: 200, description: "OTP generated" })
  async requestOtp(@Body() body: any) {
    return this.proxyDispatcher.dispatch(this.identityServiceUrl, "/api/v1/auth/otp/request", {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  @Post("otp/verify")
  @ApiOperation({ summary: "Verify OTP and issue session tokens" })
  @ApiResponse({ status: 200, description: "Authenticated successfully" })
  async verifyOtp(@Body() body: any, @Req() req: Request) {
    const forwardedHeaders: Record<string, string> = {};
    if (req.headers["user-agent"]) forwardedHeaders["user-agent"] = req.headers["user-agent"] as string;
    if (req.headers["x-forwarded-for"]) forwardedHeaders["x-forwarded-for"] = req.headers["x-forwarded-for"] as string;

    return this.proxyDispatcher.dispatch(this.identityServiceUrl, "/api/v1/auth/otp/verify", {
      method: "POST",
      headers: forwardedHeaders,
      body: JSON.stringify(body),
    });
  }

  @Post("token/refresh")
  @ApiOperation({ summary: "Rotate refresh token" })
  async refreshToken(@Body() body: any) {
    return this.proxyDispatcher.dispatch(this.identityServiceUrl, "/api/v1/auth/token/refresh", {
      method: "POST",
      body: JSON.stringify(body),
    });
  }
}
