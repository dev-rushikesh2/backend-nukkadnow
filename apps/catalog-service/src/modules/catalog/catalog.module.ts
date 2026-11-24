import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { CatalogController } from "./presentation/http/controllers/catalog.controller";
import { CatalogService } from "./application/services/catalog.service";
import {
  ProductRepositoryPort,
  StockRepositoryPort,
  PriceCapRepositoryPort,
} from "./domain/repositories/catalog.repository.port";
import { PrismaProductRepository } from "./infrastructure/persistence/repositories/prisma-product.repository";
import { PrismaStockRepository } from "./infrastructure/persistence/repositories/prisma-stock.repository";
import { PrismaPriceCapRepository } from "./infrastructure/persistence/repositories/prisma-price-cap.repository";
import { PrismaService } from "./infrastructure/persistence/prisma/prisma.service";
import { StockReservationExpiryScheduler } from "./infrastructure/scheduler/stock-reservation-expiry.scheduler";

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [CatalogController],
  providers: [
    PrismaService,
    CatalogService,
    StockReservationExpiryScheduler,
    {
      provide: ProductRepositoryPort,
      useClass: PrismaProductRepository,
    },
    {
      provide: StockRepositoryPort,
      useClass: PrismaStockRepository,
    },
    {
      provide: PriceCapRepositoryPort,
      useClass: PrismaPriceCapRepository,
    },
  ],
  exports: [CatalogService, PrismaService],
})
export class CatalogModule {}
