# ==============================================================================
# Multi-Stage Production Dockerfile for NukkadNow Microservices
# Fast and lean builds via topological pnpm compilation and layer caching
# ==============================================================================

FROM node:24-alpine AS base
WORKDIR /app
RUN apk add --no-cache openssl && npm install -g pnpm@9.12.3

# Copy root workspace manifests and engine/npm config
COPY .npmrc package.json pnpm-lock.yaml* pnpm-workspace.yaml turbo.json tsconfig.base.json ./

# Copy shared packages and all workspace service manifests/sources
COPY packages ./packages
COPY apps ./apps

# Install workspace dependencies and compile shared packages ONCE across all 12 services
RUN pnpm install --frozen-lockfile && pnpm --filter "./packages/*" build

# ------------------------------------------------------------------------------
# Builder Stage
# ------------------------------------------------------------------------------
FROM base AS builder
ARG SERVICE_NAME
ARG SERVICE_PORT=4000

# Generate Prisma Client if schema exists for this microservice
RUN if [ -f "./apps/${SERVICE_NAME}/prisma/schema.prisma" ]; then \
      pnpm --filter @nukkadnow/${SERVICE_NAME} prisma:generate; \
    fi

# Build target microservice (shared packages are already compiled in base)
RUN pnpm --filter @nukkadnow/${SERVICE_NAME} build

# ------------------------------------------------------------------------------
# Runner Stage
# ------------------------------------------------------------------------------
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

ARG SERVICE_NAME
ARG SERVICE_PORT=4000
ENV SERVICE_NAME=${SERVICE_NAME}
ENV PORT=${SERVICE_PORT}

RUN apk add --no-cache openssl && addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nestjs

# Copy the monorepo root node_modules and shared packages
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nestjs:nodejs /app/packages ./packages

# Copy the target app directory completely (includes node_modules, dist, prisma, package.json)
COPY --from=builder --chown=nestjs:nodejs /app/apps/${SERVICE_NAME} ./apps/${SERVICE_NAME}

# Run from the application directory so Node resolves its scoped node_modules and symlinks
WORKDIR /app/apps/${SERVICE_NAME}

USER nestjs
EXPOSE ${SERVICE_PORT}

# Run prisma db push without accept-data-loss if schema exists, then start service with fallback to all common dist layouts
CMD ["sh", "-c", "if [ -f prisma/schema.prisma ]; then ./node_modules/.bin/prisma db push --skip-generate || true; fi; if [ -f dist/apps/${SERVICE_NAME}/src/main.js ]; then exec node dist/apps/${SERVICE_NAME}/src/main.js; elif [ -f dist/src/main.js ]; then exec node dist/src/main.js; else exec node dist/main.js; fi"]
