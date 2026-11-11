FROM node:20.18-alpine AS base
WORKDIR /app
RUN npm install -g pnpm@9.12.3
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml turbo.json tsconfig.base.json ./
COPY packages ./packages
