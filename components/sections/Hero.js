"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn, openCalendly } from "@/lib/utils";
import { ctaOutline, ctaPrimary, radiusCta } from "@/lib/ui-classes";

const heroCtaMobile = "h-14 min-h-14 px-7 text-base sm:h-12 sm:min-h-12 sm:px-6 sm:text-sm";
const heroCtaIcon = "size-[1.125rem] transition-transform group-hover:translate-x-0.5 sm:size-4";

const Hero = () => {
  return (
    <header
      className="relative -mt-24 flex h-[100svh] max-h-[100svh] flex-col overflow-hidden bg-white text-cocoyam sm:-mt-28 lg:-mt-[7.5rem]"
      aria-label="Hero"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 pb-10 text-center sm:px-6 sm:pb-12 lg:max-w-4xl">
        <div className="flex w-full flex-col items-center pt-[5.5rem] sm:pt-[6.25rem] lg:pt-[7.5rem]">
          <div
            className={cn(
              "mb-6 flex overflow-hidden text-base font-semibold ring-1 ring-cocoyam/15 sm:mb-7 sm:text-sm",
              radiusCta
            )}
            role="status"
          >
            <span className="bg-cocoyam-light px-5 py-2.5 text-cocoyam sm:px-4 sm:py-2">
              Open for projects
            </span>
            <span className="bg-white/90 px-5 py-2.5 text-cocoyam/70 backdrop-blur-sm sm:px-4 sm:py-2">
              Lagos · Remote
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.125rem,6.5vw,3.5rem)] font-medium leading-[1.12] tracking-tight text-cocoyam sm:leading-[1.14]">
            <span className="block">We Design &amp; Build</span>
            <span className="mt-1 block italic text-cocoyam">
              what moves your{" "}
              <span className="underline decoration-cocoyam-light decoration-[3px] underline-offset-[0.2em]">
                business
              </span>{" "}
              forward.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-neutral-600 sm:mt-5 sm:text-base md:max-w-xl">
            Websites, mobile apps, and custom tools from technologists,
            designers, and strategists who care about clarity and outcomes.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:mt-8 sm:gap-3">
            <button
              type="button"
              className={cn("group", ctaPrimary, heroCtaMobile)}
              onClick={() => openCalendly()}
            >
              Start a Project
              <ArrowRight className={heroCtaIcon} aria-hidden />
            </button>
            <a
              href="mailto:devteam@hokagecreativelabs.com"
              className={cn("group", ctaOutline, heroCtaMobile)}
            >
              Email Us
              <ArrowRight className={heroCtaIcon} aria-hidden />
            </a>
          </div>

          <Link
            href="/projects"
            className="mt-6 text-base font-semibold text-cocoyam/80 underline decoration-cocoyam/25 underline-offset-4 transition-colors hover:text-cocoyam hover:decoration-cocoyam-light sm:text-sm"
          >
            View our work →
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
