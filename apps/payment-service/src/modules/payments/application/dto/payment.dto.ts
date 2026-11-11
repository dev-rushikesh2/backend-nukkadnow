import { IsString, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePaymentIntentDto {
  @ApiProperty({ example: "order_uuid_1" })
  @IsString()
  @IsNotEmpty()
  orderId!: string;

  @ApiProperty({ example: "tenant_uuid_1" })
  @IsString()
  @IsNotEmpty()
  tenantId!: string;

  @ApiProperty({ example: 13600, description: "Total amount in integer paise (e.g. Rs 136.00 = 13600)" })
  @IsNumber()
  amountPaise!: number;

  @ApiProperty({ example: "INR", default: "INR" })
  @IsString()
  @IsOptional()
  currency: string = "INR";

  @ApiProperty({ enum: ["RAZORPAY", "CASHFREE", "MOCK"], default: "MOCK" })
  @IsString()
  @IsOptional()
  provider: "RAZORPAY" | "CASHFREE" | "MOCK" = "MOCK";
}

export class ProcessRefundDto {
  @ApiProperty({ example: "payment_uuid_1" })
  @IsString()
  @IsNotEmpty()
  paymentId!: string;

  @ApiProperty({ example: 5000, description: "Refund amount in integer paise" })
  @IsNumber()
  amountPaise!: number;

  @ApiProperty({ example: "Item out of stock during fulfillment" })
  @IsString()
  reason!: string;
}
