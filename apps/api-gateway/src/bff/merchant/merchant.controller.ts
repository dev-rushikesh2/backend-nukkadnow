import { Controller, Get, Post, Patch, Body, Param, Query, Req, Headers } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam, ApiQuery } from "@nestjs/swagger";
import { ProxyDispatcherService } from "../../clients/proxy-dispatcher.service";

@ApiTags("Merchant BFF")
@Controller("api/v1/merchant")
export class MerchantController {
  private readonly catalogServiceUrl = process.env.CATALOG_SERVICE_URL || "http://localhost:3002";
  private readonly merchantServiceUrl = process.env.MERCHANT_SERVICE_URL || "http://localhost:4002";

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

  // --- Merchant Profile & Tenant Scope ---

  @Get("profile")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get current authenticated merchant profile and active outlets" })
  async getProfile(@Headers() headers: any, @Req() req: any) {
    const tenantId = headers["x-tenant-id"] || req.user?.tenantId;
    return this.proxy.dispatch<any>(
      this.merchantServiceUrl,
      `/api/v1/merchants/my-profile`,
      {
        headers: {
          authorization: headers.authorization,
          "x-tenant-id": tenantId,
        },
      }
    );
  }

  // --- Partner Onboarding & Registration (Real Dynamic Persistence with Tenant Isolation) ---

  @Post("onboarding/draft")
  @ApiOperation({ summary: "Save progressive partner registration draft" })
  async saveOnboardingDraft(@Body() body: any, @Headers() headers: any, @Req() req: any) {
    const tenantId = headers["x-tenant-id"] || req.user?.tenantId;
    return this.proxy.dispatch<any>(
      this.merchantServiceUrl,
      `/api/v1/merchants/onboarding/draft`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          authorization: headers.authorization,
          "x-tenant-id": tenantId,
        },
      }
    );
  }

  @Post("onboarding/submit")
  @ApiOperation({ summary: "Submit partner registration for verification review" })
  async submitOnboarding(@Body() body: any, @Headers() headers: any, @Req() req: any) {
    const tenantId = headers["x-tenant-id"] || req.user?.tenantId;
    return this.proxy.dispatch<any>(
      this.merchantServiceUrl,
      `/api/v1/merchants/onboarding/submit`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          authorization: headers.authorization,
          "x-tenant-id": tenantId,
        },
      }
    );
  }

  @Get("onboarding/status/:identifier")
  @ApiOperation({ summary: "Get registration status by Application ID or Mobile Number with Tenant Isolation" })
  @ApiParam({ name: "identifier", description: "Application ID or mobile phone number" })
  async getOnboardingStatus(@Param("identifier") identifier: string, @Headers() headers: any, @Req() req: any) {
    const tenantId = headers["x-tenant-id"] || req.user?.tenantId;
    return this.proxy.dispatch<any>(
      this.merchantServiceUrl,
      `/api/v1/merchants/onboarding/status/${encodeURIComponent(identifier)}`,
      {
        method: "GET",
        headers: {
          authorization: headers.authorization,
          "x-tenant-id": tenantId,
        },
      }
    );
  }

  @Post("onboarding/:applicationId/documents")
  @ApiOperation({ summary: "Upload and attach business verification document" })
  @ApiParam({ name: "applicationId", description: "Application ID" })
  async uploadOnboardingDocument(
    @Param("applicationId") applicationId: string,
    @Body() body: any,
    @Headers() headers: any,
    @Req() req: any
  ) {
    const tenantId = headers["x-tenant-id"] || req.user?.tenantId;
    return this.proxy.dispatch<any>(
      this.merchantServiceUrl,
      `/api/v1/merchants/onboarding/${applicationId}/documents`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          authorization: headers.authorization,
          "x-tenant-id": tenantId,
        },
      }
    );
  }

  @Patch("onboarding/:applicationId/status")
  @ApiOperation({ summary: "Update application verification status" })
  @ApiParam({ name: "applicationId", description: "Application ID" })
  async updateOnboardingStatus(
    @Param("applicationId") applicationId: string,
    @Body() body: any,
    @Headers() headers: any,
    @Req() req: any
  ) {
    const tenantId = headers["x-tenant-id"] || req.user?.tenantId;
    return this.proxy.dispatch<any>(
      this.merchantServiceUrl,
      `/api/v1/merchants/onboarding/${applicationId}/status`,
      {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
          authorization: headers.authorization,
          "x-tenant-id": tenantId,
        },
      }
    );
  }

  @Get("onboarding")
  @ApiOperation({ summary: "List partner registrations (Isolated per merchant tenant)" })
  @ApiQuery({ name: "status", required: false })
  async listOnboarding(@Query("status") status?: string, @Headers() headers?: any, @Req() req?: any) {
    const tenantId = headers?.["x-tenant-id"] || req?.user?.tenantId;
    const qs = status ? `?status=${encodeURIComponent(status)}` : "";
    return this.proxy.dispatch<any>(
      this.merchantServiceUrl,
      `/api/v1/merchants/onboarding${qs}`,
      {
        method: "GET",
        headers: {
          authorization: headers?.authorization,
          "x-tenant-id": tenantId,
        },
      }
    );
  }

  // --- Catalog & Products (SaaS Merchant Autonomy & Isolation) ---

  @Get("catalog/products")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List catalogue items with real-time stock balances for an outlet" })
  async listProducts(@Query("outletId") outletId: string, @Headers() headers: any) {
    const targetOutlet = outletId || "outlet-main";
    return this.proxy.dispatch<any[]>(
      this.catalogServiceUrl,
      `/api/v1/catalog/outlets/${targetOutlet}/products`,
      { headers: { authorization: headers.authorization, "x-tenant-id": headers["x-tenant-id"] } }
    );
  }

  @Post("catalog/products")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create product with variants (subject to Platform Price Caps & MRP)" })
  @ApiResponse({ status: 201, description: "Product created" })
  @ApiResponse({ status: 422, description: "Price Cap or MRP violation" })
  async createProduct(@Body() body: any, @Req() req: any, @Headers() headers: any) {
    const tenantId = req.user?.tenantId || headers["x-tenant-id"] || body.tenantId || "tenant-default";
    const outletId = body.outletId || "outlet-main";

    return this.proxy.dispatch<any>(
      this.catalogServiceUrl,
      `/api/v1/catalog/products`,
      {
        method: "POST",
        body: JSON.stringify({ ...body, tenantId, outletId }),
        headers: { authorization: headers.authorization, "x-tenant-id": tenantId },
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
        headers: { authorization: headers.authorization, "x-tenant-id": headers["x-tenant-id"] },
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
      { headers: { authorization: headers.authorization, "x-tenant-id": headers["x-tenant-id"] } }
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
        headers: { authorization: headers.authorization, "x-tenant-id": headers["x-tenant-id"] },
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
      { headers: { authorization: headers.authorization, "x-tenant-id": headers["x-tenant-id"] } }
    );
  }
}
