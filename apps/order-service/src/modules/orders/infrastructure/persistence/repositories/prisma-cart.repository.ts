import { Injectable } from "@nestjs/common";
import { CartRepositoryPort } from "../../../domain/repositories/order.repository.port";
import { Cart } from "../../../domain/entities/cart.entity";
import { PrismaService } from "../prisma/prisma.service";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

@Injectable()
export class PrismaCartRepository implements CartRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async findByCustomerId(customerId: string): Promise<Cart | null> {
    const record = await this.prisma.cart.findFirst({
      where: { customerId },
      include: { items: true },
    });
    if (!record) return null;

    const cart = new Cart(record.customerId, record.outletId, record.tenantId);
    for (const item of record.items) {
      cart.addItem(record.outletId, record.tenantId, {
        variantId: item.variantId,
        productId: (item as any).productId || "",
        title: (item as any).title || "",
        quantity: item.quantity,
        unitPricePaise: item.unitPricePaise,
      });
    }
    return cart;
  }

  async save(cart: Cart): Promise<void> {
    const items = cart.getItems();
    const existing = await this.prisma.cart.findFirst({
      where: { customerId: cart.customerId, outletId: cart.outletId },
    });
    const cartId = existing ? existing.id : UniqueIdentifier.generateV7();

    await this.prisma.cart.upsert({
      where: {
        customerId_outletId: {
          customerId: cart.customerId,
          outletId: cart.outletId,
        },
      },
      create: {
        id: cartId,
        customerId: cart.customerId,
        outletId: cart.outletId,
        tenantId: cart.tenantId,
      },
      update: {
        tenantId: cart.tenantId,
        updatedAt: new Date(),
      },
    });

    await this.prisma.cartItem.deleteMany({ where: { cartId } });

    for (const item of items) {
      await this.prisma.cartItem.create({
        data: {
          id: UniqueIdentifier.generateV7(),
          cartId,
          variantId: item.variantId,
          quantity: item.quantity,
          unitPricePaise: item.unitPricePaise,
        },
      });
    }
  }

  async delete(customerId: string): Promise<void> {
    await this.prisma.cart.deleteMany({ where: { customerId } });
  }
}
