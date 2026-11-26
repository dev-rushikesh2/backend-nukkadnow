import { Module } from "@nestjs/common";
import { OrdersController } from "./presentation/http/controllers/orders.controller";
import { OrderService } from "./application/services/order.service";
import { OrderOutboxRelayService } from "./application/services/order-outbox-relay.service";
import { OrderRepositoryPort, CartRepositoryPort } from "./domain/repositories/order.repository.port";
import { PrismaOrderRepository } from "./infrastructure/persistence/repositories/prisma-order.repository";
import { PrismaCartRepository } from "./infrastructure/persistence/repositories/prisma-cart.repository";
import { PrismaService } from "./infrastructure/persistence/prisma/prisma.service";
import { CatalogClient } from "./infrastructure/external-clients/catalog.client";

@Module({
  controllers: [OrdersController],
  providers: [
    PrismaService,
    OrderService,
    OrderOutboxRelayService,
    CatalogClient,
    {
      provide: OrderRepositoryPort,
      useClass: PrismaOrderRepository,
    },
    {
      provide: CartRepositoryPort,
      useClass: PrismaCartRepository,
    },
  ],
  exports: [OrderService, OrderOutboxRelayService, PrismaService],
})
export class OrdersModule {}
