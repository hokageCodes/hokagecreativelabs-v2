import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getProjectImages } from "@/data";
import { cn } from "@/lib/utils";
import {
  formatTagLabel,
  getAdjacentProjects,
  getCategoryLabel,
  getProjectFeatures,
  getProjectSlug,
  getProjectStack,
  isBrandIdentityProject,
  isExternalUrl,
} from "@/lib/projects";
import { ctaOutline, ctaPrimary, ctaSizeMd } from "@/lib/ui-classes";

function BrandVisual({ src, title, index }) {
  return (
    <li className="list-none">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cocoyam/10 bg-white shadow-[0_12px_40px_rgba(33,8,63,0.06)] transition-[border-color,box-shadow] duration-300 hover:border-cocoyam/18 hover:shadow-[0_20px_50px_-24px_rgba(33,8,63,0.22)] sm:rounded-3xl">
        <div className="relative aspect-[4/5] w-full bg-white sm:aspect-[3/4]">
          <Image
            src={src}
            alt={`${title} — brand identity ${index + 1}`}
            fill
            className="object-contain object-center p-5 transition-transform duration-500 group-hover:scale-[1.02] sm:p-6"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>
        <div className="border-t border-cocoyam/[0.08] px-4 py-3 sm:px-5 sm:py-3.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cocoyam/40">
            {String(index + 1).padStart(2, "0")}
          </p>
        </div>
      </article>
    </li>
  );
}

