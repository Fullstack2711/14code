import { motion } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { Zap, Target, Droplets, Briefcase, TrendingUp } from "lucide-react";

function BentoCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        className="group relative h-full rounded-3xl p-6 sm:p-7 overflow-hidden border border-white/10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_-20px_oklch(0.68_0.20_254/0.4)]"
        style={{
          background:
            "radial-gradient(500px circle at var(--x, 50%) var(--y, 50%), oklch(0.68 0.20 254 / 0.10), transparent 40%), linear-gradient(135deg, oklch(1 0 0 / 0.06) 0%, oklch(1 0 0 / 0.02) 100%)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

export function WhyCourse() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 blur-[160px] rounded-full -z-10" />

      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-block px-3 py-1 rounded-full glass-card text-xs font-medium text-silver mb-4">
            Nima uchun bu kurs
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Boshqalar 6 oy o'rgatadi.
            <br />
            <span className="text-gradient-electric">Biz 14 kunda ishga qo'yamiz.</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {/* 1. Vaqt taqqoslash — katta */}
          <BentoCard className="md:col-span-2" delay={0}>
            <div className="flex items-start justify-between mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground">Vaqt taqqoslash</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight">
              6 oy emas — <span className="text-gradient-electric">14 kun</span>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Ortiqcha vaqt yo'q. Faqat eng kerakli bilim, maksimal tezlikda.
            </p>

            <div className="mt-6 space-y-3">
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">Boshqa kurslar</span>
                  <span className="text-muted-foreground/70">~180 kun</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-white/10 to-white/30 rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-foreground font-medium">Code14</span>
                  <span className="text-primary font-semibold">14 kun</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "8%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full shadow-[0_0_12px_oklch(0.68_0.20_254)]"
                  />
                </div>
              </div>
            </div>
          </BentoCard>

          {/* 2. Glass orb — vertical */}
          <BentoCard className="md:row-span-2" delay={0.1}>
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 flex items-center justify-center">
                  <Target className="w-4 h-4 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold tracking-tight">
                Aniq <span className="text-gradient-electric">natija</span>
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                14 kun tugaganda — Junior Developer.
              </p>

              {/* Mini orb */}
              <div className="relative flex-1 min-h-[200px] mt-5 flex items-center justify-center">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/40 via-primary-glow/30 to-transparent blur-2xl animate-pulse-glow" />
                <div
                  className="absolute inset-8 rounded-full animate-spin-slow opacity-70"
                  style={{
                    background:
                      "conic-gradient(from 0deg, oklch(0.68 0.20 254), oklch(0.55 0.22 280), oklch(0.45 0.20 240), oklch(0.68 0.20 254))",
                    filter: "blur(15px)",
                  }}
                />
                <div className="relative w-32 h-32 rounded-full glass-card-strong overflow-hidden flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-primary/20" />
                  <div className="absolute top-3 left-4 w-12 h-12 rounded-full bg-white/15 blur-xl" />
                  <div className="relative text-5xl font-bold text-gradient">14</div>
                  <div className="relative text-[10px] tracking-[0.3em] uppercase text-silver mt-1">
                    Kun
                  </div>
                </div>
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_oklch(0.68_0.20_254)]" />
                </div>
              </div>

              <div className="mt-4 px-3 py-2 rounded-xl bg-primary/10 border border-primary/20 text-center text-xs text-primary font-medium">
                Junior tayyor
              </div>
            </div>
          </BentoCard>

          {/* 3. Faqat kerakli tech */}
          <BentoCard delay={0.15}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 flex items-center justify-center mb-4">
              <Target className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-bold tracking-tight">Faqat kerakli tech</h3>
            <p className="mt-1.5 text-xs text-muted-foreground">
              Real ish e'lonlaridan kelib chiqib o'rgatamiz.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["HTML", "CSS", "JS", "React", "Git", "API"].map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-silver"
                >
                  {t}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* 4. Zero water */}
          <BentoCard delay={0.2}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 flex items-center justify-center mb-4">
              <Droplets className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-bold tracking-tight">Zero water theory</h3>
            <p className="mt-1.5 text-xs text-muted-foreground">
              Har bir dars amaliyot. Birinchi kundan kod yozasiz.
            </p>
            <div className="mt-4 flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full ${
                    i <= 5 ? "bg-gradient-to-r from-primary to-primary-glow" : "bg-white/10"
                  }`}
                />
              ))}
              <span className="text-[10px] text-primary font-semibold ml-1">100%</span>
            </div>
          </BentoCard>

          {/* 5. Ish topishga focus — keng card */}
          <BentoCard className="md:col-span-3" delay={0.25}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 flex items-center justify-center mb-3">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">
                  Ish topishga <span className="text-gradient-electric">100% focus</span>
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  CV, portfolio, mock interview va to'g'ridan-to'g'ri kompaniyalarga tavsiya — kursning bir qismi.
                </p>
              </div>

              <div className="flex items-center gap-6 sm:gap-8 shrink-0">
                {[
                  { v: "300+", l: "ishga kirgan" },
                  { v: "87%", l: "interview" },
                  { v: "95%", l: "mamnunlik" },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="text-2xl font-bold text-gradient flex items-center gap-1 justify-center">
                      {s.v}
                      <TrendingUp className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
