import { motion } from "framer-motion";
import { Sparkles, Target, Check, ShieldCheck } from "lucide-react";

const missionPoints = [
  "Deliver technology-enabled business solutions",
  "Promote sustainable and natural commerce",
  "Empower local producers and entrepreneurs",
  "Build scalable enterprise platforms",
  "Develop future-ready talent through practical learning ecosystems",
  "Create impactful digital transformation across industries"
];

export function VisionMission() {
  return (
    <section id="vision-mission" className="bg-background py-24 md:py-32 relative overflow-hidden border-b border-border">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/[0.005] blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-500/[0.005] blur-3xl pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="kicker flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[var(--brand-gold)] animate-pulse" />
            Vision & Mission Section
          </div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
            Guiding Our Collective <span className="italic font-medium text-emerald-600">Enterprise Future</span>.
          </h2>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Our Vision Card - Left */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
            className="lg:col-span-5 bg-[#0F172A] text-white border border-slate-800 p-8 md:p-10 rounded-2xl shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Ambient Gold glow corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(186,140,50,0.15),transparent_70%)] pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[var(--brand-gold)] flex items-center justify-center mb-8">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>

              <h3 className="font-serif text-3xl font-normal text-white mb-6">
                Our Vision
              </h3>

              <p className="font-serif text-xl md:text-2xl text-slate-200 leading-relaxed font-light italic">
                “To become a globally recognized innovation-driven enterprise that empowers communities, businesses, and future generations through sustainable technology and transformative digital ecosystems.”
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 text-[10px] uppercase tracking-widest text-slate-400 font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[var(--brand-gold)]" />
              <span>Globally Recognized standard</span>
            </div>
          </motion.div>

          {/* Our Mission Card - Right */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="lg:col-span-7 bg-white border border-slate-100 p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-500/20 transition-all duration-350 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Ambient Emerald glow corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.06),transparent_70%)] pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8">
                <Target className="w-6 h-6" />
              </div>

              <h3 className="font-serif text-3xl font-normal text-slate-900 mb-6">
                Our Mission
              </h3>

              <ul className="grid sm:grid-cols-2 gap-4">
                {missionPoints.map((item, index) => (
                  <li key={index} className="p-4 rounded-xl bg-slate-50 border border-slate-100/60 hover:bg-slate-100/40 transition-colors flex gap-3 text-xs md:text-sm text-slate-700 leading-relaxed font-light">
                    <span className="h-5 w-5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 text-[10px] uppercase tracking-widest text-slate-400 font-bold flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Delivering Impact Across industries</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
