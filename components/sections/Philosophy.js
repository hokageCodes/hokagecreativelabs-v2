"use client";
import { Button } from "@/components/ui/button";
import { openCalendly } from "@/lib/utils";
const principles = [
  {
    number: "01",
    title: "Technology is Magic",
    desc: "We build digital experiences that feel indistinguishable from magic. Every interaction is crafted to surprise and delight users, pushing the boundaries of what is possible on the web. It is not enough to simply function; software must enchant."
  },
  {
    number: "02",
    title: "Design for Humans",
    desc: "Empathy is our primary tool. We design not just for screens, but for the people staring at them. Usability and accessibility are never afterthoughts; they are the foundation. We strip away the unnecessary to reveal the essential."
  },
  {
    number: "03",
    title: "Speed Matters",
    desc: "Performance is a feature. We optimize every line of code to ensure instant load times and buttery smooth animations. Respecting the user's time is the ultimate sign of quality. Lag is the enemy of immersion."
  }
];

const Philosophy = () => {
  return (
    <section className="bg-white text-[#21083F] px-6 py-12" aria-labelledby="philosophy-heading">
      <div className="max-w-6xl mx-auto">
        <header className="mb-24 flex flex-col items-center text-center">
          <h2 id="philosophy-heading" className="mt-3 text-5xl md:text-6xl font-bold font-sans">
            Philosophy
          </h2>
          <p className="mt-6 max-w-xl text-[#21083F]/80 text-lg leading-relaxed font-sans">
            We believe in the intersection of art and engineering. We don&apos;t just build websites; we build digital legacies.
          </p>
        </header>

        <div className="space-y-24" aria-label="Principles">
          {principles.map((item, idx) => (
            <article key={item.number} className="flex flex-col md:flex-row md:items-start md:gap-8" itemScope itemType="https://schema.org/CreativeWork">
              <div className="flex-shrink-0 text-[#6B7280] text-sm md:w-12 mb-2 md:mb-0 font-mono" aria-hidden="true">
                {item.number}
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:w-full">
                <h3 className="text-3xl font-semibold mb-2 md:mb-0 md:w-1/3 font-sans" itemProp="headline">{item.title}</h3>
                <p className="max-w-2xl text-[#21083F]/80 leading-relaxed md:w-2/3 md:pl-8 font-sans" itemProp="description">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 w-full flex flex-col items-center justify-center">
          <p className="text-lg mb-4 font-sans text-center">Ready to create magic?</p>
          <Button
            size="lg"
            className="font-semibold mx-auto block"
            onClick={openCalendly}
          >
            Book a Consultation →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
