import { Controller, Post, Get, Body, Param, Query, Headers, Req, UnauthorizedException, NotFoundException } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { OrderService } from "../../../application/services/order.service";
import { AddToCartDto, CheckoutDto, AcceptOrderDto } from "../../../application/dto/order.dto";
import { PrismaService } from "../../../infrastructure/persistence/prisma/prisma.service";

@ApiTags("Orders & Checkout")
@Controller("api/v1/orders")
export class OrdersController {
  constructor(
    private readonly orderService: OrderService,
    private readonly prisma: PrismaService
  ) {}

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

    const updated = await this.prisma.order.update({
      where: { id: order.id },
      data: {
        status: "CANCELLED",
        events: {
          create: {
            eventType: "ADMIN_FORCE_CANCEL",
            fromStatus: order.status,
            toStatus: "CANCELLED",
            metadata: { reason: body?.reason || "Admin intervention" },
          },
        },
      },
      include: { items: true, events: true },
    });
    return { success: true, data: updated };
  }

  @Get("cart")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get customer active cart" })
  async getCart(@Req() req: any) {
    if (!req.user?.sub) throw new UnauthorizedException("Authentication required");
    return this.orderService.getCart(req.user.sub);
  }

  @Post("cart/items")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Add or update item in cart (enforces single-seller rule)" })
  async addToCart(@Body() dto: AddToCartDto, @Req() req: any) {
    if (!req.user?.sub) throw new UnauthorizedException("Authentication required");
    return this.orderService.addToCart(req.user.sub, dto);
  }

  @Post("checkout")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Checkout active cart into pending order with pricing in paise" })
  @ApiResponse({ status: 201, description: "Order created successfully" })
  async checkout(
    @Body() dto: CheckoutDto,
    @Headers("idempotency-key") idempotencyKey?: string,
    @Req() req?: any
  ) {
    if (!req?.user?.sub) throw new UnauthorizedException("Authentication required");
    return this.orderService.checkout(req.user.sub, dto, idempotencyKey || dto.idempotencyKey);
  }

  @Get(":id")
  @ApiOperation({ summary: "Get authoritative order status" })
  async getOrder(@Param("id") id: string) {
    return this.orderService.getOrder(id);
  }

  @Post(":id/accept")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Merchant accepts confirmed order with prep estimate" })
  async acceptOrder(
    @Param("id") id: string,
    @Body() dto: AcceptOrderDto,
    @Req() req: any
  ) {
    const callerTenantId = req.user?.tenantId;
    return this.orderService.acceptOrder(id, dto, callerTenantId);
  }

  @Post(":id/ready")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Merchant marks order ready for pickup" })
  async markReady(@Param("id") id: string, @Req() req: any) {
    const callerTenantId = req.user?.tenantId;
    return this.orderService.markOrderReady(id, callerTenantId);
  }
}
