import { Module } from "@nestjs/common";
import { SubscriptionsController } from "./presentation/http/controllers/subscriptions.controller";
import { SubscriptionService } from "./application/services/subscription.service";
import { SubscriptionRepositoryPort } from "./domain/entities/subscription-plan.entity";
import { InMemorySubscriptionRepository } from "./infrastructure/persistence/repositories/in-memory-subscription.repository";

@Module({
  controllers: [SubscriptionsController],
  providers: [
    SubscriptionService,
    {
      provide: SubscriptionRepositoryPort,
      useClass: InMemorySubscriptionRepository,
    },
  ],
  exports: [SubscriptionService],
})
export class SubscriptionsModule {}
