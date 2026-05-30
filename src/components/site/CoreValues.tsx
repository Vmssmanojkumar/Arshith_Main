import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Sprout, GraduationCap, Sparkles, Check } from "lucide-react";

const values = [
  {
    title: "Trust & Absolute Purity",
    kicker: "01. Quality Mandate",
    desc: "Bypassing intermediate wholesale agents to bring pure, 100% zero-chemical organic produce directly to customer dining rooms.",
    icon: ShieldCheck,
    color: "oklch(0.76 0.15 145)", // Green Accent
    glow: "hover:border-emerald-500/30 hover:shadow-emerald-500/5",
    points: [
      "Rigorous quality auditing before shipment",
      "QR-enabled supply chain traceability",
      "Chemical-free agricultural agreements"
    ]
  },
  {
    title: "Scalable Core Systems",
    kicker: "02. Technical Vision",
    desc: "Architecting high-availability reactive web dashboards, low-latency B2B databases, and auto-scaling cloud clusters.",
    icon: Cpu,
    color: "oklch(0.6 0.12 220)", // Blue Accent
    glow: "hover:border-blue-500/30 hover:shadow-blue-500/5",
    points: [
      "Sub-180ms backend API speeds targets",
      "Docker containerized microservices scaling",
      "Continuous Git sprint deployments SLA"
    ]
  },
  {
    title: "Grassroots Livelihood",
    kicker: "03. Community Stewardship",
    desc: "Securing stable crop purchase contracts for local agricultural growers and providing fair wholesale compensation pathways.",
    icon: Sprout,
    color: "oklch(0.74 0.14 70)", // Gold Accent
    glow: "hover:border-amber-500/30 hover:shadow-amber-500/5",
    points: [
      "500+ small organic grower partners",
      "Direct payouts cutting out middle friction",
      "Local logistical warehouse centers support"
    ]
  },
  {
    title: "Human Capital Incubation",
    kicker: "04. Developer Enablement",
    desc: "Bridging the dry college syllabus gap by bringing computer science students directly into live enterprise software codebases.",
    icon: GraduationCap,
    color: "oklch(0.65 0.15 300)", // Purple Accent
    glow: "hover:border-purple-500/30 hover:shadow-purple-500/5",
    points: [
      "Collaborative partner drives with top colleges",
      "Mentorship under principal web architects",
      "Placement pathways in enterprise technology"
    ]
  }
];

export function CoreValues() {
  return (
    <section id="values" className="bg-background py-24 md:py-32 relative overflow-hidden border-b border-border">
      {/* Visual background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.005] rounded-full blur-3xl pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="max-w-3xl mb-20">
          <div className="kicker flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[var(--brand-gold)] animate-pulse" />
            Corporate Philosophy
          </div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
            Core Principles Shaping the <br />
            <span className="italic font-medium text-emerald-600">Arshith Trajectory</span>.
          </h2>
          <p className="mt-6 text-foreground/70 font-light text-base md:text-lg leading-relaxed">
            Our multi-sector operations are steered by four core principles — ensuring that every technology commit and direct-grower contract builds long-term institutional value.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => {
            const ValueIcon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className={`bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-350 flex flex-col justify-between relative group overflow-hidden ${v.glow}`}
              >
                {/* Top Corner Radial Glow */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${v.color}10, transparent 70%)` }}
                />

                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span
                      className="text-[9px] font-bold uppercase tracking-wider text-foreground/50 px-2 py-0.5 rounded bg-secondary/80"
                    >
                      {v.kicker}
                    </span>
                    
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300"
                      style={{ backgroundColor: v.color }}
                    >
                      <ValueIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-primary font-normal mb-4">
                    {v.title}
                  </h3>
                  
                  <p className="text-xs text-foreground/70 font-light leading-relaxed mb-6">
                    {v.desc}
                  </p>
                </div>

                {/* Checklist points */}
                <div className="border-t border-border/60 pt-5 mt-4">
                  <ul className="space-y-2">
                    {v.points.map((p, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-[10px] text-foreground/60 font-light leading-snug">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{p}</span>
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
