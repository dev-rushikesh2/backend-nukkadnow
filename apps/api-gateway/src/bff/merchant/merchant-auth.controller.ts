import { Controller, Post, Get, Body, Req, Headers, UseGuards } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { ProxyDispatcherService } from "../../clients/proxy-dispatcher.service";
import { Request } from "express";

@ApiTags("Merchant Authentication & Tenant Authorization")
@Controller("api/v1/merchant/auth")
export class MerchantAuthController {
  private readonly identityServiceUrl = process.env.IDENTITY_SERVICE_URL || "http://localhost:4001";

  constructor(private readonly proxyDispatcher: ProxyDispatcherService) {}

  @Get("merchants")
  @ApiOperation({ summary: "List available local seeded merchants & admin for authentication / testing" })
  async listAvailableMerchants() {
    return this.proxyDispatcher.dispatch(this.identityServiceUrl, "/api/v1/auth/merchants", {
      method: "GET",
    });
  }

  @Post("login")
  @ApiOperation({ summary: "Authenticate as merchant or admin using phone number" })
  @ApiResponse({ status: 200, description: "Authenticated with scoped tenant token" })
  async login(@Body() body: { phoneNumber: string }, @Req() req: Request) {
    const forwardedHeaders: Record<string, string> = {};
    if (req.headers["user-agent"]) forwardedHeaders["user-agent"] = req.headers["user-agent"] as string;
    if (req.headers["x-forwarded-for"]) forwardedHeaders["x-forwarded-for"] = req.headers["x-forwarded-for"] as string;

    return this.proxyDispatcher.dispatch(this.identityServiceUrl, "/api/v1/auth/merchant/login", {
      method: "POST",
      headers: forwardedHeaders,
      body: JSON.stringify(body),
    });
  }

  @Post("otp/request")
  @ApiOperation({ summary: "Request login OTP for merchant" })
  async requestOtp(@Body() body: any) {
    return this.proxyDispatcher.dispatch(this.identityServiceUrl, "/api/v1/auth/otp/request", {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  @Post("otp/verify")
  @ApiOperation({ summary: "Verify OTP and issue scoped merchant token" })
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

  @Get("me")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get currently authenticated merchant session and tenant scope" })
  async getMe(@Req() req: any) {
    return {
      authenticated: !!req.user,
      user: req.user || null,
    };
  }
}
