# Sprint 10 — Capacity Engine, Pickup Slots & Pickup Tokens

- **Sprint ID:** NNK-SPRINT-10
- **Duration:** 2 weeks
- **Goal:** Outlet capacity slot scheduling, atomic slot reservation, live queue estimation engine, and customer pickup tokens.
- **Owning Service:** `apps/fulfillment-service`

---

## 1. Principles & Coding Standards
- **KISS:** Capacity modeled in 15-minute or 30-minute configurable windows with max concurrent order limits.
- **SOLID:** Pickup token generation uses an alphanumeric format (`A-12`) scoped to daily outlet sequence.

---

## 2. Concurrency Safety
- **Atomic Slot Reservation:** Atomic decrement prevents two customers from reserving the last pickup slot simultaneously.
- **Queue Snapshotting:** Queue wait times calculated from actively preparing orders + historical preparation averages.

---

## 3. Endpoints & API Surface
| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/v1/fulfillment/outlets/:id/slots`| Get available pickup time slots | Public |
| `POST` | `/api/v1/fulfillment/slots/reserve` | Atomic pickup slot reservation | Internal Service |
| `POST` | `/api/v1/fulfillment/orders/:id/ready` | Mark order ready & emit pickup token | Merchant Staff |
| `POST` | `/api/v1/fulfillment/orders/:id/collect`| Complete token handover | Merchant Staff |
