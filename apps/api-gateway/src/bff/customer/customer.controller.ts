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

// JWT_SECRET validated non-null at gateway startup (main.ts)
const JWT_SECRET = process.env.JWT_SECRET as string;

function resolveCustomerContext(headers: Record<string, any>, req: any): { sub: string } | null {
  const authHeader = headers?.authorization ?? req?.headers?.authorization;
  if (!authHeader?.startsWith("Bearer ")) return null;
  try {
    const decoded: any = jwt.verify(authHeader.substring(7), JWT_SECRET, {
      issuer: process.env.JWT_ISSUER,
      audience: process.env.JWT_AUDIENCE,
    });
    return { sub: decoded.sub };
  } catch {
    return null;
  }
}

function requireCustomer(headers: Record<string, any>, req: any): { sub: string } {
  const ctx = resolveCustomerContext(headers, req);
  if (!ctx) throw new UnauthorizedException("Authentication required");
  return ctx;
}

@ApiTags("Customer BFF")
@Controller("api/v1/customer")
export class CustomerController {
  private readonly discoveryServiceUrl = process.env.DISCOVERY_SERVICE_URL as string;
  private readonly catalogServiceUrl = process.env.CATALOG_SERVICE_URL as string;
  private readonly orderServiceUrl = process.env.ORDER_SERVICE_URL as string;
  private readonly fulfillmentServiceUrl = process.env.FULFILLMENT_SERVICE_URL as string;
  private readonly identityServiceUrl = process.env.IDENTITY_SERVICE_URL as string;
  private readonly reviewServiceUrl = process.env.REVIEW_SUPPORT_SERVICE_URL as string;
  private readonly notificationServiceUrl = process.env.NOTIFICATION_SERVICE_URL as string;
  private readonly paymentServiceUrl = process.env.PAYMENT_SERVICE_URL as string;

  constructor(private readonly proxy: ProxyDispatcherService) {}

  // -------------------------------------------------------------------------
  // Discovery
  // -------------------------------------------------------------------------

  @Get("outlets/nearby")
  @ApiOperation({ summary: "Find nearby outlets by location, category and fulfilment type" })
  @ApiQuery({ name: "lat", required: true })
  @ApiQuery({ name: "lng", required: true })
  @ApiQuery({ name: "locality", required: false })
  @ApiQuery({ name: "cityCode", required: false })
  @ApiQuery({ name: "category", required: false })
  @ApiQuery({ name: "fulfilmentType", required: false })
  @ApiQuery({ name: "limit", required: false })
  async getNearbyOutlets(
    @Query("lat") lat: string,
    @Query("lng") lng: string,
    @Query("locality") locality?: string,
    @Query("cityCode") cityCode?: string,
    @Query("category") category?: string,
    @Query("fulfilmentType") fulfilmentType?: string,
    @Query("limit") limit?: string
  ) {
    const params = new URLSearchParams({ lat, lng });
    if (locality) params.set("locality", locality);
    if (cityCode) params.set("cityCode", cityCode);
    if (category) params.set("category", category);
    if (fulfilmentType) params.set("fulfilmentType", fulfilmentType);
    if (limit) params.set("limit", limit);
    return this.proxy.dispatch(this.discoveryServiceUrl, `/api/v1/discovery/outlets/nearby?${params.toString()}`);
  }

  @Get("outlets/:id/feed")
  @ApiOperation({ summary: "Get outlet storefront — profile, products, reviews" })
  async getOutletFeed(@Param("id") id: string) {
    const [outlet, products, reviews] = await Promise.all([
      this.proxy.dispatch<any>(this.discoveryServiceUrl, `/api/v1/discovery/outlets/${id}`),
      this.proxy.dispatch<any>(this.catalogServiceUrl, `/api/v1/catalog/products?outletId=${id}&limit=50`),
      this.proxy.dispatch<any>(this.reviewServiceUrl, `/api/v1/reviews?outletId=${id}&limit=10`).catch(() => ({ data: [] })),
    ]);
    return { outlet, products, reviews };
  }

  // -------------------------------------------------------------------------
  // Catalog
  // -------------------------------------------------------------------------

  @Get("products")
  @ApiOperation({ summary: "List products for an outlet" })
  @ApiQuery({ name: "outletId", required: true })
  @ApiQuery({ name: "category", required: false })
  @ApiQuery({ name: "page", required: false })
  @ApiQuery({ name: "limit", required: false })
  async getProducts(
    @Query("outletId") outletId: string,
    @Query("category") category?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string
  ) {
    const params = new URLSearchParams({ outletId });
    if (category) params.set("category", category);
    if (page) params.set("page", page);
    params.set("limit", limit ?? "50");
    return this.proxy.dispatch(this.catalogServiceUrl, `/api/v1/catalog/products?${params.toString()}`);
  }

  @Get("products/:id")
  @ApiOperation({ summary: "Get single product with variant pricing and stock" })
  async getProduct(@Param("id") id: string) {
    return this.proxy.dispatch(this.catalogServiceUrl, `/api/v1/catalog/products/${id}`);
  }

  @Get("categories")
  @ApiOperation({ summary: "List product categories available on the platform" })
  async getCategories() {
    return this.proxy.dispatch(this.catalogServiceUrl, "/api/v1/catalog/categories");
  }

