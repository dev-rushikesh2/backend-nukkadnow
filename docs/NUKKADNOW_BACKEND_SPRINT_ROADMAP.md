# NukkadNow Backend Microservices — Complete Sprint Roadmap

**Document ID:** NNK-BE-ROADMAP-001  
**Version:** 1.0  
**Status:** Proposed baseline for engineering execution  
**Product:** NukkadNow — Local Commerce Marketplace + Merchant SaaS  
**Market:** India; locality-first pilot in Nagpur  
**Backend stack:** NestJS, TypeScript, PostgreSQL, Redis, RabbitMQ, Docker  
**Repository:** `nukkadnow-backend`  
**Planning cadence:** 2-week sprints (Sprint 0 is 1 week)  
**Audience:** Backend engineers, frontend engineers, QA, DevOps, product owner and technical leadership

---

## 1. Executive summary

This document defines the backend implementation plan for NukkadNow. It converts the product and architecture requirements into an executable sequence of backend sprints, with service boundaries, deliverables, dependencies, test requirements, release gates and acceptance criteria.

NukkadNow supports:
- Customers discovering nearby physical-product sellers.
- Permanent shops, home-based businesses, independent makers, producers, seasonal sellers and temporary/event vendors.
- Product catalogues, stock and availability.
- Single-seller cart and checkout for the MVP.
- Customer orders, merchant order operations and QR-originated orders.
- Merchant-configured pickup slots and capacity.
- Merchant-managed delivery where enabled.
- Merchant mobile app, merchant web portal and customer app.
- Super Admin operations, subscriptions and platform support.

### Delivery principle

Build the smallest reliable service landscape that respects domain ownership. Do not split every feature into a separately deployed service from day one. Start with a controlled set of independently deployable NestJS applications and extract further services only when scaling, team ownership or operational isolation justifies it.

The plan is organized into **16 delivery sprints plus Sprint 0**. A sprint is two weeks unless stated otherwise. This is a planning baseline, not a promise that all work fits the same calendar duration regardless of team size, integration delays or compliance decisions.

---

## 2. Product and architectural assumptions

The sprint plan assumes the following decisions. Any change should be captured in an Architecture Decision Record (ADR).

1. The frontend, backend and Super Admin remain separate Git repositories.
2. `nukkadnow-backend` is a NestJS TypeScript monorepo containing independently buildable/deployable backend applications and shared libraries.
3. The customer app and merchant app/web use the same backend API platform with role- and tenant-scoped authorization.
4. MVP checkout is single-seller. Multi-seller carts and split settlement are out of scope.
5. NukkadNow does not operate its own delivery fleet in the MVP.
6. Pickup capacity and slots are configured by merchants and reserved atomically by the backend.
7. Payment success is established by verified provider webhooks/reconciliation, not by frontend callbacks.
8. PostgreSQL is the transactional source of truth. Redis is used for cache, rate limits, short-lived coordination and job infrastructure where appropriate.
9. RabbitMQ is the initial asynchronous event broker. Do not introduce Kafka unless measured throughput or event-stream requirements justify it.
10. Every service owns its data. Other services must not read or write its tables directly.
11. All external APIs are versioned under `/api/v1`.
12. All timestamps are stored in UTC; business display and scheduling use the outlet's configured timezone.
13. Money is represented in integer minor units (e.g. paise) with an explicit currency code.
14. The platform begins in one locality but data models must support multiple localities, cities, outlets and tenants.
15. Home-based seller private residential addresses are protected and not exposed in public discovery by default.

---

## 3. Delivery model and sprint duration

| Sprint | Duration | Theme |
|---|---:|---|
| Sprint 0 | 1 week | Architecture validation and engineering foundation |
| Sprint 1 | 2 weeks | Platform foundation, API gateway and observability |
| Sprint 2 | 2 weeks | Identity, authentication and authorization |
| Sprint 3 | 2 weeks | Tenant, merchant, outlet and locality |
| Sprint 4 | 2 weeks | Catalogue and product media |
| Sprint 5 | 2 weeks | Inventory and availability |
| Sprint 6 | 2 weeks | Discovery, search and geo queries |
| Sprint 7 | 2 weeks | Cart, pricing and checkout quote |
| Sprint 8 | 2 weeks | Orders and order lifecycle |
| Sprint 9 | 2 weeks | Payments, refunds and reconciliation |
| Sprint 10 | 2 weeks | Capacity, pickup slots, queue and tokens |
| Sprint 11 | 2 weeks | QR ordering and merchant-managed delivery |
| Sprint 12 | 2 weeks | Notifications and background processing |
| Sprint 13 | 2 weeks | Subscriptions, billing and platform administration |
| Sprint 14 | 2 weeks | Analytics, audit, security and performance hardening |
| Sprint 15 | 2 weeks | Pilot readiness, UAT and production launch |

**Planning estimate:** 31 weeks including Sprint 0, assuming a stable team and timely external dependencies. Some streams can run in parallel after contracts and ownership are agreed, but critical path dependencies must be respected.

---

## 4. Backend service boundaries

### 4.1 Recommended initial deployables

Start with these domain-aligned deployables. The exact number of processes may be adjusted to the team's operational capacity, but domain ownership must remain explicit.

| Deployable | Primary responsibility | Owns |
|---|---|---|
| API Gateway / BFF | Public API entry, routing, request validation, rate limits, aggregation where justified | No core commerce data |
| Identity Service | OTP, sessions, users, credentials, authentication and token lifecycle | Users, identities, sessions, OTP challenge metadata |
| Merchant Service | Merchant tenants, memberships, outlets, profiles, hours, seller type, verification workflow | Merchants, memberships, outlets, hours, seller profile |
| Catalogue Service | Categories, products, variants, media metadata and publication | Categories, products, variants, media metadata |
| Inventory Service | Stock balances, adjustments, reservations and movements | Inventory balances, movements, reservations |
| Discovery Service | Nearby seller/product read models, locality search and ranking | Search/read-model projections; source data belongs to other services |
| Commerce Service | Cart, pricing quote orchestration, checkout, order creation and order lifecycle | Carts, checkout attempts, orders, order items, order events |
| Payment Service | PSP integration, payment intents, provider webhooks, refunds and reconciliation | Payment records, webhook inbox, refund records |
| Fulfillment Service | Capacity, pickup slots, queue snapshots, tokens, delivery status | Capacity settings, slot reservations, tokens, delivery records |
| Notification Service | Push/SMS/email/WhatsApp provider integration and delivery attempts | Notification templates, preferences, delivery attempts |
| Platform Service | Subscriptions, plans, invoices, platform configuration and selected admin workflows | Plans, subscriptions, invoices, platform settings |
| Reporting/Analytics (later) | Aggregated reporting and operational projections | Reporting read models |

