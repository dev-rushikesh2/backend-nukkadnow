import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  Headers,
  Req,
  UnauthorizedException,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from "@nestjs/swagger";
import { ProxyDispatcherService } from "../../clients/proxy-dispatcher.service";
import * as jwt from "jsonwebtoken";

// ---------------------------------------------------------------------------
// JWT secret is validated non-null at gateway startup (main.ts)
// ---------------------------------------------------------------------------
const JWT_SECRET = process.env.JWT_SECRET as string;

// ---------------------------------------------------------------------------
// Helper — extract verified tenant context from the Bearer token.
// Throws UnauthorizedException if no valid token is present.
// ---------------------------------------------------------------------------
function resolveTenantContext(headers: Record<string, any>, req: any): { tenantId: string; outletId?: string; sub: string } {
  const authHeader = headers?.authorization ?? req?.headers?.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthorizedException("Authentication required");
  }
  try {
    const decoded: any = jwt.verify(authHeader.substring(7), JWT_SECRET, {
      issuer: process.env.JWT_ISSUER,
      audience: process.env.JWT_AUDIENCE,
    });
    if (!decoded?.tenantId) throw new UnauthorizedException("Token missing tenant scope");
    return { tenantId: decoded.tenantId, outletId: decoded.outletId, sub: decoded.sub };
  } catch {
    throw new UnauthorizedException("Invalid or expired token");
  }
}

@ApiTags("Merchant BFF")
@Controller("api/v1/merchant")
export class MerchantController {
  private readonly merchantServiceUrl = process.env.MERCHANT_SERVICE_URL as string;
  private readonly catalogServiceUrl = process.env.CATALOG_SERVICE_URL as string;
  private readonly orderServiceUrl = process.env.ORDER_SERVICE_URL as string;
  private readonly analyticsServiceUrl = process.env.ANALYTICS_SERVICE_URL as string;
  private readonly fulfillmentServiceUrl = process.env.FULFILLMENT_SERVICE_URL as string;

  constructor(private readonly proxy: ProxyDispatcherService) {}

  // -------------------------------------------------------------------------
  // Dashboard
  // -------------------------------------------------------------------------

  @Get("dashboard")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Live merchant operational dashboard — real data from analytics and order services" })
  async getDashboard(@Headers() headers: any, @Req() req: any) {
    const { tenantId, outletId } = resolveTenantContext(headers, req);
    const auth = headers.authorization;

    const [profile, analytics] = await Promise.all([
      this.proxy.dispatch<any>(this.merchantServiceUrl, `/api/v1/merchants/my-profile`, {
        method: "GET",
        headers: { authorization: auth, "x-tenant-id": tenantId },
      }),
      this.proxy.dispatch<any>(this.analyticsServiceUrl, `/api/v1/analytics/merchant/summary?outletId=${outletId ?? ""}`, {
        method: "GET",
        headers: { authorization: auth, "x-tenant-id": tenantId },
      }).catch(() => null), // analytics is non-critical — degrade gracefully
    ]);

    return { success: true, data: { profile, analytics } };
  }

  // -------------------------------------------------------------------------
  // Profile
  // -------------------------------------------------------------------------

  @Get("profile")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get authenticated merchant profile" })
  async getProfile(@Headers() headers: any, @Req() req: any) {
    const { tenantId } = resolveTenantContext(headers, req);
    return this.proxy.dispatch(this.merchantServiceUrl, "/api/v1/merchants/my-profile", {
      method: "GET",
      headers: { authorization: headers.authorization, "x-tenant-id": tenantId },
    });
  }

  @Put("profile")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update merchant profile" })
  async updateProfile(@Body() body: any, @Headers() headers: any, @Req() req: any) {
    const { tenantId } = resolveTenantContext(headers, req);
    return this.proxy.dispatch(this.merchantServiceUrl, `/api/v1/merchants/${tenantId}`, {
      method: "PUT",
      headers: { authorization: headers.authorization, "x-tenant-id": tenantId },
      body: JSON.stringify(body),
    });
  }

  // -------------------------------------------------------------------------
  // Outlet hours
  // -------------------------------------------------------------------------

  @Put("outlet/hours")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update outlet operating hours" })
  async updateHours(@Body() body: any, @Headers() headers: any, @Req() req: any) {
    const { tenantId, outletId } = resolveTenantContext(headers, req);
    if (!outletId) throw new UnauthorizedException("Token missing outlet scope");
    return this.proxy.dispatch(this.merchantServiceUrl, `/api/v1/merchants/outlets/${outletId}/hours`, {
      method: "PUT",
      headers: { authorization: headers.authorization, "x-tenant-id": tenantId },
      body: JSON.stringify(body),
    });
  }

  // -------------------------------------------------------------------------
  // Orders
  // -------------------------------------------------------------------------

