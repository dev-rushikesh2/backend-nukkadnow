import { Controller, Get, Post, Body, Param, Req, UnauthorizedException } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { SubscriptionService } from "../../../application/services/subscription.service";
import { SubscribePlanDto } from "../../../application/dto/subscription.dto";

@ApiTags("SaaS Subscriptions & Entitlements")
@Controller("api/v1/subscriptions")
export class SubscriptionsController {
  constructor(private readonly subService: SubscriptionService) {}

  @Get("plans")
  @ApiOperation({ summary: "List available merchant SaaS subscription tiers" })
  async getPlans() {
    return this.subService.listPlans();
  }

  @Post("subscribe")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Subscribe merchant to SaaS tier" })
  @ApiResponse({ status: 201, description: "Subscribed" })
  async subscribe(@Body() dto: SubscribePlanDto, @Req() req: any) {
    if (!req.user?.tenantId) throw new UnauthorizedException("Merchant authentication required");
    return this.subService.subscribe(req.user.tenantId, dto);
  }

  @Get("entitlements/:merchantId/:feature")
  @ApiOperation({ summary: "Authoritative server-side entitlement check" })
  async checkEntitlement(
    @Param("merchantId") merchantId: string,
    @Param("feature") feature: "QR_ORDERING" | "MAX_PRODUCTS"
  ) {
    return this.subService.checkEntitlement(merchantId, feature);
  }
}
