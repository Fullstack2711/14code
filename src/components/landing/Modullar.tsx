import { tracks } from "@/mock/data";
import { m, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

function TrackRoadmap({ days }: { days: (typeof tracks)[0]["days"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10">
        <m.div
          style={{ height: lineHeight }}
          className="absolute top-0 left-0 right-0 bg-linear-to-b from-primary via-primary-glow to-primary shadow-[0_0_12px_oklch(0.68_0.20_254)]"
        />
      </div>

      <div className="space-y-12 sm:space-y-16">
        {days.map((d, i) => {
          const isLeft = i % 2 === 0;
          return (
            <m.div
              key={d.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex items-center ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"}`}
            >
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                <div className="relative size-4 rounded-full bg-primary shadow-[0_0_20px_oklch(0.68_0.20_254)] border-2 border-background">
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                </div>
              </div>

              <div className="hidden sm:block w-1/2" />

              <div
                className={`pl-12 sm:pl-0 w-full sm:w-1/2 ${isLeft ? "sm:pl-12" : "sm:pr-12 sm:text-right"}`}
              >
                <div className="glass-card rounded-2xl p-5 inline-block max-w-md">
                  <div className="text-xs font-semibold text-primary tracking-wider uppercase mb-1">
                    {d.day}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{d.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{d.desc}</p>
                </div>
              </div>
            </m.div>
          );
        })}
      </div>
    </div>
  );
}

export function Modullar() {
  const [tab, setTab] = useState("frontend");
  const active = tracks.find((t) => t.key === tab)!;

  return (
    <section id="modullar" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 bg-primary/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-block px-3 py-1 rounded-full glass-card text-xs font-medium text-silver mb-4">
            14 kun · Har bir yo'nalish
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            <span className="text-gradient">Yo'nalishingizni</span>{" "}
            <span className="text-gradient-electric">tanlang</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Har bir yo'nalish uchun alohida 14 kunlik reja — aniq, amaliy, natijaga yo'naltirilgan.
          </p>
        </m.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {tracks.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${tab === t.key ? "text-background" : "glass-card text-silver hover:text-foreground"}`}
            >
              {tab === t.key && (
                <m.span
                  layoutId="modullar-tab-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>

        <TrackRoadmap key={tab} days={active.days} />
      </div>
    </section>
  );
}
