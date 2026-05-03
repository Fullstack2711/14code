import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/use-count-up";

const stats = [
  { value: 100, suffix: "+", label: "Talaba" },
  { value: 70, suffix: "+", label: "Ishga kirgan" },
  { value: 95, suffix: "%", label: "Mamnunlik" },
  { value: 40, suffix: "+", label: "Real loyiha" },
];

const companies = ["Google", "Amazon", "Meta", "Microsoft", "Uber", "Netflix", "Spotify", "Airbnb"];

function Stat({
  value,
  suffix,
  label,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  inView: boolean;
}) {
  const n = useCountUp(value, 1800, inView);
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl font-bold text-gradient tracking-tight">
        {n}
        {suffix}
      </div>
      <div className="mt-1.5 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 sm:p-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((s) => (
              <Stat key={s.label} {...s} inView={inView} />
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-white/5">
            <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Bitiruvchilarimiz ishlaydigan kompaniyalar
            </p>
            <div className="relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent z-10" />
              <div
                className="flex gap-12 animate-[shimmer_30s_linear_infinite]"
                style={{
                  animation: "scroll 30s linear infinite",
                }}
              >
                {[...companies, ...companies].map((c, i) => (
                  <div
                    key={i}
                    className="text-2xl sm:text-3xl font-semibold text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap tracking-tight"
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