export default function ProjectDetail({ project }) {
  const slug = getProjectSlug(project);
  const images = getProjectImages(project);
  const isBrand = isBrandIdentityProject(project);
  const banner = project.image || images[0];
  const brandContextImages = isBrand ? images.slice(0, 3) : [];
  const extraImages = !isBrand && images.length > 1 ? images.slice(1) : [];
  const gallery = extraImages;
  const features = getProjectFeatures(project);
  const stack = getProjectStack(project);
  const category = getCategoryLabel(project);
  const external = isExternalUrl(project.liveUrl);
  const { prev, next } = getAdjacentProjects(slug);

  return (
    <article className="bg-white text-cocoyam">
      <header
        className={cn(
          "relative -mt-24 h-[min(72vh,42rem)] w-full overflow-hidden sm:-mt-28 lg:-mt-[7.5rem]",
          isBrand ? "bg-white" : "bg-neutral-100"
        )}
      >
        {banner && (
          <div className="absolute inset-0 z-0">
            <Image
              src={banner}
              alt={project.title}
              fill
              className={cn(
                isBrand
                  ? "object-contain object-center p-6 sm:p-10 lg:p-14"
                  : "object-cover object-top"
              )}
              sizes="100vw"
              priority
            />
          </div>
        )}
        <div
          className={cn(
            "absolute inset-0 z-[1]",
            isBrand
              ? "bg-gradient-to-t from-cocoyam via-cocoyam/75 to-transparent"
              : "bg-gradient-to-t from-cocoyam via-cocoyam/55 to-cocoyam/10"
          )}
          aria-hidden
        />
        <div className="absolute inset-0 z-[2] flex flex-col justify-end">
          <div className="mx-auto w-full max-w-7xl px-5 pb-10 sm:px-6 sm:pb-14 lg:pb-16">
            <Link
              href="/projects"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              All projects
            </Link>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
              {category}
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[1.06] tracking-tight text-white">
              {project.title}
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={project.liveUrl}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={cn("group", ctaPrimary, ctaSizeMd)}
              >
                View live
                {external ? (
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                ) : (
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                )}
              </a>
              <Link
                href="/projects"
                className={cn(
                  "group",
                  ctaOutline,
                  ctaSizeMd,
                  "border-white/25 bg-white/10 text-white hover:border-white/40 hover:bg-white/15 hover:text-white"
                )}
              >
                More work
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <div className="min-w-0 lg:col-span-8">
            <section aria-labelledby="project-overview">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cocoyam/45">
                Overview
              </p>
              <h2
                id="project-overview"
                className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-snug tracking-tight"
              >
                What we built
              </h2>
              <p className="mt-5 text-base leading-relaxed text-cocoyam/60 sm:text-lg">
                {project.desc}
              </p>
              {project.overview && (
                <p className="mt-5 text-base leading-relaxed text-cocoyam/60 sm:text-lg">
                  {project.overview}
                </p>
              )}
            </section>

            <section
              className="mt-14 border-t border-cocoyam/10 pt-14 sm:mt-16 sm:pt-16"
              aria-labelledby="project-features"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cocoyam/45">
                Deliverables
              </p>
              <h2
                id="project-features"
                className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-snug tracking-tight"
              >
                Project features
              </h2>
              <ol className="mt-8 space-y-0 border-t border-cocoyam/10">
                {features.map((feature, index) => (
                  <li
                    key={feature}
                    className="grid grid-cols-[auto_1fr] gap-4 border-b border-cocoyam/10 py-5 sm:gap-6 sm:py-6"
                  >
                    <span
                      className="font-display text-[1.75rem] font-medium leading-none text-cocoyam/20 sm:text-[2rem]"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1 text-base leading-relaxed text-cocoyam/70 sm:text-[17px]">
                      {feature}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section
              className="mt-14 border-t border-cocoyam/10 pt-14 sm:mt-16 sm:pt-16 lg:hidden"
              aria-labelledby="project-stack-mobile"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cocoyam/45">
                Stack
              </p>
              <h2 id="project-stack-mobile" className="sr-only">
                Tools and stack
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {stack.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-cocoyam/12 bg-cocoyam/[0.03] px-4 py-2 text-sm font-medium text-cocoyam/75"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </section>

            {gallery.length > 0 && (
              <section
                className="mt-14 border-t border-cocoyam/10 pt-14 sm:mt-16 sm:pt-16"
                aria-labelledby="project-gallery"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cocoyam/45">
                  Gallery
                </p>
                <h2
                  id="project-gallery"
                  className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-snug tracking-tight"
                >
                  More from this project
                </h2>
                <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                  {gallery.map((src, index) => (
                    <li
                      key={`${src}-${index}`}
                      className={cn(
                        "list-none",
                        gallery.length === 1 && "sm:col-span-2",
                        gallery.length >= 2 &&
                          index === 0 &&
                          gallery.length > 2 &&
                          "sm:col-span-2"
                      )}
                    >
                      <div
                        className={cn(
                          "relative overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_12px_40px_rgba(33,8,63,0.08)] sm:rounded-3xl",
                          index === 0 && gallery.length > 2
                            ? "aspect-[16/9]"
                            : "aspect-[4/3]"
                        )}
                      >
                        <Image
                          src={src}
                          alt={`${project.title} — screen ${index + 2}`}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="mt-14 lg:col-span-4 lg:mt-0">
            <div className="lg:sticky lg:top-28 lg:space-y-8">
              <div className="rounded-2xl border border-cocoyam/10 bg-cocoyam/[0.02] p-6 sm:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cocoyam/45">
                  Tools & stack
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {stack.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-cocoyam/12 bg-white px-4 py-2 text-sm font-medium text-cocoyam/80"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              {project.tags?.length > 0 && (
                <div className="rounded-2xl border border-cocoyam/10 p-6 sm:p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cocoyam/45">
                    Disciplines
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag} className="text-sm font-medium text-cocoyam/65">
                        <span className="mr-2 text-cocoyam-light" aria-hidden>
                          —
                        </span>
                        {formatTagLabel(tag)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="hidden rounded-2xl border border-cocoyam/10 bg-cocoyam p-6 text-white sm:p-7 lg:block">
                <p className="font-display text-xl font-medium leading-snug">
                  See it in the wild
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  Explore the live experience we shipped for {project.title}.
                </p>
                <a
                  href={project.liveUrl}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "group mt-6 inline-flex w-full justify-center",
                    ctaPrimary,
                    ctaSizeMd,
                    "bg-white text-cocoyam hover:bg-white/90"
                  )}
                >
                  View live
                  {external ? (
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  ) : (
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  )}
                </a>
              </div>
            </div>
          </aside>
        </div>

        {isBrand && brandContextImages.length > 0 && (
          <section className="mt-16 bg-white sm:mt-20" aria-labelledby="brand-visuals-title">
            <div className="border-t border-cocoyam/10 pt-10 sm:pt-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cocoyam/45">
                Brand visuals
              </p>
              <h2
                id="brand-visuals-title"
                className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-snug tracking-tight"
              >
                Identity in context
              </h2>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 bg-white sm:mt-10 sm:grid-cols-3 sm:gap-5 lg:gap-6">
              {brandContextImages.map((src, index) => (
                <BrandVisual
                  key={`${src}-${index}`}
                  src={src}
                  title={project.title}
                  index={index}
                />
              ))}
            </ul>
          </section>
        )}

        {(prev || next) && (
          <nav
            className="mt-16 flex flex-col gap-4 border-t border-cocoyam/10 pt-10 sm:mt-20 sm:flex-row sm:justify-between sm:pt-12"
            aria-label="More projects"
          >
            {prev ? (
              <Link
                href={`/projects/${getProjectSlug(prev)}`}
                className="group flex flex-col gap-1 rounded-2xl border border-cocoyam/10 p-5 transition-colors hover:border-cocoyam/20 hover:bg-cocoyam/[0.02] sm:max-w-[46%]"
              >
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cocoyam/45">
                  <ArrowLeft
                    className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5"
                    aria-hidden
                  />
                  Previous
                </span>
                <span className="font-display text-lg font-medium text-cocoyam">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/projects/${getProjectSlug(next)}`}
                className="group flex flex-col items-end gap-1 rounded-2xl border border-cocoyam/10 p-5 text-right transition-colors hover:border-cocoyam/20 hover:bg-cocoyam/[0.02] sm:max-w-[46%] sm:ml-auto"
              >
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cocoyam/45">
                  Next
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
                <span className="font-display text-lg font-medium text-cocoyam">
                  {next.title}
                </span>
              </Link>
            ) : null}
          </nav>
        )}
      </div>
    </article>
  );
}
