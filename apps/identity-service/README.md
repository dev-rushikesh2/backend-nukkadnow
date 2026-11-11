# identity-service

Authentication, OTP, RBAC, Sessions & Tenant Memberships

## Port
$sPort

## Architecture Pattern
Standard Clean Architecture (DDD):
- src/modules/identity/domain/: Aggregates, Value Objects, Domain Events, Ports (Zero external dependencies)
- src/modules/identity/application/: Commands, Queries, Handlers, DTOs
- src/modules/identity/infrastructure/: Prisma Repositories, RabbitMQ Outbox/Inbox
- src/modules/identity/presentation/: HTTP Controllers, Request/Response DTOs
