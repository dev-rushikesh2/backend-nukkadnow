import { Injectable, ForbiddenException, UnprocessableEntityException, NotFoundException } from "@nestjs/common";
import { ProductRepositoryPort, StockRepositoryPort, PriceCapRepositoryPort } from "../../domain/repositories/catalog.repository.port";
import { Product, ProductVariant } from "../../domain/entities/product.entity";
import { StockBalance } from "../../domain/entities/stock-balance.entity";
import { StockMovement } from "../../domain/entities/stock-movement.entity";
import { AdminPriceCapRule } from "../../domain/entities/price-cap.entity";
import { PriceCapPolicy } from "../../domain/policies/price-cap.policy";
import {
  CreateProductDto,
  AdjustStockDto,
  AdjustStockBatchDto,
  ReserveStockDto,
  UpdateVariantPricingDto,
  CreatePriceCapRuleDto,
} from "../dto/catalog.dto";
import { ProductNotFoundError, VariantNotFoundError, InsufficientStockError } from "../../domain/errors/catalog-errors";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

@Injectable()
export class CatalogService {
  constructor(
    private readonly productRepo: ProductRepositoryPort,
    private readonly stockRepo: StockRepositoryPort,
    private readonly priceCapRepo: PriceCapRepositoryPort
  ) {}

