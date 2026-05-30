import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import img from "@/assets/infotech.jpg";
import {
  Code2,
  Terminal,
  Cpu,
  Layers,
  Cloud,
  Server,
  Database,
  Smartphone,
  ShieldCheck,
  Handshake,
  Sparkles,
  ArrowRight,
  BookOpen,
  GitBranch,
  Rocket,
  Users,
  CheckCircle,
  Activity,
  Workflow,
  Globe,
  Settings,
  Award,
  Zap,
  TrendingUp,
  FolderCode,
  Check,
  Fingerprint
} from "lucide-react";

export const Route = createFileRoute("/infotech")({
  head: () => ({
    meta: [
      { title: "ArshithInfoTech | Arshith Group" },
      {
        name: "description",
        content:
          "ArshithInfoTech is the technology and IT services division of Arshith Group, building scalable software, enterprise solutions, and digital transformation systems.",
      },
      { property: "og:title", content: "ArshithInfoTech | Arshith Group" },
      { property: "og:image", content: img },
    ],
  }),
  component: Page,
});

const emphases = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "End-to-end frontend and backend development using highly optimized modern stacks.",
  },
  {
    icon: Server,
    title: "Enterprise Consulting",
    desc: "High-level technology audit and architecture roadmap for complex business applications.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    desc: "Robust native and cross-platform mobile apps focused on flawless user interaction.",
  },
  {
    icon: Cloud,
    title: "Cloud-Enabled Systems",
    desc: "Auto-scaling environments built on AWS, Azure, and Google Cloud systems.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Fault-tolerant backend frameworks designed for extreme concurrency and low-latency.",
  },
  {
    icon: Terminal,
    title: "Modern Frontend",
    desc: "Sleek, highly responsive single-page and server-side rendered user interfaces.",
  },
  {
    icon: BookOpen,
    title: "Incubator & Training",
    desc: "Structured developer incubator turning academic knowledge into production expertise.",
  },
  {
    icon: FolderCode,
    title: "Real-World Projects",
    desc: "Hands-on engineering in production repos with code reviews and agile methodologies.",
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    desc: "Migrating analog pipelines to modern automated cloud integrations.",
  },
  {
    icon: Rocket,
    title: "Startup Culture",
    desc: "Dynamic, fast-paced atmosphere valuing creative autonomy and fast iterations.",
  },
];

const serviceAreas = [
  {
    title: "Full Stack Development",
    desc: "Dynamic web apps from conception to cloud deployment using React, Node, and Next.js.",
    category: "Software Development",
    color: "oklch(0.65 0.15 220)" // Sky Blue
  },
  {
    title: "Frontend Engineering",
    desc: "Creating high-performance visual states with pixel-perfect responsive layouts and micro-interactions.",
    category: "UI/UX",
    color: "oklch(0.65 0.15 300)" // Purple
  },
  {
    title: "Backend Development",
    desc: "Reliable APIs, custom database architectures, and secure business logic in Java and Python.",
    category: "System Logic",
    color: "oklch(0.7 0.14 70)" // Gold
  },
  {
    title: "Enterprise Solutions",
    desc: "High-volume distributed tools, legacy codebase modernization, and monolith migrations.",
    category: "Enterprise Scale",
    color: "oklch(0.65 0.12 30)" // Orange
  },
  {
    title: "SaaS Platform Delivery",
    desc: "Multi-tenant platforms with complex billing, subscriptions, user management, and dashboards.",
    category: "Product Tech",
    color: "oklch(0.6 0.15 20)" // Crimson
  },
  {
    title: "API Development",
    desc: "Designing secure, self-documenting RESTful and GraphQL APIs that integrate seamlessly.",
    category: "Integrations",
    color: "oklch(0.55 0.11 160)" // Mint
  },
  {
    title: "Cloud & DevOps Services",
    desc: "CI/CD pipelines, automated testing, container orchestration, and serverless server management.",
    category: "Cloud Ops",
    color: "oklch(0.58 0.15 130)" // Green
  },
  {
    title: "Digital Consulting",
    desc: "Strategic tech audits, system mapping, digital scaling advisory, and execution planning.",
    category: "Consulting",
    color: "oklch(0.5 0.1 220)" // Ocean Blue
  },
  {
    title: "UI/UX Engineering",
    desc: "Transforming wireframes into functional, interactive, and beautiful digital products.",
    category: "Design System",
    color: "oklch(0.72 0.16 55)" // Yellow Accent
  },
  {
    title: "E-Commerce Tech",
    desc: "Secure multi-seller platforms, payment processing, shopping baskets, and real-time inventory systems.",
    category: "E-Commerce",
    color: "oklch(0.65 0.18 140)" // Emerald
  },
  {
    title: "Business Automation",
    desc: "Eliminating administrative friction and manual processing bottlenecks via robotic workflows.",
    category: "Automation",
    color: "oklch(0.6 0.08 250)" // Navy Accent
  },
  {
    title: "IT Support & Security",
    desc: "Continuous infrastructure support, redundancy setups, and systemic compliance.",
    category: "Support",
    color: "oklch(0.5 0.1 260)" // Dark Blue
  }
];

