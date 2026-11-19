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

# Ensure prisma folder exists so subsequent COPY does not fail
RUN mkdir -p /app/apps/${SERVICE_NAME}/prisma

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

# Copy runtime node_modules, packages, and build artifacts
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nestjs:nodejs /app/packages ./packages
COPY --from=builder --chown=nestjs:nodejs /app/apps/${SERVICE_NAME}/package.json ./package.json
COPY --from=builder --chown=nestjs:nodejs /app/apps/${SERVICE_NAME}/dist ./dist
COPY --from=builder --chown=nestjs:nodejs /app/apps/${SERVICE_NAME}/prisma ./prisma

USER nestjs
EXPOSE ${SERVICE_PORT}

# Run prisma db push if schema exists, then start service with fallback to all common dist layouts
CMD ["sh", "-c", "if [ -f prisma/schema.prisma ]; then ./node_modules/.bin/prisma db push --skip-generate --accept-data-loss || true; fi; if [ -f dist/apps/${SERVICE_NAME}/src/main.js ]; then exec node dist/apps/${SERVICE_NAME}/src/main.js; elif [ -f dist/src/main.js ]; then exec node dist/src/main.js; else exec node dist/main.js; fi"]
