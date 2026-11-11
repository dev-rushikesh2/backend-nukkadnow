# ADR 0004: PostgreSQL, Prisma ORM, and PostGIS for Geospatial Queries

## Status
Accepted

## Context
Locality-first commerce requires geospatial discovery (nearby shops, service polygons) and strict relational consistency for money and inventory.

## Decision
- Use PostgreSQL 16 with PostGIS extension.
- Use Prisma ORM for type-safe schema definitions and migrations.
- Integer minor units (`amount_paise`) for all monetary amounts.
