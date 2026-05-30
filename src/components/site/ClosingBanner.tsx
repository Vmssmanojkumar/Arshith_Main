import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, Phone } from "lucide-react";

export function ClosingBanner() {
  return (
    <section className="bg-[#0F172A] text-white py-24 md:py-32 relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--brand-gold)]/10 blur-[130px] pointer-events-none animate-pulse" />

      <div className="container-x relative z-10 text-center max-w-4xl mx-auto space-y-8">
        
        {/* Kicker Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mx-auto"
        >
          <Sparkles className="h-3.5 w-3.5 animate-pulse" />
          <span>Transforming Ideas Into Scalable Impact</span>
        </motion.div>

        {/* Title verbatim */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl text-white font-bold leading-tight tracking-tight"
        >
          Transforming Ideas Into <br />
          <span className="italic font-medium text-[var(--brand-gold)]">Scalable Impact</span>
        </motion.h2>

        {/* Body verbatim */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-300 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
        >
          Arshith Group is committed to building powerful ecosystems where technology, sustainability, commerce, and innovation work together to create meaningful progress.
          </motion.p>

        {/* CTA Buttons verbatim */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-6 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#businesses"
            className="inline-flex items-center gap-2 px-8 py-4 rounded bg-[var(--brand-gold)] text-[#0F172A] hover:bg-emerald-600 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[var(--brand-gold)]/5 group"
          >
            <span>Explore Our Companies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded border border-white/20 text-white hover:bg-white/10 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md group"
          >
            <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Contact Us Today</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
