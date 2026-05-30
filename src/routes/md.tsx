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
  Heart,
  UserCheck,
  Star
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import mdImage from "@/assets/MD.jpeg";

export const Route = createFileRoute("/md")({
  head: () => ({
    meta: [
      { title: "Pallavi N | Managing Director | Arshith Group" },
      {
        name: "description",
        content:
          "Executive portfolio and corporate vision of Pallavi N, Managing Director of Arshith Group and Arshith Fresh India Pvt Ltd. Leading operational excellence and student technical incubation.",
      },
      { property: "og:title", content: "Pallavi N | Managing Director" },
      { property: "og:image", content: mdImage },
    ],
  }),
  component: MDProfilePage,
});

// Canvas Particle Background for MD (Luxury Purple / Pink aesthetics)
function LuxuryParticleBackground() {
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
      color: string;
    }> = [];

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const colors = [
      "rgba(139, 92, 246, ", // Purple Accent
      "rgba(236, 72, 153, ", // Pink Highlight
      "rgba(168, 85, 247, "  // Violet
    ];

    // Initialize particles
    const particleCount = Math.min(50, Math.floor(canvas.width / 30));
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 1,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.35,
        opacity: Math.random() * 0.35 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
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
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.fill();
      });

      // Draw subtle connecting lines
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.06;
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
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

// Simple counter component
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

