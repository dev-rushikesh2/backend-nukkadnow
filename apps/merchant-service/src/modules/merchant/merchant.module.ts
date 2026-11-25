import { Module } from "@nestjs/common";
import { MerchantController } from "./presentation/http/controllers/merchant.controller";
import { PartnerRegistrationController } from "./presentation/http/controllers/partner-registration.controller";
import { AdminMerchantController } from "./presentation/http/controllers/admin-merchant.controller";
import { MerchantService } from "./application/services/merchant.service";
import { PartnerRegistrationService } from "./application/services/partner-registration.service";
import { MerchantRepositoryPort, OutletRepositoryPort } from "./domain/repositories/merchant.repository.port";
import { PartnerRegistrationRepositoryPort } from "./domain/repositories/partner-registration.repository.port";
import { PrismaMerchantRepository } from "./infrastructure/persistence/repositories/prisma-merchant.repository";
import { PrismaOutletRepository } from "./infrastructure/persistence/repositories/prisma-outlet.repository";
import { PrismaPartnerRegistrationRepository } from "./infrastructure/persistence/repositories/prisma-partner-registration.repository";
import { PrismaService } from "./infrastructure/persistence/prisma/prisma.service";

@Module({
  controllers: [
    AdminMerchantController,
    PartnerRegistrationController,
    MerchantController,
  ],
  providers: [
    PrismaService,
    MerchantService,
    PartnerRegistrationService,
    {
      provide: MerchantRepositoryPort,
      useClass: PrismaMerchantRepository,
    },
    {
      provide: OutletRepositoryPort,
      useClass: PrismaOutletRepository,
    },
    {
      provide: PartnerRegistrationRepositoryPort,
      useClass: PrismaPartnerRegistrationRepository,
    },
  ],
  exports: [MerchantService, PartnerRegistrationService, PrismaService],
})
export class MerchantModule {}
