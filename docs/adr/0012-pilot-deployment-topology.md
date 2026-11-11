# ADR 0012: Pilot Deployment Topology (Nagpur Launch)

## Status
Accepted

## Context
Deploying 12 individual containers plus infrastructure on day one for a pilot in Nagpur can induce excessive operational overhead.

## Decision
- Pilot topology: API Gateway + Identity + Merchant/Catalog + Order/Fulfillment + Payments + Notifications deployed as 6-7 distinct container units.
- Clean Architecture boundaries are maintained strictly in code so physical splitting is a configuration change, not a code rewrite.
