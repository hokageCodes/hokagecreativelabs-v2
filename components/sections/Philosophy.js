"use client";

import { useEffect, useRef, useState } from "react";

const principles = [
  {
    number: "01",
    label: "Experience",
    title: "Make it feel like magic",
    desc: "Great software should feel inevitable—like it couldn't have been built any other way. We chase interactions that are expressive, intuitive, and quietly unforgettable.",
  },
  {
    number: "02",
    label: "People",
    title: "Design for humans first",
    desc: "We design for real contexts, real constraints, and real people. Clarity and accessibility aren't polish; they're the product.",
  },
  {
    number: "03",
    label: "Performance",
    title: "Speed is respect",
    desc: "Fast loads and smooth motion tell users you value their time. Performance isn't a phase in the roadmap, it's how trust gets built.",
  },
];

function useReveal(threshold = 0.15) {
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
      { threshold, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function PrincipleCard({ item, index, accented = false }) {
  const { ref, visible } = useReveal(0.12);

  return (
    <li ref={ref} className="list-none">
      <article
        className={[
          "flex h-full flex-col rounded-2xl border p-6 transition-[opacity,transform,box-shadow,border-color] duration-700 ease-out sm:p-8",
          accented
            ? "border-cocoyam bg-cocoyam text-white hover:border-cocoyam hover:shadow-[0_24px_60px_-20px_rgba(33,8,63,0.45)]"
            : "border-cocoyam/10 bg-white hover:border-cocoyam/18 hover:shadow-[0_20px_50px_-30px_rgba(33,8,63,0.2)]",
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        ].join(" ")}
        style={{ transitionDelay: visible ? `${80 + index * 70}ms` : "0ms" }}
      >
        <span className="sr-only">
          Principle {item.number}: {item.label}
        </span>
        <div
          className={[
            "mb-6 flex items-end justify-between gap-4 border-b pb-5",
            accented ? "border-white/15" : "border-cocoyam/[0.08]",
          ].join(" ")}
        >
          <p
            className={[
              "max-w-[60%] text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.2em]",
              accented ? "text-white/55" : "text-cocoyam/55",
            ].join(" ")}
          >
            {item.label}
          </p>
          <span
            className={[
              "pointer-events-none shrink-0 font-display text-[3.25rem] font-medium leading-[0.85] sm:text-[3.5rem]",
              accented ? "text-cocoyam-light/55" : "text-cocoyam/20",
            ].join(" ")}
            aria-hidden
          >
            {item.number}
          </span>
        </div>

        <span
          className="mb-4 block h-0.5 w-10 shrink-0 rounded-full bg-cocoyam-light"
          aria-hidden
        />

        <h3
          className={[
            "font-display text-[1.35rem] font-medium leading-snug sm:text-[1.5rem] lg:text-[1.625rem]",
            accented ? "text-white" : "text-cocoyam",
          ].join(" ")}
        >
          {item.title}
        </h3>
        <p
          className={[
            "mt-4 flex-1 text-[15px] leading-relaxed sm:text-base",
            accented ? "text-white/70" : "text-cocoyam/65",
          ].join(" ")}
        >
          {item.desc}
        </p>
      </article>
    </li>
  );
}

const Philosophy = () => {
  const { ref: headerRef, visible: headerVisible } = useReveal(0.2);

  return (
    <section
      id="philosophy-heading"
      className="bg-white text-cocoyam"
      aria-labelledby="philosophy-title"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
        <header
          ref={headerRef}
          className={[
            "mx-auto max-w-2xl text-center transition-all duration-700 ease-out",
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          ].join(" ")}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cocoyam/45">
            Philosophy
          </p>
          <h2
            id="philosophy-title"
            className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-tight"
          >
            <span className="underline decoration-cocoyam-light decoration-[3px] underline-offset-[0.2em]">
              Good enough
            </span>{" "}
            isn&apos;t in our{" "}
            <span className="italic text-cocoyam">vocabulary.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cocoyam/60 sm:text-lg">
            Three beliefs guide every brand identity design, product, and custom tool we ship—
            whether it lives in a browser, in your pocket, or behind the scenes.
          </p>
        </header>

        <ul
          className="mt-14 grid gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-3"
          aria-label="Our principles"
        >
          {principles.map((item, index) => (
            <PrincipleCard
              key={item.number}
              item={item}
              index={index}
              accented={index === principles.length - 1}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Philosophy;
