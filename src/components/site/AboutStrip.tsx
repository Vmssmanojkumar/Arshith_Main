import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Check } from "lucide-react";

const expertiseList = [
  "E-commerce",
  "Sustainable agriculture",
  "Enterprise technology",
  "Software development",
  "Digital transformation",
  "Workforce training"
];

export function AboutStrip() {
  return (
    <section id="about" className="bg-secondary/40 py-24 md:py-32 relative overflow-hidden border-b border-border">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-emerald-500/[0.02] blur-3xl pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Header Column */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="kicker flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[var(--brand-gold)] animate-pulse" />
              About Section
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
              About <span className="italic font-medium text-emerald-600">Arshith Group</span>
            </h2>
            
            <p className="text-foreground/80 font-light text-base md:text-lg leading-relaxed">
              Arshith Group is a modern Indian multi-industry organization focused on creating a strong bridge between traditional business values and next-generation digital transformation.
            </p>
          </motion.div>

          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Expertise grid */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground/50 mb-4">
                With expertise spanning
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {expertiseList.map((item, idx) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-xs font-semibold px-4 py-2 rounded-lg bg-white border border-border text-primary shadow-sm hover:border-emerald-500/30 hover:bg-emerald-50/[0.05] transition-all duration-300 flex items-center gap-2 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Verification Block / Body text */}
            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border">
              <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm flex flex-col justify-between">
                <p className="text-xs text-foreground/70 leading-relaxed font-light">
                  we are building an integrated ecosystem designed for long-term growth, innovation, and social impact.
                </p>
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 mt-4">
                  <Check className="w-3.5 h-3.5" />
                  <span>Integrated Ecosystem</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm flex flex-col justify-between">
                <p className="text-xs text-foreground/70 leading-relaxed font-light">
                  Driven by a vision of responsible entrepreneurship, Arshith Group empowers businesses, farmers, students, and consumers through scalable technology and sustainable business practices.
                </p>
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-gold)] mt-4">
                  <Check className="w-3.5 h-3.5" />
                  <span>Responsible Vision</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
