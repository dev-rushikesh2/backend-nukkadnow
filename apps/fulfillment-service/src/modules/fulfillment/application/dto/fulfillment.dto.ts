import { IsString, IsNotEmpty, IsNumber, IsBoolean, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSlotDto {
  @ApiProperty({ example: "outlet_uuid_1" })
  @IsString()
  @IsNotEmpty()
  outletId!: string;

  @ApiProperty({ example: "2026-11-12" })
  @IsString()
  slotDate!: string;

  @ApiProperty({ example: "10:00" })
  @IsString()
  startTime!: string;

  @ApiProperty({ example: "10:30" })
  @IsString()
  endTime!: string;

  @ApiProperty({ example: 10, default: 10 })
  @IsNumber()
  maxCapacity: number = 10;
}

export class ReserveSlotDto {
  @ApiProperty({ example: "slot_uuid_1" })
  @IsString()
  slotId!: string;

  @ApiProperty({ example: "order_uuid_1" })
  @IsString()
  orderId!: string;
}

export class GenerateTokenDto {
  @ApiProperty({ example: "order_uuid_1" })
  @IsString()
  orderId!: string;

  @ApiProperty({ example: "outlet_uuid_1" })
  @IsString()
  outletId!: string;
}
