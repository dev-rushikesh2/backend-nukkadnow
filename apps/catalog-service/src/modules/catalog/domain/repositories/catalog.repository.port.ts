import { Product } from "../entities/product.entity";
import { StockBalance } from "../entities/stock-balance.entity";
import { StockMovement } from "../entities/stock-movement.entity";
import { AdminPriceCapRule } from "../entities/price-cap.entity";

export abstract class ProductRepositoryPort {
  abstract findById(id: string): Promise<Product | null>;
  abstract findByOutletId(outletId: string): Promise<Product[]>;
  abstract findByTenantId(tenantId: string): Promise<Product[]>;
  abstract save(product: Product): Promise<void>;
  abstract delete(id: string): Promise<void>;
}

export abstract class StockRepositoryPort {
  abstract findByVariantId(variantId: string): Promise<StockBalance | null>;
  abstract findByOutletId(outletId: string): Promise<StockBalance[]>;
  abstract save(stock: StockBalance): Promise<void>;
  abstract recordMovement(movement: StockMovement): Promise<void>;
  abstract findMovementsByOutlet(outletId: string, limit?: number): Promise<StockMovement[]>;
  abstract expireExpiredReservations(): Promise<number>;
}

export abstract class PriceCapRepositoryPort {
  abstract findAllActive(): Promise<AdminPriceCapRule[]>;
  abstract findAll(): Promise<AdminPriceCapRule[]>;
  abstract findById(id: string): Promise<AdminPriceCapRule | null>;
  abstract save(rule: AdminPriceCapRule): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
