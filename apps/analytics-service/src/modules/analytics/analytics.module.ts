import { Module } from "@nestjs/common";
import { AnalyticsController } from "./presentation/http/controllers/analytics.controller";
import { AnalyticsService } from "./application/services/analytics.service";
import { AnalyticsRepositoryPort } from "./domain/entities/daily-metric.entity";
import { InMemoryAnalyticsRepository } from "./infrastructure/persistence/repositories/in-memory-analytics.repository";

@Module({
  controllers: [AnalyticsController],
  providers: [
    AnalyticsService,
    {
      provide: AnalyticsRepositoryPort,
      useClass: InMemoryAnalyticsRepository,
    },
  ],
  exports: [AnalyticsService],
})
export class AnalyticsModule {}