const techStack = {
  webCore: [
    { name: "React.js", desc: "Modular, stateful components that power rapid frontend interfaces." },
    { name: "Next.js", desc: "Production-ready meta-framework featuring Server Component scaling." },
    { name: "Node.js", desc: "Ultra-fast, asynchronous event loop running backend scripts." },
    { name: "Express.js", desc: "Minimalist server abstraction layer managing incoming API requests." }
  ],
  logicApis: [
    { name: "Java Enterprise", desc: "Type-safe, robust runtime supporting heavy industrial operations." },
    { name: "Python Systems", desc: "Agile services powering machine learning models and automation engines." },
    { name: "REST APIs", desc: "Highly structured API endpoints adhering to standard REST guidelines." }
  ],
  dataOps: [
    { name: "MongoDB", desc: "Flexible, document-oriented NoSQL database for rapid schema changes." },
    { name: "MySQL", desc: "Structured, highly consistent relational database system for transactions." },
    { name: "Cloud Infrastructure", desc: "Resilient container hosting across cloud provider spaces." },
    { name: "DevOps & Scale", desc: "Automated container pipelines and auto-scaling orchestrations." }
  ]
};

const cultureBadges = [
  { text: "Innovation-driven", icon: Zap },
  { text: "Engineering-focused", icon: Cpu },
  { text: "Startup-oriented", icon: Rocket },
  { text: "Agile & Collaborative", icon: GitBranch },
  { text: "Technology-first", icon: Terminal },
  { text: "Scalable & Modern", icon: Layers },
  { text: "Developer-centric", icon: BookOpen },
  { text: "Enterprise-ready", icon: ShieldCheck },
  { text: "Performance-focused", icon: Activity },
  { text: "Future-oriented", icon: Sparkles }
];

