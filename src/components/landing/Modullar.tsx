import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const tracks = [
  {
    key: "frontend",
    label: "Frontend",
    days: [
      { day: "1-kun", title: "HTML & CSS", desc: "Semantic markup, modern CSS, BEM" },
      { day: "3-kun", title: "Responsive Layout", desc: "Flexbox, Grid, Mobile-first" },
      { day: "5-kun", title: "JavaScript", desc: "ES6+, DOM, Events, Logic" },
      { day: "7-kun", title: "API & Async", desc: "Fetch, Promises, async/await" },
      { day: "9-kun", title: "React Basics", desc: "Components, Props, State, Hooks" },
      { day: "11-kun", title: "Full Project", desc: "Real React + API loyiha" },
      { day: "13-kun", title: "CV + GitHub", desc: "Portfolio, deploy, LinkedIn" },
      { day: "14-kun", title: "Interview & Apply", desc: "Mock interview, ish topish" },
    ],
  },
  {
    key: "python",
    label: "Backend (Python)",
    days: [
      { day: "1-kun", title: "Python Basics", desc: "Syntax, types, functions, OOP" },
      { day: "3-kun", title: "Data Structures", desc: "List, dict, set, comprehensions" },
      { day: "5-kun", title: "FastAPI Setup", desc: "Routing, request/response, Pydantic" },
      { day: "7-kun", title: "Database & SQL", desc: "PostgreSQL, SQLAlchemy, migrations" },
      { day: "9-kun", title: "REST API", desc: "CRUD, validation, error handling" },
      { day: "11-kun", title: "Auth & Deploy", desc: "JWT, OAuth2, Docker basics" },
      { day: "13-kun", title: "Full Project", desc: "Real API + GitHub + README" },
      { day: "14-kun", title: "Interview & Apply", desc: "Mock interview, ish topish" },
    ],
  },
  {
    key: "csharp",
    label: "Backend (C#)",
    days: [
      { day: "1-kun", title: "C# & .NET Basics", desc: "Syntax, types, OOP, LINQ" },
      { day: "3-kun", title: "ASP.NET Core", desc: "Controllers, routing, middleware" },
      { day: "5-kun", title: "EF Core & DB", desc: "Code-first, migrations, relations" },
      { day: "7-kun", title: "REST API", desc: "CRUD endpoints, DTOs, validation" },
      { day: "9-kun", title: "Auth & Security", desc: "JWT, Identity, CORS" },
      { day: "11-kun", title: "Full Project", desc: "Real API + Swagger + GitHub" },
      { day: "13-kun", title: "CV + LinkedIn", desc: "Portfolio, deploy, profil" },
      { day: "14-kun", title: "Interview & Apply", desc: "Mock interview, ish topish" },
    ],
  },
  {
    key: "nodejs",
    label: "Backend (Node.js)",
    days: [
      { day: "1-kun", title: "Node.js Basics", desc: "Modules, npm, file system, events" },
      { day: "3-kun", title: "Express.js", desc: "Routing, middleware, REST basics" },
      { day: "5-kun", title: "MongoDB & Mongoose", desc: "Schema, CRUD, relations" },
      { day: "7-kun", title: "REST API", desc: "Full CRUD, validation, error handling" },
      { day: "9-kun", title: "Auth & JWT", desc: "bcrypt, token, protected routes" },
      { day: "11-kun", title: "Full Project", desc: "Real API + GitHub + README" },
      { day: "13-kun", title: "Deploy & CV", desc: "Railway/Render, portfolio, LinkedIn" },
      { day: "14-kun", title: "Interview & Apply", desc: "Mock interview, ish topish" },
    ],
  },
  {
    key: "reactnative",
    label: "Mobile (React Native)",
    days: [
      { day: "1-kun", title: "JS & React Review", desc: "ES6+, components, hooks" },
      { day: "3-kun", title: "React Native Setup", desc: "Expo, layout, StyleSheet" },
      { day: "5-kun", title: "Navigation", desc: "React Navigation, stacks, tabs" },
      { day: "7-kun", title: "State & Storage", desc: "Zustand, AsyncStorage" },
      { day: "9-kun", title: "API Integration", desc: "Fetch, Axios, loading states" },
      { day: "11-kun", title: "Full App", desc: "Real mobile app + GitHub" },
      { day: "13-kun", title: "Publish & CV", desc: "TestFlight/Play Store, portfolio" },
      { day: "14-kun", title: "Interview & Apply", desc: "Mock interview, ish topish" },
    ],
  },
  {
    key: "flutter",
    label: "Mobile (Flutter)",
    days: [
      { day: "1-kun", title: "Dart Basics", desc: "Types, functions, OOP, null safety" },
      { day: "3-kun", title: "Flutter Widgets", desc: "Stateless/Stateful, layouts" },
      { day: "5-kun", title: "Navigation & UI", desc: "Navigator 2.0, themes, animations" },
      { day: "7-kun", title: "State Management", desc: "Provider / Riverpod" },
      { day: "9-kun", title: "API & HTTP", desc: "dio, JSON parsing, error handling" },
      { day: "11-kun", title: "Full App", desc: "Real Flutter app + GitHub" },
      { day: "13-kun", title: "Publish & CV", desc: "Play Store, App Store, portfolio" },
      { day: "14-kun", title: "Interview & Apply", desc: "Mock interview, ish topish" },
    ],
  },
  {
    key: "pm",
    label: "PM",
    days: [
      { day: "1-kun", title: "Product Basics", desc: "PM roli, product thinking, market fit" },
      { day: "3-kun", title: "User Research", desc: "Interviews, personas, JTBD" },
      { day: "5-kun", title: "Agile & Scrum", desc: "Sprints, backlog, ceremonies" },
      { day: "7-kun", title: "Roadmap Planning", desc: "Prioritization, OKRs, MoSCoW" },
      { day: "9-kun", title: "Metrics & Analytics", desc: "KPIs, funnels, A/B testing" },
      { day: "11-kun", title: "Product Case", desc: "Real product case study" },
      { day: "13-kun", title: "Portfolio", desc: "Case study yozish, LinkedIn" },
      { day: "14-kun", title: "Interview & Apply", desc: "Mock interview, ish topish" },
    ],
  },
];

