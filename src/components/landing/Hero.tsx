import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BallpitBackground } from "@/components/ui/interactive-hero-backgrounds";
import { codeLines, heroTextCta, stats } from "@/mock/data";

interface HeroProps {
  onCtaClick: () => void;
}

function CodeEditor() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setVisibleLines((n) => (n >= codeLines.length ? 0 : n + 1));
    }, 550);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="glass-card-strong rounded-2xl overflow-hidden font-mono text-[13px] leading-[1.75]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/2">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="text-xs text-muted-foreground">career.ts</div>
        <div className="w-12" />
      </div>

      <div className="p-5 min-h-[240px]">
        {codeLines.map((line, i) => (
          <div
            key={`code-line-${i}-${line.tokens.map((t) => t.text).join("")}`}
            className="flex gap-4 transition-opacity duration-300"
            style={{ opacity: i < visibleLines ? 1 : 0.15 }}
          >
            <span className="text-muted-foreground/40 select-none w-4 text-right">{i + 1}</span>
            <div className="flex-1 whitespace-pre">
              {line.tokens.length === 0 ? (
                <span>&nbsp;</span>
              ) : (
                line.tokens.map((t, j) => (
                  <span key={`tok-${j}-${t.text}`} className={t.color || "text-foreground"}>
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

      <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/5 bg-white/2 text-xs">
        <div className="flex items-center gap-3 text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Build: passing
          </span>
          <span>UTF-8</span>
        </div>
        <div className="text-primary font-semibold">{heroTextCta.perks[0].title}</div>
      </div>
    </div>
  );
}

export function Hero({ onCtaClick }: HeroProps) {
  const titleWords = heroTextCta.title.split(" ");
  const titleAccent = titleWords.slice(0, 2).join(" ");
  const titleRest = titleWords.slice(2).join(" ");

  return (
    <section className="relative min-h-screen pt-28 pb-16 overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <BallpitBackground
          className="opacity-55"
          ballpitConfig={{
            count: 150,
            gravity: 0.5,
            friction: 0.99,
            minSize: 0.4,
            maxSize: 0.9,
            lightIntensity: 6,
            ambientIntensity: 2.2,
            colors: ["#60a5fa", "#a78bfa", "#22d3ee", "#93c5fd"],
          }}
        />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 left-[10%] w-96 h-96 rounded-full bg-primary/25 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-1/4 right-[8%] w-120 h-120 rounded-full bg-primary-glow/20 blur-[140px] animate-float-slower" />
      </div>

      <div className="mx-auto max-w-6xl px-4 w-full">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* Announcement pill */}
            {/* <motion.button
              onClick={onCtaClick}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group inline-flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full glass-card mb-7 hover:bg-white/[0.06] transition-colors"
            >
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/15 text-primary text-[10px] font-bold uppercase tracking-wider">
                <Sparkles className="w-2.5 h-2.5" />
                Yangi
              </span>
              <span className="text-xs text-silver">
                Mart oqimiga ro'yxat ochildi
              </span>
              <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:translate-x-0.5 group-hover:text-primary transition-all" />
            </motion.button> */}

            <h1 className="inline-block max-w-[16ch] text-balance text-[2.75rem] sm:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] font-extrabold tracking-tight leading-[1.05] lg:leading-[1.02]">
              <span className="block whitespace-nowrap text-center text-gradient-electric drop-shadow-[0_0_18px_oklch(0.68_0.20_254/0.35)]">
                {titleAccent}
              </span>
              <span className="block mt-1 sm:mt-2 whitespace-nowrap text-left text-foreground">
                {titleRest}
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed text-pretty">
              {heroTextCta.description}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                onClick={onCtaClick}
                size="lg"
                className="group bg-linear-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-95 rounded-2xl h-14 px-7 text-base font-semibold shadow-[0_10px_40px_-10px_oklch(0.68_0.20_254/0.7)] transition-all hover:shadow-[0_14px_50px_-10px_oklch(0.68_0.20_254/0.85)] hover:-translate-y-0.5"
              >
                {heroTextCta.buttonText}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={onCtaClick}
                size="lg"
                variant="outline"
                className="group glass-card hover:bg-white/5 rounded-2xl h-14 px-7 text-base font-medium border-white/10 text-foreground"
              >
                <Play className="w-3.5 h-3.5 mr-1 fill-primary text-primary" />
                {heroTextCta.secondaryButtonText}
              </Button>
            </div>

            {/* Trust strip */}
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-primary" />
                <span>{heroTextCta.perks[0].title}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-primary" />
                <span>{heroTextCta.perks[1].title}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-primary" />
                <span>{heroTextCta.perks[2].title}</span>
              </div>
            </div>

            {/* Live stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10 flex items-center gap-6 sm:gap-10"
            >
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-6 sm:gap-10">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-gradient-electric">
                      {s.value}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5">
                      {s.label}
                    </div>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-10 bg-linear-to-b from-transparent via-white/10 to-transparent" />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-linear-to-br from-primary/35 via-primary-glow/15 to-transparent blur-3xl rounded-full animate-pulse-glow" />

            <div className="relative">
              <CodeEditor />

              {/* Floating chips */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-5 glass-card-strong rounded-2xl px-3 py-2 text-xs font-medium hidden sm:flex items-center gap-2"
              >
                <Check className="w-3.5 h-3.5 text-primary" />
                {heroTextCta.perks[0].title}
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute -bottom-4 -right-4 glass-card-strong rounded-2xl px-3 py-2 text-xs font-medium hidden sm:flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
                {heroTextCta.perks[1].title}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
