"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data";

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const show = () => setVisible(true);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show();
      return undefined;
    }

    const fallback = window.setTimeout(show, 1200);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
          window.clearTimeout(fallback);
        }
      },
      { threshold: Math.min(threshold, 0.1), rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [threshold]);

  return { ref, visible };
}

function QuoteMark({ className, accented = false }) {
  return (
    <span
      className={cn(
        "pointer-events-none font-display text-[4.5rem] font-medium leading-none sm:text-[5rem]",
        accented ? "text-cocoyam-light/70" : "text-cocoyam/12",
        className
      )}
      aria-hidden
    >
      &ldquo;
    </span>
  );
}

function TestimonialCard({
  item,
  index,
  accented = false,
  compact = false,
  className,
}) {
  const { ref, visible } = useReveal(0.12);

  return (
    <li
      ref={ref}
      className={cn(
        "list-none transition-all duration-700 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className
      )}
      style={{ transitionDelay: visible ? `${80 + index * 90}ms` : "0ms" }}
    >
      <figure
        className={cn(
          "flex h-full flex-col",
          compact ? "rounded-2xl border p-6 sm:p-7" : "rounded-2xl p-7 sm:rounded-3xl sm:p-9 lg:p-10",
          accented
            ? "border-cocoyam bg-cocoyam text-white shadow-[0_24px_60px_-20px_rgba(33,8,63,0.45)]"
            : "border-cocoyam/10 bg-white hover:border-cocoyam/18 hover:shadow-[0_20px_50px_-30px_rgba(33,8,63,0.18)]"
        )}
        itemScope
        itemType="https://schema.org/Review"
      >
        <QuoteMark accented={accented} className={compact ? "-mb-4 sm:-mb-5" : "-mb-5 sm:-mb-6"} />

        <blockquote
          className={cn(
            "flex-1 font-display font-medium leading-snug tracking-tight",
            compact
              ? "text-[1.35rem] sm:text-[1.45rem]"
              : "text-[clamp(1.5rem,3vw,2.25rem)]",
            accented ? "text-white" : "text-cocoyam"
          )}
          itemProp="reviewBody"
        >
          {item.quote}
        </blockquote>

        <figcaption
          className={cn(
            "mt-6 border-t pt-5 sm:mt-7 sm:pt-6",
            accented ? "border-white/15" : "border-cocoyam/[0.08]"
          )}
        >
          <cite
            className={cn(
              "not-italic font-semibold",
              compact ? "text-sm sm:text-[15px]" : "text-base",
              accented ? "text-white" : "text-cocoyam"
            )}
            itemProp="author"
          >
            {item.name}
          </cite>
          <p
            className={cn(
              "mt-1 text-sm",
              accented ? "text-white/55" : "text-cocoyam/50"
            )}
          >
            {item.title}
          </p>
        </figcaption>
      </figure>
    </li>
  );
}

export default function Testimonials() {
  const { ref: headerRef, visible: headerVisible } = useReveal(0.15);
  const [featured, ...supporting] = testimonials;

  return (
    <section
      id="testimonials-heading"
      className="bg-white text-cocoyam"
      aria-labelledby="testimonials-title"
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
            Testimonials
          </p>
          <h2
            id="testimonials-title"
            className="mt-5 font-display text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.06] tracking-tight"
          >
            Proof from the people we{" "}
            <span className="italic underline decoration-cocoyam-light decoration-[3px] underline-offset-[0.14em]">
              build with.
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cocoyam/60 sm:text-lg">
            Real feedback from partners who trusted us to ship brands, products,
            and platforms that hold up in the real world.
          </p>
        </header>

        <ul
          className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-12 lg:grid-rows-2 lg:gap-8"
          aria-label="Client testimonials"
        >
          <TestimonialCard
            item={featured}
            index={0}
            accented
            className="lg:col-span-7 lg:row-span-2"
          />
          {supporting.map((item, i) => (
            <TestimonialCard
              key={item.name}
              item={item}
              index={i + 1}
              compact
              className="lg:col-span-5"
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
