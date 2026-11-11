# ADR 0003: Service Data Ownership & Database per Service

## Status
Accepted

## Context
Monolithic databases invite cross-domain table joins and tight coupling that prevent independent scaling and deployment.

## Decision
- Each microservice strictly owns its data schema.
- No direct cross-service database access or foreign keys across service boundaries.
- Pilot compromise: 9 logically isolated databases with dedicated credentials on a single PostgreSQL cluster, transitioning to isolated instances upon scale.
