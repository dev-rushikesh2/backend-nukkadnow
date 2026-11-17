@echo off
title NukkadNow Microservices Fleet
color 0D
echo ==============================================================================
echo   NukkadNow Microservices Fleet - Single-Click Launcher
echo ==============================================================================
echo.

set "SCRIPT_DIR=%~dp0"
cd /d "%SCRIPT_DIR%"

echo [1/3] Checking Node.js environment...
node -v >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Node.js is not installed or not in PATH! Please install Node.js >= 20.
  pause
  exit /b 1
)

echo [2/3] Freeing microservice ports 4000 to 4011...
for /L %%P in (4000,1,4011) do (
  for /f "tokens=5" %%a in ('netstat -aon ^| findstr /r ":%%P\>"') do (
    taskkill /PID %%a /F >nul 2>&1
  )
)

echo [3/3] Launching all 12 microservices + API Gateway...
node infrastructure/scripts/start-microservices.js %*

if errorlevel 1 (
  echo.
  echo [Notice] Server exited with code %errorlevel%.
  pause
)
