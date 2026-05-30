import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

// Import our beautifully generated custom visual assets
import freshHero from "@/assets/fresh_hero.png";
import freshSourcing from "@/assets/fresh_sourcing.png";
import freshPacking from "@/assets/fresh_packing.png";
import freshColdchain from "@/assets/fresh_coldchain.png";
import freshDelivery from "@/assets/fresh_delivery.png";

import {
  ShoppingBag,
  Truck,
  Users,
  Cpu,
  Smartphone,
  ShieldCheck,
  Handshake,
  Layers,
  Activity,
  Sparkles,
  ArrowRight,
  Code,
  Server,
  Cloud,
  MapPin,
  CreditCard,
  Database,
  Brain,
  Zap,
  Heart,
  TrendingUp,
  Award,
  Building,
  Check,
  ChevronRight,
  Star,
  Terminal,
  ArrowUpRight,
  Flame,
  Globe
} from "lucide-react";

export const Route = createFileRoute("/fresh")({
  head: () => ({
    meta: [
      { title: "Arshith Fresh | Organic Agri-Tech & Commerce" },
      {
        name: "description",
        content:
          "Arshith Fresh is a next-generation technology-driven organic commerce platform. Delivering chemical-free vegetables, premium cold-pressed oils, and farm-to-table groceries.",
      },
      { property: "og:title", content: "Arshith Fresh | Organic Agri-Tech & Commerce" },
      { property: "og:image", content: freshHero },
    ],
  }),
  component: Page,
});

const emphases = [
  {
    icon: ShoppingBag,
    title: "Premium Experience",
    desc: "A beautifully curated, seamless digital interface making everyday grocery shopping feel premium.",
  },
  {
    icon: Truck,
    title: "Fast & Reliable",
    desc: "Highly optimized routing and delivery logistics built to get daily needs to your doorstep.",
  },
  {
    icon: Users,
    title: "Customer-First",
    desc: "Decisions made around user convenience, personalization, and seamless checkout operations.",
  },
  {
    icon: Cpu,
    title: "Tech-Enabled Retail",
    desc: "Merging real-world storefronts with deep technological orchestration for real-time catalog accuracy.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Flexible modular architecture built to scale seller listings, transactions, and concurrent users.",
  },
];

const businessAreas = [
  {
    title: "Grocery Delivery",
    desc: "Rapid delivery of high-quality kitchen essentials, pantry staples, and everyday foods.",
    category: "Quick Commerce",
    color: "oklch(0.65 0.18 140)",
  },
  {
    title: "Organic & Fresh Products",
    desc: "Farm-to-table organic produce, chemical-free greens, and natural sweetners direct from producers.",
    category: "Purity & Wellness",
    color: "oklch(0.7 0.14 70)",
  },
  {
    title: "Household Essentials",
    desc: "Daily household utility items, safe cleaning products, and personal hygiene goods.",
    category: "Daily Utility",
    color: "oklch(0.6 0.12 220)",
  },
];

const brandIdentities = [
  { text: "Modern", desc: "Shaping the future of retail.", icon: Zap },
  { text: "Trustworthy", desc: "Direct sourcing, honest pricing.", icon: ShieldCheck },
  { text: "Technology-focused", desc: "AI, cloud, and real-time data.", icon: Cpu },
  { text: "Fast & Scalable", desc: "Ultra-high velocity execution.", icon: TrendingUp },
  { text: "Customer-centric", desc: "Everything centers on convenience.", icon: Heart },
  { text: "Startup-driven", desc: "Agile, passionate, hyper-focused.", icon: Award },
  { text: "Innovation-oriented", desc: "Constantly testing new frontiers.", icon: Sparkles },
  { text: "Premium Digital Commerce", desc: "Elevated design and premium service.", icon: ShoppingBag }
];

