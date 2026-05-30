import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Linkedin,
  Mail,
  Building,
  TrendingUp,
  Award,
  Users,
  Briefcase,
  Layers,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Zap,
  Globe,
  CheckCircle2,
  Code,
  GraduationCap,
  Calendar,
  Send,
  MapPin,
  ShieldCheck,
  Rocket
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import ceoImage from "@/assets/ceo.png";

export const Route = createFileRoute("/ceo")({
  head: () => ({
    meta: [
      { title: "Farook N | Chairman & CEO | Arshith Group" },
      {
        name: "description",
        content:
          "Portfolio and vision of Farook N, Chairman & CEO of Arshith Group. Driving digital transformation, organic commerce, and young developer ecosystems.",
      },
      { property: "og:title", content: "Farook N | Chairman & CEO" },
      { property: "og:image", content: ceoImage },
    ],
  }),
  component: CEOProfilePage,
});

// Canvas Particle Background Component
function ParticleBackground() {
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

    // Initialize particles
    const particleCount = Math.min(60, Math.floor(canvas.width / 25));
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.4 + 0.1,
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
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`; // Accent blue
        ctx.fill();
      });

      // Draw subtle connecting lines
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.08;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`; // Highlight cyan
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

// Animated Counter Hook / Component
function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/\d/g, "");

  useEffect(() => {
    let start = 0;
    const end = numericValue;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 40);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [numericValue, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function CEOProfilePage() {
  const [activeTab, setActiveTab] = useState<"all" | "tech" | "commerce" | "ecosystem">("all");
  const [activeTimelineYear, setActiveTimelineYear] = useState<number>(2026);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulated professional loading animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const timelineData = [
    {
      year: 2026,
      title: "Conglomerate Scaling",
      description: "Driving the multi-sector expansion of Arshith Group into grassroots e-commerce, enterprise cloud consulting, and green sustainability initiatives.",
      icon: Rocket
    },
    {
      year: 2024,
      title: "Arshith Fresh India Launch",
      description: "Incorporated Arshith Fresh India Pvt Ltd, building a scalable organic supply-chain and marketplace ecosystem supporting local growers.",
      icon: Globe
    },
    {
      year: 2022,
      title: "Suntech & IT Pivot",
      description: "Expanded software consultancy and launched comprehensive real-world developer training & student incubation frameworks.",
      icon: Code
    },
    {
      year: 2018,
      title: "Foundation of Arshith Group",
      description: "Formally set the vision to empower local communities and businesses through digital infrastructure, beginning with custom software tools.",
      icon: Building
    }
  ];

  const testimonials = [
    {
      quote: "Farook's vision for developer enablement is game-changing. He doesn't just hire people; he builds supportive environments where young engineers work on high-impact production code.",
      author: "Aditya Sharma",
      role: "Lead Software Architect, Suntech Solutions",
      category: "Employee"
    },
    {
      quote: "As an intern, I got direct mentorship from the CEO. Farook's drive for technology accessibility inspired me to build clean, modular codebases and appreciate database scaling.",
      author: "Sneha Reddy",
      role: "Full-Stack Developer Intern",
      category: "Intern"
    },
    {
      quote: "Partnering with Arshith Fresh transformed our local logistics network. Farook's focus on transparent digital retail has unlocked brand new revenue segments.",
      author: "Rakesh K.",
      role: "Logistics Partner & Vendor",
      category: "Business Partner"
    }
  ];

  const companies = [
    {
      id: "fresh",
      title: "Arshith Fresh India Pvt Ltd",
      tagline: "Sustainable Organic Commerce",
      description: "A state-of-the-art e-commerce and organic products platform prioritizing customer health, transparent farm-to-table digital logistics, and scalable direct-to-consumer online retail.",
      techTags: ["React", "Node.js", "PostgreSQL", "TailwindCSS"],
      href: "/fresh",
      color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
      accentColor: "#10B981",
      category: "commerce"
    },
    {
      id: "suntech",
      title: "Suntech Solutions",
      tagline: "Enterprise Software & Pipelines",
      description: "A leading technology solutions firm delivering modern web applications, high-performance data processing pipelines, custom enterprise systems, and intensive technical internships.",
      techTags: ["React", "Java", "Python", "Cloud Databases"],
      href: "/suntech",
      color: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
      accentColor: "#F59E0B",
      category: "tech"
    },
    {
      id: "group",
      title: "Arshith Group",
      tagline: "Diversified Business Conglomerate",
      description: "The overarching corporate ecosystem catalyzing digital transformation, high-impact young talent incubator programs, web services, and tech-driven organic products.",
      techTags: ["Conglomerate", "Strategy", "Venture Building"],
      href: "/",
      color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
      accentColor: "#3B82F6",
      category: "ecosystem"
    }
  ];

  const techStack = [
    { name: "React / Vite", category: "Frontend", level: 95 },
    { name: "Node.js", category: "Backend", level: 90 },
    { name: "Java / Spring", category: "Enterprise", level: 85 },
    { name: "Python / AI", category: "Data Science", level: 80 },
    { name: "MySQL / Postgres", category: "Database", level: 90 },
    { name: "Cloud (AWS/CF)", category: "Infrastructure", level: 88 },
    { name: "REST APIs / GraphQL", category: "Integration", level: 92 },
    { name: "E-comm Architecture", category: "Retail Systems", level: 95 }
  ];

  const blogPosts = [
    {
      title: "Empowering Young Engineers: The Core Philosophy of Our Internship Programs",
      date: "May 2026",
      readTime: "5 min read",
      summary: "How Arshith Group bridges the gap between college curricula and complex enterprise applications through real production experience."
    },
    {
      title: "Digital Transformation in Grassroots Commerce: Lessons from Arshith Fresh",
      date: "March 2026",
      readTime: "7 min read",
      summary: "Bridging the digital divide for local growers by creating direct-to-consumer organic commerce pipelines with zero middleware friction."
    }
  ];

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const filteredCompanies = companies.filter(
    (c) => activeTab === "all" || c.category === activeTab
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center text-white">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full mb-4"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="font-sans tracking-widest uppercase text-xs text-blue-400 font-medium"
        >
          Loading CEO Portfolio...
        </motion.p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-blue-500 selection:text-white relative">
      <Nav forceSolid />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 bg-[#0F172A] text-white overflow-hidden flex items-center min-h-[90vh]">
        <ParticleBackground />
        
        {/* Decorative ambient blobs */}
        <div className="absolute top-1/4 left-1/10 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

        <div className="container-x w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6 w-fit"
              >
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                <span>Executive Portfolio</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-4"
              >
                Farook N
              </motion.h1>

              {/* Sub-titles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex flex-col gap-2.5 mb-6 text-slate-300 font-sans font-light"
              >
                <div className="flex items-center gap-3">
                  <Building className="h-4.5 w-4.5 text-blue-400 shrink-0" />
                  <span className="text-base md:text-lg">
                    Chairman & CEO at <span className="font-semibold text-white">Arshith Group</span>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                  <span className="text-base md:text-lg">
                    CEO at <span className="font-semibold text-white">Arshith Fresh India Pvt Ltd</span>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-4.5 w-4.5 text-amber-400 shrink-0" />
                  <span className="text-base md:text-lg">
                    Managing Director at <span className="font-semibold text-white">Suntech Solutions</span>
                  </span>
                </div>
              </motion.div>

              {/* Animated Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="font-serif text-2xl md:text-3xl font-light italic text-sky-400 mb-8 max-w-xl border-l-2 border-sky-400/30 pl-4 py-1"
              >
                “Building the Future of Digital Commerce & Technology”
              </motion.h2>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="px-8 py-3.5 rounded-md bg-blue-600 hover:bg-blue-500 font-sans text-sm font-medium text-white shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>Connect With Farook</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#companies"
                  className="px-8 py-3.5 rounded-md bg-slate-800/80 hover:bg-slate-700 font-sans text-sm font-medium text-white border border-slate-700/50 backdrop-blur-md transition-all duration-300"
                >
                  Explore Companies
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-md bg-slate-850 hover:bg-blue-600/10 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4.5 w-4.5 text-blue-400 hover:text-white transition-colors" />
                </a>
              </motion.div>
            </div>

            {/* Hero Right CEO Image */}
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative w-full max-w-[420px] aspect-[4/5] overflow-hidden rounded-2xl border border-slate-700/50 shadow-2xl group bg-gradient-to-b from-slate-850 to-slate-950"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-transparent z-10" />
                
                {/* Accent glow behind image */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 to-cyan-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-700" />
                
                <img
                  src={ceoImage}
                  alt="Farook N - Chairman & CEO"
                  className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                />

                {/* Subtitle badge in bottom overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-25 p-4 rounded-xl bg-slate-900/80 border border-slate-700/40 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-serif text-lg font-semibold">Farook N</h3>
                    <p className="text-slate-400 text-xs tracking-wider uppercase mt-0.5">Founder & Chairman</p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                    <Award className="h-4 w-4 text-blue-400" />
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* About & Story Section */}
      <section id="about" className="py-24 md:py-32 bg-white relative">
        <div className="container-x relative">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Visionary pillars */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="kicker text-blue-600">Entrepreneur & Visionary</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-[#0F172A] font-light leading-tight">
                Pioneering <span className="italic font-medium text-blue-600">digital change</span> and empowerment.
              </h2>
              <p className="mt-6 text-slate-600 font-light leading-relaxed">
                As a technical founder with nearly a decade of experience, Farook N spearheads corporate scalability and technology ecosystems, establishing structural frameworks that bridge the digital gap in both Indian e-commerce and web applications.
              </p>

              {/* Quick tags */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { title: "Technology Leader", desc: "Enterprise scale expert" },
                  { title: "Startup Visionary", desc: "Empowering grassroots retail" },
                  { title: "E-commerce Innovator", desc: "Farm-to-consumer networks" },
                  { title: "Incubation Pioneer", desc: "100+ developer placements" }
                ].map((item, index) => (
                  <div key={index} className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mb-2" />
                    <h4 className="font-sans font-semibold text-sm text-[#0F172A]">{item.title}</h4>
                    <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Founder's Story */}
            <div className="lg:col-span-7">
              <div className="p-8 md:p-10 rounded-2xl bg-slate-50 border border-slate-100 relative">
                <div className="absolute top-6 right-6 font-serif text-6xl text-slate-200 pointer-events-none font-bold">“</div>
                
                <h3 className="font-serif text-2xl text-[#0F172A] font-semibold mb-6">The Founder's Journey</h3>
                
                <div className="space-y-6 text-slate-600 font-light text-base leading-relaxed">
                  <p>
                    My obsession with technology began not as a purely corporate venture, but as a pursuit to engineer meaningful platforms. In a rapidly transforming digital environment, I believed that systems should serve real people—empowering small businesses, regional growers, and developers alike.
                  </p>
                  <p>
                    By setting the foundations of <strong className="text-[#0F172A] font-medium">Arshith Group</strong>, we initiated a cross-vertical trajectory. What began as a dedicated software practice at <strong className="text-[#0F172A] font-medium">Suntech Solutions</strong> has now scaled into a multi-sector conglomerate that powers green sustainability, digital retail platforms, and developer automation pipelines.
                  </p>
                  <p>
                    One of my biggest passions is the creation of a thriving, supportive <strong className="text-[#0F172A] font-medium">internship ecosystem</strong>. I firmly believe in supporting young talent. By providing students and junior developers with campus partnerships and real-world enterprise infrastructure, we build the developers of tomorrow, helping them find placements at top companies.
                  </p>
                  <p>
                    Our mission with Arshith Fresh India is simple: harness e-commerce pipelines to eliminate retail friction and build trust between local organic growers and thousands of customers. Growth must mean something—it is not merely about scaling financials, but about delivering lasting value and societal impact.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full bg-blue-500 flex items-center justify-center text-white font-serif font-bold text-lg">F</div>
                  <div>
                    <h5 className="font-sans font-bold text-sm text-[#0F172A]">Farook N</h5>
                    <p className="text-slate-500 text-xs">Chairman, Arshith Group</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Leadership Highlights (Stats Cards) */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />
        <div className="container-x relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="kicker text-sky-400">Impact Indicators</div>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl font-light">Leadership by the Numbers</h2>
            <p className="mt-4 text-slate-400 font-light text-sm md:text-base">
              The measurable footprint of our digital platforms and developer incubator frameworks.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
            {[
              { label: "Satisfied Customers", value: "30K+", sub: "Grassroots commerce", icon: Users },
              { label: "Shipped Products", value: "100+", sub: "E-comm & tech items", icon: Layers },
              { label: "Tech Ventures", value: "3+", sub: "Synergetic startups", icon: Building },
              { label: "Internships Granted", value: "500+", sub: "Technical incubation", icon: GraduationCap },
              { label: "Lines of Code", value: "1M+", sub: "Production architectures", icon: Code },
              { label: "Yearly Growth", value: "150%", sub: "Scale metrics", icon: TrendingUp }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/30 backdrop-blur-md hover:border-blue-500/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="h-10 w-10 rounded-lg bg-slate-750 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <stat.icon className="h-5 w-5 text-sky-400" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                    <AnimatedCounter value={stat.value} />
                  </h3>
                  <h4 className="font-sans font-semibold text-xs text-slate-200 uppercase tracking-wider">{stat.label}</h4>
                  <p className="text-slate-400 text-[10px] mt-1">{stat.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="py-24 md:py-32 bg-slate-50 relative">
        <div className="container-x">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="kicker text-blue-600">Enterprise Ecosystem</div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[#0F172A] font-light">Ecosystem & Ventures</h2>
              <p className="mt-4 text-slate-600 max-w-xl font-light text-sm md:text-base">
                Farook N spearheads three major ventures, bridging high-end web services, farm-to-consumer digital channels, and unified corporate direction.
              </p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex gap-2 mt-6 md:mt-0 p-1.5 rounded-lg bg-slate-100 border border-slate-200/60 w-fit shrink-0">
              {[
                { id: "all", label: "All Ventures" },
                { id: "tech", label: "Technology" },
                { id: "commerce", label: "Commerce" },
                { id: "ecosystem", label: "Ecosystem" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 text-xs font-semibold rounded-md transition-all duration-300 font-sans ${
                    activeTab === tab.id
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Company Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCompanies.map((c) => (
                <motion.div
                  key={c.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group relative overflow-hidden`}
                >
                  {/* Decorative glowing gradient block on card top hover */}
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-800 group-hover:bg-blue-500/10 group-hover:text-blue-600 transition-colors border border-slate-100">
                        {c.id === "fresh" ? (
                          <Globe className="h-6 w-6" />
                        ) : c.id === "suntech" ? (
                          <Code className="h-6 w-6" />
                        ) : (
                          <Building className="h-6 w-6" />
                        )}
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded-full">
                        {c.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#0F172A] font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-blue-500 font-sans font-medium text-xs tracking-wide uppercase mb-4">
                      {c.tagline}
                    </p>
                    <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
                      {c.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {c.techTags.map((tag) => (
                        <span key={tag} className="text-[10px] font-sans font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={c.href as any}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-800 hover:text-blue-600 transition-colors group/link mt-2"
                    >
                      <span>Explore Operations</span>
                      <ExternalLink className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(56,189,248,0.06),transparent_60%)] pointer-events-none" />
        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <div className="kicker text-sky-400">CEO Vision Statement</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl font-light leading-tight">
                Empowering India's next generation of tech & organic commerce.
              </h2>
              <blockquote className="mt-8 font-serif text-lg md:text-xl italic text-slate-300 font-light leading-relaxed border-l-4 border-sky-400 pl-6">
                “True progress lies in combining software innovation with grassroots livelihood. We build direct organic pathways for local growers and simultaneously incubation clusters that shape college students into world-class engineers.”
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 font-serif font-bold text-sm">FN</div>
                <div>
                  <h5 className="font-sans font-bold text-sm text-white">Farook N</h5>
                  <p className="text-slate-400 text-xs">Chairman, Arshith Group</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-6">
              {[
                { title: "Empowering Talent", desc: "Providing real projects and developer ecosystems to college students.", icon: GraduationCap },
                { title: "Digital India Integration", desc: "Deploying high-speed software interfaces in agrarian regions.", icon: Globe },
                { title: "Startup Acceleration", desc: "Incubating cross-vertical ideas with direct operational investment.", icon: Rocket },
                { title: "Quality Accessibility", desc: "Ensuring top-tier tech and pure organic foods are standard.", icon: ShieldCheck }
              ].map((v, i) => (
                <div key={i} className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/20 hover:border-sky-500/20 transition-all duration-300">
                  <div className="h-10 w-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                    <v.icon className="h-5 w-5 text-sky-400" />
                  </div>
                  <h4 className="font-sans font-bold text-sm text-white mb-2">{v.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-light">{v.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Technology Ecosystem (Interactive Stack & SVGs) */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container-x">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5">
              <div className="kicker text-blue-600">Technical Foundation</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-[#0F172A] font-light leading-tight">
                Architecting modern <span className="italic font-medium text-blue-600">enterprise software</span>.
              </h2>
              <p className="mt-6 text-slate-600 font-light leading-relaxed">
                Farook's core competency is designing robust distributed applications, utilizing high-availability databases, automated build pipelines, and reactive frontend designs that drive user retention.
              </p>
              
              {/* Tech Stats */}
              <div className="mt-8 space-y-4">
                {techStack.slice(0, 4).map((tech, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs font-semibold font-sans mb-1 text-slate-700">
                      <span>{tech.name}</span>
                      <span>{tech.level}% Expertise</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-8 md:p-10 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-center">
                <h3 className="font-serif text-2xl text-[#0F172A] font-semibold mb-2">Interactive Ecosystem</h3>
                <p className="text-slate-500 text-xs mb-8">Floating nodes representing the integrated stack used at Arshith ventures.</p>
                
                {/* Floating Node simulation using Framer Motion */}
                <div className="relative h-[300px] w-full border border-dashed border-slate-200 rounded-xl overflow-hidden bg-white/60 flex items-center justify-center">
                  {[
                    { label: "React / Vite", x: "15%", y: "20%", delay: 0 },
                    { label: "Node.js", x: "75%", y: "25%", delay: 0.5 },
                    { label: "Java / Spring", x: "45%", y: "15%", delay: 0.2 },
                    { label: "PostgreSQL", x: "20%", y: "70%", delay: 0.7 },
                    { label: "Cloud Services", x: "70%", y: "70%", delay: 0.3 },
                    { label: "MySQL / REST", x: "48%", y: "80%", delay: 0.6 }
                  ].map((node, index) => (
                    <motion.div
                      key={index}
                      animate={{
                        y: [0, -10, 0],
                        x: [0, 5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: node.delay,
                        ease: "easeInOut"
                      }}
                      className="absolute p-3 rounded-lg bg-white border border-slate-100 shadow-sm font-sans font-semibold text-xs text-blue-600 flex items-center gap-2 cursor-pointer hover:border-blue-500/30 hover:shadow-md transition-shadow"
                      style={{ left: node.x, top: node.y }}
                    >
                      <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
                      <span>{node.label}</span>
                    </motion.div>
                  ))}
                  
                  {/* Central Node */}
                  <div className="absolute p-5 rounded-2xl bg-slate-900 border border-slate-800 text-white font-serif font-bold text-base shadow-lg z-10 flex flex-col items-center">
                    <Building className="h-6 w-6 text-sky-400 mb-1" />
                    <span>Arshith Ecosystem</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </section>

      {/* Interactive Growth Graph Section */}
      <section className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7">
              <div className="p-8 md:p-10 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-serif text-2xl text-[#0F172A] font-semibold">Interactive Growth Graph</h3>
                    <p className="text-slate-400 text-xs mt-0.5">Projected and active user scale (2022 - 2026)</p>
                  </div>
                  <TrendingUp className="h-6 w-6 text-blue-500" />
                </div>

                {/* Animated SVG Graph */}
                <div className="w-full aspect-[16/9] relative">
                  <svg className="w-full h-full" viewBox="0 0 500 250">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    
                    {/* Grid lines */}
                    <line x1="40" y1="20" x2="480" y2="20" stroke="#F1F5F9" strokeWidth="1" />
                    <line x1="40" y1="70" x2="480" y2="70" stroke="#F1F5F9" strokeWidth="1" />
                    <line x1="40" y1="120" x2="480" y2="120" stroke="#F1F5F9" strokeWidth="1" />
                    <line x1="40" y1="170" x2="480" y2="170" stroke="#F1F5F9" strokeWidth="1" />
                    <line x1="40" y1="220" x2="480" y2="220" stroke="#E2E8F0" strokeWidth="1" />

                    {/* Labels */}
                    <text x="35" y="224" textAnchor="end" className="text-[10px] fill-slate-400 font-sans">0</text>
                    <text x="35" y="174" textAnchor="end" className="text-[10px] fill-slate-400 font-sans">5K</text>
                    <text x="35" y="124" textAnchor="end" className="text-[10px] fill-slate-400 font-sans">15K</text>
                    <text x="35" y="74" textAnchor="end" className="text-[10px] fill-slate-400 font-sans">25K</text>
                    <text x="35" y="24" textAnchor="end" className="text-[10px] fill-slate-400 font-sans">35K</text>

                    <text x="60" y="240" textAnchor="middle" className="text-[10px] fill-slate-500 font-sans">2022</text>
                    <text x="160" y="240" textAnchor="middle" className="text-[10px] fill-slate-500 font-sans">2023</text>
                    <text x="260" y="240" textAnchor="middle" className="text-[10px] fill-slate-500 font-sans">2024</text>
                    <text x="360" y="240" textAnchor="middle" className="text-[10px] fill-slate-500 font-sans">2025</text>
                    <text x="460" y="240" textAnchor="middle" className="text-[10px] fill-slate-500 font-sans">2026</text>

                    {/* Filled Area under line */}
                    <motion.path
                      initial={{ d: "M 60 220 Q 160 220 260 220 T 460 220 L 460 220 L 60 220 Z" }}
                      animate={{ d: "M 60 210 L 160 180 L 260 140 L 360 85 L 460 30 L 460 220 L 60 220 Z" }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill="url(#chartGradient)"
                    />

                    {/* Chart Line */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      d="M 60 210 L 160 180 L 260 140 L 360 85 L 460 30"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* Data Points */}
                    <circle cx="60" cy="210" r="5" fill="#3B82F6" stroke="white" strokeWidth="2" />
                    <circle cx="160" cy="180" r="5" fill="#3B82F6" stroke="white" strokeWidth="2" />
                    <circle cx="260" cy="140" r="5" fill="#3B82F6" stroke="white" strokeWidth="2" />
                    <circle cx="360" cy="85" r="5" fill="#3B82F6" stroke="white" strokeWidth="2" />
                    <circle cx="460" cy="30" r="5.5" fill="#38BDF8" stroke="white" strokeWidth="2.5" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="kicker text-blue-600">Enterprise Metrics</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-[#0F172A] font-light leading-tight">
                Consistently <span className="italic font-medium text-blue-600">scaling</span> market reach.
              </h2>
              <p className="mt-6 text-slate-600 font-light leading-relaxed mb-6">
                By maintaining lean digital architectures and direct-to-consumer alignment, we have scaled our customer footprint from thousands to over 30,000 active buyers in multiple regions.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Direct Logistics Integration", value: "30K+ active consumer network" },
                  { title: "Highly Optimised Latency", value: "Sub-150ms average render API times" },
                  { title: "Continuous Pipeline Builds", value: "300+ builds processed monthly in dev clusters" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0" />
                    <div>
                      <h4 className="font-sans font-bold text-sm text-[#0F172A]">{item.title}</h4>
                      <p className="text-slate-500 text-xs mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CEO Timeline Section */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container-x">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="kicker text-blue-600">Career Progress</div>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl font-light text-[#0F172A]">Vision Timeline</h2>
            <p className="mt-4 text-slate-500 font-light text-sm md:text-base">
              A decade of technical engineering and organizational pivot.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Center Line for desktop */}
            <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-slate-200 hidden md:block" />

            <div className="space-y-12">
              {timelineData.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <div key={item.year} className={`flex flex-col md:flex-row items-center gap-8 relative ${isEven ? "" : "md:flex-row-reverse"}`}>
                    
                    {/* Left/Right content side */}
                    <div className="w-full md:w-1/2 flex justify-end md:justify-start px-4">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`p-6 rounded-xl bg-slate-50 border border-slate-100 relative w-full text-left cursor-pointer transition-shadow hover:shadow-md ${
                          activeTimelineYear === item.year ? "border-blue-500/40 ring-1 ring-blue-500/20" : ""
                        }`}
                        onClick={() => setActiveTimelineYear(item.year)}
                      >
                        <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full mb-3 font-sans">
                          {item.year}
                        </span>
                        <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-2">{item.title}</h3>
                        <p className="text-slate-500 text-sm font-light leading-relaxed">{item.description}</p>
                      </motion.div>
                    </div>

                    {/* Timeline Node (center point) */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-slate-900 border-4 border-white flex items-center justify-center text-white z-10 hidden md:flex">
                      <Icon className="h-4 w-4 text-sky-400" />
                    </div>

                    {/* Right/Left spacer side */}
                    <div className="w-full md:w-1/2 hidden md:block" />

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Career & Internships (Incubator focus) */}
      <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(59,130,246,0.1),transparent_60%)] pointer-events-none" />
        <div className="container-x relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="inline-flex h-12 w-12 rounded-full bg-blue-500/10 border border-blue-500/20 items-center justify-center text-blue-400 mb-6">
              <GraduationCap className="h-6 w-6" />
            </div>

            <h2 className="font-serif text-4xl md:text-6xl font-light mb-6">
              Empowering Student Developers & <span className="italic font-medium text-sky-400">Campus Ecosystems</span>
            </h2>
            
            <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              We collaborate with colleges and student developers to offer intensive technical internship opportunities. Under Farook N's direct mentorship, interns build real-world microservices, e-commerce integrations, and database clusters.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto mb-12">
              {[
                { title: "Real Production Code", desc: "No mock systems. Write code that serves active clients and platforms." },
                { title: "Mentorship & Reviews", desc: "Gain professional code review feedback, structure training, and scale practices." },
                { title: "Industry Placements", desc: "Transition from internships into high-tier software engineering careers." }
              ].map((point, index) => (
                <div key={index} className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/20">
                  <CheckCircle2 className="h-5 w-5 text-sky-400 mb-3" />
                  <h4 className="font-sans font-bold text-sm text-white mb-1">{point.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-light">{point.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-md bg-blue-600 hover:bg-blue-500 font-sans text-sm font-semibold text-white shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 group"
            >
              <span>Join Our Innovation Journey</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>
        </div>
      </section>

      {/* Realistic Achievements Section */}
      <section className="py-24 bg-white relative">
        <div className="container-x">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="kicker text-blue-600">Track Record</div>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl font-light text-[#0F172A]">Key Professional Milestones</h2>
            <p className="mt-4 text-slate-500 font-light text-sm md:text-base">
              Key accomplishments demonstrating corporate vision and developer incubation initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Startup Incubation Network",
                desc: "Designed specialized internship curricula and campus modules that incubated over 500 tech aspirants, creating structured pathways to enterprise placements.",
                badge: "Empowerment"
              },
              {
                title: "Grassroots Digital Pipelines",
                desc: "Orchestrated Arshith Fresh India's e-commerce supply chains, introducing direct delivery models that connect regional organic growers directly to urban customer clusters.",
                badge: "Innovation"
              },
              {
                title: "Scale Cloud Architectures",
                desc: "Spearheaded custom ERP systems and data engineering pipelines at Suntech Solutions, handling high-volume transaction records with 99.9% availability standards.",
                badge: "Strategy"
              }
            ].map((ach, index) => (
              <div key={index} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm relative group hover:bg-white hover:shadow-lg transition-all duration-300">
                <span className="absolute top-8 right-8 text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider font-sans">
                  {ach.badge}
                </span>
                <Award className="h-8 w-8 text-blue-500 mb-6" />
                <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-3">{ach.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{ach.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100 relative">
        <div className="container-x">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="kicker text-blue-600">Leadership Credibility</div>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl font-light text-[#0F172A]">Ecosystem Testimonials</h2>
            <p className="mt-4 text-slate-500 font-light text-sm md:text-base">
              What partners, team members, and incubated interns say about Farook N's corporate direction.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative px-8">
            <div className="relative overflow-hidden min-h-[220px] flex items-center justify-center p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <MessageSquare className="h-8 w-8 text-blue-500/25 mx-auto mb-6" />
                  <p className="font-serif text-lg md:text-xl italic text-slate-700 leading-relaxed font-light mb-6">
                    “{testimonials[testimonialIndex].quote}”
                  </p>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-[#0F172A]">{testimonials[testimonialIndex].author}</h4>
                    <p className="text-slate-500 text-xs mt-0.5">{testimonials[testimonialIndex].role}</p>
                    <span className="inline-block mt-3 text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-sans uppercase tracking-wider">
                      {testimonials[testimonialIndex].category}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={handlePrevTestimonial}
                className="h-10 w-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-750 hover:bg-slate-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNextTestimonial}
                className="h-10 w-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-750 hover:bg-slate-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Professional News/Blog Section */}
      <section className="py-24 bg-white relative">
        <div className="container-x">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="kicker text-blue-600">Thought Leadership</div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[#0F172A] font-light">Insights & Publications</h2>
              <p className="mt-4 text-slate-500 max-w-xl font-light text-sm md:text-base">
                Explore essays and commentary authored by Farook N regarding e-commerce scale, incubator engineering, and cloud workflows.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <div key={index} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-sans mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
                    {post.summary}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 hover:text-blue-500 transition-colors"
                >
                  <span>Request Full Copy</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.1),transparent_60%)] pointer-events-none" />
        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
            
            {/* Contact Info */}
            <div className="lg:col-span-5">
              <div className="kicker text-sky-400">Collaborations</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl font-light leading-tight">
                Initiate a professional inquiry.
              </h2>
              <p className="mt-6 text-slate-300 font-light leading-relaxed mb-8">
                Farook N is open to dialog regarding technology architecture consulting, student developers incubation partnerships, e-commerce networks expansion, or executive business inquiries.
              </p>

              <div className="space-y-4 font-sans text-sm font-light text-slate-300">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-sky-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Corporate Email</p>
                    <a href="mailto:farook@arshithgroup.com" className="hover:text-white transition-colors">farook@arshithgroup.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-sky-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Headquarters</p>
                    <p>Arshith Group Corporate Hub, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-sky-400">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">LinkedIn</p>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">linkedin.com/in/farook-n</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 md:p-10 rounded-2xl bg-slate-850 border border-slate-700/30 backdrop-blur-md">
                
                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-8"
                    >
                      <div className="h-14 w-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-6">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="font-serif text-2xl text-white font-semibold mb-2">Inquiry Transmitted</h3>
                      <p className="text-slate-300 font-light text-sm max-w-sm mx-auto">
                        Thank you for reaching out. Farook N's executive office will review your inquiry and connect with you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleContactSubmit}
                      className="space-y-6 text-left"
                    >
                      <h3 className="font-serif text-2xl text-white font-semibold mb-2">Business Contact Form</h3>
                      <p className="text-slate-400 text-xs mb-6">Required fields are marked with an asterisk (*).</p>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          required
                          className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-slate-300 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option value="incubation">Student Incubation / Internship Partnership</option>
                          <option value="commerce">E-commerce / Agrarian Logistics Partnership</option>
                          <option value="tech">Software Development / Enterprise Consultations</option>
                          <option value="other">General Leadership Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Your Message *
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Describe the nature of your inquiry in detail..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-sans text-sm font-semibold transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/10"
                      >
                        <Send className="h-4 w-4" />
                        <span>Send Executive Message</span>
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mini Footer Founder Message */}
      <section className="py-12 bg-slate-950 border-t border-slate-900 text-center text-slate-400 text-xs relative z-10">
        <div className="container-x">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <p className="font-sans font-light">
              © {new Date().getFullYear()} Arshith Group. Designed for vision & digital progress.
            </p>
            <div className="flex gap-4">
              <Link to="/about" className="hover:text-white transition-colors">About Group</Link>
              <Link to="/leadership" className="hover:text-white transition-colors">Executive Team</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Global Offices</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
