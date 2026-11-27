FROM node:26-alpine AS base
WORKDIR /app
RUN npm install -g pnpm@9.12.3
COPY .npmrc package.json pnpm-lock.yaml* pnpm-workspace.yaml turbo.json tsconfig.base.json ./
COPY packages ./packages
