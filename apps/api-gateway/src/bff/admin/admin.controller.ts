import { Controller, Get, Post, Patch, Delete, Body, Param, Query, Headers, Req } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from "@nestjs/swagger";
import { ProxyDispatcherService } from "../../clients/proxy-dispatcher.service";

@ApiTags("Admin BFF")
@Controller("api/v1/admin")
export class AdminController {
  private readonly catalogServiceUrl = process.env.CATALOG_SERVICE_URL || "http://localhost:3002";
  private readonly merchantServiceUrl = process.env.MERCHANT_SERVICE_URL || "http://localhost:4002";

  constructor(private readonly proxy: ProxyDispatcherService) {}

  // --- Platform Onboarding Verification & Governance ---

  @Get("merchants/all")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get all merchants across the platform (Platform Admin Oversight)" })
  async listAllMerchants(@Headers() headers: any) {
    return this.proxy.dispatch<any[]>(
      this.merchantServiceUrl,
      `/api/v1/merchants`,
      { headers: { authorization: headers.authorization, "x-tenant-id": "system-admin-tenant" } }
    );
  }

  @Get("onboarding/all")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List all partner registrations with full document and audit history" })
  async listAllRegistrations(@Query("status") status: string, @Headers() headers: any) {
    const qs = status ? `?status=${encodeURIComponent(status)}` : "";
    return this.proxy.dispatch<any>(
      this.merchantServiceUrl,
      `/api/v1/merchants/onboarding${qs}`,
      { headers: { authorization: headers.authorization, "x-tenant-id": "system-admin-tenant" } }
    );
  }

  @Patch("onboarding/:applicationId/status")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Approve, request action, or reject a partner registration (Auto-onboards on APPROVAL)" })
  @ApiParam({ name: "applicationId", description: "Application tracking ID" })
  async updateApplicationStatus(
    @Param("applicationId") applicationId: string,
    @Body() body: any,
    @Headers() headers: any
  ) {
    return this.proxy.dispatch<any>(
      this.merchantServiceUrl,
      `/api/v1/merchants/onboarding/${applicationId}/status`,
      {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: { authorization: headers.authorization, "x-tenant-id": "system-admin-tenant" },
      }
    );
  }

  @Get("merchants/pending")
  @ApiOperation({ summary: "Get merchants awaiting platform onboarding verification" })
  async getPendingVerifications(@Headers() headers: any) {
    return this.proxy.dispatch<any>(
      this.merchantServiceUrl,
      `/api/v1/merchants/onboarding?status=UNDER_REVIEW`,
      { headers: { authorization: headers.authorization, "x-tenant-id": "system-admin-tenant" } }
    );
  }

  // --- Platform Governance: Admin Price Caps & Anti-Gouging ---

  @Get("price-caps")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List all active and configured platform price caps" })
  async listPriceCaps(@Headers() headers: any) {
    return this.proxy.dispatch<any[]>(
      this.catalogServiceUrl,
      `/api/v1/catalog/admin/price-caps`,
      { headers: { authorization: headers.authorization } }
    );
  }

  @Post("price-caps")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create or enforce a new maximum price cap for a category or locality" })
  @ApiResponse({ status: 201, description: "Price cap rule established" })
  async createPriceCap(@Body() body: any, @Headers() headers: any) {
    return this.proxy.dispatch<any>(
      this.catalogServiceUrl,
      `/api/v1/catalog/admin/price-caps`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: { authorization: headers.authorization },
      }
    );
  }

  @Delete("price-caps/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Deactivate an active price cap rule" })
  async deactivatePriceCap(@Param("id") id: string, @Headers() headers: any) {
    return this.proxy.dispatch<any>(
      this.catalogServiceUrl,
      `/api/v1/catalog/admin/price-caps/${id}`,
      {
        method: "DELETE",
        headers: { authorization: headers.authorization },
      }
    );
  }

  @Post("inventory/cleanup-expired")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Trigger inventory TTL sweeper for expired checkout holds" })
  async triggerReservationCleanup(@Headers() headers: any) {
    return this.proxy.dispatch<any>(
      this.catalogServiceUrl,
      `/api/v1/catalog/inventory/cleanup-expired`,
      {
        method: "POST",
        headers: { authorization: headers.authorization },
      }
    );
  }
}
