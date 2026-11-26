import { Controller, Post, Get, Patch, Body, Param, Query, Headers, Req, UnauthorizedException, NotFoundException, ForbiddenException, BadRequestException, ConflictException, ServiceUnavailableException } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { OrderService } from "../../../application/services/order.service";
import { OrderOutboxRelayService } from "../../../application/services/order-outbox-relay.service";
import { AddToCartDto, CheckoutDto, AcceptOrderDto } from "../../../application/dto/order.dto";
import { PrismaService } from "../../../infrastructure/persistence/prisma/prisma.service";

@ApiTags("Orders & Checkout")
@Controller("api/v1/orders")
export class OrdersController {
  private readonly catalogServiceUrl = process.env.CATALOG_SERVICE_URL || "http://localhost:4003";

  constructor(
    private readonly orderService: OrderService,
    private readonly outboxRelay: OrderOutboxRelayService,
    private readonly prisma: PrismaService
  ) {}

  private async resolveCatalogInventoryItems(
    items: Array<{ productId?: string; variantId?: string; quantity: number; title?: string; name?: string }>,
    direction: -1 | 1,
    expectedTenantId?: string,
    expectedOutletId?: string
  ): Promise<{ resolvedVariantIds: Map<number, string>; adjustments: Array<{ variantId: string; quantity: number }> }> {
    const resolvedVariantIds = new Map<number, string>();
    const aggregated = new Map<string, number>();

    for (let idx = 0; idx < items.length; idx++) {
      const item = items[idx];
      const qty = Math.max(1, Number(item.quantity) || 1);
      const productId = String(item.productId || "").trim();
      let variantId = String(item.variantId || "").trim();
      let shouldAdjust = false;

      if (productId && productId !== "item" && productId !== "pos-item") {
        let prodRes: Response;
        try {
          prodRes = await fetch(`${this.catalogServiceUrl}/api/v1/catalog/products/${encodeURIComponent(productId)}`);
        } catch (err: any) {
          throw new ServiceUnavailableException(`Catalog service unreachable to validate inventory: ${err?.message}`);
        }

        if (prodRes.ok) {
          const prodJson: any = await prodRes.json();
          if (expectedTenantId && prodJson?.tenantId && prodJson.tenantId !== expectedTenantId) {
            throw new ForbiddenException(`Cross-merchant item detected in order payload ("${prodJson.name}")`);
          }
          if (expectedOutletId && prodJson?.outletId && prodJson.outletId !== expectedOutletId) {
            throw new ForbiddenException(`Cross-outlet item detected in order payload ("${prodJson.name}")`);
          }

          const variants: any[] = Array.isArray(prodJson?.variants) ? prodJson.variants : [];
          const matched = variants.find((v) => v.id === variantId) || variants[0];
          if (matched) {
            variantId = matched.id;
            resolvedVariantIds.set(idx, variantId);
            const available = Number(matched.availableStock ?? matched.onHandStock ?? 0);
            if (direction === -1 && available < qty) {
              throw new BadRequestException(
                `Insufficient stock for "${item.title || item.name || prodJson.name || "Item"}" (available: ${available}, requested: ${qty})`
              );
            }
            shouldAdjust = true;
          }
        }
      }

      if (variantId && variantId !== "var" && variantId !== "pos-var" && shouldAdjust) {
        aggregated.set(variantId, (aggregated.get(variantId) || 0) + qty);
      }
    }

    const adjustments = Array.from(aggregated.entries()).map(([variantId, quantity]) => ({ variantId, quantity }));
    return { resolvedVariantIds, adjustments };
  }

