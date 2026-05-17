"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getProjectImages, projects } from "@/data";
import { cn } from "@/lib/utils";
import {
  filterProjectsByCategory,
  formatTagLabel,
  getActiveProjectCategories,
  getCategoryLabel,
  getProjectSlug,
  isBrandIdentityProject,
  isExternalUrl,
} from "@/lib/projects";
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

function ProjectNumber({ value, className }) {
  const display = String(value).padStart(2, "0");

  return (
    <span
      className={cn(
        "pointer-events-none select-none font-display font-medium leading-[0.8] tracking-tighter text-cocoyam/30",
        className
      )}
      style={{ fontSize: "clamp(4rem, 12vw, 8rem)" }}
      aria-hidden
    >
      {display}
    </span>
  );
}

function PortfolioRow({ project, index, reversed = false }) {
  const { ref, visible } = useReveal(0.12);
  const slug = getProjectSlug(project);
  const coverImage = getProjectImages(project)[0];
  const category = getCategoryLabel(project);
  const isBrand = isBrandIdentityProject(project);
  const external = project.liveUrl && isExternalUrl(project.liveUrl);
  const displayTags = (project.tags ?? []).slice(0, 2);

  return (
    <li
      ref={ref}
      className={cn(
        "list-none border-b border-cocoyam/10 py-16 transition-all duration-700 ease-out last:border-b-0 sm:py-20 lg:py-24",
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}
    >
      <article className="grid grid-cols-1 gap-8 overflow-visible lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
        <Link
          href={`/projects/${slug}`}
          className={cn(
            "group relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(33,8,63,0.08)] sm:rounded-3xl lg:row-start-1 lg:aspect-auto lg:h-full lg:min-h-[22rem]",
            isBrand ? "bg-white" : "bg-neutral-100",
            reversed ? "order-1 lg:col-start-2" : "order-1 lg:col-start-1"
          )}
        >
          <Image
            src={coverImage}
            alt={project.title}
            fill
            className={cn(
              "transition-transform duration-500 group-hover:scale-[1.02]",
              isBrand ? "object-contain p-6 sm:p-8" : "object-cover object-top"
            )}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-cocoyam/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            {category}
          </span>
        </Link>

        <div
          className={cn(
            "flex flex-col justify-center overflow-visible lg:row-start-1 lg:py-4",
            reversed ? "order-2 lg:col-start-1" : "order-2 lg:col-start-2"
          )}
        >
          <div className="grid grid-cols-[1fr_auto] items-end gap-4 border-b border-cocoyam/[0.08] pb-6 sm:gap-6 sm:pb-7">
            <Link href={`/projects/${slug}`} className="min-w-0">
              <h2
                className="font-display font-medium leading-[1.08] tracking-tight text-cocoyam text-balance transition-colors hover:text-cocoyam/85"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
              >
                {project.title}
              </h2>
            </Link>
            <ProjectNumber value={index + 1} className="leading-none" />
          </div>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-cocoyam/55 sm:mt-7 sm:text-[17px]">
            {project.desc}
          </p>

          {displayTags.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {displayTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-cocoyam/10 bg-cocoyam/[0.03] px-2.5 py-1 text-xs font-medium text-cocoyam/65"
                >
                  {formatTagLabel(tag)}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-cocoyam/10 pt-6 sm:gap-4">
            <Link href={`/projects/${slug}`} className={cn("group", ctaPrimary, ctaSizeMd)}>
              View details
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={cn("group", ctaOutline, ctaSizeMd)}
              >
                {isBrand ? "View deck" : "View live"}
                {external ? (
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                ) : (
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                )}
              </a>
            )}
          </div>
        </div>
      </article>
    </li>
  );
}

export default function ProjectsPortfolio() {
  const { ref: headerRef, visible: headerVisible } = useReveal(0.15);
  const [activeFilter, setActiveFilter] = useState("all");
  const filters = getActiveProjectCategories();
  const filtered = filterProjectsByCategory(projects, activeFilter);
  const activeLabel = filters.find((f) => f.key === activeFilter)?.label;

  return (
    <section className="bg-white text-cocoyam" aria-labelledby="projects-page-title">
      <div className="mx-auto max-w-9xl px-5 pb-20 pt-4 sm:px-6 sm:pb-28 sm:pt-6 lg:pb-32">
        <header
          ref={headerRef}
          className={cn(
            "mx-auto max-w-3xl text-center transition-all duration-700 ease-out",
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cocoyam/45">
            Portfolio
          </p>
          <h1
            id="projects-page-title"
            className="mt-5 font-display text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.06] tracking-tight"
          >
            Work we&apos;re proud to{" "}
            <span className="italic underline decoration-cocoyam-light decoration-[3px] underline-offset-[0.14em]">
              put our name on.
            </span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-cocoyam/60 sm:text-lg">
            Brand identity, eCommerce, web apps, and custom tools—filter by discipline
            to find work closest to what you need.
          </p>
        </header>

        <div className="mt-12 sm:mt-14">
          <div
            className="flex flex-wrap justify-center gap-2 sm:gap-2.5"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter.key;
              const count =
                filter.key === "all"
                  ? projects.length
                  : filterProjectsByCategory(projects, filter.key).length;

              return (
                <button
                  key={filter.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter.key)}
                  className={cn(
                    "rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cocoyam-light focus-visible:ring-offset-2",
                    isActive
                      ? "border-cocoyam bg-cocoyam text-white"
                      : "border-cocoyam/15 bg-white text-cocoyam hover:border-cocoyam/30 hover:bg-cocoyam/[0.03]"
                  )}
                >
                  {filter.label}
                  <span
                    className={cn(
                      "ml-2 tabular-nums",
                      isActive ? "text-white/70" : "text-cocoyam/45"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-6 text-center text-sm text-cocoyam/50">
            Showing {filtered.length} {filtered.length === 1 ? "project" : "projects"}
            {activeFilter !== "all" && activeLabel
              ? ` · ${activeLabel}`
              : ""}
          </p>

          {filtered.length > 0 ? (
            <ul className="mt-12 sm:mt-16" aria-label="Portfolio projects">
              {filtered.map((project, index) => (
                <PortfolioRow
                  key={project.slug ?? project.title}
                  project={project}
                  index={index}
                  reversed={index % 2 === 1}
                />
              ))}
            </ul>
          ) : (
            <div className="mt-12 rounded-2xl border border-dashed border-cocoyam/15 bg-cocoyam/[0.02] px-6 py-14 text-center sm:mt-14">
              <p className="font-display text-xl font-medium text-cocoyam">
                No projects in this category yet.
              </p>
              <p className="mt-3 text-sm text-cocoyam/55">
                Try another filter or view all work.
              </p>
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className={cn("mt-6", ctaPrimary, ctaSizeMd)}
              >
                View all projects
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
