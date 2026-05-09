import { afterFeedback, beforeFeedback } from "@/mock/data";
import { m } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InterviewSupportSectionProps {
  onCtaClick: () => void;
}

export function InterviewSupportSection({ onCtaClick }: InterviewSupportSectionProps) {
  return (
    <section
      id="interview-support"
      aria-labelledby="interview-support-heading"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-block px-3 py-1 rounded-full glass-card text-xs font-medium text-silver mb-4">
            Alohida xizmat
          </div>
          <h2
            id="interview-support-heading"
            className="text-4xl sm:text-5xl font-semibold tracking-tight"
          >
            Intervyu olib berish <span className="text-gradient-electric">xizmati</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Frontend, Backend yoki Mobile yo'nalishi bo'yicha real intervyu formatida savol-javob,
            feedback va keyingi qadamlar.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="inline-flex items-center rounded-full bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary">
              Narx: 100 000 so'm
            </div>
            <Button
              onClick={onCtaClick}
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Intervyuga yozilish
              <ArrowRight className="ml-1 size-4" />
            </Button>
          </div>
        </m.div>

        <div className="relative grid md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-7 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 size-40 bg-red-500/5 blur-3xl rounded-full" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
                Intervyudan oldin
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-muted-foreground/90">
                Tayyorgarlik va feedback
              </h3>
              <ul className="mt-6 space-y-3">
                {beforeFeedback.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <X className="size-4 mt-0.5 text-red-400/70 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative size-14 rounded-full bg-linear-to-br from-primary to-primary-glow flex items-center justify-center shadow-[0_0_30px_oklch(0.68_0.20_254/0.6)]">
              <ArrowRight className="size-6 text-primary-foreground" />
              <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card-strong rounded-3xl p-7 relative overflow-hidden border-primary/20"
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-primary/15 blur-3xl rounded-full" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                Intervyudan keyin
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-gradient">
                Kamchiliklarni to'ldirish
              </h3>
              <ul className="mt-6 space-y-3">
                {afterFeedback.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <div className="size-5 mt-0.5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Check className="size-3 text-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
