import { IsString, IsNotEmpty, IsNumber, IsBoolean, IsArray, ValidateNested, IsOptional } from "class-validator";
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

  @ApiProperty({ type: [CreateVariantDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateVariantDto)
  variants!: CreateVariantDto[];
}

export class AdjustStockDto {
  @ApiProperty({ example: "variant_uuid_here" })
  @IsString()
  variantId!: string;

  @ApiProperty({ example: "outlet_uuid_here" })
  @IsString()
  outletId!: string;

  @ApiProperty({ example: 25, description: "Positive to restock, negative to reduce" })
  @IsNumber()
  quantityChange!: number;

  @ApiProperty({ example: "DAILY_RESTOCK" })
  @IsString()
  reason!: string;
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
}