**Practical launch option:** If the team is small, combine Catalogue + Inventory into one deployable initially, and keep their modules and data ownership logically separated. Likewise, Notification can initially run as a worker application. Do not create a distributed system whose operational burden exceeds the team's ability to run it.

### 4.2 Service extraction rule

A feature becomes a separate deployable only when at least one is true:
- It needs independent scaling or availability.
- It has a distinct security/compliance boundary.
- It has a clear independent team owner.
- It has a different release cadence.
- Its failure isolation materially protects core transactions.

A module is not automatically a microservice merely because it has a folder.

---

## 5. Backend repository structure

Recommended NestJS monorepo:

```text
nukkadnow-backend/
├── apps/
│   ├── api-gateway/
│   ├── identity-service/
│   ├── merchant-service/
│   ├── catalogue-service/
│   ├── inventory-service/
│   ├── discovery-service/
│   ├── commerce-service/
│   ├── payment-service/
│   ├── fulfillment-service/
│   ├── notification-worker/
│   └── platform-service/
│
├── libs/
│   ├── common/
│   │   ├── config/
│   │   ├── errors/
│   │   ├── logging/
│   │   ├── tracing/
│   │   ├── pagination/
│   │   ├── validation/
│   │   └── utilities/
│   ├── contracts/
│   │   ├── http/
│   │   ├── events/
│   │   └── schemas/
│   ├── security/
│   │   ├── authentication/
│   │   ├── authorization/
│   │   ├── tenant-context/
│   │   └── secrets/
│   ├── infrastructure/
│   │   ├── database/
│   │   ├── message-broker/
│   │   ├── cache/
│   │   ├── object-storage/
│   │   └── job-queue/
│   └── testing/
│       ├── fixtures/
│       ├── factories/
│       └── test-containers/
│
├── database/
│   ├── seed/
│   └── reference-data/
├── contracts/
│   ├── openapi/
│   └── asyncapi/
├── infra/
│   ├── docker/
│   ├── compose/
│   ├── deployment/
│   ├── monitoring/
│   └── scripts/
├── docs/
│   ├── architecture/
│   ├── adr/
│   ├── api/
│   ├── events/
│   ├── runbooks/
│   └── sprint-plans/
├── test/
│   ├── integration/
│   ├── contract/
│   └── e2e/
├── tools/
├── .github/workflows/
├── nest-cli.json
├── package.json
├── tsconfig.base.json
├── eslint.config.mjs
├── prettier.config.mjs
├── Dockerfile
└── README.md
```

### 5.1 Standard service module structure

Use a consistent structure for each domain application:

```text
apps/commerce-service/src/
├── main.ts
├── app.module.ts
├── config/
├── common/
│   ├── decorators/
│   ├── guards/
│   ├── interceptors/
│   ├── filters/
│   └── pipes/
└── modules/
    └── orders/
        ├── application/
        │   ├── commands/
        │   ├── queries/
        │   ├── handlers/
        │   └── use-cases/
        ├── domain/
        │   ├── entities/
        │   ├── value-objects/
        │   ├── events/
        │   ├── policies/
        │   └── repositories/
        ├── infrastructure/
        │   ├── persistence/
        │   ├── messaging/
        │   └── external-clients/
        ├── presentation/
        │   ├── http/
        │   └── dto/
        └── orders.module.ts
```

Keep domain rules independent from NestJS controllers and persistence details. Do not over-engineer every simple CRUD module with unnecessary abstraction; use this structure where domain complexity justifies it.

---

## 6. Data ownership and persistence strategy

### 6.1 Ownership matrix

| Data | Owning service |
|---|---|
| Users, identities, sessions | Identity |
| Merchant, memberships, outlets, hours | Merchant |
| Product, variants, categories | Catalogue |
| Stock balances, adjustments, reservations | Inventory |
| Nearby search projections | Discovery |
| Carts, checkout, orders, order events | Commerce |
| Payment intents, provider events, refunds | Payment |
| Capacity, slots, pickup tokens, delivery | Fulfillment |
| Notification preferences and delivery logs | Notification |
| Plans, subscriptions, invoices | Platform |

### 6.2 Database rules

- Each service owns its schema and migrations.
- Prefer separate logical databases or isolated schemas with separate credentials and strict permissions. For stronger isolation, use separate databases as the system matures.
- No service may query another service's tables.
- Use migrations as reviewed, version-controlled artifacts.
- Use transactions within a service boundary.
- Cross-service workflows use orchestration, events and compensating actions—not distributed database transactions.
- Use UUID/ULID identifiers; do not encode private business data into IDs.
- Use `created_at`, `updated_at`, and where required `deleted_at`; use explicit status transitions rather than relying on soft-delete alone.
- Add indexes based on actual query patterns and verify with query plans.
- Use PostGIS for geo queries where required.
- Store timestamps in UTC; store outlet timezone separately.
- Store money as integer minor units and ISO currency code.
- Preserve immutable financial and audit records.

### 6.3 Important transaction patterns

**Inventory:** atomic stock reservation/decrement, conflict protection, release/compensation on cancellation or failed checkout.

**Capacity:** atomic slot reservation with capacity check in one database transaction or equivalent concurrency-safe operation.

**Payment:** provider idempotency keys, webhook signature verification, webhook inbox deduplication and reconciliation.

**Events:** transactional outbox for publishing domain events reliably; consumer inbox/deduplication for at-least-once delivery.

---

## 7. API and integration standards

### 7.1 External API
- Base path `/api/v1`.
- REST/JSON for public and merchant APIs.
- OpenAPI generated and versioned in the repository.
- Consistent pagination, filtering, sorting and error envelopes.
- Correlation/request ID on every request.
- Idempotency keys for checkout, payment and other non-repeatable mutations.
- Explicit API compatibility and deprecation policy.

