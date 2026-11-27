FROM node:24-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm@9.12.3
COPY .npmrc package.json pnpm-workspace.yaml pnpm-lock.yaml* turbo.json tsconfig.base.json ./
COPY packages ./packages
COPY apps ./apps
RUN pnpm install --frozen-lockfile
RUN if [ -f "./apps/order-service/prisma/schema.prisma" ]; then \
      pnpm --filter @nukkadnow/order-service prisma:generate; \
    fi
RUN pnpm --filter @nukkadnow/order-service... build

FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nestjs
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nestjs:nodejs /app/packages ./packages
COPY --from=builder --chown=nestjs:nodejs /app/apps/order-service ./apps/order-service
WORKDIR /app/apps/order-service
USER nestjs
EXPOSE 4005
CMD ["sh", "-c", "if [ -f dist/apps/order-service/src/main.js ]; then exec node dist/apps/order-service/src/main.js; elif [ -f dist/src/main.js ]; then exec node dist/src/main.js; else exec node dist/main.js; fi"]
