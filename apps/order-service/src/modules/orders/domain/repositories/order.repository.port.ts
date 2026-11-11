import { Order } from "../entities/order.entity";
import { Cart } from "../entities/cart.entity";

export abstract class OrderRepositoryPort {
  abstract findById(id: string): Promise<Order | null>;
  abstract findByIdempotencyKey(key: string): Promise<Order | null>;
  abstract findByCustomerId(customerId: string): Promise<Order[]>;
  abstract findByOutletId(outletId: string): Promise<Order[]>;
  abstract save(order: Order): Promise<void>;
}

export abstract class CartRepositoryPort {
  abstract findByCustomerId(customerId: string): Promise<Cart | null>;
  abstract save(cart: Cart): Promise<void>;
  abstract delete(customerId: string): Promise<void>;
}
