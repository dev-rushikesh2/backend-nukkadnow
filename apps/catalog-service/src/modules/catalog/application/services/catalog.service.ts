import { Injectable, ForbiddenException } from "@nestjs/common";
import { ProductRepositoryPort, StockRepositoryPort } from "../../domain/repositories/catalog.repository.port";
import { Product, ProductVariant } from "../../domain/entities/product.entity";
import { StockBalance } from "../../domain/entities/stock-balance.entity";
import { CreateProductDto, AdjustStockDto, ReserveStockDto } from "../dto/catalog.dto";
import { ProductNotFoundError, VariantNotFoundError, InsufficientStockError } from "../../domain/errors/catalog-errors";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

@Injectable()
export class CatalogService {
  constructor(
    private readonly productRepo: ProductRepositoryPort,
    private readonly stockRepo: StockRepositoryPort
  ) {}

  async createProduct(dto: CreateProductDto, callerTenantId?: string): Promise<Product> {
    if (callerTenantId && callerTenantId !== dto.tenantId) {
      throw new ForbiddenException("Tenant Mismatch: Cannot create product for another organization.");
    }

    const productId = UniqueIdentifier.generateV7();

    const variants = dto.variants.map(v => {
      const variantId = UniqueIdentifier.generateV7();
      const variant = new ProductVariant({
        id: variantId,
        productId,
        name: v.name,
        sku: v.sku,
        pricePaise: v.pricePaise,
        compareAtPricePaise: v.compareAtPricePaise,
        isPreorder: v.isPreorder ?? false,
        leadTimeMinutes: v.leadTimeMinutes ?? 0,
      });

      // Initialize stock balance
      const stock = new StockBalance({
        id: UniqueIdentifier.generateV7(),
        variantId,
        outletId: dto.outletId,
        onHandQuantity: v.initialStock ?? 0,
        reservedQuantity: 0,
        version: 1,
        updatedAt: new Date(),
      });
      this.stockRepo.save(stock);

      return variant;
    });

    const product = new Product({
      id: productId,
      tenantId: dto.tenantId,
      outletId: dto.outletId,
      name: dto.name,
      description: dto.description,
      category: dto.category,
      isAvailable: true,
      variants,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.productRepo.save(product);
    return product;
  }

  async getProduct(id: string) {
    const product = await this.productRepo.findById(id);
    if (!product) throw new ProductNotFoundError(id);

    // Attach current available stock
    const variantViews = await Promise.all(
      product.variants.map(async v => {
        const stock = await this.stockRepo.findByVariantId(v.id);
        return {
          id: v.id,
          name: v.name,
          sku: v.sku,
          pricePaise: v.pricePaise,
          priceFormatted: v.priceMoney.format(),
          compareAtPricePaise: v.compareAtPricePaise,
          isPreorder: v.isPreorder,
          leadTimeMinutes: v.leadTimeMinutes,
          availableStock: stock ? stock.availableQuantity : 0,
        };
      })
    );

    return {
      id: product.id,
      tenantId: product.tenantId,
      outletId: product.outletId,
      name: product.name,
      description: product.description,
      category: product.category,
      isAvailable: product.isAvailable,
      variants: variantViews,
    };
  }

  async listOutletProducts(outletId: string) {
    const products = await this.productRepo.findByOutletId(outletId);
    return Promise.all(products.map(p => this.getProduct(p.id)));
  }

  // --- Inventory & Stock Operations (Sprint 5) ---

  async adjustStock(dto: AdjustStockDto) {
    let stock = await this.stockRepo.findByVariantId(dto.variantId);
    if (!stock) {
      stock = new StockBalance({
        id: UniqueIdentifier.generateV7(),
        variantId: dto.variantId,
        outletId: dto.outletId,
        onHandQuantity: 0,
        reservedQuantity: 0,
        version: 1,
        updatedAt: new Date(),
      });
    }

    stock.adjustOnHand(dto.quantityChange);
    await this.stockRepo.save(stock);

    return {
      variantId: stock.variantId,
      onHand: stock.onHandQuantity,
      reserved: stock.reservedQuantity,
      available: stock.availableQuantity,
    };
  }

  async reserveStock(dto: ReserveStockDto) {
    const stock = await this.stockRepo.findByVariantId(dto.variantId);
    if (!stock) throw new VariantNotFoundError(dto.variantId);

    if (!stock.hasAvailable(dto.quantity)) {
      throw new InsufficientStockError(stock.availableQuantity, dto.quantity);
    }

    stock.reserve(dto.quantity);
    await this.stockRepo.save(stock);

    return {
      success: true,
      variantId: dto.variantId,
      orderId: dto.orderId,
      reservedQuantity: dto.quantity,
      remainingAvailable: stock.availableQuantity,
    };
  }

  async releaseStock(dto: ReserveStockDto) {
    const stock = await this.stockRepo.findByVariantId(dto.variantId);
    if (stock) {
      stock.releaseReservation(dto.quantity);
      await this.stockRepo.save(stock);
    }
    return { success: true };
  }

  async commitStock(dto: ReserveStockDto) {
    const stock = await this.stockRepo.findByVariantId(dto.variantId);
    if (stock) {
      stock.commitReservation(dto.quantity);
      await this.stockRepo.save(stock);
    }
    return { success: true };
  }
}
