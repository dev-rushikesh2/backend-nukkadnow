import { Injectable } from "@nestjs/common";
import { OrderRepositoryPort } from "../../../domain/repositories/order.repository.port";
import { Order, OrderStatus, OrderItemProps } from "../../../domain/entities/order.entity";
import { OrderPricing } from "../../../domain/value-objects/order-pricing.vo";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PrismaOrderRepository implements OrderRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<Order | null> {
    const record = await this.prisma.order.findUnique({
      where: { id },
      include: { items: true },
    });
    return record ? this.toDomain(record) : null;
  }

  async findByIdempotencyKey(key: string): Promise<Order | null> {
    const record = await this.prisma.order.findUnique({
      where: { idempotencyKey: key },
      include: { items: true },
    });
    return record ? this.toDomain(record) : null;
  }

  async findByCustomerId(customerId: string): Promise<Order[]> {
    const records = await this.prisma.order.findMany({
      where: { customerId },
      include: { items: true },
      orderBy: { createdAt: "desc" },
    });
    return records.map((r: any) => this.toDomain(r));
  }

  async findByOutletId(outletId: string): Promise<Order[]> {
    const records = await this.prisma.order.findMany({
      where: { outletId },
      include: { items: true },
      orderBy: { createdAt: "desc" },
    });
    return records.map((r: any) => this.toDomain(r));
  }

  async save(order: Order): Promise<void> {
    await this.prisma.order.upsert({
      where: { id: order.id },
      create: {
        id: order.id,
        orderNumber: order.orderNumber,
        customerId: order.customerId,
        tenantId: order.tenantId,
        outletId: order.outletId,
        status: order.status,
        totalAmountPaise: order.pricing.totalAmountPaise,
        paymentStatus: order.status === "PENDING_PAYMENT" ? "UNPAID" : "PAID",
        fulfillmentType: (order as any).props?.fulfillmentType || "STORE_PICKUP",
        pickupSlotId: (order as any).props?.pickupSlotId ?? null,
        idempotencyKey: order.idempotencyKey ?? null,
      },
      update: {
        status: order.status,
        totalAmountPaise: order.pricing.totalAmountPaise,
        paymentStatus: order.status === "PENDING_PAYMENT" ? "UNPAID" : "PAID",
        updatedAt: new Date(),
      },
    });

    for (const item of order.items) {
      await this.prisma.orderItem.upsert({
        where: { id: item.id },
        create: {
          id: item.id,
          orderId: order.id,
          productId: item.productId,
          variantId: item.variantId,
          title: item.title,
          quantity: item.quantity,
          unitPricePaise: item.unitPricePaise,
          totalPricePaise: item.quantity * item.unitPricePaise,
        },
        update: {
          quantity: item.quantity,
          unitPricePaise: item.unitPricePaise,
          totalPricePaise: item.quantity * item.unitPricePaise,
        },
      });
    }
  }

  private toDomain(record: any): Order {
    const items: OrderItemProps[] = (record.items || []).map((it: any) => ({
      id: it.id,
      productId: it.productId,
      variantId: it.variantId,
      title: it.title,
      quantity: it.quantity,
      unitPricePaise: it.unitPricePaise,
    }));

    return new Order({
      id: record.id,
      orderNumber: record.orderNumber,
      customerId: record.customerId,
      tenantId: record.tenantId,
      outletId: record.outletId,
      status: record.status as OrderStatus,
      pricing: new OrderPricing({
        subtotalPaise: items.reduce((sum, it) => sum + it.quantity * it.unitPricePaise, 0),
        packagingPaise: 0,
        deliveryPaise: 0,
        taxPaise: 0,
      }),
      fulfillmentType: (record.fulfillmentType as any) || "STORE_PICKUP",
      pickupSlotId: record.pickupSlotId ?? undefined,
      items,
      idempotencyKey: record.idempotencyKey ?? undefined,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }
}
