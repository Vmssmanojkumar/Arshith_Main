import { motion } from "framer-motion";
import { Sparkles, ArrowRight, UserCheck, Check, GraduationCap } from "lucide-react";
import { Link } from "@tanstack/react-router";

const opportunities = [
  "Students",
  "Developers",
  "Designers",
  "Business professionals",
  "Entrepreneurs"
];

const recruitmentSteps = [
  {
    step: "01",
    title: "Application Screening",
    desc: "Rigorous alignment checks of resumes and technical repositories against group projects."
  },
  {
    step: "02",
    title: "HR Interaction",
    desc: "Collaborative dialogue concerning cultural fit, core values alignment, and personal growth direction."
  },
  {
    step: "03",
    title: "Skill Assessment",
    desc: "Interactive technical review or practical business scenario solving mimicking live codebases."
  },
  {
    step: "04",
    title: "Final Interview & Onboarding",
    desc: "Final governance review followed by seamless setup under executive board mentors."
  }
];

export function Careers() {
  return (
    <section id="careers" className="bg-secondary/40 py-24 md:py-32 relative overflow-hidden border-b border-border">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-[var(--brand-gold)]/[0.01] blur-3xl pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Opportunities Column - Left */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="kicker flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[var(--brand-gold)] animate-pulse" />
                Careers Section
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
                Grow With <span className="italic font-medium text-emerald-600">Us</span>
              </h2>

              <p className="text-foreground font-normal text-base md:text-lg leading-relaxed">
                We believe innovation begins with people.
              </p>

              {/* Target chips */}
              <div className="pt-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground/50 mb-3">
                  Arshith Group provides opportunities for
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {opportunities.map((opt) => (
                    <motion.span
                      key={opt}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="text-xs font-semibold px-4 py-2 rounded-lg bg-white border border-border text-primary shadow-sm hover:border-emerald-500/30 transition-all duration-350 cursor-default"
                    >
                      {opt}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Detail paragraph verbatim */}
              <p className="text-xs text-foreground leading-relaxed font-normal pt-4 border-t border-border/60">
                through internships, training programs, and career opportunities designed to create future-ready professionals.
              </p>
            </div>

            <div className="mt-8 pt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#0F172A] text-white hover:bg-emerald-700 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md group"
              >
                <span>Join Our Team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Stepper Recruitment Column - Right */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(186,140,50,0.04),transparent_70%)] pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 mb-6">
                <UserCheck className="w-5 h-5 text-emerald-600" />
                <h3 className="font-serif text-2xl text-primary font-semibold">
                  Recruitment Process
                </h3>
              </div>

              {/* Stepper items */}
              <div className="space-y-6 relative">
                {/* Stepper connection line */}
                <div className="absolute left-[20px] top-[24px] bottom-[24px] w-0.5 bg-slate-100" />

                {recruitmentSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 relative z-10 group">
                    <span className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 group-hover:border-emerald-500/30 group-hover:bg-emerald-50/10 text-slate-700 group-hover:text-emerald-700 text-xs font-bold font-mono flex items-center justify-center shrink-0 transition-colors duration-300">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 font-serif group-hover:text-emerald-700 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-700 font-normal mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 text-[10px] uppercase tracking-widest text-slate-600 font-bold flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Transparent Recruitment flow</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
