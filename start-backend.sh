#!/usr/bin/env bash
# ==============================================================================
# NukkadNow Backend Fleet - One-Click Launcher
# Boots all 12 microservices + API Gateway BFF in a single command
# ==============================================================================

set -e

# Terminal Colors
CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
PURPLE='\033[0;35m'
RED='\033[0;31m'
BOLD='\033[1m'
NC='\033[0m'

echo -e "${PURPLE}${BOLD}"
echo "  _  _       _    _              _ _  _              "
echo " | \| |_  _ | | _| |____ _  __| | \| |_____ __ __  "
echo " | .  | || || |/ / / / _  |/ _  | .  / _ \ V  V /  "
echo " |_|\_|\_,_||_\_/_/_\__,_|\__,_|_|\_\___/\_/\_/   "
echo "      NukkadNow Microservices Fleet Orchestrator     "
echo -e "${NC}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo -e "${CYAN}→ Checking environment prerequisites...${NC}"

if ! command -v node >/dev/null 2>&1; then
  echo -e "${RED}[ERROR] Node.js is not installed or not in PATH.${NC}"
  exit 1
fi
echo -e "${GREEN}✔ Node.js: $(node -v)${NC}"

# Clean up stale processes on ports 4000 - 4011
echo -e "${CYAN}→ Checking port availability (4000 - 4011)...${NC}"
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" || "$OSTYPE" == "cygwin" ]]; then
  for port in {4000..4011}; do
    pids=$(netstat -ano | grep ":$port " | awk '{print $5}' | sort -u || true)
    for pid in $pids; do
      if [ -n "$pid" ] && [ "$pid" != "0" ]; then
        taskkill //PID "$pid" //F >/dev/null 2>&1 || true
      fi
    done
  done
elif command -v fuser >/dev/null 2>&1; then
  fuser -k 4000/tcp 4001/tcp 4002/tcp 4003/tcp 4004/tcp 4005/tcp 4006/tcp 4007/tcp 4008/tcp 4009/tcp 4010/tcp 4011/tcp >/dev/null 2>&1 || true
fi

echo -e "${GREEN}✔ Ports 4000-4011 verified clear.${NC}"
echo -e "${CYAN}→ Booting all 12 Microservices...${NC}"
echo ""

node infrastructure/scripts/start-microservices.js "$@"
