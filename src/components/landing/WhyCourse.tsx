import { motion } from "framer-motion";
import { Check, Target, Zap, Briefcase } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "6 oy emas — 14 kun intensiv",
    desc: "Ortiqcha vaqt yo'q. Faqat eng kerakli bilim, maksimal tezlikda.",
  },
  {
    icon: Target,
    title: "Faqat ish uchun kerakli tech",
    desc: "Tarix darslari yo'q. Real ish e'lonlaridan kelib chiqib o'rgatamiz.",
  },
  {
    icon: Check,
    title: "Zero water theory",
    desc: "Har bir dars amaliyot. Birinchi kundan kod yozasiz.",
  },
  {
    icon: Briefcase,
    title: "Ish topishga 100% focus",
    desc: "CV, portfolio, interview — barchasi kursning bir qismi.",
  },
];

export function WhyCourse() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-3 py-1 rounded-full glass-card text-xs font-medium text-silver mb-4">
              Nima uchun bu kurs
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Boshqalar 6 oy o'rgatadi.
              <br />
              <span className="text-gradient-electric">Biz 14 kunda ishga qo'yamiz.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Sanoatda ishlovchi mentorlar tomonidan ishlab chiqilgan, faqat amaliy natijaga yo'naltirilgan dastur.
            </p>

            <div className="mt-10 space-y-5">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 flex items-center justify-center">
                    <r.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold tracking-tight">{r.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Glass orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square max-w-md mx-auto w-full"
          >
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-primary-glow/30 to-transparent blur-3xl animate-pulse-glow" />

            {/* Rotating gradient ring */}
            <div className="absolute inset-4 rounded-full animate-spin-slow opacity-70" style={{
              background: "conic-gradient(from 0deg, oklch(0.68 0.20 254), oklch(0.55 0.22 280), oklch(0.45 0.20 240), oklch(0.68 0.20 254))",
              filter: "blur(20px)",
            }} />

            {/* Glass sphere */}
            <div className="absolute inset-10 rounded-full glass-card-strong overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-primary/20" />
              {/* Highlight */}
              <div className="absolute top-6 left-8 w-20 h-20 rounded-full bg-white/20 blur-2xl" />
              {/* Inner content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="text-7xl font-bold text-gradient">14</div>
                <div className="text-sm tracking-[0.3em] uppercase text-silver mt-2">Kun</div>
                <div className="mt-6 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-xs text-primary font-medium">
                  Junior tayyor
                </div>
              </div>
            </div>

            {/* Orbiting dots */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_oklch(0.68_0.20_254)]" />
              <div className="absolute bottom-4 right-8 w-2 h-2 rounded-full bg-primary-glow shadow-[0_0_10px_oklch(0.78_0.18_248)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
