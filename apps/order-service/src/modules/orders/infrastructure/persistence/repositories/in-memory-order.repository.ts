import { Injectable } from "@nestjs/common";
import { OrderRepositoryPort, CartRepositoryPort } from "../../../domain/repositories/order.repository.port";
import { Order } from "../../../domain/entities/order.entity";
import { Cart } from "../../../domain/entities/cart.entity";

@Injectable()
export class InMemoryOrderRepository implements OrderRepositoryPort {
  private orders = new Map<string, Order>();

  async findById(id: string): Promise<Order | null> {
    return this.orders.get(id) || null;
  }

  async findByIdempotencyKey(key: string): Promise<Order | null> {
    for (const o of this.orders.values()) {
      if (o.idempotencyKey === key) return o;
    }
    return null;
  }

  async findByCustomerId(customerId: string): Promise<Order[]> {
    return Array.from(this.orders.values()).filter(o => o.customerId === customerId);
  }

  async findByOutletId(outletId: string): Promise<Order[]> {
    return Array.from(this.orders.values()).filter(o => o.outletId === outletId);
  }

  async save(order: Order): Promise<void> {
    this.orders.set(order.id, order);
  }
}

@Injectable()
export class InMemoryCartRepository implements CartRepositoryPort {
  private carts = new Map<string, Cart>();

  async findByCustomerId(customerId: string): Promise<Cart | null> {
    return this.carts.get(customerId) || null;
  }

  async save(cart: Cart): Promise<void> {
    this.carts.set(cart.customerId, cart);
  }

  async delete(customerId: string): Promise<void> {
    this.carts.delete(customerId);
  }
}
