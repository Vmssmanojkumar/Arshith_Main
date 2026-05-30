import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { toast } from "sonner";
import img from "@/assets/contact.png";
import {
  Mail, MapPin, Building2, Sparkles, ArrowRight, Phone, Clock,
  Globe, Send, Users, ChevronRight, CheckCircle, Briefcase,
  MessageSquare, Zap, Shield
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Arshith Group" },
      { name: "description", content: "Get in touch with Arshith Group — corporate office in Bengaluru with hubs across Andhra Pradesh and Telangana." },
      { property: "og:title", content: "Contact | Arshith Group" },
      { property: "og:image", content: img },
    ],
  }),
  component: Page,
});

const offices = [
  {
    city: "Bengaluru",
    region: "Karnataka, India",
    type: "Corporate Headquarters",
    desc: "Primary corporate headquarters directing multi-vertical conglomerate decisions, cloud investments, and enterprise IT consulting operations.",
    features: ["Executive Leadership", "IT Consulting Wing", "Cloud Operations Center"],
    color: "emerald",
    icon: Building2,
  },
  {
    city: "Andhra Pradesh",
    region: "South India",
    type: "Regional Operations Hub",
    desc: "Managing D2C farmer cooperatives, organic produce sourcing, cold-storage infrastructure, and local supply chain logistics.",
    features: ["Farmer Cooperatives", "Cold Storage Units", "Supply Chain Ops"],
    color: "amber",
    icon: MapPin,
  },
  {
    city: "Telangana",
    region: "South India",
    type: "Regional Operations Hub",
    desc: "Administrative center for campus recruitment drives, tech talent acquisition programs, and regional business development.",
    features: ["Campus Recruitment", "Talent Incubation", "Business Development"],
    color: "sky",
    icon: Globe,
  },
];

const channels = [
  { icon: Mail, label: "Email", value: "contact@arshithgroup.com", href: "mailto:contact@arshithgroup.com", desc: "B2B inquiries, partnerships & careers" },
  { icon: Phone, label: "Phone", value: "+91 (Bengaluru)", href: "tel:", desc: "Mon–Sat, 9:00 AM – 6:00 PM IST" },
  { icon: Clock, label: "Business Hours", value: "9 AM – 6 PM IST", href: null, desc: "Monday through Saturday" },
];

const inquiryTypes = [
  { label: "Enterprise IT Consulting", desc: "Cloud migration, custom software, digital transformation", icon: Briefcase },
  { label: "Organic Wholesale Sourcing", desc: "Bulk orders, D2C partnerships, farm-to-business supply", icon: Users },
  { label: "Careers & Campus Placement", desc: "Open roles, internship programs, campus drives", icon: Zap },
  { label: "General & Media Inquiries", desc: "Press, partnerships, investor relations, general queries", icon: MessageSquare },
];

