import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-[#21083F] text-white overflow-hidden flex items-center justify-center">
      {/* Faint SVG Pattern Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" className="w-full h-full" style={{ opacity: 0.07 }}>
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
      />

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[1.05] max-w-7xl mb-6">
          Where Ideas Become <span className="text-[#7FF41A]">Impossible</span> Realities
        </h1>
        <p className="mb-10 max-w-xl text-xl text-white/80 leading-relaxed">
          That vision stuck in your head? We give it breath, pixels, and a pulse. Watch your idea transform into something people can actually touch, use, and fall in love with.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#7FF41A] text-[#21083F] px-8 py-4 text-base font-semibold rounded-md shadow hover:bg-[#aaff4a] transition"
          >
            Start a Project
          </Link>
          <Link
            href="/projects"
            className="text-base text-white/90 hover:text-[#7FF41A] flex items-center gap-2 px-6 py-4"
          >
            View Our Work <span className="text-2xl">→</span>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs text-white/40 tracking-widest">
        SCROLL
        <div className="mt-2 flex justify-center">
          <span className="block w-[1px] h-6 bg-white/30" />
        </div>
      </div>
    </section>
  );
};

export default Hero;