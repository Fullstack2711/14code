# 14 Kunlik Dasturlash Kursi — Premium Landing Page

Apple Vision Pro stilidagi glassmorphism, liquid glass effektli, conversion-focused edtech landing. Flow: **Pain → Hope → Trust → Proof → Offer → Urgency → Action**.

## Stack

- TanStack Start + React 19 + TypeScript (Lovableʼda standart — Next.js emas)
- Tailwind CSS v4, shadcn/ui, Lucide, Recharts (mavjud)
- **Framer Motion** qo'shiladi (scroll animatsiyalar, stagger, magnetic buttons)
- Three.js / GSAP ishlatilmaydi — FPS va bundle uchun CSS+Framer yetarli

## Sahifa tuzilishi (bitta route: `/`)

```text
Sticky Glass Header (logo + nav + CTA)
1. Hero — headline + glass stat card
2. Social Proof — counters + logo carousel
3. Nima O'rganasiz — 6 ta interactive card
4. 14 Kunlik Roadmap — animated timeline
5. Why This Course — split + rotating glass orb
6. Mentor — instructor premium card
7. Before / After — transformatsiya
8. Pricing — 2 plan + countdown timer
9. FAQ — accordion
10. Final CTA — liquid gradient block
Footer
```

## Section tafsilotlari

**Hero:** Animated mesh gradient bg + 3 floating blurred orb (parallax). Chapda gradient headline *"2 Haftada Ishga Kiradigan Dasturchiga Aylaning"*, subheadline, 2 CTA (**Hoziroq Boshlash** electric blue + **Bepul Konsultatsiya** glass). O'ngda liquid glass card: salary mini chart (Recharts), roadmap list, "87% interview chance" badge, neon glow.

**Social Proof:** Intersection observer counter — 1200+ student · 300+ ishga kirgan · 95% satisfaction · 40+ project. Grayscale logo carousel: Google, Amazon, Meta, Microsoft, Uber, Netflix.

**Nima O'rganasiz:** 6 glass card (3×2 desktop). Hover'da cursor-tracking radial gradient ripple + 3D tilt. Frontend Fundamentals · JavaScript Mastery · React Ecosystem · Git & GitHub · Portfolio · Interview Prep.

**14 Kunlik Roadmap:** Vertikal timeline, scroll progress bilan chiziq to'ladi, kunlar active bo'ladi. 8 keypoint: 1, 3, 5, 7, 9, 11, 13, 14-kun.

**Why This Course:** Split — chapda 4 benefit (6 oy emas 14 kun · faqat kerakli tech · zero water theory · ish topishga focus). O'ngda CSS-only rotating glass orb (gradient + glow).

**Mentor:** Premium card — avatar, ism+rol, 5 chip (1:1 support, daily review, Telegram, CV correction, real developer).

**Before / After:** 2 yonma-yon card, o'rtada animated arrow. Before kulrang, After electric blue glow.

**Pricing:** Standard + Pro (highlighted glow border). Tepada **countdown timer** (deadline `localStorage`'da). CTA → registratsiya modali.

**FAQ:** Shadcn Accordion, 4 savol.

**Final CTA:** Full-width liquid moving gradient bg, *"Bugun Boshlang. 14 Kundan Keyin Hayotingiz O'zgaradi."*, magnetic button → modal.

**Modal forma:** Ism, telefon, email, tariff. Submit → toast + console log (frontend-only).

## Dizayn tizimi (`src/styles.css`)

- Bg: deep black `oklch(0.05 0 0)`, fg: oq
- Accent: electric blue `oklch(~0.7 0.2 250)`
- Silver: `oklch(0.85 0.01 250)`
- Utilities: `.glass-card` (backdrop-blur + border + gradient overlay), `.glow-blue`, `.liquid-bg`, `.magnetic-btn`
- Tipografiya: tizim sans, katta tracking-tight headinglar

## Animatsiya & Performance

- Faqat `transform` / `opacity` (GPU)
- Framer Motion `whileInView` + `stagger` har section uchun
- `prefers-reduced-motion` hurmat qilinadi
- Particle/orb effektlar CSS-only (canvas yo'q)
- Imagelar lazy-load

## SEO

`/` route `head()`'da: title *"14 Kunda Junior Developer — Premium Dasturlash Kursi"*, description, og:title/description/image, lang `uz`.

## Responsive & A11y

Mobile-first. Hero stack, timeline chap chiziq, pricing 1 ustun. Semantic HTML, ARIA, klaviatura nav, electric blue focus ring, WCAG AA kontrast.

## Backend haqida

Hozircha frontend-only. Real form submission, email yoki to'lov kerak bo'lsa keyinchalik **Lovable Cloud** (database + edge functions) yoqamiz.

## Yetkazib beriladigan natija

Bitta `/` route, 10 section, to'liq responsive, scroll animatsiyali premium glass landing, countdown va modal forma — foydalanuvchini birinchi ekrandayoq ro'yxatdan o'tishga undaydi.
