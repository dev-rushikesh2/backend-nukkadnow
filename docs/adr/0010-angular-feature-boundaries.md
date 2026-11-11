# ADR 0010: Frontend and Backend Boundary Discipline

## Status
Accepted

## Context
Prevent accidental leakage of backend entities or shared domain logic into client repositories.

## Decision
- Frontends communicate exclusively through generated OpenAPI typed TypeScript clients.
- Backend packages in `packages/*` contain only platform utilities and contract definitions.
- Monorepo ESLint boundary rules prevent any app from importing internal code from another app.
