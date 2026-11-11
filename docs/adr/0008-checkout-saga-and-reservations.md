# ADR 0008: Checkout Saga and Atomic Inventory/Slot Reservations

## Status
Accepted

## Context
Concurrent customers may attempt to purchase the same last inventory item or claim the same pickup slot.

## Decision
1. Customer initiates checkout.
2. Orders service requests atomic stock reservation with TTL (e.g. 10 minutes) from Catalog.
3. Orders service requests pickup capacity reservation with TTL from Fulfillment.
4. Orders service creates Payment Intent.
5. If payment fails or times out, compensating transactions release reservations.
6. Upon payment confirmation, reservations are committed.
