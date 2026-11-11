# Runbook: Payment Webhook Failure & Recovery

## Symptom
PSP confirms payment, but customer order remains in `PENDING_PAYMENT` state.

## Diagnostic Steps
1. Inspect `payment_service` logs for `webhook_inbox` errors.
2. Query `SELECT * FROM webhook_inbox WHERE is_processed = false;` in `payment_db`.
3. Check dead-letter queues on RabbitMQ `payments.dlq`.

## Mitigation
1. Re-trigger webhook replay from PSP merchant dashboard for specific `providerPaymentId`.
2. Execute manual reconciliation CLI: `pnpm --filter @nukkadnow/payment-service run reconcile:order <orderId>`.
3. Verify event propagation to `order-service`.
