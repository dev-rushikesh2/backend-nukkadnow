# Runbook: RabbitMQ Broker Outage Recovery

## Diagnostic Steps
1. Verify RabbitMQ node health (`rabbitmqctl status`).
2. Verify services fall back to accumulating events in `transactional_outbox`.
3. After broker restoration, ensure outbox workers pick up backlogged events with exponential backoff and jitter.
