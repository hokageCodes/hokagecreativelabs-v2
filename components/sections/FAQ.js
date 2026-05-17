"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn, openCalendly } from "@/lib/utils";
import { faqs } from "@/data";
import { ctaPrimary, ctaSizeMd } from "@/lib/ui-classes";

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

function FaqItem({ item, index, isOpen, onToggle }) {
  const { ref, visible } = useReveal(0.1);

  return (
    <li
      ref={ref}
      className={cn(
        "list-none border-b border-cocoyam/10 transition-all duration-700 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      )}
      style={{ transitionDelay: visible ? `${60 + index * 50}ms` : "0ms" }}
    >
      <Collapsible open={isOpen} onOpenChange={(open) => onToggle(open ? index : null)}>
        <div className="grid grid-cols-[auto_1fr] gap-4 py-6 sm:gap-6 sm:py-7 lg:py-8">
          <span
            className="pointer-events-none pt-1 font-display text-[1.75rem] font-medium leading-none tracking-tight text-cocoyam/20 sm:text-[2rem]"
            aria-hidden
          >
            {item.number}
          </span>

          <div className="min-w-0">
            <CollapsibleTrigger
              className={cn(
                "group flex w-full items-start justify-between gap-4 text-left",
                "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cocoyam-light focus-visible:ring-offset-2"
              )}
            >
              <span className="font-display text-[clamp(1.2rem,2.5vw,1.65rem)] font-medium leading-snug tracking-tight text-cocoyam">
                {item.question}
              </span>
              <span
                className={cn(
                  "mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                  isOpen
                    ? "border-cocoyam bg-cocoyam text-white"
                    : "border-cocoyam/15 bg-white text-cocoyam group-hover:border-cocoyam/30"
                )}
                aria-hidden
              >
                <Plus
                  className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    isOpen && "rotate-45"
                  )}
                />
              </span>
            </CollapsibleTrigger>

            <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <p className="pr-12 pt-4 text-base leading-relaxed text-cocoyam/60 sm:pr-14 sm:pt-5 sm:text-[17px]">
                {item.answer}
              </p>
            </CollapsibleContent>
          </div>
        </div>
      </Collapsible>
    </li>
  );
}

export default function FAQ() {
  const { ref: headerRef, visible: headerVisible } = useReveal(0.15);
  const { ref: listRef, visible: listVisible } = useReveal(0.08);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq-heading"
      className="bg-white text-cocoyam"
      aria-labelledby="faq-title"
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
            Questions
          </p>
          <h2
            id="faq-title"
            className="mt-5 font-display text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.06] tracking-tight"
          >
            What{" "}
            <span className="italic underline decoration-cocoyam-light decoration-[3px] underline-offset-[0.14em]">
              you
            </span>{" "}
            might be wondering.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cocoyam/60 sm:text-lg">
            Common questions about what we build, how we work, and what it takes
            to get started.
          </p>
        </header>

        <div
          ref={listRef}
          className={cn(
            "mx-auto mt-14 max-w-3xl transition-all duration-700 ease-out delay-100 sm:mt-16",
            listVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <ul className="border-t border-cocoyam/10" aria-label="Frequently asked questions">
            {faqs.map((item, index) => (
              <FaqItem
                key={item.number}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={setOpenIndex}
              />
            ))}
          </ul>
        </div>

        <div className="mt-12 flex justify-center sm:mt-14">
          <button
            type="button"
            className={cn("group", ctaPrimary, ctaSizeMd)}
            onClick={() => openCalendly()}
          >
            Book a free consultation
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
