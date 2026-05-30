import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import img from "@/assets/about.jpg";
import {
  Building2,
  MapPin,
  Users,
  Compass,
  ArrowRight,
  TrendingUp,
  Cpu,
  ShoppingBag,
  Database,
  GraduationCap,
  Sparkles,
  Heart,
  ChevronDown,
  Terminal,
  ShieldCheck,
  Briefcase,
  GitPullRequest,
  CheckCircle,
  Network,
  Rocket,
  Search,
  Check,
  Globe
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Arshith Group" },
      {
        name: "description",
        content:
          "Arshith Group is a fast-growing, multi-sector conglomerate that seamlessly bridges the gap between modern technology and sustainable grassroots living.",
      },
      { property: "og:title", content: "About | Arshith Group" },
      { property: "og:image", content: img },
    ],
  }),
  component: Page,
});

function Page() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);

  const accentColor = "var(--brand-gold)";

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
      >
        <motion.img
          src={img}
          alt="Arshith Group corporate operations"
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
          className="absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: "var(--brand-gold)" }}
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full blur-3xl opacity-15"
          style={{ background: "oklch(0.7 0.15 140)" }}
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 flex h-full items-end pb-24 md:pb-32">
          <div className="container-x text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="kicker mb-6 flex items-center gap-2"
              style={{ color: "var(--brand-gold)" }}
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              Corporate Profile
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] max-w-5xl"
            >
              Growth, grounded <br />in <span className="italic font-medium text-[var(--brand-gold)]">purpose</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 max-w-xl text-base md:text-lg text-white/80 font-light leading-relaxed"
            >
              A fast-growing multi-sector conglomerate bridging modern technology with sustainable grassroots living.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center text-white/70 text-[10px] uppercase tracking-[0.3em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Corporate Details
          <motion.div
            className="mt-3 h-12 w-px bg-white/40 origin-top"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* CORE PROFILE */}
      <section className="bg-background py-24 md:py-32 relative border-b border-border">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5 space-y-6"
            >
              <div>
                <div className="kicker flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-[var(--brand-gold)]" />
                  Arshith Group Profile
                </div>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
                  Bridging technology <br />
                  <span className="italic font-medium text-emerald-600">with sustainable living</span>.
                </h2>
              </div>
              
              <div className="hidden md:block border border-border p-6 rounded-2xl bg-secondary/20">
                <span className="text-xs uppercase tracking-widest text-[var(--brand-gold)] font-mono font-semibold block mb-3">Group Origin</span>
                <p className="text-xs text-foreground/60 leading-relaxed font-light">
                  Arshith Group initiated its corporate trajectory as SuntechSolutions—a focused, high-caliber software laboratory in South India. Over time, fueled by a passion for technical scaling and local community empowerment, the organization transitioned into a multi-sector conglomerate.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="md:col-span-7 space-y-8 text-base md:text-lg text-foreground/80 leading-relaxed font-light"
            >
              <p className="font-normal text-primary text-xl md:text-2xl leading-snug">
                Arshith Group is a fast-growing, multi-sector conglomerate that seamlessly bridges the gap between modern technology and sustainable grassroots living.
              </p>
              
              <p>
                Built upon a foundation of business transformation, the group provides advanced B2B digital services while operating a robust organic consumer e-commerce ecosystem. By merging technical systems with direct sourcing models, the group creates circular economic value that empowers both partners and customers.
              </p>

              <div className="border-l-2 border-[var(--brand-gold)] p-6 bg-secondary/30 rounded-r-lg">
                <span className="block text-primary font-medium text-base mb-1 uppercase tracking-wide">
                  Core Philosophy
                </span>
                <p className="text-sm font-light text-foreground/90">
                  A business model deeply dedicated to responsible entrepreneurship — empowering local farmers and small producers, maintaining absolute chemical-free product integrity, and bridging standard industrial divisions to support rural communities.
                </p>
              </div>

              {/* Elaborated Vision Statement */}
              <div className="space-y-4 pt-2">
                <h4 className="font-serif text-2xl text-primary font-medium">Empowering Grassroots Through Tech</h4>
                <p className="text-base text-foreground/75 font-light">
                  We believe that modern cloud-enabled infrastructures and AI personalization systems should not only benefit large-scale technology enterprises but should also be deployed to solve real-world agricultural, logistical, and craft bottlenecks. By creating tools that bypass predatory middlemen, we enable local farmers, rural homemakers, and traditional agriculture hands to secure sustainable, fair profits while delivering untainted organic purity to the modern consumer.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP & HUBS */}
      <section className="bg-secondary/40 py-24 md:py-32 relative border-b border-border">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6"
            >
              <div>
                <div className="kicker flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[var(--brand-gold)]" />
                  South India Operations
                </div>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl text-primary leading-tight font-light font-normal">
                  Regional Hubs & <br />
                  <span className="italic font-medium text-emerald-600">Enterprise Offices</span>.
                </h2>
              </div>
              
              <p className="text-foreground/75 font-light text-base leading-relaxed">
                The company operates dynamically across South India, maintaining its corporate headquarters in the technology hub of **Bengaluru, Karnataka**, complemented by agile operational and supply hubs across **Andhra Pradesh** and **Telangana**.
              </p>

              <div className="border border-border p-6 rounded-2xl bg-card">
                <span className="text-xs uppercase tracking-widest text-emerald-600 font-mono font-semibold block mb-3">
                  Cross-Vertical Strategy
                </span>
                <p className="text-xs text-foreground/60 leading-relaxed font-light">
                  By routing resources from our enterprise IT services in Bengaluru to the agricultural and logistics centers in Andhra Pradesh and Telangana, we maintain a highly optimized, state-of-the-art circular supply chain.
                </p>
              </div>
            </motion.div>

            {/* Leadership list */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="kicker tracking-wider font-semibold text-xs text-primary/70 mb-4">
                Corporate Leadership Team
              </h3>

              {/* Founder Profile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[var(--brand-gold)]/40 transition-colors duration-300"
              >
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--brand-gold)] px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/20 inline-block mb-2">
                    Founder & CEO
                  </span>
                  <h4 className="font-serif text-2xl text-primary font-medium">
                    Farook Nurubhasha <span className="text-sm font-sans font-light text-foreground/60">({`Farook N.`})</span>
                  </h4>
                  <p className="text-sm text-foreground/70 font-light mt-2 max-w-md">
                    Spearheads the group's corporate vision, cross-sector development, and enterprise scaling strategies. With almost a decade of software architecture and scaling experience, he bridges heavy backend computing with grassroots business operations.
                  </p>
                </div>
                <div className="text-xs uppercase tracking-widest text-primary/50 font-mono">
                  Est. ~10 Yrs Exp.
                </div>
              </motion.div>

              {/* MD Profile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-emerald-500/30 transition-colors duration-300"
              >
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600 px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/20 inline-block mb-2">
                    President & Managing Director
                  </span>
                  <h4 className="font-serif text-2xl text-primary font-medium">
                    Pallavi Nelli <span className="text-sm font-sans font-light text-foreground/60">({`Pallavi Mam`})</span>
                  </h4>
                  <p className="text-sm text-foreground/70 font-light mt-2 max-w-md">
                    Leads structural business growth, day-to-day operations, and core cross-vertical logistics structures. Her executive experience anchors the group's massive operations, ensuring that the 500+ workforce acts with unified direction and technical synergy.
                  </p>
                </div>
                <div className="text-xs uppercase tracking-widest text-primary/50 font-mono">
                  Est. ~10 Yrs Exp.
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* THE THREE PILLARS (ASCII DIAGRAM RE-DESIGNED) */}
      <section className="bg-background py-24 md:py-32 relative border-b border-border">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mb-20 text-center mx-auto"
          >
            <div className="kicker justify-center">Conglomerate Pillars</div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
              The Three <span className="italic font-medium text-emerald-600">Structural Pillars</span>.
            </h2>
            <p className="mt-4 text-foreground/70 font-light text-lg">
              Arshith Group manages its diverse, high-performance portfolio across three distinct operational verticals.
            </p>
          </motion.div>

          {/* VISUAL DIAGRAM */}
          <div className="mb-20">
            <div className="flex flex-col items-center select-none">
              {/* Group Root */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-primary text-white border border-white/10 px-10 py-5 rounded-2xl shadow-xl font-serif text-2xl tracking-widest font-semibold relative z-10 text-center"
              >
                ARSHITH GROUP
              </motion.div>

              {/* Vertical Connector 1 */}
              <div className="h-10 w-0.5 bg-gradient-to-b from-primary to-emerald-500" />

              {/* Horizontal Cross-Branch */}
              <div className="w-full max-w-3xl h-0.5 relative bg-emerald-500">
                {/* Visual Branch Indicators */}
                <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-sky-400 to-emerald-500" />
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-amber-500 to-emerald-500" />
              </div>

              {/* Three Branch Droppers */}
              <div className="w-full max-w-3xl grid grid-cols-3 justify-items-center">
                <div className="h-10 w-0.5 bg-sky-400" />
                <div className="h-10 w-0.5 bg-emerald-500" />
                <div className="h-10 w-0.5 bg-amber-500" />
              </div>

              {/* Three Pillar Cards in Flowchart */}
              <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* InfoTech Pillar */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-card border-t-4 border-sky-400 border-x border-b border-border p-6 rounded-b-2xl shadow-sm text-center flex flex-col items-center"
                >
                  <div className="w-10 h-10 rounded-full bg-sky-50 dark:bg-sky-950/40 text-sky-500 flex items-center justify-center mb-4">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-primary">ArshithInfotech</h4>
                  <p className="text-xs text-foreground/50 mt-1 font-light tracking-wide uppercase">IT Consulting</p>
                </motion.div>

                {/* SunTech Pillar */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="bg-card border-t-4 border-emerald-500 border-x border-b border-border p-6 rounded-b-2xl shadow-sm text-center flex flex-col items-center"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500 flex items-center justify-center mb-4">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-primary">SuntechSolutions</h4>
                  <p className="text-xs text-foreground/50 mt-1 font-light tracking-wide uppercase">Tech & Scalability</p>
                </motion.div>

                {/* Fresh Pillar */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-card border-t-4 border-amber-500 border-x border-b border-border p-6 rounded-b-2xl shadow-sm text-center flex flex-col items-center"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-500 flex items-center justify-center mb-4">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-primary">ArshithFresh</h4>
                  <p className="text-xs text-foreground/50 mt-1 font-light tracking-wide uppercase">Organic Retail</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* DESCRIPTIONS WITH ELABORATED LISTS */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* InfoTech Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold tracking-wider text-sky-500 uppercase flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  01. Technical Service Wing
                </span>
                <h3 className="font-serif text-2xl text-primary mt-4 mb-4 font-medium">
                  ArshithInfotech
                </h3>
                <p className="text-sm text-foreground/75 leading-relaxed font-light mb-6">
                  This wing handles comprehensive IT services, global technology consulting, and enterprise digital marketing. It directly assists corporations in transitioning to automated workflows, deploying scaling cloud systems, and executing growth strategies in the web ecosystem.
                </p>

                {/* Elaborated Checklist */}
                <ul className="space-y-2 mb-6 text-xs text-foreground/70 font-light border-t border-border/60 pt-4">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-500" />
                    Global IT Consulting & Structural Audits
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-500" />
                    Enterprise Cloud Migration (AWS/Azure)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-500" />
                    Full-Stack Software Production (Java, Python)
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-primary/70 font-medium">
                <span>Enterprise Consulting</span>
                <Link to="/infotech" className="flex items-center gap-1 hover:text-sky-500 transition-colors">
                  Full Page <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* SunTech Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-card border border-border p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold tracking-wider text-emerald-600 uppercase flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  02. Group Foundation
                </span>
                <h3 className="font-serif text-2xl text-primary mt-4 mb-4 font-medium">
                  SuntechSolutions
                </h3>
                <p className="text-sm text-foreground/75 leading-relaxed font-light mb-6">
                  Serving as the technical foundation that initiated the group's corporate trajectory, this branch specializes in software production, complex data engineering, and business scalability infrastructure. It designs custom software tools to maximize corporate output and backend efficiency.
                </p>

                {/* Elaborated Checklist */}
                <ul className="space-y-2 mb-6 text-xs text-foreground/70 font-light border-t border-border/60 pt-4">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    Proprietary High-Performance Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    Deep Database Tuning & Storage Engines
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    B2B Client Infrastructure Automation
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-primary/70 font-medium">
                <span>Software Systems</span>
                <Link to="/suntech" className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                  Full Page <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Fresh Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card border border-border p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold tracking-wider text-amber-500 uppercase flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  03. Consumer Marketplace
                </span>
                <h3 className="font-serif text-2xl text-primary mt-4 mb-4 font-medium">
                  Arshith Fresh <span className="text-xs font-sans font-light text-foreground/60">(Arshith Fresh India Pvt. Ltd.)</span>
                </h3>
                <p className="text-sm text-foreground/75 leading-relaxed font-light mb-6">
                  A consumer-facing e-commerce marketplace centered on wellness, tradition, and organic food culture. Officially incorporated as a private limited entity, it operates an online hub where buyers bypass middlemen to purchase pure, farm-sourced items.
                </p>

                {/* Elaborated Checklist */}
                <ul className="space-y-2 mb-6 text-xs text-foreground/70 font-light border-t border-border/60 pt-4">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-500" />
                    Chemical-free Spices, Sugars & Oils
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-500" />
                    D2C Multi-Seller E-Commerce Hub
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-500" />
                    Sourcing directly from Local Farmers
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-primary/70 font-medium">
                <span>Organic E-Commerce</span>
                <Link to="/fresh" className="flex items-center gap-1 hover:text-amber-500 transition-colors">
                  Full Page <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OPERATIONS, SCALE & HUMAN CAPITAL */}
      <section className="bg-secondary/40 py-24 md:py-32 relative border-b border-border">
        {/* Glow Element */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6"
            >
              <div>
                <div className="kicker flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-[var(--brand-gold)]" />
                  Operations & scale
                </div>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl text-primary leading-tight font-light font-normal">
                  Scale, Human Capital & <br />
                  <span className="italic font-medium text-emerald-600">Operations</span>.
                </h2>
              </div>
              <p className="text-foreground/75 font-light text-base leading-relaxed">
                Despite its relatively recent unified consolidation, Arshith Group has rapidly expanded its corporate footprint across technical services and agricultural supply lines.
              </p>
            </motion.div>

            {/* Metrics cards */}
            <div className="lg:col-span-7 grid md:grid-cols-3 gap-6">
              
              {/* Workforce Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card border border-border p-6 rounded-2xl shadow-sm text-center flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-3xl font-semibold text-primary">500 - 1k</h4>
                  <p className="text-xs text-foreground/50 mt-1 uppercase tracking-wider font-medium">Workforce Scale</p>
                </div>
                <p className="text-xs text-foreground/60 font-light mt-3 leading-relaxed">
                  Employees across corporate offices and operational supply fields.
                </p>
              </motion.div>

              {/* Opportunities Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-card border border-border p-6 rounded-2xl shadow-sm text-center flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-full bg-sky-50 dark:bg-sky-950/40 text-sky-500 flex items-center justify-center mx-auto mb-4">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-3xl font-semibold text-primary">In-House</h4>
                  <p className="text-xs text-foreground/50 mt-1 uppercase tracking-wider font-medium">Opportunities</p>
                </div>
                <p className="text-xs text-foreground/60 font-light mt-3 leading-relaxed">
                  Regularly hiring in Java/Python, React/Angular, APIs, and databases.
                </p>
              </motion.div>

              {/* Campus Recruitment Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card border border-border p-6 rounded-2xl shadow-sm text-center flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-500 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-3xl font-semibold text-primary">Avanthi</h4>
                  <p className="text-xs text-foreground/50 mt-1 uppercase tracking-wider font-medium">Recruitment</p>
                </div>
                <p className="text-xs text-foreground/60 font-light mt-3 leading-relaxed">
                  Frequent talent placement drives at engineering colleges (e.g. Avanthi Group).
                </p>
              </motion.div>

            </div>

          </div>

          {/* ELABORATED HUMAN CAPITAL CONTEXT */}
          <div className="grid md:grid-cols-12 gap-8 items-stretch mt-12">
            
            {/* Tech opportunities details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-6 bg-card border border-border p-8 rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-sky-50 dark:bg-sky-950/40 flex items-center justify-center text-sky-500">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-primary font-medium">Technology Careers & Stack</h3>
              </div>
              <p className="text-sm text-foreground/75 leading-relaxed font-light mb-4">
                To keep our multi-seller marketplace running at maximum efficiency, we have constructed a world-class technology stack. Our engineering wings actively recruit and nurture in-house specialists, fostering clean code environments and fast-paced agile development sprint models.
              </p>
              <p className="text-xs text-foreground/60 leading-relaxed font-light">
                Our active stacks include **React.js and Angular frontends** for fluid client visuals, **RESTful APIs** as high-throughput bridges, **Java/Python microservices** for backend scaling, and **NoSQL and relational databases (MongoDB, MySQL)** managed with sub-millisecond stock replenishment calculations.
              </p>
            </motion.div>

            {/* Academic Incubator details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="md:col-span-6 bg-card border border-border p-8 rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-primary font-medium">The Developer Incubator Program</h3>
              </div>
              <p className="text-sm text-foreground/75 leading-relaxed font-light mb-4">
                We believe that the developers of tomorrow are shaped by real-world production repos today. Through collaborative relationships with premier educational institutions like the **Avanthi Group of Colleges**, Arshith Group hosts frequent, highly rigorous campus placement drives.
              </p>
              <p className="text-xs text-foreground/60 leading-relaxed font-light">
                Our highly-sought internship program allows freshers and computer science students to collaborate directly with our senior software architects. Interns participate in daily scrums, write pull requests, engage in comprehensive peer code reviews, and deploy functional services to active cloud endpoints, preparing them completely for senior technology careers.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* BACK TO ROOT CTA */}
      <section className="bg-secondary py-20">
        <div className="container-x text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-primary border-b border-primary/30 pb-2 hover:text-emerald-600 hover:border-emerald-500 transition-colors"
          >
            <span aria-hidden>←</span> Back to Arshith Group
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