function Page() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);

  const [form, setForm] = useState({ name: "", email: "", type: "Enterprise IT Consulting", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent successfully!", { description: "Our team will respond within 24 business hours." });
      setForm({ name: "", email: "", type: "Enterprise IT Consulting", message: "" });
    }, 1800);
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section ref={heroRef} className="relative h-[85svh] min-h-[560px] w-full overflow-hidden">
        <motion.img src={img} alt="Arshith Group corporate office" style={{ y: heroY, scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

        <motion.div aria-hidden className="absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: "var(--brand-gold)" }}
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div aria-hidden className="absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full blur-3xl opacity-15"
          style={{ background: "oklch(0.7 0.15 140)" }}
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />

        <div className="relative z-10 flex h-full items-end pb-24 md:pb-32">
          <div className="container-x text-white">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="kicker mb-6 flex items-center gap-2" style={{ color: "var(--brand-gold)" }}>
              <Sparkles className="w-4 h-4 animate-pulse" /> Get In Touch
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] max-w-5xl">
              Let's shape the future <br /><span className="italic font-medium text-[var(--brand-gold)]">of your business</span>.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 max-w-xl text-base md:text-lg text-white/80 font-light leading-relaxed">
              Partnership ventures, career opportunities, direct sourcing, or custom software — connect with our representatives across South India.
            </motion.p>
          </div>
        </div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center text-white/70 text-[10px] uppercase tracking-[0.3em]"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          Explore Channels
          <motion.div className="mt-3 h-12 w-px bg-white/40 origin-top" animate={{ scaleY: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
        </motion.div>
      </section>

      {/* QUICK CHANNELS */}
      <section className="bg-background py-20 md:py-28 relative border-b border-border">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="md:col-span-5">
              <div className="kicker flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[var(--brand-gold)]" /> Direct Channels</div>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
                Reach us <span className="italic font-medium text-emerald-600">directly</span>.
              </h2>
              <p className="mt-4 text-foreground/75 font-light text-base leading-relaxed">
                Whether you're a prospective enterprise client, an organic wholesale buyer, or a talented developer looking for your next role — our team is ready to assist.
              </p>
            </motion.div>
            <div className="md:col-span-7 space-y-5">
              {channels.map((ch, i) => {
                const Icon = ch.icon;
                const inner = (
                  <motion.div key={ch.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12 }}
                    className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-500/20 transition-all duration-300 flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/40">{ch.label}</span>
                      <h3 className="font-serif text-xl text-primary font-medium mt-0.5 group-hover:text-emerald-700 transition-colors">{ch.value}</h3>
                      <p className="text-xs text-foreground/60 font-light mt-1">{ch.desc}</p>
                    </div>
                    {ch.href && <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all flex-shrink-0" />}
                  </motion.div>
                );
                return ch.href ? <a key={ch.label} href={ch.href}>{inner}</a> : <div key={ch.label}>{inner}</div>;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="bg-secondary/30 py-24 md:py-32 relative border-b border-border">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.02] blur-3xl pointer-events-none" />
        <div className="container-x">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="max-w-3xl mb-16 text-center mx-auto">
            <div className="kicker">Regional Presence</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
              Our <span className="italic font-medium text-emerald-600">South India</span> offices.
            </h2>
            <p className="mt-4 text-foreground/75 font-light text-base md:text-lg">
              Strategically positioned across Karnataka, Andhra Pradesh, and Telangana to serve enterprise clients and agricultural partners alike.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, i) => {
              const Icon = office.icon;
              const colorMap: Record<string, { bg: string; text: string; border: string }> = {
                emerald: { bg: "bg-emerald-50 dark:bg-emerald-950/40", text: "text-emerald-600", border: "hover:border-emerald-500/30" },
                amber: { bg: "bg-amber-50 dark:bg-amber-950/40", text: "text-amber-600", border: "hover:border-amber-500/30" },
                sky: { bg: "bg-sky-50 dark:bg-sky-950/40", text: "text-sky-600", border: "hover:border-sky-500/30" },
              };
              const c = colorMap[office.color];
              return (
                <motion.div key={office.city} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group ${c.border}`}>
                  <div>
                    <div className={`w-11 h-11 rounded-xl ${c.bg} ${c.text} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/40">{office.type}</span>
                    <h3 className="font-serif text-2xl text-primary font-semibold mt-2 mb-1 group-hover:text-emerald-700 transition-colors">{office.city}</h3>
                    <p className="text-xs text-foreground/50 font-light mb-4">{office.region}</p>
                    <p className="text-sm text-foreground/70 font-light leading-relaxed mb-6">{office.desc}</p>
                    <ul className="space-y-2">
                      {office.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-foreground/65 font-light">
                          <CheckCircle className={`w-3.5 h-3.5 ${c.text} flex-shrink-0`} /> {f}
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

      {/* INQUIRY TYPES */}
      <section className="bg-background py-24 md:py-32 relative border-b border-border">
        <div className="container-x">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="max-w-3xl mb-16">
            <div className="kicker flex items-center gap-2"><Shield className="w-3.5 h-3.5 text-[var(--brand-gold)]" /> How Can We Help</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
              Choose your <span className="italic font-medium text-emerald-600">inquiry type</span>.
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inquiryTypes.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card border border-border p-7 rounded-2xl shadow-sm hover:shadow-md hover:border-[var(--brand-gold)]/30 transition-all duration-300 group cursor-default">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950/20 text-[var(--brand-gold)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg text-primary font-medium mb-2 group-hover:text-emerald-700 transition-colors">{item.label}</h3>
                  <p className="text-xs text-foreground/60 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-secondary/40 py-24 md:py-32 relative border-b border-border">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-8">
              <div>
                <div className="kicker flex items-center gap-2"><Send className="w-3.5 h-3.5 text-emerald-500 animate-pulse" /> Send a Message</div>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary leading-tight font-light">
                  Start the <span className="italic font-medium text-emerald-600">conversation</span>.
                </h2>
                <p className="mt-4 text-foreground/75 font-light text-base leading-relaxed">
                  Fill out the form and our team will respond within 24 business hours. All inquiries are handled with absolute confidentiality.
                </p>
              </div>
              <div className="border border-border p-6 rounded-2xl bg-card">
                <span className="text-xs uppercase tracking-widest text-emerald-600 font-mono font-semibold block mb-3">Response Commitment</span>
                <div className="space-y-3">
                  {[
                    "24-hour response on business days",
                    "Dedicated representative assigned",
                    "NDA-ready for sensitive inquiries",
                    "Multi-language support available",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-foreground/70 font-light">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="bg-card border border-border p-8 md:p-10 rounded-3xl shadow-lg space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground/60 block mb-2">Full Name *</label>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/30 text-sm text-primary placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40 transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground/60 block mb-2">Email Address *</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/30 text-sm text-primary placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground/60 block mb-2">Inquiry Type</label>
                  <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/30 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40 transition-all cursor-pointer">
                    {inquiryTypes.map((t) => <option key={t.label} value={t.label}>{t.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground/60 block mb-2">Message *</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project or inquiry..."
                    rows={5} className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/30 text-sm text-primary placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40 transition-all resize-none" />
                </div>
                <button type="submit" disabled={sending}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-white text-sm font-semibold tracking-wide hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer">
                  {sending ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BACK CTA */}
      <section className="bg-secondary py-20">
        <div className="container-x text-center">
          <Link to="/" className="inline-flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-primary border-b border-primary/30 pb-2 hover:text-emerald-600 hover:border-emerald-500 transition-colors">
            <span aria-hidden>←</span> Back to Arshith Group
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
