import { motion } from "framer-motion";
import { Sparkles, Sprout, Layers, Globe, Users, Check, ArrowUpRight } from "lucide-react";

const pillars = [
  "Multi-Industry Business Ecosystem",
  "Technology-Driven Operations",
  "Sustainable Commerce Solutions",
  "Enterprise Digital Services",
  "Internship & Skill Development Programs",
  "Community-Focused Growth"
];

const counters = [
  {
    value: "100+",
    label: "Products",
    desc: "Clean-label e-commerce products",
    icon: Sprout,
    color: "oklch(0.74 0.14 70)", // Gold
    glow: "hover:border-amber-500/30 hover:shadow-amber-500/5",
    percent: 100
  },
  {
    value: "Multiple",
    label: "Business Verticals",
    desc: "Fresh, InfoTech, and Suntech units",
    icon: Layers,
    color: "oklch(0.76 0.15 145)", // Green
    glow: "hover:border-emerald-500/30 hover:shadow-emerald-500/5",
    percent: 95
  },
  {
    value: "Growing",
    label: "Digital Ecosystem",
    desc: "Integrated technology networks",
    icon: Globe,
    color: "oklch(0.6 0.12 220)", // Blue
    glow: "hover:border-blue-500/30 hover:shadow-blue-500/5",
    percent: 98
  },
  {
    value: "Innovation",
    label: "Focused Team",
    desc: "Architects and field operations",
    icon: Users,
    color: "oklch(0.65 0.15 300)", // Purple
    glow: "hover:border-purple-500/30 hover:shadow-purple-500/5",
    percent: 96
  }
];

export function Statistics() {
  return (
    <section id="statistics" className="bg-background py-24 md:py-32 relative overflow-hidden border-b border-border">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.005] rounded-full blur-3xl pointer-events-none" />

      <div className="container-x relative z-10">
        
        {/* Header Block */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="kicker flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[var(--brand-gold)] animate-pulse" />
              Statistics Section
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
              Building Impact <br />
              <span className="italic font-medium text-emerald-600">Across Industries</span>
            </h2>
            
            <p className="text-foreground/70 font-light text-base md:text-lg leading-relaxed">
              Arshith Group delivers scalable technical innovation and sustainable commerce solutions across multiple key operating pillars.
            </p>
          </motion.div>

          {/* Operational Pillars checklist grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 grid sm:grid-cols-2 gap-4 w-full"
          >
            {pillars.map((p, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100/40 transition-colors flex items-center gap-3 text-xs md:text-sm text-slate-700 font-light leading-snug">
                <span className="h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>{p}</span>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Counter cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {counters.map((c, idx) => {
            const CounterIcon = c.icon;
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className={`bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-350 flex flex-col justify-between group relative overflow-hidden ${c.glow}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110 duration-300"
                      style={{ backgroundColor: c.color }}
                    >
                      <CounterIcon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-1">
                    {c.value}
                  </h3>
                  
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-primary mb-3">
                    {c.label}
                  </h4>
                </div>

                <div className="space-y-4 pt-4 border-t border-border/60">
                  <p className="text-[10px] text-foreground/60 font-light leading-relaxed">
                    {c.desc}
                  </p>
                  {/* Small progress meter */}
                  <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.15 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: c.color }}
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
