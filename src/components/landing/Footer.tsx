import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <Code2 className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold tracking-tight">
              Code<span className="text-gradient-electric">14</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#kurs" className="hover:text-foreground transition-colors">Kurs</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Narxlar</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            <a href="https://t.me" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
              Telegram
            </a>
          </div>

          <div className="text-xs text-muted-foreground">
            © 2026 Code14. Barcha huquqlar himoyalangan.
          </div>
        </div>
      </div>
    </footer>
  );
}
