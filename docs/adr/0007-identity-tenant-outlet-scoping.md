# ADR 0007: Identity, Tenant, and Outlet Permission Scoping

## Status
Accepted

## Context
Merchants can operate multiple outlets. Staff may be restricted to a single outlet or cashier role. Platform admins operate across tenants.

## Decision
Privileges are scoped by `(userId, tenantId, outletId, role)`. A global role string is forbidden.
All internal command contexts enforce active tenant verification via AsyncLocalStorage.
