import { Module } from "@nestjs/common";
import { MerchantController } from "./presentation/http/controllers/merchant.controller";
import { PartnerRegistrationController } from "./presentation/http/controllers/partner-registration.controller";
import { MerchantService } from "./application/services/merchant.service";
import { PartnerRegistrationService } from "./application/services/partner-registration.service";
import { MerchantRepositoryPort, OutletRepositoryPort } from "./domain/repositories/merchant.repository.port";
import { PartnerRegistrationRepositoryPort } from "./domain/repositories/partner-registration.repository.port";
import { InMemoryMerchantRepository, InMemoryOutletRepository } from "./infrastructure/persistence/repositories/in-memory-merchant.repository";
import { InMemoryPartnerRegistrationRepository } from "./infrastructure/persistence/repositories/in-memory-partner-registration.repository";
import { PrismaPartnerRegistrationRepository } from "./infrastructure/persistence/repositories/prisma-partner-registration.repository";
import { PrismaService } from "./infrastructure/persistence/prisma/prisma.service";

@Module({
  controllers: [
    MerchantController,
    PartnerRegistrationController,
  ],
  providers: [
    MerchantService,
    PartnerRegistrationService,
    PrismaService,
    InMemoryPartnerRegistrationRepository,
    {
      provide: MerchantRepositoryPort,
      useClass: InMemoryMerchantRepository,
    },
    {
      provide: OutletRepositoryPort,
      useClass: InMemoryOutletRepository,
    },
    {
      provide: PartnerRegistrationRepositoryPort,
      useClass: PrismaPartnerRegistrationRepository,
    },
  ],
  exports: [MerchantService, PartnerRegistrationService, PrismaService],
})
export class MerchantModule {}
