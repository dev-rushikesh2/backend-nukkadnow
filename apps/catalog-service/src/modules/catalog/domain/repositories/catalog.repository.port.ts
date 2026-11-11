import { Product } from "../entities/product.entity";
import { StockBalance } from "../entities/stock-balance.entity";

export abstract class ProductRepositoryPort {
  abstract findById(id: string): Promise<Product | null>;
  abstract findByOutletId(outletId: string): Promise<Product[]>;
  abstract save(product: Product): Promise<void>;
  abstract delete(id: string): Promise<void>;
}

export abstract class StockRepositoryPort {
  abstract findByVariantId(variantId: string): Promise<StockBalance | null>;
  abstract save(stock: StockBalance): Promise<void>;
}
