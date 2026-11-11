Write-Host "===========================================================" -ForegroundColor Cyan
Write-Host " NukkadNow — Multi-Database Prisma Migration Runner" -ForegroundColor Cyan
Write-Host " Target Cluster: PostgreSQL 16 + PostGIS" -ForegroundColor Cyan
Write-Host "===========================================================" -ForegroundColor Cyan

$services = @(
  "identity-service",
  "merchant-service",
  "catalog-service",
  "discovery-service",
  "order-service",
  "fulfillment-service",
  "payment-service",
  "subscription-service",
  "analytics-service"
)

$backendRoot = (Get-Item $PSScriptRoot).Parent.Parent.FullName
$failed = @()

foreach ($svc in $services) {
  $svcPath = Join-Path $backendRoot "apps\$svc"
  Write-Host "`nMigrating database for: $svc..." -ForegroundColor Yellow

  if (Test-Path "$svcPath\prisma\schema.prisma") {
    Push-Location $svcPath
    try {
      pnpm prisma migrate deploy
      if ($LASTEXITCODE -ne 0) {
        Write-Warning "Migration exit code $LASTEXITCODE for $svc"
        $failed += $svc
      } else {
        Write-Host "Successfully migrated $svc" -ForegroundColor Green
      }
    } catch {
      Write-Error "Failed migrating $svc: $_"
      $failed += $svc
    } finally {
      Pop-Location
    }
  } else {
    Write-Warning "No prisma schema found in $svcPath"
  }
}

Write-Host "`n===========================================================" -ForegroundColor Cyan
if ($failed.Count -eq 0) {
  Write-Host "All 9 Microservice Databases Successfully Migrated!" -ForegroundColor Green
} else {
  Write-Host "Completed with failures in: $($failed -join ', ')" -ForegroundColor Red
}
Write-Host "===========================================================" -ForegroundColor Cyan
