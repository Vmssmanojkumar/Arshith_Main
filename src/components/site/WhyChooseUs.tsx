import { motion } from "framer-motion";
import { Sparkles, Leaf, Cpu, Users, GraduationCap, Layers } from "lucide-react";

const cards = [
  {
    title: "Innovation Driven",
    desc: "We combine technology, creativity, and business intelligence to build scalable modern solutions.",
    icon: Sparkles,
    color: "oklch(0.74 0.14 70)", // Gold Accent
    glow: "hover:border-amber-500/30 hover:shadow-amber-500/5"
  },
  {
    title: "Sustainable Growth",
    desc: "Our ecosystem promotes responsible business practices and community-focused commerce.",
    icon: Leaf,
    color: "oklch(0.76 0.15 145)", // Forest Green
    glow: "hover:border-emerald-500/30 hover:shadow-emerald-500/5"
  },
  {
    title: "Technology Excellence",
    desc: "From enterprise systems to digital platforms, we create future-ready technology infrastructures.",
    icon: Cpu,
    color: "oklch(0.6 0.12 220)", // Sky Blue
    glow: "hover:border-blue-500/30 hover:shadow-blue-500/5"
  },
  {
    title: "Community Empowerment",
    desc: "We support farmers, entrepreneurs, students, and businesses through inclusive growth initiatives.",
    icon: Users,
    color: "oklch(0.76 0.15 145)", // Mint
    glow: "hover:border-teal-500/30 hover:shadow-teal-500/5"
  },
  {
    title: "Industry-Oriented Learning",
    desc: "We bridge the gap between academics and industry with practical exposure and mentorship programs.",
    icon: GraduationCap,
    color: "oklch(0.65 0.15 300)", // Purple Accent
    glow: "hover:border-purple-500/30 hover:shadow-purple-500/5"
  },
  {
    title: "Integrated Ecosystem",
    desc: "Our businesses work together seamlessly to create a strong and scalable enterprise network.",
    icon: Layers,
    color: "oklch(0.6 0.12 220)", // Navy/Blue
    glow: "hover:border-sky-500/30 hover:shadow-sky-500/5"
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-secondary/40 py-24 md:py-32 relative overflow-hidden border-b border-border">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/[0.005] rounded-full blur-3xl pointer-events-none" />

      <div className="container-x relative z-10">
        
        <div className="max-w-3xl mb-20">
          <div className="kicker flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[var(--brand-gold)] animate-pulse" />
            Why Choose Us Section
          </div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
            Why <span className="italic font-medium text-emerald-600">Arshith Group?</span>
          </h2>
        </div>

        {/* Why Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const CardIcon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-350 flex flex-col justify-between relative group overflow-hidden ${card.glow}`}
              >
                {/* Radial accent glow */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${card.color}10, transparent 70%)` }}
                />

                <div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 duration-300"
                    style={{ backgroundColor: card.color }}
                  >
                    <CardIcon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-2xl text-primary font-normal mb-3">
                    {card.title}
                  </h3>
                  
                  <p className="text-xs text-foreground/70 font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
