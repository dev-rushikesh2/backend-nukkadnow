# Runbook: Database Point-In-Time Recovery (PITR)

## Procedure
1. Halt write traffic at API Gateway.
2. Restore target database from automated WAL archive to candidate replica.
3. Run schema verification script: `pnpm prisma:generate`.
4. Switch database connection string and resume gateway traffic.
