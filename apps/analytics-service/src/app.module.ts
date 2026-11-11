import { Module } from "@nestjs/common";
import { HealthModule } from "./health/health.module";
import { AnalyticsModule } from "./modules/analytics/analytics.module";

@Module({
  imports: [HealthModule, AnalyticsModule],
})
export class AppModule {}
