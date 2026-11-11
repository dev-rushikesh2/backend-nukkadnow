import { Module } from "@nestjs/common";
import { HealthModule } from "./health/health.module";
import { OrdersModule } from "./modules/orders/orders.module";

@Module({
  imports: [HealthModule, OrdersModule],
})
export class AppModule {}
