import mentorImg from "@/assets/mentor.jpg";
import { Check, Clock, FileCheck, MessageCircle, Star, Users, Zap } from "lucide-react";
import { Code2, Trophy, Braces, Atom, GitBranch, Rocket, MessageSquare } from "lucide-react";
export const content = {
  sectionBadge: "Sizning mentoringiz",
  titlePrefix: "Yakka emassiz —",
  titleHighlight: "mentor doim yoningizda",
  mentors: [
    {
      name: "Ibrohimov Zafar",
      role: "Frontend",
      quote: `"Men sizga 14 kunda men o'zim 2 yilda o'rgangan eng muhim narsalarni beraman. Suv yo'q. Faqat ishga olib boradigan bilim."`,
      status: "Online hozir",
      image: { src: mentorImg, alt: "Bosh mentor portreti", width: 768, height: 768 },
      perks: [
        { icon: Star, label: "5+ yillik developer" },
        { icon: MessageCircle, label: "1:1 support" },
        { icon: Zap, label: "Daily review" },
        { icon: Users, label: "Telegram community" },
        { icon: FileCheck, label: "CV correction" },
      ],
    },
    {
      name: "Ganijonov Abusaid",
      role: "Backend (Python)",
      quote: `"Men sizga 14 kunda men o'zim 2 yilda o'rgangan eng muhim narsalarni beraman. Suv yo'q. Faqat ishga olib boradigan bilim."`,
      status: "Online hozir",
      image: { src: mentorImg, alt: "Bosh mentor portreti", width: 768, height: 768 },
      perks: [
        { icon: Star, label: "5+ yillik developer" },
        { icon: MessageCircle, label: "1:1 support" },
        { icon: Zap, label: "Daily review" },
        { icon: Users, label: "Telegram community" },
        { icon: FileCheck, label: "CV correction" },
      ],
    },
    {
      name: "Isoq Usmonov",
      role: "Backend (C#)",
      quote: `"Men sizga 14 kunda men o'zim 2 yilda o'rgangan eng muhim narsalarni beraman. Suv yo'q. Faqat ishga olib boradigan bilim."`,
      status: "Online hozir",
      image: { src: mentorImg, alt: "Bosh mentor portreti", width: 768, height: 768 },
      perks: [
        { icon: Star, label: "5+ yillik developer" },
        { icon: MessageCircle, label: "1:1 support" },
        { icon: Zap, label: "Daily review" },
        { icon: Users, label: "Telegram community" },
        { icon: FileCheck, label: "CV correction" },
      ],
    },
    {
      name: "Ibrohimov Zafar",
      role: "Backend (Node.js)",
      quote: `"Men sizga 14 kunda men o'zim 2 yilda o'rgangan eng muhim narsalarni beraman. Suv yo'q. Faqat ishga olib boradigan bilim."`,
      status: "Online hozir",
      image: { src: mentorImg, alt: "Bosh mentor portreti", width: 768, height: 768 },
      perks: [
        { icon: Star, label: "5+ yillik developer" },
        { icon: MessageCircle, label: "1:1 support" },
        { icon: Zap, label: "Daily review" },
        { icon: Users, label: "Telegram community" },
        { icon: FileCheck, label: "CV correction" },
      ],
    },
    {
      name: "Mansurov Abdulaziz",
      role: "PM",
      quote: `"Men sizga 14 kunda men o'zim 2 yilda o'rgangan eng muhim narsalarni beraman. Suv yo'q. Faqat ishga olib boradigan bilim."`,
      status: "Online hozir",
      image: { src: mentorImg, alt: "Bosh mentor portreti", width: 768, height: 768 },
      perks: [
        { icon: Star, label: "5+ yillik developer" },
        { icon: MessageCircle, label: "1:1 support" },
        { icon: Zap, label: "Daily review" },
        { icon: Users, label: "Telegram community" },
        { icon: FileCheck, label: "CV correction" },
      ],
    },
    {
      name: "Ibrohimov Zafar",
      role: "Mobile (React Native)",
      quote: `"Men sizga 14 kunda men o'zim 2 yilda o'rgangan eng muhim narsalarni beraman. Suv yo'q. Faqat ishga olib boradigan bilim."`,
      status: "Online hozir",
      image: { src: mentorImg, alt: "Bosh mentor portreti", width: 768, height: 768 },
      perks: [
        { icon: Star, label: "5+ yillik developer" },
        { icon: MessageCircle, label: "1:1 support" },
        { icon: Zap, label: "Daily review" },
        { icon: Users, label: "Telegram community" },
        { icon: FileCheck, label: "CV correction" },
      ],
    },
    {
      name: "Yo'lchiyev Abqodir",
      role: "Mobile (Flutter)",
      quote: `"Men sizga 14 kunda men o'zim 2 yilda o'rgangan eng muhim narsalarni beraman. Suv yo'q. Faqat ishga olib boradigan bilim."`,
      status: "Online hozir",
      image: { src: mentorImg, alt: "Bosh mentor portreti", width: 768, height: 768 },
      perks: [
        { icon: Star, label: "5+ yillik developer" },
        { icon: MessageCircle, label: "1:1 support" },
        { icon: Zap, label: "Daily review" },
        { icon: Users, label: "Telegram community" },
        { icon: FileCheck, label: "CV correction" },
      ],
    },
  ],
};

