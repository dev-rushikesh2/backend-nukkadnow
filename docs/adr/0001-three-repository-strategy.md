# ADR 0001: Three Repository Strategy

## Status
Accepted

## Context
NukkadNow requires customer PWA, merchant portal, super admin portal, and backend microservices. We need to decide whether to use a single monorepo, a multi-repo per service, or an application-boundary multi-repo.

## Decision
We maintain exactly three Git repositories:
1. `nukkadnow-frontend` (Customer PWA + Merchant Portal in an Angular/Ionic monorepo)
2. `nukkadnow-backend` (NestJS microservices and shared platform packages in a pnpm monorepo)
3. `nukkadnow-admin` (Restricted Super-Admin Angular application in a separate private repository)

## Consequences
- Strict boundary isolation between high-privilege super-admin code and public portals.
- Backend teams coordinate event and schema contracts in one place.
- Independent release cycles for frontends, admin, and backend.
