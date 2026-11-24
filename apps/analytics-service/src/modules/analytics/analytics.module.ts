import { Module } from "@nestjs/common";
import { AnalyticsController } from "./presentation/http/controllers/analytics.controller";
import { AnalyticsService } from "./application/services/analytics.service";
import { AnalyticsRepositoryPort } from "./domain/entities/daily-metric.entity";
import { PrismaAnalyticsRepository } from "./infrastructure/persistence/repositories/prisma-analytics.repository";
import { PrismaService } from "./infrastructure/persistence/prisma/prisma.service";

@Module({
  controllers: [AnalyticsController],
  providers: [
    PrismaService,
    AnalyticsService,
    {
      provide: AnalyticsRepositoryPort,
      useClass: PrismaAnalyticsRepository,
    },
  ],
  exports: [AnalyticsService, PrismaService],
})
export class AnalyticsModule {}