### 7.2 Error response convention

Example shape:

```json
{
  "statusCode": 409,
  "code": "INVENTORY_CONFLICT",
  "message": "Requested quantity is no longer available.",
  "correlationId": "request-correlation-id",
  "details": {
    "productId": "product-id",
    "availableQuantity": 1
  }
}
```

Do not expose stack traces, SQL details, provider secrets or internal service topology to clients.

### 7.3 Internal communication
- Synchronous HTTP/gRPC only where a caller needs an immediate response.
- RabbitMQ events for asynchronous domain changes and background workflows.
- No direct cross-service database access.
- Set timeouts, bounded retries, circuit breakers where appropriate and dead-letter handling.
- Avoid synchronous chains across many services on customer checkout paths.

### 7.4 Event envelope

Every event should include:
- `eventId`
- `eventType`
- `eventVersion`
- `occurredAt`
- `producer`
- `aggregateId`
- `aggregateVersion`
- `tenantId` where applicable
- `correlationId`
- `causationId`
- `data`

Events are versioned contracts. Consumers must tolerate duplicate delivery and safe schema evolution.

---

# 8. Sprint-by-sprint execution plan

## Sprint 0 — Architecture validation and engineering foundation

**Duration:** 1 week  
**Goal:** Remove major architectural ambiguity before implementation.

### Backend tasks
- Confirm service boundaries and initial deployable count.
- Confirm PostgreSQL, Redis and RabbitMQ roles.
- Select ORM (Prisma or TypeORM) and standardize on one.
- Define environment strategy: local, development, staging, production.
- Define API versioning, error format, logging and correlation IDs.
- Define authentication strategy and tenant context model.
- Define outbox/inbox and idempotency standards.
- Create ADR template and initial ADRs.
- Confirm payment provider shortlist and integration constraints.
- Confirm map/geocoding provider shortlist.
- Confirm object storage and notification provider shortlist.
- Define data classification and retention assumptions.

### Deliverables
- Approved architecture decision records.
- Service ownership matrix.
- Initial ERD/domain model.
- API and event contract standards.
- Sprint backlog with estimates and owners.
- Threat model outline and environment matrix.

### Acceptance criteria
- Every domain has one accountable data owner.
- No unresolved decision blocks the foundation sprint.
- ORM, broker and deployment approach are selected.
- Critical external dependencies have owners and sandbox access plans.

---

## Sprint 1 — Platform foundation, gateway and observability

**Goal:** Establish a repeatable service development and deployment foundation.

### Tasks
1. Initialize NestJS monorepo and workspace configuration.
2. Create deployable application skeletons.
3. Add shared configuration validation.
4. Add structured JSON logging.
5. Add request/correlation ID propagation.
6. Add global exception filters and standard response handling.
7. Add health, readiness and liveness endpoints.
8. Add API Gateway routing and global request limits.
9. Configure CORS, security headers and request size limits.
10. Add Dockerfiles and local Docker Compose for PostgreSQL, Redis and RabbitMQ.
11. Add CI pipeline: lint, format, typecheck, unit test and build.
12. Add environment variable templates with safe placeholders.
13. Add OpenAPI generation and publishing workflow.
14. Add baseline metrics and tracing hooks.

### Deliverables
- Running local development environment.
- Gateway and service skeletons.
- CI checks on pull requests.
- Health/readiness checks.
- Logging and correlation ID baseline.
- Developer setup guide.

### Acceptance criteria
- A new engineer can start the backend using documented steps.
- Every service builds independently.
- CI blocks lint/type/test/build failures.
- Gateway can route to a sample service.
- Secrets are not committed.
- Health and readiness endpoints behave correctly.

---

## Sprint 2 — Identity, authentication and authorization

**Goal:** Secure customer, merchant, staff and admin access.

### Modules
- OTP challenge lifecycle.
- User identity/profile basics.
- Access and refresh token lifecycle.
- Session/device management.
- Role and permission primitives.
- Tenant membership integration contract.
- Admin identity separation/policy.

### Tasks
1. Define user and identity models.
2. Implement OTP request/verify using provider abstraction.
3. Add OTP expiry, attempt limits, resend cooldown and rate limiting.
4. Implement short-lived access token and refresh-token rotation.
5. Store refresh tokens securely (hashed/token-family approach).
6. Add logout, session revocation and device/session listing as required.
7. Add authentication guards and principal context.
8. Add role/permission policy evaluation.
9. Add service-to-service authentication.
10. Add audit events for authentication and sensitive security actions.
11. Add abuse monitoring and generic responses to reduce account enumeration.
12. Define customer, merchant member and platform admin identity flows.

### Deliverables
- Identity service.
- Authentication API.
- Session lifecycle.
- Authorization primitives.
- Security test suite.

### Acceptance criteria
- OTP cannot be brute-forced or reused after expiry.
- Refresh-token rotation and revocation work.
- A revoked session cannot access protected APIs.
- Merchant and customer roles cannot gain each other's privileges by changing client input.
- Platform admin access is protected by stricter policy.
- Sensitive authentication values never appear in logs.

---

## Sprint 3 — Tenancy, merchants, outlets and localities

**Goal:** Establish the merchant business model and multi-tenant foundation.

### Modules
- Merchant/tenant.
- Membership and roles.
- Outlet.
- Seller profile type.
- Business hours and special hours.
- Locality/service area.
- Verification workflow.
- Public/private location policy.

### Tasks
1. Create merchant and membership schema.
2. Implement merchant onboarding draft and submission.
3. Implement seller types: shop, home business, maker/producer, seasonal and temporary/event seller.
4. Create outlet and operating-hours APIs.
5. Create locality and service-area reference data.
6. Add outlet timezone and geo coordinates.
7. Implement membership invitation/acceptance foundation if required.
8. Implement outlet-scoped authorization.
9. Add merchant verification status and admin review hooks.
10. Protect private residential address fields from public DTOs.
11. Add public merchant profile projection/event.
12. Add audit records for profile, location and operating-hour changes.

### Deliverables
- Merchant service.
- Merchant/outlet APIs.
- Tenant and outlet authorization.
- Seller type model.
- Locality seed/import process.
- Verification workflow foundation.