// Interactive Products Showcase Shelf
const premiumProducts = [
  {
    name: "Organic Wood-Pressed Coconut Oil",
    category: "Premium Culinary Oils",
    price: "₹380",
    unit: "500ml glass pack",
    farm: "Coimbatore Farmer Collective",
    latLong: "11.0168° N, 76.9558° E",
    soilPurity: "99.8%",
    batchCode: "AF-WPC-09",
    rating: 5,
    hue: "from-emerald-500/10 to-teal-500/20",
    glowColor: "rgba(16, 185, 129, 0.15)"
  },
  {
    name: "Wild Natural Forest Honey",
    category: "Clean Sweeteners",
    price: "₹450",
    unit: "350g amber jar",
    farm: "Western Ghats Tribal Coop",
    latLong: "10.8505° N, 76.2711° E",
    soilPurity: "100% Wild Sourced",
    batchCode: "AF-WFH-11",
    rating: 5,
    hue: "from-amber-500/10 to-yellow-500/20",
    glowColor: "rgba(245, 158, 11, 0.15)"
  },
  {
    name: "Premium Dry Fruits Selection",
    category: "Gourmet Health Foods",
    price: "₹820",
    unit: "500g organic pouch",
    farm: "Kashmir Organic Sourcing",
    latLong: "34.0837° N, 74.7973° E",
    soilPurity: "99.4%",
    batchCode: "AF-PDF-33",
    rating: 4.9,
    hue: "from-purple-500/10 to-indigo-500/20",
    glowColor: "rgba(168, 85, 247, 0.15)"
  },
  {
    name: "Traditionally Pressed Groundnut Oil",
    category: "Premium Culinary Oils",
    price: "₹320",
    unit: "500ml glass pack",
    farm: "Anantapur Organic Groves",
    latLong: "14.6819° N, 77.6006° E",
    soilPurity: "99.6%",
    batchCode: "AF-TPG-05",
    rating: 4.8,
    hue: "from-sky-500/10 to-blue-500/20",
    glowColor: "rgba(14, 165, 233, 0.15)"
  }
];

// Asymmetrical timeline pipeline sections (incorporating generated images)
const pipelinePhases = [
  {
    phase: "Phase 01",
    title: "Direct Grower Cooperatives",
    image: freshSourcing,
    kicker: "Origin & Sourcing Sincerity",
    desc: "We completely bypass middlemen cartels, purchasing fresh crop yield directly from organic South Indian grower collectives. This returns premium earnings to our growers while maintaining trace transparency.",
    stats: [
      { value: "500+", label: "Growers Partnered" },
      { value: "+38%", label: "Average Farm Earnings" },
      { value: "100%", label: "Chemical-Free Audited" }
    ],
    bgBlur: "bg-emerald-500/5",
    styleMask: "rounded-[40%_60%_70%_30%_/_50%_60%_30%_50%]"
  },
  {
    phase: "Phase 02",
    title: "Traceability Audited Packaging",
    image: freshPacking,
    kicker: "Purity & Packaging Integrity",
    desc: "Products enter our sanitized organic packaging centers, undergoing instant batch testing. A unique QR trace code is applied, detailing harvest coordinates and packaging metrics directly to the consumer.",
    stats: [
      { value: "AF-TRC", label: "Traceability Code" },
      { value: "99.8%", label: "Purity Standard" },
      { value: "Glass", label: "Zero-Plastic Sourcing" }
    ],
    bgBlur: "bg-amber-500/5",
    styleMask: "rounded-[60%_40%_30%_70%_/_40%_30%_70%_60%]"
  },
  {
    phase: "Phase 03",
    title: "Solar Chilled Logistics",
    image: freshColdchain,
    kicker: "Eco-Friendly Transit Velocity",
    desc: "To prevent post-harvest spoilage without chemical preservatives, we utilize Suntech-designed, solar-powered chilled logistics containers. Temperature variables remain stable from origin to dispatch.",
    stats: [
      { value: "4°C", label: "Stable Chilled Transit" },
      { value: "Solar", label: "Transit Fleet Drive" },
      { value: "-45%", label: "Transit Spoilage Lag" }
    ],
    bgBlur: "bg-sky-500/5",
    styleMask: "rounded-[50%_50%_30%_70%_/_60%_40%_60%_40%]"
  },
  {
    phase: "Phase 04",
    title: "Bespoke Doorstep Fulfillment",
    image: freshDelivery,
    kicker: "Premium Service Completion",
    desc: "Clean-label essentials arrive packaged inside biodegradable organic boxes, dispatched from localized Velo dark stores for rapid local deliveries. Everyday grocery shopping, elevated to a luxury benchmark.",
    stats: [
      { value: "<20min", label: "Darkstore Dispatch" },
      { value: "0%", label: "Plastic Bags Used" },
      { value: "99.92%", label: "Delivery SLA Accuracy" }
    ],
    bgBlur: "bg-purple-500/5",
    styleMask: "rounded-[40%_60%_40%_60%_/_50%_30%_70%_50%]"
  }
];

