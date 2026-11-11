import { Module } from "@nestjs/common";
import { DiscoveryController } from "./presentation/http/controllers/discovery.controller";
import { DiscoveryService } from "./application/services/discovery.service";
import { DiscoveryRepositoryPort } from "./domain/repositories/discovery.repository.port";
import { InMemoryDiscoveryRepository } from "./infrastructure/persistence/repositories/in-memory-discovery.repository";

@Module({
  controllers: [DiscoveryController],
  providers: [
    DiscoveryService,
    {
      provide: DiscoveryRepositoryPort,
      useClass: InMemoryDiscoveryRepository,
    },
  ],
  exports: [DiscoveryService],
})
export class DiscoveryModule {}
