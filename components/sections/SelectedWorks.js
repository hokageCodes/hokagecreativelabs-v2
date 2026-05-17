"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getProjectImages, projects, tagLabels } from "@/data";
import { getProjectSlug } from "@/lib/projects";
import { ctaOutline, ctaPrimary, ctaSizeMd } from "@/lib/ui-classes";

const selectedProjects = projects.slice(0, 6);

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
      { threshold: Math.min(threshold, 0.1), rootMargin: "0px 0px -4% 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [threshold]);

  return { ref, visible };
}

function getCategoryLabel(project) {
  if (project.category && tagLabels[project.category]) {
    return tagLabels[project.category];
  }
  if (project.category) return project.category;
  const firstTag = project.tags?.[0];
  if (firstTag && tagLabels[firstTag]) return tagLabels[firstTag];
  return firstTag || "Project";
}

function ProjectNumber({ value, className }) {
  const display = String(value).padStart(2, "0");

  return (
    <span
      className={cn(
        "pointer-events-none select-none font-display font-medium leading-[0.8] tracking-tighter text-cocoyam/30",
        className
      )}
      style={{ fontSize: "clamp(5rem, 14vw, 10rem)" }}
      aria-hidden
    >
      {display}
    </span>
  );
}

function ProjectShowcaseRow({ project, number, reversed = false, priority = false }) {
  const coverImage = getProjectImages(project)[0];
  const category = getCategoryLabel(project);
  const isExternal = project.liveUrl.startsWith("http");

  return (
    <article className="grid grid-cols-1 gap-8 overflow-visible lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
      <Link
        href={project.liveUrl}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={cn(
          "group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_12px_40px_rgba(33,8,63,0.08)] sm:rounded-3xl lg:row-start-1 lg:aspect-auto lg:min-h-[22rem] lg:h-full",
          reversed ? "order-1 lg:col-start-2" : "order-1 lg:col-start-1"
        )}
      >
        <Image
          src={coverImage}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={priority}
        />
      </Link>

      <div
        className={cn(
          "flex flex-col justify-center overflow-visible lg:row-start-1 lg:py-4",
          reversed ? "order-2 lg:col-start-1" : "order-2 lg:col-start-2"
        )}
      >
        <div className="grid grid-cols-[1fr_auto] items-end gap-4 border-b border-cocoyam/[0.08] pb-6 sm:gap-6 sm:pb-7">
          <h3
            className="min-w-0 font-display font-medium leading-[1.08] tracking-tight text-cocoyam text-balance"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
          >
            {project.title}
          </h3>
          <ProjectNumber value={number} className="leading-none" />
        </div>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-cocoyam/55 sm:mt-7 sm:text-[17px]">
          {project.desc}
        </p>
        <p className="mt-5 text-sm font-medium text-cocoyam/45">
          <span aria-hidden>— </span>
          {category}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-cocoyam/10 pt-6 sm:gap-4">
          <Link
            href={project.liveUrl}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={cn("group", ctaPrimary, ctaSizeMd)}
          >
            View live
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
          <Link
            href={`/projects/${getProjectSlug(project)}`}
            className={cn("group", ctaOutline, ctaSizeMd)}
          >
            View details
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function SelectedWorks() {
  const { ref: headerRef, visible: headerVisible } = useReveal(0.15);

  return (
    <section
      id="selected-works-heading"
      className="bg-white text-cocoyam"
      aria-labelledby="selected-works-title"
    >
      <div className="mx-auto max-w-9xl px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
        <header
          ref={headerRef}
          className={cn(
            "mx-auto max-w-3xl text-center transition-all duration-700 ease-out",
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cocoyam/45">
            Selected work
          </p>
          <h2
            id="selected-works-title"
            className="mt-5 font-display text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.06] tracking-tight"
          >
            Projects that{" "}
            <span className="italic underline decoration-cocoyam-light decoration-[3px] underline-offset-[0.14em]">
              speak for themselves.
            </span>
          </h2>
        </header>

        <ul
          className="mt-14 flex flex-col sm:mt-16"
          aria-label="Selected projects"
        >
          {selectedProjects.map((project, index) => (
            <li
              key={project.title}
              className={cn(
                "list-none border-b border-cocoyam/10 py-16 sm:py-20 lg:py-28",
                index === selectedProjects.length - 1 && "border-b-0"
              )}
            >
              <ProjectShowcaseRow
                project={project}
                number={index + 1}
                reversed={index % 2 === 1}
                priority={index < 2}
              />
            </li>
          ))}
        </ul>

        <div className="mt-16 flex justify-center sm:mt-20 lg:mt-24">
          <Link href="/projects" className={cn("group", ctaPrimary, ctaSizeMd)}>
            View full portfolio
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
