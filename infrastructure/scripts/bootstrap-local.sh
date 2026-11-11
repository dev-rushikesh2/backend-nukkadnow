#!/bin/bash
set -e
echo "Bootstrapping NukkadNow Local Environment..."
docker compose -f infrastructure/docker/compose.local.yml up -d
echo "Waiting for services to become healthy..."
sleep 5
echo "NukkadNow infrastructure is ready."
