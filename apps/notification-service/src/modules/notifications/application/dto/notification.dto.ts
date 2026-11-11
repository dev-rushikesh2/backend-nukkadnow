import { IsString, IsNotEmpty, IsEnum, IsObject } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTemplateDto {
  @ApiProperty({ example: "ORDER_READY_PICKUP" })
  @IsString()
  @IsNotEmpty()
  code!: string;

  @ApiProperty({ enum: ["SMS", "WHATSAPP", "EMAIL", "PUSH"], example: "WHATSAPP" })
  @IsEnum(["SMS", "WHATSAPP", "EMAIL", "PUSH"])
  channel!: "SMS" | "WHATSAPP" | "EMAIL" | "PUSH";

  @ApiProperty({ example: "Your order {orderNumber} is ready! Pickup token: {tokenNumber}" })
  @IsString()
  @IsNotEmpty()
  templateBody!: string;
}

export class SendNotificationDto {
  @ApiProperty({ example: "+919876543210" })
  @IsString()
  @IsNotEmpty()
  recipient!: string;

  @ApiProperty({ example: "ORDER_READY_PICKUP" })
  @IsString()
  @IsNotEmpty()
  templateCode!: string;

  @ApiProperty({ example: { orderNumber: "ORD-12345", tokenNumber: "A-01" } })
  @IsObject()
  variables!: Record<string, string>;
}
