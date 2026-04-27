import { motion } from "framer-motion";
import { MessageCircle, FileCheck, Users, Star, Zap } from "lucide-react";
import mentorImg from "@/assets/mentor.jpg";

const perks = [
  { icon: Star, label: "5+ yillik developer" },
  { icon: MessageCircle, label: "1:1 support" },
  { icon: Zap, label: "Daily review" },
  { icon: Users, label: "Telegram community" },
  { icon: FileCheck, label: "CV correction" },
];

export function Mentor() {
  return (
    <section id="mentor" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-block px-3 py-1 rounded-full glass-card text-xs font-medium text-silver mb-4">
            Sizning mentoringiz
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Yakka emassiz —{" "}
            <span className="text-gradient-electric">mentor doim yoningizda</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-transparent blur-3xl rounded-full animate-pulse-glow" />

          <div className="relative glass-card-strong rounded-3xl p-6 sm:p-10 grid sm:grid-cols-[280px_1fr] gap-8 items-center">
            <div className="relative mx-auto sm:mx-0">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary to-primary-glow rounded-3xl blur-xl opacity-50" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border border-white/15">
                <img
                  src={mentorImg}
                  alt="Bosh mentor portreti"
                  loading="lazy"
                  width={768}
                  height={768}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass-card-strong rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
                Online hozir
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">
                Bosh mentor
              </div>
              <h3 className="text-3xl font-bold tracking-tight">Sardor Ahmedov</h3>
              <p className="mt-1 text-muted-foreground">
                Senior Frontend Developer · 5+ yillik tajriba · Ex-Yandex
              </p>

              <p className="mt-5 text-foreground/85 leading-relaxed">
                "Men sizga 14 kunda men o'zim 2 yilda o'rgangan eng muhim narsalarni
                beraman. Suv yo'q. Faqat ishga olib boradigan bilim."
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {perks.map((p) => (
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
        </motion.div>
      </div>
    </section>
  );
}
