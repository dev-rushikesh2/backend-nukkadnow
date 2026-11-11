import { IsString, IsNotEmpty, IsEnum, IsNumber, IsBoolean, IsArray, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { SellerMode } from "../../domain/value-objects/seller-mode.vo";

export class CreateMerchantDto {
  @ApiProperty({ example: "Apna Kirana & Bakers" })
  @IsString()
  @IsNotEmpty()
  organizationName!: string;

  @ApiProperty({ example: "Apna Retail LLP", required: false })
  @IsString()
  @IsOptional()
  legalBusinessName?: string;

  @ApiProperty({ example: "Ramesh Sharma" })
  @IsString()
  @IsNotEmpty()
  contactName!: string;

  @ApiProperty({ example: "+919876543210" })
  @IsString()
  @IsNotEmpty()
  contactPhone!: string;
}

export class CreateOutletDto {
  @ApiProperty({ example: "org_uuid_here" })
  @IsString()
  @IsNotEmpty()
  merchantId!: string;

  @ApiProperty({ example: "Apna Kirana - Sitabuldi Branch" })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ enum: SellerMode, example: SellerMode.PERMANENT })
  @IsEnum(SellerMode)
  sellerMode!: SellerMode;

  @ApiProperty({ example: "Shop 14, Main Road, Sitabuldi" })
  @IsString()
  addressLine!: string;

  @ApiProperty({ example: "Sitabuldi" })
  @IsString()
  locality!: string;

  @ApiProperty({ example: "Nagpur", default: "Nagpur" })
  @IsString()
  city: string = "Nagpur";

  @ApiProperty({ example: 21.1458 })
  @IsNumber()
  latitude!: number;

  @ApiProperty({ example: 79.0882 })
  @IsNumber()
  longitude!: number;

  @ApiProperty({ example: true, description: "False for private residential addresses (Home Chefs)" })
  @IsBoolean()
  isAddressPublic: boolean = true;
}

export class OperatingSlotDto {
  @ApiProperty({ example: 1, description: "0=Sun, 1=Mon ... 6=Sat" })
  @IsNumber()
  dayOfWeek!: number;

  @ApiProperty({ example: "09:00" })
  @IsString()
  openTime!: string;

  @ApiProperty({ example: "21:30" })
  @IsString()
  closeTime!: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  isClosed!: boolean;
}

export class UpdateOperatingHoursDto {
  @ApiProperty({ type: [OperatingSlotDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OperatingSlotDto)
  slots!: OperatingSlotDto[];
}
