import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onCtaClick: () => void;
}

const codeLines: { tokens: { text: string; color?: string }[] }[] = [
  { tokens: [{ text: "import", color: "text-[#c084fc]" }, { text: " { useState } ", color: "text-foreground" }, { text: "from", color: "text-[#c084fc]" }, { text: " ", color: "text-foreground" }, { text: "'react'", color: "text-[#86efac]" }] },
  { tokens: [] },
  { tokens: [{ text: "function", color: "text-[#c084fc]" }, { text: " ", color: "text-foreground" }, { text: "Career", color: "text-[#fbbf24]" }, { text: "() {", color: "text-foreground" }] },
  { tokens: [{ text: "  const", color: "text-[#c084fc]" }, { text: " [", color: "text-foreground" }, { text: "you", color: "text-[#60a5fa]" }, { text: ", ", color: "text-foreground" }, { text: "setYou", color: "text-[#60a5fa]" }, { text: "] = ", color: "text-foreground" }, { text: "useState", color: "text-[#fbbf24]" }, { text: "(", color: "text-foreground" }, { text: "'student'", color: "text-[#86efac]" }, { text: ");", color: "text-foreground" }] },
  { tokens: [] },
  { tokens: [{ text: "  ", color: "text-foreground" }, { text: "// 14 kun keyin", color: "text-muted-foreground" }] },
  { tokens: [{ text: "  ", color: "text-foreground" }, { text: "setYou", color: "text-[#60a5fa]" }, { text: "(", color: "text-foreground" }, { text: "'junior-dev'", color: "text-[#86efac]" }, { text: ");", color: "text-foreground" }] },
  { tokens: [{ text: "}", color: "text-foreground" }] },
];

function CodeEditor() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setVisibleLines((n) => (n >= codeLines.length ? 0 : n + 1));
    }, 600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="glass-card-strong rounded-2xl overflow-hidden font-mono text-[13px] leading-[1.7]">
      {/* Window header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="text-xs text-muted-foreground">Career.tsx</div>
        <div className="w-12" />
      </div>

      {/* Code body */}
      <div className="p-5 min-h-[260px] relative">
        {codeLines.map((line, i) => (
          <div
            key={i}
            className="flex gap-4 transition-opacity duration-300"
            style={{ opacity: i < visibleLines ? 1 : 0.15 }}
          >
            <span className="text-muted-foreground/40 select-none w-4 text-right">{i + 1}</span>
            <div className="flex-1 whitespace-pre">
              {line.tokens.length === 0 ? (
                <span>&nbsp;</span>
              ) : (
                line.tokens.map((t, j) => (
                  <span key={j} className={t.color || "text-foreground"}>
                    {t.text}
                  </span>
                ))
              )}
              {i === visibleLines - 1 && line.tokens.length > 0 && (
                <span className="inline-block w-2 h-4 bg-primary ml-0.5 animate-pulse align-middle" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom strip */}
      <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/5 bg-white/[0.02] text-xs">
        <div className="flex items-center gap-3 text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            ESLint: 0
          </span>
          <span>UTF-8</span>
        </div>
        <div className="text-primary font-semibold">+87% interview rate</div>
      </div>
    </div>
  );
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-primary/30 blur-[110px] animate-float-slow" />
        <div className="absolute top-40 right-[5%] w-[28rem] h-[28rem] rounded-full bg-primary-glow/20 blur-[130px] animate-float-slower" />
        <div className="absolute bottom-0 left-[35%] w-96 h-96 rounded-full bg-primary/15 blur-[120px] animate-float-slow" />
        {/* Perspective floor */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64 opacity-30"
          style={{
            background:
              "linear-gradient(to top, oklch(0.68 0.20 254 / 0.15), transparent), linear-gradient(oklch(1 0 0 / 0.05) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.05) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 50px 50px, 50px 50px",
            transform: "perspective(600px) rotateX(60deg)",
            transformOrigin: "bottom",
            maskImage: "linear-gradient(to top, black, transparent)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-3 pl-1 pr-4 py-1 rounded-full glass-card mb-6"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-background bg-gradient-to-br from-primary/70 to-primary-glow/40"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-[#fbbf24] text-[#fbbf24]" />
                  ))}
                </div>
                <span className="text-xs text-silver font-medium">
                  <span className="text-foreground">1,200+</span> talaba ishonadi
                </span>
              </div>
            </motion.div>

            <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
              <span className="text-foreground">2 haftada </span>
              <span className="text-gradient-electric">ishga kiradigan</span>
              <br />
              <span className="text-gradient">dasturchiga aylaning.</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              <span className="text-foreground font-medium">Junior Developer</span> bo'lib ish topish uchun kerakli barcha narsa — bir kursda, 14 kunda.
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
                Bepul Demo Dars
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-primary" />
                3 kun pul qaytarish kafolati
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-primary" />
                Bepul demo dars
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-primary" />
                Sertifikat
              </div>
            </div>
          </motion.div>

          {/* RIGHT - Code editor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-gradient-to-br from-primary/40 via-primary-glow/20 to-transparent blur-3xl rounded-full animate-pulse-glow" />

            <div className="relative">
              <CodeEditor />

              {/* Floating chips */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-6 glass-card-strong rounded-2xl px-3 py-2 text-xs font-medium hidden sm:flex items-center gap-2"
              >
                <Check className="w-3.5 h-3.5 text-primary" />
                Real loyiha
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 glass-card-strong rounded-2xl px-3 py-2 text-xs font-medium hidden sm:flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
                Live deploy
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
