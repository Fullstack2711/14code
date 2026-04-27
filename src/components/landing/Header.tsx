import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onCtaClick: () => void;
}

export function Header({ onCtaClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#kurs", label: "Kurs" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#mentor", label: "Mentor" },
    { href: "#pricing", label: "Narxlar" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-6xl px-4 transition-all duration-500",
          scrolled && "px-3"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500",
            scrolled
              ? "glass-card-strong"
              : "border border-transparent"
          )}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-[0_0_20px_-2px_oklch(0.68_0.20_254/0.6)] group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold tracking-tight text-lg">
              Code<span className="text-gradient-electric">14</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
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
              className="hidden sm:inline-flex bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-90 shadow-[0_0_20px_-4px_oklch(0.68_0.20_254/0.6)] rounded-xl font-medium"
            >
              Hoziroq Boshlash
            </Button>
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-card-strong rounded-2xl p-4 flex flex-col gap-3">
            {links.map((l) => (
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
              className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground rounded-xl"
            >
              Hoziroq Boshlash
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
