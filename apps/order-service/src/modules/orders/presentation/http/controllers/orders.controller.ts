import { Controller, Post, Get, Body, Param, Headers, Req } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { OrderService } from "../../../application/services/order.service";
import { AddToCartDto, CheckoutDto, AcceptOrderDto } from "../../../application/dto/order.dto";

@ApiTags("Orders & Checkout")
@Controller("api/v1/orders")
export class OrdersController {
  constructor(private readonly orderService: OrderService) {}

  @Get("cart")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get customer active cart" })
  async getCart(@Req() req: any) {
    const customerId = req.user?.sub || "sample_customer_1";
    return this.orderService.getCart(customerId);
  }

  @Post("cart/items")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Add or update item in cart (enforces single-seller rule)" })
  async addToCart(@Body() dto: AddToCartDto, @Req() req: any) {
    const customerId = req.user?.sub || "sample_customer_1";
    return this.orderService.addToCart(customerId, dto);
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
    const customerId = req?.user?.sub || "sample_customer_1";
    return this.orderService.checkout(customerId, dto, idempotencyKey || dto.idempotencyKey);
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
