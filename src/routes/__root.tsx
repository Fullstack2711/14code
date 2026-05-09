import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { InitialLoadingSplash } from "@/components/app/InitialLoadingSplash";

const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined) ?? "https://code14.uz";
const OG_IMAGE =
  (import.meta.env.VITE_OG_IMAGE_URL as string | undefined) ??
  `${SITE_URL}/og-image-social.jpg`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Sahifa topilmadi</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Siz qidirayotgan sahifa mavjud emas yoki boshqa manzilga ko'chirilgan.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Code14 — 14 kunda Junior Developer bo'ling" },
      {
        name: "description",
        content: "14 kunda Junior Developer bo'lib birinchi ishingizni toping. 100% amaliy kurs, real loyihalar va mentor yordami.",
      },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { name: "theme-color", content: "#0b0b0f" },
      { property: "og:title", content: "Code14 — 14 kunda Junior Developer bo'ling" },
      {
        property: "og:description",
        content: "14 kunlik premium intensiv. Real loyihalar, mentor qo'llab-quvvatlashi va portfolio bilan ishga tayyor bo'ling.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Code14" },
      { property: "og:locale", content: "uz_UZ" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Code14 — 14 kunlik dasturlash kursi" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Code14 — 14 kunda Junior Developer bo'ling" },
      {
        name: "twitter:description",
        content: "14 kunlik premium intensiv. Real loyihalar, mentor yordami va portfolio.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <InitialLoadingSplash durationMs={5000} />
      <Outlet />
    </>
  );
}
