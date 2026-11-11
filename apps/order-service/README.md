# order-service

Carts, Pricing Snapshots, Checkout Saga, Orders & Outbox

## Port
$sPort

## Architecture Pattern
Standard Clean Architecture (DDD):
- src/modules/orders/domain/: Aggregates, Value Objects, Domain Events, Ports (Zero external dependencies)
- src/modules/orders/application/: Commands, Queries, Handlers, DTOs
- src/modules/orders/infrastructure/: Prisma Repositories, RabbitMQ Outbox/Inbox
- src/modules/orders/presentation/: HTTP Controllers, Request/Response DTOs
