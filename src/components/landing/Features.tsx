import { motion } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import {
  Code2,
  Braces,
  Atom,
  GitBranch,
  Rocket,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Frontend Asoslari",
    desc: "HTML5, CSS3, Flexbox, Grid va to'liq responsive layout. Pixel perfect dizaynni kodga o'tkazish.",
  },
  {
    icon: Braces,
    title: "JavaScript Mastery",
    desc: "DOM, API, async/await, ES6+, real-world taskar. Tafakkurni dasturchi miyasiga aylantirish.",
  },
  {
    icon: Atom,
    title: "React Ecosystem",
    desc: "Components, Hooks, State management, Router. Zamonaviy React 19 standartlari.",
  },
  {
    icon: GitBranch,
    title: "Git & GitHub",
    desc: "Version control, branching, PR workflow. Komandada ishlash madaniyati.",
  },
  {
    icon: Rocket,
    title: "Portfolio & Deploy",
    desc: "Real loyihalarni Vercel'ga deploy qilish. Jonli URL bilan portfolio yaratish.",
  },
  {
    icon: MessageSquare,
    title: "Interview Prep",
    desc: "HR + Technical mock interview. CV, LinkedIn va ish topish strategiyasi.",
  },
];

function FeatureCard({ icon: Icon, title, desc, index }: typeof features[0] & { index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        className="group relative h-full glass-card rounded-3xl p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-primary/30"
        style={{
          background: `radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), oklch(0.68 0.20 254 / 0.10), transparent 40%), linear-gradient(135deg, oklch(1 0 0 / 0.06) 0%, oklch(1 0 0 / 0.02) 100%)`,
        }}
      >
        <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-glow/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
          <Icon className="w-5 h-5 text-primary" />
          <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
        </div>
        <h3 className="text-xl font-semibold tracking-tight mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="kurs" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full glass-card text-xs font-medium text-silver mb-4">
            Kurs dasturi
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Nima <span className="text-gradient-electric">o'rganasiz</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Junior Developer bo'lib ishga kirish uchun kerak bo'ladigan barcha texnologiyalar — suvsiz, faqat amaliyot.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