### Acceptance criteria
- Merchant A cannot read or mutate Merchant B data.
- Staff access is restricted to assigned tenant/outlets.
- Home seller private address is not returned in public profile APIs.
- Temporary/seasonal seller active dates are validated.
- Operating hours support special closures and outlet timezone.
- Public merchant profile only exposes approved fields.

---

## Sprint 4 — Catalogue and product media

**Goal:** Enable merchants to publish products and customers to retrieve approved catalogues.

### Modules
- Category hierarchy.
- Product and variants.
- Product images/media metadata.
- Product publication/moderation state.
- Product attributes and units.
- Made-to-order metadata.

### Tasks
1. Design category and product schemas.
2. Implement merchant product CRUD.
3. Implement variant and unit support.
4. Implement product status: draft, pending review (if required), active, inactive, rejected.
5. Implement image upload through signed object-storage URLs.
6. Validate file type, size and ownership.
7. Implement product listing and pagination.
8. Add category assignment and category filtering.
9. Add price/unit validation.
10. Add minimum order quantity, batch size and preparation lead-time fields.
11. Add pre-order eligibility metadata (full workflow later).
12. Publish product created/updated/availability metadata events.
13. Add public product DTOs that omit internal fields.

### Deliverables
- Catalogue service.
- Category and product APIs.
- Secure media upload flow.
- Product publication lifecycle.
- OpenAPI contracts and tests.

### Acceptance criteria
- Merchant can create, update, deactivate and list own products.
- Merchant cannot edit another tenant's product.
- Invalid price, unit, variant and image data is rejected.
- Public API never exposes internal cost or private merchant fields.
- Product images use controlled storage and safe URLs.
- Product catalogue changes produce versioned events.

---

## Sprint 5 — Inventory and availability

**Goal:** Provide reliable stock state and safe concurrent updates.

### Modules
- Inventory balance.
- Stock movement.
- Manual adjustment.
- Low-stock threshold.
- Reservation/release.
- Availability projection.

### Tasks
1. Define stock tracking modes and non-stock-tracked product behavior.
2. Create inventory balance and movement schemas.
3. Implement initial stock and manual adjustments with reason.
4. Implement low-stock thresholds and events.
5. Implement atomic reservation and release operations.
6. Define reservation expiry and cleanup jobs.
7. Implement optimistic concurrency/version checks.
8. Define inventory deduction and release policy for order states.
9. Implement bulk stock update endpoint for merchant web with validation.
10. Add inventory history APIs.
11. Add stock availability projection for catalogue/discovery.
12. Add concurrency and race-condition tests.

### Deliverables
- Inventory service.
- Stock adjustment/reservation APIs.
- Stock movement audit trail.
- Low-stock event.
- Reservation expiry worker.

### Acceptance criteria
- Concurrent reservations cannot oversell tracked stock.
- Every stock mutation has actor, reason and timestamp.
- Duplicate requests are idempotent.
- Expired/cancelled reservations release stock correctly.
- Non-stock-tracked products follow explicitly defined availability behavior.
- Stock state is not silently overwritten by stale merchant clients.

---

## Sprint 6 — Discovery, locality and search

**Goal:** Return useful nearby sellers and products.

### Modules
- Nearby seller read model.
- Product discovery read model.
- Geo search.
- Filters and sorting.
- Search indexing.
- Availability freshness metadata.

### Tasks
1. Define discovery read-model ownership and projection strategy.
2. Add PostGIS indexes or chosen geo strategy.
3. Consume merchant, catalogue and inventory events.
4. Build nearby seller query with radius/locality filters.
5. Implement open/closed and fulfilment capability filters.
6. Implement category/product search.
7. Implement pagination and relevance ordering.
8. Add seller type filters.
9. Add freshness timestamps for inventory/queue-derived fields.
10. Add reindex/rebuild process for projections.
11. Add bounded caching and invalidation.
12. Add query performance tests with representative data.

### Deliverables
- Discovery service/API.
- Nearby seller search.
- Product/category search.
- Search projection consumers.
- Index rebuild procedure.

### Acceptance criteria
- Nearby search respects locality/radius and authorization/public visibility.
- Private home addresses are never used as public location results.
- Stale projections are identifiable and recoverable.
- Filters and pagination are deterministic.
- Query plans meet agreed latency targets under pilot dataset.
- Projection can be rebuilt from source events or source APIs.

---

## Sprint 7 — Cart, pricing and checkout quote

**Goal:** Calculate and validate a single-seller order before payment.

### Modules
- Cart and cart items.
- Seller consistency.
- Pricing quote.
- Fee/tax/discount extension points.
- Checkout validation.
- Idempotency.

### Tasks
1. Define guest and authenticated cart ownership.
2. Implement cart create/read/update/delete.
3. Enforce one seller per cart.
4. Validate product active status, variant, quantity and availability.
5. Define price snapshot and quote expiry.
6. Implement pricing breakdown contract.
7. Add delivery eligibility and fee quote only where merchant supports delivery.
8. Add pickup option and slot quote integration contract.
9. Add checkout idempotency.
10. Revalidate stock and price at checkout.
11. Add cart expiry/cleanup policy.
12. Add frontend/backend contract tests.

### Deliverables
- Cart APIs.
- Checkout quote endpoint.
- Pricing breakdown.
- Single-seller validation.
- Idempotency and expiry handling.

### Acceptance criteria
- Mixed-seller cart is rejected or explicitly switched by customer action.
- Price and stock are revalidated server-side.
- Quote includes currency and itemized charges.
- Expired quote cannot be used without revalidation.
- Duplicate checkout attempts do not create duplicate orders.
- Client cannot override price, tax, fee or merchant identity.

---

## Sprint 8 — Orders and order lifecycle

**Goal:** Create authoritative orders and support customer/merchant operations.

### Modules
- Checkout orchestration.
- Order and order item snapshots.
- Order state machine.
- Order event history.
- Merchant order actions.
- Cancellation/rejection policy.

