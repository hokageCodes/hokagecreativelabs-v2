"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  companyIntro,
  companyMission,
  companyStory,
  companyTeam,
  companyValues,
} from "@/data";
import { cn } from "@/lib/utils";
import { ctaOutline, ctaPrimary, ctaSizeMd } from "@/lib/ui-classes";

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

function SectionHeader({ eyebrow, title, accent, description, id }) {
  const { ref, visible } = useReveal(0.15);

  return (
    <header
      ref={ref}
      id={id}
      className={cn(
        "mx-auto max-w-3xl text-center transition-all duration-700 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      )}
    >
      {eyebrow && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cocoyam/45">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-tight text-cocoyam">
        {title}{" "}
        {accent && (
          <span className="italic underline decoration-cocoyam-light decoration-[3px] underline-offset-[0.14em]">
            {accent}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-cocoyam/60 sm:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}

function ValueCard({ item, index, accented = false, className }) {
  const { ref, visible } = useReveal(0.12);

  return (
    <li ref={ref} className={cn("list-none", className)}>
      <article
        className={cn(
          "flex h-full flex-col rounded-2xl border p-6 transition-[opacity,transform,box-shadow,border-color] duration-700 ease-out sm:p-8",
          accented
            ? "border-cocoyam bg-cocoyam text-white shadow-[0_24px_60px_-20px_rgba(33,8,63,0.35)]"
            : "border-cocoyam/10 bg-white hover:border-cocoyam/18 hover:shadow-[0_20px_50px_-30px_rgba(33,8,63,0.18)]",
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        )}
        style={{ transitionDelay: visible ? `${80 + index * 60}ms` : "0ms" }}
      >
        <div
          className={cn(
            "mb-6 flex items-end justify-between gap-4 border-b pb-5",
            accented ? "border-white/15" : "border-cocoyam/[0.08]"
          )}
        >
          <p
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.2em]",
              accented ? "text-white/55" : "text-cocoyam/55"
            )}
          >
            {item.label}
          </p>
          <span
            className={cn(
              "font-display text-[3rem] font-medium leading-[0.85] sm:text-[3.25rem]",
              accented ? "text-cocoyam-light/55" : "text-cocoyam/20"
            )}
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
          className={cn(
            "font-display text-[1.25rem] font-medium leading-snug sm:text-[1.4rem]",
            accented ? "text-white" : "text-cocoyam"
          )}
        >
          {item.title}
        </h3>
        <p
          className={cn(
            "mt-4 flex-1 text-[15px] leading-relaxed sm:text-base",
            accented ? "text-white/70" : "text-cocoyam/65"
          )}
        >
          {item.desc}
        </p>
      </article>
    </li>
  );
}

function TeamMemberCard({ member, index }) {
  const { ref, visible } = useReveal(0.12);
  const [imageError, setImageError] = useState(false);
  const showPhoto = member.image && !imageError;

  return (
    <li
      ref={ref}
      className={cn(
        "list-none transition-all duration-700 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      )}
      style={{ transitionDelay: visible ? `${100 + index * 80}ms` : "0ms" }}
    >
      <article className="flex h-full flex-col rounded-2xl border border-cocoyam/10 bg-white p-6 text-center transition-[border-color,box-shadow] duration-300 hover:border-cocoyam/18 hover:shadow-[0_20px_50px_-30px_rgba(33,8,63,0.18)] sm:p-8">
        <div className="relative mx-auto h-24 w-24 shrink-0 overflow-hidden rounded-full bg-cocoyam ring-2 ring-cocoyam/10 ring-offset-2 ring-offset-white">
          {showPhoto ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="96px"
              onError={() => setImageError(true)}
            />
          ) : (
            <span
              className="flex h-full w-full items-center justify-center font-display text-2xl font-medium text-white"
              aria-hidden
            >
              {member.initials}
            </span>
          )}
        </div>
        <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-cocoyam">
          {member.name}
        </h3>
        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cocoyam-light">
          {member.role}
        </p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-cocoyam/60 sm:text-[15px]">
          {member.bio}
        </p>
      </article>
    </li>
  );
}

export default function AboutCompany() {
  const { ref: heroRef, visible: heroVisible } = useReveal(0.15);
  const { mission, vision } = companyMission;
  const introParts = companyIntro.headline.split(companyIntro.headlineAccent);

  return (
    <div className="bg-white text-cocoyam">
      {/* Hero */}
      <section className="border-b border-cocoyam/10" aria-labelledby="company-hero-title">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:py-28">
          <header
            ref={heroRef}
            className={cn(
              "mx-auto max-w-3xl text-center transition-all duration-700 ease-out",
              heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cocoyam/45">
              {companyIntro.eyebrow}
            </p>
            <h1
              id="company-hero-title"
              className="mt-5 font-display text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.06] tracking-tight"
            >
              {introParts[0]}
              <span className="italic underline decoration-cocoyam-light decoration-[3px] underline-offset-[0.14em]">
                {companyIntro.headlineAccent}
              </span>
              {introParts[1] ?? ""}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-cocoyam/60 sm:text-lg">
              {companyIntro.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className={cn("group", ctaPrimary, ctaSizeMd)}>
                Get in touch
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
              <Link href="/projects" className={cn("group", ctaOutline, ctaSizeMd)}>
                View our work
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </div>
          </header>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-b border-cocoyam/10" aria-labelledby="mission-vision-heading">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28">
          <SectionHeader
            id="mission-vision-heading"
            eyebrow="Purpose"
            title="Mission &"
            accent="vision"
            description="What drives us today—and what we're building toward."
          />

          <div className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-8">
            <MissionVisionPanel item={mission} variant="filled" />
            <MissionVisionPanel item={vision} variant="outline" />
          </div>
        </div>
      </section>

      {/* Story band */}
      <section className="bg-cocoyam text-white" aria-labelledby="company-story-title">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
              Our story
            </p>
            <h2
              id="company-story-title"
              className="mt-5 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-snug tracking-tight"
            >
              Built on craft,{" "}
              <span className="italic underline decoration-cocoyam-light decoration-[3px] underline-offset-[0.14em]">
                not hype.
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              {companyStory}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-cocoyam/10" aria-labelledby="company-values-title">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28">
          <SectionHeader
            id="company-values-title"
            eyebrow="Values"
            title="What we won't"
            accent="compromise on"
            description="Five principles that shape how we think, design, and ship."
          />

          <ul
            className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8"
            aria-label="Company values"
          >
            {companyValues.map((item, index) => (
              <ValueCard
                key={item.number}
                item={item}
                index={index}
                accented={index === companyValues.length - 1}
                className={cn(
                  "sm:col-span-1",
                  index < 3 && "lg:col-span-2",
                  index === 3 && "lg:col-start-2 lg:col-span-2",
                  index === 4 && "lg:col-span-2"
                )}
              />
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section aria-labelledby="company-team-title">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:pb-32">
          <SectionHeader
            id="company-team-title"
            eyebrow="Team"
            title="The people behind"
            accent="the work"
            description="Diverse backgrounds, one standard—clarity, craft, and momentum on every engagement."
          />

          <ul
            className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
            aria-label="Team members"
          >
            {companyTeam.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </ul>

          <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-cocoyam/55 sm:text-base">
            We&apos;re always open to meeting talented designers, engineers, and strategists.
            Say hello if you&apos;d like to collaborate.
          </p>
        </div>
      </section>
    </div>
  );
}

function MissionVisionPanel({ item, variant }) {
  const { ref, visible } = useReveal(0.12);
  const filled = variant === "filled";

  return (
    <article
      ref={ref}
      className={cn(
        "flex h-full flex-col rounded-2xl border p-8 transition-all duration-700 ease-out sm:p-10 lg:rounded-3xl",
        filled
          ? "border-cocoyam bg-cocoyam text-white"
          : "border-cocoyam/10 bg-white text-cocoyam",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      )}
    >
      <p
        className={cn(
          "text-[11px] font-semibold uppercase tracking-[0.24em]",
          filled ? "text-white/45" : "text-cocoyam/45"
        )}
      >
        {item.label}
      </p>
      <span
        className="mt-6 block h-0.5 w-12 rounded-full bg-cocoyam-light"
        aria-hidden
      />
      <h3 className="mt-6 font-display text-2xl font-medium leading-snug tracking-tight sm:text-[1.75rem]">
        {item.title}
      </h3>
      <p
        className={cn(
          "mt-5 flex-1 text-base leading-relaxed sm:text-[17px]",
          filled ? "text-white/70" : "text-cocoyam/65"
        )}
      >
        {item.body}
      </p>
    </article>
  );
}
