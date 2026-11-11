import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiBearerAuth } from "@nestjs/swagger";
import { AnalyticsService } from "../../../application/services/analytics.service";

@ApiTags("Operational Analytics & Reporting")
@Controller("api/v1/analytics")
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get("merchant/:outletId/cockpit")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get live merchant daily revenue cockpit" })
  async getMerchantCockpit(@Param("outletId") outletId: string) {
    return this.analyticsService.getMerchantCockpit(outletId);
  }

  @Get("admin/gmv")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get platform GMV and operational totals" })
  async getPlatformGmv() {
    return this.analyticsService.getPlatformGmv();
  }

  @Post("record")
  @ApiOperation({ summary: "Internal event consumer hook to record completed order facts" })
  async recordOrderFact(
    @Body() body: { outletId: string; amountPaise: number; prepMinutes: number }
  ) {
    return this.analyticsService.recordOrderFact(body.outletId, body.amountPaise, body.prepMinutes);
  }
}
