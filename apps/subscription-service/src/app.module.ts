import { Module } from "@nestjs/common";
import { HealthModule } from "./health/health.module";
import { SubscriptionsModule } from "./modules/subscriptions/subscriptions.module";

@Module({
  imports: [HealthModule, SubscriptionsModule],
})
export class AppModule {}
