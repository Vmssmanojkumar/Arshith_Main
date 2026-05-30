import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { toast } from "sonner";
import img from "@/assets/sustainability.jpg";
import {
  Leaf,
  Users,
  TrendingUp,
  Cpu,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Globe,
  Droplet,
  Sun,
  Wind,
  Heart,
  RefreshCw,
  Zap,
  Award,
  Layers,
  Activity,
  CheckCircle,
  HelpCircle,
  ChevronRight,
  CloudLightning,
  Workflow,
  FileText,
  Download,
  Calendar,
  Building,
  Scale
} from "lucide-react";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability | Arshith Group" },
      {
        name: "description",
        content:
          "How Arshith Group invests in people, the planet and progress — across every vertical, from farm to platform.",
      },
      { property: "og:title", content: "Sustainability | Arshith Group" },
      { property: "og:image", content: img },
    ],
  }),
  component: Page,
});

// Interactive Pillars content
const pillarsData = [
  {
    id: "people",
    num: "01",
    title: "People First",
    subtitle: "Empowering communities and building generational careers.",
    icon: Users,
    color: "oklch(0.74 0.14 70)", // Gold Accent
    bgLight: "rgba(186, 140, 50, 0.03)",
    borderClass: "hover:border-amber-500/40",
    intro: "We believe long-term sustainable growth begins with human dignity. By investing in the individuals behind our supply chain, we create local economic engines.",
    metrics: [
      { label: "Farmer Partners", val: "500+", desc: "Guaranteed fair wages and secure contracts" },
      { label: "Community Income Lift", val: "+24%", desc: "Average increase in household earnings" },
      { label: "Local Job Creation", val: "100%", desc: "Direct recruitment across South Indian rural hubs" }
    ],
    points: [
      "Fair-Price Guarantee: We bypass intermediaries, paying farmers directly at 20%+ above local market benchmarks.",
      "Campus Partnerships: Direct talent pipeline with engineering institutions, training first-generation tech grads.",
      "Generational Growth: Investing in multi-decade career paths rather than short-term contract work."
    ],
    didYouKnow: "Every product sourced from Arshith Fresh carries a digital identifier. 100% of the premium goes directly to local community development funds."
  },
  {
    id: "planet",
    num: "02",
    title: "Planet Integrity",
    subtitle: "Pioneering regenerative cultivation and zero-waste footprints.",
    icon: Leaf,
    color: "oklch(0.76 0.15 145)", // Forest Green / Mint
    bgLight: "rgba(34, 197, 94, 0.03)",
    borderClass: "hover:border-emerald-500/40",
    intro: "Our ecological objective is net-positive contribution. We don't just reduce emissions; we actively restore biodiversity, preserve fresh water, and eliminate synthetics.",
    metrics: [
      { label: "Synthetic Chemicals", val: "Zero", desc: "No chemical fertilizers or chemical pesticides" },
      { label: "Water Saved Yearly", val: "120K L", desc: "Conserved via intelligent soil moisture sensors" },
      { label: "Land Restored", val: "800+", desc: "Acres converted to regenerative organic farming" }
    ],
    points: [
      "Regenerative Practices: Using crop rotation, organic mulching, and biodiverse ground cover to restore soil biology.",
      "Smart Irrigation: Partnering with Suntech to run drip irrigation grids powered by solar micro-pumps.",
      "Zero Plastic Mandate: Transitioning all quick-commerce packaging to 100% biodegradable corn-starch alternatives by 2027."
    ],
    didYouKnow: "Through crop rotation and biological soil enrichment, our partner farms sequester up to 3x more carbon than standard single-crop commercial farms."
  },
  {
    id: "progress",
    num: "03",
    title: "Progress & Tech",
    subtitle: "Leveraging green technology as an equalizer.",
    icon: Cpu,
    color: "oklch(0.6 0.12 220)", // Ocean Blue
    bgLight: "rgba(59, 130, 246, 0.03)",
    borderClass: "hover:border-blue-500/40",
    intro: "Technology shouldn't draw away resources. We architect software algorithms, smart logistics, and energy-conscious clouds that optimize physical resources.",
    metrics: [
      { label: "Logistics Optimization", val: "35%", desc: "Fewer delivery miles via smart batching algorithms" },
      { label: "Server Node Clean Power", val: "100%", desc: "Cloud nodes run on verified renewable grids" },
      { label: "Digital Footprint Saved", val: "4.8T", desc: "CO2 saved via zero-waste code optimization loops" }
    ],
    points: [
      "Dynamic Routing: Real-time traffic and parcel batching systems drastically reduce transit emissions.",
      "Clean Server Ops: Automated workload scaling turns off inactive cloud nodes during low-use windows.",
      "Agri-Tech Platforms: Providing simple, multi-lingual digital tools for farmers to trace logistics in real time."
    ],
    didYouKnow: "By running localized server clusters and using efficient server-side caching, we have reduced the power consumption per transaction by 42%."
  }
];