  private async applyCatalogInventoryAdjustments(
    outletId: string,
    orderNumber: string,
    adjustments: Array<{ variantId: string; quantity: number }>,
    direction: -1 | 1,
    actorId: string,
    tenantId?: string
  ): Promise<void> {
    if (!outletId || adjustments.length === 0) return;

    let res: Response;
    try {
      res = await fetch(`${this.catalogServiceUrl}/api/v1/catalog/inventory/adjust-batch`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(tenantId ? { "x-tenant-id": tenantId } : {}),
        },
        body: JSON.stringify({
          outletId,
          tenantId,
          reason: direction === -1 ? "ORDER_SALE" : "RETURN_RESTOCK",
          referenceId: orderNumber,
          actorId,
          notes: `${direction === -1 ? "Deducted atomically for order" : "Restocked from cancelled order"} ${orderNumber}`,
          items: adjustments.map((adj) => ({
            variantId: adj.variantId,
            quantityChange: direction * adj.quantity,
          })),
        }),
      });
    } catch (err: any) {
      throw new ServiceUnavailableException(`Catalog service unreachable for stock update: ${err?.message}`);
    }

    if (!res.ok) {
      const errBody: any = await res.json().catch(() => ({}));
      const msg = errBody?.message || `Inventory adjustment failed (HTTP ${res.status})`;
      if (res.status === 403) throw new ForbiddenException(msg);
      if (res.status === 409) throw new ConflictException(msg);
      throw new BadRequestException(msg);
    }
  }

  private resolveCustomerId(req: any, headers: Record<string, any>): string {
    const id = req?.user?.sub || headers?.["x-customer-id"];
    if (!id) throw new UnauthorizedException("Authentication required");
    return String(id);
  }

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ summary: "List tenant-scoped orders for an authenticated merchant" })
  async listMerchantOrders(
    @Query("tenantId") queryTenantId?: string,
    @Query("outletId") outletId?: string,
    @Query("status") status?: string,
    @Query("q") q?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Headers("x-tenant-id") headerTenantId?: string,
    @Req() req?: any
  ) {
    const tenantId = headerTenantId || req?.user?.tenantId || queryTenantId;
    if (!tenantId) {
      throw new UnauthorizedException("Merchant tenant scope is required");
    }

    const where: any = { tenantId };
    if (outletId) where.outletId = outletId;
    if (status && status !== "ALL") where.status = status.toUpperCase();
    if (q) {
      where.OR = [
        { orderNumber: { contains: q, mode: "insensitive" } },
        { id: { contains: q, mode: "insensitive" } },
      ];
    }

    const pageNum = Math.max(1, Number(page) || 1);
    const take = Math.min(100, Math.max(1, Number(limit) || 50));
    const items = await this.prisma.order.findMany({
      where,
      include: { items: true, events: true },
      orderBy: { createdAt: "desc" },
      skip: (pageNum - 1) * take,
      take,
    });

    const liveStatuses = new Set([
      "PENDING_PAYMENT",
      "CONFIRMED",
      "NEW",
      "ACCEPTED",
      "PREPARING",
      "READY",
      "READY_FOR_PICKUP",
      "OUT_FOR_DELIVERY",
    ]);
    const liveOrders = items.filter((o) => liveStatuses.has(o.status));
    const pastOrders = items.filter((o) => !liveStatuses.has(o.status));

    return {
      success: true,
      data: items,
      liveOrders,
      pastOrders,
      summary: {
        total: items.length,
        new: items.filter((o) => o.status === "CONFIRMED" || o.status === "NEW" || o.status === "PENDING_PAYMENT").length,
        preparing: items.filter((o) => o.status === "PREPARING").length,
        ready: items.filter((o) => o.status === "READY").length,
        completed: items.filter((o) => o.status === "COMPLETED").length,
      },
    };
  }

  @Post("walkin")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create a counter walk-in POS order for a merchant outlet" })
  async createWalkinOrder(@Body() body: any, @Headers("x-tenant-id") headerTenantId?: string, @Req() req?: any) {
    const tenantId = headerTenantId || req?.user?.tenantId || body?.tenantId;
    const outletId = body?.outletId || req?.user?.outletId;
    if (!tenantId || !outletId) {
      throw new UnauthorizedException("Merchant tenant and outlet context required");
    }

    const itemsInput: any[] = Array.isArray(body?.items) ? body.items : [];
    const totalPaise =
      body?.totalAmountPaise ??
      itemsInput.reduce((sum, it) => sum + Number(it.unitPricePaise || it.pricePaise || 0) * Number(it.quantity || 1), 0);

    const orderNumber = `WLK-${Date.now().toString().slice(-6)}`;
    const { resolvedVariantIds, adjustments } = await this.resolveCatalogInventoryItems(
      itemsInput,
      -1,
      tenantId,
      outletId
    );

    await this.applyCatalogInventoryAdjustments(outletId, orderNumber, adjustments, -1, tenantId, tenantId);

    let created: any;
    try {
      created = await this.prisma.$transaction(async (tx) => {
        const ord = await tx.order.create({
          data: {
            orderNumber,
            customerId: body?.customerId || "WALKIN-COUNTER",
            tenantId,
            outletId,
            status: "CONFIRMED",
            totalAmountPaise: Math.max(0, Number(totalPaise) || 0),
            paymentStatus: body?.paymentStatus || "PAID",
            fulfillmentType: "WALK_IN",
            items: {
              create: itemsInput.map((it, idx) => ({
                productId: it.productId || it.id || "pos-item",
                variantId: resolvedVariantIds.get(idx) || it.variantId || it.id || "pos-var",
                title: it.title || it.name || "Counter Item",
                quantity: Math.max(1, Number(it.quantity) || 1),
                unitPricePaise: Math.max(0, Number(it.unitPricePaise ?? it.pricePaise) || 0),
                totalPricePaise:
                  Math.max(0, Number(it.unitPricePaise ?? it.pricePaise) || 0) * Math.max(1, Number(it.quantity) || 1),
              })),
            },
          },
          include: { items: true },
        });

        await tx.transactionalOutbox.create({
          data: {
            aggregateType: "ORDER",
            aggregateId: ord.id,
            eventType: "ORDER_PLACED",
            payload: JSON.stringify({
              orderId: ord.id,
              orderNumber: ord.orderNumber,
              tenantId: ord.tenantId,
              outletId: ord.outletId,
              cityCode: ord.cityCode,
              status: ord.status,
              fulfillmentType: ord.fulfillmentType,
              totalAmountPaise: ord.totalAmountPaise,
            }),
            status: "PENDING",
          },
        });

        return ord;
      });
    } catch (err) {
      await this.applyCatalogInventoryAdjustments(outletId, orderNumber, adjustments, 1, "ORDER_ROLLBACK", tenantId).catch(() => {});
      throw err;
    }

    void this.outboxRelay.flushPending();
    return { success: true, data: created };
  }

  @Get("admin")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Admin: List platform orders with filters" })
  async adminListOrders(
    @Query("cityCode") cityCode?: string,
    @Query("status") status?: string,
    @Query("merchantId") merchantId?: string,
    @Query("customerId") customerId?: string,
    @Query("from") from?: string,
    @Query("to") to?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string
  ) {
    const where: any = {};
    if (cityCode && cityCode !== "ALL") where.cityCode = cityCode;
    if (status && status !== "ALL") where.status = status.toUpperCase();
    if (merchantId) where.tenantId = merchantId;
    if (customerId) where.customerId = customerId;
    if (from || to) {
      where.createdAt = {};
      if (from) where.createdAt.gte = new Date(from);
      if (to) where.createdAt.lte = new Date(to);
    }

    const pageNum = Math.max(1, Number(page) || 1);
    const take = Math.min(100, Math.max(1, Number(limit) || 20));
    const skip = (pageNum - 1) * take;

    const [items, total] = await Promise.all([
      this.prisma.order.findMany({
        where,
        include: { items: true, events: true },
        orderBy: { createdAt: "desc" },
        skip,
        take,
      }),
      this.prisma.order.count({ where }),
    ]);

    return {
      success: true,
      data: {
        items,
        total,
        page: pageNum,
        limit: take,
      },
    };
  }

  @Post(":id/cancel")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Admin: Force-cancel an order" })
  async adminCancelOrder(@Param("id") id: string, @Body() body: { reason?: string }) {
    const order = await this.prisma.order.findFirst({
      where: { OR: [{ id }, { orderNumber: id }] },
    });
    if (!order) throw new NotFoundException(`Order '${id}' not found`);

    const { updated, cancelledNow } = await this.prisma.$transaction(async (tx) => {
      const claim = await tx.order.updateMany({
        where: { id: order.id, status: { not: "CANCELLED" } },
        data: { status: "CANCELLED" },
      });

      if (claim.count > 0) {
        await tx.orderEvent.create({
          data: {
            orderId: order.id,
            eventType: "ADMIN_FORCE_CANCEL",
            fromStatus: order.status,
            toStatus: "CANCELLED",
            metadata: { reason: body?.reason || "Admin intervention" },
          },
        });
        await tx.transactionalOutbox.create({
          data: {
            aggregateType: "ORDER",
            aggregateId: order.id,
            eventType: "ORDER_CANCELLED",
            payload: JSON.stringify({ orderId: order.id, orderNumber: order.orderNumber, tenantId: order.tenantId, outletId: order.outletId }),
            status: "PENDING",
          },
        });
      }

      const full = await tx.order.findUnique({
        where: { id: order.id },
        include: { items: true, events: true },
      });
      return { updated: full!, cancelledNow: claim.count > 0 };
    });

    if (cancelledNow) {
      const { adjustments } = await this.resolveCatalogInventoryItems(
        updated.items.map((it) => ({
          productId: it.productId,
          variantId: it.variantId,
          quantity: it.quantity,
          title: it.title,
        })),
        1,
        order.tenantId,
        order.outletId
      );
      await this.applyCatalogInventoryAdjustments(
        order.outletId,
        order.orderNumber,
        adjustments,
        1,
        "ADMIN",
        order.tenantId
      );
      void this.outboxRelay.flushPending();
    }

    return { success: true, data: updated };
  }

  @Get("cart")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get customer active cart" })
  async getCart(@Headers() headers: any, @Req() req: any) {
    const customerId = this.resolveCustomerId(req, headers);
    return this.orderService.getCart(customerId);
  }

  @Post("cart/items")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Add or update item in cart (enforces single-seller rule)" })
  async addToCart(@Body() dto: AddToCartDto, @Headers() headers: any, @Req() req: any) {
    const customerId = this.resolveCustomerId(req, headers);
    return this.orderService.addToCart(customerId, dto);
  }

  @Post("checkout")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Checkout active cart into pending order with pricing in paise" })
  @ApiResponse({ status: 201, description: "Order created successfully" })
  async checkout(
    @Body() dto: CheckoutDto,
    @Headers() headers: any,
    @Req() req?: any
  ) {
    const customerId = this.resolveCustomerId(req, headers);
    return this.orderService.checkout(customerId, dto, headers?.["idempotency-key"] || dto.idempotencyKey);
  }

  @Get("my")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Customer: List authenticated customer's own orders" })
  async getMyOrders(
    @Query("status") status?: string,
    @Headers() headers?: any,
    @Req() req?: any
  ) {
    const customerId = this.resolveCustomerId(req, headers);
    const where: any = { customerId };
    if (status && status !== "ALL") where.status = status.toUpperCase();

    const rows = await this.prisma.order.findMany({
      where,
      include: { items: true, events: { orderBy: { occurredAt: "asc" } } },
      orderBy: { createdAt: "desc" },
      take: 100,
    });

    const data = rows.map((o) => {
      const firstMeta: any = (o.events?.[0]?.metadata as any) || {};
      const statusLower = o.status.toLowerCase();
      const uiStatus =
        o.status === "COMPLETED"
          ? "delivered"
          : o.status === "CANCELLED"
            ? "cancelled"
            : "out_for_delivery";
      const labelMap: Record<string, string> = {
        CONFIRMED: "Order Placed",
        PENDING_PAYMENT: "Order Placed",
        PREPARING: "Being Prepared",
        READY: o.fulfillmentType === "STORE_PICKUP" ? "Ready for Pickup" : "Out for Delivery",
        COMPLETED: "Delivered / Completed",
        CANCELLED: "Cancelled",
      };
      return {
        id: o.id,
        orderNumber: o.orderNumber,
        shopId: o.outletId,
        shopName: firstMeta.shopName || "NukkadNow Store",
        shopImage: firstMeta.shopImage || "",
        verified: true,
        dateStr: o.createdAt.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
        status: uiStatus,
        rawStatus: o.status,
        statusLabel: labelMap[o.status] || statusLower,
        totalAmount: Math.round(o.totalAmountPaise / 100),
        totalAmountPaise: o.totalAmountPaise,
        fulfillmentType: o.fulfillmentType,
        pickupToken: firstMeta.pickupToken,
        deliveryAddress: firstMeta.deliveryAddress,
        items: o.items.map((it) => ({
          id: it.id,
          productId: it.productId,
          name: it.title,
          qty: `${it.quantity} unit`,
          quantity: it.quantity,
          price: Math.round(it.unitPricePaise / 100),
        })),
        events: o.events,
        createdAt: o.createdAt,
      };
    });

    return { success: true, data };
  }

  @Post("customer-place")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Customer: Place a confirmed checkout order from cart items" })
  async placeCustomerOrder(@Body() body: any, @Headers() headers: any, @Req() req: any) {
    const customerId = this.resolveCustomerId(req, headers);
    const itemsInput: any[] = Array.isArray(body?.items) ? body.items : [];
    if (itemsInput.length === 0) {
      throw new BadRequestException("Cannot place order with an empty cart");
    }

    const outletId = String(body?.outletId || body?.shopId || "").trim();
    const tenantId = String(body?.tenantId || "").trim();
    if (!outletId || !tenantId) {
      throw new BadRequestException("Valid outletId and tenantId are required");
    }

    const rawFulfil = String(body?.fulfilmentType || body?.fulfillmentType || "").toUpperCase();
    const fulfillmentType =
      rawFulfil === "PICKUP" || rawFulfil === "SELF_PICKUP" || rawFulfil === "STORE_PICKUP"
        ? "STORE_PICKUP"
        : "MERCHANT_DELIVERY";
    const totalPaise =
      body?.totalAmountPaise !== undefined
        ? Math.max(0, Number(body.totalAmountPaise))
        : Math.max(
            0,
            Math.round(
              Number(
                body?.totalAmount ??
                  itemsInput.reduce((s, it) => s + Number(it.price || 0) * Number(it.quantity || 1), 0)
              ) * 100
            )
          );

    const orderNumber = `ORD-${Date.now().toString().slice(-6)}`;
    const pickupToken = `T-${Math.floor(10 + Math.random() * 89)}`;

    const { resolvedVariantIds, adjustments } = await this.resolveCatalogInventoryItems(
      itemsInput,
      -1,
      tenantId,
      outletId
    );

    await this.applyCatalogInventoryAdjustments(outletId, orderNumber, adjustments, -1, customerId, tenantId);

    let created: any;
    try {
      created = await this.prisma.$transaction(async (tx) => {
        const ord = await tx.order.create({
          data: {
            orderNumber,
            customerId,
            tenantId,
            outletId,
            locality: body?.locality || null,
            status: "CONFIRMED",
            totalAmountPaise: totalPaise,
            paymentStatus: String(body?.paymentMethod || "").toUpperCase() === "COD" ? "COD_PENDING" : "PAID",
            fulfillmentType,
            pickupSlotId: body?.slotId || null,
            items: {
              create: itemsInput.map((it, idx) => {
                const qty = Math.max(1, Number(it.quantity) || 1);
                const unitPaise = Math.max(0, Number(it.unitPricePaise ?? Math.round(Number(it.price || 0) * 100)));
                return {
                  productId: String(it.productId || it.id || "item"),
                  variantId: resolvedVariantIds.get(idx) || String(it.variantId || it.id || "var"),
                  title: String(it.title || it.name || "Product"),
                  quantity: qty,
                  unitPricePaise: unitPaise,
                  totalPricePaise: unitPaise * qty,
                };
              }),
            },
            events: {
              create: {
                eventType: "ORDER_PLACED",
                fromStatus: null,
                toStatus: "CONFIRMED",
                metadata: {
                  shopName: body?.shopName || "NukkadNow Store",
                  shopImage: body?.shopImage || "",
                  shopPhone: body?.shopPhone || "",
                  categories: body?.categories || "Local Store",
                  deliveryAddress: body?.deliveryAddress || "",
                  itemTotal: Number(body?.itemTotal ?? Math.round(totalPaise / 100)),
                  discount: Number(body?.discount ?? 0),
                  deliveryFee: Number(body?.deliveryFee ?? 0),
                  paymentMethod: body?.paymentMethod || "UPI",
                  notes: body?.notes || "",
                  pickupToken,
                },
              },
            },
          },
          include: { items: true, events: true },
        });

        await tx.transactionalOutbox.create({
          data: {
            aggregateType: "ORDER",
            aggregateId: ord.id,
            eventType: "ORDER_PLACED",
            payload: JSON.stringify({
              orderId: ord.id,
              orderNumber: ord.orderNumber,
              tenantId: ord.tenantId,
              outletId: ord.outletId,
              cityCode: ord.cityCode,
              status: ord.status,
              fulfillmentType: ord.fulfillmentType,
              totalAmountPaise: ord.totalAmountPaise,
            }),
            status: "PENDING",
          },
        });

        return ord;
      });
    } catch (err) {
      await this.applyCatalogInventoryAdjustments(outletId, orderNumber, adjustments, 1, "ORDER_ROLLBACK", tenantId).catch(() => {});
      throw err;
    }

    void this.outboxRelay.flushPending();

    const totalPaid = Math.round(created.totalAmountPaise / 100);
    return {
      success: true,
      data: {
        ...created,
        totalAmount: totalPaid,
        shopName: body?.shopName || "NukkadNow Store",
        deliveryAddress: body?.deliveryAddress || "",
        pricing: {
          itemTotal: Number(body?.itemTotal ?? totalPaid),
          discount: Number(body?.discount ?? 0),
          deliveryFee: Number(body?.deliveryFee ?? 0),
          totalPaid,
        },
        pickupToken,
      },
    };
  }

  @Get(":id")
  @ApiOperation({ summary: "Get authoritative order status" })
  async getOrder(@Param("id") id: string) {
    const order = await this.prisma.order.findFirst({
      where: { OR: [{ id }, { orderNumber: id }] },
      include: { items: true, events: { orderBy: { occurredAt: "asc" } } },
    });
    if (!order) throw new NotFoundException(`Order '${id}' not found`);
    const firstMeta: any = (order.events?.[0]?.metadata as any) || {};
    const totalAmount = Math.round(order.totalAmountPaise / 100);
    const items = order.items.map((it) => ({
      id: it.id,
      productId: it.productId,
      name: it.title,
      title: it.title,
      quantity: it.quantity,
      unitWeight: `${it.quantity} unit`,
      price: Math.round(it.unitPricePaise / 100),
      unitPricePaise: it.unitPricePaise,
      totalPricePaise: it.totalPricePaise,
    }));
    const computedItemTotal = items.reduce((s, it) => s + it.price * it.quantity, 0);

    return {
      success: true,
      data: {
        ...order,
        items,
        totalAmount,
        shopName: firstMeta.shopName || "NukkadNow Store",
        shopImage: firstMeta.shopImage || "",
        shopPhone: firstMeta.shopPhone || "",
        categories: firstMeta.categories || "Grocery & Daily Needs",
        shopId: order.outletId,
        pickupToken: firstMeta.pickupToken,
        deliveryAddress: firstMeta.deliveryAddress || "",
        paymentMethod: firstMeta.paymentMethod || "UPI",
        pricing: {
          itemTotal: firstMeta.itemTotal ?? computedItemTotal,
          discount: firstMeta.discount ?? 0,
          deliveryFee: firstMeta.deliveryFee ?? Math.max(0, totalAmount - computedItemTotal),
          totalPaid: totalAmount,
        },
      },
    };
  }

  @Post(":id/accept")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Merchant accepts confirmed order with prep estimate" })
  async acceptOrder(
    @Param("id") id: string,
    @Body() dto: AcceptOrderDto,
    @Headers("x-tenant-id") headerTenantId?: string,
    @Req() req?: any
  ) {
    const callerTenantId = headerTenantId || req?.user?.tenantId;
    return this.orderService.acceptOrder(id, dto, callerTenantId);
  }

  @Post(":id/ready")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Merchant marks order ready for pickup" })
  async markReady(
    @Param("id") id: string,
    @Headers("x-tenant-id") headerTenantId?: string,
    @Req() req?: any
  ) {
    const callerTenantId = headerTenantId || req?.user?.tenantId;
    return this.orderService.markOrderReady(id, callerTenantId);
  }

  @Patch(":id/status")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Merchant updates order status" })
  async updateStatus(
    @Param("id") id: string,
    @Body() body: { status: string; prepMinutes?: number },
    @Headers("x-tenant-id") headerTenantId?: string,
    @Req() req?: any
  ) {
    const callerTenantId = headerTenantId || req?.user?.tenantId;
    const order = await this.prisma.order.findFirst({ where: { OR: [{ id }, { orderNumber: id }] } });
    if (!order) throw new NotFoundException(`Order '${id}' not found`);
    if (callerTenantId && order.tenantId !== callerTenantId) {
      throw new ForbiddenException("Cross-tenant access forbidden");
    }
    const statusMap: Record<string, string> = {
      NEW: "CONFIRMED",
      PREPARING: "PREPARING",
      READY: "READY",
      "OUT FOR DELIVERY": "OUT_FOR_DELIVERY",
      OUT_FOR_DELIVERY: "OUT_FOR_DELIVERY",
      DELIVERED: "COMPLETED",
      COMPLETED: "COMPLETED",
      CANCELLED: "CANCELLED",
    };
    const nextStatus = statusMap[(body?.status || "").toUpperCase()] || (body?.status || order.status).toUpperCase();

    const { updated, cancelledNow, completedNow } = await this.prisma.$transaction(async (tx) => {
      if (nextStatus === "CANCELLED") {
        const claim = await tx.order.updateMany({
          where: { id: order.id, status: { not: "CANCELLED" } },
          data: { status: "CANCELLED" },
        });
        if (claim.count > 0) {
          await tx.orderEvent.create({
            data: {
              orderId: order.id,
              eventType: "MERCHANT_STATUS_UPDATE",
              fromStatus: order.status,
              toStatus: "CANCELLED",
              metadata: { prepMinutes: body?.prepMinutes },
            },
          });
          await tx.transactionalOutbox.create({
            data: {
              aggregateType: "ORDER",
              aggregateId: order.id,
              eventType: "ORDER_CANCELLED",
              payload: JSON.stringify({ orderId: order.id, orderNumber: order.orderNumber, tenantId: order.tenantId, outletId: order.outletId }),
              status: "PENDING",
            },
          });
        }
        const full = await tx.order.findUnique({ where: { id: order.id }, include: { items: true, events: true } });
        return { updated: full!, cancelledNow: claim.count > 0, completedNow: false };
      }

      if (nextStatus === "COMPLETED") {
        const claim = await tx.order.updateMany({
          where: { id: order.id, status: { not: "COMPLETED" } },
          data: { status: "COMPLETED" },
        });
        if (claim.count > 0) {
          await tx.orderEvent.create({
            data: {
              orderId: order.id,
              eventType: "MERCHANT_STATUS_UPDATE",
              fromStatus: order.status,
              toStatus: "COMPLETED",
              metadata: { prepMinutes: body?.prepMinutes },
            },
          });
          await tx.transactionalOutbox.create({
            data: {
              aggregateType: "ORDER",
              aggregateId: order.id,
              eventType: "ORDER_COMPLETED",
              payload: JSON.stringify({
                orderId: order.id,
                orderNumber: order.orderNumber,
                tenantId: order.tenantId,
                outletId: order.outletId,
                cityCode: order.cityCode,
                totalAmountPaise: order.totalAmountPaise,
                prepMinutes: Number(body?.prepMinutes ?? 15),
              }),
              status: "PENDING",
            },
          });
        }
        const full = await tx.order.findUnique({ where: { id: order.id }, include: { items: true, events: true } });
        return { updated: full!, cancelledNow: false, completedNow: claim.count > 0 };
      }

      const ord = await tx.order.update({
        where: { id: order.id },
        data: {
          status: nextStatus,
          events: {
            create: {
              eventType: "MERCHANT_STATUS_UPDATE",
              fromStatus: order.status,
              toStatus: nextStatus,
              metadata: { prepMinutes: body?.prepMinutes },
            },
          },
        },
        include: { items: true, events: true },
      });
      return { updated: ord, cancelledNow: false, completedNow: false };
    });

    if (cancelledNow) {
      const { adjustments } = await this.resolveCatalogInventoryItems(
        updated.items.map((it) => ({
          productId: it.productId,
          variantId: it.variantId,
          quantity: it.quantity,
          title: it.title,
        })),
        1,
        order.tenantId,
        order.outletId
      );
      await this.applyCatalogInventoryAdjustments(
        order.outletId,
        order.orderNumber,
        adjustments,
        1,
        callerTenantId || "MERCHANT",
        order.tenantId
      );
    }

    if (cancelledNow || completedNow) {
      void this.outboxRelay.flushPending();
    }

    return { success: true, data: updated };
  }
}
