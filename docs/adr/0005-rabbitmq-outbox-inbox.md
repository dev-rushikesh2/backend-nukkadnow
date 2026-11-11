# ADR 0005: RabbitMQ with Transactional Outbox and Idempotent Inbox

## Status
Accepted

## Context
Cross-service asynchronous communication must tolerate transient broker downtime without losing business events or creating duplicates.

## Decision
- Use RabbitMQ for durable topic exchanges and dead-letter queues.
- Outgoing events are written to a `transactional_outbox` table within the same database transaction as the business state change.
- Incoming events pass through an `inbox` table checking `eventId` for idempotent processing.
