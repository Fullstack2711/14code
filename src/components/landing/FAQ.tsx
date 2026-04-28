import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Haqiqatan ham 2 haftada Junior Developer bo'lish mumkinmi?",
    a: "Ha, agar har kuni 4-6 soat to'liq bag'ishlasangiz. Biz suvga vaqt sarflamaymiz — faqat ishga kerakli bilim. 1200+ talaba bunga amin bo'lgan.",
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
    a: "Ha, dastlabki 3 kun ichida hech qanday savolsiz 100% pul qaytariladi.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 rounded-full glass-card text-xs font-medium text-silver mb-4">
            Savollar
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Tez-tez beriladigan <span className="text-gradient-electric">savollar</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-3xl p-2 sm:p-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/5 last:border-0">
                <AccordionTrigger className="px-4 sm:px-5 py-5 text-left text-base font-medium hover:no-underline hover:text-primary transition-colors">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-5 pb-5 text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
