import { Module } from "@nestjs/common";
import { DiscoveryController } from "./presentation/http/controllers/discovery.controller";
import { DiscoveryService } from "./application/services/discovery.service";
import { DiscoveryRepositoryPort } from "./domain/repositories/discovery.repository.port";
import { PrismaDiscoveryRepository } from "./infrastructure/persistence/repositories/prisma-discovery.repository";
import { PrismaService } from "./infrastructure/persistence/prisma/prisma.service";

@Module({
  controllers: [DiscoveryController],
  providers: [
    PrismaService,
    DiscoveryService,
    {
      provide: DiscoveryRepositoryPort,
      useClass: PrismaDiscoveryRepository,
    },
  ],
  exports: [DiscoveryService, PrismaService],
})
export class DiscoveryModule {}