### Tasks
1. Define order state machine and allowed transitions.
2. Create order and item snapshot schema.
3. Implement order creation from validated checkout.
4. Coordinate inventory reservation and capacity reservation contracts.
5. Implement customer order list/detail APIs.
6. Implement merchant order inbox/detail APIs.
7. Implement accept/reject with reason.
8. Implement preparing, ready, completed and cancellation actions.
9. Implement immutable order event history.
10. Add order versioning and concurrency protection.
11. Define compensation for failed downstream reservation/payment steps.
12. Add customer and merchant authorization tests.
13. Add idempotency and duplicate transition tests.

### Deliverables
- Commerce service order module.
- Customer and merchant order APIs.
- State machine documentation.
- Order event history.
- Saga/orchestration flow for checkout.

### Acceptance criteria
- Only valid state transitions are accepted.
- Customer sees only their own orders.
- Merchant sees only orders for authorized outlets.
- Duplicate action requests do not duplicate transitions.
- Order item names/prices/units are immutable snapshots for historical accuracy.
- Failure in downstream service leaves a recoverable, explicit order state.
- Every transition records actor/source/time/reason where applicable.

---

## Sprint 9 — Payments, refunds and reconciliation

**Goal:** Integrate payment provider safely and make financial state auditable.

### Modules
- Payment intent/order payment.
- Provider adapter.
- Webhook inbox.
- Refund.
- Reconciliation.
- Settlement reference tracking.

### Tasks
1. Confirm PSP and merchant/platform settlement model with legal/finance review.
2. Implement provider abstraction and sandbox configuration.
3. Create payment intent/order mapping.
4. Use provider idempotency keys.
5. Implement webhook signature verification.
6. Persist raw/minimized webhook event safely with deduplication metadata.
7. Implement payment state machine: created, pending, authorized/paid, failed, cancelled, refunded/partially refunded where supported.
8. Implement asynchronous order/payment coordination.
9. Implement refund initiation and status tracking.
10. Implement reconciliation job for pending/mismatched payments.
11. Add financial ledger-style immutable transaction records.
12. Add webhook replay tooling with access control.
13. Add failure, timeout, duplicate and out-of-order webhook tests.

### Deliverables
- Payment service.
- PSP sandbox integration.
- Verified webhook handler.
- Refund workflow.
- Reconciliation worker.
- Finance operations runbook.

### Acceptance criteria
- Frontend callback cannot independently mark payment paid.
- Invalid webhook signature is rejected.
- Duplicate webhook has no duplicate financial effect.
- Delayed/out-of-order events are handled safely.
- Payment/order states reconcile to provider records.
- Refund status is visible and auditable.
- Settlement flow does not cause NukkadNow to hold or route merchant funds outside the approved legal/payment structure.

---

## Sprint 10 — Capacity, pickup slots, queue and tokens

**Goal:** Make merchant pickup promises operationally reliable.

### Modules
- Capacity settings.
- Pickup slot generation.
- Slot reservation.
- Preparation estimate.
- Queue snapshot.
- Walk-in entry.
- Pickup token.

### Tasks
1. Define capacity configuration per outlet and time window.
2. Define slot duration, buffers and max orders/units.
3. Implement product preparation time and merchant overrides.
4. Implement slot availability query.
5. Implement atomic slot reservation.
6. Implement reservation expiry/release.
7. Implement walk-in order entry and workload inclusion.
8. Implement separate queue/wait/preparation/pickup metrics.
9. Implement manual estimate update with actor and timestamp.
10. Generate unique pickup token/order code.
11. Implement ready-for-pickup and handover verification.
12. Add overbooking/concurrency and timezone tests.

### Deliverables
- Fulfillment capacity module.
- Pickup slot API.
- Walk-in API.
- Token generation and validation.
- Queue snapshot and freshness model.

### Acceptance criteria
- Concurrent checkout cannot overbook a configured slot.
- Slot reservations expire/release according to documented rules.
- Merchant sees accurate operational workload for supported order sources.
- Manual queue values include source and last-updated time.
- Physical queue count is not conflated with preparation estimate.
- Tokens are unguessable enough for their purpose, scoped and revocable.
- Outlet timezone and daylight/time changes are handled correctly.

---

## Sprint 11 — QR ordering and merchant-managed delivery

**Goal:** Support in-store QR order entry and optional merchant delivery.

### QR tasks
- Generate outlet QR payload with opaque/revocable identifier.
- Resolve and validate QR server-side.
- Enforce outlet active status and ordering mode.
- Prevent outlet/price/fulfilment tampering.
- Add QR source metadata to orders.
- Add revocation/regeneration controls.

### Delivery tasks
- Configure service area/radius/PIN codes.
- Configure fee, minimum order and time windows.
- Validate address eligibility during quote and checkout.
- Implement merchant-managed delivery states.
- Capture delivery assignment/reference where needed.
- Implement delivery status updates and customer tracking.
- Keep delivery proof and customer data minimal.

### Deliverables
- QR resolve and management APIs.
- QR-originated order source tracking.
- Merchant delivery configuration and status APIs.
- Customer/merchant delivery event contracts.

### Acceptance criteria
- Revoked or invalid QR cannot create an order.
- QR cannot change price or merchant/outlet identity.
- Delivery is offered only where seller has enabled it and address is serviceable.
- UI/API language makes merchant-managed delivery clear.
- Delivery status changes are authorized and audited.

---

## Sprint 12 — Notifications and background processing

**Goal:** Reliably notify customers and merchants and operate asynchronous tasks.

### Modules
- Notification preferences.
- Templates.
- Provider adapters.
- Delivery attempts.
- Background jobs.
- Retry/dead-letter operations.

### Tasks
1. Implement notification event consumers.
2. Add push provider integration (FCM/APNs path as applicable).
3. Add SMS provider abstraction and approved templates.
4. Add email/WhatsApp integration only if provider, consent and policy are ready.
5. Implement user/merchant notification preferences.
6. Add template localization framework.
7. Add retry with backoff and provider error classification.
8. Add dead-letter queue and replay controls.
9. Add notification delivery history.
10. Add scheduled reminders and expiry jobs.
11. Add opt-in/opt-out and promotional consent handling.
12. Add provider outage and duplicate event tests.

### Deliverables
- Notification worker/service.
- Push/SMS adapter.
- Template and preference APIs.
- Retry/DLQ runbook.
- Operational notification metrics.

