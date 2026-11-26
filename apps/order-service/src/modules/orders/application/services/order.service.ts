import { Injectable, ForbiddenException, ConflictException } from "@nestjs/common";
import { OrderRepositoryPort, CartRepositoryPort } from "../../domain/repositories/order.repository.port";
import { Order } from "../../domain/entities/order.entity";
import { Cart } from "../../domain/entities/cart.entity";
import { OrderPricing } from "../../domain/value-objects/order-pricing.vo";
import { AddToCartDto, CheckoutDto, AcceptOrderDto } from "../dto/order.dto";
import { OrderNotFoundError, EmptyCartError } from "../../domain/errors/order-errors";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";
import { CatalogClient } from "../../infrastructure/external-clients/catalog.client";
import * as crypto from "crypto";

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepo: OrderRepositoryPort,
    private readonly cartRepo: CartRepositoryPort,
    private readonly catalogClient: CatalogClient
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

    const orderId = UniqueIdentifier.generateV7();
    const orderNumber = `ORD-${crypto.randomBytes(4).toString("hex").toUpperCase()}`;

    // 2. Atomic Stock Reservation across all cart items (Two-Phase Hold)
    const reservedItems: Array<{ variantId: string; quantity: number }> = [];
    for (const item of cart.getItems()) {
      const reserved = await this.catalogClient.reserveStock(item.variantId, item.quantity, orderId);
      if (!reserved) {
        // Rollback any items already reserved during this checkout attempt
        for (const rev of reservedItems) {
          await this.catalogClient.releaseStock(rev.variantId, rev.quantity, orderId);
        }
        throw new ConflictException(`Item "${item.title}" is out of stock or requested quantity is unavailable.`);
      }
      reservedItems.push({ variantId: item.variantId, quantity: item.quantity });
    }

    const subtotalPaise = cart.calculateSubtotalPaise();
    const packagingPaiseStr = process.env.ORDER_PACKAGING_PAISE || "1000";
    const taxRateBpsStr = process.env.ORDER_TAX_RATE_BPS || "500";
    const deliveryPaiseStr = process.env.ORDER_DELIVERY_PAISE || "3000";

    const packagingPaise = parseInt(packagingPaiseStr, 10);
    const taxRateBps = parseInt(taxRateBpsStr, 10);
    const configuredDeliveryPaise = parseInt(deliveryPaiseStr, 10);
    const deliveryPaise = dto.fulfillmentType === "MERCHANT_DELIVERY" ? configuredDeliveryPaise : 0;
    const taxPaise = Math.round((subtotalPaise * taxRateBps) / 10000);

    const pricing = new OrderPricing({
      subtotalPaise,
      packagingPaise,
      deliveryPaise,
      taxPaise,
    });

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

    try {
      await this.orderRepo.save(order);
    } catch (err: any) {
      if (idempotencyKey && (err?.code === "P2002" || err?.message?.includes("idempotencyKey"))) {
        const existing = await this.orderRepo.findByIdempotencyKey(idempotencyKey);
        if (existing) return this.formatOrderResponse(existing);
      }
      throw err;
    }
    // Cart is preserved until payment confirmation

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

    if (!callerTenantId || callerTenantId !== order.tenantId) {
      throw new ForbiddenException("Tenant Mismatch: Cannot accept orders of another organization.");
    }

    const mins = Number(dto?.estimatedMinutes ?? dto?.prepTimeMinutes ?? dto?.prepMinutes ?? 15) || 15;
    order.accept(mins);
    await this.orderRepo.save(order);
    return this.formatOrderResponse(order);
  }

  async markOrderReady(id: string, callerTenantId?: string) {
    const order = await this.orderRepo.findById(id);
    if (!order) throw new OrderNotFoundError(id);

    if (!callerTenantId || callerTenantId !== order.tenantId) {
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
