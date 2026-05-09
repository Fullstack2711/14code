import logo from "@/assets/logo.png";
import { footerText } from "@/mock/data";

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Code14 logo"
              width={36}
              height={36}
              className="size-9 object-contain drop-shadow-[0_0_14px_oklch(0.68_0.20_254/0.4)]"
            />
            <span className="sr-only">Code14</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#kurs" className="hover:text-foreground transition-colors">
              {footerText.links[0].label}
            </a>
            <a href="#pricing" className="hover:text-foreground transition-colors">
              {footerText.links[1].label}
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              {footerText.links[2].label}
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {footerText.links[3].label}
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            {`${footerText.copyright} © ${new Date().getFullYear()}`}
          </p>
        </div>
      </div>
    </footer>
  );
}
