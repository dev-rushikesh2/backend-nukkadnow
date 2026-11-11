import { Controller, Get } from "@nestjs/common";
import { ApiTags, ApiOperation } from "@nestjs/swagger";

@ApiTags("Merchant BFF")
@Controller("api/v1/merchant")
export class MerchantController {
  @Get("dashboard")
  @ApiOperation({ summary: "Get merchant operational cockpit aggregate" })
  getDashboardSummary() {
    return {
      activeOrdersCount: 0,
      todayRevenuePaise: 0,
      pendingPickupCount: 0,
    };
  }
}
