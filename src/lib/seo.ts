const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

export const SITE_URL = trimTrailingSlash(
  (import.meta.env.VITE_SITE_URL as string | undefined) ?? "https://code14.uz",
);

export const SITE_NAME = "Code14";
export const PAGE_URL = `${SITE_URL}/`;
export const OG_IMAGE =
  (import.meta.env.VITE_OG_IMAGE_URL as string | undefined) ?? `${SITE_URL}/og-image-social.jpg`;
export const LOGO_URL = `${SITE_URL}/favicon.svg`;

export const SEO_TITLE = "14 Kunda Junior Developer Bo'ling | Code14 Dasturlash Kursi";
export const SEO_DESCRIPTION =
  "Code14 bilan 14 kunda Junior Developer bo'lish uchun HTML, CSS, JavaScript, React, Git, portfolio va interview tayyorligini amaliy o'rganing.";
export const SEO_KEYWORDS = [
  "dasturlash kursi",
  "junior developer kursi",
  "frontend kursi",
  "react kursi",
  "javascript kursi",
  "html css kursi",
  "14 kunlik dasturlash kursi",
  "ishga kirish kursi",
  "portfolio tayyorlash",
  "Code14",
];

export const GLOBAL_META = [
  { charSet: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { name: "theme-color", content: "#0b0b0f" },
  { name: "color-scheme", content: "dark" },
  { name: "format-detection", content: "telephone=no" },
  { name: "application-name", content: SITE_NAME },
  { name: "apple-mobile-web-app-title", content: SITE_NAME },
  { name: "apple-mobile-web-app-capable", content: "yes" },
  { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
] as const;

export const LANDING_META = [
  { title: SEO_TITLE },
  { name: "description", content: SEO_DESCRIPTION },
  { name: "keywords", content: SEO_KEYWORDS.join(", ") },
  { name: "author", content: SITE_NAME },
  { name: "creator", content: SITE_NAME },
  { name: "publisher", content: SITE_NAME },
  { name: "category", content: "Education" },
  { name: "classification", content: "Dasturlash kursi" },
  {
    name: "robots",
    content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  },
  {
    name: "googlebot",
    content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  },
  { property: "og:title", content: SEO_TITLE },
  { property: "og:description", content: SEO_DESCRIPTION },
  { property: "og:type", content: "website" },
  { property: "og:url", content: PAGE_URL },
  { property: "og:site_name", content: SITE_NAME },
  { property: "og:locale", content: "uz_UZ" },
  { property: "og:image", content: OG_IMAGE },
  { property: "og:image:secure_url", content: OG_IMAGE },
  { property: "og:image:type", content: "image/jpeg" },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  {
    property: "og:image:alt",
    content: "Code14 14 kunlik dasturlash kursi: Junior Developer bo'lish dasturi",
  },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: SEO_TITLE },
  { name: "twitter:description", content: SEO_DESCRIPTION },
  { name: "twitter:image", content: OG_IMAGE },
  {
    name: "twitter:image:alt",
    content: "Code14 14 kunlik dasturlash kursi",
  },
] as const;

export const GLOBAL_LINKS = [
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  { rel: "manifest", href: "/site.webmanifest" },
] as const;

export const LANDING_LINKS = [
  { rel: "canonical", href: PAGE_URL },
  { rel: "alternate", hrefLang: "uz", href: PAGE_URL },
  { rel: "alternate", hrefLang: "x-default", href: PAGE_URL },
] as const;

export function jsonLd(data: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}
