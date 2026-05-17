"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn, openCalendly } from "@/lib/utils";
import { ctaPrimary, ctaSizeMd } from "@/lib/ui-classes";

const steps = [
  {
    number: "01",
    label: "Discover",
    title: "Learn the landscape",
    desc: "We study your goals, audience, and constraints so every decision that follows has a reason.",
  },
  {
    number: "02",
    label: "Define",
    title: "Shape the blueprint",
    desc: "Flows, structure, and visual direction mapped clearly before build begins.",
  },
  {
    number: "03",
    label: "Build",
    title: "Ship in the open",
    desc: "Design and development in tight cycles. You see working product, not slide decks.",
  },
  {
    number: "04",
    label: "Launch",
    title: "Go live, stay close",
    desc: "QA, deployment, and handoff. We remain involved until what ships actually works.",
  },
];

function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function StepCard({ item, accented = false }) {
  return (
    <article
      className={cn(
        "relative flex h-full min-w-0 flex-col bg-cocoyam px-5 py-8 sm:px-7 sm:py-9 lg:px-6 lg:py-10 xl:px-8",
        accented && "lg:bg-white/[0.04]"
      )}
      itemScope
      itemType="https://schema.org/HowToStep"
    >
      {accented && (
        <span
          className="absolute inset-x-5 top-0 h-0.5 bg-cocoyam-light sm:inset-x-7 lg:inset-x-6 xl:inset-x-8"
          aria-hidden
        />
      )}

      <span
        className={cn(
          "font-display text-[clamp(2.75rem,10vw,4.5rem)] font-medium leading-none tracking-tight",
          accented ? "text-cocoyam-light" : "text-white/25"
        )}
        aria-hidden
      >
        {item.number}
      </span>

      <div className="mt-5 flex flex-1 flex-col sm:mt-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
          {item.label}
        </p>
        <h3
          className="mt-2 font-display text-xl font-medium leading-snug text-white sm:mt-3 sm:text-2xl"
          itemProp="name"
        >
          {item.title}
        </h3>
        <p
          className="mt-2.5 flex-1 text-sm leading-relaxed text-white/65 sm:mt-3 sm:text-[15px]"
          itemProp="text"
        >
          {item.desc}
        </p>
      </div>
    </article>
  );
}

export default function OurProcess() {
  const { ref: headerRef, visible: headerVisible } = useReveal(0.15);
  const { ref: panelRef, visible: panelVisible } = useReveal(0.08);

  return (
    <section
      id="ourprocess-heading"
      className="bg-white text-cocoyam"
      aria-labelledby="our-process-title"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
        <header
          ref={headerRef}
          className={cn(
            "mx-auto max-w-3xl text-center transition-all duration-700 ease-out",
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cocoyam/45">
            How we work
          </p>
          <h2
            id="our-process-title"
            className="mt-5 font-display text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.06] tracking-tight"
          >
            A straight line from{" "}
            <span className="italic underline decoration-cocoyam-light decoration-[3px] underline-offset-[0.14em]">
              brief to launch.
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cocoyam/60 sm:text-lg">
            Four phases, clear ownership, and steady momentum. Minimal process,
            maximum clarity.
          </p>
        </header>

        <div
          ref={panelRef}
          className={cn(
            "mt-14 transition-all duration-700 ease-out delay-100 sm:mt-16",
            panelVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
            <div className="overflow-hidden rounded-2xl bg-cocoyam shadow-[0_32px_80px_-24px_rgba(33,8,63,0.45)] sm:rounded-3xl">
              <ol
                className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4"
                aria-label="Our process"
              >
                {steps.map((item, index) => (
                  <li key={item.number} className="min-w-0 list-none">
                    <StepCard
                      item={item}
                      accented={index === steps.length - 1}
                    />
                  </li>
                ))}
              </ol>

              <div
                className="hidden grid-cols-4 gap-px border-t border-white/10 bg-white/10 lg:grid"
                aria-hidden
              >
                {steps.map((item) => (
                  <span
                    key={item.number}
                    className="bg-cocoyam px-6 py-5 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35 lg:px-7 lg:py-6 xl:px-9"
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
        </div>

        <div className="mt-12 flex justify-center sm:mt-14">
          <button
            type="button"
            className={cn("group", ctaPrimary, ctaSizeMd)}
            onClick={() => openCalendly()}
          >
            Start a project
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </button>
        </div>
      </div>
    </section>
  );
}
