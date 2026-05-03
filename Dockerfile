# Build TanStack Start (Vite) → dist/client + dist/server (Cloudflare Worker)
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Run built Worker locally (Miniflare) — matches “wrangler dev” without parent .wrangler conflicts
FROM node:22-alpine AS runner

RUN npm install -g wrangler@4.87.0

WORKDIR /app/dist/server

COPY --from=builder /app/dist/server ./
COPY --from=builder /app/dist/client ../client

ENV PORT=8787
EXPOSE 8787

CMD ["wrangler", "dev", "--local", "--ip", "0.0.0.0", "--port", "8787", "--show-interactive-dev-session", "false"]
