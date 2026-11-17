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

      // Record initial movement in ledger
      if ((v.initialStock ?? 0) > 0) {
        this.stockRepo.recordMovement(
          new StockMovement({
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
        );
      }

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
    return product;
  }

  async getProduct(id: string) {
    const product = await this.productRepo.findById(id);
    if (!product) throw new ProductNotFoundError(id);

    const variantViews = await Promise.all(
      product.variants.map(async v => {
        const stock = await this.stockRepo.findByVariantId(v.id);
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

  async listOutletProducts(outletId: string) {
    const products = await this.productRepo.findByOutletId(outletId);
    return Promise.all(products.map(p => this.getProduct(p.id)));
  }

  async listTenantProducts(tenantId: string) {
    const products = await this.productRepo.findByTenantId(tenantId);
    return Promise.all(products.map(p => this.getProduct(p.id)));
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

  async adjustStock(dto: AdjustStockDto, callerTenantId?: string) {
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

  async reserveStock(dto: ReserveStockDto) {
    const stock = await this.stockRepo.findByVariantId(dto.variantId);
    if (!stock) throw new VariantNotFoundError(dto.variantId);

    if (!stock.hasAvailable(dto.quantity)) {
      throw new InsufficientStockError(stock.availableQuantity, dto.quantity);
    }

    stock.reserve(dto.quantity);
    await this.stockRepo.save(stock);

    // If in-memory repo has addReservation helper
    if ("addReservation" in this.stockRepo) {
      await (this.stockRepo as any).addReservation({
        variantId: dto.variantId,
        outletId: stock.outletId,
        quantity: dto.quantity,
        orderId: dto.orderId,
        ttlMinutes: dto.ttlMinutes || 10,
      });
    }

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
