import { Controller, Get, Post, Patch, Body, Param, Query, Req, Headers } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { ProxyDispatcherService } from "../../clients/proxy-dispatcher.service";

@ApiTags("Merchant BFF")
@Controller("api/v1/merchant")
export class MerchantController {
  private readonly catalogServiceUrl = process.env.CATALOG_SERVICE_URL || "http://localhost:3002";

  constructor(private readonly proxy: ProxyDispatcherService) {}

  @Get("dashboard")
  @ApiOperation({ summary: "Get merchant operational cockpit aggregate" })
  getDashboardSummary() {
    return {
      activeOrdersCount: 0,
      todayRevenuePaise: 0,
      pendingPickupCount: 0,
    };
  }

  // --- Catalog & Products (SaaS Merchant Autonomy) ---

  @Get("catalog/products")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List catalogue items with real-time stock balances for an outlet" })
  async listProducts(@Query("outletId") outletId: string, @Headers() headers: any) {
    const targetOutlet = outletId || "outlet-main";
    return this.proxy.dispatch<any[]>(
      this.catalogServiceUrl,
      `/api/v1/catalog/outlets/${targetOutlet}/products`,
      { headers: { authorization: headers.authorization } }
    );
  }

  @Post("catalog/products")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create product with variants (subject to Platform Price Caps & MRP)" })
  @ApiResponse({ status: 201, description: "Product created" })
  @ApiResponse({ status: 422, description: "Price Cap or MRP violation" })
  async createProduct(@Body() body: any, @Req() req: any, @Headers() headers: any) {
    const tenantId = req.user?.tenantId || body.tenantId || "tenant-default";
    const outletId = body.outletId || "outlet-main";

    return this.proxy.dispatch<any>(
      this.catalogServiceUrl,
      `/api/v1/catalog/products`,
      {
        method: "POST",
        body: JSON.stringify({ ...body, tenantId, outletId }),
        headers: { authorization: headers.authorization },
      }
    );
  }

  @Patch("catalog/products/:id/pricing")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update variant pricing (verified against Admin Price Caps & MRP)" })
  async updatePricing(@Param("id") id: string, @Body() body: any, @Headers() headers: any) {
    return this.proxy.dispatch<any>(
      this.catalogServiceUrl,
      `/api/v1/catalog/products/${id}/pricing`,
      {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: { authorization: headers.authorization },
      }
    );
  }

  // --- Real-time Inventory Management ---

  @Get("inventory")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get outlet inventory balances" })
  async getInventory(@Query("outletId") outletId: string, @Headers() headers: any) {
    const targetOutlet = outletId || "outlet-main";
    return this.proxy.dispatch<any[]>(
      this.catalogServiceUrl,
      `/api/v1/catalog/outlets/${targetOutlet}/products`,
      { headers: { authorization: headers.authorization } }
    );
  }

  @Post("inventory/adjust")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Manual restock or stock reduction with audit note" })
  async adjustStock(@Body() body: any, @Headers() headers: any) {
    return this.proxy.dispatch<any>(
      this.catalogServiceUrl,
      `/api/v1/catalog/inventory/adjust`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: { authorization: headers.authorization },
      }
    );
  }

  @Get("inventory/movements")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Audit trail of stock movements for an outlet" })
  async getMovements(@Query("outletId") outletId: string, @Query("limit") limit: number, @Headers() headers: any) {
    const targetOutlet = outletId || "outlet-main";
    return this.proxy.dispatch<any[]>(
      this.catalogServiceUrl,
      `/api/v1/catalog/outlets/${targetOutlet}/movements?limit=${limit || 50}`,
      { headers: { authorization: headers.authorization } }
    );
  }
}
