import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags, ApiOperation } from "@nestjs/swagger";

@ApiTags("Customer BFF")
@Controller("api/v1/customer")
export class CustomerController {
  @Get("outlets/nearby")
  @ApiOperation({ summary: "Get nearby merchants and outlets for customer feed" })
  getNearbyOutlets() {
    return {
      success: true,
      data: [],
      meta: { locality: "Nagpur Central" },
    };
  }

  @Get("outlets/:id/feed")
  @ApiOperation({ summary: "Get aggregated outlet storefront profile and live catalogue" })
  getOutletStorefront(@Param("id") id: string) {
    return {
      outletId: id,
      name: "Sample Nukkad Kirana",
      isOpen: true,
      queueEstimateMinutes: 5,
    };
  }
}
