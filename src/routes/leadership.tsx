import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import ceo from "@/assets/ceo.png";
import president from "@/assets/MD.jpeg";
import teamImage from "@/assets/Team.jpeg";
import { Marquee } from "@/components/ui/marquee";

// Import all 13 marquee images from src/assets/marque
import m01 from "@/assets/marque/01.jpg";
import m02 from "@/assets/marque/02.jpg";
import m03 from "@/assets/marque/03.jpg";
import m04 from "@/assets/marque/04.jpg";
import m05 from "@/assets/marque/05.jpg";
import m06 from "@/assets/marque/06.jpg";
import m07 from "@/assets/marque/07.jpg";
import m08 from "@/assets/marque/08.jpg";
import m09 from "@/assets/marque/09.jpg";
import m10 from "@/assets/marque/10.jpg";
import m11 from "@/assets/marque/11.jpg";
import m12 from "@/assets/marque/12.jpg";
import m13 from "@/assets/marque/13.jpg";

import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  Users, 
  Calendar, 
  Award, 
  Star, 
  TrendingUp, 
  Layers, 
  Briefcase,
  ExternalLink,
  MessageSquare,
  Image as ImageIcon,
  Check
} from "lucide-react";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership Board | Arshith Group" },
      {
        name: "description",
        content:
          "Meet the executive leaders of Arshith Group — Founder & CEO Farook Nurubhasha and President & MD Pallavi Nelli — guiding digital transformation and grassroots e-commerce.",
      },
      { property: "og:title", content: "Executive Board | Arshith Group" },
      { property: "og:image", content: ceo },
    ],
  }),
  component: LeadershipPage,
});

// Canvas Particle background for Hero
function HeroParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const particleCount = Math.min(50, Math.floor(canvas.width / 30));
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${p.opacity})`; // Soft Emerald
        ctx.fill();
      });

      // Connecting lines
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.05;
            ctx.strokeStyle = `rgba(186, 140, 50, ${alpha})`; // Gold Accent
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
          }
        }
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}

type TabType = "vision" | "targets" | "impact";

// Tabbed Dossier Panel component for each leader
function LeaderDossier({ leader, index }: { leader: any; index: number }) {
  const [activeTab, setActiveTab] = useState<TabType>("vision");

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-500 ${leader.borderGlow} grid lg:grid-cols-12 gap-12 items-start relative overflow-hidden`}
    >
      {/* Corner Glow Overlay */}
      <div
        className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at top right, ${leader.colorAccent}15, transparent 70%)` }}
      />

      {/* Portrait frame Column */}
      <div className={`lg:col-span-5 relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-100 shadow-md group bg-slate-100"
        >
          <img
            src={leader.image}
            alt={leader.name}
            width={800}
            height={1024}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

          {/* Floating tag credentials */}
          <span className="absolute bottom-4 left-4 text-[9px] font-bold uppercase tracking-widest bg-white/95 text-[#0F172A] px-3.5 py-1.5 rounded-lg shadow-md backdrop-blur flex items-center gap-2">
            <Star className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
            {leader.experience}
          </span>
        </motion.div>

        {/* Small nested metrics summary card under portrait */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Award className="w-4.5 h-4.5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Board Status</p>
              <h4 className="text-slate-800 text-xs font-bold mt-0.5">Active Governance</h4>
            </div>
          </div>
          <span className="text-[10px] font-bold font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
            SLA 99.9%
          </span>
        </div>
      </div>

      {/* Content tabs Column */}
      <div className={`lg:col-span-7 space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
        
        {/* Header Block */}
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block mb-3">
            {leader.role}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0F172A] font-semibold tracking-tight">
            {leader.name}
          </h2>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mt-1.5 font-sans">
            Arshith Group Board of Directors
          </p>
        </div>

        {/* Tab Switcher controls */}
        <div className="flex gap-2 p-1 rounded-lg bg-slate-50 border border-slate-100 w-fit">
          {[
            { id: "vision", label: "Strategic Vision" },
            { id: "targets", label: "Operational Targets" },
            { id: "impact", label: "Institutional Impact" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-white text-emerald-700 shadow-sm border border-slate-100"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Tab Contents Panel */}
        <div className="min-h-[220px] bg-slate-50/50 rounded-2xl border border-slate-100/60 p-6 md:p-8">
          <AnimatePresence mode="wait">
            {activeTab === "vision" && (
              <motion.div
                key="vision"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <blockquote className="border-l-4 border-[var(--brand-gold)] pl-4 py-1 text-slate-700 italic font-serif text-lg leading-relaxed">
                  “{leader.quote}”
                </blockquote>
                <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed pt-2">
                  {leader.bio}
                </p>
              </motion.div>
            )}

            {activeTab === "targets" && (
              <motion.div
                key="targets"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Operational Focus Checklists
                </h4>
                <ul className="space-y-3">
                  {leader.priorities.map((item: string, pIdx: number) => (
                    <li key={pIdx} className="flex items-start gap-3 text-xs md:text-sm text-slate-600 font-light leading-snug">
                      <span className="h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {activeTab === "impact" && (
              <motion.div
                key="impact"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Governance Influence Progress Indices
                </h4>
                <div className="space-y-4">
                  {leader.metrics.map((m: any, mIdx: number) => (
                    <div key={mIdx}>
                      <div className="flex justify-between text-xs font-semibold font-sans mb-1 text-slate-700">
                        <span>{m.name}</span>
                        <span>{m.score}% Performance</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${m.score}%` }}
                          transition={{ duration: 1, delay: mIdx * 0.1 }}
                          className="h-full bg-emerald-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Dashboard Action button */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium font-sans">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>Updated Board Profile</span>
          </div>

          <Link
            to={leader.to}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#0F172A] text-white hover:bg-emerald-700 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md shadow-slate-900/10 group"
          >
            <span>Explore Executive Dossier</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </motion.div>
  );
}

