import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

type InitialLoadingSplashProps = {
  durationMs?: number;
  className?: string;
};

export function InitialLoadingSplash({ durationMs = 5000, className }: InitialLoadingSplashProps) {
  const [mounted, setMounted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = window.setTimeout(() => setDone(true), durationMs);
    return () => window.clearTimeout(id);
  }, [durationMs]);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-9999 grid place-items-center bg-background transition-opacity duration-500",
        done ? "pointer-events-none opacity-0" : "opacity-100",
        className,
      )}
      aria-hidden={done}
    >
      <div className="relative">
        <img
          src={logo}
          alt="Code14"
          width={144}
          height={144}
          className="relative w-36 h-36 object-contain drop-shadow-[0_0_52px_oklch(0.68_0.20_254/0.9)] drop-shadow-[0_0_22px_oklch(0.78_0.18_248/0.6)]"
        />

        {/* Orbit dots */}
        <div className="absolute inset-0 -m-14">
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (360 / 12) * i;
            const delay = i * 0.06;
            return (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full bg-primary/90"
                style={{
                  transform: `rotate(${angle}deg) translateY(-96px)`,
                  transformOrigin: "0 0",
                  animation: `code14-orbit 1.1s linear infinite`,
                  animationDelay: `${delay}s`,
                  opacity: 0.15 + (i / 12) * 0.7,

                }}
              />
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes code14-orbit {
          0% { transform: rotate(0deg) translateY(-96px); }
          100% { transform: rotate(360deg) translateY(-96px); }
        }
      `}</style>
    </div>
  );
}
