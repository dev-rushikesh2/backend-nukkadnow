# NukkadNow — Backend Microservices Monorepo

Welcome to the backend engineering workspace for **NukkadNow** — locality-first Indian commerce marketplace and merchant operating SaaS.

This repository implements a production-grade, domain-driven microservices architecture built with **NestJS**, **TypeScript**, **pnpm workspaces**, **Prisma ORM**, and **PostgreSQL (with PostGIS)**, orchestrated through an API Gateway with dedicated BFF (Backend-For-Frontend) surfaces.

---

## 1. Architectural Principles

1. **Domain-Driven Design (DDD) & Clean Architecture:**
   - Every service is partitioned into `domain`, `application`, `infrastructure`, and `presentation` layers.
   - Core domain business logic contains zero external dependencies (no NestJS, ORM, or cloud SDK leaks).
2. **Strict Tenant & Data Isolation:**
   - Database-per-service pattern (or dedicated schema-per-service with independent credentials).
   - Zero cross-service SQL joins or shared tables.
   - All interactions across domains occur via typed versioned APIs (REST/OpenAPI) or durable asynchronous events.
3. **Financial & Operational Correctness:**
   - Integer minor units (`amount_paise`) for all monetary amounts — no floating-point rounding hazards.
   - Transactional Outbox pattern for publishing domain events.
   - Consumer idempotency through an Inbox pattern deduplicating incoming events by `eventId`.
   - Atomic reservation with TTL for inventory stock and pickup slot capacity.
4. **BFF & Edge Composition:**
   - API Gateway provides tailored surfaces for Customer PWA, Merchant Portal, and Administrative tools.
   - Gateway handles JWT verification, rate limiting, request tracing, and WebSocket relaying.

---

## 2. Monorepo Organization

```text
nukkadnow-backend/
├── .github/                       # CI/CD workflows, CODEOWNERS, Dependabot
├── apps/                          # 12 Independent deployable microservices
│   ├── api-gateway/               # Ingress, BFF, WebSocket relay, rate-limiting
│   ├── identity-service/          # Authentication, OTP, RBAC, tenant & outlet memberships
│   ├── merchant-service/          # Merchant onboarding, outlets, operating hours, service areas
│   ├── catalog-service/           # Products, variants, inventory, batches, reservations
│   ├── discovery-service/         # Geospatial search, read projections (PostGIS)
│   ├── order-service/             # Carts, checkout saga, order lifecycle, idempotency
│   ├── fulfillment-service/       # Capacity slots, queue engine, pickup tokens, delivery
│   ├── payment-service/           # PSP integration, webhooks, reconciliation, refunds
│   ├── subscription-service/      # SaaS pricing plans, merchant subscriptions, invoicing
│   ├── notification-service/      # SMS/WhatsApp/Push notification dispatcher
│   ├── review-support-service/    # Ratings, reviews, moderation, support tickets
│   └── analytics-service/         # Operational metrics, read models, daily aggregates
├── packages/                      # Shared platform libraries (Zero domain coupling)
│   ├── contracts/                 # OpenAPI specs, AsyncAPI specs, versioned event schemas
│   ├── platform-kernel/           # Result monad, domain errors, UUIDv7, Clock, Money (paise)
│   ├── observability/             # Structured JSON logging, OpenTelemetry tracing, RED metrics
│   ├── security/                  # JWT validation, service-to-service auth, tenant context
│   ├── messaging/                 # RabbitMQ client, Transactional Outbox & Inbox patterns
│   ├── config/                    # Zod environment validation, typed configuration
│   ├── testing/                   # Testcontainers harnesses, test builders, fixtures
│   └── eslint-config/             # Architecture boundary enforcement rules
├── infrastructure/                # Deployment, containers, orchestration & scripts
│   ├── docker/                    # Compose files (PostgreSQL 16, Redis 7.2, RabbitMQ 3.13)
│   ├── kubernetes/                # Base & overlay manifests (Staging, Production)
│   ├── terraform/                 # Infrastructure as Code modules
│   ├── monitoring/                # Prometheus configuration, Grafana dashboards, Alert rules
│   └── scripts/                   # Local bootstrapping, database migration, seeding
├── tests/                         # Cross-service end-to-end and contract tests
│   ├── contract/                  # API contract verification
│   ├── e2e/                       # Full customer-to-merchant order fulfillment flows
│   ├── performance/               # k6 peak checkout load simulations
│   ├── resilience/                # Chaos testing & broker outage recovery
│   └── security/                  # Tenant isolation & IDOR boundary tests
└── docs/                          # Architecture blueprints, ADRs, runbooks
    ├── adr/                       # 12 foundational Architecture Decision Records
    ├── architecture/              # C4 context, container & data ownership maps
    └── runbooks/                  # Emergency operational runbooks
```

---

## 3. Quick Start (Local Development)

### Prerequisites
- **Node.js**: `>= 20.18.0 LTS`
- **pnpm**: `>= 9.0.0`
- **Docker & Docker Compose**: Local container runtime

### 1. Bootstrap Local Infrastructure
Start PostgreSQL (9 databases with PostGIS), Redis, and RabbitMQ:
```bash
pnpm docker:up
```

### 2. Configure Environment
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

### 3. Install Dependencies & Build Packages
```bash
pnpm install
pnpm build
```

### 4. Run Database Migrations
```bash
pnpm prisma:generate
pnpm prisma:migrate
```

### 5. Launch All Services in Development Mode
```bash
pnpm dev
```

---

## 4. Port Reference Matrix

| Service | Local Port | Database Schema |
|---|---|---|
| `api-gateway` | `4000` | N/A (State-free proxy) |
| `identity-service` | `4001` | `identity_db` |
| `merchant-service` | `4002` | `merchant_db` |
| `catalog-service` | `4003` | `catalog_db` |
| `discovery-service` | `4004` | `discovery_db` |
| `order-service` | `4005` | `order_db` |
| `fulfillment-service`| `4006` | `fulfillment_db` |
| `payment-service` | `4007` | `payment_db` |
| `subscription-service`| `4008`| `subscription_db` |
| `notification-service`| `4009`| Redis / Local Queues |
| `review-support-service`|`4010`| `support_db` |
| `analytics-service` | `4011` | `analytics_db` |
| RabbitMQ Management| `15672`| Default user/pass: `nukkadnow` / `rabbitmq_local_pass` |
| PostgreSQL Cluster | `5432` | Multiple isolated DBs |
| Redis Cache | `6379` | Ephemeral locks & tokens |

---

## 5. Architectural Quality Attributes & Governance

- **Strict Dependency Boundaries:** ESLint boundary rules prevent any app from importing from another app.
- **Traceability:** Every incoming request receives a W3C `traceparent` header propagated across all downstream sync and async hops.
- **Auditing:** Privilege escalation, financial transactions, and catalog alterations write immutable audit records.
- **Safe Migrations:** Expand/Contract pattern only. No destructive DDL executed on live databases without transition grace periods.
