import { Module } from "@nestjs/common";
import { OrdersController } from "./presentation/http/controllers/orders.controller";
import { OrderService } from "./application/services/order.service";
import { OrderRepositoryPort, CartRepositoryPort } from "./domain/repositories/order.repository.port";
import { InMemoryOrderRepository, InMemoryCartRepository } from "./infrastructure/persistence/repositories/in-memory-order.repository";

@Module({
  controllers: [OrdersController],
  providers: [
    OrderService,
    {
      provide: OrderRepositoryPort,
      useClass: InMemoryOrderRepository,
    },
    {
      provide: CartRepositoryPort,
      useClass: InMemoryCartRepository,
    },
  ],
  exports: [OrderService],
})
export class OrdersModule {}
