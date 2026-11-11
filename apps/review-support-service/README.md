# review-support-service

Customer Ratings, Reviews, Disputes & Helpdesk Tickets

## Port
$sPort

## Architecture Pattern
Standard Clean Architecture (DDD):
- src/modules/support/domain/: Aggregates, Value Objects, Domain Events, Ports (Zero external dependencies)
- src/modules/support/application/: Commands, Queries, Handlers, DTOs
- src/modules/support/infrastructure/: Prisma Repositories, RabbitMQ Outbox/Inbox
- src/modules/support/presentation/: HTTP Controllers, Request/Response DTOs
