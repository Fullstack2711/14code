import { AnimatePresence, m } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { content, TABS } from "@/mock/data";

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

export function Mentor() {
  const [tab, setTab] = useState("all");
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const filtered =
    tab === "all" ? content.mentors : content.mentors.filter((mentor) => mentor.role.includes(tab));

  const total = filtered.length;

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + total) % total);
  };

  const switchTab = (key: string) => {
    setDirection(1);
    setIndex(0);
    setTab(key);
  };

  const mentor = filtered[index];

  return (
    <section id="mentor" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-block px-3 py-1 rounded-full glass-card text-xs font-medium text-silver mb-4">
            {content.sectionBadge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            {content.titlePrefix}{" "}
            <span className="text-gradient-electric">{content.titleHighlight}</span>
          </h2>
        </m.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => switchTab(t.key)}
              className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${tab === t.key ? "text-background" : "glass-card text-silver hover:text-foreground"}`}
            >
              {tab === t.key && (
                <m.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <m.div
              key={`${mentor.name}-${mentor.role}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-linear-to-br from-primary/30 to-transparent blur-3xl rounded-full animate-pulse-glow pointer-events-none" />
              <div className="relative glass-card-strong rounded-3xl p-6 sm:p-10 grid sm:grid-cols-[280px_1fr] gap-8 items-center">
                <div className="relative mx-auto sm:mx-0">
                  <div className="absolute -inset-2 bg-linear-to-br from-primary to-primary-glow rounded-3xl blur-xl opacity-50" />
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border border-white/15">
                    <img
                      src={mentor.image.src}
                      alt={mentor.image.alt}
                      loading="lazy"
                      width={mentor.image.width}
                      height={mentor.image.height}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass-card-strong rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1.5 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
                    {mentor.status}
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold tracking-tight">{mentor.name}</h3>
                  <p className="mt-1 text-muted-foreground">{mentor.role}</p>
                  <p className="mt-5 text-foreground/85 leading-relaxed">{mentor.quote}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {mentor.perks.map((p) => (
                      <div
                        key={p.label}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card text-xs font-medium text-silver"
                      >
                        <p.icon className="w-3.5 h-3.5 text-primary" />
                        {p.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </m.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            className="glass-card rounded-full p-2.5 hover:bg-white/10 transition-colors"
            aria-label="Oldingi"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="flex items-center gap-2">
            {content.mentors.map((mentor_item, i) => (
              <button
                key={mentor_item.name}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === index ? "w-6 h-2 bg-primary" : "size-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Mentor ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className="glass-card rounded-full p-2.5 hover:bg-white/10 transition-colors"
            aria-label="Keyingi"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
