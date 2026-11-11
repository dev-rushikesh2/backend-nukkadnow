import { Controller, Post, Get, Body, Param, Req } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { CatalogService } from "../../../application/services/catalog.service";
import { CreateProductDto, AdjustStockDto, ReserveStockDto } from "../../../application/dto/catalog.dto";

@ApiTags("Catalog & Inventory")
@Controller("api/v1/catalog")
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Post("products")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Create product with variants and initial inventory" })
  @ApiResponse({ status: 201, description: "Product created" })
  async createProduct(@Body() dto: CreateProductDto, @Req() req: any) {
    const callerTenantId = req.user?.tenantId;
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

  @Post("inventory/adjust")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Manual inventory restock or deduction" })
  async adjustStock(@Body() dto: AdjustStockDto) {
    return this.catalogService.adjustStock(dto);
  }

  @Post("inventory/reserve")
  @ApiOperation({ summary: "Internal atomic stock reservation for checkout" })
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
}
