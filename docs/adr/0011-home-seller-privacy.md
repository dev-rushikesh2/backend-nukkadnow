# ADR 0011: Home Seller & Artisan Privacy Protection

## Status
Accepted

## Context
Home bakers, home chefs, and artisans operate from private residences. Exposing precise residential addresses publicly poses privacy and safety risks.

## Decision
- Outlets have an `isAddressPublic` flag and `sellerMode`.
- For home sellers, public discovery feeds expose only the broad locality / neighborhood and approximate pickup radius.
- The exact physical address is only disclosed on confirmed paid orders or restricted to designated community pickup points.
