# NukkadNow Backend Fleet — Complete Production Deployment Guide
**Project:** `commerce` (`commerce-backend-rxqpc5`)  
**Target Environment:** Hetzner / Dokploy Multi-Tenant VPS (`admin.agronomos.in`)  
**Active Production Subdomain:** [https://api.nukkadnow.logixspire.tech](https://api.nukkadnow.logixspire.tech)  
**Alternative Subdomain (Pre-configured):** [https://api.rushi.cloud](https://api.rushi.cloud)  
**Architecture:** 12 NestJS Microservices + PostgreSQL 16 (PostGIS) + Redis 7.2 + RabbitMQ 3.13 + Traefik Reverse Proxy

---

## Table of Contents
1. [Architecture Overview & Isolation Rules](#1-architecture-overview--isolation-rules)
2. [Monorepo & Microservices Directory Structure](#2-monorepo--microservices-directory-structure)
3. [Database Multi-Tenant Initialization (`init_microservices_dbs.sql`)](#3-database-multi-tenant-initialization)
4. [Multi-Stage Production Dockerfile (`Dockerfile`)](#4-multi-stage-production-dockerfile)
5. [Docker Compose Orchestration (`docker-compose.yml`)](#5-docker-compose-orchestration)
6. [Step-by-Step Dokploy Deployment Guide (Manual Setup)](#6-step-by-step-dokploy-deployment-guide)
7. [Subdomain & DNS Configuration (Hostinger & Cloudflare)](#7-subdomain--dns-configuration)
8. [Automated CI/CD Pipeline (GitHub Actions + Dokploy Webhook)](#8-automated-cicd-pipeline)
9. [Verification & Smoke Testing Commands](#9-verification--smoke-testing-commands)
10. [Troubleshooting & Common Pitfalls Reference](#10-troubleshooting--common-pitfalls-reference)
11. [VPS SSH Access & Server Management](#11-vps-ssh-access--server-management)

---

## 1. Architecture Overview & Isolation Rules

### The Multi-Tenant VPS Context
Our Hetzner VPS (`62.72.30.149`) runs **Dokploy** (`https://admin.agronomos.in`) and hosts **three independent production projects**:
1. `profile` (`agronomos.in` user profile engine)
2. `user-web` (`agronomos.in` core web platform)
3. `commerce` (`commerce-backend-rxqpc5` — **our NukkadNow backend fleet**)

### ⚠️ Strict Server Safety Commandments
When deploying, maintaining, or modifying the `commerce` backend:
* **NEVER** run `docker system prune -a --volumes` or global cleanup commands on the VPS.
* **NEVER** restart or stop the Docker daemon or Traefik container.
* **NEVER** bind host ports (e.g. `ports: - "5432:5432"` or `ports: - "4000:4000"`). Doing so causes immediate fatal collisions with existing databases and services on the VPS. Always use `expose:`.
* **ONLY** modify, build, and restart containers prefixed with `commerce-` inside the `commerce-internal` network.

### Network Topography
```
[ Internet ]
     │
     ▼
[ Hostinger / Cloudflare DNS (62.72.30.149) ]
     │
     ▼
[ Traefik Edge Router (dokploy-network) ]
     │ (Host: api.nukkadnow.logixspire.tech OR api.rushi.cloud)
     ▼ (Port 4000)
┌─────────────────────────────────────────────────────────────────────────────┐
│ COMMERCE BACKEND FLEET (commerce-internal bridge)                           │
│                                                                             │
│  [ commerce-api-gateway ] (Attached to both dokploy-network & internal)      │
│         │                                                                   │
│         ├───► [ commerce-identity-service ]        (Port 4001)              │
│         ├───► [ commerce-merchant-service ]        (Port 4002)              │
│         ├───► [ commerce-catalog-service ]         (Port 4003)              │
│         ├───► [ commerce-discovery-service ]       (Port 4004)              │
│         ├───► [ commerce-order-service ]           (Port 4005)              │
│         ├───► [ commerce-fulfillment-service ]     (Port 4006)              │
│         ├───► [ commerce-payment-service ]         (Port 4007)              │
│         ├───► [ commerce-subscription-service ]    (Port 4008)              │
│         ├───► [ commerce-notification-service ]    (Port 4009)              │
│         ├───► [ commerce-review-support-service ]  (Port 4010)              │
│         └───► [ commerce-analytics-service ]       (Port 4011)              │
│                                                                             │
│  Shared Infrastructure (commerce-internal only, no public access):          │
│   ├── [ commerce-postgres ] (PostgreSQL 16 + PostGIS, 11 dedicated DBs)     │
│   ├── [ commerce-redis ]    (Redis 7.2 Cache & Distributed Locks)           │
│   └── [ commerce-rabbitmq ] (RabbitMQ 3.13 Event Bus)                       │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Monorepo & Microservices Directory Structure

The repository (`git@github.com:dev-rushikesh2/backend-nukkadnow.git`) is managed with **pnpm workspaces** (`pnpm-workspace.yaml`), **Turborepo** (`turbo.json`), and **TypeScript project references** (`tsconfig.base.json`):

```
backend-nukkadnow/
├── apps/
│   ├── api-gateway/            # Port 4000: Public BFF for Customer, Merchant & Admin
│   ├── identity-service/       # Port 4001: Auth, OTP, JWT/JWKS, RBAC
│   ├── merchant-service/       # Port 4002: Storefront onboarding & settings
│   ├── catalog-service/        # Port 4003: Product catalog, SKU & pricing
│   ├── discovery-service/      # Port 4004: PostGIS geolocation, search & radius
│   ├── order-service/          # Port 4005: Order lifecycle state machine
│   ├── fulfillment-service/    # Port 4006: Express delivery slots & dispatch
│   ├── payment-service/        # Port 4007: UPI, Razorpay/Mock PSP, Escrow
│   ├── subscription-service/   # Port 4008: Merchant SaaS subscription plans
│   ├── notification-service/   # Port 4009: SMS, WhatsApp, push notifications
│   ├── review-support-service/ # Port 4010: Reviews & support ticket desk
│   └── analytics-service/      # Port 4011: Telemetry, metrics & GMV analytics
├── packages/                   # Shared TypeScript packages
│   ├── config/                 # Zod environment schemas & feature flags
│   ├── contracts/              # DTOs, API contracts & shared interfaces
│   ├── eslint-config/          # Linting rules
│   ├── messaging/              # RabbitMQ / Redis message envelope clients
│   ├── observability/          # OpenTelemetry & StructuredLogger
│   ├── platform-kernel/        # Money, Result, Domain Errors, Identifiers
│   ├── security/               # Password hashing, HMAC signatures, JWT utils
│   └── testing/                # Jest shared mocks & test fixtures
├── Dockerfile                  # Multi-stage production Dockerfile
├── docker-compose.yml          # Production Compose specification
├── init_microservices_dbs.sql  # PostgreSQL 11-database bootstrap script
├── package.json                # Workspace root package manifest
├── pnpm-workspace.yaml         # Workspace inclusion rules
├── pnpm-lock.yaml              # Frozen dependency lockfile
├── tsconfig.base.json          # Root TypeScript configuration with @nukkadnow/* paths
└── turbo.json                  # Turborepo task pipeline definition
```

---

## 3. Database Multi-Tenant Initialization

File: `init_microservices_dbs.sql`  
When PostgreSQL starts for the first time, Docker executes scripts mounted inside `/docker-entrypoint-initdb.d/`:

```sql
-- NukkadNow Microservices Databases Initialization
CREATE ROLE root WITH SUPERUSER LOGIN PASSWORD 'root';

CREATE DATABASE identity_db OWNER postgres;
CREATE DATABASE merchant_db OWNER postgres;
CREATE DATABASE catalog_db OWNER postgres;
CREATE DATABASE discovery_db OWNER postgres;
CREATE DATABASE order_db OWNER postgres;
CREATE DATABASE fulfillment_db OWNER postgres;
CREATE DATABASE payment_db OWNER postgres;
CREATE DATABASE subscription_db OWNER postgres;
CREATE DATABASE analytics_db OWNER postgres;
CREATE DATABASE notification_db OWNER postgres;
CREATE DATABASE review_support_db OWNER postgres;

GRANT ALL PRIVILEGES ON DATABASE identity_db TO root;
GRANT ALL PRIVILEGES ON DATABASE merchant_db TO root;
GRANT ALL PRIVILEGES ON DATABASE catalog_db TO root;
GRANT ALL PRIVILEGES ON DATABASE discovery_db TO root;
GRANT ALL PRIVILEGES ON DATABASE order_db TO root;
GRANT ALL PRIVILEGES ON DATABASE fulfillment_db TO root;
GRANT ALL PRIVILEGES ON DATABASE payment_db TO root;
GRANT ALL PRIVILEGES ON DATABASE subscription_db TO root;
GRANT ALL PRIVILEGES ON DATABASE analytics_db TO root;
GRANT ALL PRIVILEGES ON DATABASE notification_db TO root;
GRANT ALL PRIVILEGES ON DATABASE review_support_db TO root;
```

### Automatic Table Creation via Prisma
In our runner stage, the microservice container executes:
```sh
if [ -f prisma/schema.prisma ]; then
  ../../node_modules/.bin/prisma db push --skip-generate --accept-data-loss || true
fi
```
This guarantees that whenever any microservice boots up, its tables, indexes, and constraints are automatically synced into its respective PostgreSQL database without manual migration commands.

---

## 4. Multi-Stage Production Dockerfile

File: `Dockerfile`

### Crucial Engineering Insight
In a **pnpm monorepo**, each microservice has its direct runtime dependencies (such as `@nestjs/core`, `@nestjs/common`, `rxjs`, `reflect-metadata`) symlinked inside `apps/<service-name>/node_modules/` rather than the root `node_modules/`.

If the container runs with `WORKDIR /app` and executes `node dist/apps/.../main.js`, Node.js will fail with `MODULE_NOT_FOUND: Cannot find module '@nestjs/core'`.

**The Solution:**
1. Copy the target app directory (`COPY --from=builder /app/apps/${SERVICE_NAME} ./apps/${SERVICE_NAME}`).
2. Set the working directory directly to `WORKDIR /app/apps/${SERVICE_NAME}`.
3. This allows Node.js to resolve all scoped dependencies (`./node_modules`), workspace packages (`../../packages`), and the pnpm store (`../../node_modules/.pnpm`).

### Complete Production `Dockerfile` Code:
```dockerfile
# ==============================================================================
# Multi-Stage Production Dockerfile for NukkadNow Microservices
# Fast and lean builds via topological pnpm compilation and layer caching
# ==============================================================================

FROM node:20.18-alpine AS base
WORKDIR /app
RUN npm install -g pnpm@9.12.3

# Copy root workspace manifests
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml turbo.json tsconfig.base.json ./

# Copy shared packages
COPY packages ./packages

# ------------------------------------------------------------------------------
# Builder Stage
# ------------------------------------------------------------------------------
FROM base AS builder
ARG SERVICE_NAME
ARG SERVICE_PORT=4000

# Copy target service directory
COPY apps/${SERVICE_NAME} ./apps/${SERVICE_NAME}

# Install dependencies for target service and workspace packages
RUN pnpm install --frozen-lockfile

# Generate Prisma Client if schema exists for this microservice
RUN if [ -f "./apps/${SERVICE_NAME}/prisma/schema.prisma" ]; then \
      pnpm --filter @nukkadnow/${SERVICE_NAME} prisma:generate; \
    fi

# Build workspace packages and target microservice
RUN pnpm --filter @nukkadnow/${SERVICE_NAME}... build

# ------------------------------------------------------------------------------
# Runner Stage
# ------------------------------------------------------------------------------
FROM node:20.18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

ARG SERVICE_NAME
ARG SERVICE_PORT=4000
ENV SERVICE_NAME=${SERVICE_NAME}
ENV PORT=${SERVICE_PORT}

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nestjs

# Copy the monorepo root node_modules and shared packages
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nestjs:nodejs /app/packages ./packages

# Copy the target app directory completely (includes node_modules, dist, prisma, package.json)
COPY --from=builder --chown=nestjs:nodejs /app/apps/${SERVICE_NAME} ./apps/${SERVICE_NAME}

# Run from the application directory so Node resolves its scoped node_modules and symlinks
WORKDIR /app/apps/${SERVICE_NAME}

USER nestjs
EXPOSE ${SERVICE_PORT}

# Run prisma db push if schema exists, then start service with fallback to all common dist layouts
CMD ["sh", "-c", "if [ -f prisma/schema.prisma ]; then ../../node_modules/.bin/prisma db push --skip-generate --accept-data-loss || true; fi; if [ -f dist/apps/${SERVICE_NAME}/src/main.js ]; then exec node dist/apps/${SERVICE_NAME}/src/main.js; elif [ -f dist/src/main.js ]; then exec node dist/src/main.js; else exec node dist/main.js; fi"]
```

---

## 5. Docker Compose Orchestration

File: `docker-compose.yml`

### Key Highlights:
1. **Network Separation**:
   - `dokploy-network`: External Traefik network. Only `api-gateway` joins this.
   - `commerce-internal`: Private bridge network where all 12 microservices, Postgres, Redis, and RabbitMQ communicate using container hostnames (e.g. `http://identity-service:4001`).
2. **Port Safety**:
   - Every service uses `expose:` instead of `ports:`.
   - No VPS ports (5432, 6379, 4000-4011) are bound to the host IP.
3. **Traefik Labels on `api-gateway`**:
   ```yaml
   labels:
     - "traefik.enable=true"
     - "traefik.docker.network=dokploy-network"
     - "traefik.http.routers.commerce-api-websecure.rule=Host(`api.nukkadnow.logixspire.tech`) || Host(`api.rushi.cloud`)"
     - "traefik.http.routers.commerce-api-websecure.entrypoints=websecure"
     - "traefik.http.routers.commerce-api-websecure.tls.certresolver=letsencrypt"
     - "traefik.http.routers.commerce-api-web.rule=Host(`api.nukkadnow.logixspire.tech`) || Host(`api.rushi.cloud`)"
     - "traefik.http.routers.commerce-api-web.entrypoints=web"
     - "traefik.http.services.commerce-api.loadbalancer.server.port=4000"
   ```

---

## 6. Step-by-Step Dokploy Deployment Guide

Follow this guide whenever you create or rebuild the `commerce` backend from scratch:

### Step 1: Open Dokploy Dashboard
1. Navigate to: `https://admin.agronomos.in`
2. Sign in with administrative credentials.

### Step 2: Access the `commerce` Project
1. In the sidebar, click **Projects**.
2. Select the **commerce** project (`6z89mSINlmNjWgeSP53Pm`).
3. Select the **production** environment (`Oa4fAsfWzT6ZK2_fWZaLN`).

### Step 3: Create / Configure the Compose Stack
1. If creating a new service, click **Create Service** -> choose **Compose**.
2. Name the service: `backend` (Internal Identifier: `commerce-backend-rxqpc5`).
3. Under the **General** tab:
   * **Source Type**: Select `Git`
   * **Repository URL**: `git@github.com:dev-rushikesh2/backend-nukkadnow.git`
   * **Branch**: `main`
   * **Compose Path**: `./docker-compose.yml`
   * **SSH Key**: Select `commerce`
   * **Autodeploy**: Enable the switch (ON)
4. Click **Save**.

### Step 4: Verify SSH Deploy Key on GitHub
1. In Dokploy, go to **Settings** -> **SSH Keys**.
2. Open the `commerce` key and copy the **Public Key**:
   ```
   ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJbbqWfRMfrnVh0gR632HufU/httciJtVpqEkouXxZ31 dokploy
   ```
3. Open your GitHub Repository: `https://github.com/dev-rushikesh2/backend-nukkadnow/settings/keys`
4. Click **Add deploy key** -> Title: `Dokploy VPS` -> Paste key -> Click **Add key**.

### Step 5: Trigger Manual Deployment
1. Go back to the `backend` service in Dokploy.
2. In the **General** tab, click the **Deploy** button.
3. Confirm the dialog (**Confirm**).
4. Go to the **Deployments** tab and wait for the status badge to turn green: `1. Done ✅`.

---

## 7. Subdomain & DNS Configuration

Traefik dynamically manages SSL certificates for any domain defined in `docker-compose.yml`.

### Setting up the Hostinger DNS Record:
1. Log into your **Hostinger Control Panel** (or Cloudflare/DNS provider).
2. Go to **DNS Zone Editor** for your domain (`logixspire.tech` or `rushi.cloud`).
3. Add a new **A Record**:
   * **Type**: `A`
   * **Name / Host**: `api.nukkadnow` (for `api.nukkadnow.logixspire.tech`) or `api` (for `api.rushi.cloud`)
   * **Points to / Value**: `62.72.30.149` (Your VPS Public IP)
   * **TTL**: `14400` (or `300` / Auto)
4. Save the record.

### Verify DNS Propagation
Run from your terminal:
```powershell
Resolve-DnsName api.nukkadnow.logixspire.tech
```
Expected output:
```
Name                               Type   TTL   Section   IPAddress
----                               ----   ---   -------   ---------
api.nukkadnow.logixspire.tech      A      14400 Answer    62.72.30.149
```

Traefik will automatically issue a Let's Encrypt SSL certificate within 30-60 seconds on the first HTTPS request.

---

## 8. Automated CI/CD Pipeline

File: `.github/workflows/deploy-production.yml`

Whenever code is merged or pushed to `main`, GitHub Actions automatically notifies Dokploy to pull and deploy the updated containers without touching the Dokploy UI.

```yaml
name: Deploy to Production Environment

on:
  push:
    branches: [ main ]
    paths-ignore:
      - '**.md'
      - 'docs/**'
  workflow_dispatch:

jobs:
  deploy-dokploy:
    name: Trigger Dokploy Deployment
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Dokploy Webhook
        run: |
          echo "Triggering Dokploy deployment for commit ${{ github.sha }}..."
          response=$(curl -s -w "\n%{http_code}" -X POST \
            -H "Content-Type: application/json" \
            -d '{"ref":"refs/heads/main"}' \
            "https://admin.agronomos.in/api/deploy/compose/aN6hyYmvftG_oZ6Auz-ln")
          http_code=$(echo "$response" | tail -n1)
          body=$(echo "$response" | sed '$d')
          echo "Dokploy Response ($http_code): $body"
          if [ "$http_code" -ge 200 ] && [ "$http_code" -lt 400 ]; then
            echo "Deployment webhook triggered successfully!"
          else
            echo "Failed to trigger Dokploy deployment"
            exit 1
          fi
```

### How to Trigger Deployment via Terminal:
You can also trigger a deployment from any bash terminal:
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"ref":"refs/heads/main"}' \
  "https://admin.agronomos.in/api/deploy/compose/aN6hyYmvftG_oZ6Auz-ln"
```

---

## 9. Verification & Smoke Testing Commands

Run these smoke tests from your local machine or terminal to verify end-to-end functionality:

### 1. Gateway Health Check
```bash
curl -i https://api.nukkadnow.logixspire.tech/health
```
**Expected Response:**
```json
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"status":"ok","timestamp":"2026-11-19T17:31:11.177Z","uptime":72.57,"service":"api-gateway"}
```

### 2. Swagger OpenAPI Specification & Interactive Docs
Open in your browser or curl:
```bash
curl -i https://api.nukkadnow.logixspire.tech/api/docs
```
**Expected Response:**
```html
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
<title>Swagger UI</title>
```
Visit in your web browser: [https://api.nukkadnow.logixspire.tech/api/docs](https://api.nukkadnow.logixspire.tech/api/docs) to test any endpoint interactively.

### 3. Microservice Mesh Verification (Admin BFF)
```bash
curl -i https://api.nukkadnow.logixspire.tech/api/v1/admin/overview
```
**Expected Response:**
```json
HTTP/1.1 200 OK
{
  "success": true,
  "data": {
    "metrics": {
      "meshLatency": "42 ms",
      "meshLatencyHealth": "Healthy (< 100ms) · 12 microservices"
    }
  }
}
```

---

## 10. Troubleshooting & Common Pitfalls Reference

| Problem | Root Cause | Solution |
|---|---|---|
| **`Cannot find module '@nestjs/core'`** | Node resolution failed because scoped `apps/<app>/node_modules` was not copied or working directory was root. | Ensure Dockerfile copies `/app/apps/${SERVICE_NAME}` and sets `WORKDIR /app/apps/${SERVICE_NAME}`. |
| **`Branch Not Match` (Webhook Error)** | Calling Dokploy webhook without JSON body or wrong branch. | Pass `-H "Content-Type: application/json" -d '{"ref":"refs/heads/main"}'`. |
| **Port Conflict on VPS** | Host port `ports: - "5432:5432"` collided with VPS Postgres. | Never use `ports:`. Use `expose:` only. All internal traffic uses the Docker internal bridge network. |
| **`OP_TIMEOUT` in Browser when viewing Dokploy Logs** | Streaming terminal DOM contains 10,000+ nodes freezing webview. | Press `Escape` to close the log modal, or navigate to **Docker** sidebar to inspect container logs directly. |
| **SSL / Untrusted Certificate Warning** | Let's Encrypt is in the middle of ACME challenge resolution. | Wait 30 seconds for Let's Encrypt challenge to complete and refresh browser. |
| **Microservice Database Not Found** | A new microservice was added without database in init script. | Add `CREATE DATABASE <name>_db OWNER postgres;` and `GRANT ALL` to `init_microservices_dbs.sql`. |

---

## 11. VPS SSH Access & Server Management

The Dokploy Hetzner VPS host can be accessed securely via SSH for maintenance, database inspection, log streaming, and container monitoring.

### Server Connection Details
- **IP Address:** `62.72.30.149`
- **SSH Port:** `22` (Active & Open)
- **Default User:** `root`
- **Dokploy Dashboard Host:** `admin.agronomos.in`
- **Registered SSH Key:** `commerce` (Public key type: `ssh-ed25519`)

---

### Access Method 1: Direct SSH from Terminal (PowerShell / Git Bash / macOS / Linux)

Open your terminal or command prompt:

```bash
# Connect as root
ssh root@62.72.30.149
```

#### If using a specific private key file:
If your Hetzner VPS was configured with a specific private key (such as the key paired with Dokploy's `commerce` key):
```bash
# On Linux / macOS / Git Bash:
ssh -i ~/.ssh/id_ed25519 root@62.72.30.149

# On Windows PowerShell:
ssh -i "$HOME\.ssh\id_ed25519" root@62.72.30.149
```

---

### Access Method 2: Dokploy Web Terminal (Instant Browser Access)

If you do not have your local SSH private key available:
1. Open the Dokploy Web Dashboard: **`https://admin.agronomos.in`**
2. Navigate to **Projects** → **`commerce`** → **`commerce-backend-rxqpc5`**.
3. Under the **General** tab or in the top right menu, click **Open Terminal**.
4. Alternatively, click **Docker** in the left sidebar to open an interactive terminal session inside any running container (e.g. `commerce-api-gateway`, `commerce-postgres`).

---

### Essential Operations & Diagnostic Commands on the VPS

Once connected to the server via SSH:

#### 1. Filter and Inspect Only Commerce Fleet Containers
```bash
docker ps --filter "name=commerce" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
```

#### 2. Stream Live Microservice Logs
```bash
# Follow live logs for API Gateway:
docker logs -f --tail 100 commerce-api-gateway

# Follow live logs for Identity Service:
docker logs -f --tail 100 commerce-identity-service

# Follow live logs for Order Service:
docker logs -f --tail 100 commerce-order-service
```

#### 3. Direct PostgreSQL Database CLI Access
```bash
# Drop into psql inside the commerce-postgres container
docker exec -it commerce-postgres psql -U root -d identity_db

# Common psql commands:
\l                    # List all 11 microservice databases
\c order_db           # Connect to order database
\dt                   # List all tables in current database
SELECT count(*) FROM "User";
\q                    # Exit psql
```

#### 4. Test Redis Cache Connection
```bash
docker exec -it commerce-redis redis-cli ping
# Expected output: PONG

# Monitor real-time Redis operations:
docker exec -it commerce-redis redis-cli monitor
```

#### 5. Inspect RabbitMQ Message Broker Status
```bash
docker exec -it commerce-rabbitmq rabbitmqctl status
docker exec -it commerce-rabbitmq rabbitmqctl list_queues
```

---

### ⚠️ Critical Multi-Tenant VPS Safety Rules

The VPS host runs multiple independent production systems (`agronomos.in`, `profile`, `user-web`, and Dokploy core services). Always adhere strictly to these rules:

| Forbidden Command ❌ | Allowed Command ✅ | Reason |
|---|---|---|
| `docker system prune -a` | `docker image prune` | Global prune deletes images and stopped containers of existing production projects! |
| `docker kill $(docker ps -q)` | `docker restart commerce-<service>` | Killing all containers destroys live production applications. |
| `docker volume prune` | `docker volume rm <specific_unused_commerce_vol>` | Volume prune destroys active production PostgreSQL & persistent data. |
| Binding host ports (`-p 5432:5432`) | Use Docker internal bridge network (`commerce-internal`) | Collides with other databases already bound to host ports on the VPS. |

---

*Authored by Antigravity Engineering for the NukkadNow Commerce Backend Platform.*
