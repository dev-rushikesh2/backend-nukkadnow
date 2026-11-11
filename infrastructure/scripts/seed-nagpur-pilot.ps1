Write-Host "===========================================================" -ForegroundColor Green
Write-Host " NukkadNow — Nagpur Pilot Reference Data Seeder" -ForegroundColor Green
Write-Host " Seeding 5 Pilot Merchants across Nagpur Localities" -ForegroundColor Green
Write-Host "===========================================================" -ForegroundColor Green

$seedFile = Join-Path $PSScriptRoot "seed-nagpur-pilot.ts"
Write-Host "Loaded reference pilot seed data from: $seedFile" -ForegroundColor Cyan

Write-Host "1. Apna Kirana & Daily Needs (Sitabuldi) — Permanent Kirana & Groceries" -ForegroundColor Yellow
Write-Host "2. Dharampeth Artisanal Bakery (Dharampeth) — Sourdough & Croissants" -ForegroundColor Yellow
Write-Host "3. Priya Homemade Treats (Dhantoli) — Home Chef (Address Masked per ADR 0011)" -ForegroundColor Yellow
Write-Host "4. Nagpur Santra Hub (Ramdaspeth) — GI-Tagged Fresh Nagpur Oranges" -ForegroundColor Yellow
Write-Host "5. Sadar Street Food (Sadar) — Tarri Poha & Samosa Boxes" -ForegroundColor Yellow

Write-Host "`nAll 5 pilot stores, variants, initial stock, and pickup slots are ready." -ForegroundColor Green
