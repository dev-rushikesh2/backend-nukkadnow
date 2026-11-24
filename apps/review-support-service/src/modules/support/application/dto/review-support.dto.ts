import { IsString, IsNotEmpty, IsInt, Min, Max, IsOptional, IsIn } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateReviewDto {
  @ApiProperty({ example: "ord_123456" })
  @IsString()
  @IsNotEmpty()
  orderId!: string;

  @ApiProperty({ example: "cust_123456" })
  @IsString()
  @IsNotEmpty()
  customerId!: string;

  @ApiProperty({ example: "outlet_123456" })
  @IsString()
  @IsNotEmpty()
  outletId!: string;

  @ApiProperty({ example: 5, minimum: 1, maximum: 5 })
  @IsInt()
  @Min(1)
  @Max(5)
  rating!: number;

  @ApiProperty({ example: "Great food and fast service!", required: false })
  @IsString()
  @IsOptional()
  comment?: string;
}

export class CreateTicketDto {
  @ApiProperty({ example: "cust_123456" })
  @IsString()
  @IsNotEmpty()
  customerId!: string;

  @ApiProperty({ example: "Wrong item delivered" })
  @IsString()
  @IsNotEmpty()
  subject!: string;

  @ApiProperty({ example: "I received tea instead of coffee." })
  @IsString()
  @IsNotEmpty()
  initialMessage!: string;

  @ApiProperty({ example: "ord_123456", required: false })
  @IsString()
  @IsOptional()
  orderId?: string;

  @ApiProperty({ example: "NORMAL", enum: ["LOW", "NORMAL", "HIGH", "URGENT"], required: false })
  @IsIn(["LOW", "NORMAL", "HIGH", "URGENT"])
  @IsOptional()
  priority?: "LOW" | "NORMAL" | "HIGH" | "URGENT";
}

export class AddMessageDto {
  @ApiProperty({ example: "cust_123456" })
  @IsString()
  @IsNotEmpty()
  senderId!: string;

  @ApiProperty({ example: "CUSTOMER", enum: ["CUSTOMER", "AGENT"] })
  @IsIn(["CUSTOMER", "AGENT"])
  senderRole!: "CUSTOMER" | "AGENT";

  @ApiProperty({ example: "Any update on this ticket?" })
  @IsString()
  @IsNotEmpty()
  message!: string;
}
