import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { openCalendly } from "@/lib/utils";

const Hero = () => {
  return (
    <header className="relative min-h-[90vh] bg-[#0A0118] text-white overflow-hidden flex items-center justify-center" aria-label="Hero">
      {/* Decorative SVG Pattern Background (non-blocking for LCP) */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" className="w-full h-full" style={{ opacity: 0.07 }} focusable="false" aria-hidden="true">
          <defs>
            <pattern id="pattern-circles" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="#fff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[1.05] max-w-7xl mb-6" itemProp="headline">
          Where Ideas Become <span className="text-[#7FF41A]">Impossible</span> Realities
        </h1>
        <p className="mb-10 max-w-xl text-xl text-white/80 leading-relaxed" itemProp="description">
          That vision stuck in your head? We give it breath, pixels, and a pulse. Watch your idea transform into something people can actually touch, use, and fall in love with.
        </p>
        <nav aria-label="Hero CTA" className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center">
          <Button
            size="lg"
            className="bg-white text-[#21083F] hover:bg-[#21083F] hover:text-white font-semibold"
            aria-label="Book a Consultation"
            onClick={() => openCalendly()}
          >
            Book a Consultation
          </Button>
          <Link href="/projects">
            <Button variant="ghost" size="lg" className="border border-white flex items-center gap-2 text-base" aria-label="View Our Work">
              View Our Work <span className="text-2xl" aria-hidden="true">→</span>
            </Button>
          </Link>
        </nav>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs text-white/40 tracking-widest" aria-hidden="true">
        SCROLL
        <div className="mt-2 flex justify-center">
          <span className="block w-[1px] h-6 bg-white/30" />
        </div>
      </div>
    </header>
  );
};

export default Hero;