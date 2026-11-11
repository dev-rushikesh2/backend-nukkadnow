# ADR 0002: NestJS Domain Microservices with Clean Architecture

## Status
Accepted

## Context
Each microservice must enforce strict domain boundaries without coupling core business logic to HTTP frameworks or database drivers.

## Decision
Adopt NestJS with Clean Architecture (DDD):
- `domain`: Pure TypeScript entities, aggregates, value objects, domain errors, and repository interfaces. No NestJS or ORM imports.
- `application`: Commands, queries, handlers, and port interfaces.
- `infrastructure`: Prisma implementations, RabbitMQ publishers/consumers, external clients.
- `presentation`: NestJS controllers, guards, DTOs.
