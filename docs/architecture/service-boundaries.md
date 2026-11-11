# Service Boundaries & Team Ownership

| Microservice | Primary Aggregate | Read Models | Outbound Events |
|---|---|---|---|
| `identity-service` | User, Session, Membership | UserProfile | `identity.user.created.v1` |
| `merchant-service` | Merchant, Outlet, Hours | OutletDetail | `merchants.outlet.updated.v1` |
| `catalog-service` | Product, StockBalance | CategoryListing | `catalog.stock.changed.v1` |
| `discovery-service`| OutletSearchDocument | LocalityFeed | None |
| `order-service` | Order, Cart | OrderTimeline | `orders.order.created.v1` |
| `fulfillment-service`| CapacitySlot, PickupToken| QueueEstimate | `fulfillment.order.ready.v1` |
| `payment-service` | PaymentIntent, Payment | PaymentReceipt | `payments.payment.confirmed.v1` |
