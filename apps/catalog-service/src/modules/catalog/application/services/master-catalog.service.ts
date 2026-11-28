import { Injectable, ForbiddenException, UnprocessableEntityException, NotFoundException, BadRequestException } from "@nestjs/common";
import { PrismaService } from "../../infrastructure/persistence/prisma/prisma.service";
import { PriceCapRepositoryPort, StockRepositoryPort } from "../../domain/repositories/catalog.repository.port";
import { PriceCapPolicy } from "../../domain/policies/price-cap.policy";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";
import { STORE_TYPE_PACKS, MASTER_CATALOG_SEED } from "../../infrastructure/seed/master-catalog.data";
import {
  AdoptMasterProductsDto,
  CreateMasterProductTemplateDto,
  BulkImportMasterCatalogDto,
} from "../dto/catalog.dto";

@Injectable()
export class MasterCatalogService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly priceCapRepo: PriceCapRepositoryPort,
    private readonly stockRepo: StockRepositoryPort
  ) {}

  /** List master product templates filterable by storeType, category, and Hindi/English search aliases. */
  async listMasterCatalog(params: {
    storeType?: string;
    category?: string;
    q?: string;
    outletId?: string;
    includeInactive?: boolean;
  }) {
    const { storeType, category, q, outletId, includeInactive } = params;

    const allTemplates = await this.prisma.masterProductTemplate.findMany({
      where: includeInactive ? undefined : { isActive: true },
      include: { variants: { orderBy: { suggestedPricePaise: "asc" } } },
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    });

    // Compute counts per store type pack before filtering
    const packCounts = new Map<string, number>();
    for (const tpl of allTemplates) {
      for (const st of tpl.storeTypes) {
        packCounts.set(st, (packCounts.get(st) || 0) + 1);
      }
    }

    const packs = STORE_TYPE_PACKS.map((p) => ({
      ...p,
      count: packCounts.get(p.code) || 0,
    }));

    // Lookup which masterProductIds this outlet has already adopted
    let adoptedMap = new Map<string, string>();
    if (outletId && outletId !== "undefined") {
      const existing = await this.prisma.product.findMany({
        where: { outletId, masterProductId: { not: null } },
        select: { id: true, masterProductId: true },
      });
      for (const row of existing) {
        if (row.masterProductId) {
          adoptedMap.set(row.masterProductId, row.id);
        }
      }
    }

    const search = String(q || "").trim().toLowerCase();
    const normStoreType = storeType && storeType !== "ALL" ? storeType.toUpperCase() : undefined;
    const normCat = category && category !== "ALL" && category !== "All" ? category.toLowerCase() : undefined;

    const filtered = allTemplates.filter((tpl: any) => {
      if (normStoreType && !tpl.storeTypes.includes(normStoreType)) return false;
      if (normCat && !tpl.category.toLowerCase().includes(normCat)) return false;
      if (search) {
        const aliasHit = (tpl.searchAliases || []).some((a: string) => a.toLowerCase().includes(search));
        const barcodeHit = (tpl.variants || []).some((v: any) => (v.barcode || "").toLowerCase().includes(search));
        const textHit =
          tpl.name.toLowerCase().includes(search) ||
          tpl.code.toLowerCase().includes(search) ||
          tpl.category.toLowerCase().includes(search) ||
          (tpl.subCategory || "").toLowerCase().includes(search);
        if (!aliasHit && !barcodeHit && !textHit) return false;
      }
      return true;
    });

    const items = filtered.map((tpl: any) => ({
      ...tpl,
      alreadyInOutlet: adoptedMap.has(tpl.id),
      outletProductId: adoptedMap.get(tpl.id) ?? null,
    }));

    return {
      success: true,
      data: {
        packs,
        categories: Array.from(new Set(allTemplates.map((t: any) => t.category))),
        total: items.length,
        items,
      },
    };
  }

  /**
   * Atomically clone selected master catalog products into a merchant outlet's inventory
   * with custom merchant pricing, stock counts, and price-cap enforcement.
   */
  async adoptMasterProducts(dto: AdoptMasterProductsDto, callerTenantId?: string) {
    if (callerTenantId && callerTenantId !== dto.tenantId) {
      throw new ForbiddenException("Tenant Mismatch: Cannot seed products into another organization.");
    }
    if (!dto.items || dto.items.length === 0) {
      throw new BadRequestException("Select at least one master product to adopt.");
    }

    const masterIds = dto.items.map((i) => i.masterProductId);
    const [templates, alreadyAdopted, activeRules] = await Promise.all([
      this.prisma.masterProductTemplate.findMany({
        where: { id: { in: masterIds }, isActive: true },
        include: { variants: true },
      }),
      this.prisma.product.findMany({
        where: { outletId: dto.outletId, masterProductId: { in: masterIds } },
        select: { masterProductId: true },
      }),
      this.priceCapRepo.findAllActive(),
    ]);

    const templateMap = new Map<string, any>(templates.map((t: any) => [t.id, t]));
    const existingMasterIds = new Set(alreadyAdopted.map((a: any) => a.masterProductId));

    const toCreate: Array<{ template: any; itemInput: any; selectedVariants: any[] }> = [];
    const skipped: string[] = [];

    for (const item of dto.items) {
      const tpl = templateMap.get(item.masterProductId);
      if (!tpl) {
        skipped.push(item.masterProductId);
        continue;
      }
      if (existingMasterIds.has(tpl.id)) {
        skipped.push(tpl.id);
        continue;
      }

      const tplVarMap = new Map<string, any>(tpl.variants.map((v: any) => [v.id, v]));
      const variantInputs =
        item.variants && item.variants.length > 0
          ? item.variants
          : tpl.variants.map((v: any) => ({
              masterVariantId: v.id,
              pricePaise: v.suggestedPricePaise,
              compareAtPricePaise: v.mrpPaise ?? undefined,
              initialStock: v.defaultStock,
            }));

      const resolvedVariants = variantInputs
        .map((vi: any) => {
          const tplVar = tplVarMap.get(vi.masterVariantId);
          if (!tplVar) return null;
          const pricePaise = Math.round(Number(vi.pricePaise || tplVar.suggestedPricePaise));
          const compareAtPricePaise =
            vi.compareAtPricePaise !== undefined
              ? Math.round(Number(vi.compareAtPricePaise))
              : tplVar.mrpPaise ?? undefined;
          const initialStock = Math.max(0, Math.round(Number(vi.initialStock ?? tplVar.defaultStock ?? 20)));

          if (!Number.isInteger(pricePaise) || pricePaise <= 0) {
            throw new BadRequestException(`Price must be greater than ₹0 for ${tpl.name} (${tplVar.name}).`);
          }

          const evalResult = PriceCapPolicy.evaluate(
            {
              productName: item.customName || tpl.name,
              category: tpl.category,
              subCategory: tpl.subCategory || undefined,
              sku: tplVar.skuPrefix || undefined,
              pricePaise,
              compareAtPricePaise,
            },
            activeRules
          );
          if (!evalResult.isValid) {
            throw new UnprocessableEntityException({
              statusCode: 422,
              error: "PRICE_CAP_VIOLATION",
              message: `${tpl.name} (${tplVar.name}): ${evalResult.violationReason}`,
              maxAllowedFormatted: evalResult.applicableCapFormatted,
            });
          }

          return {
            masterVariantId: tplVar.id,
            name: tplVar.name,
            sku: tplVar.skuPrefix ? `${tplVar.skuPrefix}-${dto.outletId.slice(-4).toUpperCase()}` : undefined,
            barcode: tplVar.barcode || undefined,
            pricePaise,
            compareAtPricePaise,
            initialStock,
          };
        })
        .filter(Boolean);

      if (resolvedVariants.length > 0) {
        toCreate.push({ template: tpl, itemInput: item, selectedVariants: resolvedVariants });
      }
    }

    const adoptedProducts = await this.prisma.$transaction(async (tx: any) => {
      const createdList: any[] = [];
      for (const entry of toCreate) {
        const productId = UniqueIdentifier.generateV7();
        const product = await tx.product.create({
          data: {
            id: productId,
            tenantId: dto.tenantId,
            outletId: dto.outletId,
            masterProductId: entry.template.id,
            name: entry.itemInput.customName?.trim() || entry.template.name,
            description: entry.template.description ?? null,
            category: entry.template.category,
            subCategory: entry.template.subCategory ?? null,
            imageUrl: entry.template.imageUrl ?? null,
            isAvailable: entry.itemInput.isAvailable ?? true,
          },
        });

        for (const v of entry.selectedVariants) {
          const variantId = UniqueIdentifier.generateV7();
          await tx.productVariant.create({
            data: {
              id: variantId,
              productId,
              masterVariantId: v.masterVariantId,
              tenantId: dto.tenantId,
              outletId: dto.outletId,
              name: v.name,
              sku: v.sku ?? null,
              barcode: v.barcode ?? null,
              pricePaise: v.pricePaise,
              compareAtPricePaise: v.compareAtPricePaise ?? null,
              isPreorder: false,
              leadTimeMinutes: 0,
            },
          });

          await tx.stockBalance.create({
            data: {
              id: UniqueIdentifier.generateV7(),
              variantId,
              tenantId: dto.tenantId,
              outletId: dto.outletId,
              onHandQuantity: v.initialStock,
              reservedQuantity: 0,
              version: 1,
            },
          });

          if (v.initialStock > 0) {
            await tx.stockMovement.create({
              data: {
                id: UniqueIdentifier.generateV7(),
                variantId,
                tenantId: dto.tenantId,
                outletId: dto.outletId,
                quantityChange: v.initialStock,
                balanceAfter: v.initialStock,
                reason: "RESTOCK",
                actorId: dto.actorId || "MERCHANT_MASTER_ADOPT",
                referenceId: productId,
                notes: `Quick-added from Master Catalog (${entry.template.code})`,
              },
            });
          }
        }
        createdList.push(product);
      }
      return createdList;
    });

    void this.notifyDiscoveryAvailability(dto.outletId, dto.tenantId);

    return {
      success: true,
      data: {
        adoptedCount: adoptedProducts.length,
        skippedCount: skipped.length,
        adoptedProducts,
      },
    };
  }

  /** Admin: Create or update a single Master Catalog template. */
  async createMasterTemplate(dto: CreateMasterProductTemplateDto) {
    const cleanCode = dto.code.trim().toUpperCase().replace(/[^A-Z0-9_-]/g, "-");
    const created = await this.prisma.masterProductTemplate.upsert({
      where: { code: cleanCode },
      create: {
        code: cleanCode,
        name: dto.name.trim(),
        description: dto.description?.trim() ?? null,
        storeTypes: dto.storeTypes,
        category: dto.category.trim(),
        subCategory: dto.subCategory?.trim() ?? null,
        searchAliases: dto.searchAliases ?? [],
        gstPercent: dto.gstPercent ?? 0,
        emoji: dto.emoji || "📦",
        imageUrl: dto.imageUrl ?? null,
        sortOrder: dto.sortOrder ?? 100,
        isActive: dto.isActive ?? true,
        variants: {
          create: dto.variants.map((v) => ({
            name: v.name.trim(),
            skuPrefix: v.skuPrefix?.trim() ?? null,
            barcode: v.barcode?.trim() ?? null,
            suggestedPricePaise: Math.round(v.suggestedPricePaise),
            mrpPaise: v.mrpPaise !== undefined ? Math.round(v.mrpPaise) : null,
            defaultStock: Math.round(v.defaultStock ?? 25),
            unitLabel: v.unitLabel?.trim() ?? null,
          })),
        },
      },
      update: {
        name: dto.name.trim(),
        description: dto.description?.trim() ?? null,
        storeTypes: dto.storeTypes,
        category: dto.category.trim(),
        subCategory: dto.subCategory?.trim() ?? null,
        searchAliases: dto.searchAliases ?? [],
        gstPercent: dto.gstPercent ?? 0,
        emoji: dto.emoji || "📦",
        imageUrl: dto.imageUrl ?? null,
        sortOrder: dto.sortOrder ?? 100,
        isActive: dto.isActive ?? true,
      },
      include: { variants: true },
    });

    return { success: true, data: created };
  }

  /** Admin: Update an existing Master Catalog template by ID. */
  async updateMasterTemplate(id: string, body: any) {
    const existing = await this.prisma.masterProductTemplate.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException(`Master template '${id}' not found`);

    const updated = await this.prisma.masterProductTemplate.update({
      where: { id },
      data: {
        ...(body.name !== undefined ? { name: String(body.name).trim() } : {}),
        ...(body.description !== undefined ? { description: body.description ? String(body.description) : null } : {}),
        ...(Array.isArray(body.storeTypes) ? { storeTypes: body.storeTypes } : {}),
        ...(body.category !== undefined ? { category: String(body.category).trim() } : {}),
        ...(body.subCategory !== undefined ? { subCategory: body.subCategory ? String(body.subCategory) : null } : {}),
        ...(Array.isArray(body.searchAliases) ? { searchAliases: body.searchAliases } : {}),
        ...(body.gstPercent !== undefined ? { gstPercent: Number(body.gstPercent) } : {}),
        ...(body.emoji !== undefined ? { emoji: String(body.emoji) } : {}),
        ...(body.imageUrl !== undefined ? { imageUrl: body.imageUrl ? String(body.imageUrl) : null } : {}),
        ...(body.isActive !== undefined ? { isActive: Boolean(body.isActive) } : {}),
      },
      include: { variants: true },
    });
    return { success: true, data: updated };
  }

  /** Admin: Delete a Master Catalog template by ID. */
  async deleteMasterTemplate(id: string) {
    const existing = await this.prisma.masterProductTemplate.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException(`Master template '${id}' not found`);
    await this.prisma.masterProductTemplate.delete({ where: { id } });
    return { success: true, data: { deleted: true, id } };
  }

  /** Admin: Bulk import / upsert Master Catalog templates from parsed CSV/JSON rows. */
  async bulkImportMasterTemplates(dto: BulkImportMasterCatalogDto) {
    let importedCount = 0;
    for (const item of dto.items) {
      await this.createMasterTemplate(item);
      importedCount++;
    }
    return { success: true, data: { importedCount } };
  }

  /** Admin: Restore / seed built-in starter packs if deleted. */
  async resetStarterPacks() {
    let seededCount = 0;
    for (const item of MASTER_CATALOG_SEED) {
      const exists = await this.prisma.masterProductTemplate.findUnique({ where: { code: item.code } });
      if (!exists) {
        await this.createMasterTemplate({
          ...item,
          isActive: true,
        });
        seededCount++;
      }
    }
    return { success: true, data: { seededCount, totalBuiltIn: MASTER_CATALOG_SEED.length } };
  }

  private async notifyDiscoveryAvailability(outletId: string, tenantId?: string): Promise<void> {
    const discoveryUrl = process.env.DISCOVERY_SERVICE_URL || "http://localhost:4004";
    try {
      const stocks = await this.stockRepo.findByOutletId(outletId);
      const hasActiveStock = stocks.some((s) => s.availableQuantity > 0);
      await fetch(`${discoveryUrl}/api/v1/discovery/availability`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ outletId, tenantId, hasActiveStock }),
      }).catch(() => {});
    } catch {
      // Non-blocking best-effort discovery projection sync
    }
  }
}
