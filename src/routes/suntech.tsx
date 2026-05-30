import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Code,
  Laptop,
  Cloud,
  Cpu,
  Fingerprint,
  Users,
  GraduationCap,
  Sparkles,
  Zap,
  TrendingUp,
  Award,
  Globe,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  ArrowRight,
  Send,
  Mail,
  MapPin,
  Calendar,
  Layers,
  ChevronRight,
  ChevronLeft,
  Search,
  Database,
  Terminal,
  Activity,
  Maximize2
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import suntechImage from "@/assets/suntech.jpg";

export const Route = createFileRoute("/suntech")({
  head: () => ({
    meta: [
      { title: "Suntech Organization | Digital Transformation & Enterprise IT Services" },
      {
        name: "description",
        content:
          "Suntech Organization, part of Arshith Group, delivers cutting-edge software solutions, enterprise cloud infrastructure, technical staffing, AI automation, and premier student dev incubation.",
      },
      { property: "og:title", content: "Suntech Organization | Arshith Group" },
      { property: "og:image", content: suntechImage },
    ],
  }),
  component: SuntechPage,
});

// Canvas Particle and Tech Globe Background for Suntech
function TechGlobeBackground() {
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
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.35,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw active tech grid nodes
      ctx.strokeStyle = "rgba(37, 99, 235, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw floating code particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${p.opacity})`; // Cyan highlight
        ctx.fill();
      });

      // Connecting nodes
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.07;
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`; // Blue Accent
            ctx.lineWidth = 0.6;
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
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 25);
    
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

function SuntechPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "frontend" | "backend" | "database" | "cloud" | "tools">("all");
  const [activeIndustry, setActiveIndustry] = useState<number>(0);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  // Loading state
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Engineering scalable modern interfaces, robust server-side rendering architectures, and responsive SaaS applications.",
      bullets: ["React.js / Next.js Frameworks", "MERN Stack Architectures", "High-Availability Enterprise portals", "Custom SaaS Applications"],
      icon: Code,
      accent: "from-blue-500/10 to-indigo-500/10 border-blue-500/30"
    },
    {
      title: "Mobile App Development",
      description: "Creating highly intuitive native and cross-platform mobile products with smooth framer rendering rates.",
      bullets: ["iOS Native Swift Systems", "Android Native Kotlin Apps", "Cross-Platform Flutter Code", "React Native deployments"],
      icon: Laptop,
      accent: "from-cyan-500/10 to-blue-500/10 border-cyan-500/30"
    },
    {
      title: "Cloud & DevOps Solutions",
      description: "Providing secure automated cloud provisioning, containerized operations, and continuous pipeline deployments.",
      bullets: ["AWS & Microsoft Azure Cloud", "Docker Containerization", "Kubernetes cluster orchestration", "Automated CI/CD Jenkins Pipelines"],
      icon: Cloud,
      accent: "from-purple-500/10 to-pink-500/10 border-purple-500/30"
    },
    {
      title: "AI & Automation Services",
      description: "Delivering customized workflow automations, predictive database modules, and cognitive AI model integrations.",
      bullets: ["Custom OpenAI / LLM integrations", "Automated customer support chat systems", "Repetitive workflow automations", "Enterprise predictive analytics"],
      icon: Cpu,
      accent: "from-amber-500/10 to-orange-500/10 border-amber-500/30"
    },
    {
      title: "UI/UX Product Engineering",
      description: "Shaping advanced user interfaces with clear user experience flow, visual guidelines, and interactive dashboard mockups.",
      bullets: ["Premium Stripe-inspired layouts", "High-end corporate visual tokens", "Responsive usability optimizing", "Detailed dashboard mockups design"],
      icon: Layers,
      accent: "from-emerald-500/10 to-teal-500/10 border-emerald-500/30"
    },
    {
      title: "Staffing & Recruitment Solutions",
      description: "Supplying top-tier vetted developers, technical team extensions, and specialized staffing pools.",
      bullets: ["Remote technical team expansion", "Full-time expert developer placement", "Specialized tech talent sourcing", "Pre-evaluated skills assessments"],
      icon: Users,
      accent: "from-pink-500/10 to-rose-500/10 border-pink-500/30"
    },
    {
      title: "Internship & Talent Incubations",
      description: "Strategic partnerships offering rigorous real-world production training modules to young software engineering graduates.",
      bullets: ["Complex backend API tasks", "Structured codebase reviews", "Transition to expert placements", "Campus hiring driven modules"],
      icon: GraduationCap,
      accent: "from-teal-500/10 to-sky-500/10 border-teal-500/30"
    }
  ];

  const technologies = [
    { name: "React", category: "frontend", icon: "⚛️" },
    { name: "Next.js", category: "frontend", icon: "🌐" },
    { name: "Angular", category: "frontend", icon: "🅰️" },
    { name: "Tailwind CSS", category: "frontend", icon: "🎨" },
    { name: "Node.js", category: "backend", icon: "🟢" },
    { name: "Express.js", category: "backend", icon: "🚂" },
    { name: "Java", category: "backend", icon: "☕" },
    { name: "Spring Boot", category: "backend", icon: "🍃" },
    { name: "Python", category: "backend", icon: "🐍" },
    { name: "MySQL", category: "database", icon: "🐬" },
    { name: "MongoDB", category: "database", icon: "🍃" },
    { name: "PostgreSQL", category: "database", icon: "🐘" },
    { name: "AWS Cloud", category: "cloud", icon: "☁️" },
    { name: "Firebase", category: "cloud", icon: "🔥" },
    { name: "Azure Cloud", category: "cloud", icon: "☁️" },
    { name: "GitHub Docs", category: "tools", icon: "🐙" },
    { name: "Docker Dev", category: "tools", icon: "🐳" },
    { name: "Postman API", category: "tools", icon: "📮" },
    { name: "Jenkins CI", category: "tools", icon: "🏗️" }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Legacy Assessment & Audit",
      description: "Reviewing existing codebase bottlenecks, legacy systems latency records, and cloud optimization capacities."
    },
    {
      step: "02",
      title: "Process Digitization Blueprinting",
      description: "Designing the cloud-native, microservice-driven roadmap complete with CI/CD specifications."
    },
    {
      step: "03",
      title: "AI Integration & Automation",
      description: "Injecting predictive algorithms, workflow bots, and LLM integrations directly into core operational loops."
    },
    {
      step: "04",
      title: "Modern Cloud Deployments",
      description: "Migrating data warehouses to secure AWS environments, running automated tests, and launching at 99.9% uptime SLA."
    }
  ];

  const caseStudies = [
    {
      title: "Enterprise Multi-Vendor E-Commerce Platform",
      client: "Arshith Fresh India Pvt Ltd",
      outcomes: "Eliminated wholesale middle layers, scaling deliveries to 30,000+ satisfied customers.",
      metrics: "Sub-180ms page render API latencies, 150% YoY sales growth support.",
      techTags: ["React.js", "Node.js", "PostgreSQL", "AWS Cloud"],
      mockupCode: "D2C Logistics Engine"
    },
    {
      title: "AI-Powered Technical Recruitment Portal",
      client: "Suntech Staffing Services",
      outcomes: "Accelerated skills evaluation filters for remote developers team expansions.",
      metrics: "40% reduction in average recruitment onboarding timelines.",
      techTags: ["Next.js", "Python AI Models", "MongoDB", "Docker"],
      mockupCode: "Candidate Auto-Matcher"
    },
    {
      title: "High-Availability Business ERP System",
      client: "Arshith Group Ventures",
      outcomes: "Integrated internal accounting pipelines, sustainability monitoring data, and cross-vertical workflows.",
      metrics: "99.95% active system uptime maintained across regional headquarters.",
      techTags: ["Spring Boot", "MySQL", "AWS RDS", "Jenkins"],
      mockupCode: "Group Resource Console"
    }
  ];

  const industries = [
    { name: "Digital E-Commerce", desc: "Empowering secure merchant payment loops and agrarian e-commerce operations.", icon: Globe },
    { name: "Healthcare Systems", desc: "Setting secure patient record structures under compliance-certified cloud storage.", icon: Fingerprint },
    { name: "Modern Retail Hubs", desc: "Digitizing inventory flow records and regional supply-chain operations.", icon: Layers },
    { name: "Advanced EdTech", desc: "Collaborative portal integrations bridging developer modules directly to top colleges.", icon: GraduationCap },
    { name: "FinTech & Banking", desc: "Building secure, low-latency transaction nodes and microservices systems.", icon: Activity },
    { name: "Modern Logistics", desc: "Optimizing supply chain routing, automated dispatching systems, and real-time vendor GPS tracking.", icon: TrendingUp }
  ];

  const testimonials = [
    {
      quote: "Suntech Organization redesigned our whole digital retail pipeline. The technical foundation they built allowed Arshith Fresh to scale to over 30,000 active clients without any architectural failures.",
      author: "Aditya Sharma",
      role: "Lead Software Architect, Arshith Fresh India",
      category: "Client Partner"
    },
    {
      quote: "As a student recruit during campus drives, I was mentored by Suntech's expert lead engineers. Working on real-world Spring Boot systems helped me secure a full-time position.",
      author: "Pooja Hegde",
      role: "Junior Full-Stack Engineer",
      category: "Incubated Intern"
    },
    {
      quote: "Suntech's developer staffing services supplied us with highly vetted remote developers who merged perfectly into our active AWS deployment pipelines within 48 hours.",
      author: "Rajesh K.",
      role: "VP of Engineering, Finance Partner",
      category: "Staffing Client"
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

  const filteredTech = technologies.filter(
    (tech) => activeCategory === "all" || tech.category === activeCategory
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-white">
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
          Initializing Suntech Module...
        </motion.p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white relative">
      <Nav forceSolid />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 bg-[#020617] text-white overflow-hidden flex items-center min-h-[95vh]">
        <TechGlobeBackground />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/10 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/10 h-96 w-96 rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none" />

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
                <span>Enterprise Technology Solutions</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-6"
              >
                Suntech Organization
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-serif text-2xl md:text-3xl font-light italic text-cyan-400 mb-6 max-w-xl border-l-2 border-cyan-400/30 pl-4 py-1"
              >
                “Transforming Businesses Through Technology & Innovation”
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-slate-350 text-sm md:text-base font-light max-w-xl mb-10 leading-relaxed"
              >
                Suntech Organization delivers cutting-edge software solutions, digital transformation services, enterprise applications, cloud infrastructure, staffing solutions, and next-generation IT consulting.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#services"
                  className="px-8 py-3.5 rounded-md bg-blue-600 hover:bg-blue-500 font-sans text-sm font-medium text-white shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#staffing"
                  className="px-8 py-3.5 rounded-md bg-slate-800/85 hover:bg-slate-700 font-sans text-sm font-medium text-white border border-slate-700/50 backdrop-blur-md transition-all duration-300"
                >
                  Hire Developers
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3.5 rounded-md bg-slate-900/60 hover:bg-slate-800/80 font-sans text-sm font-medium text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300"
                >
                  Start Project
                </a>
                <a
                  href="#careers"
                  className="px-8 py-3.5 rounded-md bg-transparent hover:bg-blue-650/10 font-sans text-sm font-medium text-slate-300 hover:text-white transition-all duration-300"
                >
                  Join Internship
                </a>
              </motion.div>
            </div>

            {/* Hero Right Dashboard Preview */}
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-[480px] p-6 rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl backdrop-blur-md"
              >
                {/* Dashboard Header Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-500" />
                    <span className="h-3 w-3 rounded-full bg-amber-500" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono ml-2">suntech-build-console v2.4</span>
                  </div>
                  <Terminal className="h-4.5 w-4.5 text-cyan-400 animate-pulse" />
                </div>

                {/* Dashboard contents */}
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-slate-950 border border-slate-800/50 flex items-center justify-between">
                    <div>
                      <p className="text-slate-500 text-[10px] uppercase font-semibold">Active Cloud Node</p>
                      <h4 className="text-white text-sm font-bold mt-0.5">aws-cluster-east-1</h4>
                    </div>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                  </div>

                  <div className="p-4 rounded-lg bg-slate-950 border border-slate-800/50">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-slate-500 text-[10px] uppercase font-semibold">API Gateway Throughput</p>
                      <span className="text-cyan-400 text-[10px] font-mono">99.98% Healthy</span>
                    </div>
                    <div className="h-12 flex items-end gap-1 px-1">
                      {[30, 45, 35, 60, 50, 75, 40, 65, 80, 55, 70, 85].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: i * 0.05 }}
                          className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Micro Terminal logs */}
                  <div className="p-3.5 rounded bg-black/60 border border-slate-850 font-mono text-[10px] text-slate-400 space-y-1">
                    <p className="text-emerald-400">$ suntech-deploy --prod</p>
                    <p className="text-slate-400">✓ Bundled client routes in 1.4s</p>
                    <p className="text-slate-400">✓ Synced cluster container tags [healthy]</p>
                    <p className="text-cyan-400">🚀 Server listening on port 8080</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-white relative">
        <div className="container-x relative">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="kicker text-blue-600">Enterprise Technology Company</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-[#0F172A] font-light leading-tight">
                Architecting scalable <span className="italic font-medium text-blue-600">digital solutions</span> for businesses.
              </h2>
              <p className="mt-6 text-slate-600 font-light leading-relaxed">
                As a pillar of the Arshith Group ecosystem, Suntech Organization specializes in high-availability enterprise services, technical staffing, agile legacy modernization, and custom product development that drives long-term value.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { title: "Innovation First", desc: "Driven by emerging tech systems" },
                  { title: "Agile Development", desc: "Rapid client-centric shipping" },
                  { title: "Modern Standards", desc: "99.9% uptime SLA guarantee" },
                  { title: "Startup Support", desc: "Technical ecosystem seeding" }
                ].map((item, index) => (
                  <div key={index} className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mb-2" />
                    <h4 className="font-sans font-semibold text-sm text-[#0F172A]">{item.title}</h4>
                    <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7">
              <div className="p-8 md:p-10 rounded-2xl bg-slate-50 border border-slate-100 relative">
                <div className="absolute top-6 right-6 font-serif text-6xl text-slate-200 pointer-events-none font-bold">“</div>
                
                <h3 className="font-serif text-2xl text-[#0F172A] font-semibold mb-6">Our Engineering Philosophy</h3>
                
                <div className="space-y-6 text-slate-600 font-light text-base leading-relaxed">
                  <p>
                    Technology should not be structured around rigid templates. We believe in crafting dedicated systems that address actual client constraints—engineering architectures that solve operational friction and build a platform for long-term growth.
                  </p>
                  <p>
                    Suntech Organization was built with the vision to deliver high-availability software products, data processing pipelines, and Cloud/DevOps infrastructure that handle millions of requests without failures. As the primary software vertical under <strong className="text-[#0F172A] font-medium">Arshith Group</strong>, we maintain a legacy of engineering excellence.
                  </p>
                  <p>
                    We actively support young engineering graduates, bridging the gap between college concepts and production code through our <strong className="text-[#0F172A] font-medium">internship ecosystem</strong>. By introducing recruits to structured code reviews and containerized cloud setups, we help them secure positions at leading software companies.
                  </p>
                  <p>
                    From digitizing agricultural supply chains for <strong className="text-[#0F172A] font-medium">Arshith Fresh India</strong> to deploying custom databases for major enterprises, Suntech merges tech innovation with business logic.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-serif font-bold text-lg">S</div>
                  <div>
                    <h5 className="font-sans font-bold text-sm text-[#0F172A]">Suntech Engineering</h5>
                    <p className="text-slate-500 text-xs">Arshith Group Ecosystem</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-slate-50 relative">
        <div className="container-x">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="kicker text-blue-600">Enterprise Offerings</div>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl font-light text-[#0F172A]">Core IT Services</h2>
            <p className="mt-4 text-slate-500 font-light text-sm md:text-base">
              Custom-built tech ecosystems designed to maximize throughput and modern organizational growth.
            </p>
          </div>

          {/* Services cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, index) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-800 group-hover:bg-blue-500/10 group-hover:text-blue-600 transition-colors border border-slate-100">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded-full">
                        Suntech IT
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#0F172A] font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
                      {s.description}
                    </p>
                  </div>

                  <div>
                    <ul className="space-y-2 mb-6">
                      {s.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-xs text-slate-600 font-light">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-800 hover:text-blue-600 transition-colors group/link mt-2"
                    >
                      <span>Consult with Specialists</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Technology Stack Grid */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container-x">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="kicker text-blue-600">Enterprise Frameworks</div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[#0F172A] font-light">Ecosystem Tech Stack</h2>
              <p className="mt-4 text-slate-600 max-w-xl font-light text-sm md:text-base">
                We employ modern frameworks and container technologies to ship secure, modular, and optimized codebases.
              </p>
            </div>
            
            {/* Filter controls */}
            <div className="flex flex-wrap gap-2 mt-6 md:mt-0 p-1.5 rounded-lg bg-slate-100 border border-slate-200/60 w-fit shrink-0">
              {[
                { id: "all", label: "All Stack" },
                { id: "frontend", label: "Frontend" },
                { id: "backend", label: "Backend" },
                { id: "database", label: "Database" },
                { id: "cloud", label: "Cloud" },
                { id: "tools", label: "Tools" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-300 font-sans ${
                    activeCategory === tab.id
                      ? "bg-white text-blue-650 shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive floating elements */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredTech.map((tech) => (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-center group hover:bg-white hover:shadow-md hover:border-blue-500/20 transition-all duration-300"
                >
                  <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
                  <h4 className="font-sans font-bold text-xs text-[#0F172A] mb-1">{tech.name}</h4>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{tech.category}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Digital Transformation & Workflow Section */}
      <section className="py-24 md:py-32 bg-[#020617] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(37,99,235,0.06),transparent_60%)] pointer-events-none" />
        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5">
              <div className="kicker text-cyan-400">Legacy Modernization</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl font-light leading-tight">
                Process automation & legacy migration.
              </h2>
              <p className="mt-6 text-slate-400 font-light leading-relaxed mb-8">
                Suntech maps complex legacy architectures to containerized AWS frameworks, automating database clusters and pipeline tests to assure seamless high-velocity execution.
              </p>

              <div className="space-y-4">
                {workflowSteps.map((w, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 flex items-start gap-4 ${
                      activeWorkflowStep === idx
                        ? "bg-slate-900 border-blue-500/40 text-white"
                        : "bg-slate-950/40 border-slate-800/40 text-slate-400"
                    }`}
                    onClick={() => setActiveWorkflowStep(idx)}
                  >
                    <span className="text-xs font-bold font-mono text-cyan-400 bg-slate-900 px-2 py-1 rounded">
                      {w.step}
                    </span>
                    <div>
                      <h4 className="font-sans font-bold text-sm text-white">{w.title}</h4>
                      {activeWorkflowStep === idx && (
                        <p className="text-slate-400 text-xs mt-1.5 leading-relaxed font-light">{w.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-8 md:p-10 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-center relative">
                <h3 className="font-serif text-2xl text-white font-semibold mb-2">Automated Transformation Workflow</h3>
                <p className="text-slate-500 text-xs mb-8">Interactive mapping of migration cycles managed by Suntech engineers.</p>
                
                {/* SVG Workflow Diagram */}
                <div className="w-full aspect-[16/9] border border-dashed border-slate-800 rounded-xl bg-black/40 flex items-center justify-center p-6">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563EB" />
                      </marker>
                    </defs>

                    {/* Nodes */}
                    <circle cx="50" cy="100" r="24" fill="#020617" stroke="#1E293B" strokeWidth="2" />
                    <text x="50" y="104" textAnchor="middle" className="text-[8px] fill-slate-300 font-mono">Legacy</text>

                    <circle cx="150" cy="60" r="24" fill="#020617" stroke="#2563EB" strokeWidth="2" className="animate-pulse" />
                    <text x="150" y="64" textAnchor="middle" className="text-[8px] fill-slate-300 font-mono">Audit</text>

                    <circle cx="250" cy="140" r="24" fill="#020617" stroke="#06B6D4" strokeWidth="2" />
                    <text x="250" y="144" textAnchor="middle" className="text-[8px] fill-slate-300 font-mono">Digitize</text>

                    <circle cx="350" cy="100" r="24" fill="#2563EB" stroke="white" strokeWidth="2" />
                    <text x="350" y="104" textAnchor="middle" className="text-[8px] fill-white font-mono font-bold">Cloud</text>

                    {/* Connecting lines */}
                    <path d="M 74 90 L 126 70" fill="none" stroke="#2563EB" strokeWidth="1.5" markerEnd="url(#arrow)" />
                    <path d="M 174 70 L 226 130" fill="none" stroke="#06B6D4" strokeWidth="1.5" markerEnd="url(#arrow)" />
                    <path d="M 274 130 L 326 110" fill="none" stroke="#2563EB" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Staffing & Talent Solutions */}
      <section id="staffing" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="p-8 md:p-10 rounded-2xl bg-white border border-slate-100 shadow-md w-full max-w-xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">talent alignment center</span>
                </div>
                
                <h3 className="font-serif text-2xl text-[#0F172A] font-semibold mb-6">Staffing Delivery Matrix</h3>
                
                <div className="space-y-4 text-xs font-light text-slate-600">
                  {[
                    { label: "Active remote devs database", count: "1,200+ Vetted Profiles" },
                    { label: "Developer alignment timeline", count: "Average 48-Hour Onboarding" },
                    { label: "Internship incubation cohort", count: "500+ candidates trained" },
                    { label: "Technical assessment layers", count: "3-stage live pipeline review" }
                  ].map((stat, i) => (
                    <div key={i} className="p-4 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <span className="font-sans font-medium text-slate-700">{stat.label}</span>
                      <span className="font-mono font-bold text-blue-600">{stat.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="kicker text-blue-600">Vetted Technical Staffing</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-[#0F172A] font-light leading-tight">
                Dedicated developers & remote engineering teams.
              </h2>
              <p className="mt-6 text-slate-600 font-light leading-relaxed mb-10">
                Suntech's placement wing bridges top enterprises with pre-evaluated software engineers. We supply full-stack talent, remote UI developers, and database architects trained under our intensive incubation loops.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { title: "Rigorous Skills Checks", value: "Every dev is evaluated on live API setups and design system standardizations." },
                  { title: "Direct Campus Placements", value: "Collaborating with KL University and other major institutes to onboarding top-percentile freshers." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0" />
                    <div>
                      <h4 className="font-sans font-bold text-sm text-[#0F172A]">{item.title}</h4>
                      <p className="text-slate-500 text-xs mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-md bg-blue-600 hover:bg-blue-500 font-sans text-sm font-semibold text-white shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 group"
              >
                <span>Build Your Career With Us</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Case Studies / Projects */}
      <section id="projects" className="py-24 md:py-32 bg-white relative">
        <div className="container-x">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="kicker text-blue-600">Proven Results</div>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl font-light text-[#0F172A]">Case Studies</h2>
            <p className="mt-4 text-slate-500 font-light text-sm md:text-base">
              A review of active platform applications and high-availability enterprise custom programs developed by Suntech.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((caseItem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 md:p-10 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col lg:flex-row gap-10 items-center hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                <div className="lg:w-1/2">
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider font-sans">
                    {caseItem.client}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3.5xl text-[#0F172A] font-semibold mt-4 mb-4 leading-tight">
                    {caseItem.title}
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-slate-400 text-[10px] uppercase font-semibold">Client Outcome</p>
                      <p className="text-slate-600 text-sm font-light mt-0.5">{caseItem.outcomes}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] uppercase font-semibold">Performance Metric</p>
                      <p className="text-slate-650 text-sm font-semibold mt-0.5">{caseItem.metrics}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseItem.techTags.map((tag) => (
                      <span key={tag} className="text-[10px] font-sans font-medium text-slate-600 bg-slate-100 border border-slate-200/50 px-2.5 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dashboard Mockup Visual for case study */}
                <div className="lg:w-1/2 w-full">
                  <div className="p-6 rounded-xl bg-slate-900 border border-slate-800/80 text-white font-mono text-xs shadow-lg relative overflow-hidden aspect-[16/10] flex flex-col justify-between">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.05),transparent_60%)] pointer-events-none" />
                    
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-slate-700" />
                        <span className="h-2 w-2 rounded-full bg-slate-700" />
                        <span className="h-2 w-2 rounded-full bg-slate-700" />
                      </div>
                      <span className="text-[9px] text-slate-500 uppercase tracking-widest">{caseItem.mockupCode}</span>
                    </div>

                    <div className="space-y-2 py-4">
                      <div className="flex justify-between items-center bg-slate-950 p-2.5 rounded border border-slate-850">
                        <span className="text-slate-400 text-[10px]">Active Server Threads</span>
                        <span className="text-emerald-400 font-bold">100% OK</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-950 p-2.5 rounded border border-slate-850">
                        <span className="text-slate-400 text-[10px]">Daily Automated Tests</span>
                        <span className="text-cyan-400">450 Passed</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-[10px] text-slate-500">
                      <span>Uptime maintained 365 days</span>
                      <Maximize2 className="h-3.5 w-3.5 text-cyan-400 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container-x">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="kicker text-blue-600">Enterprise Reach</div>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl font-light text-[#0F172A]">Industries We Serve</h2>
            <p className="mt-4 text-slate-500 font-light text-sm md:text-base">
              Providing digital transformation, automated pipelines, and cloud migrations across global industry verticals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, index) => {
              const Icon = ind.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer text-left"
                >
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="h-5 w-5 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-3">{ind.name}</h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">{ind.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Internship & Career Section */}
      <section id="careers" className="py-24 bg-[#020617] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(6,182,212,0.06),transparent_60%)] pointer-events-none" />
        <div className="container-x relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="inline-flex h-12 w-12 rounded-full bg-blue-500/10 border border-blue-500/20 items-center justify-center text-blue-400 mb-6">
              <GraduationCap className="h-6 w-6" />
            </div>

            <h2 className="font-serif text-4xl md:text-6xl font-light mb-6">
              Launch Your Technical Career at <span className="italic font-medium text-cyan-400">Suntech Incubators</span>
            </h2>
            
            <p className="text-slate-350 font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              We collaborate with premier engineering institutions to provide full-time technical internships, training graduates in cloud technologies, Node microservices, and design systems.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto mb-12">
              {[
                { title: "Hands-on projects", desc: "Write actual React components, API schemas, and AWS configuration templates." },
                { title: "Structured Mentorship", desc: "Gain constant review feedback from experienced software development directors." },
                { title: "Rapid Growth Opportunity", desc: "Transition from internships into regular placement contracts at Arshith verticals." }
              ].map((point, index) => (
                <div key={index} className="p-5 rounded-xl bg-slate-900 border border-slate-800/80">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400 mb-3" />
                  <h4 className="font-sans font-bold text-sm text-white mb-1">{point.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-light">{point.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-md bg-blue-600 hover:bg-blue-500 font-sans text-sm font-semibold text-white shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 group"
            >
              <span>Launch Your Tech Career</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>
        </div>
      </section>

      {/* Achievements Metrics Section */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 text-center">
            {[
              { label: "Projects Delivered", value: "150+" },
              { label: "Clients Served", value: "40+" },
              { label: "Developers Trained", value: "500+" },
              { label: "Internship Programs", value: "8+" },
              { label: "Technology Partners", value: "15+" },
              { label: "Digital Solutions Built", value: "80+" }
            ].map((metric, index) => (
              <div key={index} className="p-6 rounded-xl bg-slate-950/40 border border-slate-800/50">
                <h3 className="font-serif text-3.5xl font-bold text-cyan-400 mb-2">
                  <AnimatedCounter value={metric.value} />
                </h3>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100 relative">
        <div className="container-x">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="kicker text-blue-600">Client & Developer Satisfaction</div>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl font-light text-[#0F172A]">Ecosystem Testimonials</h2>
            <p className="mt-4 text-slate-500 font-light text-sm md:text-base">
              Explore reviews from startup founders, database interns, and business partners.
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

      {/* Contact & Consultation Section */}
      <section id="contact" className="py-24 bg-[#020617] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(37,99,235,0.1),transparent_60%)] pointer-events-none" />
        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
            
            {/* Contact Info */}
            <div className="lg:col-span-5">
              <div className="kicker text-cyan-400">Collaborations</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl font-light leading-tight">
                Get a custom IT consultation.
              </h2>
              <p className="mt-6 text-slate-350 font-light leading-relaxed mb-8">
                Submit an inquiry regarding enterprise digitizations, full-stack recruitment extenders, AWS infrastructure migration, or student incubator cohort drives.
              </p>

              <div className="space-y-4 font-sans text-sm font-light text-slate-300">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-405">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Corporate Email</p>
                    <a href="mailto:info@suntechorganization.com" className="hover:text-white transition-colors">info@suntechorganization.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-405">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Development Hub</p>
                    <p>Suntech Systems HQ, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 md:p-10 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
                
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
                      <h3 className="font-serif text-2xl text-white font-semibold mb-2">Message Transmitted</h3>
                      <p className="text-slate-350 font-light text-sm max-w-sm mx-auto">
                        Thank you for reaching out. Suntech Organization's technical solutions board will evaluate your message and connect back shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleContactSubmit}
                      className="space-y-6 text-left"
                    >
                      <h3 className="font-serif text-2xl text-white font-semibold mb-2">Technical Consultation Form</h3>
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
                            className="w-full bg-slate-850 border border-slate-800 rounded p-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
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
                            className="w-full bg-slate-850 border border-slate-800 rounded p-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="inquiryType" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Inquiry Type *
                        </label>
                        <select
                          id="inquiryType"
                          required
                          className="w-full bg-slate-850 border border-slate-800 rounded p-3 text-slate-300 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option value="transformation">Digital Transformation & Legacy migrations</option>
                          <option value="recruitment">Technical Staffing & Developer Extensions</option>
                          <option value="internship">Student Incubation Programs Collaboration</option>
                          <option value="other">General Engineering Consultation</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Message / Brief *
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          className="w-full bg-slate-850 border border-slate-800 rounded p-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Describe the nature of your software or recruitment needs..."
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

      {/* Footer */}
      <section className="py-12 bg-slate-950 border-t border-slate-900 text-center text-slate-400 text-xs relative z-10">
        <div className="container-x">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <p className="font-sans font-light">
              © {new Date().getFullYear()} Suntech Organization. Guiding enterprise digitization.
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