### Acceptance criteria
- Core order events trigger correct transactional notifications.
- Duplicate events do not create uncontrolled duplicate messages.
- Provider failure does not roll back a confirmed order.
- Consent and preferences are respected.
- Sensitive order/customer details are not unnecessarily included in push payloads.
- Failed jobs are observable and replayable with authorization.

---

## Sprint 13 — Subscriptions, billing and platform administration

**Goal:** Enable merchant SaaS monetization and controlled platform operations.

### Modules
- Plans and entitlements.
- Subscription lifecycle.
- Invoice/payment reference.
- Trial/grace period.
- Platform admin workflows.
- Merchant verification administration.

### Tasks
1. Define plan and feature entitlement model.
2. Seed initial plan catalogue (prices remain configurable and subject to validation).
3. Implement subscription create/change/cancel.
4. Implement renewal and grace-period state machine.
5. Implement subscription billing integration/records.
6. Implement invoice and payment reference APIs.
7. Enforce plan limits server-side.
8. Implement admin merchant review/approval/suspension.
9. Implement category/locality management endpoints as required.
10. Implement support/refund escalation references.
11. Add admin RBAC and high-risk action audit.
12. Add export and bulk admin action permission checks.

### Deliverables
- Platform service subscription modules.
- Plan/entitlement APIs.
- Admin merchant workflow APIs.
- Billing and renewal jobs.
- Admin audit events.

### Acceptance criteria
- Plan limits are enforced by backend, not only hidden in UI.
- Billing failure follows documented grace-period policy.
- Admin actions require explicit permissions and are audited.
- Merchant cannot self-approve verification or alter plan entitlements.
- Billing records are reconcilable and immutable where financial history requires it.

---

## Sprint 14 — Analytics, audit, security and performance hardening

**Goal:** Prepare for real pilot traffic and operational accountability.

### Tasks
1. Finalize audit event coverage for sensitive actions.
2. Implement operational metrics and dashboards.
3. Build reporting projections for orders, sales and fulfilment KPIs.
4. Validate tenant isolation across every service.
5. Run threat modeling and security review.
6. Run dependency/container vulnerability scanning.
7. Test rate limits, abuse scenarios and OTP controls.
8. Load test discovery, checkout, order reads and webhook ingestion.
9. Profile slow database queries and add justified indexes.
10. Test database backup and restore.
11. Test broker outage, retry and dead-letter behavior.
12. Test service restart and graceful shutdown.
13. Review data retention, deletion and privacy workflows.
14. Review secrets, access policies and production configuration.
15. Document SLOs, alerts and escalation ownership.

### Deliverables
- Security review report and remediation list.
- Load test report.
- Operational dashboards and alerts.
- Backup/restore evidence.
- Audit coverage matrix.
- Production runbooks.

### Acceptance criteria
- No unresolved critical/high security findings for launch.
- Tenant-isolation tests pass.
- Load tests meet agreed pilot targets.
- Backup restore is demonstrated, not merely configured.
- Critical services expose health/metrics and actionable alerts.
- Financial, order and inventory flows remain consistent under retry/failure tests.

---

## Sprint 15 — Pilot readiness, UAT and production launch

**Goal:** Launch safely with a limited set of verified merchants in one locality.

### Tasks
1. Freeze pilot scope and release candidate.
2. Run end-to-end customer and merchant journeys.
3. Complete payment provider production approval and webhook validation.
4. Verify merchant onboarding and category-specific compliance workflow.
5. Import locality/category seed data.
6. Onboard pilot merchants and validate their profiles/catalogues.
7. Verify shop hours, pickup capacity and serviceability.
8. Run customer/merchant UAT with real devices and realistic network conditions.
9. Test cancellations, refunds, failed payments and support escalation.
10. Complete security, privacy and legal launch checklist.
11. Configure production secrets, domains, TLS and monitoring.
12. Validate backups, rollback and incident contacts.
13. Run controlled release with feature flags.
14. Monitor first live transactions and reconcile payment/order records.
15. Hold daily pilot review and record defects/decisions.

### Deliverables
- Signed UAT checklist.
- Production release notes.
- Merchant onboarding checklist.
- Incident and rollback runbooks.
- Pilot monitoring dashboard.
- Go/no-go approval.

### Acceptance criteria
- Critical customer and merchant journeys pass.
- No open severity-1 or severity-2 defects.
- Payment and refund reconciliation is verified.
- Support and incident escalation are staffed.
- Pilot merchants understand order acceptance, stock, pickup and delivery responsibilities.
- Rollback and recovery procedure is tested.
- Product owner and technical owner approve go-live.

---

# 9. Cross-sprint engineering standards

These standards apply to every sprint, not just the sprint in which a platform capability is first introduced.

## 9.1 Code quality
- TypeScript strict mode.
- No `any` unless justified and documented.
- ESLint and Prettier enforced in CI.
- Small modules with explicit ownership.
- No circular dependencies.
- No business logic in controllers.
- No hidden cross-service database coupling.
- Configuration validated at startup.
- Secrets provided through a secret manager/environment injection.

## 9.2 API quality
- OpenAPI updated with every endpoint change.
- Request validation at boundaries.
- Consistent error codes and correlation IDs.
- Pagination for collection endpoints.
- Explicit sorting/filter allowlists.
- Idempotency for sensitive mutations.
- Backward-compatible evolution where practical.

## 9.3 Database quality
- Every schema change uses a migration.
- Migration reviewed and tested against realistic data volume.
- Avoid destructive production migrations in a single step.
- Add indexes based on query plans.
- Use transactions for invariants within a service.
- Define retention and archival policy.
- Verify backup/restore.

## 9.4 Event quality
- Version event schemas.
- Publish via transactional outbox.
- Consume idempotently.
- Use dead-letter queues and replay runbooks.
- Include correlation and causation identifiers.
- Do not publish sensitive personal/payment data unnecessarily.

## 9.5 Security quality
- Tenant and outlet authorization on every relevant endpoint.
- Least privilege for services, users and deployment credentials.
- Rate limits and abuse protection.
- Sensitive data redaction in logs.
- Secure file upload validation.
- Dependency and container scanning.
- Audit sensitive actions.
- No production secrets in source control.

---

# 10. Definition of Ready (DoR)

