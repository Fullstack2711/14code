import { afterFeedback, beforeFeedback } from "@/mock/data";
import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";

export function InterviewSupportSection() {
  return (
    <section id="interview-support" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-block px-3 py-1 rounded-full glass-card text-xs font-medium text-silver mb-4">
            Intervyu tayyorlov
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Har bir sohadan <span className="text-gradient-electric">intervyu yordami</span>
          </h2>
          <div className="mt-4 inline-flex items-center rounded-full bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary">
            Intervyu to'lovi: 100 000 so'm
          </div>
        </motion.div>

        <div className="relative grid md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-7 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/5 blur-3xl rounded-full" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
                Intervyudan oldin
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-muted-foreground/90">
                Tayyorgarlik va feedback
              </h3>
              <ul className="mt-6 space-y-3">
                {beforeFeedback.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <X className="w-4 h-4 mt-0.5 text-red-400/70 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-14 h-14 rounded-full bg-linear-to-br from-primary to-primary-glow flex items-center justify-center shadow-[0_0_30px_oklch(0.68_0.20_254/0.6)]">
              <ArrowRight className="w-6 h-6 text-primary-foreground" />
              <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card-strong rounded-3xl p-7 relative overflow-hidden border-primary/20"
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-primary/15 blur-3xl rounded-full" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                Intervyudan keyin
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-gradient">
                Kamchiliklarni to'ldirish
              </h3>
              <ul className="mt-6 space-y-3">
                {afterFeedback.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
