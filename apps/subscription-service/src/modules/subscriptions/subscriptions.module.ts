import { Module } from "@nestjs/common";
import { SubscriptionsController } from "./presentation/http/controllers/subscriptions.controller";
import { SubscriptionService } from "./application/services/subscription.service";
import { SubscriptionRepositoryPort } from "./domain/entities/subscription-plan.entity";
import { PrismaSubscriptionRepository } from "./infrastructure/persistence/repositories/prisma-subscription.repository";
import { PrismaService } from "./infrastructure/persistence/prisma/prisma.service";

@Module({
  controllers: [SubscriptionsController],
  providers: [
    PrismaService,
    SubscriptionService,
    {
      provide: SubscriptionRepositoryPort,
      useClass: PrismaSubscriptionRepository,
    },
  ],
  exports: [SubscriptionService, PrismaService],
})
export class SubscriptionsModule {}
