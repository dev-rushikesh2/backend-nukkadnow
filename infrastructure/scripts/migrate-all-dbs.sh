#!/usr/bin/env bash
set -e

echo "==========================================================="
echo " NukkadNow — Multi-Database Prisma Migration Runner"
echo " Target Cluster: PostgreSQL 16 + PostGIS"
echo "==========================================================="

SERVICES=(
  "identity-service"
  "merchant-service"
  "catalog-service"
  "discovery-service"
  "order-service"
  "fulfillment-service"
  "payment-service"
  "subscription-service"
  "analytics-service"
)

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

for svc in "${SERVICES[@]}"; do
  echo ""
  echo "--> Migrating database for: $svc..."
  cd "$BACKEND_ROOT/apps/$svc"
  if [ -f "prisma/schema.prisma" ]; then
    pnpm prisma migrate deploy
    echo "--> Successfully migrated $svc"
  else
    echo "--> No prisma schema found for $svc"
  fi
done

echo ""
echo "==========================================================="
echo "All Microservice Databases Successfully Migrated!"
echo "==========================================================="