// Traceable journey steps
const journeySteps = [
  {
    title: "Sourcing & Seed Integrity",
    sub: "Phase 1: Zero-Chemical Roots",
    desc: "We partner with local agricultural research schools to identify climate-resilient, native seeds. Sourced directly, these seeds are naturally resistant to regional pests without requiring artificial chemical modifications.",
    icon: Leaf,
    stat: "100% Organic Seeds",
    accent: "oklch(0.76 0.15 145)"
  },
  {
    title: "Regenerative Cultivation",
    sub: "Phase 2: Soil and Drip Irrigation",
    desc: "Crops are grown using natural composting and biological pest control. Solar-powered microgrids operate localized soil humidity sensors, ensuring that water is delivered precisely to the roots, preventing run-off.",
    icon: Droplet,
    stat: "-40% Water Draw",
    accent: "oklch(0.7 0.14 70)"
  },
  {
    title: "Direct-to-Cooperatives",
    sub: "Phase 3: Ethical Compensation",
    desc: "Harvests are transported immediately to local collection hubs. We completely eliminate the multiple brokers standard in Indian retail, ensuring 100% transparent weighing and instant payouts direct to the farmers' bank accounts.",
    icon: Heart,
    stat: "+20% Fair Price Premium",
    accent: "oklch(0.74 0.14 70)"
  },
  {
    title: "Solar-Powered Cold Chains",
    sub: "Phase 4: Eco-Preservation",
    desc: "Our regional cold-storage micro-warehouses run on independent solar panel configurations built by Suntech. This retains extreme fresh quality without relying on coal-burning electricity grids.",
    icon: Sun,
    stat: "100% Solar-Chilled",
    accent: "oklch(0.65 0.15 300)"
  },
  {
    title: "Zero-Waste Digital Delivery",
    sub: "Phase 5: Traceable Last Mile",
    desc: "Orders placed on Arshith Fresh are batched via AI route optimizations. Delivered in biodegradable crates with an embedded QR code, letting customers trace their exact food pack back to the individual farm plot.",
    icon: ShieldCheck,
    stat: "Full QR Traceability",
    accent: "oklch(0.6 0.12 220)"
  }
];

// Strategic roadmap milestones
const roadmapMilestones = [
  {
    year: "2026",
    title: "Cooperative Scaling & 50% Solarization",
    desc: "Sourcing direct agreements with 1,000+ growers; powering half of cold storage nodes with solar energy.",
    status: "Active Tracking",
    color: "oklch(0.76 0.15 145)"
  },
  {
    year: "2028",
    title: "100% Zero-Single-Use Packaging",
    desc: "Transitioning 100% of our quick-commerce dispatch layers to bio-based and zero-plastic cornstarch composites.",
    status: "In Formulation",
    color: "oklch(0.7 0.14 70)"
  },
  {
    year: "2030",
    title: "Closed-Loop Agricultural Recycling",
    desc: "Returning 100% of organic processing leftovers back to cooperative fields as micro-nutrient compost.",
    status: "Target Set",
    color: "oklch(0.74 0.14 70)"
  },
  {
    year: "2032",
    title: "Scope 1 & Scope 2 Operational Net-Zero",
    desc: "Completely neutralizing carbon outputs from our server node clusters, physical offices, and delivery logistics.",
    status: "Target Set",
    color: "oklch(0.65 0.15 300)"
  },
  {
    year: "2035",
    title: "Absolute Scope 3 Supply Chain Net-Zero",
    desc: "Full grid decarbonisation from farm soil to client platform, satisfying international BRSR compliance rules.",
    status: "Vision Target",
    color: "oklch(0.6 0.12 220)"
  }
];

