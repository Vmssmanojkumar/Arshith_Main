import { Link } from "@tanstack/react-router";
import ceo from "@/assets/ceo.png";

export function Leadership() {
  return (
    <section
      id="leadership"
      className="relative py-24 md:py-32 bg-[var(--brand-navy-deep)] text-white overflow-hidden"
    >
      <div className="container-x grid md:grid-cols-12 gap-12 items-center relative z-10">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={ceo}
              alt="Farook N, CEO Arshith Group"
              width={800}
              height={1024}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy-deep)]/80 to-transparent" />
          </div>
        </div>

        <div className="md:col-span-7 md:pl-8">
          <div className="kicker">Chairman's Message</div>
          <blockquote className="mt-8 font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] font-light">
            <span className="text-[var(--brand-gold)] font-serif text-6xl leading-none align-top mr-1">
              "
            </span>
            Growth is not just about business — it is about creating value,
            empowering people, and making a meaningful impact every day. It is
            about building trust and shaping a future driven by progress.
          </blockquote>
          
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="h-px w-12 bg-[var(--brand-gold)]" />
              <div>
                <div className="font-serif text-xl">Farook N</div>
                <div className="text-xs uppercase tracking-widest text-white/60 mt-1">
                  Chief Executive Officer, Arshith Group
                </div>
              </div>
            </div>

            <Link
              to="/ceo"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-[var(--brand-gold)] text-[var(--brand-gold)] text-xs font-semibold uppercase tracking-wider hover:bg-[var(--brand-gold)] hover:text-[#0F172A] transition-all duration-300 shadow-lg shadow-[var(--brand-gold)]/5"
            >
              <span>Full Details</span>
              <span className="text-sm">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute -right-32 -bottom-32 h-[400px] w-[400px] rounded-full bg-[var(--brand-gold)]/10 blur-3xl" />
    </section>
  );
}
