# Sprint 11 — Dine-in/At-Shop QR Ordering & Merchant-Managed Delivery

- **Sprint ID:** NNK-SPRINT-11
- **Duration:** 2 weeks
- **Goal:** QR code table/counter ordering workflows and merchant-managed delivery tracking.
- **Owning Service:** `apps/fulfillment-service`, `apps/order-service`

---

## 1. Principles & Coding Standards
- **KISS:** Delivery is merchant-operated (no platform fleet). The service manages task assignments and status updates without GPS route optimization overhead.
- **DRY:** Reusable QR token generation and signature verification.

---

## 2. Endpoints & API Surface
| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/v1/qr/resolve/:token` | Resolve outlet & table/counter from QR | Public |
| `POST` | `/api/v1/delivery/tasks/:id/assign`| Assign delivery task to staff member | Merchant Staff |
| `PUT` | `/api/v1/delivery/tasks/:id/status`| Update delivery status (Out / Delivered) | Merchant Staff |
