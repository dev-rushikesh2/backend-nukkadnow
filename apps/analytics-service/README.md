# analytics-service

Aggregated Dashboards, Daily Revenue Metrics & Reporting Facts

## Port
$sPort

## Architecture Pattern
Standard Clean Architecture (DDD):
- src/modules/analytics/domain/: Aggregates, Value Objects, Domain Events, Ports (Zero external dependencies)
- src/modules/analytics/application/: Commands, Queries, Handlers, DTOs
- src/modules/analytics/infrastructure/: Prisma Repositories, RabbitMQ Outbox/Inbox
- src/modules/analytics/presentation/: HTTP Controllers, Request/Response DTOs
