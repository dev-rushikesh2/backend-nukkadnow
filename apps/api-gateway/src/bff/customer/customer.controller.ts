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
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery } from "@nestjs/swagger";
import { ProxyDispatcherService } from "../../clients/proxy-dispatcher.service";
import { searchLocationsWithOsm, reverseGeocodeWithOsm } from "../shared/locations.helper";
import * as jwt from "jsonwebtoken";

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

function formatCatalogProduct(
  p: any,
  outlet?: any,
  ratingSummary?: { averageRating?: number; totalReviews?: number } | null
) {
  const firstVar = Array.isArray(p?.variants) && p.variants.length > 0 ? p.variants[0] : null;
  const pricePaise = Number(firstVar?.pricePaise ?? p?.pricePaise ?? 0);
  const comparePaise = firstVar?.compareAtPricePaise ?? p?.compareAtPricePaise;
  const price = Math.round(pricePaise / 100);
  const compareAtPrice = comparePaise ? Math.round(Number(comparePaise) / 100) : undefined;
  const discountPct =
    compareAtPrice && compareAtPrice > price
      ? `${Math.round(((compareAtPrice - price) / compareAtPrice) * 100)}% OFF`
      : undefined;

  return {
    id: p.id,
    tenantId: p.tenantId,
    outletId: p.outletId,
    outletName: outlet?.name || p.outletName || "Local Store",
    outletCity: outlet?.city || p.outletCity || "Akola",
    name: p.name,
    description: p.description || "",
    category: p.category || "Grocery",
    subCategory: p.subCategory || p.category || "Daily Needs",
    unit: firstVar?.name && firstVar.name !== "Standard" ? firstVar.name : "1 Pack",
    pricePaise,
    price,
    compareAtPaise: comparePaise,
    compareAtPrice,
    discountBadge: discountPct,
    isAvailable: p.isAvailable ?? true,
    availableStock: firstVar?.availableStock ?? firstVar?.stockBalance?.onHandQuantity ?? 0,
    rating: ratingSummary?.averageRating ?? 0,
    reviewsCount: ratingSummary?.totalReviews ?? 0,
    image:
      p.imageUrl ||
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
    imageUrl:
      p.imageUrl ||
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
    variants: p.variants || [],
  };
}

@ApiTags("Customer BFF")
@Controller("api/v1/customer")
export class CustomerController {
  private readonly merchantServiceUrl = process.env.MERCHANT_SERVICE_URL as string;
  private readonly catalogServiceUrl = process.env.CATALOG_SERVICE_URL as string;
  private readonly orderServiceUrl = process.env.ORDER_SERVICE_URL as string;
  private readonly fulfillmentServiceUrl = process.env.FULFILLMENT_SERVICE_URL as string;
  private readonly identityServiceUrl = process.env.IDENTITY_SERVICE_URL as string;
  private readonly reviewServiceUrl = process.env.REVIEW_SUPPORT_SERVICE_URL as string;
  private readonly paymentServiceUrl = process.env.PAYMENT_SERVICE_URL as string;

  constructor(private readonly proxy: ProxyDispatcherService) {}

  // -------------------------------------------------------------------------
  // Customer Location Search & Reverse Geocoding (Swiggy / Zomato / Blinkit)
  // -------------------------------------------------------------------------

  @Get("locations/areas")
  @ApiOperation({ summary: "Search serviceable areas, streets & pincodes with live OSM/Photon autocomplete" })
  async searchAreas(
    @Query("q") q?: string,
    @Query("lat") lat?: string,
    @Query("lng") lng?: string
  ) {
    return searchLocationsWithOsm({ proxy: this.proxy, merchantServiceUrl: this.merchantServiceUrl, q, lat, lng });
  }

  @Get("locations/reverse")
  @ApiOperation({ summary: "Reverse-geocode real GPS/map coordinates via Nominatim + BigDataCloud" })
  async reverseGeocode(@Query("lat") lat: string, @Query("lng") lng: string) {
    return reverseGeocodeWithOsm({ proxy: this.proxy, merchantServiceUrl: this.merchantServiceUrl, lat, lng });
  }

  // -------------------------------------------------------------------------
  // Discovery & Storefronts (backed directly by Merchant + Catalog PostgreSQL)
  // -------------------------------------------------------------------------

