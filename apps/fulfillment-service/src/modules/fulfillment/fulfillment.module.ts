import { Module } from "@nestjs/common";
import { FulfillmentController } from "./presentation/http/controllers/fulfillment.controller";
import { FulfillmentService } from "./application/services/fulfillment.service";
import { FulfillmentRepositoryPort } from "./domain/repositories/fulfillment.repository.port";
import { InMemoryFulfillmentRepository } from "./infrastructure/persistence/repositories/in-memory-fulfillment.repository";

@Module({
  controllers: [FulfillmentController],
  providers: [
    FulfillmentService,
    {
      provide: FulfillmentRepositoryPort,
      useClass: InMemoryFulfillmentRepository,
    },
  ],
  exports: [FulfillmentService],
})
export class FulfillmentModule {}
