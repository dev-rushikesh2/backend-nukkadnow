# subscription-service

Merchant SaaS Subscription Plans, Entitlements & Invoicing

## Port
$sPort

## Architecture Pattern
Standard Clean Architecture (DDD):
- src/modules/subscriptions/domain/: Aggregates, Value Objects, Domain Events, Ports (Zero external dependencies)
- src/modules/subscriptions/application/: Commands, Queries, Handlers, DTOs
- src/modules/subscriptions/infrastructure/: Prisma Repositories, RabbitMQ Outbox/Inbox
- src/modules/subscriptions/presentation/: HTTP Controllers, Request/Response DTOs
