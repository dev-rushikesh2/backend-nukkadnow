# Sprint 05 — Inventory, Stock Balances & Atomic Reservations

- **Sprint ID:** NNK-SPRINT-05
- **Duration:** 2 weeks
- **Goal:** Real-time stock balance tracking, atomic reservation with TTL, optimistic concurrency versioning, and stock movement audit ledgers.
- **Owning Service:** `apps/catalog-service` (or dedicated Inventory module)

---

## 1. Principles & Coding Standards
- **DRY & KISS:** Direct atomic SQL reservation queries (`UPDATE stock_balances SET reserved = reserved + :qty, version = version + 1 WHERE id = :id AND on_hand - reserved >= :qty AND version = :version`).
- **SOLID (SRP):** `StockReservationEngine` separate from manual stock adjustment handlers.

---

## 2. Concurrency & Race Condition Prevention
- **Atomic Operations:** No read-modify-write loops in application memory; all stock decrements/reservations executed atomically in PostgreSQL with optimistic locking.
- **TTL Reservation Expiry:** Uncommitted stock reservations automatically expire after 10 minutes via background worker, returning reserved units to available balance.
- **Immutable Ledger:** Every stock change creates an append-only `StockMovement` row with actor, reason, and quantity change.

---

## 3. Endpoints & API Surface
| Method | Route | Description | Auth |
|---|---|---|---|
| `POST` | `/api/v1/inventory/adjust` | Manual restock / waste adjustment | Merchant Staff |
| `POST` | `/api/v1/inventory/reserve` | Internal atomic stock reservation with TTL | Internal Service |
| `POST` | `/api/v1/inventory/commit` | Commit reservation upon payment confirmation | Internal Service |
| `POST` | `/api/v1/inventory/release` | Release reservation upon checkout failure | Internal Service |
| `GET` | `/api/v1/inventory/outlets/:id/movements`| Audit trail of stock movements | Merchant Staff |

---

## 4. Definition of Done
- [ ] Atomic SQL reservation with version check.
- [ ] Background worker sweeping expired reservations.
- [ ] Concurrency tests simulating 100 simultaneous requests purchasing the last stock item.
