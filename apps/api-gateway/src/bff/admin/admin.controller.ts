/**
 * Admin BFF Controller — Production
 *
 * Every endpoint proxies to the authoritative downstream microservice.
 * No hardcoded data. No in-memory fallbacks. No seeded arrays.
 * Startup guard in main.ts ensures all *_SERVICE_URL env vars are present.
 */
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
  ForbiddenException,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
  ApiQuery,
} from "@nestjs/swagger";
import { ProxyDispatcherService } from "../../clients/proxy-dispatcher.service";
import * as jwt from "jsonwebtoken";

// JWT_SECRET validated non-null at gateway startup
const JWT_SECRET = process.env.JWT_SECRET as string;

// ---------------------------------------------------------------------------
// Auth helper — verify admin JWT, extract role and geo assignment
// ---------------------------------------------------------------------------
interface AdminTokenContext {
  sub: string;
  name: string;
  email: string;
  roles: string[];
  cityCode?: string;
  hierarchyLevel?: number;
}

function requireAdmin(headers: Record<string, any>): AdminTokenContext {
  const authHeader = headers?.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    throw new UnauthorizedException("Admin authentication required");
  }
  try {
    const decoded: any = jwt.verify(authHeader.substring(7), JWT_SECRET, {
      issuer: process.env.JWT_ISSUER,
      audience: process.env.JWT_AUDIENCE,
    });
    const ADMIN_ROLES = [
      "ROOT_ADMIN",
      "SUPER_ADMIN",
      "PLATFORM_ADMIN",
      "CITY_OPERATIONS_MANAGER",
      "VERIFICATION_STAFF",
      "SUPPORT_STAFF",
      "FINANCE_AUDITOR",
    ];
    const userRoles = Array.isArray(decoded?.roles) ? decoded.roles : (decoded?.roles ? [decoded.roles] : []);
    const hasAdminRole = userRoles.some((r: string) => {
      const upper = String(r || "").toUpperCase();
      return upper.startsWith("ADMIN_") || upper.startsWith("ROLE_") || ADMIN_ROLES.includes(upper);
    });
    if (!hasAdminRole) {
      throw new ForbiddenException("Insufficient admin privileges");
    }
    return {
      sub: decoded.sub,
      name: decoded.name ?? decoded.fullName ?? "Admin",
      email: decoded.email ?? "",
      roles: decoded.roles ?? [],
      cityCode: decoded.cityCode,
      hierarchyLevel: decoded.hierarchyLevel,
    };
  } catch (err: any) {
    if (err instanceof ForbiddenException) throw err;
    throw new UnauthorizedException("Invalid or expired admin token");
  }
}

@ApiTags("Admin BFF")
@Controller("api/v1/admin")
export class AdminController {
  private readonly identityServiceUrl = process.env.IDENTITY_SERVICE_URL as string;
  private readonly merchantServiceUrl = process.env.MERCHANT_SERVICE_URL as string;
  private readonly catalogServiceUrl = process.env.CATALOG_SERVICE_URL as string;
  private readonly orderServiceUrl = process.env.ORDER_SERVICE_URL as string;
  private readonly paymentServiceUrl = process.env.PAYMENT_SERVICE_URL as string;
  private readonly subscriptionServiceUrl = process.env.SUBSCRIPTION_SERVICE_URL as string;
  private readonly analyticsServiceUrl = process.env.ANALYTICS_SERVICE_URL as string;
  private readonly fulfillmentServiceUrl = process.env.FULFILLMENT_SERVICE_URL as string;
  private readonly reviewServiceUrl = process.env.REVIEW_SUPPORT_SERVICE_URL as string;
  private readonly notificationServiceUrl = process.env.NOTIFICATION_SERVICE_URL as string;

  constructor(private readonly proxy: ProxyDispatcherService) {}

  // =========================================================================
  // DASHBOARD / OVERVIEW
  // =========================================================================

