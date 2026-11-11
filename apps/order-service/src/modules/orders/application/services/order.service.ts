import { Injectable, ForbiddenException } from "@nestjs/common";
import { OrderRepositoryPort, CartRepositoryPort } from "../../domain/repositories/order.repository.port";
import { Order } from "../../domain/entities/order.entity";
import { Cart } from "../../domain/entities/cart.entity";
import { OrderPricing } from "../../domain/value-objects/order-pricing.vo";
import { AddToCartDto, CheckoutDto, AcceptOrderDto } from "../dto/order.dto";
import { OrderNotFoundError, EmptyCartError } from "../../domain/errors/order-errors";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepo: OrderRepositoryPort,
    private readonly cartRepo: CartRepositoryPort
  ) {}

  async getCart(customerId: string) {
    let cart = await this.cartRepo.findByCustomerId(customerId);
    if (!cart) {
      cart = new Cart(customerId, "", "");
    }
    const subtotalPaise = cart.calculateSubtotalPaise();
    return {
      customerId,
      outletId: cart.outletId,
      tenantId: cart.tenantId,
      items: cart.getItems(),
      subtotalPaise,
      subtotalFormatted: (subtotalPaise / 100).toLocaleString("en-IN", { style: "currency", currency: "INR" }),
    };
  }

  async addToCart(customerId: string, dto: AddToCartDto) {
    let cart = await this.cartRepo.findByCustomerId(customerId);
    if (!cart) {
      cart = new Cart(customerId, dto.outletId, dto.tenantId);
    }

    cart.addItem(dto.outletId, dto.tenantId, {
      variantId: dto.variantId,
      productId: dto.productId,
      title: dto.title,
      quantity: dto.quantity,
      unitPricePaise: dto.unitPricePaise,
    });

    await this.cartRepo.save(cart);
    return this.getCart(customerId);
  }

  async checkout(customerId: string, dto: CheckoutDto, idempotencyKey?: string) {
    // 1. Idempotency Check: prevent duplicate billing on network retry
    if (idempotencyKey) {
      const existing = await this.orderRepo.findByIdempotencyKey(idempotencyKey);
      if (existing) {
        return this.formatOrderResponse(existing);
      }
    }

    const cart = await this.cartRepo.findByCustomerId(customerId);
    if (!cart || cart.getItems().length === 0) {
      throw new EmptyCartError();
    }

    const subtotalPaise = cart.calculateSubtotalPaise();
    const packagingPaise = 1000; // Rs. 10.00
    const deliveryPaise = dto.fulfillmentType === "MERCHANT_DELIVERY" ? 3000 : 0;
    const taxPaise = Math.round(subtotalPaise * 0.05); // 5% GST

    const pricing = new OrderPricing({
      subtotalPaise,
      packagingPaise,
      deliveryPaise,
      taxPaise,
    });

    const orderId = UniqueIdentifier.generateV7();
    const orderNumber = `ORD-${Date.now().toString().slice(-6)}`;

    const order = new Order({
      id: orderId,
      orderNumber,
      customerId,
      tenantId: cart.tenantId,
      outletId: cart.outletId,
      status: "PENDING_PAYMENT",
      pricing,
      fulfillmentType: dto.fulfillmentType,
      pickupSlotId: dto.pickupSlotId,
      items: cart.getItems().map(item => ({
        id: UniqueIdentifier.generateV7(),
        productId: item.productId,
        variantId: item.variantId,
        title: item.title,
        quantity: item.quantity,
        unitPricePaise: item.unitPricePaise,
      })),
      idempotencyKey,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.orderRepo.save(order);
    await this.cartRepo.delete(customerId); // Clear cart after successful checkout creation

    return this.formatOrderResponse(order);
  }

  async getOrder(id: string) {
    const order = await this.orderRepo.findById(id);
    if (!order) throw new OrderNotFoundError(id);
    return this.formatOrderResponse(order);
  }

  async acceptOrder(id: string, dto: AcceptOrderDto, callerTenantId?: string) {
    const order = await this.orderRepo.findById(id);
    if (!order) throw new OrderNotFoundError(id);

    if (callerTenantId && callerTenantId !== order.tenantId) {
      throw new ForbiddenException("Tenant Mismatch: Cannot accept orders of another organization.");
    }

    order.accept(dto.estimatedMinutes);
    await this.orderRepo.save(order);
    return this.formatOrderResponse(order);
  }

  async markOrderReady(id: string, callerTenantId?: string) {
    const order = await this.orderRepo.findById(id);
    if (!order) throw new OrderNotFoundError(id);

    if (callerTenantId && callerTenantId !== order.tenantId) {
      throw new ForbiddenException("Tenant Mismatch: Cannot mark orders of another organization.");
    }

    order.markReady();
    await this.orderRepo.save(order);
    return this.formatOrderResponse(order);
  }

  private formatOrderResponse(order: Order) {
    return {
      orderId: order.id,
      orderNumber: order.orderNumber,
      customerId: order.customerId,
      tenantId: order.tenantId,
      outletId: order.outletId,
      status: order.status,
      totalAmountPaise: order.pricing.totalAmountPaise,
      totalFormatted: order.pricing.totalMoney.format(),
      subtotalPaise: order.pricing.subtotalPaise,
      packagingPaise: order.pricing.packagingPaise,
      deliveryPaise: order.pricing.deliveryPaise,
      taxPaise: order.pricing.taxPaise,
      fulfillmentType: (order as any).props.fulfillmentType,
      items: order.items,
      estimatedReadyAt: order.estimatedReadyAt,
    };
  }
}
