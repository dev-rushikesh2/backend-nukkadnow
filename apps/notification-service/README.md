# notification-service

SMS, WhatsApp, Email, WebPush Templates & Dispatch Pipeline

## Port
$sPort

## Architecture Pattern
Standard Clean Architecture (DDD):
- src/modules/notifications/domain/: Aggregates, Value Objects, Domain Events, Ports (Zero external dependencies)
- src/modules/notifications/application/: Commands, Queries, Handlers, DTOs
- src/modules/notifications/infrastructure/: Prisma Repositories, RabbitMQ Outbox/Inbox
- src/modules/notifications/presentation/: HTTP Controllers, Request/Response DTOs
