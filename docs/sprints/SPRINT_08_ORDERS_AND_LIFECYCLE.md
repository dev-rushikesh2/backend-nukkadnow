# Sprint 08 — Orders, Checkout Saga & Order Lifecycle

- **Sprint ID:** NNK-SPRINT-08
- **Duration:** 2 weeks
- **Goal:** Distributed checkout orchestration saga, order state machine, Transactional Outbox, and idempotency key protection.
- **Owning Service:** `apps/order-service`

---

## 1. Principles & Coding Standards
- **DRY:** Event dispatching unified through `@nukkadnow/messaging` Transactional Outbox pattern.
- **SOLID:** Order Aggregate Root enforces state machine transitions (`PENDING_PAYMENT` $\rightarrow$ `CONFIRMED` $\rightarrow$ `ACCEPTED` $\rightarrow$ `PREPARING` $\rightarrow$ `READY` $\rightarrow$ `COMPLETED`).

---

## 2. Idempotency & Fault Tolerance
- **Idempotency Key Guard:** Every `POST /orders` requires an `Idempotency-Key` header stored in PostgreSQL to prevent duplicate charges on network retries.
- **Compensating Saga:** If payment creation or slot reservation fails, compensating transactions release reserved stock immediately.

---

## 3. Endpoints & API Surface
| Method | Route | Description | Auth |
|---|---|---|---|
| `POST` | `/api/v1/orders` | Place order (initiates checkout saga) | Customer |
| `GET` | `/api/v1/orders/:id` | Get authoritative order status | Customer / Merchant |
| `POST` | `/api/v1/orders/:id/accept` | Merchant accepts order with prep estimate | Merchant Staff |
| `POST` | `/api/v1/orders/:id/cancel` | Cancel order with compensation | Customer / Staff |
