import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { finalCta } from "@/mock/data";

interface FinalCtaProps {
  onCtaClick: () => void;
}
export function FinalCta({ onCtaClick }: FinalCtaProps) {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-4xl sm:rounded-[2.5rem] p-10 sm:p-16 text-center"
        >
          {/* Liquid moving gradient bg */}
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute inset-0 animate-spin-slow opacity-90"
              style={{
                background:
                  "conic-gradient(from 0deg at 50% 50%, oklch(0.30 0.18 254), oklch(0.45 0.20 270), oklch(0.20 0.15 240), oklch(0.55 0.22 254), oklch(0.30 0.18 254))",
                filter: "blur(60px)",
              }}
            />
            <div className="absolute inset-0 bg-background/40" />
            <div className="absolute inset-0 grid-bg opacity-50" />
          </div>

          <div className="relative glass-card-strong rounded-[1.5rem] sm:rounded-4xl p-8 sm:p-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-xs font-semibold text-primary mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {finalCta.title}
            </div>

            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
              <span className="text-gradient">{finalCta.subtitle}</span>
              <br />
              <span className="text-gradient-electric">{finalCta.description}</span>
              <br />
              {/* <span className="text-foreground">{finalCta.description}</span> */}
            </h2>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              {finalCta.description}
            </p>

            <div className="mt-10 flex justify-center">
              <Button
                onClick={onCtaClick}
                size="lg"
                className="group w-full sm:w-auto bg-linear-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-95 rounded-2xl h-12 sm:h-15 px-6 sm:px-10 text-base sm:text-lg font-semibold shadow-[0_15px_50px_-10px_oklch(0.68_0.20_254/0.8)] transition-all hover:shadow-[0_20px_60px_-10px_oklch(0.68_0.20_254/1)] hover:-translate-y-1 max-w-sm"
              >
                {finalCta.buttonText}
                <ArrowRight className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              {finalCta.perks.map((perk) => perk.description).join(" · ")}
            </p>
          </div>
        </m.div>
      </div>
    </section>
  );
}