const leadersList = [
  {
    name: "Farook Nurubhasha",
    role: "Founder & Chief Executive Officer",
    image: ceo,
    quote:
      "Growth is not just about business — it is about creating value, empowering people, and making a meaningful impact every day.",
    bio: "Farook Nurubhasha spearheads the corporate vision and enterprise scaling of Arshith Group. With nearly a decade of experience across technical architectures and management domains, he set the foundation for the group's pivot from a software practice into a multi-sector conglomerate.",
    to: "/ceo" as const,
    priorities: [
      "Strategic conglomerate consolidation & multi-sector scaling",
      "Developer enablement ecosystems & student placements programs",
      "Direct-to-grower agricultural logistics integrations"
    ],
    experience: "Est. 10 Yrs Software & Scaling",
    borderGlow: "hover:border-[var(--brand-gold)]/40 hover:shadow-[var(--brand-gold)]/5",
    colorAccent: "oklch(0.74 0.14 70)",
    metrics: [
      { name: "Conglomerate Scaling", score: 98 },
      { name: "Developer Enablement", score: 95 },
      { name: "Agrarian Commerce Integration", score: 92 }
    ]
  },
  {
    name: "Pallavi Nelli",
    role: "President & Managing Director",
    image: president,
    quote:
      "Structure is what turns ambition into outcomes. We build the systems that let great people do their best work.",
    bio: "Pallavi Nelli leads structural growth and operational strategy across every vertical. Her decade of management experience anchors the group's day-to-day execution, from college placement partnerships to cross-vertical logistics systems.",
    to: "/md" as const,
    priorities: [
      "Operational workflow standardization & resource auditing",
      "Human capital strategy & university recruitment alliances",
      "Direct logistics warehousing dispatching channels"
    ],
    experience: "Est. 10 Yrs Operational Systems",
    borderGlow: "hover:border-emerald-500/40 hover:shadow-emerald-500/5",
    colorAccent: "oklch(0.76 0.15 145)",
    metrics: [
      { name: "Workflow Audit SLA", score: 96 },
      { name: "Recruitment Placements", score: 94 },
      { name: "Supply Logistics Execution", score: 95 }
    ]
  },
];

// Row image grids for scrolling Marquees
const row1Images = [m01, m02, m03, m04, m05, m06, m07];
const row2Images = [m08, m09, m10, m11, m12, m13, m01];

