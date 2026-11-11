# ADR 0006: API Gateway with Backend-for-Frontend (BFF) Pattern

## Status
Accepted

## Context
Different clients (Customer PWA, Merchant Web, Admin) have divergent payload, security, and composition requirements.

## Decision
Deploy an API Gateway running tailored BFF controllers:
- Customer BFF: Location-aware discovery feeds, composite checkout payloads.
- Merchant BFF: Real-time orders inbox, inventory management, queue snapshots.
- Admin BFF: Strict audit context, elevated permission verification.
- Gateway handles W3C trace context, JWT validation, rate limiting, and WebSocket relays.
