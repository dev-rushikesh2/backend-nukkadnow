# ADR 0009: Payment Webhook Verification and Reconciliation Ledgers

## Status
Accepted

## Context
Client redirects are untrusted; payment confirmation must come from cryptographic PSP webhooks with replay protection.

## Decision
- Webhooks verify cryptographic HMAC signatures before storing raw payloads in `webhook_inbox`.
- Orders are only marked `PAID` via webhook or verified server-to-server query.
- Daily reconciliation job matches internal payment records with PSP settlement reports.
