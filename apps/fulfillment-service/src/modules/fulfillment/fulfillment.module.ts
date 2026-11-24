import { Module } from "@nestjs/common";
import { FulfillmentController } from "./presentation/http/controllers/fulfillment.controller";
import { FulfillmentService } from "./application/services/fulfillment.service";
import { FulfillmentRepositoryPort } from "./domain/repositories/fulfillment.repository.port";
import { PrismaFulfillmentRepository } from "./infrastructure/persistence/repositories/prisma-fulfillment.repository";
import { PrismaService } from "./infrastructure/persistence/prisma/prisma.service";

@Module({
  controllers: [FulfillmentController],
  providers: [
    PrismaService,
    FulfillmentService,
    {
      provide: FulfillmentRepositoryPort,
      useClass: PrismaFulfillmentRepository,
    },
  ],
  exports: [FulfillmentService, PrismaService],
})
export class FulfillmentModule {}
