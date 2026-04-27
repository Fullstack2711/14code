import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const salaryData = [
  { month: "1-oy", salary: 0 },
  { month: "2-oy", salary: 4 },
  { month: "4-oy", salary: 7 },
  { month: "6-oy", salary: 10 },
  { month: "9-oy", salary: 13 },
  { month: "12-oy", salary: 18 },
];

interface HeroProps {
  onCtaClick: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute inset-0 grid-bg" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-primary/30 blur-[100px] animate-float-slow" />
        <div className="absolute top-40 right-[8%] w-96 h-96 rounded-full bg-primary-glow/20 blur-[120px] animate-float-slower" />
        <div className="absolute bottom-10 left-[40%] w-80 h-80 rounded-full bg-primary/20 blur-[110px] animate-float-slow" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-medium text-silver mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Ro'yxatdan o'tish ochiq · 2026 dekabr oqimi
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              <span className="text-gradient">2 Haftada</span>
              <br />
              <span className="text-foreground">Ishga Kiradigan</span>
              <br />
              <span className="text-gradient-electric">Dasturchiga</span>{" "}
              <span className="text-foreground">Aylaning</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              HTML, CSS, JavaScript, React, Git, Portfolio, Interview va real
              loyihalar bilan <span className="text-foreground font-medium">Junior Developer</span> bo'lib ish toping.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                onClick={onCtaClick}
                size="lg"
                className="group bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-95 rounded-2xl h-14 px-7 text-base font-semibold shadow-[0_10px_40px_-10px_oklch(0.68_0.20_254/0.7)] transition-all hover:shadow-[0_14px_50px_-10px_oklch(0.68_0.20_254/0.85)] hover:-translate-y-0.5"
              >
                Hoziroq Boshlash
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={onCtaClick}
                size="lg"
                variant="outline"
                className="glass-card hover:bg-white/5 rounded-2xl h-14 px-7 text-base font-medium border-white/10 text-foreground"
              >
                Bepul Konsultatsiya
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-background bg-gradient-to-br from-primary/60 to-primary-glow/40"
                    />
                  ))}
                </div>
                <span><span className="text-foreground font-semibold">1200+</span> talaba o'qigan</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-primary" />
                <span><span className="text-foreground font-semibold">95%</span> mamnunlik</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - Glass card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="relative"
          >
            {/* Neon glow behind */}
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/40 via-primary-glow/20 to-transparent blur-3xl rounded-full animate-pulse-glow" />

            <div className="relative glass-card-strong rounded-3xl p-6 sm:p-7">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-xs text-muted-foreground">Junior Developer maoshi</div>
                  <div className="text-2xl font-bold text-gradient mt-0.5">$0 → $1,800</div>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold">
                  <TrendingUp className="w-3 h-3" />
                  +1800%
                </div>
              </div>

              <div className="h-32 -mx-2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={salaryData}>
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.68 0.20 254)" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="oklch(0.68 0.20 254)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="month"
                      tick={{ fill: "oklch(0.68 0.02 260)", fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis hide />
                    <Area
                      type="monotone"
                      dataKey="salary"
                      stroke="oklch(0.78 0.18 248)"
                      strokeWidth={2.5}
                      fill="url(#grad)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-5 pt-5 border-t border-white/5 space-y-3">
                {[
                  { label: "HTML / CSS / JS asoslari", days: "1-7 kun" },
                  { label: "React + Real loyiha", days: "8-12 kun" },
                  { label: "Portfolio + Interview", days: "13-14 kun" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_oklch(0.68_0.20_254)]" />
                      <span className="text-foreground/90">{item.label}</span>
                    </div>
                    <span className="text-muted-foreground text-xs">{item.days}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3.5 rounded-2xl bg-gradient-to-br from-primary/15 to-transparent border border-primary/20">
                <div className="text-xs text-muted-foreground">Talabalardan</div>
                <div className="text-base font-semibold mt-0.5">
                  <span className="text-gradient-electric">87%</span>{" "}
                  birinchi oyda interview olgan
                </div>
              </div>
            </div>

            {/* Floating tag */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 glass-card-strong rounded-2xl px-3 py-2 text-xs font-medium hidden sm:flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
              Live · 47 ta yangi student
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
