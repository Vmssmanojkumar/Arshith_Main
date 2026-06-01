import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";

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
        solid || open
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-sm font-serif text-xl font-semibold ${
              solid || open ? "bg-primary text-primary-foreground" : "bg-white/10 text-white backdrop-blur"
            }`}
          >
            A
          </div>
          <div className={`leading-tight ${solid || open ? "text-foreground" : "text-white"}`}>
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
          className={`lg:hidden flex items-center justify-center p-3 -mr-3 min-w-[44px] min-h-[44px] rounded-lg transition-colors hover:bg-black/5 active:bg-black/10 focus:outline-none ${
            solid || open ? "text-foreground" : "text-white"
          }`}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border overflow-hidden shadow-xl"
          >
            <div className="container-x py-8 flex flex-col gap-4">
              {links.map((l, idx) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.25 }}
                >
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    activeProps={{ className: "text-accent font-semibold" }}
                    className="text-foreground/80 hover:text-accent text-base block py-3 transition-colors border-b border-border/40 min-h-[44px]"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
