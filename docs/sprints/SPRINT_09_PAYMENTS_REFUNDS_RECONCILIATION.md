# Sprint 09 — Payments, Webhooks, Refunds & Reconciliation

- **Sprint ID:** NNK-SPRINT-09
- **Duration:** 2 weeks
- **Goal:** Payment Gateway integration (Razorpay/Cashfree/Mock PSP), cryptographic webhook verification, automated refund processing, and daily reconciliation ledger.
- **Owning Service:** `apps/payment-service`

---

## 1. Principles & Security
- **Cryptographic Webhook Signature:** PSP webhooks verified via HMAC-SHA256 signature against `PAYMENT_WEBHOOK_SECRET` before processing.
- **Zero Frontend Trust:** Orders are NEVER marked as paid based on client redirects. Only verified webhooks or direct PSP API polling can transition an order to `PAID`.
- **Append-Only Ledger:** Financial records are strictly immutable; corrections are recorded as compensating refund or adjustment records.

---

## 2. Endpoints & API Surface
| Method | Route | Description | Auth |
|---|---|---|---|
| `POST` | `/api/v1/payments/intents` | Create PSP payment intent | Order Service |
| `POST` | `/api/v1/payments/webhooks/:provider`| Receive signed PSP webhook | Public (Signed) |
| `POST` | `/api/v1/payments/:id/refund`| Process full or partial refund | Merchant Owner / Admin |
| `GET` | `/api/v1/payments/reconciliation`| Daily settlement reconciliation report | Admin |
