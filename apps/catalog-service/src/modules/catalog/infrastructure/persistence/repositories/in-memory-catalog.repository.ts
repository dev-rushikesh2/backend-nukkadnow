import { Injectable } from "@nestjs/common";
import { ProductRepositoryPort, StockRepositoryPort, PriceCapRepositoryPort } from "../../../domain/repositories/catalog.repository.port";
import { Product } from "../../../domain/entities/product.entity";
import { StockBalance } from "../../../domain/entities/stock-balance.entity";
import { StockMovement } from "../../../domain/entities/stock-movement.entity";
import { AdminPriceCapRule } from "../../../domain/entities/price-cap.entity";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

@Injectable()
export class InMemoryProductRepository implements ProductRepositoryPort {
  private products = new Map<string, Product>();

  async findById(id: string): Promise<Product | null> {
    return this.products.get(id) || null;
  }

  async findByOutletId(outletId: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.outletId === outletId);
  }

  async findByTenantId(tenantId: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.tenantId === tenantId);
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
  private movements: StockMovement[] = [];
  private reservations: Array<{
    id: string;
    variantId: string;
    outletId: string;
    quantity: number;
    orderId: string;
    expiresAt: Date;
    status: string;
  }> = [];

  async findByVariantId(variantId: string): Promise<StockBalance | null> {
    return this.stockBalances.get(variantId) || null;
  }

  async findByOutletId(outletId: string): Promise<StockBalance[]> {
    return Array.from(this.stockBalances.values()).filter(s => s.outletId === outletId);
  }

  async save(stock: StockBalance): Promise<void> {
    this.stockBalances.set(stock.variantId, stock);
  }

  async recordMovement(movement: StockMovement): Promise<void> {
    this.movements.unshift(movement);
  }

  async findMovementsByOutlet(outletId: string, limit = 50): Promise<StockMovement[]> {
    return this.movements.filter(m => m.outletId === outletId).slice(0, limit);
  }

  async addReservation(res: { variantId: string; outletId: string; quantity: number; orderId: string; ttlMinutes?: number }) {
    const expiresAt = new Date(Date.now() + (res.ttlMinutes || 10) * 60 * 1000);
    this.reservations.push({
      id: UniqueIdentifier.generateV7(),
      variantId: res.variantId,
      outletId: res.outletId,
      quantity: res.quantity,
      orderId: res.orderId,
      expiresAt,
      status: "ACTIVE",
    });
  }

  async commitReservation(orderId: string): Promise<void> {
    const res = this.reservations.find(r => r.orderId === orderId && r.status === "ACTIVE");
    if (res) {
      res.status = "COMMITTED";
      const stock = this.stockBalances.get(res.variantId);
      if (stock) {
        stock.commitReservation(res.quantity);
        this.recordMovement(
          new StockMovement({
            id: UniqueIdentifier.generateV7(),
            variantId: res.variantId,
            outletId: res.outletId,
            quantityChange: -res.quantity,
            balanceAfter: stock.availableQuantity,
            reason: "SALE_COMMIT",
            actorId: "ORDER_SERVICE",
            referenceId: orderId,
            notes: "Reservation committed upon payment confirmation",
            createdAt: new Date(),
          })
        );
      }
    }
  }

  async releaseReservation(orderId: string): Promise<void> {
    const res = this.reservations.find(r => r.orderId === orderId && r.status === "ACTIVE");
    if (res) {
      res.status = "RELEASED";
      const stock = this.stockBalances.get(res.variantId);
      if (stock) {
        stock.releaseReservation(res.quantity);
        this.recordMovement(
          new StockMovement({
            id: UniqueIdentifier.generateV7(),
            variantId: res.variantId,
            outletId: res.outletId,
            quantityChange: 0,
            balanceAfter: stock.availableQuantity,
            reason: "RESERVATION_RELEASE",
            actorId: "ORDER_SERVICE",
            referenceId: orderId,
            notes: "Reservation released upon checkout cancel/timeout",
            createdAt: new Date(),
          })
        );
      }
    }
  }

  async expireExpiredReservations(): Promise<number> {
    const now = new Date();
    let expiredCount = 0;

    for (const res of this.reservations) {
      if (res.status === "ACTIVE" && res.expiresAt < now) {
        res.status = "EXPIRED";
        const stock = this.stockBalances.get(res.variantId);
        if (stock) {
          stock.releaseReservation(res.quantity);
          this.recordMovement(
            new StockMovement({
              id: UniqueIdentifier.generateV7(),
              variantId: res.variantId,
              outletId: res.outletId,
              quantityChange: 0,
              balanceAfter: stock.availableQuantity,
              reason: "RESERVATION_RELEASE",
              actorId: "TTL_SWEEPER",
              referenceId: res.orderId,
              notes: "Automatic TTL expiration release",
              createdAt: new Date(),
            })
          );
        }
        expiredCount++;
      }
    }
    return expiredCount;
  }
}

@Injectable()
export class InMemoryPriceCapRepository implements PriceCapRepositoryPort {
  private rules = new Map<string, AdminPriceCapRule>();

  constructor() {
    // Seed default baseline price caps (e.g. for Nagpur Region)
    const seedDairy = new AdminPriceCapRule({
      id: "cap-dairy-default",
      scope: "CATEGORY",
      targetKey: "Dairy & Milk",
      maxPricePaise: 8000, // Rs. 80.00
      enforceMrpCap: true,
      reason: "Essential commodity price stabilization mandate",
      isActive: true,
      createdBy: "PLATFORM_ADMIN",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const seedSnacks = new AdminPriceCapRule({
      id: "cap-snacks-default",
      scope: "CATEGORY",
      targetKey: "Sweets & Snacks",
      maxPricePaise: 50000, // Rs. 500.00 max per standard item
      enforceMrpCap: true,
      reason: "Fair pricing guideline for consumer snacks",
      isActive: true,
      createdBy: "PLATFORM_ADMIN",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.rules.set(seedDairy.id, seedDairy);
    this.rules.set(seedSnacks.id, seedSnacks);
  }

  async findAllActive(): Promise<AdminPriceCapRule[]> {
    return Array.from(this.rules.values()).filter(r => r.isActive);
  }

  async findAll(): Promise<AdminPriceCapRule[]> {
    return Array.from(this.rules.values());
  }

  async findById(id: string): Promise<AdminPriceCapRule | null> {
    return this.rules.get(id) || null;
  }

  async save(rule: AdminPriceCapRule): Promise<void> {
    this.rules.set(rule.id, rule);
  }

  async delete(id: string): Promise<void> {
    this.rules.delete(id);
  }
}
