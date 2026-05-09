import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { LazyMotion, domAnimation } from "framer-motion";
import { ThemeProvider } from "next-themes";

import appCss from "../styles.css?url";
import { GLOBAL_LINKS, GLOBAL_META, SEO_DESCRIPTION, SEO_TITLE } from "@/lib/seo";

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
    meta: [...GLOBAL_META, { title: SEO_TITLE }, { name: "description", content: SEO_DESCRIPTION }],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      ...GLOBAL_LINKS,
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" suppressHydrationWarning>
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
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="code14-theme">
      <LazyMotion features={domAnimation} strict>
        <Outlet />
      </LazyMotion>
    </ThemeProvider>
  );
}
