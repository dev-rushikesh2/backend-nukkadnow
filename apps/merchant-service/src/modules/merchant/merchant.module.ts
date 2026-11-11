import { Module } from "@nestjs/common";
import { MerchantController } from "./presentation/http/controllers/merchant.controller";
import { MerchantService } from "./application/services/merchant.service";
import { MerchantRepositoryPort, OutletRepositoryPort } from "./domain/repositories/merchant.repository.port";
import { InMemoryMerchantRepository, InMemoryOutletRepository } from "./infrastructure/persistence/repositories/in-memory-merchant.repository";

@Module({
  controllers: [MerchantController],
  providers: [
    MerchantService,
    {
      provide: MerchantRepositoryPort,
      useClass: InMemoryMerchantRepository,
    },
    {
      provide: OutletRepositoryPort,
      useClass: InMemoryOutletRepository,
    },
  ],
  exports: [MerchantService],
})
export class MerchantModule {}