function MDProfilePage() {
  const [activeTab, setActiveTab] = useState<"all" | "tech" | "commerce" | "group">("all");
  const [activeTimelineYear, setActiveTimelineYear] = useState<number>(2026);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const timelineData = [
    {
      year: 2026,
      title: "Cross-Vertical Integration",
      description: "Leading operations and structural scaling across e-commerce networks, developer consulting houses, and green tech initiatives.",
      icon: Award
    },
    {
      year: 2024,
      title: "Co-founding Arshith Fresh India",
      description: "Designed operational framework and supply chain infrastructure, helping build direct organic farm-to-table consumer marketplaces.",
      icon: Globe
    },
    {
      year: 2022,
      title: "Campus Drives & Student Incubator",
      description: "Established strategic academic collaborations with prestigious institutions to provide high-quality developer training.",
      icon: GraduationCap
    },
    {
      year: 2019,
      title: "Operations Blueprint at Suntech",
      description: "Assumed structural leadership at Suntech Solutions, engineering internal workflows and internship program pipelines.",
      icon: Building
    }
  ];

  const testimonials = [
    {
      quote: "Pallavi N. combines outstanding organizational discipline with deep technical empathy. Her mentorship during recruitment drives and student incubations has reshaped our careers.",
      author: "Nandini Krishnan",
      role: "Operations Manager, Arshith Group",
      category: "Team Member"
    },
    {
      quote: "Under Pallavi Mam's guidance, I transition from a campus recruit into a confident frontend engineer. She builds structures that reward ambition and focus on real engineering standards.",
      author: "Sai Kumar",
      role: "Associate UI Engineer",
      category: "Developer"
    },
    {
      quote: "Her operational direction was crucial in onboarding regional growers to Arshith Fresh. She values transparent communication and builds robust digital commerce networks.",
      author: "Vikram K.",
      role: "Vendor Onboarding Lead",
      category: "Business Partner"
    }
  ];

  const companies = [
    {
      id: "group",
      title: "Arshith Group",
      tagline: "Diversified Business Conglomerate",
      description: "The overarching corporate ecosystem catalyzing digital transformation, high-impact young talent incubator programs, web services, and tech-driven organic products.",
      techTags: ["Conglomerate", "Strategy", "Venture Building"],
      href: "/",
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
      accentColor: "#8B5CF6",
      category: "group"
    },
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
    }
  ];

  const techStack = [
    { name: "React.js / Frontend", category: "Frontend Design", level: 90 },
    { name: "Node.js", category: "Backend Services", level: 85 },
    { name: "Java / Spring", category: "Enterprise Scale", level: 80 },
    { name: "MySQL / PostgreSQL", category: "Database Schema", level: 88 },
    { name: "Cloud Tech / AWS", category: "Infrastructure", level: 80 },
    { name: "REST APIs Integration", category: "Microservices", level: 90 },
    { name: "E-comm Tech Systems", category: "Retail Operations", level: 95 },
    { name: "Digital Transformation", category: "Org Structure", level: 95 }
  ];

  const academicPartners = [
    { name: "KL University", location: "Andhra Pradesh", desc: "Collaborating on engineering internship cohorts and advanced technical projects." },
    { name: "Nagarjuna College of Engineering", location: "Bengaluru", desc: "Joint incubation initiatives focused on enterprise web development." },
    { name: "Sreyas Institute of Engineering", location: "Hyderabad", desc: "Campus hiring drives targeting enthusiastic full-stack talent." }
  ];

  const achievements = [
    {
      title: "Incubating Thriving Talent Clusters",
      desc: "Architected modern developer incubation environments, providing over 500 college graduates with intensive corporate skill training.",
      badge: "Empowerment"
    },
    {
      title: "Agrarian Commerce Streamlining",
      desc: "Co-engineered Arshith Fresh's digital retail logistic nodes, eliminating farm-to-table middleware and driving partner profitability.",
      badge: "Innovation"
    },
    {
      title: "Women Technical Leadership",
      desc: "Pioneering inspiring frameworks for young female technologists, hosting technical symposiums, and promoting diverse corporate structures.",
      badge: "Inspiration"
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
      <div className="min-h-screen bg-[#111827] flex flex-col items-center justify-center text-white">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="h-12 w-12 border-4 border-purple-500 border-t-transparent rounded-full mb-4"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="font-sans tracking-widest uppercase text-xs text-purple-400 font-medium"
        >
          Loading MD Portfolio...
        </motion.p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F9FAFB] text-[#111827] overflow-x-hidden selection:bg-purple-500 selection:text-white relative">
      <Nav forceSolid />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 bg-[#111827] text-white overflow-hidden flex items-center min-h-[90vh]">
        <LuxuryParticleBackground />
        
        {/* Ambient luxury orbs */}
        <div className="absolute top-1/4 left-1/10 h-80 w-80 rounded-full bg-purple-500/10 blur-[100px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/10 h-96 w-96 rounded-full bg-pink-500/10 blur-[120px] pointer-events-none" />

        <div className="container-x w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-widest mb-6 w-fit"
              >
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                <span>Executive Director Portfolio</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-4"
              >
                Pallavi N
              </motion.h1>

              {/* Sub-titles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex flex-col gap-2.5 mb-6 text-slate-300 font-sans font-light"
              >
                <div className="flex items-center gap-3">
                  <Building className="h-4.5 w-4.5 text-purple-400 shrink-0" />
                  <span className="text-base md:text-lg">
                    Managing Director at <span className="font-semibold text-white">Arshith Group</span>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-4.5 w-4.5 text-pink-400 shrink-0" />
                  <span className="text-base md:text-lg">
                    Managing Director at <span className="font-semibold text-white">Arshith Fresh India Pvt Ltd</span>
                  </span>
                </div>
              </motion.div>

              {/* Animated Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="font-serif text-2xl md:text-3xl font-light italic text-purple-300 mb-8 max-w-xl border-l-2 border-purple-400/30 pl-4 py-1"
              >
                “Empowering Innovation, Leadership & Digital Transformation”
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-slate-400 text-sm md:text-base font-light max-w-lg mb-8 leading-relaxed"
              >
                Visionary business leader focused on technology, entrepreneurship, startup growth, digital transformation, and empowering future talent.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="px-8 py-3.5 rounded-md bg-purple-600 hover:bg-purple-500 font-sans text-sm font-medium text-white shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>Connect With Pallavi</span>
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
                  className="p-3.5 rounded-md bg-slate-850 hover:bg-purple-650/10 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4.5 w-4.5 text-purple-400 hover:text-white transition-colors" />
                </a>
              </motion.div>
            </div>

            {/* Hero Right MD Image */}
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative w-full max-w-[420px] aspect-[4/5] overflow-hidden rounded-2xl border border-slate-700/50 shadow-2xl group bg-gradient-to-b from-slate-850 to-slate-950"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-transparent to-transparent z-10" />
                
                {/* Accent glow behind image */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-purple-500 to-pink-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-700" />
                
                <img
                  src={mdImage}
                  alt="Pallavi N - Managing Director"
                  className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                />

                {/* Subtitle badge in bottom overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-25 p-4 rounded-xl bg-slate-900/80 border border-slate-700/40 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-serif text-lg font-semibold">Pallavi N</h3>
                    <p className="text-slate-400 text-xs tracking-wider uppercase mt-0.5">Managing Director</p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                    <Heart className="h-4 w-4 text-pink-400 animate-pulse" />
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
              <div className="kicker text-purple-600">Executive Leadership</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-[#111827] font-light leading-tight">
                Structuring <span className="italic font-medium text-purple-600">organizational growth</span> and operations.
              </h2>
              <p className="mt-6 text-slate-600 font-light leading-relaxed">
                Pallavi N brings operational strategy and structural discipline to Arshith Group. Initiating her trajectory within Suntech Solutions, she set the blueprint for scalable company systems, talent incubators, and direct e-commerce logistics.
              </p>

              {/* Quick tags */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { title: "7+ Years Experience", desc: "Corporate scaling expert" },
                  { title: "E-commerce Architect", desc: "Farm-to-customer logistics" },
                  { title: "Empowering Director", desc: "Technical student mentors" },
                  { title: "Operation Strategist", desc: "Structuring 3 sister firms" }
                ].map((item, index) => (
                  <div key={index} className="p-4 rounded-lg bg-[#F9FAFB] border border-slate-100">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mb-2" />
                    <h4 className="font-sans font-semibold text-sm text-[#111827]">{item.title}</h4>
                    <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Story */}
            <div className="lg:col-span-7">
              <div className="p-8 md:p-10 rounded-2xl bg-[#F9FAFB] border border-slate-100 relative">
                <div className="absolute top-6 right-6 font-serif text-6xl text-slate-200 pointer-events-none font-bold">“</div>
                
                <h3 className="font-serif text-2xl text-[#111827] font-semibold mb-6">The Operations Strategy Story</h3>
                
                <div className="space-y-6 text-slate-600 font-light text-base leading-relaxed">
                  <p>
                    Effective organizations are built when ambition matches structural discipline. My leadership philosophy is centered around creating clean systems that reward hard work, empower young developers, and let great people do their best work.
                  </p>
                  <p>
                    Since launching our early technology operations at <strong className="text-[#111827] font-medium">Suntech Solutions</strong>, we prioritized quality above templates. This technical discipline set the standard for our rapid expansion. Today, under <strong className="text-[#111827] font-medium">Arshith Group</strong>, we manage diverse sectors spanning software consultation, digital marketplaces, organic logistics, and environmental sustainability.
                  </p>
                  <p>
                    One of my primary focuses is bridging the gap between college curricula and real corporate environments. By establishing active partnerships with institutes like <strong className="text-[#111827] font-medium">KL University</strong> and <strong className="text-[#111827] font-medium">Nagarjuna College</strong>, we host hiring drives and structure intensive developer incubation pipelines. We don't just train; we provide young engineers with access to production systems.
                  </p>
                  <p>
                    At Arshith Fresh India, our goal is clear: utilize tech-driven direct channels to onboarding regional organic growers and provide healthy, pure food products to thousands of urban households. We build trust by creating transparent and scalable business structures.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full bg-purple-500 flex items-center justify-center text-white font-serif font-bold text-lg">P</div>
                  <div>
                    <h5 className="font-sans font-bold text-sm text-[#111827]">Pallavi N</h5>
                    <p className="text-slate-500 text-xs">Managing Director, Arshith Group</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Leadership Highlights (Stats Cards) */}
      <section className="py-20 bg-[#111827] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08),transparent_70%)] pointer-events-none" />
        <div className="container-x relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="kicker text-purple-400">Impact Indicators</div>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl font-light">Leadership Highlights</h2>
            <p className="mt-4 text-slate-400 font-light text-sm md:text-base">
              The operational milestones of our tech incubation and e-commerce logistics.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
            {[
              { label: "Years Experience", value: "7+", sub: "Corporate strategy", icon: Award },
              { label: "Active Customers", value: "30K+", sub: "Grassroots e-comm", icon: Users },
              { label: "Incubated Interns", value: "500+", sub: "Technical modules", icon: GraduationCap },
              { label: "Campus Drives", value: "12+", sub: "Talent collaborations", icon: UserCheck },
              { label: "Corporate Ventures", value: "3+", sub: "Synergetic startups", icon: Building },
              { label: "Operational Growth", value: "180%", sub: "Year-on-year scaling", icon: TrendingUp }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/30 backdrop-blur-md hover:border-purple-500/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="h-10 w-10 rounded-lg bg-slate-750 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <stat.icon className="h-5 w-5 text-purple-400" />
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
      <section id="companies" className="py-24 md:py-32 bg-[#F9FAFB] relative">
        <div className="container-x">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="kicker text-purple-600">Enterprise Ecosystem</div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[#111827] font-light">Ecosystem & Ventures</h2>
              <p className="mt-4 text-slate-600 max-w-xl font-light text-sm md:text-base">
                Pallavi N coordinates the operational systems of three major enterprises, enabling structural alignment and rapid digital expansion.
              </p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex gap-2 mt-6 md:mt-0 p-1.5 rounded-lg bg-slate-100 border border-slate-200/60 w-fit shrink-0">
              {[
                { id: "all", label: "All Ventures" },
                { id: "tech", label: "Technology" },
                { id: "commerce", label: "Commerce" },
                { id: "group", label: "Ecosystem" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 text-xs font-semibold rounded-md transition-all duration-300 font-sans ${
                    activeTab === tab.id
                      ? "bg-white text-purple-600 shadow-sm"
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
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-800 group-hover:bg-purple-500/10 group-hover:text-purple-600 transition-colors border border-slate-100">
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

                    <h3 className="font-serif text-2xl text-[#111827] font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-purple-500 font-sans font-medium text-xs tracking-wide uppercase mb-4">
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
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-800 hover:text-purple-600 transition-colors group/link mt-2"
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

      {/* Vision & Leadership Section */}
      <section className="py-24 md:py-32 bg-[#111827] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(236,72,153,0.06),transparent_60%)] pointer-events-none" />
        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <div className="kicker text-pink-400">Leadership & Vision</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl font-light leading-tight animate-pulse">
                Inspiring women technical leadership.
              </h2>
              <blockquote className="mt-8 font-serif text-lg md:text-xl italic text-slate-300 font-light leading-relaxed border-l-4 border-pink-450 pl-6">
                “Success is built through vision, innovation, trust, and empowering people. By structuring lean organizational blueprints, we let great developers build great solutions.”
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-serif font-bold text-sm">PN</div>
                <div>
                  <h5 className="font-sans font-bold text-sm text-white">Pallavi N</h5>
                  <p className="text-slate-400 text-xs">Managing Director, Arshith Group</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-6">
              {[
                { title: "Empowering Students", desc: "Setting technical internship pipelines in leading regional colleges.", icon: GraduationCap },
                { title: "Women in Tech Focus", desc: "Fostering inclusive, high-potential dev environments.", icon: Heart },
                { title: "Structural Scaling", desc: "Standardizing internal pipelines to allow developers to deploy quickly.", icon: Layers },
                { title: "Trust & Quality", desc: "Delivering reliable organic e-commerce and high-availability code.", icon: Award }
              ].map((v, i) => (
                <div key={i} className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/20 hover:border-purple-500/20 transition-all duration-300">
                  <div className="h-10 w-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                    <v.icon className="h-5 w-5 text-purple-400" />
                  </div>
                  <h4 className="font-sans font-bold text-sm text-white mb-2">{v.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-light">{v.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Technology & Innovation Section */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container-x">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5">
              <div className="kicker text-purple-600">Technical Frameworks</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-[#111827] font-light leading-tight">
                Architecting digital <span className="italic font-medium text-purple-600">operations</span>.
              </h2>
              <p className="mt-6 text-slate-600 font-light leading-relaxed">
                We maintain active deployment standards using React.js, Node.js, Spring, and modern cloud databases, ensuring our web properties and commerce portals run with high performance.
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
                        className="h-full bg-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-8 md:p-10 rounded-2xl bg-[#F9FAFB] border border-slate-100 flex flex-col justify-center">
                <h3 className="font-serif text-2xl text-[#111827] font-semibold mb-2">Interactive Ecosystem</h3>
                <p className="text-slate-500 text-xs mb-8">Integrated systems managed under Pallavi's corporate direction.</p>
                
                {/* Floating Node simulation */}
                <div className="relative h-[300px] w-full border border-dashed border-slate-200 rounded-xl overflow-hidden bg-white/60 flex items-center justify-center">
                  {[
                    { label: "React.js", x: "10%", y: "25%", delay: 0.1 },
                    { label: "Node.js", x: "70%", y: "20%", delay: 0.4 },
                    { label: "Java / SQL", x: "42%", y: "10%", delay: 0.3 },
                    { label: "E-comm Systems", x: "15%", y: "70%", delay: 0.8 },
                    { label: "Cloud Tech", x: "75%", y: "68%", delay: 0.2 },
                    { label: "REST APIs", x: "45%", y: "78%", delay: 0.5 }
                  ].map((node, index) => (
                    <motion.div
                      key={index}
                      animate={{
                        y: [0, -10, 0],
                        x: [0, 6, 0]
                      }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        delay: node.delay,
                        ease: "easeInOut"
                      }}
                      className="absolute p-3 rounded-lg bg-white border border-slate-100 shadow-sm font-sans font-semibold text-xs text-purple-600 flex items-center gap-2 cursor-pointer hover:border-purple-500/30 hover:shadow-md transition-shadow"
                      style={{ left: node.x, top: node.y }}
                    >
                      <span className="h-2 w-2 rounded-full bg-purple-500 animate-ping" />
                      <span>{node.label}</span>
                    </motion.div>
                  ))}
                  
                  {/* Central Node */}
                  <div className="absolute p-5 rounded-2xl bg-[#111827] border border-slate-800 text-white font-serif font-bold text-base shadow-lg z-10 flex flex-col items-center">
                    <Building className="h-6 w-6 text-purple-400 mb-1" />
                    <span>MD Operational Hub</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </section>

      {/* Campus Hiring & Internships (Colleges List) */}
      <section className="py-24 bg-[#111827] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(139,92,246,0.1),transparent_60%)] pointer-events-none" />
        <div className="container-x relative z-10">
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex h-12 w-12 rounded-full bg-purple-500/10 border border-purple-500/20 items-center justify-center text-purple-400 mb-6">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-light mb-6">
              Bridging College to <span className="italic font-medium text-pink-400">Enterprise Engineering</span>
            </h2>
            <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Under Pallavi N's direct operations blueprint, we host structured developer campus recruitments and intensive full-stack internship models.
            </p>
          </div>

          {/* Academic Collaborations */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {academicPartners.map((c, index) => (
              <div key={index} className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/20 flex flex-col justify-between text-left">
                <div>
                  <span className="inline-block text-[10px] font-bold text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2.5 py-1 rounded-full mb-4 uppercase tracking-widest font-sans">
                    Academic Partner
                  </span>
                  <h3 className="font-serif text-2xl text-white font-bold mb-1">{c.name}</h3>
                  <p className="text-slate-400 text-xs flex items-center gap-1.5 mb-4">
                    <MapPin className="h-3.5 w-3.5 text-purple-400" />
                    {c.location}
                  </p>
                  <p className="text-slate-350 text-sm font-light leading-relaxed">
                    {c.desc}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-purple-400 group cursor-pointer">
                  <span>Explore Recruits</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-md bg-purple-600 hover:bg-purple-500 font-sans text-sm font-semibold text-white shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 group"
            >
              <span>Join Our Innovation Journey</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-24 bg-white relative">
        <div className="container-x">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="kicker text-purple-600">Track Record</div>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl font-light text-[#111827]">Key Milestones</h2>
            <p className="mt-4 text-slate-500 font-light text-sm md:text-base">
              Accomplishments showing operational strategy, business expansion, and campus incubation creation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {achievements.map((ach, index) => (
              <div key={index} className="p-8 rounded-2xl bg-[#F9FAFB] border border-slate-100 shadow-sm relative group hover:bg-white hover:shadow-lg transition-all duration-300">
                <span className="absolute top-8 right-8 text-[10px] font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full uppercase tracking-wider font-sans">
                  {ach.badge}
                </span>
                <Award className="h-8 w-8 text-purple-500 mb-6 animate-pulse" />
                <h3 className="font-serif text-xl font-bold text-[#111827] mb-3">{ach.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{ach.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Media & Company Growth Graph */}
      <section className="py-24 bg-[#F9FAFB] border-y border-slate-100">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7">
              <div className="p-8 md:p-10 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-serif text-2xl text-[#111827] font-semibold">Active Business Growth Chart</h3>
                    <p className="text-slate-400 text-xs mt-0.5">Projected and active user scale (2022 - 2026)</p>
                  </div>
                  <TrendingUp className="h-6 w-6 text-purple-500" />
                </div>

                {/* Animated SVG Graph */}
                <div className="w-full aspect-[16/9] relative">
                  <svg className="w-full h-full" viewBox="0 0 500 250">
                    <defs>
                      <linearGradient id="purpleChartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
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

                    {/* Filled Area */}
                    <motion.path
                      initial={{ d: "M 60 220 Q 160 220 260 220 T 460 220 L 460 220 L 60 220 Z" }}
                      animate={{ d: "M 60 215 L 160 185 L 260 145 L 360 82 L 460 28 L 460 220 L 60 220 Z" }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill="url(#purpleChartGradient)"
                    />

                    {/* Chart Line */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      d="M 60 215 L 160 185 L 260 145 L 360 82 L 460 28"
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* Points */}
                    <circle cx="60" cy="215" r="5" fill="#8B5CF6" stroke="white" strokeWidth="2" />
                    <circle cx="160" cy="185" r="5" fill="#8B5CF6" stroke="white" strokeWidth="2" />
                    <circle cx="260" cy="145" r="5" fill="#8B5CF6" stroke="white" strokeWidth="2" />
                    <circle cx="360" cy="82" r="5" fill="#8B5CF6" stroke="white" strokeWidth="2" />
                    <circle cx="460" cy="28" r="5.5" fill="#EC4899" stroke="white" strokeWidth="2.5" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="kicker text-purple-600">Scaling Operations</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-[#111827] font-light leading-tight">
                Consistently <span className="italic font-medium text-purple-600">scaling</span> market reach.
              </h2>
              <p className="mt-6 text-slate-600 font-light leading-relaxed mb-6">
                By implementing structural logistics pipelines and high-speed tech infrastructure, we expanded Arshith Group's active consumer ecosystem to 30,000 satisfied customers.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Direct Logistics integration", value: "30K+ active consumer network" },
                  { title: "Highly Optimised latency", value: "Sub-150ms average render API times" },
                  { title: "Continuous Pipeline builds", value: "300+ builds processed monthly in dev clusters" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 shrink-0" />
                    <div>
                      <h4 className="font-sans font-bold text-sm text-[#111827]">{item.title}</h4>
                      <p className="text-slate-500 text-xs mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-24 bg-[#F9FAFB] border-t border-slate-100 relative">
        <div className="container-x">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="kicker text-purple-600">Testimonials</div>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl font-light text-[#111827]">Ecosystem Testimonials</h2>
            <p className="mt-4 text-slate-500 font-light text-sm md:text-base">
              What team members, developers, and partners say about Pallavi's operations strategy.
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
                  <MessageSquare className="h-8 w-8 text-purple-500/25 mx-auto mb-6" />
                  <p className="font-serif text-lg md:text-xl italic text-slate-700 leading-relaxed font-light mb-6">
                    “{testimonials[testimonialIndex].quote}”
                  </p>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-[#111827]">{testimonials[testimonialIndex].author}</h4>
                    <p className="text-slate-500 text-xs mt-0.5">{testimonials[testimonialIndex].role}</p>
                    <span className="inline-block mt-3 text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded font-sans uppercase tracking-wider">
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#111827] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(139,92,246,0.1),transparent_60%)] pointer-events-none" />
        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
            
            {/* Contact Info */}
            <div className="lg:col-span-5">
              <div className="kicker text-pink-400">Collaborations</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl font-light leading-tight">
                Initiate a professional inquiry.
              </h2>
              <p className="mt-6 text-slate-300 font-light leading-relaxed mb-8">
                Pallavi N is open to dialog regarding operational strategy, student engineering incubations, campus drive alignments, or business venture scaling.
              </p>

              <div className="space-y-4 font-sans text-sm font-light text-slate-300">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-purple-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Corporate Email</p>
                    <a href="mailto:pallavi@arshithgroup.com" className="hover:text-white transition-colors">pallavi@arshithgroup.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-purple-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Corporate Head Office</p>
                    <p>Arshith Group Corporate Hub, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-purple-400">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">LinkedIn</p>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">linkedin.com/in/pallavi-n</a>
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
                        Thank you for reaching out. Pallavi N's office will review your inquiry and connect with you shortly.
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
                            className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
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
                            className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
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
                          className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-slate-300 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        >
                          <option value="campus">Campus Hiring / Recruitment Partnering</option>
                          <option value="internship">Student Incubation Programs</option>
                          <option value="operational">Operational & Logistics Partnerships</option>
                          <option value="general">General Leadership Inquiry</option>
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
                          className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                          placeholder="Describe the nature of your inquiry in detail..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded bg-purple-600 hover:bg-purple-500 text-white font-sans text-sm font-semibold transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-500/10"
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

      {/* Mini Footer */}
      <section className="py-12 bg-slate-950 border-t border-slate-900 text-center text-slate-400 text-xs relative z-10">
        <div className="container-x">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <p className="font-sans font-light">
              © {new Date().getFullYear()} Arshith Group. Structuring operational excellence.
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
