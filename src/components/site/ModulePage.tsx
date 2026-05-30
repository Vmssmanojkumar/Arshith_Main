import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Link } from "@tanstack/react-router";

type Stat = { k: string; v: string };
type Pillar = { n: string; t: string; d: string };

export interface ModulePageProps {
  kicker: string;
  title: string;
  italicWord?: string;
  tagline: string;
  heroImage: string;
  intro: string;
  body: string[];
  stats?: Stat[];
  pillars?: Pillar[];
  accent?: string; // hex/css color used for orb + accents
  ctaHref?: string;
  ctaLabel?: string;
}

export function ModulePage({
  kicker,
  title,
  italicWord,
  tagline,
  heroImage,
  intro,
  body,
  stats = [],
  pillars = [],
  accent = "var(--brand-gold)",
  ctaHref,
  ctaLabel,
}: ModulePageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <main className="min-h-screen bg-background">
      <Nav />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
      >
        <motion.img
          src={heroImage}
          alt={title}
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />

        {/* Floating animated orbs */}
        <motion.div
          aria-hidden
          className="absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full blur-3xl opacity-30"
          style={{ background: accent }}
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full blur-3xl opacity-20"
          style={{ background: accent }}
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 flex h-full items-end pb-24 md:pb-32">
          <div className="container-x text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="kicker mb-6"
              style={{ color: accent }}
            >
              {kicker}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] max-w-5xl"
            >
              {italicWord ? (
                <>
                  {title.split(italicWord)[0]}
                  <span className="italic font-medium">{italicWord}</span>
                  {title.split(italicWord)[1]}
                </>
              ) : (
                title
              )}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 max-w-xl text-base md:text-lg text-white/80 font-light leading-relaxed"
            >
              {tagline}
            </motion.p>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center text-white/70 text-[10px] uppercase tracking-[0.3em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Scroll
          <motion.div
            className="mt-3 h-12 w-px bg-white/40 origin-top"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="bg-background py-24 md:py-32">
        <div className="container-x grid md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="kicker">Overview</div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-primary leading-tight">
              {intro}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-6 md:col-start-7 space-y-6 text-lg text-foreground/80 leading-relaxed font-light"
          >
            {body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {ctaHref && (
              <a
                href={ctaHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-3 text-sm font-medium tracking-wide text-primary border-b border-primary/30 pb-2 w-fit hover:text-accent hover:border-accent transition-colors"
              >
                {ctaLabel ?? "Visit website"} <span aria-hidden>→</span>
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* STATS — animated marquee strip */}
      {stats.length > 0 && (
        <section className="relative overflow-hidden bg-[var(--brand-navy-deep)] text-white py-20">
          <motion.div
            aria-hidden
            className="absolute -top-20 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full blur-3xl opacity-20"
            style={{ background: accent }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="container-x relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div
                  className="font-serif text-5xl md:text-6xl"
                  style={{ color: accent }}
                >
                  {s.k}
                </div>
                <div className="mt-3 text-xs uppercase tracking-widest text-white/60">
                  {s.v}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* PILLARS */}
      {pillars.length > 0 && (
        <section className="bg-background py-24 md:py-32">
          <div className="container-x">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="kicker">What we do</div>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl text-primary leading-tight">
                Capabilities at the core.
              </h2>
            </motion.div>

            <div className="mt-16 grid md:grid-cols-3 gap-px bg-border">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="bg-background p-10 md:p-12 hover:bg-secondary transition-colors cursor-default"
                >
                  <div className="font-serif text-2xl" style={{ color: accent }}>
                    {p.n}
                  </div>
                  <h3 className="mt-6 font-serif text-3xl text-primary">{p.t}</h3>
                  <p className="mt-4 text-foreground/70 font-light leading-relaxed">
                    {p.d}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA back */}
      <section className="bg-secondary py-20">
        <div className="container-x text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-sm font-medium tracking-widest uppercase text-primary border-b border-primary/30 pb-2 hover:text-accent hover:border-accent transition-colors"
          >
            <span aria-hidden>←</span> Back to Arshith Group
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export function FadeUp({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}