function LeadershipPage() {
  const [activeConsoleTab, setActiveConsoleTab] = useState<"scale" | "internships" | "slas">("scale");

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-600 selection:text-white relative overflow-x-hidden">
      <Nav forceSolid />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes tech-scan {
          0% { top: -5%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 105%; opacity: 0; }
        }
        .animate-tech-scan {
          animation: tech-scan 3.5s cubic-bezier(0.15, 0.85, 0.45, 1) infinite;
        }
        @keyframes subtle-glow {
          0%, 100% { filter: drop-shadow(0 0 15px rgba(16, 185, 129, 0.15)); }
          50% { filter: drop-shadow(0 0 25px rgba(16, 185, 129, 0.35)); }
        }
        .animate-subtle-glow {
          animation: subtle-glow 6s ease-in-out infinite;
        }
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-rotate-slow {
          animation: rotate-slow 25s linear infinite;
        }
      `}} />

      {/* Entirely Redesigned Interactive Parallax Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0B0F19] text-white overflow-hidden flex items-center min-h-[95vh]">
        <HeroParticleBackground />
        
        {/* Dynamic Glowing Blobs Backdrop */}
        <div className="absolute top-1/4 left-1/10 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/10 h-[550px] w-[550px] rounded-full bg-[var(--brand-gold)]/10 blur-[140px] pointer-events-none" />
        
        {/* Cyberpunk Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="container-x w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-6 w-fit"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <Sparkles className="h-3.5 w-3.5" />
                <span>Executive Council Board</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6"
              >
                The architects of <span className="bg-gradient-to-r from-emerald-400 via-[var(--brand-gold)] to-amber-300 bg-clip-text text-transparent italic font-medium">digital value</span> & sustainable growth.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-slate-300 text-sm md:text-base font-light max-w-xl mb-8 leading-relaxed"
              >
                Meet the executive leaders steering the corporate path of Arshith Group — consolidating grassroots <span className="text-[var(--brand-gold)] font-medium">organic commerce</span>, automating <span className="text-emerald-400 font-medium">cloud systems</span> pipelines, and cultivating placement placement <span className="text-emerald-400 font-medium">developer internships</span>.
              </motion.p>

              {/* Call to Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="flex flex-wrap gap-4 items-center mb-8 lg:mb-0"
              >
                <a
                  href="#executive-board"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-emerald-900/30 group"
                >
                  <span>Meet the Directors</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#operational-gallery"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 font-semibold text-sm transition-all duration-300 border border-slate-700/50 backdrop-blur-sm"
                >
                  <span>View Operations</span>
                </a>
              </motion.div>
            </div>

            {/* Hero Right: Framed Team Photo */}
            <div className="lg:col-span-6 flex justify-center relative">
              {/* Spinning Tech Dial Behind Card */}
              <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full border border-dashed border-emerald-500/10 animate-rotate-slow pointer-events-none z-0 hidden lg:block" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full border border-dotted border-[var(--brand-gold)]/10 animate-rotate-slow pointer-events-none z-0 hidden lg:block" style={{ animationDirection: 'reverse' }} />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full max-w-[480px] lg:max-w-none p-3.5 rounded-3xl border border-slate-800 bg-slate-900/30 shadow-2xl backdrop-blur-sm relative overflow-hidden group z-10 animate-subtle-glow"
              >
                {/* Dynamic Scanline Overlay */}
                <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-tech-scan pointer-events-none z-20" />

                {/* Viewfinder Corner Brackets */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[var(--brand-gold)] z-30" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[var(--brand-gold)] z-30" />
                <div className="absolute bottom-16 left-4 w-4 h-4 border-b-2 border-l-2 border-[var(--brand-gold)] z-30" />
                <div className="absolute bottom-16 right-4 w-4 h-4 border-b-2 border-r-2 border-[var(--brand-gold)] z-30" />

                <div className="relative aspect-[4/5] md:aspect-[5/6] lg:aspect-[4/5] overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950">
                  <img
                    src={teamImage}
                    alt="Arshith Group Executive Council Team"
                    className="w-full h-full object-cover object-top transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Premium overlay gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent z-10" />
                  
                  {/* Floating active status badge */}
                  <span className="absolute top-5 left-5 text-[9px] font-mono uppercase tracking-widest bg-emerald-500/90 text-white px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-md z-20">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                    Board Console // LIVE
                  </span>
                </div>

                {/* Caption Bar */}
                <div className="mt-4 px-3 py-2 flex items-center justify-between border-t border-slate-800/60 pt-3 relative z-10">
                  <div>
                    <h3 className="text-white font-serif text-sm font-semibold tracking-wide">Executive Leadership Council</h3>
                    <p className="text-slate-450 text-[10px] font-sans uppercase tracking-widest mt-0.5">Arshith Group Board & Core Team</p>
                  </div>
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                    <Users className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Interactive Operations Console Bottom Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 pt-10 border-t border-slate-800/60"
          >
            {/* Console Header & Tab Switcher */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-mono font-bold">interactive dashboard console</span>
                </div>
                <h3 className="text-white text-lg font-serif">Arshith Operations Index</h3>
              </div>

              <div className="flex flex-wrap gap-2 p-1 rounded-xl bg-slate-950 border border-slate-800/80 w-fit">
                {[
                  { id: "scale", label: "Scale Metrics", icon: TrendingUp },
                  { id: "internships", label: "Alliances & Interns", icon: Users },
                  { id: "slas", label: "Operational SLAs", icon: ShieldCheck }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveConsoleTab(tab.id as any)}
                      className={`px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all duration-300 ${
                        activeConsoleTab === tab.id
                          ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/30 border border-emerald-500/20"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Console Dashboard Display */}
            <div className="bg-slate-950/40 border border-slate-850 p-6 rounded-2xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emerald-500/5 to-transparent pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {activeConsoleTab === "scale" && (
                  <motion.div
                    key="scale"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-3 gap-6"
                  >
                    {[
                      { num: "2", title: "Executive Directors", sub: "Founder Farook Nurubhasha & MD Pallavi Nelli guiding day-to-day scaling.", color: "text-[var(--brand-gold)]" },
                      { num: "20+", title: "Years Experience", sub: "Combined corporate management experience across IT architectures & rural logistics.", color: "text-emerald-400" },
                      { num: "3", title: "Operating Sectors", sub: "Unified corporate structure across Fresh Produce, IT Placements & Clean Energy.", color: "text-blue-400" }
                    ].map((item, i) => (
                      <div key={i} className="p-5 rounded-xl bg-slate-900/40 border border-slate-850 hover:border-slate-800 transition-all flex flex-col justify-between">
                        <div>
                          <span className={`text-4xl font-serif font-bold ${item.color} block mb-2`}>{item.num}</span>
                          <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1.5">{item.title}</h4>
                          <p className="text-slate-400 text-xs font-light leading-relaxed">{item.sub}</p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-850/60 flex items-center justify-between text-[9px] font-mono text-slate-500">
                          <span>METRIC // CONGLOMERATE_INDEX</span>
                          <span className="text-emerald-500/80">STATUS: STABLE</span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeConsoleTab === "internships" && (
                  <motion.div
                    key="internships"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-3 gap-6"
                  >
                    {[
                      { num: "500+", title: "Placements & Staff", sub: "Direct operational and software engineering staff running critical hubs.", color: "text-emerald-400" },
                      { num: "500+", title: "Developer Interns", sub: "Rural college graduates empowered through Avanthi placement placement programs.", color: "text-[var(--brand-gold)]" },
                      { num: "100%", title: "Placements SLA Achievement", sub: "Robust practical pipelines feeding fresh talent directly into IT systems.", color: "text-indigo-400" }
                    ].map((item, i) => (
                      <div key={i} className="p-5 rounded-xl bg-slate-900/40 border border-slate-850 hover:border-slate-800 transition-all flex flex-col justify-between">
                        <div>
                          <span className={`text-4xl font-serif font-bold ${item.color} block mb-2`}>{item.num}</span>
                          <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1.5">{item.title}</h4>
                          <p className="text-slate-400 text-xs font-light leading-relaxed">{item.sub}</p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-850/60 flex items-center justify-between text-[9px] font-mono text-slate-500">
                          <span>METRIC // HUMAN_CAPITAL</span>
                          <span className="text-emerald-500/80">STATUS: LIVE</span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeConsoleTab === "slas" && (
                  <motion.div
                    key="slas"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-3 gap-6"
                  >
                    {[
                      { num: "99.95%", title: "Operational Uptime SLA", sub: "Consolidated enterprise level reliability across software & solar energy grid.", color: "text-emerald-400" },
                      { num: "98%", title: "Logistics Fulfillment", sub: "Direct logistics channels linking agricultural hubs to grower warehousing.", color: "text-sky-400" },
                      { num: "10+", title: "Regional Hubs Operating", sub: "Active dispatch and supply networks handling high-capacity commerce.", color: "text-[var(--brand-gold)]" }
                    ].map((item, i) => (
                      <div key={i} className="p-5 rounded-xl bg-slate-900/40 border border-slate-850 hover:border-slate-800 transition-all flex flex-col justify-between">
                        <div>
                          <span className={`text-4xl font-serif font-bold ${item.color} block mb-2`}>{item.num}</span>
                          <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1.5">{item.title}</h4>
                          <p className="text-slate-400 text-xs font-light leading-relaxed">{item.sub}</p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-850/60 flex items-center justify-between text-[9px] font-mono text-slate-500">
                          <span>METRIC // COMPLIANCE_SECURE</span>
                          <span className="text-emerald-500/80">STATUS: COMPLIANT</span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Infinite Scrolling Operational Gallery (New Marquee Section) */}
      <section id="operational-gallery" className="py-20 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="container-x mb-12">
          <div className="max-w-3xl">
            <div className="kicker flex items-center gap-1.5">
              <ImageIcon className="w-3.5 h-3.5 text-emerald-600" />
              Operational Gallery
            </div>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-[#0F172A] font-semibold tracking-tight">
              Arshith Group in <span className="italic font-medium text-emerald-600">Action</span>
            </h2>
            <p className="mt-4 text-slate-500 font-light text-sm leading-relaxed max-w-xl">
              A visual chronicle of our South Indian agricultural logistics hubs, software engineering workspaces, solar cold storages, and local grower collaborations.
            </p>
          </div>
        </div>

        {/* Marquee Console */}
        <div className="relative flex w-full flex-col gap-6 items-center justify-center overflow-hidden py-4 select-none">
          {/* Row 1: Forward scrolling */}
          <Marquee pauseOnHover className="[--duration:30s] w-full">
            {row1Images.map((img, idx) => (
              <div 
                key={idx}
                className="w-72 h-44 rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative group shrink-0 transition-transform duration-300 hover:scale-[1.02]"
              >
                <img 
                  src={img} 
                  alt={`Arshith Operations Grid Frame ${idx + 1}`} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </Marquee>

          {/* Row 2: Reverse scrolling */}
          <Marquee reverse pauseOnHover className="[--duration:30s] w-full">
            {row2Images.map((img, idx) => (
              <div 
                key={idx}
                className="w-72 h-44 rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative group shrink-0 transition-transform duration-300 hover:scale-[1.02]"
              >
                <img 
                  src={img} 
                  alt={`Arshith Operations Grid Frame ${idx + 8}`} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </Marquee>

          {/* Lateral Fade overlays for infinite seamless feel */}
          <div className="absolute top-0 bottom-0 left-0 w-1/12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 bottom-0 right-0 w-1/12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>
      </section>

      {/* Executive dossiers mapping Grid */}
      <section id="executive-board" className="py-24 bg-slate-50 relative border-b border-border">
        <div className="container-x">
          <div className="space-y-24 max-w-6xl mx-auto">
            {leadersList.map((leader, i) => (
              <LeaderDossier key={leader.name} leader={leader} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="bg-slate-100 py-20">
        <div className="container-x text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-slate-700 border-b border-slate-300 pb-2 hover:text-emerald-700 hover:border-emerald-600 transition-colors"
          >
            <span>←</span> Back to Arshith Group
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
