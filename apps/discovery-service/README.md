# discovery-service

Geospatial Search, Locality PostGIS Projections & Availability

## Port
$sPort

## Architecture Pattern
Standard Clean Architecture (DDD):
- src/modules/discovery/domain/: Aggregates, Value Objects, Domain Events, Ports (Zero external dependencies)
- src/modules/discovery/application/: Commands, Queries, Handlers, DTOs
- src/modules/discovery/infrastructure/: Prisma Repositories, RabbitMQ Outbox/Inbox
- src/modules/discovery/presentation/: HTTP Controllers, Request/Response DTOs
