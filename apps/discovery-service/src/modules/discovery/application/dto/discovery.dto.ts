import { IsNumber, IsOptional, IsString, IsArray, IsBoolean } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class NearbySearchQueryDto {
  @ApiProperty({ example: 21.1458, description: "Customer current latitude" })
  @IsNumber()
  @Type(() => Number)
  latitude!: number;

  @ApiProperty({ example: 79.0882, description: "Customer current longitude" })
  @IsNumber()
  @Type(() => Number)
  longitude!: number;

  @ApiProperty({ example: 5, required: false, description: "Search radius in kilometers (default: 5km)" })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  radiusKm: number = 5;

  @ApiProperty({ example: "Sitabuldi", required: false })
  @IsString()
  @IsOptional()
  locality?: string;

  @ApiProperty({ example: "Bakery", required: false })
  @IsString()
  @IsOptional()
  category?: string;
}

export class SyncOutletDocumentDto {
  @ApiProperty({ example: "outlet_uuid_1" })
  @IsString()
  outletId!: string;

  @ApiProperty({ example: "Apna Bakery" })
  @IsString()
  merchantName!: string;

  @ApiProperty({ example: "PERMANENT" })
  @IsString()
  sellerMode!: string;

  @ApiProperty({ example: "Sitabuldi" })
  @IsString()
  locality!: string;

  @ApiProperty({ example: "Nagpur" })
  @IsString()
  city!: string;

  @ApiProperty({ example: 21.1458 })
  @IsNumber()
  latitude!: number;

  @ApiProperty({ example: 79.0882 })
  @IsNumber()
  longitude!: number;

  @ApiProperty({ example: ["Bakery", "Snacks"] })
  @IsArray()
  categoryTags!: string[];

  @ApiProperty({ example: true })
  @IsBoolean()
  isCurrentlyOpen!: boolean;

  @ApiProperty({ example: 10 })
  @IsNumber()
  queueEstimateMinutes!: number;

  @ApiProperty({ example: false })
  @IsBoolean()
  isApproximateLocation!: boolean;

  @ApiProperty({ example: "Shop 14, Main Road, Sitabuldi" })
  @IsString()
  addressDisplay!: string;
}
