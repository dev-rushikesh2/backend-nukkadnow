# fulfillment-service

Capacity Slots, Queue Engine, Pickup Tokens & Delivery

## Port
$sPort

## Architecture Pattern
Standard Clean Architecture (DDD):
- src/modules/fulfillment/domain/: Aggregates, Value Objects, Domain Events, Ports (Zero external dependencies)
- src/modules/fulfillment/application/: Commands, Queries, Handlers, DTOs
- src/modules/fulfillment/infrastructure/: Prisma Repositories, RabbitMQ Outbox/Inbox
- src/modules/fulfillment/presentation/: HTTP Controllers, Request/Response DTOs
