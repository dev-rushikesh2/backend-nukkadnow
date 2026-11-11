import { Module } from "@nestjs/common";
import { CatalogController } from "./presentation/http/controllers/catalog.controller";
import { CatalogService } from "./application/services/catalog.service";
import { ProductRepositoryPort, StockRepositoryPort } from "./domain/repositories/catalog.repository.port";
import { InMemoryProductRepository, InMemoryStockRepository } from "./infrastructure/persistence/repositories/in-memory-catalog.repository";

@Module({
  controllers: [CatalogController],
  providers: [
    CatalogService,
    {
      provide: ProductRepositoryPort,
      useClass: InMemoryProductRepository,
    },
    {
      provide: StockRepositoryPort,
      useClass: InMemoryStockRepository,
    },
  ],
  exports: [CatalogService],
})
export class CatalogModule {}
