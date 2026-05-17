"use client";

import { ArrowRight } from "lucide-react";
import { cn, openCalendly } from "@/lib/utils";
import { ctaPrimary, ctaSizeMd } from "@/lib/ui-classes";

export default function ProjectsCTA() {
  return (
    <section
      className="border-t border-cocoyam/10 bg-white text-cocoyam"
      aria-labelledby="projects-cta-title"
    >
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-6 sm:py-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cocoyam/45">
          Next step
        </p>
        <h2
          id="projects-cta-title"
          className="mt-5 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-snug tracking-tight"
        >
          Ready to start your own{" "}
          <span className="italic underline decoration-cocoyam-light decoration-[3px] underline-offset-[0.14em]">
            project?
          </span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-cocoyam/60 sm:text-lg">
          Book a free consultation. We&apos;ll talk goals, scope, and timeline—then
          share a clear recommendation on how we can help.
        </p>
        <button
          type="button"
          className={cn("group mt-8", ctaPrimary, ctaSizeMd)}
          onClick={() => openCalendly()}
        >
          Book a free consultation
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </button>
      </div>
    </section>
  );
}
