# payment-service

PSP Intents, Signed Webhooks, Refunds & Reconciliation Ledger

## Port
$sPort

## Architecture Pattern
Standard Clean Architecture (DDD):
- src/modules/payments/domain/: Aggregates, Value Objects, Domain Events, Ports (Zero external dependencies)
- src/modules/payments/application/: Commands, Queries, Handlers, DTOs
- src/modules/payments/infrastructure/: Prisma Repositories, RabbitMQ Outbox/Inbox
- src/modules/payments/presentation/: HTTP Controllers, Request/Response DTOs
