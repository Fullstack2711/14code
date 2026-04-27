import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const days = [
  { day: "1-kun", title: "HTML & CSS", desc: "Semantic markup, modern CSS, BEM" },
  { day: "3-kun", title: "Responsive Layout", desc: "Flexbox, Grid, Mobile-first" },
  { day: "5-kun", title: "JavaScript", desc: "ES6+, DOM, Events, Logic" },
  { day: "7-kun", title: "API & Async", desc: "Fetch, Promises, async/await" },
  { day: "9-kun", title: "React Basics", desc: "Components, Props, State, Hooks" },
  { day: "11-kun", title: "Full Project", desc: "Real React + API loyiha" },
  { day: "13-kun", title: "CV + GitHub", desc: "Portfolio, deploy, LinkedIn" },
  { day: "14-kun", title: "Interview & Apply", desc: "Mock interview, ish topish" },
];

export function Roadmap() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="roadmap" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-96 h-96 bg-primary/15 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-block px-3 py-1 rounded-full glass-card text-xs font-medium text-silver mb-4">
            14 kun · Aniq reja
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="text-gradient">Sizning</span>{" "}
            <span className="text-gradient-electric">Roadmap</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Har bir kun aniq natijaga olib boradi. Suvga qaytmaymiz — faqat oldinga.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10">
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary via-primary-glow to-primary shadow-[0_0_12px_oklch(0.68_0.20_254)]"
            />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {days.map((d, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={d.day}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                    <div className="relative w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_oklch(0.68_0.20_254)] border-2 border-background">
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                    </div>
                  </div>

                  <div className="hidden sm:block w-1/2" />

                  <div
                    className={`pl-12 sm:pl-0 w-full sm:w-1/2 ${
                      isLeft ? "sm:pl-12" : "sm:pr-12 sm:text-right"
                    }`}
                  >
                    <div className="glass-card rounded-2xl p-5 inline-block max-w-md">
                      <div className="text-xs font-semibold text-primary tracking-wider uppercase mb-1">
                        {d.day}
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight">{d.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{d.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