  @Get("outlets/nearby")
  @ApiOperation({ summary: "Find nearby active outlets by location, category, query and fulfilment type" })
  async getNearbyOutlets(
    @Query("lat") lat?: string,
    @Query("lng") lng?: string,
    @Query("locality") locality?: string,
    @Query("city") city?: string,
    @Query("pincode") pincode?: string,
    @Query("category") category?: string,
    @Query("query") query?: string,
    @Query("fulfilmentType") fulfilmentType?: string,
    @Query("radiusKm") radiusKm?: string,
    @Query("limit") limit?: string
  ) {
    const params = new URLSearchParams();
    if (lat && lat !== "undefined") params.set("lat", lat);
    if (lng && lng !== "undefined") params.set("lng", lng);
    if (locality) params.set("locality", locality);
    if (city) params.set("city", city);
    if (pincode) params.set("pincode", pincode);
    if (category) params.set("category", category);
    if (query) params.set("query", query);
    if (fulfilmentType) params.set("fulfilmentType", fulfilmentType);
    if (radiusKm) params.set("radiusKm", radiusKm);
    if (limit) params.set("limit", limit);

    const qs = params.toString() ? `?${params.toString()}` : "";
    const [outlets, summaries] = await Promise.all([
      this.proxy.dispatch<any[]>(this.merchantServiceUrl, `/api/v1/merchants/outlets/public${qs}`),
      this.proxy.dispatch<any>(this.reviewServiceUrl, "/api/v1/support/reviews/summaries").catch(() => null),
    ]);

    const outletSummaries = summaries?.outlets || {};
    const data = (Array.isArray(outlets) ? outlets : []).map((o: any) => {
      const s = outletSummaries[o.id];
      return {
        ...o,
        rating: s?.averageRating ?? o.rating ?? 0,
        reviewsCount: s?.totalReviews ?? o.reviewsCount ?? 0,
      };
    });
    return {
      success: true,
      data,
      meta: {
        total: data.length,
        locality: locality || city || "All Active Areas",
      },
    };
  }

  @Get("outlets/:id/feed")
  @ApiOperation({ summary: "Get outlet storefront — profile, products, reviews" })
  async getOutletFeed(@Param("id") id: string) {
    const [outlet, rawProducts, reviews, summaries] = await Promise.all([
      this.proxy.dispatch<any>(this.merchantServiceUrl, `/api/v1/merchants/outlets/public/${encodeURIComponent(id)}`),
      this.proxy
        .dispatch<any[]>(this.catalogServiceUrl, `/api/v1/catalog/outlets/${encodeURIComponent(id)}/products`)
        .catch(() => []),
      this.proxy
        .dispatch<any>(this.reviewServiceUrl, `/api/v1/support/reviews/outlet/${encodeURIComponent(id)}`)
        .catch(() => ({ outletId: id, averageRating: 0, totalReviews: 0, ratingBreakdown: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }, reviews: [] })),
      this.proxy.dispatch<any>(this.reviewServiceUrl, "/api/v1/support/reviews/summaries").catch(() => null),
    ]);

    const enrichedOutlet = {
      ...outlet,
      rating: reviews?.averageRating ?? 0,
      reviewsCount: reviews?.totalReviews ?? 0,
    };

    const productSummaries = summaries?.products || {};
    const productsList = Array.isArray(rawProducts)
      ? rawProducts
          .filter((p) => p?.isAvailable !== false)
          .map((p) => formatCatalogProduct(p, enrichedOutlet, productSummaries[p.id]))
      : [];

