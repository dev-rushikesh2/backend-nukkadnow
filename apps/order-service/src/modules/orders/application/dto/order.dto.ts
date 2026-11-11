import { IsString, IsNotEmpty, IsNumber, IsEnum, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AddToCartDto {
  @ApiProperty({ example: "outlet_uuid_1" })
  @IsString()
  @IsNotEmpty()
  outletId!: string;

  @ApiProperty({ example: "tenant_uuid_1" })
  @IsString()
  @IsNotEmpty()
  tenantId!: string;

  @ApiProperty({ example: "prod_uuid_1" })
  @IsString()
  @IsNotEmpty()
  productId!: string;

  @ApiProperty({ example: "var_uuid_1" })
  @IsString()
  @IsNotEmpty()
  variantId!: string;

  @ApiProperty({ example: "Organic Sourdough Bread" })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({ example: 2 })
  @IsNumber()
  quantity!: number;

  @ApiProperty({ example: 4500, description: "Unit price in integer paise" })
  @IsNumber()
  unitPricePaise!: number;
}

export class CheckoutDto {
  @ApiProperty({ enum: ["STORE_PICKUP", "MERCHANT_DELIVERY"], example: "STORE_PICKUP" })
  @IsEnum(["STORE_PICKUP", "MERCHANT_DELIVERY"])
  fulfillmentType!: "STORE_PICKUP" | "MERCHANT_DELIVERY";

  @ApiProperty({ example: "slot_uuid_1", required: false })
  @IsString()
  @IsOptional()
  pickupSlotId?: string;

  @ApiProperty({ example: "idem_uuid_1", required: false })
  @IsString()
  @IsOptional()
  idempotencyKey?: string;
}

export class AcceptOrderDto {
  @ApiProperty({ example: 15, description: "Estimated prep time in minutes" })
  @IsNumber()
  estimatedMinutes!: number;
}
