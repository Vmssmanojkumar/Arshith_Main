import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "About", to: "/about" },
  { label: "Leadership", to: "/leadership" },
  { label: "InfoTech", to: "/infotech" },
  { label: "Suntech", to: "/suntech" },
  { label: "Fresh", to: "/fresh" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Contact", to: "/contact" },
] as const;

export function Nav({ forceSolid = false }: { forceSolid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = forceSolid || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-sm font-serif text-xl font-semibold ${
              solid ? "bg-primary text-primary-foreground" : "bg-white/10 text-white backdrop-blur"
            }`}
          >
            A
          </div>
          <div className={`leading-tight ${solid ? "text-foreground" : "text-white"}`}>
            <div className="font-serif text-xl font-semibold">Arshith Group</div>
            <div className="text-[10px] uppercase tracking-[0.25em] opacity-70">
              Growth is Value
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-accent" }}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                solid ? "text-foreground/80" : "text-white/90"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className={`lg:hidden ${solid ? "text-foreground" : "text-white"}`}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-x py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-foreground/80 text-base"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
