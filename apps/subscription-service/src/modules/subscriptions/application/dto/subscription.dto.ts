import { IsString, IsNotEmpty, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class SubscribePlanDto {
  @ApiProperty({ example: "GROWTH", enum: ["STARTER", "GROWTH", "ENTERPRISE"] })
  @IsString()
  @IsNotEmpty()
  planCode!: "STARTER" | "GROWTH" | "ENTERPRISE";

  @ApiProperty({ example: "pay_1234567890", required: false, description: "PSP Payment ID for paid tier activation" })
  @IsString()
  @IsOptional()
  paymentId?: string;
}
