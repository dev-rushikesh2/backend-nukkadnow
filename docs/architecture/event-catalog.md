# Domain Event Catalog

| Domain | Event Type | Routing Key | Invariants |
|---|---|---|---|
| Order | `orders.order.created.v1` | `orders.created` | Immutable pricing snapshot |
| Order | `orders.order.cancelled.v1` | `orders.cancelled` | Triggers compensation |
| Payment | `payments.payment.confirmed.v1`| `payments.confirmed`| Verified PSP signature |
| Payment | `payments.refund.completed.v1` | `payments.refunded` | Append-only ledger |
| Fulfillment | `fulfillment.order.ready.v1` | `fulfillment.ready` | Generates token |
| Catalog | `catalog.stock.changed.v1` | `catalog.stock` | Atomic counter |
