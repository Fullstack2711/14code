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
import { faqs, plans, tracks } from "@/mock/data";
import {
  LANDING_LINKS,
  LANDING_META,
  LOGO_URL,
  OG_IMAGE,
  PAGE_URL,
  SEO_DESCRIPTION,
  SEO_TITLE,
  SITE_NAME,
  SITE_URL,
  jsonLd,
} from "@/lib/seo";

const courseTopics = Array.from(
  new Set(tracks.flatMap((track) => track.days.map((day) => day.title))),
);

const landingJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: PAGE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: LOGO_URL,
        width: 512,
        height: 512,
      },
      image: OG_IMAGE,
      description: SEO_DESCRIPTION,
      sameAs: ["https://t.me/code14"],
      address: {
        "@type": "PostalAddress",
        addressCountry: "UZ",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: "https://t.me/code14",
        availableLanguage: ["uz", "ru"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: PAGE_URL,
      name: SITE_NAME,
      description: SEO_DESCRIPTION,
      inLanguage: "uz",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: SEO_TITLE,
      description: SEO_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#course` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: OG_IMAGE,
        width: 1200,
        height: 630,
      },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      inLanguage: "uz",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Bosh sahifa",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Course",
      "@id": `${SITE_URL}/#course`,
      name: "14 Kunda Junior Developer",
      url: PAGE_URL,
      description: SEO_DESCRIPTION,
      provider: { "@id": `${SITE_URL}/#organization` },
      educationalLevel: "Beginner",
      teaches: courseTopics,
      inLanguage: "uz",
      timeRequired: "P14D",
      image: OG_IMAGE,
      offers: {
        "@type": "OfferCatalog",
        name: "Code14 tariflari",
        itemListElement: plans.map((plan) => ({
          "@type": "Offer",
          name: plan.name,
          url: `${PAGE_URL}#pricing`,
          category: "Paid",
          priceCurrency: "UZS",
          price: plan.price.replace(/\D/g, ""),
          availability: "https://schema.org/InStock",
          itemOffered: {
            "@type": "Course",
            name: `Code14 ${plan.name}`,
            description: plan.desc,
          },
        })),
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: "PT60H",
        inLanguage: "uz",
        courseSchedule: {
          "@type": "Schedule",
          repeatCount: 14,
          repeatFrequency: "P1D",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [...LANDING_META],
    links: [...LANDING_LINKS],
    scripts: [jsonLd(landingJsonLd)],
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
      {/* <InterviewSupportSection /> */}
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
