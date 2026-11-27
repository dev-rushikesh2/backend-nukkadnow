import { Controller, Post, Get, Put, Patch, Delete, Body, Param, Query, Req, Headers, NotFoundException, ForbiddenException } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { CatalogService } from "../../../application/services/catalog.service";
import { PrismaService } from "../../../infrastructure/persistence/prisma/prisma.service";
import {
  CreateProductDto,
  AdjustStockDto,
  AdjustStockBatchDto,
  ReserveStockDto,
  UpdateVariantPricingDto,
  CreatePriceCapRuleDto,
} from "../../../application/dto/catalog.dto";

@ApiTags("Catalog & Inventory")
@Controller("api/v1/catalog")
export class CatalogController {
  constructor(
    private readonly catalogService: CatalogService,
    private readonly prisma: PrismaService
  ) {}

  @Get("categories")
  @ApiOperation({ summary: "Customer: List active marketplace product categories with counts" })
  async listCategories() {
    const grouped = await this.prisma.product.groupBy({
      by: ["category"],
      where: { isAvailable: true },
      _count: { _all: true },
    });

    const metaMap: Record<string, { icon: string; color: string }> = {
      "Grocery & Kirana": { icon: "🛒", color: "#FEF3C7" },
      "Grocery & Daily Needs": { icon: "🏪", color: "#EDE9FE" },
      "Fruits & Vegetables": { icon: "🥬", color: "#DCFCE7" },
      "Dairy & Bakery": { icon: "🥛", color: "#E0F2FE" },
      "Snacks & Beverages": { icon: "🍪", color: "#FFEDD5" },
      "Personal Care": { icon: "🧴", color: "#FCE7F3" },
    };

    const categories = grouped.map((g, i) => ({
      id: g.category.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      name: g.category,
      icon: metaMap[g.category]?.icon || "📦",
      color: metaMap[g.category]?.color || (i % 2 === 0 ? "#F3E8FF" : "#FEF3C7"),
      count: g._count._all,
    }));

    return { success: true, data: categories };
  }

