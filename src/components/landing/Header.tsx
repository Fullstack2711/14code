import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { headerLinks } from "@/mock/data";

interface HeaderProps {
  onCtaClick: () => void;
}

export function Header({ onCtaClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    let previous = window.scrollY > 20;
    setScrolled(previous);

    const update = () => {
      frame = 0;
      const next = window.scrollY > 20;
      if (next !== previous) {
        previous = next;
        setScrolled(next);
      }
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className={cn("mx-auto max-w-6xl px-4 transition-all duration-500", scrolled && "px-3")}>
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500",
            scrolled ? "glass-card-strong" : "border border-transparent",
          )}
        >
          <Link to="/" className="flex items-center gap-2 group" aria-label="Code14 — Bosh sahifa">
            <img
              src={logo}
              alt="Code14 logo"
              width={40}
              height={40}
              className="size-10 scale-150 md:scale-150 object-contain drop-shadow-[0_0_18px_oklch(0.68_0.20_254/0.45)] group-hover:scale-105 transition-transform"
            />
            <span className="sr-only">Code14</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {headerLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              onClick={onCtaClick}
              size="sm"
              className="hidden sm:inline-flex bg-linear-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-90 shadow-[0_0_20px_-4px_oklch(0.68_0.20_254/0.6)] rounded-xl font-medium"
            >
              Hoziroq Boshlash
            </Button>
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-card-strong rounded-2xl p-4 flex flex-col gap-3">
            {headerLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm py-2 text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button
              onClick={() => {
                setOpen(false);
                onCtaClick();
              }}
              className="bg-linear-to-r from-primary to-primary-glow text-primary-foreground rounded-xl"
            >
              Hoziroq Boshlash
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
