import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { Features } from "@/components/landing/Features";
import { Roadmap } from "@/components/landing/Roadmap";
import { WhyCourse } from "@/components/landing/WhyCourse";
import { Mentor } from "@/components/landing/Mentor";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { RegistrationDialog } from "@/components/landing/RegistrationDialog";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "14 Kunda Junior Developer — Premium Dasturlash Kursi | Code14" },
      {
        name: "description",
        content:
          "2 haftada HTML, CSS, JavaScript, React, Git va Portfolio bilan Junior Developer bo'ling. 1200+ talaba, 300+ ishga kirgan, 95% mamnunlik. Hoziroq boshlang.",
      },
      { property: "og:title", content: "14 Kunda Junior Developer — Code14" },
      {
        property: "og:description",
        content:
          "Premium intensiv dasturlash kursi. 14 kunda real loyihalar, portfolio va interview tayyorlik bilan ishga tayyor bo'ling.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "14 Kunda Junior Developer — Code14" },
      {
        name: "twitter:description",
        content: "Premium intensiv dasturlash kursi — 14 kunda Junior Developer.",
      },
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
      <Roadmap />
      <WhyCourse />
      <Mentor />
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
