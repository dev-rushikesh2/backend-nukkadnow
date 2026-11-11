$services = @(
  "identity-service",
  "merchant-service",
  "catalog-service",
  "discovery-service",
  "order-service",
  "fulfillment-service",
  "payment-service",
  "subscription-service",
  "notification-service",
  "review-support-service",
  "analytics-service"
)

$backendRoot = (Get-Item $PSScriptRoot).Parent.Parent.FullName
Write-Host "Syncing all Prisma database schemas to PostgreSQL..." -ForegroundColor Cyan

foreach ($svc in $services) {
  $svcPath = Join-Path $backendRoot "apps\$svc"
  Write-Host "`n--- Syncing $svc ---" -ForegroundColor Yellow
  Push-Location $svcPath
  try {
    pnpm exec prisma db push --skip-generate --accept-data-loss
  } finally {
    Pop-Location
  }
}
Write-Host "`nAll schemas synced to PostgreSQL!" -ForegroundColor Green
