const Philosophy = () => {
  return (
    <section className="bg-cocoyam text-white px-6 py-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <span className="text-xs tracking-widest text-white/60 uppercase font-sans">
            Our Creed
          </span>
          <h2 className="mt-3 text-5xl md:text-6xl font-bold font-sans">
            Philosophy
          </h2>
          <p className="mt-6 max-w-xl text-white/70 text-lg leading-relaxed font-sans">
            We believe in the intersection of art and engineering. We don&apos;t
            just build websites; we build digital legacies.
          </p>
        </div>

        {/* Principles */}
        <div className="space-y-24">
          {/* Item 01 */}
          <div className="flex flex-col md:flex-row md:items-start md:gap-8">
            <div className="flex-shrink-0 text-white/40 text-sm md:w-12 mb-2 md:mb-0 font-mono">
              01
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:w-full">
              <h3 className="text-3xl font-semibold mb-2 md:mb-0 md:w-1/3 font-sans">
                Technology is Magic
              </h3>
              <p className="max-w-2xl text-white/70 leading-relaxed md:w-2/3 md:pl-8 font-sans">
                We build digital experiences that feel indistinguishable from
                magic. Every interaction is crafted to surprise and delight
                users, pushing the boundaries of what is possible on the web.
                It is not enough to simply function; software must enchant.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10" />

          {/* Item 02 */}
          <div className="flex flex-col md:flex-row md:items-start md:gap-8">
            <div className="flex-shrink-0 text-white/40 text-sm md:w-12 mb-2 md:mb-0 font-mono">
              02
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:w-full">
              <h3 className="text-3xl font-semibold mb-2 md:mb-0 md:w-1/3 font-sans">
                Design for Humans
              </h3>
              <p className="max-w-2xl text-white/70 leading-relaxed md:w-2/3 md:pl-8 font-sans">
                Empathy is our primary tool. We design not just for screens, but
                for the people staring at them. Usability and accessibility are
                never afterthoughts; they are the foundation. We strip away the
                unnecessary to reveal the essential.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10" />

          {/* Item 03 */}
          <div className="flex flex-col md:flex-row md:items-start md:gap-8">
            <div className="flex-shrink-0 text-white/40 text-sm md:w-12 mb-2 md:mb-0 font-mono">
              03
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:w-full">
              <h3 className="text-3xl font-semibold mb-2 md:mb-0 md:w-1/3 font-sans">
                Speed Matters
              </h3>
              <p className="max-w-2xl text-white/70 leading-relaxed md:w-2/3 md:pl-8 font-sans">
                Performance is a feature. We optimize every line of code to
                ensure instant load times and buttery smooth animations.
                Respecting the user&apos;s time is the ultimate sign of quality.
                Lag is the enemy of immersion.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <p className="text-lg mb-4 font-sans">Ready to create magic?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-cocoyam-light hover:gap-3 transition-all font-sans"
          >
            Start a project with us →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