A story may enter a sprint only when:
- Business outcome and user role are clear.
- Acceptance criteria are testable.
- Service/data owner is identified.
- API/event contract changes are described.
- Dependencies are identified and available.
- Security/privacy impact is reviewed.
- UI dependency or mock contract is available where relevant.
- Test approach and test data are understood.
- Story is small enough to complete within the sprint or split.

# 11. Definition of Done (DoD)

A story is done only when:
- Implementation is complete and peer-reviewed.
- Unit tests pass.
- Integration/contract tests are added where relevant.
- Authorization and tenant isolation are verified.
- API documentation/contracts are updated.
- Database migrations are tested.
- Logs, metrics and error handling are sufficient.
- No secrets or sensitive data are logged.
- Acceptance criteria pass in the target environment.
- Feature flags/configuration are documented.
- Operational impact and rollback are understood.
- Product owner accepts the outcome.

A sprint is not complete merely because code is merged. It is complete when the increment is deployable, tested and demonstrable.

---

# 12. QA strategy and test pyramid

| Test level | Purpose | Examples |
|---|---|---|
| Unit | Domain rules and edge cases | Order transitions, price validation |
| Integration | Database and provider adapters | Inventory reservation, webhook inbox |
| Contract | Service/API compatibility | OpenAPI, event schemas |
| E2E | Full business journeys | Checkout to pickup completion |
| Security | Access and abuse controls | Tenant isolation, OTP throttling |
| Performance | Latency and concurrency | Geo search, slot reservation |
| Resilience | Failure recovery | Broker outage, duplicate webhook |

### Mandatory high-risk scenarios
1. Two customers attempt to buy the final unit simultaneously.
2. Two customers attempt to reserve the last pickup capacity in the same slot.
3. Customer retries checkout after a timeout.
4. PSP webhook arrives twice.
5. PSP webhook arrives after a delayed client redirect.
6. Payment succeeds but order orchestration temporarily fails.
7. Merchant cancels/rejects after payment.
8. Inventory reservation expires.
9. Merchant changes stock from two devices.
10. Merchant staff from another tenant attempts access.
11. Home seller private address is requested through public APIs.
12. QR code is revoked or outlet is suspended.
13. Notification provider is unavailable.
14. Event consumer processes the same event more than once.
15. Database or broker restarts during active traffic.

---

# 13. Environments and CI/CD

## 13.1 Environments

| Environment | Purpose | Data |
|---|---|---|
| Local | Developer work | Synthetic |
| Development | Shared integration | Synthetic |
| Staging/UAT | Release validation | Synthetic or approved masked data |
| Production | Live operations | Real, protected data |

Never copy production personal/payment data into development without an approved masking process.

## 13.2 CI pipeline

For each pull request:
1. Install from lockfile.
2. Format/lint.
3. Typecheck.
4. Run affected unit tests.
5. Build affected applications.
6. Validate OpenAPI/event schemas.
7. Scan dependencies and secrets.
8. Build container image where applicable.

## 13.3 CD pipeline

1. Build immutable versioned image.
2. Publish image to private registry.
3. Deploy to development automatically.
4. Run smoke and integration tests.
5. Promote the same image to staging.
6. Obtain approval for production.
7. Run backward-compatible migrations.
8. Deploy with rolling/blue-green strategy appropriate to infrastructure.
9. Run health checks and smoke tests.
10. Monitor error rate, latency and business metrics.
11. Roll back application image if needed; database rollback must follow a separately tested plan.

Use feature flags for staged launch and risky capabilities.

---

# 14. Observability and operational readiness

## 14.1 Required telemetry
- Structured logs.
- Request and correlation IDs.
- Distributed trace propagation.
- Service health/readiness.
- HTTP request rate, error rate and latency.
- Database pool/slow query metrics.
- RabbitMQ queue depth, consumer lag and dead-letter count.
- Background job success/failure.
- Payment webhook processing and reconciliation status.
- Checkout/order conversion and failure metrics.

## 14.2 Initial alert categories
- API availability and elevated 5xx.
- High p95/p99 latency.
- Database saturation or connection exhaustion.
- Queue backlog/dead-letter growth.
- Payment webhook processing delay.
- Reconciliation mismatch.
- Checkout failure spike.
- Inventory/capacity conflict spike.
- Notification provider outage.
- Backup failure.

Set numerical thresholds after baseline load tests. Do not invent SLOs without measurement.

## 14.3 Runbooks required before pilot
- API/service outage.
- Database restore.
- RabbitMQ backlog and dead-letter replay.
- Payment webhook failure/replay.
- Payment reconciliation mismatch.
- Failed refund.
- Inventory correction.
- Capacity/slot correction.
- Credential/secret rotation.
- Merchant account suspension and access revocation.
- Production rollback.

---

# 15. Security, privacy and India-specific compliance workstream

This is an engineering checklist, not legal advice. Engage qualified legal, tax, payment and compliance professionals before production launch.

- Review applicable Digital Personal Data Protection requirements and rules in force.
- Review Consumer Protection and e-commerce obligations.
- Review GST invoicing/tax treatment and seller responsibilities.
- Review payment aggregator/PSP and settlement structure.
- Review FSSAI requirements for applicable food sellers.
- Review Legal Metrology declarations for applicable products.
- Review IT/security incident response and retention obligations.
- Define privacy notice, consent, deletion, grievance and support processes.
- Define merchant verification and prohibited/restricted product policies.
- Ensure public seller profile does not expose private residential address by default.
- Ensure customer location and contact information are minimized and access-controlled.

---

# 16. Sprint dependency map

```text
Sprint 0: Architecture decisions
    |
Sprint 1: Platform foundation
    |
Sprint 2: Identity and authorization
    |
Sprint 3: Tenant / merchant / outlet
    |
    +----------------------+
    |                      |
Sprint 4: Catalogue     Locality seed/data
    |
Sprint 5: Inventory
    |
Sprint 6: Discovery
    |
Sprint 7: Cart and quote
    |
    +-----------------------------+
    |                             |
Sprint 8: Orders              Sprint 10: Capacity
    |                             |
Sprint 9: Payments <--------------+
    |
Sprint 11: QR and delivery
    |
Sprint 12: Notifications/background jobs
    |
Sprint 13: Subscription/admin
    |
Sprint 14: Hardening and performance
    |
Sprint 15: UAT and pilot launch
```

