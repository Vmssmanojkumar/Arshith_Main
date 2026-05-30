import { useEffect, useRef } from "react";
import hero from "@/assets/hero_main.png";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Floating particle system — glowing emerald & gold dots
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Array<{
      x: number; y: number;
      vx: number; vy: number;
      size: number; opacity: number;
      color: string; pulse: number; pulseSpeed: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const init = () => {
      resize();
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const count = Math.min(80, Math.floor((w * h) / 12000));
      particles = [];

      for (let i = 0; i < count; i++) {
        const isGold = Math.random() > 0.6;
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.3 - 0.15, // slight upward drift
          size: Math.random() * 2.5 + 0.8,
          opacity: Math.random() * 0.5 + 0.1,
          color: isGold ? "186, 140, 50" : "16, 185, 129",
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.02,
        });
      }
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.06;
            ctx.strokeStyle = `rgba(186, 140, 50, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        // Wrap around
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        const pulseOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));

        // Glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        grad.addColorStop(0, `rgba(${p.color}, ${pulseOpacity * 0.4})`);
        grad.addColorStop(1, `rgba(${p.color}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = `rgba(${p.color}, ${pulseOpacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", init);

    return () => {
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[700px] w-full overflow-hidden bg-[#070a12]">

      {/* Layer 1: Ken Burns animated background image */}
      <div className="absolute inset-0 hero-ken-burns">
        <img
          src={hero}
          alt="Arshith Group — multi-industry conglomerate"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Layer 2: Animated color-shifting gradient overlay */}
      <div className="absolute inset-0 hero-gradient-shift pointer-events-none" />

      {/* Layer 3: Directional cinematic vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(7,10,18,0.85) 100%),
            linear-gradient(to top, rgba(7,10,18,0.95) 0%, transparent 45%),
            linear-gradient(to right, rgba(7,10,18,0.6) 0%, transparent 50%)
          `,
        }}
      />

      {/* Layer 4: Floating particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
      />

      {/* Layer 5: Animated horizontal scan line (subtle) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[3]">
        <div className="hero-scanline absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-end pb-24 md:pb-32">
        <div className="container-x text-white">

          {/* Animated kicker */}
          <div className="hero-fade-up opacity-0 mb-6">
            <div className="kicker text-[var(--brand-gold)] inline-flex items-center gap-3">
              <span className="block w-8 h-px bg-[var(--brand-gold)] hero-line-grow" />
              Arshith Group
            </div>
          </div>

          {/* Headline with staggered word reveal */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light leading-[0.95] max-w-5xl overflow-hidden">
            <span className="hero-word-reveal inline-block">Growth</span>{" "}
            <span className="hero-word-reveal inline-block" style={{ animationDelay: "0.15s" }}>is</span>{" "}
            <span className="hero-word-reveal inline-block italic font-medium" style={{ animationDelay: "0.3s" }}>Value</span>
          </h1>

          {/* Paragraph fade */}
          <p className="hero-fade-up opacity-0 mt-8 max-w-xl text-base md:text-lg text-white/80 font-light leading-relaxed" style={{ animationDelay: "0.6s" }}>
            A diversified Indian enterprise across e-commerce, technology and
            consulting — building trust, empowering people, and shaping a
            future driven by progress.
          </p>

          {/* CTA buttons */}
          <div className="hero-fade-up opacity-0 mt-10 flex flex-wrap gap-4" style={{ animationDelay: "0.85s" }}>
            <a
              href="#businesses"
              className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 text-sm font-medium tracking-wide hover:bg-[var(--brand-gold)] hover:text-white transition-colors"
            >
              Explore our businesses
              <span aria-hidden>→</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-3 border border-white/40 text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
            >
              About Arshith
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center text-white/70 text-[10px] uppercase tracking-[0.3em]">
        Scroll
        <div className="mt-3 h-12 w-px bg-white/40 hero-scroll-pulse" />
      </div>

      {/* All cinematic animation keyframes */}
      <style>{`
        /* Ken Burns — slow cinematic zoom & pan */
        .hero-ken-burns {
          animation: kenBurns 25s ease-in-out infinite alternate;
        }
        @keyframes kenBurns {
          0%   { transform: scale(1.0)  translate(0%, 0%); }
          25%  { transform: scale(1.08) translate(-1%, -0.5%); }
          50%  { transform: scale(1.12) translate(0.5%, -1%); }
          75%  { transform: scale(1.06) translate(-0.5%, 0.5%); }
          100% { transform: scale(1.1)  translate(1%, -0.5%); }
        }

        /* Animated color-shifting gradient overlay */
        .hero-gradient-shift {
          background: linear-gradient(
            135deg,
            rgba(7, 10, 18, 0.7) 0%,
            rgba(16, 185, 129, 0.08) 30%,
            rgba(186, 140, 50, 0.06) 60%,
            rgba(7, 10, 18, 0.8) 100%
          );
          background-size: 300% 300%;
          animation: gradShift 12s ease-in-out infinite;
        }
        @keyframes gradShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Horizontal scan line sweep */
        .hero-scanline {
          animation: scanLine 6s linear infinite;
        }
        @keyframes scanLine {
          0%   { top: -2%; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 102%; opacity: 0; }
        }

        /* Staggered word reveal — slides up from below */
        .hero-word-reveal {
          animation: wordReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: translateY(100%);
        }
        @keyframes wordReveal {
          to { opacity: 1; transform: translateY(0); }
        }

        /* General fade-up entrance */
        .hero-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Kicker line grow */
        .hero-line-grow {
          animation: lineGrow 1s ease-out 0.1s forwards;
          transform-origin: left;
          transform: scaleX(0);
        }
        @keyframes lineGrow {
          to { transform: scaleX(1); }
        }

        /* Scroll indicator pulse */
        .hero-scroll-pulse {
          animation: scrollPulse 2.5s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(0.3); opacity: 0.4; }
          50%      { transform: scaleY(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
