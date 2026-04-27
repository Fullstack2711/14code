# SEO Schema + OG Images + Hero & WhyCourse Redesign

## 1. Structured Data (JSON-LD)

`src/routes/index.tsx`'ga 3 ta JSON-LD schema qo'shamiz `head().scripts` orqali:

- **Organization** (EducationalOrganization) — Code14 brendi, logo, sameAs (Telegram), aggregateRating (4.9 / 1200 reviews).
- **Course** — kurs nomi, tavsif, provider, hasCourseInstance (online, uz, 60 soat), offers (1,200,000 UZS).
- **FAQPage** — barcha 5 ta FAQ savol-javobi (FAQ.tsx'dagi tekstlar).

## 2. OpenGraph & Twitter

`/public/og-image.jpg` (1200×630) tayyor — hero-bg.jpg'dan ko'chiramiz. Index route head'iga qo'shamiz:

- `og:image` + `og:image:width/height/alt`
- `og:url`, `og:site_name`, `og:locale` (uz_UZ)
- `twitter:image` + `twitter:image:alt`
- `twitter:card: summary_large_image`
- `<link rel="canonical">`
- `keywords` meta

## 3. Hero Section Redesign

Yangi konsepsiya — **asymmetric split + code editor mockup**:

- **Chap (60%):** Trust badge ("1,200+ talaba ishonadi" + 5 ta avatar+yulduzlar gorizontal layout). Yangi headline tuzilishi — kichikroq display font + bold accent so'zlar inline gradient bilan. Subheadline qisqartiriladi. CTA buttonlar yonma-yon + pastida "✓ 3 kun pul qaytarish · ✓ Bepul demo dars" mikro-trust qatori.
- **O'ng (40%):** Glass card o'rniga **liquid glass code editor mockup**:
  - Tepada macOS-style window dots + tab "App.tsx"
  - Ichida ranglangan JSX kod snippet (typing animation framer-motion bilan)
  - Pastida kichik salary chart strip (kompakt)
  - "+87% interview" floating badge
  - Tashqarida 2 ta floating glass chip: "✓ Real loyiha" / "✓ Live deploy"
- Background — yanada kuchli mesh gradient + animated dot grid + 3D perspective pol effect (CSS).

## 4. WhyCourse Section Redesign

Eski split layout o'rniga **bento grid** (Apple-style):

- Sarlavha tepada markazda
- 5 ta turli o'lchamdagi glass card grid (asymmetric bento):
  - Katta card (col-span 2): "6 oy emas — 14 kun" + visual taqqoslash bar (eski 6 oy chizig'i vs yangi 14 kun chizig'i, animated fill)
  - O'rta card: "Faqat ish uchun kerakli tech" + tech logo qatori (HTML, CSS, JS, React, Git, GitHub)
  - O'rta card: "Zero water theory" + 3 ta progress dot
  - Vertical card (row-span 2): Rotating glass orb (eski orbni shu yerga ko'chiramiz, kichikroq)
  - Pastdagi keng card: "Ish topishga 100% focus" + mini stat satr (300+ ishga kirgan · 87% interview · 95% mamnunlik)
- Har bir card hover'da subtle glow + lift, cursor-tracking gradient

## Texnik

- Hech qanday yangi dependency kerak emas (framer-motion mavjud)
- TypeScript strict — barcha imports tekshiriladi
- `prefers-reduced-motion` saqlanadi
- Mobile responsive — bento desktop'da kuchli, mobile'da single column

## Yetkazib beriladigan natija

Google'da rich result (FAQ accordion, Course rating stars), Facebook/Twitter/Telegram share'da chiroyli card preview. Hero va WhyCourse vizual jihatdan yanada premium va konversiya kuchaygan.
