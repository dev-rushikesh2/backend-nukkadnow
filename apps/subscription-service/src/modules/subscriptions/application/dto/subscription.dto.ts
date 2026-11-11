import { IsString, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class SubscribePlanDto {
  @ApiProperty({ example: "GROWTH", enum: ["STARTER", "GROWTH", "ENTERPRISE"] })
  @IsString()
  @IsNotEmpty()
  planCode!: "STARTER" | "GROWTH" | "ENTERPRISE";
}