  @Get("orders")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List live and historical orders for the authenticated merchant" })
  @ApiQuery({ name: "status", required: false })
  @ApiQuery({ name: "page", required: false })
  @ApiQuery({ name: "limit", required: false })
  @ApiQuery({ name: "q", required: false })
  async getOrders(
    @Query("status") status?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("q") q?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const { tenantId } = resolveTenantContext(headers!, req);
    const params = new URLSearchParams();
    if (status) params.set("status", status);
    if (page) params.set("page", page);
    if (limit) params.set("limit", limit ?? "20");
    if (q) params.set("q", q);
    params.set("tenantId", tenantId);

    return this.proxy.dispatch(this.orderServiceUrl, `/api/v1/orders?${params.toString()}`, {
      method: "GET",
      headers: { authorization: headers!.authorization, "x-tenant-id": tenantId },
    });
  }

  @Get("orders/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get single order detail — tenant-scoped" })
  async getOrderById(@Param("id") id: string, @Headers() headers: any, @Req() req: any) {
    const { tenantId } = resolveTenantContext(headers, req);
    return this.proxy.dispatch(this.orderServiceUrl, `/api/v1/orders/${id}`, {
      method: "GET",
      headers: { authorization: headers.authorization, "x-tenant-id": tenantId },
    });
  }

  @Post("orders/:id/accept")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Accept order and set preparation time" })
  async acceptOrder(@Param("id") id: string, @Body() body: any, @Headers() headers: any, @Req() req: any) {
    const { tenantId } = resolveTenantContext(headers, req);
    return this.proxy.dispatch(this.orderServiceUrl, `/api/v1/orders/${id}/accept`, {
      method: "POST",
      headers: { authorization: headers.authorization, "x-tenant-id": tenantId },
      body: JSON.stringify(body),
    });
  }

  @Post("orders/:id/ready")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Mark order ready for pickup" })
  async markReady(@Param("id") id: string, @Headers() headers: any, @Req() req: any) {
    const { tenantId } = resolveTenantContext(headers, req);
    return this.proxy.dispatch(this.orderServiceUrl, `/api/v1/orders/${id}/ready`, {
      method: "POST",
      headers: { authorization: headers.authorization, "x-tenant-id": tenantId },
    });
  }

  @Patch("orders/:id/status")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update order lifecycle status" })
  async updateOrderStatus(@Param("id") id: string, @Body() body: any, @Headers() headers: any, @Req() req: any) {
    const { tenantId } = resolveTenantContext(headers, req);
    return this.proxy.dispatch(this.orderServiceUrl, `/api/v1/orders/${id}/status`, {
      method: "PATCH",
      headers: { authorization: headers.authorization, "x-tenant-id": tenantId },
      body: JSON.stringify(body),
    });
  }

  // -------------------------------------------------------------------------
  // Catalog
  // -------------------------------------------------------------------------

  @Get("catalog/products")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List merchant catalog products" })
  @ApiQuery({ name: "page", required: false })
  @ApiQuery({ name: "limit", required: false })
  @ApiQuery({ name: "category", required: false })
  async getProducts(
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("category") category?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const { tenantId, outletId } = resolveTenantContext(headers!, req);
    const params = new URLSearchParams();
    params.set("tenantId", tenantId);
    if (outletId) params.set("outletId", outletId);
    if (page) params.set("page", page);
    if (limit) params.set("limit", limit ?? "50");
    if (category) params.set("category", category);

    return this.proxy.dispatch(this.catalogServiceUrl, `/api/v1/catalog/products?${params.toString()}`, {
      method: "GET",
      headers: { authorization: headers!.authorization, "x-tenant-id": tenantId },
    });
  }

  @Post("catalog/products")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create a product in the merchant catalog" })
  async createProduct(@Body() body: any, @Headers() headers: any, @Req() req: any) {
    const { tenantId, outletId } = resolveTenantContext(headers, req);
    return this.proxy.dispatch(this.catalogServiceUrl, "/api/v1/catalog/products", {
      method: "POST",
      headers: { authorization: headers.authorization, "x-tenant-id": tenantId },
      body: JSON.stringify({ ...body, tenantId, outletId }),
    });
  }

  @Put("catalog/products/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update a product" })
  async updateProduct(@Param("id") id: string, @Body() body: any, @Headers() headers: any, @Req() req: any) {
    const { tenantId } = resolveTenantContext(headers, req);
    return this.proxy.dispatch(this.catalogServiceUrl, `/api/v1/catalog/products/${id}`, {
      method: "PUT",
      headers: { authorization: headers.authorization, "x-tenant-id": tenantId },
      body: JSON.stringify(body),
    });
  }

  @Delete("catalog/products/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Delete a product from the merchant catalog" })
  async deleteProduct(@Param("id") id: string, @Headers() headers: any, @Req() req: any) {
    const { tenantId } = resolveTenantContext(headers, req);
    return this.proxy.dispatch(this.catalogServiceUrl, `/api/v1/catalog/products/${id}`, {
      method: "DELETE",
      headers: { authorization: headers.authorization, "x-tenant-id": tenantId },
    });
  }

  @Get("catalog/products/:id/stock")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get live stock balance for a product variant" })
  async getStock(@Param("id") variantId: string, @Headers() headers: any, @Req() req: any) {
    const { tenantId } = resolveTenantContext(headers, req);
    return this.proxy.dispatch(this.catalogServiceUrl, `/api/v1/catalog/stock/${variantId}`, {
      method: "GET",
      headers: { authorization: headers.authorization, "x-tenant-id": tenantId },
    });
  }

  @Post("catalog/products/:id/stock/adjust")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Adjust stock quantity (restock, damage, audit-correction)" })
  async adjustStock(@Param("id") variantId: string, @Body() body: any, @Headers() headers: any, @Req() req: any) {
    const { tenantId } = resolveTenantContext(headers, req);
    return this.proxy.dispatch(this.catalogServiceUrl, `/api/v1/catalog/stock/${variantId}/adjust`, {
      method: "POST",
      headers: { authorization: headers.authorization, "x-tenant-id": tenantId },
      body: JSON.stringify({ ...body, tenantId }),
    });
  }

  // -------------------------------------------------------------------------
  // Fulfillment / Pickup tokens
  // -------------------------------------------------------------------------

  @Get("fulfillment/slots")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get capacity slots for the merchant outlet" })
  @ApiQuery({ name: "date", required: false })
  async getSlots(@Query("date") date: string, @Headers() headers: any, @Req() req: any) {
    const { tenantId, outletId } = resolveTenantContext(headers, req);
    const params = new URLSearchParams();
    if (outletId) params.set("outletId", outletId);
    if (date) params.set("date", date);
    return this.proxy.dispatch(this.fulfillmentServiceUrl, `/api/v1/fulfillment/slots?${params.toString()}`, {
      method: "GET",
      headers: { authorization: headers.authorization, "x-tenant-id": tenantId },
    });
  }

  @Get("fulfillment/queue")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get current outlet queue snapshot" })
  async getQueue(@Headers() headers: any, @Req() req: any) {
    const { tenantId, outletId } = resolveTenantContext(headers, req);
    return this.proxy.dispatch(this.fulfillmentServiceUrl, `/api/v1/fulfillment/queue/${outletId ?? ""}`, {
      method: "GET",
      headers: { authorization: headers.authorization, "x-tenant-id": tenantId },
    });
  }

  // -------------------------------------------------------------------------
  // Onboarding / Partner registration
  // -------------------------------------------------------------------------

  @Post("onboarding/draft")
  @ApiOperation({ summary: "Save progressive partner registration draft (Steps 1-6)" })
  async saveOnboardingDraft(@Body() body: any) {
    return this.proxy.dispatch(this.merchantServiceUrl, "/api/v1/merchants/onboarding/draft", {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  @Post("onboarding/submit")
  @ApiOperation({ summary: "Submit partner registration application (Step 7 -> Step 8)" })
  async submitOnboarding(@Body() body: any) {
    return this.proxy.dispatch(this.merchantServiceUrl, "/api/v1/merchants/onboarding/submit", {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  @Get("onboarding/status/:identifier")
  @ApiOperation({ summary: "Get public/merchant onboarding status by applicationId or mobile" })
  async getOnboardingStatusByIdentifier(@Param("identifier") identifier: string, @Headers() headers: any) {
    return this.proxy.dispatch(
      this.merchantServiceUrl,
      `/api/v1/merchants/onboarding/status/${encodeURIComponent(identifier)}`,
      {
        method: "GET",
        headers: headers?.authorization ? { authorization: headers.authorization } : {},
      }
    );
  }

  @Post("onboarding/:applicationId/documents")
  @ApiOperation({ summary: "Attach KYC/verification document to onboarding application" })
  async uploadOnboardingDocument(@Param("applicationId") applicationId: string, @Body() body: any, @Headers() headers: any) {
    return this.proxy.dispatch(
      this.merchantServiceUrl,
      `/api/v1/merchants/onboarding/${encodeURIComponent(applicationId)}/documents`,
      {
        method: "POST",
        headers: headers?.authorization ? { authorization: headers.authorization } : {},
        body: JSON.stringify(body),
      }
    );
  }

  @Post("onboarding/register")
  @ApiOperation({ summary: "Submit partner registration (Step 1–8)" })
  async submitRegistration(@Body() body: any) {
    return this.proxy.dispatch(this.merchantServiceUrl, "/api/v1/merchants/onboarding/draft", {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  @Get("onboarding/status")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get onboarding application status" })
  async getOnboardingStatus(@Headers() headers: any, @Req() req: any) {
    const { tenantId } = resolveTenantContext(headers, req);
    return this.proxy.dispatch(this.merchantServiceUrl, `/api/v1/merchants/onboarding/status/${tenantId}`, {
      method: "GET",
      headers: { authorization: headers.authorization, "x-tenant-id": tenantId },
    });
  }
}
