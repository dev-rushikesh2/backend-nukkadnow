import { Module } from "@nestjs/common";
import { HealthModule } from "./health/health.module";
import { FulfillmentModule } from "./modules/fulfillment/fulfillment.module";

@Module({
  imports: [HealthModule, FulfillmentModule],
})
export class AppModule {}