function TrackRoadmap({ days }: { days: (typeof tracks)[0]["days"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10">
        <motion.div
          style={{ height: lineHeight }}
          className="absolute top-0 left-0 right-0 bg-linear-to-b from-primary via-primary-glow to-primary shadow-[0_0_12px_oklch(0.68_0.20_254)]"
        />
      </div>

      <div className="space-y-12 sm:space-y-16">
        {days.map((d, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={d.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex items-center ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"}`}
            >
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                <div className="relative w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_oklch(0.68_0.20_254)] border-2 border-background">
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                </div>
              </div>

              <div className="hidden sm:block w-1/2" />

              <div
                className={`pl-12 sm:pl-0 w-full sm:w-1/2 ${isLeft ? "sm:pl-12" : "sm:pr-12 sm:text-right"}`}
              >
                <div className="glass-card rounded-2xl p-5 inline-block max-w-md">
                  <div className="text-xs font-semibold text-primary tracking-wider uppercase mb-1">
                    {d.day}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{d.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{d.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function Modullar() {
  const [tab, setTab] = useState("frontend");
  const active = tracks.find((t) => t.key === tab)!;

  return (
    <section id="modullar" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 bg-primary/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-block px-3 py-1 rounded-full glass-card text-xs font-medium text-silver mb-4">
            14 kun · Har bir yo'nalish
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="text-gradient">Yo'nalishingizni</span>{" "}
            <span className="text-gradient-electric">tanlang</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Har bir yo'nalish uchun alohida 14 kunlik reja — aniq, amaliy, natijaga yo'naltirilgan.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {tracks.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${tab === t.key ? "text-background" : "glass-card text-silver hover:text-foreground"}`}
            >
              {tab === t.key && (
                <motion.span
                  layoutId="modullar-tab-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>

        <TrackRoadmap key={tab} days={active.days} />
      </div>
    </section>
  );
}