  // -------------------------------------------------------------------------
  // Cart & Checkout
  // -------------------------------------------------------------------------

  @Get("cart")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get authenticated customer active cart" })
  async getCart(@Headers() headers: any, @Req() req: any) {
    const { sub } = requireCustomer(headers, req);
    return this.proxy.dispatch(this.orderServiceUrl, `/api/v1/orders/cart`, {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Post("cart/items")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Add or update item in cart" })
  async addToCart(@Body() body: any, @Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.orderServiceUrl, "/api/v1/orders/cart/items", {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  @Post("checkout")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Checkout cart into an order" })
  async checkout(@Body() body: any, @Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    const idempotencyKey = headers["idempotency-key"] ?? body.idempotencyKey;
    const extraHeaders: Record<string, string> = { authorization: headers.authorization };
    if (idempotencyKey) extraHeaders["idempotency-key"] = idempotencyKey;
    return this.proxy.dispatch(this.orderServiceUrl, "/api/v1/orders/checkout", {
      method: "POST",
      headers: extraHeaders,
      body: JSON.stringify(body),
    });
  }

  // -------------------------------------------------------------------------
  // Orders
  // -------------------------------------------------------------------------

  @Get("orders")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List customer orders" })
  @ApiQuery({ name: "status", required: false })
  @ApiQuery({ name: "page", required: false })
  async getMyOrders(
    @Query("status") status?: string,
    @Query("page") page?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    requireCustomer(headers!, req);
    const params = new URLSearchParams();
    if (status) params.set("status", status);
    if (page) params.set("page", page);
    return this.proxy.dispatch(this.orderServiceUrl, `/api/v1/orders/my?${params.toString()}`, {
      method: "GET",
      headers: { authorization: headers!.authorization },
    });
  }

  @Get("orders/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get order detail" })
  async getOrder(@Param("id") id: string, @Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.orderServiceUrl, `/api/v1/orders/${id}`, {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Get("orders/:id/track")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get live order tracking status" })
  async trackOrder(@Param("id") id: string, @Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.orderServiceUrl, `/api/v1/orders/${id}/track`, {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Get("orders/:id/invoice")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get order invoice" })
  async getInvoice(@Param("id") id: string, @Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.orderServiceUrl, `/api/v1/orders/${id}/invoice`, {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  // -------------------------------------------------------------------------
  // Fulfillment slots
  // -------------------------------------------------------------------------

  @Get("outlets/:id/slots")
  @ApiOperation({ summary: "Get available pickup slots for an outlet" })
  @ApiQuery({ name: "date", required: false })
  async getSlots(@Param("id") outletId: string, @Query("date") date?: string) {
    const params = new URLSearchParams({ outletId });
    if (date) params.set("date", date);
    return this.proxy.dispatch(this.fulfillmentServiceUrl, `/api/v1/fulfillment/slots?${params.toString()}`);
  }

  // -------------------------------------------------------------------------
  // Payments
  // -------------------------------------------------------------------------

  @Post("payments/intent")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create payment intent for an order" })
  async createPaymentIntent(@Body() body: any, @Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.paymentServiceUrl, "/api/v1/payments/intents", {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  // -------------------------------------------------------------------------
  // Profile & Account
  // -------------------------------------------------------------------------

  @Get("profile")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get customer profile" })
  async getProfile(@Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/identity/me", {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Put("profile")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update customer profile" })
  async updateProfile(@Body() body: any, @Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/identity/me", {
      method: "PUT",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  @Delete("account")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Delete customer account (GDPR right to erasure)" })
  async deleteAccount(@Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/identity/me", {
      method: "DELETE",
      headers: { authorization: headers.authorization },
    });
  }

  // -------------------------------------------------------------------------
  // Notifications
  // -------------------------------------------------------------------------

  @Get("notifications")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get customer notification history" })
  async getNotifications(@Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.notificationServiceUrl, "/api/v1/notifications/my", {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Patch("notifications/read-all")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Mark all notifications as read" })
  async markAllRead(@Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.notificationServiceUrl, "/api/v1/notifications/read-all", {
      method: "PATCH",
      headers: { authorization: headers.authorization },
    });
  }

  @Post("notifications/register-token")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Register FCM device token for push notifications" })
  async registerPushToken(@Body() body: { token: string; platform: string }, @Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.notificationServiceUrl, "/api/v1/notifications/device-token", {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  // -------------------------------------------------------------------------
  // Reviews
  // -------------------------------------------------------------------------

  @Post("reviews")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Submit review for a completed order" })
  async submitReview(@Body() body: any, @Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.reviewServiceUrl, "/api/v1/reviews", {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  // -------------------------------------------------------------------------
  // Support
  // -------------------------------------------------------------------------

  @Post("support/tickets")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Open a support ticket" })
  async createTicket(@Body() body: any, @Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.reviewServiceUrl, "/api/v1/support/tickets", {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  // -------------------------------------------------------------------------
  // Search
  // -------------------------------------------------------------------------

  @Get("search/trending")
  @ApiOperation({ summary: "Get trending searches and categories" })
  async getTrending(@Query("cityCode") cityCode?: string) {
    const params = cityCode ? `?cityCode=${cityCode}` : "";
    return this.proxy.dispatch(this.discoveryServiceUrl, `/api/v1/discovery/trending${params}`);
  }
}
