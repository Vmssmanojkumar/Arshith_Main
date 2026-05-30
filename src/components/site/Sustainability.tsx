import { motion } from "framer-motion";
import { Leaf, Sparkles, Check, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const commitments = [
  {
    n: "01",
    t: "Supporting local farmers and producers",
    d: "Deploying direct crop compensation networks and digital consolidation points that secure the livelihood of local growers.",
    color: "oklch(0.76 0.15 145)", // Forest Green
    glow: "hover:border-emerald-500/30 hover:shadow-emerald-500/5"
  },
  {
    n: "02",
    t: "Encouraging natural and chemical-free products",
    d: "Enforcing rigorous zero-chemical agricultural mandates and transparent QR crop tracing for consumer health.",
    color: "oklch(0.74 0.14 70)", // Gold
    glow: "hover:border-amber-500/30 hover:shadow-amber-500/5"
  },
  {
    n: "03",
    t: "Building environmentally conscious business models",
    d: "Channelling Suntech solar cold storages and lightweight cloud deployments that actively offset group-wide carbon footprints.",
    color: "oklch(0.6 0.12 220)", // Blue
    glow: "hover:border-blue-500/30 hover:shadow-blue-500/5"
  },
  {
    n: "04",
    t: "Promoting ethical sourcing and transparent commerce",
    d: "Removing middleman commissions, ensuring transparent wholesale payouts, and establishing statutory corporate transparency.",
    color: "oklch(0.65 0.15 300)", // Purple
    glow: "hover:border-purple-500/30 hover:shadow-purple-500/5"
  },
  {
    n: "05",
    t: "Creating long-term positive social impact",
    d: "Nurturing student developer placement systems and raising grassroots income indices in the regional communities.",
    color: "oklch(0.76 0.15 145)", // Green Mint
    glow: "hover:border-emerald-500/30 hover:shadow-emerald-500/5"
  }
];

export function Sustainability() {
  return (
    <section id="sustainability" className="bg-background py-24 md:py-32 relative overflow-hidden border-b border-border">
      {/* Decorative radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.005] blur-3xl pointer-events-none" />

      <div className="container-x relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="kicker flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              Sustainability Section
            </div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
              Building a <span className="italic font-medium text-emerald-600">Sustainable Future</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-foreground/85 font-light leading-relaxed">
              At Arshith Group, sustainability is more than a business strategy — it is a responsibility.
            </p>
          </div>

          <Link
            to="/sustainability"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 hover:text-emerald-500 transition-colors group shrink-0 border-b border-emerald-500/20 pb-1"
          >
            Explore ESG Disclosures
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Verbatim commitments grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {commitments.map((c, idx) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-350 flex flex-col justify-between relative group overflow-hidden ${c.glow}`}
            >
              {/* Top corner glow */}
              <div
                className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle at top right, ${c.color}10, transparent 70%)` }}
              />

              <div>
                <span
                  className="font-serif text-3xl font-light block mb-4"
                  style={{ color: c.color }}
                >
                  {c.n}
                </span>

                <h3 className="font-serif text-lg text-primary font-semibold mb-3 leading-snug">
                  {c.t}
                </h3>
              </div>

              <p className="text-[10px] text-foreground/60 font-light leading-relaxed mt-2 border-t border-border/60 pt-4">
                {c.d}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Concluding Outro Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-2xl bg-secondary/35 border border-border text-center max-w-3xl mx-auto"
        >
          <p className="font-serif text-xl md:text-2xl text-primary font-light italic">
            “Our mission is to combine technology and sustainability to build a healthier and smarter future for communities.”
          </p>
        </motion.div>

      </div>
    </section>
  );
}
