# Runbook: Merchant Order Backlog Recovery

## Diagnostic Steps
1. Check `fulfillment_service` queue wait time metrics.
2. Check if merchant outlet status is paused or kitchen capacity reached.
3. Automatically throttle incoming new orders by extending estimated wait time or switching outlet to busy mode.