// PDF ESG reports data
const esgDisclosures = [
  {
    title: "ESG Performance Report 2025-26",
    category: "Statutory Reporting",
    desc: "Detailed metric sets highlighting carbon offsets, fair-trade payouts, and energy consumption factors.",
    size: "PDF | 4.8 MB",
    fileName: "Arshith_ESG_Performance_2026.pdf"
  },
  {
    title: "Net-Zero & Decarbonisation Framework",
    category: "Technical Strategy",
    desc: "Engineering blueprint detailing server cluster auto-throttling loops and solar cold chains.",
    size: "PDF | 3.2 MB",
    fileName: "Arshith_Decarbonisation_Framework.pdf"
  },
  {
    title: "BRSR & GRI Alignment Statement",
    category: "Regulatory Filings",
    desc: "SEBI-aligned Business Responsibility and Sustainability Report, auditing gender diversity and supply lines.",
    size: "PDF | 5.1 MB",
    fileName: "Arshith_BRSR_GRI_Statement.pdf"
  },
  {
    title: "Corporate Governance & Code of Conduct",
    category: "Oversight & Ethics",
    desc: "Guidelines outlining independent director quotas, transparent audit codes, and employee protections.",
    size: "PDF | 2.4 MB",
    fileName: "Arshith_Corporate_Governance_Code.pdf"
  }
];

