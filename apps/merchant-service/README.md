# merchant-service

Merchant Profiles, Outlets, Hours, Service Areas & Verification

## Port
$sPort

## Architecture Pattern
Standard Clean Architecture (DDD):
- src/modules/merchant/domain/: Aggregates, Value Objects, Domain Events, Ports (Zero external dependencies)
- src/modules/merchant/application/: Commands, Queries, Handlers, DTOs
- src/modules/merchant/infrastructure/: Prisma Repositories, RabbitMQ Outbox/Inbox
- src/modules/merchant/presentation/: HTTP Controllers, Request/Response DTOs
