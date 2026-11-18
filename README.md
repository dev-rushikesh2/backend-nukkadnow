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

---

## 6. Comprehensive Changelog & Architectural Log

### [Release: 2026-11-18] — Dynamic Database-Backed RBAC, Micro-Market Geographic Assignment & Root Admin Protection

#### 1. Prisma Database Schema (`apps/identity-service/prisma/schema.prisma`)
Added complete relational entities for dynamic role management and geographic scoping:
- `AdminUser`: Platform operator identity model with `isRootProtected` flag, phone, status, and audit relationships.
- `AdminRole`: Dynamic role definitions containing `code`, `title`, `hierarchyLevel` (1=Root, 2=Super, 3=City, 4=Staff, 5=Custom), `isSystem`, `requiresMfa`, and `description`.
- `AdminPermission`: Granular capability catalog partitioned by module domain.
- `AdminRoleAssignment`: User-to-role assignment junction table.
- `AdminRolePermission`: Role-to-permission mapping table.
- `AdminGeoAssignment`: Geographic micro-market assignment (`state`, `district`, `cityId`, `cityName`, `localities`) for City Managers and City Staff.
- `AdminAuditLog`: Immutable tamper-evident operator activity audit trail.

#### 2. Administrative BFF Gateway Endpoints (`apps/api-gateway/src/bff/admin/admin.controller.ts`)
- `GET /api/v1/admin/platform/roles`: List dynamic database roles with user counts and search filter.
- `POST /api/v1/admin/platform/roles`: Dynamically creates custom roles in the database with assigned capabilities and hierarchy tier. Logs `DYNAMIC_ROLE_CREATED` audit event.
- `PATCH /api/v1/admin/platform/roles/:id`: Updates role description, title, MFA requirement, or permissions list.
- `DELETE /api/v1/admin/platform/roles/:id`: Deletes custom roles. Core system roles (`ROOT_ADMIN`, `SUPER_ADMIN`, etc.) are protected from deletion.
- `GET /api/v1/admin/platform/permissions`: Returns all granular capabilities grouped by module (`DASHBOARD`, `ADMINS`, `MERCHANTS`, `VERIFICATION`, `CUSTOMERS`, `ORDERS`, `REFUNDS`, `GEOGRAPHY`, `FINANCE`, `CONFIG`, `AUDIT`).
- `GET /api/v1/admin/platform/cities`: Returns available cities (`Nagpur`, `Pune`) and micro-market locality options.
- `GET /api/v1/admin/platform/users`: Lists admin operators. When invoked by a `CITY_OPERATIONS_MANAGER`, filters strictly to staff within their assigned city (`cityId`).
- `POST /api/v1/admin/auth/login`: Real administrative authentication verifying individual email/username and password. Validates account status, rejects suspended accounts (403), validates passwords (401), and emits a signed JWT with embedded `roleCode`, `geoAssignment`, and `isRootProtected` flag.
- `POST /api/v1/admin/auth/mfa/verify`: Validates 6-digit TOTP MFA security token and finalizes authenticated operator session.
- `POST /api/v1/admin/platform/users`: Provisions new operators with dynamic role, initial password, and geographic coverage. Enforces hierarchical delegation:
  - Super Admin can provision City Managers and Staff; cannot provision Root Admin or Super Admin.
  - City Managers can only provision staff within their assigned municipal territory (`geoAssignment.cityName`).
  - Attempting to provision `ROOT_ADMIN` raises `ForbiddenException (403)`.
- `PATCH /api/v1/admin/platform/users/:id/status`: Suspends or activates operator accounts. Root Admin is protected and cannot be suspended.
- `PATCH /api/v1/admin/platform/users/:id/role`: Reassigns dynamic role. Users cannot be promoted to `ROOT_ADMIN`.
- `PATCH /api/v1/admin/platform/users/:id/geo`: Updates micro-market geographic assignment.
- `GET /api/v1/admin/auth/me`: Returns the verified active operator identity and permissions.

#### 3. Merchant Catalog Fallback & Tenant Scoping (`apps/api-gateway/src/bff/merchant/merchant.controller.ts`)
- Enhanced `GET /api/v1/merchant/catalog/products` endpoint to resolve active tenant outlet profile (`outlet-sabji-001`, `outlet-kirana-002`, `outlet-garguti-003`, `outlet-sweets-004`) when `outletId` is omitted or set to default, eliminating empty catalog response anomalies in walk-in POS billing.

#### 4. 11-Microservice Prisma Schema Security Hardening
Hardened all 11 microservice schemas with municipal geographic partitioning, DPDP Act 2023 compliance, and tamper-evident audit trails:
- `merchant-service`: Added `cityCode`, `districtCode`, `stateCode`, `isSuspended` and composite indexes (`[cityCode, verificationStatus]`).
- `order-service`: Added `cityCode`, `districtCode`, `stateCode` and composite indexes (`[cityCode, status]`, `[tenantId, cityCode]`).
- `payment-service`: Added `cityCode` to `PaymentIntent`, `Payment`, and `Refund` with `[cityCode, status]` index.
- `review-support-service`: Added `cityCode` to `Review` and `SupportTicket` with `[cityCode, status]` index.
- `analytics-service`: Added `cityCode` and composite unique key `[factDate, cityCode]` on `PlatformReportingFact`.
- `identity-service`: Added `tokenVersion` (instant JWT revocation), `failedLoginAttempts`, `lockedUntil`, `PiiAccessAuditLog`, and HMAC SHA-256 cryptographic chaining (`previousHash` & `recordHash`) on `AdminAuditLog`.
- `catalog-service`: Added `tenantId` and composite indexes (`[tenantId, outletId]`) on inventory movements and reservations.
- `discovery-service`: Added `cityCode` and `[cityCode, isCurrentlyOpen]` index on `OutletSearchDocument`.
- `fulfillment-service`: Added optimistic concurrency `version` lock to `CapacitySlot` and `cityCode` to `DeliveryTask`.
- `subscription-service`: Added `cityCode` to `MerchantSubscription` and `Invoice`.
- `notification-service`: Added `cityCode` to `NotificationJob`.
- **Validation:** All 11 schemas validated via `pnpm exec prisma validate` $\rightarrow$ **Exit Code 0 (Valid 🚀)**.

#### 5. Gateway Multi-City Boundary Enforcement (`apps/api-gateway/src/bff/admin/admin.controller.ts`)
- Implemented `resolveOperatorScope` resolving operator role and assigned city from JWT and request headers.
- Multi-city isolation strictly enforced across `overview`, `merchants`, `merchant-verification`, `orders`, `refunds`, and `localities`.
- IDOR Protection: Cross-city access attempts (e.g. Akola manager requesting Amravati merchant or order) throw `ForbiddenException (403)`.
- Expanded live seed network to 4 major cities:
  - **Nagpur (`IN-MH-NGP`):** Patil Fresh Sabji, Mahalaxmi Sweets
  - **Akola (`IN-MH-AKL`):** Sharma Kirana, Garguti Homemade Chivda
  - **Amravati (`IN-MH-AMR`):** Rajkamal Spices & Dry Fruits
  - **Pune (`IN-MH-PUN`):** Chitale Dairy & Traditional Sweets
- **Build Verification:** `pnpm --filter @nukkadnow/api-gateway build` $\rightarrow$ **Exit Code 0 (`nest build` successful)**.

