# Sprint 14 — Operational Analytics, Audit & Security Hardening

- **Sprint ID:** NNK-SPRINT-14
- **Duration:** 2 weeks
- **Goal:** Operational merchant and platform analytics, automated audit trail aggregation, penetration testing, and load optimization.
- **Owning Service:** `apps/analytics-service`

---

## 1. Principles & Scalability
- **Read-Model Projections:** Analytics service uses materialized read models updated asynchronously via RabbitMQ without impacting transactional OLTP performance.
- **Data Minimization:** Historical order PII anonymized according to Indian DPDP regulations.

---

## 2. Endpoints & API Surface
| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/v1/analytics/merchant/cockpit`| Merchant operational revenue & order metrics | Merchant Owner |
| `GET` | `/api/v1/analytics/admin/gmv` | Platform-wide GMV and user growth report | Super Admin |
