import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <div className="bg-background pt-20">
      <footer className="bg-[#131314] w-full text-white pt-8 lg:pt-12 pb-8 lg:pb-12 px-4 sm:px-8 md:px-16 lg:px-28 rounded-tl-3xl rounded-tr-3xl overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-12">
          <div className="lg:col-span-3 space-y-6">
            <Link to="/" className="block">
              <div className="flex items-center gap-2">
                <div className="size-9 rounded-xl bg-gradient-to-br from-[#12284b] to-[#1e3a5f] flex items-center justify-center font-serif text-lg font-bold text-white">
                  A
                </div>
                <span className="font-serif text-2xl font-bold tracking-tight">Arshith</span>
              </div>
            </Link>
            <p className="text-sm/6 text-neutral-300 max-w-xl font-light">
              Arshith Group is a diversified enterprise focused on sustainable commerce, enterprise technology, digital innovation, and community-driven growth. We build scalable ecosystems that empower businesses, farmers, students, and consumers through technology and responsible entrepreneurship.
            </p>
            <div className="flex gap-5 md:gap-6 order-1 md:order-2">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/arshith_fresh/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              {/* Linkedin */}
              <a 
                href="https://in.linkedin.com/company/arshith-fresh-india-pvt-ltd" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              {/* Youtube */}
              <a 
                href="https://www.youtube.com/@VamikaDurbar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-28 items-start">
            {/* Verticals */}
            <div>
              <h3 className="font-serif font-semibold text-sm mb-4">Verticals</h3>
              <ul className="space-y-3 text-sm text-neutral-300 font-light">
                <li><a href="https://arshithfresh.com/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400">ArshithFresh</a></li>
                <li><a href="https://suntechorganization.com/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400">Suntech Org</a></li>
                <li><a href="https://seller.arshithfresh.com/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400">Multi Sellers</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-serif font-semibold text-sm mb-4">Resources</h3>
              <ul className="space-y-3 text-sm text-neutral-300 font-light">
                <li><Link to="/about" className="hover:text-neutral-400">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-neutral-400">Contact Us</Link></li>
                <li><Link to="/leadership" className="hover:text-neutral-400">Open Roles</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-serif font-semibold text-sm mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-neutral-300 font-light">
                <li><Link to="/about" className="hover:text-neutral-400">Our Vision</Link></li>
                <li className="flex flex-row items-center gap-2 flex-nowrap whitespace-nowrap">
                  <Link to="/leadership" className="hover:text-neutral-400 whitespace-nowrap">Careers</Link>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-green-950 border border-green-300 text-green-300 font-medium whitespace-nowrap">HIRING</span>
                </li>
                <li><Link to="/about" className="hover:text-neutral-400">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-4 border-t border-neutral-700 flex flex-col sm:flex-row justify-between items-center gap-2 relative z-10">
          <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} Arshith Group</p>
          <p className="text-sm text-neutral-400">All rights reserved.</p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-3xl h-full max-h-64 bg-emerald-500 rounded-full blur-[170px] pointer-events-none opacity-20"></div>
          <h1 className="text-center font-serif font-extrabold leading-none text-white/35 text-[clamp(3rem,15vw,15rem)] mt-6 select-none pointer-events-none translate-y-0">
            ARSHITH
          </h1>
        </div>
      </footer>
    </div>
  );
}
