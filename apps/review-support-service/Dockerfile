FROM node:24-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm@9.12.3
COPY .npmrc package.json pnpm-workspace.yaml pnpm-lock.yaml* turbo.json tsconfig.base.json ./
COPY packages ./packages
COPY apps ./apps
RUN pnpm install --frozen-lockfile
RUN if [ -f "./apps/review-support-service/prisma/schema.prisma" ]; then \
      pnpm --filter @nukkadnow/review-support-service prisma:generate; \
    fi
RUN pnpm --filter @nukkadnow/review-support-service... build

FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nestjs
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nestjs:nodejs /app/packages ./packages
COPY --from=builder --chown=nestjs:nodejs /app/apps/review-support-service ./apps/review-support-service
WORKDIR /app/apps/review-support-service
USER nestjs
EXPOSE 4010
CMD ["sh", "-c", "if [ -f dist/apps/review-support-service/src/main.js ]; then exec node dist/apps/review-support-service/src/main.js; elif [ -f dist/src/main.js ]; then exec node dist/src/main.js; else exec node dist/main.js; fi"]