function Page() {
  const [activeTab, setActiveTab] = useState(0);
  const [simulatorMode, setSimulatorMode] = useState<"grocery" | "cloud">("grocery");
  const [groceryOrders, setGroceryOrders] = useState(8);
  const [cloudRequests, setCloudRequests] = useState(15); // in millions
  const [downloadingReport, setDownloadingReport] = useState<string | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  // Handle mock PDF downloads with a beautiful loading animation + premium toast notification
  const triggerDownload = (fileName: string, reportName: string) => {
    if (downloadingReport) return;
    setDownloadingReport(fileName);
    
    toast.info(`Preparing ${reportName} for download...`, {
      duration: 1500
    });

    setTimeout(() => {
      setDownloadingReport(null);
      toast.success(`${fileName} downloaded successfully!`, {
        description: "Document signature verified under SHA-256 standard.",
        duration: 3000
      });
    }, 2000);
  };

  // Simulator dynamic calculations
  const calcGroceryStats = (orders: number) => {
    return {
      water: orders * 14.5,
      carbon: (orders * 0.92).toFixed(1),
      plastic: (orders * 0.48).toFixed(1),
      farmers: Math.max(1, Math.floor(orders * 0.6)),
    };
  };

  const calcCloudStats = (reqs: number) => {
    return {
      powerSaved: reqs * 12.8, // in Watt-hours
      carbonSaved: (reqs * 0.45).toFixed(1), // in kg of CO2
      serverEfficiency: 98.4,
      treesEquivalent: (reqs * 0.08).toFixed(1),
    };
  };

  const gStats = calcGroceryStats(groceryOrders);
  const cStats = calcCloudStats(cloudRequests);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Nav />

      {/* HERO SECTION WITH DYNAMIC PARALLAX */}
      <section
        ref={heroRef}
        className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
      >
        <motion.img
          src={img}
          alt="Lush agricultural landscape showing sustainability practices"
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: "var(--gradient-hero)" }}
        />

        {/* Floating animated orbs - Green and Gold */}
        <motion.div
          aria-hidden
          className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full blur-3xl opacity-20 z-[2]"
          style={{ background: "oklch(0.76 0.15 145)" }}
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full blur-3xl opacity-15 z-[2]"
          style={{ background: "oklch(0.74 0.14 70)" }}
          animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 flex h-full items-end pb-24 md:pb-32">
          <div className="container-x text-white w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="kicker mb-6 flex items-center gap-2"
              style={{ color: "oklch(0.76 0.15 145)" }}
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              Empowered Living & Tech
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] max-w-5xl"
            >
              Sustainability is how we <span className="italic font-medium text-emerald-300">grow</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 max-w-xl text-base md:text-lg text-white/80 font-light leading-relaxed"
            >
              People, planet, and progress — three commitments shaping every single vertical at Arshith Group, from farm soil to automated cloud infrastructure.
            </motion.p>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center text-white/70 text-[10px] uppercase tracking-[0.3em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Explore Commitments
          <motion.div
            className="mt-3 h-12 w-px bg-white/40 origin-top"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* STRATEGIC NARRATIVE OVERVIEW */}
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
                <Globe className="w-3.5 h-3.5 text-emerald-500" />
                Strategic Mandate
              </div>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
                Our growth is <span className="italic font-medium text-emerald-600">measured by the value</span> we leave behind.
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
                Sustainability at Arshith Group is not a marketing chapter in an annual report — it is the primary operating principle behind every business unit we run.
              </p>
              
              <p>
                From sourcing zero-chemical, traceable organic produce via local farmer networks to building cloud software environments that dynamically throttle processor frequencies to optimize energy draw, we align economic scale with environmental integrity.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                {[
                  { value: "500+", key: "Farmer partners" },
                  { value: "0", key: "Chemical inputs" },
                  { value: "100%", key: "Traceable supply" },
                  { value: "∞", key: "Long-term mindset" }
                ].map((stat, idx) => (
                  <div key={idx} className="border-l border-emerald-500/30 pl-4 py-2">
                    <span className="font-serif text-3xl md:text-4xl text-emerald-600 block">{stat.value}</span>
                    <span className="text-[11px] uppercase tracking-widest text-foreground/60">{stat.key}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE PILLARS EXPLORATION */}
      <section className="bg-secondary/30 py-24 md:py-32 relative border-b border-border">
        {/* Glow Element */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.02] blur-3xl pointer-events-none" />

        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mb-16 text-center mx-auto"
          >
            <div className="kicker">Operational Columns</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
              The Three pillars of <span className="italic font-medium text-emerald-600">Arshith Sustainability</span>.
            </h2>
            <p className="mt-4 text-foreground/75 font-light text-base md:text-lg">
              Explore how each pillar operates actively across our e-commerce, energy, and software engineering domains.
            </p>
          </motion.div>

          {/* Tab buttons */}
          <div className="flex justify-center border-b border-border max-w-xl mx-auto mb-12 p-1 bg-card rounded-full shadow-sm">
            {pillarsData.map((tab, idx) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 py-3 px-4 rounded-full flex items-center justify-center gap-2 text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-primary text-white shadow-md scale-105"
                      : "text-foreground/60 hover:text-primary hover:bg-secondary/40"
                  }`}
                >
                  <TabIcon className={`w-4 h-4 ${isActive ? "text-emerald-400" : ""}`} />
                  <span className="hidden sm:inline">{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive content block */}
          <div className="bg-card border border-border rounded-3xl shadow-lg overflow-hidden relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {pillarsData.map((tab, idx) => {
                if (activeTab !== idx) return null;
                const TabIcon = tab.icon;
                return (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="p-8 md:p-16 grid lg:grid-cols-12 gap-12 items-stretch"
                  >
                    {/* LEFT COLUMN: Narrative & Bullet Points */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
                            style={{ backgroundColor: tab.color }}
                          >
                            <TabIcon className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-xs uppercase tracking-widest text-foreground/45 block">
                              Pillar {tab.num}
                            </span>
                            <h3 className="font-serif text-3xl font-normal text-primary">
                              {tab.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-lg text-primary/95 leading-relaxed font-light mb-8">
                          {tab.intro}
                        </p>

                        <div className="space-y-4">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/60 mb-2">
                            Key Strategic Initiatives
                          </h4>
                          {tab.points.map((pt, pIdx) => {
                            const [title, desc] = pt.split(": ");
                            return (
                              <div key={pIdx} className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                                <div className="text-sm">
                                  <strong className="text-primary font-medium">{title}</strong>:{" "}
                                  <span className="text-foreground/80 font-light">{desc}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Factoid card */}
                      <div
                        className="p-5 rounded-2xl border border-emerald-500/10 relative overflow-hidden"
                        style={{ backgroundColor: tab.bgLight }}
                      >
                        <div className="flex items-start gap-3 relative z-10">
                          <Sparkles className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0 animate-pulse" />
                          <div className="text-xs leading-relaxed text-foreground/80 font-light">
                            <strong className="font-medium text-primary">Did You Know? </strong>
                            {tab.didYouKnow}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Big Metrics Showcase */}
                    <div className="lg:col-span-5 flex flex-col justify-center bg-secondary/20 rounded-2xl p-8 border border-border/80">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-primary/75 mb-6 text-center border-b border-border pb-4">
                        Performance Indicators
                      </h4>
                      <div className="space-y-8">
                        {tab.metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="group/metric text-center lg:text-left">
                            <span
                              className="font-serif text-5xl font-light block transition-transform group-hover/metric:translate-x-1 duration-300"
                              style={{ color: tab.color }}
                            >
                              {metric.val}
                            </span>
                            <span className="font-medium text-sm text-primary block mt-1">
                              {metric.label}
                            </span>
                            <span className="text-xs text-foreground/60 font-light block mt-0.5">
                              {metric.desc}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* INTERACTIVE TRACEABILITY JOURNEY FLOW (FARM TO PLATFORM) */}
      <section className="bg-background py-24 md:py-32 relative border-b border-border">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mb-20"
          >
            <div className="kicker">Transparency Pipeline</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
              The <span className="italic font-medium text-emerald-600">Seed-to-Sovereignty</span> Journey.
            </h2>
            <p className="mt-4 text-foreground/75 font-light text-base md:text-lg">
              Trace how a single crop travels from our ethical partner farms to our digital platform with transparent records at every milestone.
            </p>
          </motion.div>

          {/* Interactive Stepper Layout */}
          <div className="relative border-l border-border ml-4 md:ml-12 space-y-12">
            {journeySteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="relative pl-12 md:pl-20 group"
                >
                  {/* Circle Pinpoint with Animated Ripple */}
                  <div className="absolute left-0 top-1 -translate-x-1/2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-emerald-500">
                    <StepIcon
                      className="w-4 h-4 transition-colors"
                      style={{ color: step.accent }}
                    />
                    {/* Ring highlight */}
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-0 group-hover:opacity-10 scale-125 pointer-events-none"
                      style={{ backgroundColor: step.accent }}
                    />
                  </div>

                  <span className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 inline-block mb-3">
                    {step.sub}
                  </span>

                  <h3 className="font-serif text-2xl text-primary mb-2 font-normal transition-colors group-hover:text-emerald-700">
                    {step.title}
                  </h3>

                  <p className="text-sm md:text-base text-foreground/70 font-light leading-relaxed max-w-3xl mb-4">
                    {step.desc}
                  </p>

                  <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide border border-emerald-500/10 bg-emerald-50/20 dark:bg-emerald-950/10 px-3 py-1.5 rounded-lg text-emerald-700">
                    <Workflow className="w-3.5 h-3.5" />
                    Metric: {step.stat}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW: ESG & DECARBONISATION ROADMAP (2026 - 2035) */}
      <section className="bg-secondary/20 py-24 md:py-32 relative border-b border-border">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mb-16"
          >
            <div className="kicker flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              Decarbonisation Pathway
            </div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
              Our Strategic <span className="italic font-medium text-emerald-600">ESG Targets Roadmap</span>.
            </h2>
            <p className="mt-4 text-foreground/75 font-light text-base md:text-lg">
              Aligned with absolute transparency benchmarks, we maintain specific timeline checkpoints to audit and neutralize our environmental impact across all verticals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6 relative">
            {/* Visual connector line across cards */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border hidden md:block -translate-y-12 z-0" />

            {roadmapMilestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-card border border-border p-6 rounded-2xl relative z-10 shadow-sm hover:shadow-md hover:border-emerald-500/20 transition-all group overflow-hidden"
              >
                {/* Visual Accent Top Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300"
                  style={{ backgroundColor: milestone.color }}
                />

                <span
                  className="font-serif text-4xl block mb-4 font-medium transition-transform group-hover:scale-105"
                  style={{ color: milestone.color }}
                >
                  {milestone.year}
                </span>

                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded block w-fit mb-3">
                  {milestone.status}
                </span>

                <h3 className="font-semibold text-sm text-primary mb-2 leading-snug">
                  {milestone.title}
                </h3>

                <p className="text-xs text-foreground/60 font-light leading-relaxed">
                  {milestone.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: DYNAMIC GREEN FOOTPRINT SIMULATOR */}
      <section className="bg-secondary/40 py-24 md:py-32 relative border-b border-border">
        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* LEFT: Controls & Explainer */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="kicker flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-500 animate-pulse" />
                  Interactive Simulator
                </div>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
                  Simulate Your <span className="italic font-medium text-emerald-600">Green Impact</span>.
                </h2>
                <p className="mt-4 text-foreground/75 font-light text-base">
                  Select a vertical below and adjust the slider to see how choosing Arshith Group's green logistics or eco-cloud services changes your personal environmental footprint.
                </p>
              </div>

              {/* Mode Selector */}
              <div className="flex gap-4 p-1 bg-card border border-border rounded-xl w-fit">
                <button
                  onClick={() => setSimulatorMode("grocery")}
                  className={`py-2 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    simulatorMode === "grocery"
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "text-foreground/60 hover:text-primary"
                  }`}
                >
                  Grocery Delivery
                </button>
                <button
                  onClick={() => setSimulatorMode("cloud")}
                  className={`py-2 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    simulatorMode === "cloud"
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "text-foreground/60 hover:text-primary"
                  }`}
                >
                  Cloud Node Ops
                </button>
              </div>

              {/* Slider Controller */}
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                {simulatorMode === "grocery" ? (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sm text-primary">Monthly Grocery Orders</span>
                      <span className="font-serif text-3xl text-emerald-600 font-bold">{groceryOrders}</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      value={groceryOrders}
                      onChange={(e) => setGroceryOrders(Number(e.target.value))}
                      className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <p className="text-xs text-foreground/50 font-light">
                      Based on average basket volumes direct from 500+ organic partner growers.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sm text-primary">API Queries / Month</span>
                      <span className="font-serif text-3xl text-emerald-600 font-bold">{cloudRequests}M</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={cloudRequests}
                      onChange={(e) => setCloudRequests(Number(e.target.value))}
                      className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <p className="text-xs text-foreground/50 font-light">
                      Calculates computing node optimization via eco-compilation loops in Server.ts.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT: Beautiful visual display cards */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {simulatorMode === "grocery" ? (
                  <motion.div
                    key="grocery-results"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-2 gap-6"
                  >
                    {[
                      {
                        label: "Water Preserved",
                        val: `${gStats.water.toFixed(0)} L`,
                        icon: Droplet,
                        color: "text-blue-500",
                        desc: "Drip irrigation conservation compared to generic industrial farms."
                      },
                      {
                        label: "CO2 Footprint Avoided",
                        val: `${gStats.carbon} kg`,
                        icon: Wind,
                        color: "text-emerald-500",
                        desc: "Saved via direct farm-to-table optimized logistics routes."
                      },
                      {
                        label: "Synthetic Plastic Avoided",
                        val: `${gStats.plastic} kg`,
                        icon: RefreshCw,
                        color: "text-purple-500",
                        desc: "Eliminated using corn-starch compostable bags."
                      },
                      {
                        label: "Farmers Directly Supported",
                        val: `${gStats.farmers} Families`,
                        icon: Heart,
                        color: "text-rose-500",
                        desc: "Receiving 20%+ fair-price premium direct payouts."
                      }
                    ].map((metric, idx) => {
                      const Icon = metric.icon;
                      return (
                        <div
                          key={idx}
                          className="bg-card border border-border hover:border-emerald-500/30 p-6 rounded-2xl shadow-sm transition-all duration-300 relative group overflow-hidden"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
                              {metric.label}
                            </span>
                            <Icon className={`w-5 h-5 ${metric.color} group-hover:scale-110 transition-transform`} />
                          </div>
                          <div className="font-serif text-3xl md:text-4xl text-primary font-light mb-2">
                            {metric.val}
                          </div>
                          <p className="text-[11px] text-foreground/55 font-light leading-relaxed">
                            {metric.desc}
                          </p>
                        </div>
                      );
                    })}
                  </motion.div>
                ) : (
                  <motion.div
                    key="cloud-results"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-2 gap-6"
                  >
                    {[
                      {
                        label: "Power Saved",
                        val: `${(cStats.powerSaved / 1000).toFixed(1)} kWh`,
                        icon: Zap,
                        color: "text-amber-500",
                        desc: "Electricity conserved through dynamic processor auto-throttling."
                      },
                      {
                        label: "Cloud Carbon Prevented",
                        val: `${cStats.carbonSaved} kg`,
                        icon: CloudLightning,
                        color: "text-sky-500",
                        desc: "Carbon offset by running on solar microgrids from Suntech."
                      },
                      {
                        label: "Equivalent Trees Planted",
                        val: `${cStats.treesEquivalent} Trees`,
                        icon: Leaf,
                        color: "text-emerald-500",
                        desc: "Equivalent carbon sequestration metric over a 12-month period."
                      },
                      {
                        label: "Compute Efficiency",
                        val: `${cStats.serverEfficiency}%`,
                        icon: Layers,
                        color: "text-indigo-500",
                        desc: "Server cluster routing efficiency with custom caching algorithms."
                      }
                    ].map((metric, idx) => {
                      const Icon = metric.icon;
                      return (
                        <div
                          key={idx}
                          className="bg-card border border-border hover:border-emerald-500/30 p-6 rounded-2xl shadow-sm transition-all duration-300 relative group overflow-hidden"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
                              {metric.label}
                            </span>
                            <Icon className={`w-5 h-5 ${metric.color} group-hover:scale-110 transition-transform`} />
                          </div>
                          <div className="font-serif text-3xl md:text-4xl text-primary font-light mb-2">
                            {metric.val}
                          </div>
                          <p className="text-[11px] text-foreground/55 font-light leading-relaxed">
                            {metric.desc}
                          </p>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: INVESTOR GOVERNANCE & ESG DISCLOSURES LIBRARY */}
      <section className="bg-background py-24 md:py-32 relative border-b border-border">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
            <div className="lg:col-span-7">
              <div className="kicker flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-emerald-600" />
                Statutory disclosures
              </div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
                Investor Governance & <br />
                <span className="italic font-medium text-emerald-600">ESG Disclosures Library</span>.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-foreground/70 font-light text-sm md:text-base leading-relaxed">
                Consistent with our commitment to transparency, we publish certified reports auditing our resource efficiency, environmental footprints, and board safety protocols.
              </p>
            </div>
          </div>

          {/* Reports Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {esgDisclosures.map((doc, idx) => {
              const isDownloading = downloadingReport === doc.fileName;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-card border border-border hover:border-emerald-500/30 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between group overflow-hidden min-h-[300px]"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block mb-4">
                      {doc.category}
                    </span>
                    <h3 className="font-serif text-xl font-normal text-primary mb-3 leading-snug group-hover:text-emerald-700 transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-foreground/60 font-light leading-relaxed mb-6">
                      {doc.desc}
                    </p>
                  </div>

                  <div className="border-t border-border/80 pt-4 flex justify-between items-center mt-auto">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground/50">
                      {doc.size}
                    </span>

                    <button
                      onClick={() => triggerDownload(doc.fileName, doc.title)}
                      className={`flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-emerald-700 hover:text-emerald-500 transition-colors cursor-pointer ${
                        isDownloading ? "animate-pulse pointer-events-none text-emerald-500" : ""
                      }`}
                    >
                      {isDownloading ? (
                        <>
                          <Activity className="w-3.5 h-3.5 animate-spin" />
                          Building...
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          Download
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GREEN INFRASTRUCTURE & ENGINEERING SPOTLIGHT */}
      <section className="bg-secondary/20 py-24 md:py-32 relative border-b border-border">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="kicker flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-emerald-500" />
                Agri-Tech & Infrastructure
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
                Where Agriculture Meets <br />
                <span className="italic font-medium text-emerald-600">High-Performance Engineering</span>.
              </h2>
              <p className="text-foreground/75 font-light text-base md:text-lg leading-relaxed">
                Most platforms build green campaigns separately. At Arshith Group, our tech stack directly powers our sustainability achievements.
              </p>
              <p className="text-foreground/70 font-light text-sm md:text-base leading-relaxed">
                By integrating agricultural supply chains with Suntech's localized solar micro-grids, we sustain a seamless cold chain from rural regions without adding pressure to national electric grids. Simultaneously, our engineering teams build lightweight API endpoints that use minimal CPU instructions, saving megawatt-hours of hosting energy at scale.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/suntech"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider hover:bg-emerald-600 transition-colors shadow-sm"
                >
                  Explore Suntech <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/infotech"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-primary text-xs font-semibold uppercase tracking-wider hover:bg-secondary/40 transition-colors"
                >
                  Explore Infotech <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Premium visual box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-6 bg-card border border-border p-8 rounded-3xl relative overflow-hidden shadow-md"
            >
              {/* Animated solar ray effect */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl animate-pulse" />
              
              <h3 className="font-serif text-2xl text-primary mb-6">Green Engineering Benchmarks</h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Hardware Offsetting",
                    desc: "Every cloud microservice instance has dynamic power thresholds, turning down cores when API load is under 20%.",
                    metric: "99.8% Cloud Node Offsetting"
                  },
                  {
                    title: "Solar Storage Microgrids",
                    desc: "Suntech-engineered solar batteries cooling our farm collection nodes. Complete autonomy from non-renewable sources.",
                    metric: "100% Autonomous Cooling"
                  },
                  {
                    title: "Route Batching",
                    desc: "AI path optimization clustering package routes to ensure delivery vehicles achieve 100% capacity per food mile.",
                    metric: "35% Reduced Delivery Miles"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="border-b border-border/80 last:border-b-0 pb-6 last:pb-0">
                    <h4 className="font-semibold text-sm text-primary mb-1">{item.title}</h4>
                    <p className="text-xs text-foreground/60 font-light leading-relaxed mb-2">{item.desc}</p>
                    <span className="inline-block text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded">
                      {item.metric}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW: GOVERNANCE & ETHICAL OVERSIGHT (THE 'G' IN ESG) */}
      <section className="bg-background py-24 md:py-32 relative border-b border-border">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Visual Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 bg-card border border-border p-8 rounded-3xl shadow-sm flex flex-col justify-between min-h-[400px] order-2 lg:order-1 relative overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-emerald-500/[0.01] pointer-events-none" />
              
              <div>
                <Scale className="w-8 h-8 text-emerald-600 mb-6" />
                <h3 className="font-serif text-3xl text-primary font-normal mb-4">Governance Framework</h3>
                <p className="text-xs md:text-sm text-foreground/60 font-light leading-relaxed">
                  We believe that governance is the foundational structure that makes environmental and social performance possible. Arshith Group maintains a strict operational oversight program to guarantee corporate compliance.
                </p>
              </div>

              <div className="border-t border-border pt-6 mt-8 space-y-4">
                {[
                  { k: "40%", v: "Independent Director Quota" },
                  { k: "100%", v: "Stakeholder Audited Operations" },
                  { k: "Zero", v: "Compliance Violations Reported" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs">
                    <span className="text-foreground/60 font-light">{item.v}</span>
                    <span className="font-serif font-bold text-emerald-600">{item.k}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Explainer Narrative */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 lg:pl-12 order-1 lg:order-2 space-y-6"
            >
              <div className="kicker flex items-center gap-2">
                <Building className="w-3.5 h-3.5 text-emerald-600" />
                Corporate Oversight
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
                Institutional Integrity & <br />
                <span className="italic font-medium text-emerald-600">Ethical Governance</span>.
              </h2>
              <p className="text-foreground/75 font-light text-base md:text-lg leading-relaxed">
                Oversight is not an afterthought; it is our primary risk containment mechanism. We enforce structural audits across smallholder farm holdings and server architecture.
              </p>

              <div className="grid md:grid-cols-2 gap-6 pt-4">
                {[
                  {
                    t: "Audit Committees",
                    d: "Statutory committees regularly auditing financial tracing, logistics payouts, and emission offsets."
                  },
                  {
                    t: "Whistleblower Program",
                    d: "Secure, third-party managed channels protecting anonymity for field workers and engineers alike."
                  },
                  {
                    t: "Statutory BRSR Adherence",
                    d: "Fully conforming to SEBI regulations and Business Responsibility & Sustainability Report benchmarks."
                  },
                  {
                    t: "Fair Trade Compliance",
                    d: "Guaranteed prompt payouts directly verified through smart automated bank transfers."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="font-bold text-sm text-primary flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      {item.t}
                    </h4>
                    <p className="text-xs text-foreground/60 font-light leading-relaxed pl-5">
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUICK COMMERCE BENCHMARK BANNER */}
      <section className="relative bg-[var(--brand-navy-deep)] overflow-hidden py-24 border-b border-border">
        {/* Decorative blur */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="container-x relative z-10 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="kicker flex items-center justify-center gap-2 mb-6"
              style={{ color: "oklch(0.76 0.15 145)" }}
            >
              <Zap className="w-4 h-4 fill-emerald-400" />
              Empowerment & Sustainability Combined
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-3xl md:text-5xl font-light leading-tight mb-8"
            >
              Building a Transparent, Responsible <br />
              <span className="italic font-medium text-emerald-300">Modern Digital Future</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/70 font-light text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10"
            >
              From direct-to-grower compensation models to lightweight, carbon-neutral digital networks, Arshith Group demonstrates that absolute scale doesn't require compromising environmental integrity.
            </motion.p>
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
