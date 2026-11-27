FROM node:24-alpine AS base
WORKDIR /app
RUN apk add --no-cache openssl && npm install -g pnpm@9.12.3
COPY .npmrc package.json pnpm-workspace.yaml pnpm-lock.yaml* turbo.json tsconfig.base.json nest-cli.json* ./
COPY packages ./packages
COPY apps ./apps
RUN pnpm install --frozen-lockfile && pnpm --filter "./packages/*" build

FROM base AS builder
RUN if [ -f "./apps/merchant-service/prisma/schema.prisma" ]; then \
      pnpm --filter @nukkadnow/merchant-service prisma:generate; \
    fi
RUN pnpm --filter @nukkadnow/merchant-service build

FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN apk add --no-cache openssl && addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nestjs
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nestjs:nodejs /app/packages ./packages
COPY --from=builder --chown=nestjs:nodejs /app/apps/merchant-service ./apps/merchant-service
WORKDIR /app/apps/merchant-service
USER nestjs
EXPOSE 4002
CMD ["sh", "-c", "if [ -f prisma/schema.prisma ]; then ./node_modules/.bin/prisma db push --skip-generate || true; fi; if [ -f dist/apps/merchant-service/src/main.js ]; then exec node dist/apps/merchant-service/src/main.js; elif [ -f dist/src/main.js ]; then exec node dist/src/main.js; else exec node dist/main.js; fi"]
