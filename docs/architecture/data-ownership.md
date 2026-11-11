# Data Ownership & Isolation

- No service may directly connect to or query another service database.
- Data synchronization happens via versioned domain events (`@nukkadnow/contracts`).
- Cross-domain reporting queries are satisfied by denormalized read models in `analytics-service` and `discovery-service`.
