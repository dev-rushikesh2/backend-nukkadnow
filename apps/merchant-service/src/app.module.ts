import { Module } from "@nestjs/common";
import { HealthModule } from "./health/health.module";
import { MerchantModule } from "./modules/merchant/merchant.module";

@Module({
  imports: [HealthModule, MerchantModule],
})
export class AppModule {}