Some work can overlap:
- Infrastructure, observability and test automation continue throughout.
- Frontend integration can begin when Sprint 2/3 contracts stabilize.
- Notification provider setup can begin before Sprint 12.
- Payment PSP onboarding/legal review should begin in Sprint 0 or Sprint 1 because external approval may take time.
- Locality and category reference data can be prepared in parallel with Sprint 3/4.

---

# 17. Release gates

## Gate A — Internal alpha
Required after Sprints 1–6:
- Authentication and tenant boundaries work.
- Merchant can create a verified/pending profile.
- Product and inventory can be managed.
- Nearby discovery returns approved public data.
- CI, logs and health checks work.

## Gate B — Commerce beta
Required after Sprints 7–10:
- Cart and quote are server-authoritative.
- Order state machine works.
- Payment sandbox and reconciliation work.
- Pickup slots cannot be overbooked.
- Merchant can complete order operations.

## Gate C — Pilot candidate
Required after Sprints 11–14:
- QR and delivery flows work where enabled.
- Notifications and admin workflows work.
- Security and load tests pass.
- Runbooks and backup restore are verified.

## Gate D — Production pilot
Required after Sprint 15:
- UAT sign-off.
- Merchant onboarding complete.
- PSP production readiness.
- Legal/compliance launch checklist complete.
- Monitoring, support and rollback staffed.

---

# 18. Suggested team ownership

A small but capable delivery team could use these responsibilities. One person may hold multiple roles initially, but accountability should remain explicit.

| Role | Main ownership |
|---|---|
| Backend Tech Lead | Architecture, service boundaries, code review, technical risk |
| Backend Engineer A | Identity, merchant, authorization |
| Backend Engineer B | Catalogue, inventory, discovery |
| Backend Engineer C | Commerce, checkout, orders |
| Backend Engineer D | Payments, fulfillment, notifications |
| QA Engineer | Test strategy, automation, UAT |
| DevOps/Platform Engineer | CI/CD, environments, observability, backups |
| Product Owner | Scope, priorities, acceptance and merchant workflows |
| Frontend Lead | API contract alignment and integration readiness |

If the team is smaller, sequence work rather than creating many parallel unfinished services.

---

# 19. Risk register

| Risk | Impact | Mitigation |
|---|---|---|
| Too many microservices too early | High operational overhead | Start with bounded deployables; extract only when justified |
| Payment provider approval delay | Pilot blocked | Begin PSP/legal review in Sprint 0 |
| Inventory overselling | Financial/customer trust loss | Atomic reservations and concurrency tests |
| Pickup overbooking | Merchant operational failure | Atomic slot reservations |
| Tenant data leakage | Critical security incident | Central tenant context, service authorization and isolation tests |
| Stale discovery data | Customer disappointment | Freshness metadata and projection rebuild |
| Poor mobile connectivity | Lost/duplicate actions | Idempotency, explicit pending state and safe retries |
| Home address exposure | Privacy/safety risk | Separate private/public location models |
| Event duplication/loss | Inconsistent workflows | Outbox/inbox, idempotent consumers and DLQ |
| Unclear settlement model | Regulatory/financial risk | PSP and legal review before live payments |
| Excessive synchronous dependencies | Checkout fragility | Minimize sync chains and use saga/compensation |
| Unverified merchant/product data | Trust/compliance risk | Verification states and category rules |

---

# 20. Product decisions required before relevant sprints

| Decision | Needed by | Owner |
|---|---|---|
| OTP provider and sender registration | Sprint 2 | Product/Platform |
| Merchant verification rules | Sprint 3 | Product/Compliance |
| Locality, PIN and geo source | Sprint 3/6 | Product/Backend |
| Product categories and units | Sprint 4 | Product |
| Inventory deduction/release policy | Sprint 5/8 | Product/Backend |
| Guest cart/checkout rules | Sprint 7 | Product |
| Cancellation/rejection/refund policy | Sprint 8/9 | Product/Finance |
| PSP and settlement structure | Sprint 0/9 | Leadership/Finance/Legal |
| Pickup slot rules and buffers | Sprint 10 | Product/Merchant Ops |
| QR ordering modes | Sprint 11 | Product |
| Delivery serviceability and fees | Sprint 11 | Product/Merchant Ops |
| Notification channels and consent | Sprint 12 | Product/Compliance |
| Subscription plans and grace period | Sprint 13 | Leadership/Finance |
| Retention and deletion policy | Sprint 14 | Legal/Privacy |

---

# 21. First 10 engineering actions

Before the team starts Sprint 1, complete these actions:

1. Create the `nukkadnow-backend` repository and protect the main branch.
2. Approve the service ownership matrix and ADRs.
3. Select NestJS workspace strategy and ORM.
4. Select PostgreSQL, Redis and RabbitMQ deployment approach.
5. Define local Docker Compose and environment configuration.
6. Establish API error, pagination, correlation and idempotency standards.
7. Establish authentication and tenant authorization design.
8. Set up CI with lint, typecheck, tests and builds.
9. Begin PSP, OTP, maps and messaging provider onboarding.
10. Create the sprint board with stories, owners, estimates and acceptance criteria.

---

## 22. Final architecture and delivery recommendation

For NukkadNow, the highest-risk backend capabilities are not ordinary CRUD. They are:

1. **Tenant isolation:** one merchant must never access another merchant's data.
2. **Inventory consistency:** concurrent orders must not oversell stock.
3. **Checkout and payment consistency:** retries and delayed webhooks must not create duplicate or unpaid confirmed orders.
4. **Capacity consistency:** pickup slots must not be overbooked.
5. **Operational clarity:** queue count, walk-in wait, preparation estimate and pickup slot must remain separate concepts.
6. **Privacy:** home seller private address and customer data must be protected.
7. **Recoverability:** events, background jobs and external provider failures must be observable and replayable safely.

Build and test these invariants before optimizing for microservice count or adding advanced features.

**Recommended execution order:** foundation → identity/tenancy → merchant/catalogue/inventory → discovery → checkout/orders → payments/fulfillment → notifications/admin → hardening → locality pilot.

The objective is not to build the maximum number of services. The objective is to build a reliable, maintainable commerce platform that can support more localities, sellers, outlets and transactions without requiring a rewrite.
