# catalog-service

Products, Variants, Atomic Inventory Stock & Reservations

## Port
$sPort

## Architecture Pattern
Standard Clean Architecture (DDD):
- src/modules/catalog/domain/: Aggregates, Value Objects, Domain Events, Ports (Zero external dependencies)
- src/modules/catalog/application/: Commands, Queries, Handlers, DTOs
- src/modules/catalog/infrastructure/: Prisma Repositories, RabbitMQ Outbox/Inbox
- src/modules/catalog/presentation/: HTTP Controllers, Request/Response DTOs