  /**
   * Creates a product after strictly evaluating printed MRP and Platform Admin Price Caps.
   */
  async createProduct(dto: CreateProductDto, callerTenantId?: string): Promise<Product> {
    if (callerTenantId && callerTenantId !== dto.tenantId) {
      throw new ForbiddenException("Tenant Mismatch: Cannot create product for another organization.");
    }

    // 1. Fetch active Admin Price Cap rules to validate merchant pricing
    const activeRules = await this.priceCapRepo.findAllActive();

    // 2. Validate every variant against Price Cap & MRP rules
    for (const v of dto.variants) {
      const evalResult = PriceCapPolicy.evaluate(
        {
          productName: dto.name,
          category: dto.category,
          subCategory: dto.subCategory,
          sku: v.sku,
          pricePaise: v.pricePaise,
          compareAtPricePaise: v.compareAtPricePaise,
        },
        activeRules
      );

      if (!evalResult.isValid) {
        throw new UnprocessableEntityException({
          statusCode: 422,
          error: "PRICE_CAP_VIOLATION",
          message: evalResult.violationReason,
          variantName: v.name,
          attemptedPricePaise: v.pricePaise,
          maxAllowedPaise: evalResult.applicableCapPaise,
          maxAllowedFormatted: evalResult.applicableCapFormatted,
          ruleId: evalResult.ruleId,
        });
      }
    }

    const productId = UniqueIdentifier.generateV7();
    const initialStockActions: Array<{ stock: StockBalance; movement?: StockMovement }> = [];

    const variants = dto.variants.map(v => {
      const variantId = UniqueIdentifier.generateV7();
      const variant = new ProductVariant({
        id: variantId,
        productId,
        name: v.name,
        sku: v.sku,
        barcode: v.barcode,
        pricePaise: v.pricePaise,
        compareAtPricePaise: v.compareAtPricePaise,
        isPreorder: v.isPreorder ?? false,
        leadTimeMinutes: v.leadTimeMinutes ?? 0,
      });

      const stock = new StockBalance({
        id: UniqueIdentifier.generateV7(),
        variantId,
        outletId: dto.outletId,
        onHandQuantity: v.initialStock ?? 0,
        reservedQuantity: 0,
        version: 1,
        updatedAt: new Date(),
      });

      const movement =
        (v.initialStock ?? 0) > 0
          ? new StockMovement({
              id: UniqueIdentifier.generateV7(),
              variantId,
              outletId: dto.outletId,
              quantityChange: v.initialStock ?? 0,
              balanceAfter: v.initialStock ?? 0,
              reason: "RESTOCK",
              actorId: "MERCHANT_INITIAL_SETUP",
              referenceId: productId,
              notes: "Initial inventory batch on product creation",
              createdAt: new Date(),
            })
          : undefined;

      initialStockActions.push({ stock, movement });
      return variant;
    });

    const product = new Product({
      id: productId,
      tenantId: dto.tenantId,
      outletId: dto.outletId,
      name: dto.name,
      description: dto.description,
      category: dto.category,
      subCategory: dto.subCategory,
      isAvailable: true,
      variants,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.productRepo.save(product);

    // Persist stock balances and movements AFTER product + variants exist in PostgreSQL
    for (const action of initialStockActions) {
      await this.stockRepo.save(action.stock);
      if (action.movement) {
        await this.stockRepo.recordMovement(action.movement);
      }
    }

    return product;
  }

  private async buildProductView(product: Product, stockMap?: Map<string, StockBalance>) {
    const variantViews = await Promise.all(
      product.variants.map(async v => {
        const stock = stockMap ? stockMap.get(v.id) : await this.stockRepo.findByVariantId(v.id);
        return {
          id: v.id,
          name: v.name,
          sku: v.sku,
          barcode: v.barcode,
          pricePaise: v.pricePaise,
          priceFormatted: v.priceMoney.format(),
          compareAtPricePaise: v.compareAtPricePaise,
          isPreorder: v.isPreorder,
          leadTimeMinutes: v.leadTimeMinutes,
          availableStock: stock ? stock.availableQuantity : 0,
          onHandStock: stock ? stock.onHandQuantity : 0,
          reservedStock: stock ? stock.reservedQuantity : 0,
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
      subCategory: product.subCategory,
      isAvailable: product.isAvailable,
      variants: variantViews,
    };
  }

  async getProduct(id: string) {
    const product = await this.productRepo.findById(id);
    if (!product) throw new NotFoundException(`Product '${id}' not found`);
    return this.buildProductView(product);
  }

  async listOutletProducts(outletId: string) {
    const [products, outletStock] = await Promise.all([
      this.productRepo.findByOutletId(outletId),
      this.stockRepo.findByOutletId(outletId),
    ]);
    const stockMap = new Map(outletStock.map(s => [s.variantId, s]));
    return Promise.all(products.map(p => this.buildProductView(p, stockMap)));
  }

  async listTenantProducts(tenantId: string) {
    const products = await this.productRepo.findByTenantId(tenantId);
    const outletIds = Array.from(new Set(products.map(p => p.outletId)));
    const stocksByOutlet = await Promise.all(outletIds.map(oid => this.stockRepo.findByOutletId(oid)));
    const stockMap = new Map(stocksByOutlet.flat().map(s => [s.variantId, s]));
    return Promise.all(products.map(p => this.buildProductView(p, stockMap)));
  }

  /**
   * Merchant updates variant pricing with platform price-cap enforcement.
   */
  async updateVariantPricing(productId: string, dto: UpdateVariantPricingDto, callerTenantId?: string) {
    const product = await this.productRepo.findById(productId);
    if (!product) throw new ProductNotFoundError(productId);

    if (callerTenantId && callerTenantId !== product.tenantId) {
      throw new ForbiddenException("Tenant Mismatch: Cannot update pricing of another merchant organization.");
    }

    const variant = product.findVariant(dto.variantId);
    if (!variant) throw new VariantNotFoundError(dto.variantId);

    // Validate against Admin Price Caps & MRP
    const activeRules = await this.priceCapRepo.findAllActive();
    const evalResult = PriceCapPolicy.evaluate(
      {
        productName: product.name,
        category: product.category,
        subCategory: product.subCategory,
        sku: variant.sku,
        pricePaise: dto.pricePaise,
        compareAtPricePaise: dto.compareAtPricePaise ?? variant.compareAtPricePaise,
      },
      activeRules
    );

    if (!evalResult.isValid) {
      throw new UnprocessableEntityException({
        statusCode: 422,
        error: "PRICE_CAP_VIOLATION",
        message: evalResult.violationReason,
        attemptedPricePaise: dto.pricePaise,
        maxAllowedPaise: evalResult.applicableCapPaise,
        maxAllowedFormatted: evalResult.applicableCapFormatted,
        ruleId: evalResult.ruleId,
      });
    }

    product.updateVariantPricing(dto.variantId, dto.pricePaise, dto.compareAtPricePaise);
    await this.productRepo.save(product);

    return this.getProduct(productId);
  }

  // --- Realtime Inventory & Stock Operations ---

  private async notifyDiscoveryAvailability(outletId: string, tenantId?: string): Promise<void> {
    const discoveryUrl = process.env.DISCOVERY_SERVICE_URL || "http://localhost:4006";
    try {
      const stocks = await this.stockRepo.findByOutletId(outletId);
      const hasActiveStock = stocks.some((s) => s.availableQuantity > 0);
      await fetch(`${discoveryUrl}/api/v1/discovery/availability`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ outletId, tenantId, hasActiveStock }),
      }).catch(() => {});
    } catch {
      // Best-effort projection update; never blocks stock mutation
    }
  }

  async adjustStock(dto: AdjustStockDto, callerTenantId?: string) {
    if (this.stockRepo.atomicAdjustStock) {
      const result = await this.stockRepo.atomicAdjustStock({
        variantId: dto.variantId,
        outletId: dto.outletId,
        callerTenantId: callerTenantId || dto.tenantId,
        quantityChange: dto.quantityChange,
        reason: dto.reason || "RESTOCK",
        actorId: dto.actorId || callerTenantId || "STAFF",
        referenceId: dto.referenceId,
        notes: dto.notes,
      });
      void this.notifyDiscoveryAvailability(result.outletId, result.tenantId);
      return result;
    }

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

    // Append-only stock ledger audit entry
    const movement = new StockMovement({
      id: UniqueIdentifier.generateV7(),
      variantId: dto.variantId,
      outletId: dto.outletId,
      quantityChange: dto.quantityChange,
      balanceAfter: stock.availableQuantity,
      reason: (dto.reason as any) || "RESTOCK",
      actorId: dto.actorId || callerTenantId || "STAFF",
      referenceId: dto.referenceId,
      notes: dto.notes,
      createdAt: new Date(),
    });
    await this.stockRepo.recordMovement(movement);

    return {
      variantId: stock.variantId,
      onHand: stock.onHandQuantity,
      reserved: stock.reservedQuantity,
      available: stock.availableQuantity,
    };
  }

  async adjustStockBatch(dto: AdjustStockBatchDto, callerTenantId?: string) {
    const effectiveTenantId = callerTenantId || dto.tenantId;
    if (this.stockRepo.atomicAdjustBatch) {
      const results = await this.stockRepo.atomicAdjustBatch(
        dto.items.map((item) => ({
          variantId: item.variantId,
          outletId: dto.outletId,
          callerTenantId: effectiveTenantId,
          quantityChange: item.quantityChange,
          reason: dto.reason || "ORDER_SALE",
          actorId: dto.actorId || effectiveTenantId || "ORDER_SERVICE",
          referenceId: dto.referenceId,
          notes: dto.notes,
        }))
      );
      void this.notifyDiscoveryAvailability(dto.outletId, effectiveTenantId);
      return { success: true, results };
    }

    const results = [];
    for (const item of dto.items) {
      results.push(
        await this.adjustStock(
          {
            variantId: item.variantId,
            outletId: dto.outletId,
            tenantId: effectiveTenantId,
            quantityChange: item.quantityChange,
            reason: dto.reason,
            referenceId: dto.referenceId,
            actorId: dto.actorId,
            notes: dto.notes,
          },
          effectiveTenantId
        )
      );
    }
    return { success: true, results };
  }

  async reserveStock(dto: ReserveStockDto) {
    if ("addReservation" in this.stockRepo) {
      const before = await this.stockRepo.findByVariantId(dto.variantId);
      if (!before) throw new VariantNotFoundError(dto.variantId);
      if (!before.hasAvailable(dto.quantity)) {
        throw new InsufficientStockError(before.availableQuantity, dto.quantity);
      }

      await (this.stockRepo as any).addReservation({
        variantId: dto.variantId,
        outletId: before.outletId,
        quantity: dto.quantity,
        orderId: dto.orderId,
        ttlMinutes: dto.ttlMinutes || 10,
      });

      const after = await this.stockRepo.findByVariantId(dto.variantId);
      return {
        success: true,
        variantId: dto.variantId,
        orderId: dto.orderId,
        reservedQuantity: dto.quantity,
        remainingAvailable: after ? after.availableQuantity : Math.max(0, before.availableQuantity - dto.quantity),
      };
    }

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
    if ("releaseReservation" in this.stockRepo) {
      await (this.stockRepo as any).releaseReservation(dto.orderId);
    } else {
      const stock = await this.stockRepo.findByVariantId(dto.variantId);
      if (stock) {
        stock.releaseReservation(dto.quantity);
        await this.stockRepo.save(stock);
      }
    }
    return { success: true };
  }

  async commitStock(dto: ReserveStockDto) {
    if ("commitReservation" in this.stockRepo) {
      await (this.stockRepo as any).commitReservation(dto.orderId);
    } else {
      const stock = await this.stockRepo.findByVariantId(dto.variantId);
      if (stock) {
        stock.commitReservation(dto.quantity);
        await this.stockRepo.save(stock);
      }
    }
    return { success: true };
  }

  async getOutletMovements(outletId: string, limit = 50) {
    return this.stockRepo.findMovementsByOutlet(outletId, limit);
  }

  async cleanupExpiredReservations() {
    return this.stockRepo.expireExpiredReservations();
  }

  // --- Platform Admin Price Cap Governance ---

  async listPriceCaps() {
    return this.priceCapRepo.findAll();
  }

  async createPriceCap(dto: CreatePriceCapRuleDto, adminUserId = "PLATFORM_ADMIN") {
    const rule = new AdminPriceCapRule({
      id: UniqueIdentifier.generateV7(),
      scope: dto.scope,
      targetKey: dto.targetKey,
      maxPricePaise: dto.maxPricePaise,
      enforceMrpCap: dto.enforceMrpCap ?? true,
      reason: dto.reason,
      isActive: true,
      createdBy: adminUserId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.priceCapRepo.save(rule);
    return rule;
  }

  async deactivatePriceCap(id: string) {
    const rule = await this.priceCapRepo.findById(id);
    if (!rule) throw new NotFoundException(`Price cap rule ${id} not found.`);
    rule.deactivate();
    await this.priceCapRepo.save(rule);
    return { success: true, ruleId: id };
  }
}
