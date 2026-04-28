import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
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
      { title: "Code14" },
      { name: "description", content: "Code14  -  14kunda  Junior bo'lib birinchi ishingizni toping" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Code14" },
      { property: "og:description", content: "Code14  -  14kunda  Junior bo'lib birinchi ishingizni toping" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Code14" },
      { name: "twitter:description", content: "Code14  -  14kunda  Junior bo'lib birinchi ishingizni toping" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/6WKtDfWdQ8XIA15at2sIHCOvO9t1/social-images/social-1777359389362-ChatGPT_Image_Apr_28__2026__11_55_07_AM-removebg-preview.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/6WKtDfWdQ8XIA15at2sIHCOvO9t1/social-images/social-1777359389362-ChatGPT_Image_Apr_28__2026__11_55_07_AM-removebg-preview.webp" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
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
  return <Outlet />;
}
