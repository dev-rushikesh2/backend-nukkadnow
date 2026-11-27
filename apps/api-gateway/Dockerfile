FROM node:24-alpine AS base
WORKDIR /app
RUN apk add --no-cache openssl && npm install -g pnpm@9.12.3
COPY .npmrc package.json pnpm-workspace.yaml pnpm-lock.yaml* turbo.json tsconfig.base.json ./
COPY packages ./packages
COPY apps ./apps
RUN pnpm install --frozen-lockfile && pnpm --filter "./packages/*" build

FROM node:24-alpine AS builder
WORKDIR /app
COPY --from=base /app /app
RUN if [ -f "./apps/api-gateway/prisma/schema.prisma" ]; then \
      pnpm --filter @nukkadnow/api-gateway prisma:generate; \
    fi
RUN pnpm --filter @nukkadnow/api-gateway build

FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN apk add --no-cache openssl && addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nestjs
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nestjs:nodejs /app/packages ./packages
COPY --from=builder --chown=nestjs:nodejs /app/apps/api-gateway ./apps/api-gateway
WORKDIR /app/apps/api-gateway
USER nestjs
EXPOSE 4000
CMD ["sh", "-c", "if [ -f prisma/schema.prisma ]; then ./node_modules/.bin/prisma db push --skip-generate || true; fi; if [ -f dist/apps/api-gateway/src/main.js ]; then exec node dist/apps/api-gateway/src/main.js; elif [ -f dist/src/main.js ]; then exec node dist/src/main.js; else exec node dist/main.js; fi"]