export const before = [
  "Bilim yo'q, qayerdan boshlashni bilmaydi",
  "Ish topa olmayapti, javoblar kelmaydi",
  "YouTube videolardan chalkashib qolgan",
  "Portfolio yo'q, CV bo'sh",
];
export const after = [
  "Real loyihalar bilan to'la portfolio",
  "Interview o'tkazadi, taklif oladi",
  "Aniq texnologiyalarni biladi",
  "Junior Developer sifatida ishga kirgan",
];
export const faqs = [
  {
    q: "Haqiqatan ham 2 haftada Junior Developer bo'lish mumkinmi?",
    a: "Ha, agar har kuni 4-6 soat to'liq bag'ishlasangiz. Biz suvga vaqt sarflamaymiz — faqat ishga kerakli bilim. 200+ talaba bunga amin bo'lgan.",
  },
  {
    q: "Nol bilim bilan kirsam bo'ladimi?",
    a: "Ha, kurs noldan boshlanadi. Muhimi — vaqt ajratish va mentor ko'rsatmalarini bajarish. Kompyuter va internet — yetarli.",
  },
  {
    q: "Ish topishga yordam berasizmi?",
    a: "Pro tarif bilan: CV/LinkedIn correction, mock interview, ish e'lonlari va to'g'ridan-to'g'ri kompaniyalarga tavsiya. 300+ talabamiz allaqachon ishga kirgan.",
  },
  {
    q: "Darslar yozib olinadimi?",
    a: "Ha, barcha darslar yozib olinadi va sizda umrbod qoladi. Istalgan vaqt qayta ko'rishingiz mumkin.",
  },
  {
    q: "Agar yoqmasa, pul qaytariladimi?",
    a: "Ha, dastlabki 1 kun ichida hech qanday savolsiz 100% pul qaytariladi.",
  },
];
export const features = [
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
export const finalCta = {
  title: "Bugun boshlang.",
  subtitle: "14 kundan keyin hayotingiz o'zgaradi.",
  description: "Eng yaxshi vaqt — hozir. Ikkinchi yaxshi vaqt — hech qachon.",
  buttonText: "Ro'yxatdan O'tish",
  buttonLink: "/register",
  perks: [
    {
      icon: Check,
      title: "1 kun ichida pul qaytarish kafolati",
      description: "Bepul konsultatsiya",
    },
  ],
};
export const footerText = {
  copyright: "© 2026 Code14. Barcha huquqlar himoyalangan.",
  links: [
    { href: "#kurs", label: "Kurs" },
    { href: "#pricing", label: "Narxlar" },
    { href: "#faq", label: "FAQ" },
    { href: "https://t.me", label: "Telegram" },
  ],
};
export const headerLinks = [
  { href: "#kurs", label: "Kurs" },
  // { href: "#roadmap", label: "Roadmap" },
  { href: "#mentor", label: "Mentor" },
  { href: "#modullar", label: "Modullar" },
  { href: "#pricing", label: "Narxlar" },
  { href: "#faq", label: "FAQ" },
];
export const codeLines: { tokens: { text: string; color?: string }[] }[] = [
  { tokens: [{ text: "// 14 kunlik transformatsiya", color: "text-muted-foreground" }] },
  {
    tokens: [
      { text: "const", color: "text-[#c084fc]" },
      { text: " ", color: "text-foreground" },
      { text: "you", color: "text-[#60a5fa]" },
      { text: " = ", color: "text-foreground" },
      { text: "await", color: "text-[#c084fc]" },
      { text: " ", color: "text-foreground" },
      { text: "learn", color: "text-[#fbbf24]" },
      { text: "({", color: "text-foreground" },
    ],
  },
  {
    tokens: [
      { text: "  duration: ", color: "text-foreground" },
      { text: "'14 days'", color: "text-[#86efac]" },
      { text: ",", color: "text-foreground" },
    ],
  },
  {
    tokens: [
      { text: "  practice: ", color: "text-foreground" },
      { text: "'100%'", color: "text-[#86efac]" },
      { text: ",", color: "text-foreground" },
    ],
  },
  {
    tokens: [
      { text: "  result: ", color: "text-foreground" },
      { text: "'junior-dev'", color: "text-[#86efac]" },
    ],
  },
  { tokens: [{ text: "});", color: "text-foreground" }] },
  { tokens: [] },
  { tokens: [{ text: "// → Ofer qo'lingizda", color: "text-muted-foreground" }] },
];

export const stats = [
  { value: "200+", label: "Bitiruvchi" },
  { value: "87%", label: "Ish topdi" },
  { value: "14", label: "Kun" },
];
export const heroTextCta = {
  title: "2 Haftada Junior Dasturchi",
  description:
    "100% amaliy kurs. Real loyihalar, mentor qo'llab-quvvatlashi va ishga joylashish kafolati — 14 kunda.",
  buttonText: "Joyimni Band Qilish",
  secondaryButtonText: "Kurs haqida",
  buttonLink: "/register",
  perks: [
    {
      icon: Check,
      title: "1 kun pul qaytarish kafolati",
      description: "Bepul konsultatsiya",
    },
    {
      icon: Check,
      title: "Real loyihalar va portfolio",
      description: "",
    },
    {
      icon: Check,
      title: "Mentor bilan 1:1 qo'llab-quvvatlash",
      description: "",
    },
  ],
} as const;

export const beforeFeedback = [
  "CV va portfolio bo'yicha tahlil",
  "Intervyuda tushishi mumkin bo'lgan savollarga tayyorgarlik rejasi",
  "Sinov intervyu va aniq feedback",
];

export const afterFeedback = [
  "Qilingan xatolar bo'yicha to'liq tahlil",
  "Kamchiliklarni to'ldirish uchun bosqichma-bosqich qo'llanma",
  "Keyingi intervyugacha nazorat checklist",
];

export const TABS = [
  { label: "Barchasi", key: "all" },
  { label: "Frontend", key: "Frontend" },
  { label: "Backend", key: "Backend" },
  { label: "Mobile", key: "Mobile" },
  { label: "PM", key: "PM" },
];
export const tracks = [
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
      { day: "13-kun", title: "Full Project", desc: "Real API + GitHub + README FILE" },
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
export const plans = [
  {
    name: "Starter",
    price: "300,000",
    desc: "Video kurs + materiallar",
    features: [
      "14 kunlik video darslar",
      "Barcha materiallar va vazifalar",
      "Telegram community",
      "Sertifikat",
    ],
    cta: "Tanlash",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "500,000",
    desc: "Kurs + mentor qo'llab-quvvatlash",
    features: [
      "Starter'dagi hammasi",
      "Mentor daily review",
      "Loyiha feedback",
      "CV correction",
      "Priority Telegram support",
    ],
    cta: "Joyni Band Qilish",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "1,200,000",
    desc: "Ish topishni kafolatlaymiz",
    features: [
      "Standard'dagi hammasi",
      "1:1 mentor sessions",
      "LinkedIn correction",
      "Mock interview (HR + Tech)",
      "Ish topishga to'g'ridan-to'g'ri yordam",
      "Kompaniyalarga tavsiya",
    ],
    cta: "Pro Joyni Band Qilish",
    highlighted: false,
  },
];
export const PricingText = {
  title: "Joyingizni ",
  subtitle: "band qiling",
  description: "Ro'yxat yopiladi:",
} as const;

export const RegistrationText = {
  title: "Joyingizni band qiling",
  description: "Ma'lumotlaringizni qoldiring — 24 soat ichida bog'lanamiz.",
  nameLabel: "Ism Familiya",
  phoneLabel: "Telefon raqam",
  emailLabel: "Email",
  planLabel: "Tarif",
  disclaimer: "Yuborish orqali siz shaxsiy ma'lumotlarni qayta ishlashga rozilik bildirasiz.",
  submitButtonText: "Joyni Band Qilish",
  plans: plans.map((p) => ({
    value: p.name.toLowerCase(),
    label: p.name,
    price: p.price,
  })),
} as const;
export const days = [
  { day: "1-kun", title: "HTML & CSS", desc: "Semantic markup, modern CSS, BEM" },
  { day: "3-kun", title: "Responsive Layout", desc: "Flexbox, Grid, Mobile-first" },
  { day: "5-kun", title: "JavaScript", desc: "ES6+, DOM, Events, Logic" },
  { day: "7-kun", title: "API & Async", desc: "Fetch, Promises, async/await" },
  { day: "9-kun", title: "React Basics", desc: "Components, Props, State, Hooks" },
  { day: "11-kun", title: "Full Project", desc: "Real React + API loyiha" },
  { day: "13-kun", title: "CV + GitHub", desc: "Portfolio, deploy, LinkedIn" },
  { day: "14-kun", title: "Interview & Apply", desc: "Mock interview, ish topish" },
] as const;

export const RoadmapText = {
  title: "Sizning",
  subtitle: "Roadmap",
  description: "Har bir kun aniq natijaga olib boradi. Suvga qaytmaymiz — faqat oldinga.",
  plan: "14 kun · Aniq reja",
} as const;

export const SocialProofText = [
  { value: 200, suffix: "+", label: "Talaba" },
  { value: 100, suffix: "+", label: "Ishga kirgan" },
  { value: 95, suffix: "%", label: "Mamnunlik" },
  { value: 40, suffix: "+", label: "Real loyiha" },
] as const;

export const SocialProofCompanies = [
  "Google",
  "Amazon",
  "Meta",
  "Microsoft",
  "Uber",
  "Netflix",
  "Spotify",
  "Airbnb",
] as const;

export const SocialProofHeadingText = {
  title: "Bitiruvchilarimiz ishlaydigan kompaniyalar",
  description: "Bitiruvchilarimiz ishlaydigan kompaniyalar",
} as const;

export const reasons = [
  {
    num: "01",
    icon: Clock,
    title: "14 kun. 6 oy emas.",
    desc: "Boshqalar suvga to'ldirgan dasturni biz siqib, faqat ish uchun kerakli qismini qoldirdik.",
    metric: "13x",
    metricLabel: "tezroq",
  },
  {
    num: "02",
    icon: Code2,
    title: "Birinchi kundan kod",
    desc: "Nazariya yo'q. Har bir dars — real loyiha. Birinchi soatdan o'z qo'lingiz bilan yozasiz.",
    metric: "100%",
    metricLabel: "amaliyot",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Real bozor stack'i",
    desc: "HTML, CSS, JavaScript, React, Git — Toshkent ish e'lonlarida eng ko'p so'raladigan to'plam.",
    metric: "6",
    metricLabel: "texnologiya",
  },
  {
    num: "04",
    icon: Trophy,
    title: "Ish topishgacha yo'naltiramiz",
    desc: "CV, portfolio, mock interview va tanish kompaniyalarga tavsiya — narx ichida.",
    metric: "100+",
    metricLabel: "ishga kirgan",
  },
];

export const WhyCourseText = {
  title: "Nima uchun Code14",
  subtitle: "To'rt sabab — 14 kun yetarli.",
  description:
    "Nazariya emas, ish bozori uchun siqilgan amaliy dastur. Har bir element bitta maqsadga xizmat qiladi — sizni Junior Developer qilish.",
} as const;
