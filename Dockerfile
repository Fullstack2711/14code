# ─── Stage 1: Build ──────────────────────────────────────────────────────────
FROM oven/bun:1.2-debian AS builder

WORKDIR /app

# Install dependencies first (layer cache)
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Copy source and build for Node.js server
COPY . .
RUN NODE_SERVER=1 bun run build

# ─── Stage 2: Production ─────────────────────────────────────────────────────
FROM node:22-bookworm-slim AS runner

WORKDIR /app

# Copy only the built output (.output from Nitro node-server preset)
COPY --from=builder /app/.output ./

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["node", "server/index.mjs"]
