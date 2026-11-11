import { Injectable } from "@nestjs/common";
import { ProductRepositoryPort, StockRepositoryPort } from "../../../domain/repositories/catalog.repository.port";
import { Product } from "../../../domain/entities/product.entity";
import { StockBalance } from "../../../domain/entities/stock-balance.entity";

@Injectable()
export class InMemoryProductRepository implements ProductRepositoryPort {
  private products = new Map<string, Product>();

  async findById(id: string): Promise<Product | null> {
    return this.products.get(id) || null;
  }

  async findByOutletId(outletId: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.outletId === outletId);
  }

  async save(product: Product): Promise<void> {
    this.products.set(product.id, product);
  }

  async delete(id: string): Promise<void> {
    this.products.delete(id);
  }
}

@Injectable()
export class InMemoryStockRepository implements StockRepositoryPort {
  private stockBalances = new Map<string, StockBalance>();

  async findByVariantId(variantId: string): Promise<StockBalance | null> {
    return this.stockBalances.get(variantId) || null;
  }

  async save(stock: StockBalance): Promise<void> {
    this.stockBalances.set(stock.variantId, stock);
  }
}
