"use client";

import Link from "next/link";
import { services } from "@/data";
import { Button } from "@/components/ui/button";
import { openCalendly } from "@/lib/utils";
import FAQ from "@/components/sections/FAQ";

export default function ServicesPage() {
  return (
    <div className="bg-white text-cocoyam">
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:py-28">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cocoyam/45">
            Services
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.25rem)] font-medium leading-[1.08] tracking-tight">
            Everything we offer
          </h1>
          <p className="mt-5 text-base leading-relaxed text-cocoyam/60 sm:text-lg">
            From brand identity design to custom tools—here&apos;s the full picture of
            how we help ambitious teams ship.
          </p>
        </header>

        <ul className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
          {services.map((item) => (
            <li key={item.key} className="list-none">
              <article className="flex h-full flex-col rounded-2xl border border-cocoyam/10 bg-white p-6 sm:p-8">
                <div className="mb-6 flex items-end justify-between gap-4 border-b border-cocoyam/[0.08] pb-5">
                  <p className="max-w-[60%] text-xs font-semibold uppercase tracking-[0.18em] text-cocoyam/55 sm:text-sm sm:tracking-[0.2em]">
                    {item.label}
                  </p>
                  <span
                    className="pointer-events-none shrink-0 font-display text-[3.25rem] font-medium leading-[0.85] text-cocoyam/[0.08]"
                    aria-hidden
                  >
                    {item.number}
                  </span>
                </div>
                <span
                  className="mb-4 block h-0.5 w-10 rounded-full bg-cocoyam-light"
                  aria-hidden
                />
                <h2 className="font-display text-[1.35rem] font-medium leading-snug text-cocoyam sm:text-[1.5rem]">
                  {item.title}
                </h2>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-cocoyam/65 sm:text-base">
                  {item.desc}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <Button
            type="button"
            onClick={openCalendly}
            className="h-12 rounded-full bg-cocoyam px-8 text-base font-semibold text-white hover:bg-cocoyam/90"
          >
            Start a project
          </Button>
          <Link
            href="/contact"
            className="text-sm font-semibold text-cocoyam/70 underline-offset-4 hover:text-cocoyam hover:underline"
          >
            Or send a brief →
          </Link>
        </div>
      </section>
      <FAQ />
    </div>
  );
}
