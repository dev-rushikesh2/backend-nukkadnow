FROM node:20.18-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm@9.12.3
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* turbo.json tsconfig.base.json ./
COPY packages ./packages
COPY apps/fulfillment-service ./apps/fulfillment-service
RUN pnpm install --frozen-lockfile
RUN pnpm --filter @nukkadnow/fulfillment-service build

FROM node:20.18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nestjs
USER nestjs
COPY --from=builder /app/apps/fulfillment-service/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 4006
CMD ["node", "dist/main.js"]
