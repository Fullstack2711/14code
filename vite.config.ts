// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
//
// Vercel sets VERCEL=1 during build. TanStack Start’s default output targets Cloudflare Workers
// (no root index.html). Nitro emits a Vercel-compatible output; disable the Cloudflare plugin there.
// NODE_SERVER=1 builds a standalone Node.js server via Nitro for VPS / Docker deployment.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

const isVercel = process.env.VERCEL === "1";
const isNode = process.env.NODE_SERVER === "1";

export default defineConfig({
  cloudflare: isVercel || isNode ? false : undefined,
  plugins: isVercel ? [nitro()] : isNode ? [nitro({ preset: "node-server" })] : [],
});