    return { outlet: enrichedOutlet, products: productsList, reviews };
  }

  @Get("outlets/:id/reviews")
  @ApiOperation({ summary: "Get public ratings and verified buyer reviews for an outlet" })
  async getOutletReviewsPublic(@Param("id") id: string) {
    const res = await this.proxy
      .dispatch<any>(this.reviewServiceUrl, `/api/v1/support/reviews/outlet/${encodeURIComponent(id)}`)
      .catch(() => ({
        outletId: id,
        averageRating: 0,
        totalReviews: 0,
        ratingBreakdown: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
        reviews: [],
      }));
    return { success: true, ...res };
  }

  @Get("outlets/:id/slots")
  @ApiOperation({ summary: "Get available pickup slots for an outlet" })
  async getSlots(@Param("id") outletId: string, @Query("date") date?: string) {
    if (!outletId || outletId === "undefined") {
      return { success: true, slots: [] };
    }
    const qs = date ? `?date=${encodeURIComponent(date)}` : "";
    return this.proxy
      .dispatch(this.fulfillmentServiceUrl, `/api/v1/fulfillment/outlets/${encodeURIComponent(outletId)}/slots${qs}`)
      .catch(() => ({ success: true, slots: [] }));
  }

  // -------------------------------------------------------------------------
  // Catalog, Categories & Offers
  // -------------------------------------------------------------------------

  @Get("categories")
  @ApiOperation({ summary: "List product categories available on the platform" })
  async getCategories() {
    return this.proxy.dispatch(this.catalogServiceUrl, "/api/v1/catalog/categories");
  }

  @Get("banners")
  @ApiOperation({ summary: "Get active admin-managed marketing hero banners" })
  async getBanners(@Query("cityCode") cityCode?: string) {
    const qs = cityCode ? `?cityCode=${encodeURIComponent(cityCode)}` : "";
    return this.proxy
      .dispatch(this.merchantServiceUrl, `/api/v1/marketing/banners/public${qs}`)
      .catch(() => ({ success: true, data: [] }));
  }

  @Post("banners/:id/track")
  @ApiOperation({ summary: "Track click or impression on a marketing banner" })
  async trackBanner(@Param("id") id: string, @Body() body: { type?: string }) {
    return this.proxy
      .dispatch(this.merchantServiceUrl, `/api/v1/marketing/banners/${encodeURIComponent(id)}/track`, {
        method: "POST",
        body: JSON.stringify({ type: body?.type || "click" }),
      })
      .catch(() => ({ success: true, tracked: false }));
  }

  @Get("offers")
  @ApiOperation({ summary: "List active local shop offers & deals" })
  async getOffers() {
    const [outlets, prodRes] = await Promise.all([
      this.proxy.dispatch<any[]>(this.merchantServiceUrl, "/api/v1/merchants/outlets/public?limit=10").catch(() => []),
      this.proxy.dispatch<any>(this.catalogServiceUrl, "/api/v1/catalog/products?limit=20").catch(() => null),
    ]);

    const outletList = Array.isArray(outlets) ? outlets : [];
    const items = Array.isArray(prodRes?.data?.items) ? prodRes.data.items : [];
    const discounted = items.filter((p: any) => {
      const v = p?.variants?.[0];
      return v?.compareAtPricePaise && v.compareAtPricePaise > v.pricePaise;
    });

    const offers: any[] = [];
    if (discounted.length > 0) {
      for (const p of discounted.slice(0, 4)) {
        const v = p.variants[0];
        const pct = Math.round(((v.compareAtPricePaise - v.pricePaise) / v.compareAtPricePaise) * 100);
        offers.push({
          id: `offer-${p.id}`,
          title: `${p.name}`,
          discount: `Up to ${pct}% OFF`,
          bgGradient: "linear-gradient(135deg, #6D28D9 0%, #4C1D95 100%)",
          icon: "🏷️",
          shopId: p.outletId,
        });
      }
    } else if (outletList.length > 0) {
      for (const o of outletList.slice(0, 3)) {
        offers.push({
          id: `shop-offer-${o.id}`,
          title: `${o.name}`,
          discount: o.freeDeliveryThreshold ? `Free delivery over ₹${o.freeDeliveryThreshold}` : "Fresh Local Store",
          bgGradient: "linear-gradient(135deg, #FF5A1F 0%, #EA580C 100%)",
          icon: "🏪",
          shopId: o.id,
        });
      }
    }

    return { success: true, data: offers };
  }

  @Get("products")
  @ApiOperation({ summary: "List or search products across active outlets" })
  @ApiQuery({ name: "outletId", required: false })
  @ApiQuery({ name: "category", required: false })
  @ApiQuery({ name: "query", required: false })
  async getProducts(
    @Query("outletId") outletId?: string,
    @Query("category") category?: string,
    @Query("query") query?: string,
    @Query("q") q?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string
  ) {
    const params = new URLSearchParams();
    if (outletId && outletId !== "undefined") params.set("outletId", outletId);
    if (category && category !== "ALL") params.set("category", category);
    if (query) params.set("query", query);
    if (q) params.set("q", q);
    if (page) params.set("page", page);
    params.set("limit", limit ?? "50");

    const [res, summaries] = await Promise.all([
      this.proxy.dispatch<any>(this.catalogServiceUrl, `/api/v1/catalog/products?${params.toString()}`),
      this.proxy.dispatch<any>(this.reviewServiceUrl, "/api/v1/support/reviews/summaries").catch(() => null),
    ]);
    const rawItems = Array.isArray(res?.data?.items)
      ? res.data.items
      : Array.isArray(res)
        ? res
        : [];
    const productSummaries = summaries?.products || {};
    const data = rawItems.map((p: any) => formatCatalogProduct(p, undefined, productSummaries[p.id]));
    return { success: true, data };
  }

  @Get("products/:id")
  @ApiOperation({ summary: "Get single product with variant pricing, stock, and outlet name" })
  async getProduct(@Param("id") id: string) {
    const [product, prodReviews] = await Promise.all([
      this.proxy.dispatch<any>(this.catalogServiceUrl, `/api/v1/catalog/products/${encodeURIComponent(id)}`),
      this.proxy
        .dispatch<any>(this.reviewServiceUrl, `/api/v1/support/reviews/product/${encodeURIComponent(id)}`)
        .catch(() => ({ productId: id, averageRating: 0, totalReviews: 0, ratingBreakdown: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }, reviews: [] })),
    ]);
    let outlet: any = null;
    if (product?.outletId) {
      outlet = await this.proxy
        .dispatch<any>(this.merchantServiceUrl, `/api/v1/merchants/outlets/public/${encodeURIComponent(product.outletId)}`)
        .catch(() => null);
    }
    return { success: true, data: formatCatalogProduct(product, outlet, prodReviews), reviews: prodReviews };
  }

  @Get("products/:id/reviews")
  @ApiOperation({ summary: "Get public ratings and verified buyer reviews for a product" })
  async getProductReviewsPublic(@Param("id") id: string) {
    const res = await this.proxy
      .dispatch<any>(this.reviewServiceUrl, `/api/v1/support/reviews/product/${encodeURIComponent(id)}`)
      .catch(() => ({
        productId: id,
        averageRating: 0,
        totalReviews: 0,
        ratingBreakdown: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
        reviews: [],
      }));
    return { success: true, ...res };
  }

  @Get("search/trending")
  @ApiOperation({ summary: "Get trending searches from active catalog" })
  async getTrending() {
    const prodRes = await this.proxy
      .dispatch<any>(this.catalogServiceUrl, "/api/v1/catalog/products?limit=8")
      .catch(() => null);
    const items = Array.isArray(prodRes?.data?.items) ? prodRes.data.items : [];
    const terms = items.map((p: any) => String(p.name || "").split(" ").slice(0, 3).join(" ")).filter(Boolean);
    return {
      success: true,
      data: terms.length > 0 ? Array.from(new Set(terms)) : ["Basmati Rice", "Toor Dal", "Fresh Vegetables", "Atta"],
    };
  }

  // -------------------------------------------------------------------------
  // Cart, Coupons & Orders
  // -------------------------------------------------------------------------

  @Get("cart")
  @ApiBearerAuth()
  async getCart(@Headers() headers: any, @Req() req: any) {
    const { sub } = requireCustomer(headers, req);
    return this.proxy.dispatch(this.orderServiceUrl, `/api/v1/orders/cart`, {
      method: "GET",
      headers: { authorization: headers.authorization, "x-customer-id": sub },
    });
  }

  @Post("cart/items")
  @ApiBearerAuth()
  async addToCart(@Body() body: any, @Headers() headers: any, @Req() req: any) {
    const { sub } = requireCustomer(headers, req);
    return this.proxy.dispatch(this.orderServiceUrl, "/api/v1/orders/cart/items", {
      method: "POST",
      headers: { authorization: headers.authorization, "x-customer-id": sub },
      body: JSON.stringify(body),
    });
  }

  @Post("coupons/validate")
  @ApiOperation({ summary: "Validate a customer promo coupon" })
  async validateCoupon(@Body() body: { code?: string; totalAmount?: number }) {
    const code = String(body?.code || "").trim().toUpperCase();
    const total = Number(body?.totalAmount || 0);
    if (code === "NUKKAD10" && total >= 100) {
      const discountAmount = Math.min(50, Math.round(total * 0.1));
      return { valid: true, discountAmount, message: `Coupon ${code} applied! Saved ₹${discountAmount}` };
    }
    return { valid: false, discountAmount: 0, message: "Invalid or expired coupon code." };
  }

  @Post("checkout")
  @ApiBearerAuth()
  async checkout(@Body() body: any, @Headers() headers: any, @Req() req: any) {
    const { sub } = requireCustomer(headers, req);
    const idempotencyKey = headers["idempotency-key"] ?? body.idempotencyKey;
    const extraHeaders: Record<string, string> = {
      authorization: headers.authorization,
      "x-customer-id": sub,
    };
    if (idempotencyKey) extraHeaders["idempotency-key"] = idempotencyKey;
    return this.proxy.dispatch(this.orderServiceUrl, "/api/v1/orders/checkout", {
      method: "POST",
      headers: extraHeaders,
      body: JSON.stringify(body),
    });
  }

  @Post("orders")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Place a customer order from checkout" })
  async placeOrder(@Body() body: any, @Headers() headers: any, @Req() req: any) {
    const { sub } = requireCustomer(headers, req);
    let tenantId = body?.tenantId;
    const shopId = body?.shopId || body?.outletId;
    if (!tenantId && shopId) {
      const outlet = await this.proxy
        .dispatch<any>(this.merchantServiceUrl, `/api/v1/merchants/outlets/public/${encodeURIComponent(shopId)}`)
        .catch(() => null);
      tenantId = outlet?.merchantId || shopId;
    }

    return this.proxy.dispatch(this.orderServiceUrl, "/api/v1/orders/customer-place", {
      method: "POST",
      headers: { authorization: headers.authorization, "x-customer-id": sub },
      body: JSON.stringify({ ...body, outletId: shopId, tenantId }),
    });
  }

  @Get("orders/my")
  @ApiBearerAuth()
  @ApiOperation({ summary: "List authenticated customer's orders" })
  async getOrdersMy(@Query("status") status?: string, @Headers() headers?: any, @Req() req?: any) {
    const { sub } = requireCustomer(headers!, req);
    const params = new URLSearchParams();
    if (status) params.set("status", status);
    const qs = params.toString() ? `?${params.toString()}` : "";
    return this.proxy.dispatch(this.orderServiceUrl, `/api/v1/orders/my${qs}`, {
      method: "GET",
      headers: { authorization: headers!.authorization, "x-customer-id": sub },
    });
  }

  @Get("orders")
  @ApiBearerAuth()
  async getMyOrders(@Query("status") status?: string, @Headers() headers?: any, @Req() req?: any) {
    return this.getOrdersMy(status, headers, req);
  }

  @Get("orders/:id")
  @ApiBearerAuth()
  async getOrder(@Param("id") id: string, @Headers() headers: any, @Req() req: any) {
    const { sub } = requireCustomer(headers, req);
    const res = await this.proxy.dispatch<any>(this.orderServiceUrl, `/api/v1/orders/${encodeURIComponent(id)}`, {
      method: "GET",
      headers: { authorization: headers.authorization, "x-customer-id": sub },
    });
    const order = res?.data;
    if (order?.outletId) {
      const outlet = await this.proxy
        .dispatch<any>(this.merchantServiceUrl, `/api/v1/merchants/outlets/public/${encodeURIComponent(order.outletId)}`)
        .catch(() => null);
      if (outlet) {
        order.shopName = order.shopName || outlet.name;
        order.shopImage = order.shopImage || outlet.image;
        order.shopPhone = order.shopPhone || outlet.phone;
        order.categories = order.categories || outlet.category;
      }
    }
    return res;
  }

  @Get("orders/:id/track")
  @ApiBearerAuth()
  async trackOrder(@Param("id") id: string, @Headers() headers: any, @Req() req: any) {
    const { sub } = requireCustomer(headers, req);
    const res = await this.proxy.dispatch<any>(this.orderServiceUrl, `/api/v1/orders/${encodeURIComponent(id)}`, {
      method: "GET",
      headers: { authorization: headers.authorization, "x-customer-id": sub },
    });
    const order = res?.data || res;
    const outlet = order?.outletId
      ? await this.proxy
          .dispatch<any>(this.merchantServiceUrl, `/api/v1/merchants/outlets/public/${encodeURIComponent(order.outletId)}`)
          .catch(() => null)
      : null;

    const storeLat = Number(outlet?.latitude ?? 20.7002);
    const storeLng = Number(outlet?.longitude ?? 77.0082);
    const destLat = Number((storeLat + 0.008).toFixed(5));
    const destLng = Number((storeLng + 0.009).toFixed(5));
    const riderLat = Number((storeLat + 0.004).toFixed(5));
    const riderLng = Number((storeLng + 0.0045).toFixed(5));
    const firstRider = Array.isArray(outlet?.deliverySettings?.riders) && outlet.deliverySettings.riders.length > 0
      ? outlet.deliverySettings.riders[0]
      : null;

    const etaDate = new Date(Date.now() + 25 * 60000);
    const estimatedDelivery = etaDate.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

    return {
      orderId: order?.orderNumber || id,
      status: order?.status || "CONFIRMED",
      fulfillmentType: order?.fulfillmentType || "MERCHANT_DELIVERY",
      shopName: order?.shopName || outlet?.name || "NukkadNow Store",
      verified: true,
      itemCount: Array.isArray(order?.items) ? order.items.reduce((s: number, it: any) => s + Number(it.quantity || 1), 0) : 1,
      totalAmount: order?.totalAmount ?? 0,
      estimatedDelivery,
      etaMinutes: 25,
      distanceKm: "1.4 km",
      shopImage: order?.shopImage || outlet?.image || "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=200",
      deliveryAddress: order?.deliveryAddress || outlet?.fullAddress || "",
      rider: {
        name: firstRider?.name || "Store Delivery Partner",
        role: "In-Store Delivery Partner",
        rating: 4.9,
        deliveriesCount: "120+",
        phone: firstRider?.phone || outlet?.phone || "+91 98765 00000",
        avatar: "",
      },
      items: Array.isArray(order?.items)
        ? order.items.map((it: any) => ({
            name: it.name || it.title || "Item",
            qty: `${it.quantity || 1} unit`,
            image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=150&q=80",
          }))
        : [],
      storeCoords: [storeLat, storeLng],
      destCoords: [destLat, destLng],
      riderCoords: [riderLat, riderLng],
      routePath: [
        [storeLat, storeLng],
        [riderLat, riderLng],
        [destLat, destLng],
      ],
    };
  }

  // -------------------------------------------------------------------------
  // Payments
  // -------------------------------------------------------------------------

  @Post("payments/intent")
  @ApiBearerAuth()
  async createPaymentIntent(@Body() body: any, @Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.paymentServiceUrl, "/api/v1/payments/intents", {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  // -------------------------------------------------------------------------
  // Profile & Delivery Addresses
  // -------------------------------------------------------------------------

  @Get("profile")
  @ApiBearerAuth()
  async getProfile(@Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/identity/me", {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Put("profile")
  @ApiBearerAuth()
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
  async deleteAccount(@Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/identity/me", {
      method: "DELETE",
      headers: { authorization: headers.authorization },
    });
  }

  @Get("addresses")
  @ApiBearerAuth()
  async getAddresses(@Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/identity/addresses", {
      method: "GET",
      headers: { authorization: headers.authorization },
    });
  }

  @Post("addresses")
  @ApiBearerAuth()
  async createAddress(@Body() body: any, @Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.identityServiceUrl, "/api/v1/identity/addresses", {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  @Put("addresses/:id")
  @ApiBearerAuth()
  async updateAddress(@Param("id") id: string, @Body() body: any, @Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.identityServiceUrl, `/api/v1/identity/addresses/${encodeURIComponent(id)}`, {
      method: "PUT",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }

  @Delete("addresses/:id")
  @ApiBearerAuth()
  async deleteAddress(@Param("id") id: string, @Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.identityServiceUrl, `/api/v1/identity/addresses/${encodeURIComponent(id)}`, {
      method: "DELETE",
      headers: { authorization: headers.authorization },
    });
  }

  // -------------------------------------------------------------------------
  // Notifications & Favourites & Support
  // -------------------------------------------------------------------------

  @Get("notifications")
  async getNotifications() {
    return { success: true, data: [] };
  }

  @Patch("notifications/read-all")
  async markAllRead() {
    return { success: true };
  }

  @Post("notifications/register-token")
  async registerPushToken(@Body() body: { token?: string; platform?: string }) {
    return { success: true, registered: Boolean(body?.token) };
  }

  @Get("favourites")
  async getFavourites() {
    return { success: true, data: { shops: [], products: [] } };
  }

  @Post("favourites")
  async addFavourite(@Body() body: any) {
    return { success: true, data: body };
  }

  @Delete("favourites/:id")
  async removeFavourite(@Param("id") id: string) {
    return { success: true, deletedId: id };
  }

  @Get("reviews/eligibility")
  @ApiOperation({ summary: "Check whether the signed-in customer can review an outlet or product (verified buyers only)" })
  async getReviewEligibility(
    @Query("outletId") outletId?: string,
    @Query("productId") productId?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const ctx = resolveCustomerContext(headers || {}, req);
    if (!ctx) {
      return {
        success: true,
        authenticated: false,
        canReviewStore: false,
        canReviewProduct: false,
        alreadyReviewedStore: false,
        alreadyReviewedProduct: false,
        reason: "LOGIN_REQUIRED",
        eligibleStoreOrderId: null,
        eligibleProductOrderId: null,
        reviewedOrderIds: [],
        reviewedProductKeys: [],
        myReviews: [],
      };
    }

    const [ordersRes, myReviewsRaw] = await Promise.all([
      this.proxy
        .dispatch<any>(this.orderServiceUrl, "/api/v1/orders/my", {
          method: "GET",
          headers: { authorization: headers?.authorization, "x-customer-id": ctx.sub },
        })
        .catch(() => ({ data: [] })),
      this.proxy
        .dispatch<any[]>(this.reviewServiceUrl, `/api/v1/support/reviews/customer/${encodeURIComponent(ctx.sub)}`)
        .catch(() => []),
    ]);

    const orders = (Array.isArray(ordersRes?.data) ? ordersRes.data : []).filter(
      (o: any) => String(o.rawStatus || "").toUpperCase() !== "CANCELLED"
    );
    const myReviews = Array.isArray(myReviewsRaw) ? myReviewsRaw : [];

    const reviewedOrderIds = myReviews.filter((r) => !r.productId).map((r) => r.orderId);
    const reviewedOrderSet = new Set(reviewedOrderIds);
    const reviewedProductKeys = myReviews
      .filter((r) => Boolean(r.productId))
      .map((r) => `${r.orderId}:${r.productId}`);
    const reviewedProductSet = new Set(reviewedProductKeys);

    const storeOrders = outletId
      ? orders.filter((o: any) => o.shopId === outletId || o.outletId === outletId)
      : [];
    const unreviewedStoreOrders = storeOrders.filter((o: any) => !reviewedOrderSet.has(o.id));
    const canReviewStore = unreviewedStoreOrders.length > 0;
    const alreadyReviewedStore = storeOrders.length > 0 && unreviewedStoreOrders.length === 0;

    const productOrders = productId
      ? orders.filter(
          (o: any) => Array.isArray(o.items) && o.items.some((it: any) => it.productId === productId)
        )
      : [];
    const unreviewedProductOrders = productOrders.filter(
      (o: any) => !reviewedProductSet.has(`${o.id}:${productId}`)
    );
    const canReviewProduct = unreviewedProductOrders.length > 0;
    const alreadyReviewedProduct = productOrders.length > 0 && unreviewedProductOrders.length === 0;

    let reason = "ELIGIBLE";
    if (productId) {
      reason = !productOrders.length
        ? "ORDER_REQUIRED"
        : unreviewedProductOrders.length
          ? "ELIGIBLE"
          : "ALREADY_REVIEWED";
    } else if (outletId) {
      reason = !storeOrders.length
        ? "ORDER_REQUIRED"
        : unreviewedStoreOrders.length
          ? "ELIGIBLE"
          : "ALREADY_REVIEWED";
    }

    return {
      success: true,
      authenticated: true,
      canReviewStore,
      canReviewProduct,
      alreadyReviewedStore,
      alreadyReviewedProduct,
      reason,
      eligibleStoreOrderId: unreviewedStoreOrders[0]?.id || null,
      eligibleProductOrderId: unreviewedProductOrders[0]?.id || null,
      reviewedOrderIds,
      reviewedProductKeys,
      myReviews,
    };
  }

  @Post("reviews")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Submit a verified-purchase rating and review (only allowed after ordering)" })
  async submitReview(@Body() body: any, @Headers() headers: any, @Req() req: any) {
    const { sub } = requireCustomer(headers, req);
    const requestedOutletId = String(body?.outletId || body?.shopId || "").trim();
    const requestedOrderId = body?.orderId ? String(body.orderId).trim() : "";
    const requestedProductId = body?.productId ? String(body.productId).trim() : "";
    const rating = Math.round(Number(body?.rating || 0));

    if (rating < 1 || rating > 5) {
      throw new ForbiddenException("Rating must be between 1 and 5 stars.");
    }

    const [ordersRes, profileRes, myReviewsRaw] = await Promise.all([
      this.proxy
        .dispatch<any>(this.orderServiceUrl, "/api/v1/orders/my", {
          method: "GET",
          headers: { authorization: headers.authorization, "x-customer-id": sub },
        })
        .catch(() => ({ data: [] })),
      this.proxy
        .dispatch<any>(this.identityServiceUrl, "/api/v1/identity/me", {
          method: "GET",
          headers: { authorization: headers.authorization },
        })
        .catch(() => null),
      this.proxy
        .dispatch<any[]>(this.reviewServiceUrl, `/api/v1/support/reviews/customer/${encodeURIComponent(sub)}`)
        .catch(() => []),
    ]);

    const orders = (Array.isArray(ordersRes?.data) ? ordersRes.data : []).filter(
      (o: any) => String(o.rawStatus || "").toUpperCase() !== "CANCELLED"
    );
    const myReviews = Array.isArray(myReviewsRaw) ? myReviewsRaw : [];
    const reviewedOrderSet = new Set(myReviews.filter((r) => !r.productId).map((r) => r.orderId));
    const reviewedProductSet = new Set(
      myReviews.filter((r) => Boolean(r.productId)).map((r) => `${r.orderId}:${r.productId}`)
    );

    let targetOrder: any = null;
    if (requestedOrderId) {
      targetOrder = orders.find(
        (o: any) => o.id === requestedOrderId || o.orderNumber === requestedOrderId
      );
      if (!targetOrder) {
        throw new ForbiddenException(
          "Verified Buyers Only: You can only rate and review orders placed from your account."
        );
      }
      if (requestedOutletId && targetOrder.shopId !== requestedOutletId) {
        throw new ForbiddenException("This order does not belong to the selected store.");
      }
    } else if (requestedProductId) {
      const matchingOrders = orders.filter(
        (o: any) => Array.isArray(o.items) && o.items.some((it: any) => it.productId === requestedProductId)
      );
      if (matchingOrders.length === 0) {
        throw new ForbiddenException(
          "Verified Buyers Only: Order this item first before submitting a review."
        );
      }
      targetOrder =
        matchingOrders.find((o: any) => !reviewedProductSet.has(`${o.id}:${requestedProductId}`)) ||
        matchingOrders[0];
    } else if (requestedOutletId) {
      const matchingOrders = orders.filter(
        (o: any) => o.shopId === requestedOutletId || o.outletId === requestedOutletId
      );
      if (matchingOrders.length === 0) {
        throw new ForbiddenException(
          "Verified Buyers Only: Place an order from this store before rating or reviewing."
        );
      }
      targetOrder = matchingOrders.find((o: any) => !reviewedOrderSet.has(o.id)) || matchingOrders[0];
    } else {
      throw new ForbiddenException("Order or store reference is required to submit a review.");
    }

    let resolvedProductName: string | undefined = body?.productName ? String(body.productName) : undefined;
    if (requestedProductId) {
      const matchedItem = (targetOrder.items || []).find((it: any) => it.productId === requestedProductId);
      if (!matchedItem) {
        throw new ForbiddenException(
          "Verified Buyers Only: This product was not part of the selected order."
        );
      }
      resolvedProductName = resolvedProductName || matchedItem.name;
    }

    const customerName = String(profileRes?.data?.name || profileRes?.name || "Verified Buyer").trim();
    const resolvedOutletId = targetOrder.shopId || requestedOutletId;

    const created = await this.proxy.dispatch(this.reviewServiceUrl, "/api/v1/support/reviews", {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify({
        orderId: targetOrder.id,
        customerId: sub,
        customerName,
        outletId: resolvedOutletId,
        ...(requestedProductId ? { productId: requestedProductId, productName: resolvedProductName } : {}),
        rating,
        ...(body?.comment ? { comment: String(body.comment).trim() } : {}),
      }),
    });

    return {
      success: true,
      message: requestedProductId
        ? `Thank you for reviewing ${resolvedProductName || "this product"}!`
        : `Thank you for rating your order from ${targetOrder.shopName || "this store"}!`,
      data: created,
    };
  }

  @Post("support/tickets")
  @ApiBearerAuth()
  async createTicket(@Body() body: any, @Headers() headers: any, @Req() req: any) {
    requireCustomer(headers, req);
    return this.proxy.dispatch(this.reviewServiceUrl, "/api/v1/support/tickets", {
      method: "POST",
      headers: { authorization: headers.authorization },
      body: JSON.stringify(body),
    });
  }
}
