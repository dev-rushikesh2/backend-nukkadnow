# Sprint 01 — Platform Foundation, Gateway & Observability

- **Sprint ID:** NNK-SPRINT-01
- **Duration:** 2 weeks
- **Goal:** Production-grade API Gateway ingress, BFF composition surfaces, unified error handling, W3C distributed tracing, rate limiting, and observability.
- **Owning Service:** `apps/api-gateway`, `packages/observability`, `packages/security`

---

## 1. Principles & Coding Standards

### DRY & KISS
- **Unified Response & Error Format:** Single `HttpExceptionFilter` in gateway translates all domain errors into RFC-7807 compliant JSON envelopes with stable error codes.
- **Single Source of Truth for Tracing:** W3C `traceparent` and `x-correlation-id` injected at gateway boundary and automatically propagated across downstream async/sync hops.
- **KISS Proxying:** Reverse proxy downstream services using standard fast HTTP dispatching without unneeded transformation layers on simple CRUD calls.

### SOLID Architecture
- **Single Responsibility:** Gateway handles TLS termination, authentication validation, rate limiting, and routing. It contains zero business logic for order pricing, catalog, or payments.
- **Dependency Inversion:** Observability interfaces (`StructuredLogger`, `MetricsCollector`) are injected into controllers via dependency injection tokens.

---

## 2. Security Architecture & Threat Defense
- **Rate Limiting:** Redis-backed sliding window rate limiter (e.g., 100 req/min for general traffic; 5 req/min for sensitive auth endpoints).
- **Security Headers (Helmet):** Strict Content-Security-Policy (CSP), HSTS (2 years), X-Frame-Options (DENY), X-Content-Type-Options (nosniff).
- **CORS Lockdown:** Strict origin allowlist matching customer PWA, merchant portal, and admin portal. Wildcard disabled in staging/production.
- **Request Size Guard:** Maximum JSON payload size capped at 1MB to prevent memory exhaustion DoS attacks.
- **Data Sanitization:** Global `ValidationPipe` with `whitelist: true`, `forbidNonWhitelisted: true`, and `stripZero: true`.

---

## 3. Endpoints & API Surface

### Gateway System Endpoints
| Method | Route | Description | Auth | Rate Limit |
|---|---|---|---|---|
| `GET` | `/health` | Liveness and readiness health probe | Public | None |
| `GET` | `/metrics` | Prometheus metrics scrape endpoint | Internal/Protected | None |
| `GET` | `/api/docs` | Swagger OpenAPI UI | Public in Dev | 30/min |

### Customer BFF Surface (`/api/v1/customer`)
| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/v1/customer/outlets/nearby` | Aggregated nearby seller discovery feed | Public / Optional JWT |
| `GET` | `/api/v1/customer/outlets/:id/feed` | Single outlet storefront profile & menu | Public |
| `GET` | `/api/v1/customer/orders/active` | Active customer order tracking stream | Required (Customer) |

### Merchant BFF Surface (`/api/v1/merchant`)
| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/v1/merchant/cockpit/summary` | Real-time merchant dashboard summary | Required (Merchant Staff) |
| `GET` | `/api/v1/merchant/outlets/:id/status`| Live outlet open/busy/queue status | Required (Merchant Staff) |

### Realtime WebSocket Gateway
- `WS /` with namespaces for `/customer` and `/merchant`.
- Handshake validates JWT; assigns socket to rooms: `customer:{userId}`, `outlet:{outletId}`.

---

## 4. Definition of Done & Test Plan
- [x] Global Exception Filter with RFC-7807 compliance.
- [x] Request Context Middleware setting W3C trace IDs.
- [x] Sliding-window rate limiter on Redis.
- [x] Swagger documentation published on `/api/docs`.
- [x] Jest unit tests for filters, middlewares, and BFF controllers.
