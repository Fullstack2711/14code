import { m } from "framer-motion";
import { useRef, useState, type MouseEvent } from "react";
import {
  Atom,
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers,
  MessageSquare,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const featureGroups: {
  key: string;
  label: string;
  description: string;
  items: FeatureItem[];
}[] = [
  {
    key: "frontend",
    label: "Frontend",
    description:
      "Veb interfeys, JavaScript, React va portfolio uchun kerak bo'ladigan amaliy ko'nikmalar.",
    items: [
      {
        icon: Code2,
        title: "HTML & CSS",
        desc: "Semantic markup, Flexbox, Grid, responsive layout va dizaynni kodga toza ko'chirish.",
      },
      {
        icon: Braces,
        title: "JavaScript",
        desc: "DOM, events, async/await, API bilan ishlash va real vazifalarda mantiq qurish.",
      },
      {
        icon: Atom,
        title: "React Ecosystem",
        desc: "Components, props, state, hooks, routing va zamonaviy React amaliyoti.",
      },
      {
        icon: GitBranch,
        title: "Git & GitHub",
        desc: "Branching, commit, pull request, README va komandada ishlash madaniyati.",
      },
      {
        icon: Rocket,
        title: "Portfolio & Deploy",
        desc: "Real loyihalarni deploy qilish, jonli URL va ish beruvchiga ko'rsatadigan portfolio.",
      },
      {
        icon: MessageSquare,
        title: "Interview Prep",
        desc: "Frontend savollari, CV, LinkedIn va junior vakansiyalarga topshirish strategiyasi.",
      },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    description:
      "Server, API, database, auth va deploy bilan real backend loyiha chiqarish bosqichlari.",
    items: [
      {
        icon: Server,
        title: "Backend Asoslari",
        desc: "Node.js, Python yoki C# yo'nalishida server logikasi, routing va request lifecycle.",
      },
      {
        icon: Database,
        title: "Database",
        desc: "PostgreSQL yoki MongoDB, schema, CRUD, relation va querylarni amalda ishlatish.",
      },
      {
        icon: Braces,
        title: "REST API",
        desc: "Endpointlar, validation, error handling, pagination va productionga yaqin API.",
      },
      {
        icon: ShieldCheck,
        title: "Auth & Security",
        desc: "JWT, password hashing, protected routes, role-based access va xavfsizlik asoslari.",
      },
      {
        icon: Cloud,
        title: "Docker & Deploy",
        desc: "Environment variables, server deploy, logs va loyihani internetga chiqarish.",
      },
      {
        icon: MessageSquare,
        title: "Backend Interview",
        desc: "Database, API, auth, system thinking va backend junior savollariga tayyorlanish.",
      },
    ],
  },
  {
    key: "mobile",
    label: "Mobile",
    description:
      "React Native yoki Flutter orqali mobile UI, navigation, state, API va publish jarayoni.",
    items: [
      {
        icon: Smartphone,
        title: "Mobile UI",
        desc: "Responsive ekranlar, native komponentlar, layout va platformaga mos dizayn.",
      },
      {
        icon: Layers,
        title: "Navigation",
        desc: "Stack, tabs, params, protected screens va real app strukturasini qurish.",
      },
      {
        icon: Atom,
        title: "State Management",
        desc: "React Native yoki Flutter state boshqaruvi, forms, local storage va app flow.",
      },
      {
        icon: Cloud,
        title: "API Integration",
        desc: "Backend bilan ulanish, loading/error states, auth token va real data bilan ishlash.",
      },
      {
        icon: Rocket,
        title: "Build & Publish",
        desc: "APK/TestFlight tayyorlash, app konfiguratsiya va portfolio uchun demo chiqarish.",
      },
      {
        icon: MessageSquare,
        title: "Mobile Interview",
        desc: "Mobile junior savollari, loyiha himoyasi, CV va ishga topshirish tayyorgarligi.",
      },
    ],
  },
];

function FeatureCard({ icon: Icon, title, desc, index }: FeatureItem & { index: number }) {
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
    <m.div
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
        <div className="relative size-12 rounded-2xl bg-linear-to-br from-primary/20 to-primary-glow/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
          <Icon className="size-5 text-primary" />
          <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
        </div>
        <h3 className="text-xl font-semibold tracking-tight mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </m.div>
  );
}

export function Features() {
  const [activeKey, setActiveKey] = useState(featureGroups[0].key);
  const activeGroup = featureGroups.find((group) => group.key === activeKey) ?? featureGroups[0];

  return (
    <section id="kurs" aria-labelledby="kurs-heading" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full glass-card text-xs font-medium text-silver mb-4">
            Kurs dasturi
          </div>
          <h2 id="kurs-heading" className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Nima <span className="text-gradient-electric">o'rganasiz</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Frontend, Backend yoki Mobile yo'nalishidan birini tanlang — har birida ishga kerakli
            amaliy ko'nikmalar bor.
          </p>
        </m.div>

        <div
          className="mb-8 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Kurs yo'nalishlari"
        >
          {featureGroups.map((group) => {
            const active = group.key === activeKey;

            return (
              <button
                key={group.key}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls={`features-panel-${group.key}`}
                id={`features-tab-${group.key}`}
                onClick={() => setActiveKey(group.key)}
                className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  active ? "text-background" : "glass-card text-silver hover:text-foreground"
                }`}
              >
                {active && (
                  <m.span
                    layoutId="features-tab-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{group.label}</span>
              </button>
            );
          })}
        </div>

        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-muted-foreground">
          {activeGroup.description}
        </p>

        <div
          key={activeGroup.key}
          id={`features-panel-${activeGroup.key}`}
          role="tabpanel"
          aria-labelledby={`features-tab-${activeGroup.key}`}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {activeGroup.items.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
