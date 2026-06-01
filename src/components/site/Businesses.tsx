import fresh from "@/assets/fresh.jpg";
import infotech from "@/assets/infotech.jpg";
import suntech from "@/assets/suntech.jpg";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Leaf, Cpu, Terminal, Check } from "lucide-react";

type Biz = {
  kicker: string;
  title: string;
  body: string;
  to: "/fresh" | "/suntech" | "/infotech";
  image: string;
  color: string;
  colorAccent: string;
  bullets: string[];
  icon: any;
  ctaText: string;
};

const items: Biz[] = [
  {
    kicker: "Sustainable Natural E-Commerce",
    title: "Arshith Fresh",
    body: "Arshith Fresh is our clean-label e-commerce platform focused on delivering natural, chemical-free, and traditionally crafted products directly from local producers and farmers to consumers.",
    to: "/fresh",
    image: fresh,
    color: "oklch(0.76 0.15 145)", // Forest Green
    colorAccent: "rgba(34, 197, 94, 0.04)",
    icon: Leaf,
    ctaText: "Explore Arshith Fresh",
    bullets: [
      "Farm-to-consumer ecosystem",
      "Natural and organic products",
      "Traditional food products",
      "Premium dry fruits & oils",
      "Sustainable sourcing"
    ]
  },
  {
    kicker: "Technology & Talent Development",
    title: "Suntech Solutions",
    body: "Suntech Solutions powers the technology ecosystem of the group by delivering innovative IT solutions, software development services, and real-time industry training programs.",
    to: "/suntech",
    image: suntech,
    color: "oklch(0.74 0.14 70)", // Gold Accent
    colorAccent: "rgba(186, 140, 50, 0.04)",
    icon: Cpu,
    ctaText: "Explore Technology Services",
    bullets: [
      "Web & software development",
      "Enterprise IT solutions",
      "Internship programs",
      "Real-world technical training",
      "Skill development ecosystem"
    ]
  },
  {
    kicker: "Enterprise Digital Transformation",
    title: "Arshith Infotech",
    body: "Arshith Infotech helps businesses modernize operations through scalable software systems, cloud technologies, automation, and enterprise-grade digital transformation solutions.",
    to: "/infotech",
    image: infotech,
    color: "oklch(0.6 0.12 220)", // Sky Blue
    colorAccent: "rgba(59, 130, 246, 0.04)",
    icon: Terminal,
    ctaText: "Discover Enterprise Solutions",
    bullets: [
      "Enterprise software",
      "Cloud solutions",
      "Business automation",
      "Digital transformation",
      "Scalable infrastructure"
    ]
  },
];

export function Businesses() {
  return (
    <section id="businesses" className="bg-background relative py-24 md:py-32 border-b border-border overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-emerald-500/[0.01] blur-3xl pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="max-w-3xl mb-20">
          <div className="kicker flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[var(--brand-gold)] animate-pulse" />
            Core Businesses Section
          </div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
            Our Strategic <span className="italic font-medium text-emerald-600">Business Divisions</span>
          </h2>
        </div>

        {/* Verticals Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {items.map((b, i) => {
            const BizIcon = b.icon;
            return (
              <motion.article
                key={b.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-card border border-border rounded-2xl shadow-sm hover:shadow-xl hover:border-emerald-500/20 transition-all duration-350 flex flex-col justify-between overflow-hidden group"
              >
                {/* Dynamic Image Header Block */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
                  <img
                    src={b.image}
                    alt={b.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy-deep)]/60 via-[var(--brand-navy-deep)]/20 to-transparent" />
                  
                  {/* Floating Tag */}
                  <span
                    className="absolute top-4 left-4 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded bg-white/95 text-[var(--brand-navy-deep)] shadow-sm backdrop-blur flex items-center gap-1.5"
                  >
                    <BizIcon className="w-3 h-3 text-emerald-600 animate-pulse" />
                    {b.title} Division
                  </span>
                </div>

                {/* Card Context */}
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded mb-3 inline-block">
                      {b.kicker}
                    </span>
                    <h3 className="font-serif text-3xl text-primary font-normal mb-4 group-hover:text-emerald-700 transition-colors">
                      {b.title}
                    </h3>
                    
                    <p className="text-sm text-foreground font-normal leading-relaxed mb-6">
                      {b.body}
                    </p>

                    {/* Detailed Bullets List */}
                    <div className="border-t border-border/80 pt-6 mb-8">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-3">
                        Key Highlights
                      </h4>
                      <ul className="space-y-2.5">
                        {b.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-800 font-normal leading-snug">
                            <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-border/60">
                    <Link
                      to={b.to}
                      className="inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-primary group/link"
                    >
                      <span className="group-hover/link:text-emerald-700 transition-colors">{b.ctaText}</span>
                      <div
                        className="w-8 h-8 rounded-full border border-border group-hover/link:border-emerald-500/30 group-hover/link:bg-emerald-50/10 flex items-center justify-center transition-all duration-300 transform group-hover/link:translate-x-1"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-primary group-hover/link:text-emerald-600 transition-colors" />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
