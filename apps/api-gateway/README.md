# API Gateway & BFF Microservice

The API Gateway is the single public entry point for all client applications:
- **Customer PWA BFF**: Aggregates nearby merchant feed, catalog browsing, cart operations.
- **Merchant Portal BFF**: Cockpit dashboard, inventory updates, live order inbox.
- **Admin BFF**: Verification queues, audit telemetry, privileged platform management.
- **Realtime Gateway**: WebSockets for live order token status and outlet queue updates.
