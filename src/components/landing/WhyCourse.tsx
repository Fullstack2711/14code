import { reasons, WhyCourseText } from "@/mock/data";
import { m } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef, type MouseEvent } from "react";

function ReasonRow({ r, i }: { r: (typeof reasons)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const Icon = r.icon;

  return (
    <m.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        className="group relative rounded-3xl border border-white/10 backdrop-blur-2xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:-translate-y-0.5"
        style={{
          background:
            "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), oklch(0.68 0.20 254 / 0.12), transparent 45%), linear-gradient(135deg, oklch(1 0 0 / 0.05) 0%, oklch(1 0 0 / 0.015) 100%)",
        }}
      >
        {/* Top hairline glow on hover */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="grid grid-cols-12 gap-6 p-6 sm:p-8 lg:p-10 items-center">
          {/* Number — huge */}
          <div className="col-span-3 sm:col-span-2">
            <div
              className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-none tabular-nums tracking-tighter"
              style={{
                background:
                  "linear-gradient(180deg, oklch(1 0 0 / 0.85) 0%, oklch(1 0 0 / 0.05) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {r.num}
            </div>
          </div>

          {/* Body */}
          <div className="col-span-9 sm:col-span-7 lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="size-9 rounded-xl bg-linear-to-br from-primary/25 to-transparent border border-primary/25 flex items-center justify-center shrink-0">
                <Icon className="size-4 text-primary" />
              </div>
              <div className="h-px flex-1 bg-linear-to-r from-white/15 to-transparent" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight">
              {r.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
              {r.desc}
            </p>
          </div>

          {/* Metric */}
          <div className="col-span-12 sm:col-span-3 sm:text-right">
            <div className="inline-flex flex-col sm:items-end">
              <div className="text-3xl sm:text-4xl font-bold text-gradient-electric tabular-nums">
                {r.metric}
              </div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
                {r.metricLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}

export function WhyCourse() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/10 blur-[180px] rounded-full -z-10" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium text-silver mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {WhyCourseText.title}
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            {WhyCourseText.subtitle}{" "}
            <span className="text-gradient-electric">{WhyCourseText.subtitle}</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            {WhyCourseText.description}
          </p>
        </m.div>

        {/* Stacked rows */}
        <div className="space-y-4">
          {reasons.map((r, i) => (
            <ReasonRow key={r.num} r={r} i={i} />
          ))}
        </div>

        {/* Bottom proof bar */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 rounded-2xl border border-primary/20 bg-linear-to-r from-primary/10 via-primary/5 to-transparent backdrop-blur-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
        >
          <div className="flex items-center gap-3 flex-1">
            <CheckCircle2 className="size-5 text-primary shrink-0" />
            <p className="text-sm sm:text-base">
              <span className="font-semibold">3 kun pul qaytarish kafolati.</span>{" "}
              <span className="text-muted-foreground">Yoqmasa — to'liq qaytaramiz, savolsiz.</span>
            </p>
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
          >
            Narxni ko'rish
            <ArrowRight className="size-4" />
          </a>
        </m.div>
      </div>
    </section>
  );
}
