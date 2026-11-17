import { Controller, Get, Post, Delete, Body, Param, Headers, Req } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { ProxyDispatcherService } from "../../clients/proxy-dispatcher.service";

@ApiTags("Admin BFF")
@Controller("api/v1/admin")
export class AdminController {
  private readonly catalogServiceUrl = process.env.CATALOG_SERVICE_URL || "http://localhost:3002";

  constructor(private readonly proxy: ProxyDispatcherService) {}

  @Get("merchants/pending")
  @ApiOperation({ summary: "Get merchants awaiting platform onboarding verification" })
  getPendingVerifications() {
    return {
      pendingVerifications: [],
    };
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
