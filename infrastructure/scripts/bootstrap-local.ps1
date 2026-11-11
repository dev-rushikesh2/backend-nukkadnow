Write-Host "Bootstrapping NukkadNow Local Environment..." -ForegroundColor Green
docker compose -f infrastructure/docker/compose.local.yml up -d
Start-Sleep -Seconds 5
Write-Host "NukkadNow infrastructure is ready." -ForegroundColor Green
