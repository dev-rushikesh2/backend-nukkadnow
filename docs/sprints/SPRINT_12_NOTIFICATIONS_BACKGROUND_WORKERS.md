# Sprint 12 — Notifications, Messaging Channels & Background Workers

- **Sprint ID:** NNK-SPRINT-12
- **Duration:** 2 weeks
- **Goal:** Multi-channel notifications (SMS, WhatsApp, WebPush, Email) for order updates and background job scheduling.
- **Owning Service:** `apps/notification-service`

---

## 1. Principles & Coding Standards
- **DRY:** Template parameter substitution engine supporting Hindi and English localized copy.
- **SOLID (OCP):** Multi-provider adapters (`SmsProviderPort`, `WhatsAppProviderPort`, `PushProviderPort`).
- **KISS:** Idempotent notification worker listening to RabbitMQ events (`orders.order.created`, `payments.payment.confirmed`).

---

## 2. Endpoints & API Surface
| Method | Route | Description | Auth |
|---|---|---|---|
| `POST` | `/api/v1/notifications/templates` | Create / update message template | Admin |
| `POST` | `/api/v1/notifications/dispatch` | Internal immediate message dispatch | Internal Service |
| `GET` | `/api/v1/notifications/preferences`| User notification channel preferences | Customer / Staff |
