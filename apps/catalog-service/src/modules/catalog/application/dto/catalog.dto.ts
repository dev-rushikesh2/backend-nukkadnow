import { IsString, IsNotEmpty, IsNumber, IsBoolean, IsArray, ValidateNested, IsOptional, IsIn } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class CreateVariantDto {
  @ApiProperty({ example: "500g" })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ example: "SKU-BREAD-500", required: false })
  @IsString()
  @IsOptional()
  sku?: string;

  @ApiProperty({ example: "8901030000000", required: false })
  @IsString()
  @IsOptional()
  barcode?: string;

  @ApiProperty({ example: 4500, description: "Price in integer paise (e.g. Rs 45.00 = 4500)" })
  @IsNumber()
  pricePaise!: number;

  @ApiProperty({ example: 5000, required: false, description: "MRP / Compare-at price in paise" })
  @IsNumber()
  @IsOptional()
  compareAtPricePaise?: number;

  @ApiProperty({ example: false })
  @IsBoolean()
  @IsOptional()
  isPreorder?: boolean;

  @ApiProperty({ example: 0, description: "Lead time in minutes for made-to-order" })
  @IsNumber()
  @IsOptional()
  leadTimeMinutes?: number;

  @ApiProperty({ example: 10, description: "Initial on-hand stock balance" })
  @IsNumber()
  @IsOptional()
  initialStock?: number;
}

export class CreateProductDto {
  @ApiProperty({ example: "tenant_uuid_here" })
  @IsString()
  @IsNotEmpty()
  tenantId!: string;

  @ApiProperty({ example: "outlet_uuid_here" })
  @IsString()
  @IsNotEmpty()
  outletId!: string;

  @ApiProperty({ example: "Fresh Sourdough Bread" })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ example: "Artisanal naturally fermented sourdough loaf" })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: "Bakery" })
  @IsString()
  category!: string;

  @ApiProperty({ example: "Breads", required: false })
  @IsString()
  @IsOptional()
  subCategory?: string;

  @ApiProperty({ type: [CreateVariantDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateVariantDto)
  variants!: CreateVariantDto[];
}

export class AdjustStockDto {
  @ApiProperty({ example: "variant_uuid_here" })
  @IsString()
  @IsNotEmpty()
  variantId!: string;

  @ApiProperty({ example: "outlet_uuid_here" })
  @IsString()
  @IsNotEmpty()
  outletId!: string;

  @ApiProperty({ example: "tenant_uuid_here", required: false })
  @IsString()
  @IsOptional()
  tenantId?: string;

  @ApiProperty({ example: 25, description: "Positive to restock, negative to reduce" })
  @IsNumber()
  quantityChange!: number;

  @ApiProperty({ example: "RESTOCK", description: "RESTOCK, ORDER_SALE, DAMAGE_WASTE, AUDIT_CORRECTION, RETURN_RESTOCK" })
  @IsString()
  @IsNotEmpty()
  reason!: string;

  @ApiProperty({ example: "ORD-123456", required: false })
  @IsString()
  @IsOptional()
  referenceId?: string;

  @ApiProperty({ example: "Staff (Kitchen Register)", required: false })
  @IsString()
  @IsOptional()
  actorId?: string;

  @ApiProperty({ example: "Fresh morning batch cooked", required: false })
  @IsString()
  @IsOptional()
  notes?: string;
}

export class AdjustStockBatchItemDto {
  @ApiProperty({ example: "variant_uuid_here" })
  @IsString()
  @IsNotEmpty()
  variantId!: string;

  @ApiProperty({ example: -2 })
  @IsNumber()
  quantityChange!: number;
}

export class AdjustStockBatchDto {
  @ApiProperty({ example: "outlet_uuid_here" })
  @IsString()
  @IsNotEmpty()
  outletId!: string;

  @ApiProperty({ example: "tenant_uuid_here", required: false })
  @IsString()
  @IsOptional()
  tenantId?: string;

  @ApiProperty({ example: "ORDER_SALE" })
  @IsString()
  @IsNotEmpty()
  reason!: string;

  @ApiProperty({ example: "ORD-123456", required: false })
  @IsString()
  @IsOptional()
  referenceId?: string;

  @ApiProperty({ example: "ORDER_SERVICE", required: false })
  @IsString()
  @IsOptional()
  actorId?: string;

  @ApiProperty({ example: "Deducted atomically on order placement", required: false })
  @IsString()
  @IsOptional()
  notes?: string;

  @ApiProperty({ type: [AdjustStockBatchItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AdjustStockBatchItemDto)
  items!: AdjustStockBatchItemDto[];
}

export class ReserveStockDto {
  @ApiProperty({ example: "variant_uuid_here" })
  @IsString()
  variantId!: string;

  @ApiProperty({ example: 2, description: "Quantity to reserve for checkout" })
  @IsNumber()
  quantity!: number;

  @ApiProperty({ example: "order_uuid_here" })
  @IsString()
  orderId!: string;

  @ApiProperty({ example: 10, required: false, description: "TTL in minutes before auto-release" })
  @IsNumber()
  @IsOptional()
  ttlMinutes?: number;
}

export class UpdateVariantPricingDto {
  @ApiProperty({ example: "variant_uuid_here" })
  @IsString()
  variantId!: string;

  @ApiProperty({ example: 4500, description: "New price in paise" })
  @IsNumber()
  pricePaise!: number;

  @ApiProperty({ example: 5000, required: false, description: "Printed MRP in paise" })
  @IsNumber()
  @IsOptional()
  compareAtPricePaise?: number;
}

export class CreatePriceCapRuleDto {
  @ApiProperty({ example: "CATEGORY", enum: ["GLOBAL", "CATEGORY", "SUB_CATEGORY", "LOCALITY", "SPECIFIC_PRODUCT"] })
  @IsString()
  @IsIn(["GLOBAL", "CATEGORY", "SUB_CATEGORY", "LOCALITY", "SPECIFIC_PRODUCT"])
  scope!: "GLOBAL" | "CATEGORY" | "SUB_CATEGORY" | "LOCALITY" | "SPECIFIC_PRODUCT";

  @ApiProperty({ example: "Dairy & Milk", description: "Category name, locality, or SKU" })
  @IsString()
  @IsNotEmpty()
  targetKey!: string;

  @ApiProperty({ example: 7500, description: "Maximum allowed price in paise (e.g. Rs 75.00 = 7500)" })
  @IsNumber()
  maxPricePaise!: number;

  @ApiProperty({ example: true, description: "Enforce Legal Metrology: selling price cannot exceed printed MRP" })
  @IsBoolean()
  @IsOptional()
  enforceMrpCap?: boolean;

  @ApiProperty({ example: "Essential food price regulation by Platform Administration" })
  @IsString()
  @IsNotEmpty()
  reason!: string;
}
