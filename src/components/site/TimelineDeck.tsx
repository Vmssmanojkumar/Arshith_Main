import { motion } from "framer-motion";
import { Building, Cpu, Globe, TrendingUp, Sparkles, Check, ChevronRight } from "lucide-react";

const milestones = [
  {
    year: "2018",
    title: "Foundation of Arshith",
    kicker: "Phase I: Setting the Foundations",
    icon: Building,
    desc: "Arshith Group formally establishes its baseline corporate vision, launching local software consultancy operations and B2B systems support under Suntech Solutions.",
    color: "oklch(0.74 0.14 70)", // Gold Accent
    glow: "hover:border-amber-500/30 hover:shadow-amber-500/5",
    bullets: [
      "Custom enterprise databases developed",
      "Baseline corporate operations setup",
      "Suntech software practice formal initiation"
    ]
  },
  {
    year: "2022",
    title: "Multi-Sector Tech Pivot",
    kicker: "Phase II: Expanding Technical Wings",
    icon: Cpu,
    desc: "Expanding technical capacities to offer enterprise cloud consultancy, auto-scaling AWS pipelines, and recruiting talent extensions under ArshithInfoTech.",
    color: "oklch(0.6 0.12 220)", // Blue Accent
    glow: "hover:border-blue-500/30 hover:shadow-blue-500/5",
    bullets: [
      "B2B cloud transformation consulting",
      "Talent extension pipelines launched",
      "Student incubator placement drives"
    ]
  },
  {
    year: "2024",
    title: "Arshith Fresh Launch",
    kicker: "Phase III: Grassroots Commerce",
    icon: Globe,
    desc: "Private incorporation of Arshith Fresh India Pvt Ltd, building a scalable digital e-commerce marketplace and crop logistics that directly support local South Indian growers.",
    color: "oklch(0.76 0.15 145)", // Green Accent
    glow: "hover:border-emerald-500/30 hover:shadow-emerald-500/5",
    bullets: [
      "E-commerce multi-seller platform deployed",
      "500+ small-scale farm cooperatives integrated",
      "QR-enabled food traceability mandate set"
    ]
  },
  {
    year: "2026",
    title: "Unified Conglomerate Scale",
    kicker: "Phase IV: Institutional Value",
    icon: TrendingUp,
    desc: "Scaling consolidated business verticals, providing B2B cloud portals, solar chilling grids, and university placement pools representing 30,000+ satisfied clients.",
    color: "oklch(0.65 0.15 300)", // Purple Accent
    glow: "hover:border-purple-500/30 hover:shadow-purple-500/5",
    bullets: [
      "30,000+ active customers supported",
      "Integrated solar chilling logistics networks",
      "Comprehensive campus recruitment placement"
    ]
  }
];

export function TimelineDeck() {
  return (
    <section id="evolution" className="bg-secondary/40 py-24 md:py-32 relative overflow-hidden border-b border-border">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/[0.01] blur-3xl pointer-events-none" />

      <div className="container-x relative z-10">
        
        <div className="max-w-3xl mb-20">
          <div className="kicker flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[var(--brand-gold)] animate-pulse" />
            Corporate Timeline
          </div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
            Our Evolutionary Journey: <br />
            <span className="italic font-medium text-emerald-600">Milestones & Strategic Growth</span>.
          </h2>
          <p className="mt-6 text-foreground/70 font-light text-base md:text-lg leading-relaxed">
            From our early software practice setup in 2018 to our diversified conglomerate consolidation in 2026, track the primary milestones of Arshith Group.
          </p>
        </div>

        {/* Milestone Cards Deck */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting Path line behind cards on desktop */}
          <div className="hidden lg:block absolute top-[120px] left-[50px] right-[50px] h-0.5 bg-border z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-500 via-sky-500 via-emerald-500 to-purple-500 opacity-20" />
          </div>

          {milestones.map((m, i) => {
            const MilestoneIcon = m.icon;
            return (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className={`bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-350 flex flex-col justify-between relative group z-10 ${m.glow}`}
              >
                <div>
                  
                  {/* Timeline Node Header */}
                  <div className="flex justify-between items-center mb-8 relative">
                    <span
                      className="font-serif text-5xl font-bold tracking-tight"
                      style={{ color: m.color }}
                    >
                      {m.year}
                    </span>
                    
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md relative z-10"
                      style={{ backgroundColor: m.color }}
                    >
                      <MilestoneIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[9px] font-bold uppercase tracking-wider text-foreground/50 block mb-2">
                    {m.kicker}
                  </span>

                  <h3 className="font-serif text-2xl text-primary font-normal mb-4">
                    {m.title}
                  </h3>
                  
                  <p className="text-xs text-foreground/70 font-light leading-relaxed mb-6">
                    {m.desc}
                  </p>
                </div>

                {/* Bullets mapping precise achievements */}
                <div className="border-t border-border/60 pt-5 mt-4">
                  <ul className="space-y-2">
                    {m.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-[10px] text-foreground/60 font-light leading-snug">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
