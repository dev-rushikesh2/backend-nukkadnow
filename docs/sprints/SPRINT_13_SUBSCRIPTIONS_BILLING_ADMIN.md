# Sprint 13 — Merchant Subscriptions, SaaS Billing & Super Admin

- **Sprint ID:** NNK-SPRINT-13
- **Duration:** 2 weeks
- **Goal:** Tiered merchant subscription plans, automated invoicing, feature entitlements, and restricted Super Admin management APIs.
- **Owning Service:** `apps/subscription-service`

---

## 1. Principles & Security
- **Strict Admin Boundary:** Super Admin APIs enforce elevated step-up MFA, audit logging, and distinct permission checks.
- **No Client Trust for Entitlements:** Catalog and ordering limits (e.g. maximum products, custom domain) checked server-side via `EntitlementService`.

---

## 2. Endpoints & API Surface
| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/v1/subscriptions/plans` | Public merchant SaaS plan tiers | Public |
| `POST` | `/api/v1/subscriptions/subscribe`| Merchant subscribes to plan | Merchant Owner |
| `GET` | `/api/v1/admin/merchants/audit` | Super Admin platform audit log viewer | Super Admin |
| `POST` | `/api/v1/admin/merchants/:id/suspend`| Suspend merchant organization | Super Admin |