function Page() {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [pulseRiders, setPulseRiders] = useState<Array<{ id: number; x: number; y: number; pulse: boolean }>>([]);
  const [telemetryTemp, setTelemetryTemp] = useState(4.2);
  const [activeProductGlow, setActiveProductGlow] = useState<number | null>(null);

  // Scroll tracking for Parallax Visuals
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.15]);

  // Simulate Space Fleet Radar pulsing target indicators
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseRiders([
        { id: 1, x: 45, y: 35, pulse: Math.random() > 0.3 },
        { id: 2, x: 65, y: 55, pulse: Math.random() > 0.4 },
        { id: 3, x: 30, y: 70, pulse: Math.random() > 0.5 },
      ]);
      setTelemetryTemp(Number((4.0 + Math.random() * 0.4).toFixed(2)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-600 selection:text-white relative overflow-x-hidden" ref={containerRef}>
      <Nav forceSolid />

      {/* 1. CINEMATIC ORGANIC PARALLAX HERO */}
      <section
        ref={heroRef}
        className="relative h-[95vh] min-h-[720px] w-full overflow-hidden bg-slate-950 flex items-center"
      >
        {/* Parallax Background */}
        <motion.div 
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 h-full w-full pointer-events-none"
        >
          <img
            src={freshHero}
            alt="Arshith Fresh premium organic vegetables and clean-label oils"
            className="w-full h-full object-cover filter brightness-[0.4]"
          />
        </motion.div>

        {/* Ambient Botanical Glowing Orbs */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-emerald-500/10 blur-[130px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] rounded-full bg-amber-500/5 blur-[140px] pointer-events-none" />

        {/* Custom organic curved border bottom overlay */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-10" />

        <div className="container-x w-full relative z-10 text-white pt-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Frame */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-widest"
              >
                <Sparkles className="h-3.5 w-3.5 animate-spin" />
                <span>Modern Organic Agri-Tech</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight"
              >
                Arshith <br />
                <span className="italic font-normal text-emerald-300">Fresh</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-slate-300 font-light text-base md:text-lg max-w-xl leading-relaxed"
              >
                Elevating everyday organic commerce through severe technological precision, direct-grower traceability protocols, and zero-chemical clean label sourcing.
              </motion.p>

              {/* Action trigger links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-4 flex flex-wrap gap-4"
              >
                <a
                  href="https://arshithfresh.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 rounded bg-emerald-600 text-white font-semibold text-xs uppercase tracking-widest hover:bg-emerald-700 shadow-xl shadow-emerald-950/20 transition-all duration-300 flex items-center gap-3 group"
                >
                  <span>Explore Direct Shop</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#pipeline"
                  className="px-6 py-4 rounded border border-white/20 hover:border-white/50 text-white text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center"
                >
                  View Agri-Tech Pipeline
                </a>
              </motion.div>
            </div>

            {/* Right Interactive Floating Badge Console */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="w-full max-w-[380px] p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl relative overflow-hidden"
              >
                {/* Visual header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 text-slate-350">
                  <span className="text-[9px] font-bold tracking-widest font-mono uppercase">system-telemetry</span>
                  <Globe className="w-4 h-4 text-emerald-400" />
                </div>

                <div className="space-y-6">
                  {/* Metric counters */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/20 p-3.5 rounded-xl border border-white/5">
                      <span className="text-[10px] text-slate-400 block uppercase tracking-wide">Purity Certified</span>
                      <span className="text-2xl font-bold font-serif text-[var(--brand-gold)] block mt-1">99.8%</span>
                    </div>
                    <div className="bg-black/20 p-3.5 rounded-xl border border-white/5">
                      <span className="text-[10px] text-slate-400 block uppercase tracking-wide">Active Growers</span>
                      <span className="text-2xl font-bold font-serif text-emerald-400 block mt-1">500+</span>
                    </div>
                  </div>

                  {/* Operational Tags */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    {[
                      "Zero preservative agricultural logistics",
                      "Solar chilled preservation transit fleet",
                      "100% direct coordinates farm tracing"
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-300 text-xs font-light leading-relaxed">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. NEXT-GEN AGRI-TECH "SEED TO TABLE" ASYMMETRICAL DOSSIER (Morphing Frames Timeline) */}
      <section id="pipeline" className="py-32 bg-white relative border-b border-slate-100 overflow-hidden">
        {/* Dynamic Vertical Flow Track Line */}
        <div className="absolute top-48 bottom-48 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-emerald-500/10 via-emerald-600/30 to-emerald-500/10 hidden lg:block z-0">
          {/* Animated scrolling dot inside flow track */}
          <div className="sticky top-1/2 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow-md -translate-x-1.5 animate-bounce" />
        </div>

        <div className="container-x relative z-10">
          
          <div className="max-w-3xl mb-24 mx-auto text-center">
            <div className="kicker flex items-center justify-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full w-fit mx-auto">
              <Truck className="w-3.5 h-3.5" />
              Sourcing & Logistics Pipeline
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-slate-900 leading-tight font-semibold tracking-tight">
              Seed to Table: <br />
              The <span className="italic font-normal text-emerald-600">Asymmetrical Flow Experience</span>.
            </h2>
            <p className="mt-4 text-slate-500 font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              We reject ordinary grid boxes. Explore our direct farm-to-doorstep operational steps inside dynamic, morphing fluid image layouts.
            </p>
          </div>

          {/* Alternating Asymmetrical Timeline Stages */}
          <div className="space-y-36 max-w-6xl mx-auto">
            {pipelinePhases.map((phase, idx) => (
              <div 
                key={phase.phase}
                className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative"
              >
                {/* Floating blur indicator behind */}
                <div className={`absolute inset-0 w-80 h-80 rounded-full blur-[120px] pointer-events-none -z-10 ${phase.bgBlur} ${
                  idx % 2 === 1 ? "left-0" : "right-0"
                }`} />

                {/* Alternating Layout Image Column */}
                <div className={`lg:col-span-6 flex justify-center ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.03, rotate: idx % 2 === 1 ? -1 : 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className={`relative w-full max-w-[460px] aspect-[4/3] overflow-hidden border border-slate-100 shadow-md bg-slate-50 group pointer-events-auto cursor-pointer ${phase.styleMask}`}
                  >
                    <img
                      src={phase.image}
                      alt={phase.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1200ms]"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating phase code inside image */}
                    <span className="absolute top-4 left-4 text-[9px] font-bold uppercase tracking-widest font-mono bg-white text-slate-900 px-3 py-1.5 rounded-md shadow-md backdrop-blur">
                      {phase.phase}
                    </span>
                  </motion.div>
                </div>

                {/* Narrative Info Column */}
                <div className={`lg:col-span-6 space-y-6 ${
                  idx % 2 === 1 ? "lg:order-1" : ""
                }`}>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block mb-3 font-sans">
                      {phase.kicker}
                    </span>
                    <h3 className="font-serif text-3xl text-slate-950 font-semibold leading-tight">
                      {phase.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
                    {phase.desc}
                  </p>

                  {/* Micro telemetry highlights */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-150">
                    {phase.stats.map((s, sIdx) => (
                      <div key={sIdx}>
                        <span className="text-xl font-bold font-serif text-emerald-600 block">{s.value}</span>
                        <span className="text-[9px] font-bold uppercase text-slate-400 tracking-wider block mt-1 leading-none">
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. PREMIUM PRODUCTS TACTILE SHOWCASE (Luxury Apothecary Shelf) */}
      <section className="py-32 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-emerald-500/5 blur-[130px] pointer-events-none animate-pulse" />

        <div className="container-x relative z-10">
          
          <div className="max-w-3xl mb-20">
            <div className="kicker flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full w-fit">
              <ShoppingBag className="w-3.5 h-3.5" />
              Tactile Apothecary Shelf
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-slate-900 leading-tight font-semibold tracking-tight">
              Premium Clean-Label <br />
              <span className="italic font-normal text-emerald-600">Product Showcases</span>.
            </h2>
            <p className="mt-4 text-slate-500 font-light text-base md:text-lg leading-relaxed">
              Examine our high-end, clean-label product selections. Every container represents pesticide-free sourcing verification and complete coordinate trace mapping.
            </p>
          </div>

          {/* Visual Shelf Catalog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {premiumProducts.map((p, idx) => (
              <div
                key={p.name}
                onMouseEnter={() => setActiveProductGlow(idx)}
                onMouseLeave={() => setActiveProductGlow(null)}
                className="bg-white border border-slate-150 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 relative group flex flex-col justify-between overflow-hidden cursor-pointer"
                style={{
                  boxShadow: activeProductGlow === idx ? `0 20px 40px -15px ${p.glowColor}` : ""
                }}
              >
                {/* Dynamic Mouse Hover Ambient Glow Sphere */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none -z-10"
                  style={{ backgroundImage: `radial-gradient(circle at top right, ${p.glowColor}, transparent 65%)` }}
                />

                <div>
                  
                  {/* Header tags */}
                  <div className="flex justify-between items-center mb-6 relative z-10">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
                      {p.category}
                    </span>
                    <span className="text-[8px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                      {p.rating}
                    </span>
                  </div>

                  {/* 3D-styled Tactile Visual container (glass bottle mockup) */}
                  <div className="aspect-[4/3] w-full rounded-2xl bg-slate-50 border border-slate-100/50 mb-6 flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-slate-100/30 transition-colors">
                    {/* Floating Glow Halo */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    {/* Dynamic styled bottle mock */}
                    <motion.div 
                      whileHover={{ y: -6, rotate: 2 }}
                      className="w-12 h-20 bg-gradient-to-b from-emerald-600/10 to-emerald-700/20 rounded-xl relative flex flex-col justify-between p-2.5 shadow-md border border-emerald-500/10 group-hover:scale-105 transition-transform duration-300"
                    >
                      <div className="w-full h-1 bg-amber-500/40 rounded-full mx-auto" />
                      <div className="text-[5px] font-bold text-emerald-850 text-center uppercase tracking-widest leading-none font-sans select-none">
                        ARSHITH<br />FRESH
                      </div>
                      <div className="w-full h-0.5 bg-slate-350/40 rounded-full" />
                    </motion.div>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors mb-3">
                    {p.name}
                  </h3>

                  {/* Sourcing LatLong coordinates & batch logs */}
                  <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-4 text-[10px] space-y-1.5 mb-6 text-slate-500">
                    <div className="flex justify-between font-light items-center">
                      <span>Coordinates:</span>
                      <span className="font-semibold text-slate-800 flex items-center gap-1 font-mono">
                        <MapPin className="w-3 h-3 text-emerald-600" />
                        {p.latLong}
                      </span>
                    </div>
                    <div className="flex justify-between font-light">
                      <span>Soil Purity Index:</span>
                      <span className="font-semibold text-slate-800">{p.soilPurity}</span>
                    </div>
                    <div className="flex justify-between font-light">
                      <span>Trace Batch ID:</span>
                      <span className="font-mono text-emerald-700 font-bold">{p.batchCode}</span>
                    </div>
                  </div>

                </div>

                {/* Price Dispatch Action Footer */}
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-slate-950 font-sans">{p.price}</span>
                    <span className="text-[10px] text-slate-400 font-light block font-sans">SLA Price / {p.unit}</span>
                  </div>

                  <a
                    href="https://arshithfresh.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 rounded-full bg-slate-900 text-white hover:bg-emerald-600 flex items-center justify-center shadow-md transition-all duration-300 group-hover:rotate-12"
                  >
                    <ArrowUpRight className="w-4.5 h-4.5" />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. AGRI-TECH "SPACE CONTROL" CONTROL CENTER BENTO GRID (Highly Unique Tech Dashboard Console) */}
      <section className="bg-[#0F172A] py-32 border-b border-slate-950 relative overflow-hidden text-white">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none" />

        <div className="container-x relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-5">
              <div className="kicker flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full w-fit">
                <Code className="w-3.5 h-3.5" />
                Technical Infrastructure Hub
              </div>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl text-white leading-tight font-semibold tracking-tight">
                Agri-Tech Control <br />
                <span className="italic font-normal text-emerald-400">Space Operations</span>.
              </h2>
              <p className="mt-6 text-slate-400 font-light text-base leading-relaxed">
                Explore our proprietary digital fulfillment console. Real-time geolocated dispatches, temperature variables telemetry, and machine learning recommenders.
              </p>
            </div>
            
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Cpu, label: "Platform API Latency", val: "142ms Avg", sub: "Global API gateway dispatch" },
                  { icon: Server, label: "Auto-Scaling Nodes", val: "24 Active", sub: "Kubernetes micro clusters" }
                ].map((item, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase font-mono tracking-wider">{item.label}</span>
                      <span className="text-lg font-bold text-white block mt-1">{item.val}</span>
                      <span className="text-[10px] text-slate-400 block mt-0.5 font-light">{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Advanced Bento Grid Dashboards Mockup */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Bento Card 1: Autonomous Fleet Sonar Radar Map (Visual mockup) */}
            <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 shadow-2xl relative overflow-hidden min-h-[420px] flex flex-col justify-between">
              <div>
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[10px] text-slate-450 font-mono uppercase tracking-widest">autonomous-dispatch-radar</span>
                  </div>
                  <Activity className="w-4 h-4 text-emerald-400" />
                </div>

                <p className="text-slate-400 font-light text-xs leading-relaxed max-w-md">
                  Active fulfillment routing inside municipal dark store radiuses. Automated dispatch allocation calculated every 3 seconds.
                </p>
              </div>

              {/* Sonar Radar circular mapping visual */}
              <div className="my-8 relative w-48 h-48 rounded-full border border-slate-800/80 mx-auto flex items-center justify-center overflow-hidden bg-black/10">
                {/* Concentric rings */}
                <div className="absolute inset-4 rounded-full border border-slate-850" />
                <div className="absolute inset-10 rounded-full border border-slate-850" />
                <div className="absolute inset-16 rounded-full border border-slate-850" />
                
                {/* Rotating sweeps */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 rounded-full animate-[spin_5s_linear_infinite] z-0" />
                
                {/* Pulsing delivery targets */}
                {pulseRiders.map((rider) => (
                  <div
                    key={rider.id}
                    className="absolute w-2 h-2 rounded-full bg-emerald-400 transition-all duration-1000 z-10"
                    style={{
                      left: `${rider.x}%`,
                      top: `${rider.y}%`,
                      boxShadow: rider.pulse ? "0 0 12px #34d399" : ""
                    }}
                  />
                ))}
                
                {/* Central home node */}
                <div className="w-3.5 h-3.5 rounded-full bg-[#BA8C32] border-2 border-slate-900 z-20 shadow-md" />
              </div>

              <div className="flex justify-between items-center text-[9px] font-mono text-slate-500">
                <span>RADAR STATUS: ACTIVE</span>
                <span className="text-emerald-400">3 ROUTING TARGETS DETECTED</span>
              </div>
            </div>

            {/* Bento Card 2: Solar Transit telemetry variable console (Visual mockup) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Box 2.1: Solar chilled container variables */}
              <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                    <span className="text-[10px] text-slate-450 font-mono uppercase tracking-widest">transit-solar-telemetry</span>
                    <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
                  </div>
                  <h4 className="text-slate-350 text-xs font-mono uppercase">Coldchain variables stability</h4>
                </div>

                <div className="my-6 space-y-4 font-mono text-xs">
                  <div className="flex justify-between items-center bg-black/20 p-3.5 rounded-xl border border-slate-850">
                    <span className="text-slate-500">Container Temp:</span>
                    <span className="text-emerald-400 font-bold text-base">{telemetryTemp}°C Stable</span>
                  </div>

                  <div className="flex justify-between items-center bg-black/20 p-3.5 rounded-xl border border-slate-850">
                    <span className="text-slate-500">Battery Status:</span>
                    <span className="text-white font-bold text-base">94% Solar Charging</span>
                  </div>
                </div>

                <div className="text-[9px] text-slate-500 font-mono flex justify-between">
                  <span>TELEMETRY SYNC: OK</span>
                  <span>100% SOLAR POWERED</span>
                </div>
              </div>

              {/* Box 2.2: Platform concurrency metrics */}
              <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
                  <span className="text-[10px] text-slate-450 font-mono uppercase tracking-widest">database-nodes</span>
                  <Database className="w-4 h-4 text-sky-400" />
                </div>

                <h4 className="text-slate-350 text-xs font-mono uppercase mb-4">Concurrency checkout dispatch</h4>
                <div className="space-y-3 font-mono text-[10px] text-slate-400">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Checkout API Concurrency load:</span>
                      <span className="text-white">82%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-sky-500 rounded-full" style={{ width: "82%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Inventory dispatch sync rate:</span>
                      <span className="text-white">96%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: "96%" }} />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. BRAND IDENTITY */}
      <section className="bg-background py-24 md:py-32 relative border-b border-border">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Identity Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-4 order-2 lg:order-1">
              {brandIdentities.map((identity, idx) => {
                const Icon = identity.icon;
                return (
                  <motion.div
                    key={identity.text}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between aspect-[1.1/1]"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-primary">
                        {identity.text}
                      </h4>
                      <p className="text-[11px] text-foreground/50 font-light mt-1">
                        {identity.desc}
                      </p>
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
              <div className="kicker">Brand Identity</div>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
                How our Brand <br />
                <span className="italic font-medium text-emerald-600">Should Feel</span>.
              </h2>
              <p className="mt-6 text-foreground/75 font-light text-base leading-relaxed">
                Our identity projects tech competency with organic purity. We communicate high velocity and technological precision alongside the warmth, transparency, and health that customers demand from premium food markets.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. QUICK COMMERCE BENCHMARK BANNER */}
      <section className="relative bg-[var(--brand-navy-deep)] overflow-hidden py-24 border-b border-border">
        {/* Decorative blur */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="container-x relative z-10 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="kicker flex items-center justify-center gap-2 mb-6"
              style={{ color: "oklch(0.78 0.16 140)" }}
            >
              <Zap className="w-4 h-4 fill-emerald-400 text-emerald-400" />
              Engineered for Velocity & Scale
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-3xl md:text-5xl font-light leading-tight mb-8"
            >
              A Premium Benchmark in Modern <br />
              <span className="italic font-normal text-emerald-300">Quick-Commerce</span> Operations.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/70 font-light text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10"
            >
              The overall experience should resemble a combination of modern e-commerce and quick-commerce platforms like Blinkit, Zepto, BigBasket, Amazon Fresh, and Instamart while maintaining a unique premium brand identity for Arshith Fresh.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-50 text-xs tracking-widest uppercase"
            >
              <span>Blinkit</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Zepto</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>BigBasket</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Amazon Fresh</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Instamart</span>
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