function Page() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);

  const accentColor = "oklch(0.72 0.16 220)"; // Sky Blue Accent
  const darkNavy = "oklch(0.15 0.06 260)";

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
          alt="ArshithInfoTech high-tech workspace"
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />

        {/* Floating animated blue/sky orbs */}
        <motion.div
          aria-hidden
          className="absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: accentColor }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full blur-3xl opacity-15"
          style={{ background: accentColor }}
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 flex h-full items-end pb-24 md:pb-32">
          <div className="container-x text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="kicker mb-6 flex items-center gap-2"
              style={{ color: accentColor }}
            >
              <Terminal className="w-4 h-4" />
              IT Services & Consulting
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] max-w-5xl"
            >
              Arshith<span className="italic font-medium text-sky-300">InfoTech</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 max-w-xl text-base md:text-lg text-white/80 font-light leading-relaxed"
            >
              Global technology consulting, digital marketing, and enterprise enablement — engineered for the cloud-first decade.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center text-white/70 text-[10px] uppercase tracking-[0.3em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Explore Tech Stack
          <motion.div
            className="mt-3 h-12 w-px bg-white/40 origin-top"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="bg-background py-24 md:py-32 relative border-b border-border">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5"
            >
              <div className="kicker flex items-center gap-2">
                <Workflow className="w-3.5 h-3.5 text-sky-500" />
                Enterprise Enablement
              </div>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
                Engineering excellence <br />
                <span className="italic font-medium text-sky-600">meets automation</span>.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="md:col-span-7 space-y-8 text-base md:text-lg text-foreground/80 leading-relaxed font-light"
            >
              <p className="font-normal text-primary text-xl md:text-2xl leading-snug">
                ArshithInfoTech is the technology and IT services division of Arshith Group, focused on building scalable software solutions, enterprise applications, digital transformation systems, and modern web technologies.
              </p>

              <p>
                The company positions itself as a technology-driven organization delivering innovative IT services, software engineering solutions, and digital consulting for businesses and startups. We focus on combining engineering excellence with modern technologies to create high-performance digital products and enterprise-grade applications.
              </p>

              <p className="bg-sky-50/50 dark:bg-sky-950/20 border-l-2 border-sky-500 p-6 rounded-r-lg font-light text-foreground">
                <strong className="block text-primary font-medium text-base mb-1 uppercase tracking-wide">
                  Modernizing Operations
                </strong>
                The organization aims to help businesses modernize operations through scalable software systems, automation, cloud infrastructure, and user-centric digital experiences, allowing legacy industries to compete at modern velocities.
              </p>

              <div className="pt-2">
                <a
                  href="https://arshithgroup.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-primary border-b-2 border-sky-500 pb-2 w-fit hover:text-sky-600 transition-colors group"
                >
                  Visit Corporate Portal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE EMPHASES */}
      <section className="bg-secondary/40 py-24 md:py-32 relative border-b border-border">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mb-16"
          >
            <div className="kicker">Operational Focus</div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
              What ArshithInfoTech <span className="italic font-medium text-sky-600">Emphasizes</span>.
            </h2>
            <p className="mt-4 text-foreground/70 font-light text-lg">
              Through pure technical dedication and structured software workflows, we commit to these developer pillars.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {emphases.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: (idx % 5) * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-card border border-border/80 hover:border-sky-500/40 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-sky-500/[0.02] group-hover:bg-sky-500/[0.04] transition-colors" />
                  <div className="w-12 h-12 rounded-lg bg-sky-55/50 dark:bg-sky-950/40 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform duration-300 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/70 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE SERVICE AREAS */}
      <section className="bg-background py-24 md:py-32 relative border-b border-border">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mb-16"
          >
            <div className="kicker">Service Portfolio</div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
              Core <span className="italic font-medium text-sky-600">Service Offerings</span>.
            </h2>
            <p className="mt-4 text-foreground/70 font-light text-lg">
              Enterprise engineering, digital transformation, and specialized SaaS capabilities designed for maximum scaling.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, idx) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.15 }}
                whileHover={{ scale: 1.01 }}
                className="group relative bg-card hover:bg-secondary/20 border border-border hover:border-sky-500/30 p-8 rounded-2xl shadow-sm transition-all duration-300 overflow-hidden"
              >
                {/* Visual Accent Bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 group-hover:w-2 transition-all duration-300"
                  style={{ backgroundColor: area.color }}
                />

                <span
                  className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full inline-block mb-6"
                  style={{ backgroundColor: `${area.color}15`, color: area.color }}
                >
                  {area.category}
                </span>

                <h3 className="font-serif text-2xl text-primary mb-4 font-normal group-hover:text-sky-700 transition-colors">
                  {area.title}
                </h3>

                <p className="text-sm text-foreground/75 font-light leading-relaxed">
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY ECOSYSTEM */}
      <section className="bg-secondary/30 py-24 md:py-32 relative border-b border-border">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="kicker flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-sky-500" />
                Technical Capabilities
              </div>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
                Our Robust <br />
                <span className="italic font-medium text-sky-600">Technology</span> Ecosystem.
              </h2>
              <p className="mt-6 text-foreground/75 font-light text-base leading-relaxed">
                We combine production-tested programming runtimes, robust API interfaces, and resilient auto-scaled containers to create zero-downtime client operations.
              </p>
            </motion.div>

            <div className="lg:col-span-7 bg-card border border-border p-1 rounded-3xl shadow-sm">
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                {/* WEB FRONTEND */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-sky-55/50 dark:bg-sky-950/40 flex items-center justify-center text-sky-500">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif text-lg font-medium text-primary">Web Core</h4>
                  </div>
                  <ul className="space-y-4">
                    {techStack.webCore.map((tech) => (
                      <li key={tech.name}>
                        <div className="font-medium text-sm text-primary flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-sky-500" />
                          {tech.name}
                        </div>
                        <div className="text-xs text-foreground/60 font-light mt-0.5 ml-4.5">
                          {tech.desc}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SYSTEM RUNTIMES */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-500">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif text-lg font-medium text-primary">Systems & APIs</h4>
                  </div>
                  <ul className="space-y-4">
                    {techStack.logicApis.map((tech) => (
                      <li key={tech.name}>
                        <div className="font-medium text-sm text-primary flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-sky-500" />
                          {tech.name}
                        </div>
                        <div className="text-xs text-foreground/60 font-light mt-0.5 ml-4.5">
                          {tech.desc}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* INFRASTRUCTURE */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-amber-500">
                      <Cloud className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif text-lg font-medium text-primary">Data & Ops</h4>
                  </div>
                  <ul className="space-y-4">
                    {techStack.dataOps.map((tech) => (
                      <li key={tech.name}>
                        <div className="font-medium text-sm text-primary flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-sky-500" />
                          {tech.name}
                        </div>
                        <div className="text-xs text-foreground/60 font-light mt-0.5 ml-4.5">
                          {tech.desc}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNSHIP & ACADEMIC ECOSYSTEM */}
      <section className="bg-background py-24 md:py-32 relative border-b border-border">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="kicker flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-sky-500" />
                Internship & Talent Development
              </div>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
                Developer Training & <br />
                <span className="italic font-medium text-sky-600">Production Exposure</span>.
              </h2>
              <p className="mt-6 text-foreground/70 font-light text-base leading-relaxed">
                ArshithInfoTech also appears to support internship and campus hiring initiatives, offering students and freshers exposure to real-world software engineering environments, agile workflows, and production-ready development practices.
              </p>
              <p className="mt-4 text-foreground/70 font-light text-base leading-relaxed">
                The ecosystem promotes continuous learning, technical growth, and hands-on experience with modern development stacks. Students step away from dry equations to solve tangible, large-scale concurrent challenges under the guidance of our lead architects.
              </p>
              
              <div className="mt-8">
                <a
                  href="https://arshithfresh.com/pages/careers"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-primary text-white text-xs font-semibold uppercase tracking-wider hover:bg-sky-700 transition-colors shadow-lg shadow-sky-500/5"
                >
                  Explore Careers & Internships
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Git Backlog UI Visualizer */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-[var(--brand-navy-deep)] text-white border border-border shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-sky-500/5 blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-[11px] text-white/40 font-mono ml-2">git-terminal // arshith-infotech</span>
                </div>
                <GitBranch className="w-4 h-4 text-white/30" />
              </div>

              <div className="font-mono text-xs space-y-4">
                <div className="text-white/40"># Active Sprint Commits</div>
                
                <div className="bg-white/[0.03] border border-white/5 p-3.5 rounded-lg flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="font-semibold text-white/95">feat: implement payment-gateways container</div>
                    <div className="text-[10px] text-white/40 mt-1">Status: MERGED // Reviewed by Principal Architect</div>
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/5 p-3.5 rounded-lg flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 mt-0.5 animate-pulse">
                    <Activity className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="font-semibold text-sky-300">chore: optimize next.js backend server caches</div>
                    <div className="text-[10px] text-white/40 mt-1">Status: TESTING // Sub-millisecond queries target</div>
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/5 p-3.5 rounded-lg flex items-start gap-3 opacity-60">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white/60 mt-0.5">
                    <Settings className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="font-semibold text-white/80">test: integrate playwright responsive automation tests</div>
                    <div className="text-[10px] text-white/40 mt-1">Status: PENDING // Code review stage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND CULTURE & BADGES */}
      <section className="bg-secondary/40 py-24 md:py-32 relative border-b border-border">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Badges Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-5 gap-4 order-2 lg:order-1">
              {cultureBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={badge.text}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="p-5 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between aspect-[1/1] hover:border-sky-500/30 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-sky-55/50 dark:bg-sky-950/40 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-4">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xs text-primary leading-tight">
                        {badge.text}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 lg:pl-10 order-1 lg:order-2"
            >
              <div className="kicker">Company Culture</div>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
                Our Professional <br />
                <span className="italic font-medium text-sky-600">Company Culture</span>.
              </h2>
              <p className="mt-6 text-foreground/75 font-light text-base leading-relaxed">
                ArshithInfoTech anchors a deep engineering mindset, agile cooperation, developer autonomy, and strict enterprise readiness. We operate like a lightweight startup but deploy code with global bank-grade safety.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BRAND INSPIRATION & SAAS BENCHMARK */}
      <section className="relative bg-[var(--brand-navy-deep)] overflow-hidden py-24 border-b border-border">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

        <div className="container-x relative z-10 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="kicker flex items-center justify-center gap-2 mb-6"
              style={{ color: accentColor }}
            >
              <Fingerprint className="w-4 h-4 text-sky-400" />
              SaaS & Enterprise Engineering Benchmarks
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-3xl md:text-5xl font-light leading-tight mb-8"
            >
              Global Infrastructure Standards, <br />
              <span className="italic font-medium text-sky-300">Modern Digital Transformation</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/70 font-light text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-12"
            >
              The overall brand identity resembles a modern SaaS and enterprise engineering company inspired by industry giants and disruptors. The user experience and branding communicate trust, technical excellence, scalable innovation, enterprise-grade engineering, and next-generation digital transformation.
            </motion.p>

            {/* Inspiration wall */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 opacity-50 text-[10px] tracking-widest uppercase font-mono"
            >
              <span>Stripe</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <span>Vercel</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <span>GitHub</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <span>AWS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <span>Microsoft</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <span>Infosys Digital</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <span>TCS Interactive</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <span>Accenture Tech</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <span>Zoho</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <span>Linear</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BACK TO ROOT CTA */}
      <section className="bg-secondary py-20">
        <div className="container-x text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-primary border-b border-primary/30 pb-2 hover:text-sky-600 hover:border-sky-500 transition-colors"
          >
            <span aria-hidden>←</span> Back to Arshith Group
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