  @Get("dashboard")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Platform GMV and operational KPIs — real analytics data" })
  async getDashboard(@Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.analyticsServiceUrl, "/api/v1/analytics/admin/gmv", {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Get("analytics/merchant/:outletId")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Per-outlet analytics cockpit" })
  async getOutletAnalytics(@Param("outletId") outletId: string, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.analyticsServiceUrl, `/api/v1/analytics/merchant/${outletId}/cockpit`, {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  // =========================================================================
  // MERCHANTS
  // =========================================================================

  @Get("merchants")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List all merchants — paginated and filtered" })
  @ApiQuery({ name: "status", required: false })
  @ApiQuery({ name: "cityCode", required: false })
  @ApiQuery({ name: "page", required: false })
  @ApiQuery({ name: "limit", required: false })
  @ApiQuery({ name: "q", required: false })
  async listMerchants(
    @Query("status") status?: string,
    @Query("cityCode") cityCode?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("q") q?: string,
    @Headers() headers?: any
  ) {
    requireAdmin(headers!);
    const params = new URLSearchParams();
    if (status) params.set("status", status);
    if (cityCode) params.set("cityCode", cityCode);
    if (page) params.set("page", page);
    params.set("limit", limit ?? "20");
    if (q) params.set("q", q);
    return this.proxy.dispatch(this.merchantServiceUrl, `/api/v1/merchants?${params.toString()}`, {
      method: "GET",
      headers: { authorization: headers!.authorization },
    });
  }

  @Get("merchants/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get merchant profile" })
  async getMerchant(@Param("id") id: string, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.merchantServiceUrl, `/api/v1/merchants/${id}`, {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Get("merchants/:id/kyc")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get merchant KYC / verification documents" })
  async getMerchantKyc(@Param("id") id: string, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.merchantServiceUrl, `/api/v1/merchant/partner/kyc/${id}`, {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Post("merchants/:id/verify")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Approve or reject merchant verification" })
  async verifyMerchant(@Param("id") id: string, @Body() body: { status: string; notes?: string }, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.merchantServiceUrl, `/api/v1/merchant/partner/verify/${id}`, {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  @Post("merchants/:id/suspend")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Suspend a merchant account" })
  async suspendMerchant(@Param("id") id: string, @Body() body: { reason: string }, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.merchantServiceUrl, `/api/v1/merchants/${id}/suspend`, {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  @Post("merchants/:id/reinstate")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Reinstate a suspended merchant" })
  async reinstateMerchant(@Param("id") id: string, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.merchantServiceUrl, `/api/v1/merchants/${id}/reinstate`, {
      method: "POST",
      headers: { authorization: headers.authorization },
    });
  }

  // =========================================================================
  // OUTLETS
  // =========================================================================

  @Get("outlets")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List all outlets — paginated, filterable by city and status" })
  @ApiQuery({ name: "cityCode", required: false })
  @ApiQuery({ name: "locality", required: false })
  @ApiQuery({ name: "status", required: false })
  @ApiQuery({ name: "page", required: false })
  @ApiQuery({ name: "limit", required: false })
  async listOutlets(
    @Query("cityCode") cityCode?: string,
    @Query("locality") locality?: string,
    @Query("status") status?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Headers() headers?: any
  ) {
    requireAdmin(headers!);
    const params = new URLSearchParams();
    if (cityCode) params.set("cityCode", cityCode);
    if (locality) params.set("locality", locality);
    if (status) params.set("status", status);
    if (page) params.set("page", page);
    params.set("limit", limit ?? "20");
    return this.proxy.dispatch(this.merchantServiceUrl, `/api/v1/outlets?${params.toString()}`, {
      method: "GET",
      headers: { authorization: headers!.authorization },
    });
  }

  @Get("outlets/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get outlet detail" })
  async getOutlet(@Param("id") id: string, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.merchantServiceUrl, `/api/v1/merchants/outlets/${id}`, {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Post("outlets/:id/throttle")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Throttle or un-throttle outlet capacity" })
  async throttleOutlet(@Param("id") id: string, @Body() body: any, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.fulfillmentServiceUrl, `/api/v1/fulfillment/outlets/${id}/throttle`, {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  // =========================================================================
  // LOCALITIES / COVERAGE
  // =========================================================================

  @Get("localities")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List serviceable localities" })
  @ApiQuery({ name: "cityCode", required: false })
  @ApiQuery({ name: "status", required: false })
  async listLocalities(
    @Query("cityCode") cityCode?: string,
    @Query("status") status?: string,
    @Headers() headers?: any
  ) {
    requireAdmin(headers!);
    const params = new URLSearchParams();
    if (cityCode) params.set("cityCode", cityCode);
    if (status) params.set("status", status);
    return this.proxy.dispatch(this.merchantServiceUrl, `/api/v1/localities?${params.toString()}`, {
      method: "GET",
      headers: { authorization: headers!.authorization },
    });
  }

  @Post("localities")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Add a new serviceable locality" })
  async createLocality(@Body() body: any, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.merchantServiceUrl, "/api/v1/localities", {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  @Put("localities/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update a locality's configuration" })
  async updateLocality(@Param("id") id: string, @Body() body: any, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.merchantServiceUrl, `/api/v1/localities/${id}`, {
      method: "PUT",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  @Delete("localities/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Remove a locality from serviceable coverage" })
  async deleteLocality(@Param("id") id: string, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.merchantServiceUrl, `/api/v1/localities/${id}`, {
      method: "DELETE",
      headers: { authorization: headers.authorization },
    });
  }

  @Get("cities")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List serviceable cities with live statistics" })
  async listCities(@Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.merchantServiceUrl, "/api/v1/cities", {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Put("cities/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update city configuration (launch status, manager)" })
  async updateCity(@Param("id") id: string, @Body() body: any, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.merchantServiceUrl, `/api/v1/cities/${id}`, {
      method: "PUT",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  // =========================================================================
  // ORDERS
  // =========================================================================

  @Get("orders")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List platform orders with filters" })
  @ApiQuery({ name: "cityCode", required: false })
  @ApiQuery({ name: "status", required: false })
  @ApiQuery({ name: "merchantId", required: false })
  @ApiQuery({ name: "from", required: false })
  @ApiQuery({ name: "to", required: false })
  @ApiQuery({ name: "page", required: false })
  @ApiQuery({ name: "limit", required: false })
  async listOrders(
    @Query("cityCode") cityCode?: string,
    @Query("status") status?: string,
    @Query("merchantId") merchantId?: string,
    @Query("from") from?: string,
    @Query("to") to?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Headers() headers?: any
  ) {
    requireAdmin(headers!);
    const params = new URLSearchParams();
    if (cityCode) params.set("cityCode", cityCode);
    if (status) params.set("status", status);
    if (merchantId) params.set("merchantId", merchantId);
    if (from) params.set("from", from);
    if (to) params.set("to", to);
    if (page) params.set("page", page);
    params.set("limit", limit ?? "20");
    return this.proxy.dispatch(this.orderServiceUrl, `/api/v1/orders/admin?${params.toString()}`, {
      method: "GET",
      headers: { authorization: headers!.authorization },
    });
  }

  @Get("orders/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get full order detail for admin review" })
  async getOrder(@Param("id") id: string, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.orderServiceUrl, `/api/v1/orders/${id}`, {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Post("orders/:id/cancel")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Admin force-cancel an order" })
  async cancelOrder(@Param("id") id: string, @Body() body: { reason: string }, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.orderServiceUrl, `/api/v1/orders/${id}/cancel`, {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  // =========================================================================
  // PAYMENTS
  // =========================================================================

  @Get("payments")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List payment transactions — real data from payment-service" })
  @ApiQuery({ name: "cityCode", required: false })
  @ApiQuery({ name: "status", required: false })
  @ApiQuery({ name: "from", required: false })
  @ApiQuery({ name: "to", required: false })
  @ApiQuery({ name: "page", required: false })
  @ApiQuery({ name: "limit", required: false })
  async listPayments(
    @Query("cityCode") cityCode?: string,
    @Query("status") status?: string,
    @Query("from") from?: string,
    @Query("to") to?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Headers() headers?: any
  ) {
    requireAdmin(headers!);
    const params = new URLSearchParams();
    if (cityCode) params.set("cityCode", cityCode);
    if (status) params.set("status", status);
    if (from) params.set("from", from);
    if (to) params.set("to", to);
    if (page) params.set("page", page);
    params.set("limit", limit ?? "20");
    return this.proxy.dispatch(this.paymentServiceUrl, `/api/v1/payments/admin?${params.toString()}`, {
      method: "GET",
      headers: { authorization: headers!.authorization },
    });
  }

  @Get("payments/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get payment transaction detail" })
  async getPayment(@Param("id") id: string, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.paymentServiceUrl, `/api/v1/payments/${id}`, {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Post("payments/:id/refund")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Admin-initiated refund on a payment" })
  async initiateRefund(
    @Param("id") paymentId: string,
    @Body() body: { amountPaise: number; reason: string },
    @Headers() headers: any
  ) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.paymentServiceUrl, "/api/v1/payments/refunds", {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify({ paymentId, ...body }),
    });
  }

  @Get("payments/reconciliation")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get reconciliation records (matched vs discrepancy)" })
  async getReconciliation(@Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.paymentServiceUrl, "/api/v1/payments/admin/reconciliation", {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  // =========================================================================
  // PAYOUTS / SETTLEMENTS
  // =========================================================================

  @Get("payouts")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List merchant payout settlements" })
  @ApiQuery({ name: "cityCode", required: false })
  @ApiQuery({ name: "status", required: false })
  @ApiQuery({ name: "page", required: false })
  async listPayouts(
    @Query("cityCode") cityCode?: string,
    @Query("status") status?: string,
    @Query("page") page?: string,
    @Headers() headers?: any
  ) {
    requireAdmin(headers!);
    const params = new URLSearchParams();
    if (cityCode) params.set("cityCode", cityCode);
    if (status) params.set("status", status);
    if (page) params.set("page", page);
    return this.proxy.dispatch(this.paymentServiceUrl, `/api/v1/payments/admin/payouts?${params.toString()}`, {
      method: "GET",
      headers: { authorization: headers!.authorization },
    });
  }

  @Post("payouts/:id/release")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Release a held payout to merchant bank" })
  async releasePayout(@Param("id") id: string, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.paymentServiceUrl, `/api/v1/payments/admin/payouts/${id}/release`, {
      method: "POST",
      headers: { authorization: headers.authorization },
    });
  }

  // =========================================================================
  // COMMISSION RULES
  // =========================================================================

  @Get("commission-rules")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List active commission rate rules" })
  async listCommissionRules(@Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.subscriptionServiceUrl, "/api/v1/subscriptions/admin/commission-rules", {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Post("commission-rules")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create a new commission rule" })
  async createCommissionRule(@Body() body: any, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.subscriptionServiceUrl, "/api/v1/subscriptions/admin/commission-rules", {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  @Put("commission-rules/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update a commission rule" })
  async updateCommissionRule(@Param("id") id: string, @Body() body: any, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.subscriptionServiceUrl, `/api/v1/subscriptions/admin/commission-rules/${id}`, {
      method: "PUT",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  @Delete("commission-rules/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Deactivate a commission rule" })
  async deleteCommissionRule(@Param("id") id: string, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.subscriptionServiceUrl, `/api/v1/subscriptions/admin/commission-rules/${id}`, {
      method: "DELETE",
      headers: { authorization: headers.authorization },
    });
  }

  // =========================================================================
  // SUBSCRIPTIONS / PLANS
  // =========================================================================

  @Get("subscription-plans")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List merchant SaaS subscription plans" })
  async listPlans(@Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.subscriptionServiceUrl, "/api/v1/subscriptions/plans", {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Get("subscriptions")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List all merchant subscriptions" })
  @ApiQuery({ name: "status", required: false })
  @ApiQuery({ name: "page", required: false })
  async listSubscriptions(
    @Query("status") status?: string,
    @Query("page") page?: string,
    @Headers() headers?: any
  ) {
    requireAdmin(headers!);
    const params = new URLSearchParams();
    if (status) params.set("status", status);
    if (page) params.set("page", page);
    return this.proxy.dispatch(this.subscriptionServiceUrl, `/api/v1/subscriptions/admin?${params.toString()}`, {
      method: "GET",
      headers: { authorization: headers!.authorization },
    });
  }

  // =========================================================================
  // CATALOGUE MODERATION / PRICE CAPS
  // =========================================================================

  @Get("price-cap-rules")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List active price cap rules" })
  async listPriceCapRules(@Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.catalogServiceUrl, "/api/v1/catalog/admin/price-caps", {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Post("price-cap-rules")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create a price cap rule" })
  async createPriceCapRule(@Body() body: any, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.catalogServiceUrl, "/api/v1/catalog/admin/price-caps", {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  @Get("catalog/products")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List and moderate catalog products across all merchants" })
  @ApiQuery({ name: "merchantId", required: false })
  @ApiQuery({ name: "category", required: false })
  @ApiQuery({ name: "flagged", required: false })
  @ApiQuery({ name: "page", required: false })
  async adminListProducts(
    @Query("merchantId") merchantId?: string,
    @Query("category") category?: string,
    @Query("flagged") flagged?: string,
    @Query("page") page?: string,
    @Headers() headers?: any
  ) {
    requireAdmin(headers!);
    const params = new URLSearchParams();
    if (merchantId) params.set("merchantId", merchantId);
    if (category) params.set("category", category);
    if (flagged) params.set("flagged", flagged);
    if (page) params.set("page", page);
    return this.proxy.dispatch(this.catalogServiceUrl, `/api/v1/catalog/products?${params.toString()}`, {
      method: "GET",
      headers: { authorization: headers!.authorization },
    });
  }

  @Delete("catalog/products/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Admin remove a product from catalog" })
  async adminRemoveProduct(@Param("id") id: string, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.catalogServiceUrl, `/api/v1/catalog/products/${id}`, {
      method: "DELETE",
      headers: { authorization: headers.authorization },
    });
  }

  // =========================================================================
  // CUSTOMERS
  // =========================================================================

  @Get("customers")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List customer accounts" })
  @ApiQuery({ name: "q", required: false })
  @ApiQuery({ name: "status", required: false })
  @ApiQuery({ name: "page", required: false })
  async listCustomers(
    @Query("q") q?: string,
    @Query("status") status?: string,
    @Query("page") page?: string,
    @Headers() headers?: any
  ) {
    requireAdmin(headers!);
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (status) params.set("status", status);
    if (page) params.set("page", page);
    return this.proxy.dispatch(this.identityServiceUrl, `/api/v1/identity/admin/users?${params.toString()}`, {
      method: "GET",
      headers: { authorization: headers!.authorization },
    });
  }

  @Get("customers/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get customer profile — PII access logged" })
  async getCustomer(@Param("id") id: string, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.identityServiceUrl, `/api/v1/identity/admin/users/${id}`, {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Post("customers/:id/suspend")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Suspend a customer account" })
  async suspendCustomer(@Param("id") id: string, @Body() body: { reason: string }, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.identityServiceUrl, `/api/v1/identity/admin/users/${id}/suspend`, {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  // =========================================================================
  // PLATFORM ADMIN USERS (RBAC)
  // =========================================================================

  @Get("platform-users")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List admin operator accounts" })
  async listPlatformUsers(@Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/identity/admin/operators", {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Post("platform-users")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create a new admin operator account" })
  async createPlatformUser(@Body() body: any, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/identity/admin/operators", {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  @Put("platform-users/:id/roles")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update admin operator role assignments" })
  async updateOperatorRoles(@Param("id") id: string, @Body() body: any, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.identityServiceUrl, `/api/v1/identity/admin/operators/${id}/roles`, {
      method: "PUT",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  @Post("platform-users/:id/suspend")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Suspend an admin operator" })
  async suspendOperator(@Param("id") id: string, @Body() body: any, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.identityServiceUrl, `/api/v1/identity/admin/operators/${id}/suspend`, {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  // =========================================================================
  // ADMIN AUTHENTICATION (via identity-service)
  // =========================================================================

  @Post("auth/login")
  @ApiOperation({ summary: "Admin login — email + password, challenges MFA if enabled" })
  async adminLogin(@Body() body: { email: string; password: string }, @Req() req: any) {
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/auth/admin/login", {
      method: "POST",
      headers: {
        "user-agent": req.headers["user-agent"] ?? "",
        "x-forwarded-for": (req.headers["x-forwarded-for"] as string) ?? req.socket?.remoteAddress ?? "",
      },
      body: JSON.stringify(body),
    });
  }

  @Post("auth/mfa/verify")
  @ApiOperation({ summary: "Admin verify TOTP code during MFA challenge" })
  async adminMfaVerify(@Body() body: any, @Req() req: any) {
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/auth/admin/mfa/verify", {
      method: "POST",
      headers: {
        "user-agent": req.headers["user-agent"] ?? "",
        "x-forwarded-for": (req.headers["x-forwarded-for"] as string) ?? req.socket?.remoteAddress ?? "",
      },
      body: JSON.stringify(body),
    });
  }

  @Post("auth/otp/verify")
  @ApiOperation({ summary: "Admin verify TOTP/OTP code alias" })
  async adminOtpVerifyAlias(@Body() body: any, @Req() req: any) {
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/auth/admin/mfa/verify", {
      method: "POST",
      headers: {
        "user-agent": req.headers["user-agent"] ?? "",
        "x-forwarded-for": (req.headers["x-forwarded-for"] as string) ?? req.socket?.remoteAddress ?? "",
      },
      body: JSON.stringify(body),
    });
  }

  @Post("auth/mfa/setup")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Admin generate TOTP setup secret" })
  async adminMfaSetup(@Body() body: any, @Headers() headers: any) {
    const admin = requireAdmin(headers);
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/auth/admin/mfa/setup", {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify({ email: body?.email || admin.email }),
    });
  }

  @Post("auth/mfa/enable")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Admin activate TOTP MFA" })
  async adminMfaEnable(@Body() body: any, @Headers() headers: any) {
    const admin = requireAdmin(headers);
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/auth/admin/mfa/enable", {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify({ ...body, email: body?.email || admin.email }),
    });
  }

  @Post("auth/mfa/disable")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Admin disable TOTP MFA" })
  async adminMfaDisable(@Body() body: any, @Headers() headers: any) {
    const admin = requireAdmin(headers);
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/auth/admin/mfa/disable", {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify({ ...body, email: body?.email || admin.email }),
    });
  }

  @Get("auth/me")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get current admin profile and MFA status" })
  async getAdminMe(@Headers() headers: any) {
    const admin = requireAdmin(headers);
    return this.proxy.dispatch(this.identityServiceUrl, `/api/v1/auth/admin/me?email=${encodeURIComponent(admin.email)}`, {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Patch("auth/me")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update admin profile" })
  async updateAdminMe(@Body() body: any, @Headers() headers: any) {
    const admin = requireAdmin(headers);
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/auth/admin/me", {
      method: "PATCH",
      headers: { authorization: headers.authorization },
      body: JSON.stringify({ ...body, email: admin.email }),
    });
  }

  @Post("auth/token/refresh")
  @ApiOperation({ summary: "Rotate admin refresh token" })
  async adminRefreshToken(@Body() body: { refreshToken: string }) {
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/auth/token/refresh", {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  @Post("auth/logout")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Revoke admin session" })
  async adminLogout(@Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/auth/logout", {
      method: "POST",
      headers: { authorization: headers.authorization },
    });
  }

  // =========================================================================
  // AUDIT LOGS
  // =========================================================================

  @Get("audit-logs")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Query tamper-evident admin audit log" })
  @ApiQuery({ name: "operatorId", required: false })
  @ApiQuery({ name: "action", required: false })
  @ApiQuery({ name: "from", required: false })
  @ApiQuery({ name: "to", required: false })
  @ApiQuery({ name: "page", required: false })
  async getAuditLogs(
    @Query("operatorId") operatorId?: string,
    @Query("action") action?: string,
    @Query("from") from?: string,
    @Query("to") to?: string,
    @Query("page") page?: string,
    @Headers() headers?: any
  ) {
    requireAdmin(headers!);
    const params = new URLSearchParams();
    if (operatorId) params.set("operatorId", operatorId);
    if (action) params.set("action", action);
    if (from) params.set("from", from);
    if (to) params.set("to", to);
    if (page) params.set("page", page);
    return this.proxy.dispatch(this.identityServiceUrl, `/api/v1/identity/admin/audit-logs?${params.toString()}`, {
      method: "GET",
      headers: { authorization: headers!.authorization },
    });
  }

  // =========================================================================
  // SUPPORT TICKETS
  // =========================================================================

  @Get("support-tickets")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List support tickets" })
  @ApiQuery({ name: "status", required: false })
  @ApiQuery({ name: "priority", required: false })
  @ApiQuery({ name: "cityCode", required: false })
  @ApiQuery({ name: "page", required: false })
  async listTickets(
    @Query("status") status?: string,
    @Query("priority") priority?: string,
    @Query("cityCode") cityCode?: string,
    @Query("page") page?: string,
    @Headers() headers?: any
  ) {
    requireAdmin(headers!);
    const params = new URLSearchParams();
    if (status) params.set("status", status);
    if (priority) params.set("priority", priority);
    if (cityCode) params.set("cityCode", cityCode);
    if (page) params.set("page", page);
    return this.proxy.dispatch(this.reviewServiceUrl, `/api/v1/support/admin/tickets?${params.toString()}`, {
      method: "GET",
      headers: { authorization: headers!.authorization },
    });
  }

  @Get("support-tickets/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get support ticket detail with messages" })
  async getTicket(@Param("id") id: string, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.reviewServiceUrl, `/api/v1/support/tickets/${id}`, {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Post("support-tickets/:id/reply")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Add an agent reply to a support ticket" })
  async replyTicket(@Param("id") id: string, @Body() body: { message: string }, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.reviewServiceUrl, `/api/v1/support/tickets/${id}/messages`, {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  @Patch("support-tickets/:id/status")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update support ticket status (OPEN/IN_PROGRESS/RESOLVED/CLOSED)" })
  async updateTicketStatus(@Param("id") id: string, @Body() body: { status: string }, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.reviewServiceUrl, `/api/v1/support/tickets/${id}/status`, {
      method: "PATCH",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  // =========================================================================
  // REVIEWS MODERATION
  // =========================================================================

  @Get("reviews")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List reviews pending moderation" })
  @ApiQuery({ name: "cityCode", required: false })
  @ApiQuery({ name: "isModerated", required: false })
  @ApiQuery({ name: "page", required: false })
  async listReviews(
    @Query("cityCode") cityCode?: string,
    @Query("isModerated") isModerated?: string,
    @Query("page") page?: string,
    @Headers() headers?: any
  ) {
    requireAdmin(headers!);
    const params = new URLSearchParams();
    if (cityCode) params.set("cityCode", cityCode);
    if (isModerated !== undefined) params.set("isModerated", isModerated);
    if (page) params.set("page", page);
    return this.proxy.dispatch(this.reviewServiceUrl, `/api/v1/reviews/admin?${params.toString()}`, {
      method: "GET",
      headers: { authorization: headers!.authorization },
    });
  }

  @Post("reviews/:id/moderate")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Approve or remove a review" })
  async moderateReview(@Param("id") id: string, @Body() body: { action: "APPROVE" | "REMOVE"; reason?: string }, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.reviewServiceUrl, `/api/v1/reviews/${id}/moderate`, {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  // =========================================================================
  // NOTIFICATIONS
  // =========================================================================

  @Post("notifications/broadcast")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Send a platform-wide broadcast notification" })
  async broadcastNotification(@Body() body: any, @Headers() headers: any) {
    requireAdmin(headers);
    return this.proxy.dispatch(this.notificationServiceUrl, "/api/v1/notifications/admin/broadcast", {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  // =========================================================================
  // SYSTEM HEALTH
  // =========================================================================

  @Get("system/health")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Aggregate health check across all microservices" })
  async getSystemHealth(@Headers() headers: any) {
    requireAdmin(headers);
    const services: Record<string, string> = {
      identity: `${this.identityServiceUrl}/health`,
      merchant: `${this.merchantServiceUrl}/health`,
      catalog: `${this.catalogServiceUrl}/health`,
      order: `${this.orderServiceUrl}/health`,
      payment: `${this.paymentServiceUrl}/health`,
      fulfillment: `${this.fulfillmentServiceUrl}/health`,
      subscription: `${this.subscriptionServiceUrl}/health`,
      analytics: `${this.analyticsServiceUrl}/health`,
      notification: `${this.notificationServiceUrl}/health`,
      review: `${this.reviewServiceUrl}/health`,
    };

    const results = await Promise.allSettled(
      Object.entries(services).map(async ([name, url]) => {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 3000);
        try {
          const res = await fetch(url, { signal: ctrl.signal });
          clearTimeout(timer);
          return { name, status: res.ok ? "UP" : "DEGRADED", code: res.status };
        } catch {
          clearTimeout(timer);
          return { name, status: "DOWN", code: 0 };
        }
      })
    );

    const checks = results.map((r) => (r.status === "fulfilled" ? r.value : { name: "unknown", status: "DOWN", code: 0 }));
    const overall = checks.every((c) => c.status === "UP") ? "HEALTHY" : checks.some((c) => c.status === "DOWN") ? "DEGRADED" : "PARTIAL";
    return { overall, services: checks, timestamp: new Date().toISOString() };
  }
}
