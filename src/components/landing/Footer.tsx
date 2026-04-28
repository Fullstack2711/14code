import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Code14 logo"
              className="w-9 h-9 object-contain drop-shadow-[0_0_14px_oklch(0.68_0.20_254/0.4)]"
            />
            <span className="sr-only">Code14</span>
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