  @Get("products")
  @ApiOperation({ summary: "List catalog products across outlets/merchants with search and category filters" })
  async listProducts(
    @Query("merchantId") merchantId?: string,
    @Query("outletId") outletId?: string,
    @Query("category") category?: string,
    @Query("query") query?: string,
    @Query("q") q?: string,
    @Query("flagged") flagged?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string
  ) {
    const where: any = {};
    if (merchantId) where.tenantId = merchantId;
    if (outletId && outletId !== "undefined") where.outletId = outletId;
    if (category && category !== "ALL" && category !== "all") {
      where.category = { contains: category, mode: "insensitive" };
    }
    const search = String(query || q || "").trim();
    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { category: { contains: search, mode: "insensitive" } },
      ];
    }
    if (flagged === "true") where.isAvailable = false;

    const pageNum = Math.max(1, Number(page) || 1);
    const take = Math.min(100, Math.max(1, Number(limit) || 25));
    const [items, total] = await Promise.all([
      this.prisma.product.findMany({
        where,
        include: { variants: { include: { stockBalance: true } } },
        orderBy: { createdAt: "desc" },
        skip: (pageNum - 1) * take,
        take,
      }),
      this.prisma.product.count({ where }),
    ]);

    return {
      success: true,
      data: {
        items,
        total,
        page: pageNum,
        limit: take,
      },
    };
  }

  @Patch("products/:id/status")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Admin: Enable or flag/disable a product in catalog" })
  async updateProductStatus(@Param("id") id: string, @Body() body: { status?: string; isAvailable?: boolean }) {
    const existing = await this.prisma.product.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException(`Product '${id}' not found`);
    const nextAvail =
      body?.isAvailable !== undefined
        ? Boolean(body.isAvailable)
        : !["FLAGGED", "DISABLED", "REJECTED", "REMOVED", "INACTIVE"].includes(String(body?.status || "").toUpperCase());
    const updated = await this.prisma.product.update({
      where: { id },
      data: { isAvailable: nextAvail },
    });
    return { success: true, data: updated };
  }

  @Delete("products/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Admin or Merchant: Remove a product from catalog" })
  async deleteProduct(@Param("id") id: string, @Headers("x-tenant-id") headerTenantId?: string, @Req() req?: any) {
    const existing = await this.prisma.product.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException(`Product '${id}' not found`);
    const callerTenantId = req?.user?.tenantId || headerTenantId;
    if (callerTenantId && existing.tenantId !== callerTenantId) {
      throw new ForbiddenException("Cross-tenant access forbidden");
    }
    await this.prisma.product.delete({ where: { id } });
    return { success: true, data: { deleted: true, id } };
  }

  @Put("products/:id")
  @Patch("products/:id")
  @Post("products/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update product metadata and primary variant details" })
  async updateProduct(
    @Param("id") id: string,
    @Body() body: any,
    @Headers("x-tenant-id") headerTenantId?: string,
    @Req() req?: any
  ) {
    const existing = await this.prisma.product.findUnique({
      where: { id },
      include: { variants: true },
    });
    if (!existing) throw new NotFoundException(`Product '${id}' not found`);
    const callerTenantId = req?.user?.tenantId || headerTenantId;
    if (callerTenantId && existing.tenantId !== callerTenantId) {
      throw new ForbiddenException("Cross-tenant access forbidden");
    }

    const updated = await this.prisma.product.update({
      where: { id },
      data: {
        ...(body?.name !== undefined ? { name: String(body.name).trim() } : {}),
        ...(body?.title !== undefined ? { name: String(body.title).trim() } : {}),
        ...(body?.description !== undefined ? { description: String(body.description) } : {}),
        ...(body?.category !== undefined ? { category: String(body.category) } : {}),
        ...(body?.subCategory !== undefined ? { subCategory: body.subCategory ? String(body.subCategory) : null } : {}),
        ...(body?.isAvailable !== undefined ? { isAvailable: Boolean(body.isAvailable) } : {}),
      },
      include: { variants: { include: { stockBalance: true } } },
    });

    const firstVariant = existing.variants?.[0];
    if (firstVariant && (body?.pricePaise !== undefined || body?.compareAtPricePaise !== undefined)) {
      await this.catalogService.updateVariantPricing(
        id,
        {
          variantId: body?.variantId || firstVariant.id,
          pricePaise: Number(body.pricePaise ?? firstVariant.pricePaise),
          compareAtPricePaise:
            body?.compareAtPricePaise !== undefined ? Number(body.compareAtPricePaise) : firstVariant.compareAtPricePaise ?? undefined,
        },
        callerTenantId
      );
      return this.catalogService.getProduct(id);
    }

    return updated;
  }

  @Post("products")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create product with variants and initial inventory, validating Admin Price Caps" })
  @ApiResponse({ status: 201, description: "Product created" })
  @ApiResponse({ status: 422, description: "Price Cap or MRP Violation" })
  async createProduct(@Body() dto: CreateProductDto, @Headers("x-tenant-id") headerTenantId: string | undefined, @Req() req: any) {
    const callerTenantId = req.user?.tenantId || headerTenantId;
    return this.catalogService.createProduct(dto, callerTenantId);
  }

  @Get("products/:id")
  @ApiOperation({ summary: "Get product details with real-time stock balances" })
  async getProduct(@Param("id") id: string) {
    return this.catalogService.getProduct(id);
  }

  @Get("outlets/:outletId/products")
  @ApiOperation({ summary: "List all catalogue items for an outlet" })
  async listOutletProducts(@Param("outletId") outletId: string) {
    return this.catalogService.listOutletProducts(outletId);
  }

  @Patch("products/:id/pricing")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Merchant update variant pricing with Admin Price Cap enforcement" })
  @ApiResponse({ status: 200, description: "Pricing updated" })
  @ApiResponse({ status: 422, description: "Price Cap or MRP Violation" })
  async updatePricing(
    @Param("id") id: string,
    @Body() dto: UpdateVariantPricingDto,
    @Headers("x-tenant-id") headerTenantId: string | undefined,
    @Req() req: any
  ) {
    const callerTenantId = req.user?.tenantId || headerTenantId;
    return this.catalogService.updateVariantPricing(id, dto, callerTenantId);
  }

  @Post("inventory/adjust")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Atomic inventory restock or deduction with double-entry audit logging" })
  async adjustStock(@Body() dto: AdjustStockDto, @Headers("x-tenant-id") headerTenantId: string | undefined, @Req() req: any) {
    const callerTenantId = req.user?.tenantId || headerTenantId || dto.tenantId;
    return this.catalogService.adjustStock(dto, callerTenantId);
  }

  @Get("stock/:variantId")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get live stock balance for a single variant" })
  async getVariantStock(
    @Param("variantId") variantId: string,
    @Headers("x-tenant-id") headerTenantId?: string,
    @Req() req?: any
  ) {
    const record = await this.prisma.stockBalance.findUnique({ where: { variantId } });
    if (!record) throw new NotFoundException(`Stock balance for variant '${variantId}' not found`);
    const callerTenantId = req?.user?.tenantId || headerTenantId;
    if (callerTenantId && record.tenantId !== callerTenantId) {
      throw new ForbiddenException("Cross-tenant stock access forbidden");
    }
    return {
      variantId: record.variantId,
      tenantId: record.tenantId,
      outletId: record.outletId,
      onHand: record.onHandQuantity,
      reserved: record.reservedQuantity,
      available: Math.max(0, record.onHandQuantity - record.reservedQuantity),
      version: record.version,
    };
  }

  @Post("stock/:variantId/adjust")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Adjust variant stock by variantId" })
  async adjustVariantStock(
    @Param("variantId") variantId: string,
    @Body() body: any,
    @Headers("x-tenant-id") headerTenantId?: string,
    @Req() req?: any
  ) {
    const existing = await this.prisma.productVariant.findUnique({
      where: { id: variantId },
      include: { product: { select: { outletId: true, tenantId: true } } },
    });
    if (!existing?.product) throw new NotFoundException(`Variant '${variantId}' not found`);
    const callerTenantId = req?.user?.tenantId || headerTenantId || body?.tenantId;
    return this.catalogService.adjustStock(
      {
        variantId,
        outletId: body?.outletId || existing.product.outletId,
        tenantId: existing.product.tenantId,
        quantityChange: Number(body?.quantityChange ?? body?.delta ?? 0),
        reason: body?.reason || "RESTOCK",
        actorId: body?.actorId || callerTenantId || "STAFF",
        referenceId: body?.referenceId,
        notes: body?.notes,
      },
      callerTenantId
    );
  }

  @Post("inventory/adjust-batch")
  @ApiBearerAuth()
  @ApiOperation({ summary: "All-or-nothing atomic batch stock adjustment for order checkout / cancellation" })
  async adjustStockBatch(
    @Body() dto: AdjustStockBatchDto,
    @Headers("x-tenant-id") headerTenantId: string | undefined,
    @Req() req: any
  ) {
    const callerTenantId = req.user?.tenantId || headerTenantId || dto.tenantId;
    return this.catalogService.adjustStockBatch(dto, callerTenantId);
  }

  @Get("outlets/:outletId/movements")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get immutable stock movement audit ledger for an outlet" })
  async getOutletMovements(
    @Param("outletId") outletId: string,
    @Query("limit") limit?: number,
    @Headers("x-tenant-id") headerTenantId?: string,
    @Req() req?: any
  ) {
    const callerTenantId = req?.user?.tenantId || headerTenantId;
    if (callerTenantId) {
      const sample = await this.prisma.product.findFirst({ where: { outletId }, select: { tenantId: true } });
      if (sample && sample.tenantId !== callerTenantId) {
        throw new ForbiddenException("Cross-tenant access forbidden for outlet movements.");
      }
    }
    return this.catalogService.getOutletMovements(outletId, limit ? Number(limit) : 50);
  }

  @Post("inventory/reserve")
  @ApiOperation({ summary: "Internal atomic stock reservation for checkout with TTL" })
  async reserveStock(@Body() dto: ReserveStockDto) {
    return this.catalogService.reserveStock(dto);
  }

  @Post("inventory/release")
  @ApiOperation({ summary: "Release uncommitted stock reservation" })
  async releaseStock(@Body() dto: ReserveStockDto) {
    return this.catalogService.releaseStock(dto);
  }

  @Post("inventory/commit")
  @ApiOperation({ summary: "Commit stock reservation on payment completion" })
  async commitStock(@Body() dto: ReserveStockDto) {
    return this.catalogService.commitStock(dto);
  }

  @Post("inventory/cleanup-expired")
  @ApiOperation({ summary: "TTL Sweeper: auto-release expired reservations" })
  async cleanupExpired() {
    const count = await this.catalogService.cleanupExpiredReservations();
    return { success: true, expiredReleasedCount: count };
  }

  // --- Platform Admin Price Cap Governance ---

  @Get("admin/price-caps")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Platform Admin: List all price cap policies" })
  async listPriceCaps() {
    return this.catalogService.listPriceCaps();
  }

  @Post("admin/price-caps")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Platform Admin: Create a new category or locality price cap" })
  async createPriceCap(@Body() dto: CreatePriceCapRuleDto, @Req() req: any) {
    const adminUserId = req.user?.sub || "PLATFORM_ADMIN";
    return this.catalogService.createPriceCap(dto, adminUserId);
  }

  @Delete("admin/price-caps/:id")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Platform Admin: Deactivate a price cap policy" })
  async deactivatePriceCap(@Param("id") id: string) {
    return this.catalogService.deactivatePriceCap(id);
  }
}
