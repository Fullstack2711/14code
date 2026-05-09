import { m as FM } from "framer-motion";
import { useEffect, useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { plans, PricingText } from "@/mock/data";

function useCountdown() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const KEY = "code14_deadline";
    let deadline = Number(localStorage.getItem(KEY));
    if (!deadline || deadline < Date.now()) {
      deadline = Date.now() + 1000 * 60 * 60 * 47 + 1000 * 60 * 14;
      localStorage.setItem(KEY, String(deadline));
    }
    const tick = () => {
      const diff = Math.max(0, deadline - Date.now());
      const h = Math.floor(diff / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1000);
      setTime({ h, m, s });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
interface PricingProps {
  onCtaClick: () => void;
}
export function Pricing({ onCtaClick }: PricingProps) {
  const { h, m, s } = useCountdown();
  const fmt = (n: number) => String(n).padStart(2, "0");

  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/15 blur-[140px] rounded-full" />

      <div className="mx-auto max-w-6xl px-4">
        <FM.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-block px-3 py-1 rounded-full glass-card text-xs font-medium text-silver mb-4">
            Narxlar
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            <span className="text-gradient">{PricingText.title}</span>{" "}
            <span className="text-gradient-electric">{PricingText.subtitle}</span>
          </h2>

          {/* Countdown */}
          <div className="mt-8 inline-flex items-center gap-3 glass-card-strong rounded-2xl px-5 py-3">
            <Sparkles className="size-4 text-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">{PricingText.description}</span>
            <div className="flex items-center gap-1.5 font-mono font-bold tabular-nums">
              <span className="text-gradient text-lg">{fmt(h)}</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-gradient text-lg">{fmt(m)}</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-gradient text-lg">{fmt(s)}</span>
            </div>
          </div>
        </FM.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <FM.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              {p.highlighted && (
                <>
                  <div className="absolute -inset-1 bg-linear-to-br from-primary to-primary-glow rounded-3xl blur-md opacity-60" />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-linear-to-r from-primary to-primary-glow text-primary-foreground text-xs font-bold shadow-lg">
                    ENG MASHHUR
                  </div>
                </>
              )}

              <div
                className={`relative h-full rounded-3xl p-7 sm:p-8 ${
                  p.highlighted ? "glass-card-strong border-primary/30" : "glass-card"
                }`}
              >
                <div className="text-sm text-muted-foreground">{p.desc}</div>
                <h3 className="text-2xl font-semibold tracking-tight mt-1">{p.name}</h3>
                <div className="mt-5 flex items-baseline gap-1.5">
                  <span
                    className={`text-4xl font-bold tracking-tight ${p.highlighted ? "text-gradient-electric" : "text-foreground"}`}
                  >
                    {p.price}
                  </span>
                  <span className="text-sm text-muted-foreground">so'm</span>
                </div>

                <ul className="mt-7 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <div
                        className={`size-5 mt-0.5 rounded-full flex items-center justify-center shrink-0 ${
                          p.highlighted ? "bg-primary/20" : "bg-white/8"
                        }`}
                      >
                        <Check
                          className={`size-3 ${p.highlighted ? "text-primary" : "text-foreground/80"}`}
                        />
                      </div>
                      <span className="text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={onCtaClick}
                  size="lg"
                  className={`w-full mt-8 rounded-2xl h-13 font-semibold ${
                    p.highlighted
                      ? "bg-linear-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-95 shadow-[0_10px_30px_-10px_oklch(0.68_0.20_254/0.7)]"
                      : "glass-card hover:bg-white/8 text-foreground border border-white/10"
                  }`}
                >
                  {p.cta}
                </Button>
              </div>
            </FM.div>
          ))}
        </div>
      </div>
    </section>
  );
}
