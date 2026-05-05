import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { Features } from "@/components/landing/Features";
import { Roadmap } from "@/components/landing/Roadmap";
import { Modullar } from "@/components/landing/Modullar";
import { WhyCourse } from "@/components/landing/WhyCourse";
import { Mentor } from "@/components/landing/Mentor";
import { InterviewSupportSection } from "@/components/landing/InterviewSupportSection";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { RegistrationDialog } from "@/components/landing/RegistrationDialog";
import { Toaster } from "@/components/ui/sonner";

const SITE_URL = "https://code14.uz";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Code14",
  url: SITE_URL,
  logo: OG_IMAGE,
  description:
    "14 kunlik premium intensiv dasturlash kursi. Junior Developer bo'lib ishga kirish uchun amaliy bilim.",
  sameAs: ["https://t.me/code14"],
  address: { "@type": "PostalAddress", addressCountry: "UZ" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1200",
    bestRating: "5",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "14 Kunda Junior Developer",
  description:
    "HTML, CSS, JavaScript, React, Git, Portfolio va Interview bilan 14 kunda Junior Frontend Developer bo'lib ishga kirish kursi.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Code14",
    sameAs: SITE_URL,
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "PT60H",
    inLanguage: "uz",
  },
  offers: {
    "@type": "Offer",
    category: "Paid",
    priceCurrency: "UZS",
    price: "1200000",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Haqiqatan ham 2 haftada Junior Developer bo'lish mumkinmi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ha, agar har kuni 4-6 soat to'liq bag'ishlasangiz. Biz suvga vaqt sarflamaymiz — faqat ishga kerakli bilim. 1200+ talaba bunga amin bo'lgan.",
      },
    },
    {
      "@type": "Question",
      name: "Nol bilim bilan kirsam bo'ladimi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ha, kurs noldan boshlanadi. Muhimi — vaqt ajratish va mentor ko'rsatmalarini bajarish. Kompyuter va internet — yetarli.",
      },
    },
    {
      "@type": "Question",
      name: "Ish topishga yordam berasizmi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pro tarif bilan: CV/LinkedIn correction, mock interview, ish e'lonlari va to'g'ridan-to'g'ri kompaniyalarga tavsiya. 300+ talabamiz allaqachon ishga kirgan.",
      },
    },
    {
      "@type": "Question",
      name: "Darslar yozib olinadimi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ha, barcha darslar yozib olinadi va sizda umrbod qoladi. Istalgan vaqt qayta ko'rishingiz mumkin.",
      },
    },
    {
      "@type": "Question",
      name: "Agar yoqmasa, pul qaytariladimi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ha, dastlabki 3 kun ichida hech qanday savolsiz 100% pul qaytariladi.",
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "14 Kunda Junior Developer — Premium Dasturlash Kursi | Code14" },
      {
        name: "description",
        content:
          "2 haftada HTML, CSS, JavaScript, React, Git va Portfolio bilan Junior Developer bo'ling. 1200+ talaba, 300+ ishga kirgan, 95% mamnunlik. Hoziroq boshlang.",
      },
      {
        name: "keywords",
        content:
          "dasturlash kursi, junior developer, frontend, react, javascript, 14 kun, ishga kirish, code14, html, css",
      },
      { property: "og:title", content: "14 Kunda Junior Developer — Code14" },
      {
        property: "og:description",
        content:
          "Premium intensiv dasturlash kursi. 14 kunda real loyihalar, portfolio va interview tayyorlik bilan ishga tayyor bo'ling.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Code14" },
      { property: "og:locale", content: "uz_UZ" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "14 Kunda Junior Developer — Code14 premium dasturlash kursi",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "14 Kunda Junior Developer — Code14" },
      {
        name: "twitter:description",
        content: "Premium intensiv dasturlash kursi — 14 kunda Junior Developer.",
      },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "Code14 — 14 kunlik dasturlash kursi" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(organizationSchema) },
      { type: "application/ld+json", children: JSON.stringify(courseSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header onCtaClick={openDialog} />
      <Hero onCtaClick={openDialog} />
      <SocialProof />
      <Features />
      {/* <Roadmap /> */}
      <Modullar />
      <WhyCourse />
      <Mentor />
      <InterviewSupportSection />
      <BeforeAfter />
      <Pricing onCtaClick={openDialog} />
      <FAQ />
      <FinalCta onCtaClick={openDialog} />
      <Footer />
      <RegistrationDialog open={open} onOpenChange={setOpen} />
      <Toaster theme="dark" />
    </main>
  );
}
