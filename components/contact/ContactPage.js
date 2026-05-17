"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Calendar, Clock, Mail, MapPin } from "lucide-react";
import { contactPage, contactProjectTypes } from "@/data";
import { cn, openCalendly } from "@/lib/utils";
import { ctaPrimary, ctaPrimaryLime, ctaSizeMd } from "@/lib/ui-classes";

const fieldClass =
  "w-full rounded-xl border border-cocoyam/15 bg-white px-4 py-3.5 text-base text-cocoyam shadow-sm transition-[border-color,box-shadow] placeholder:text-cocoyam/40 focus-visible:border-cocoyam/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cocoyam-light focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const labelClass = "mb-2 block text-sm font-semibold text-cocoyam";

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

function ContactChannel({ icon: Icon, title, children }) {
  return (
    <div className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cocoyam/10 bg-cocoyam/[0.03] text-cocoyam">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cocoyam/45">
          {title}
        </p>
        <div className="mt-1.5 text-sm leading-relaxed text-cocoyam sm:text-[15px]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const { ref: headerRef, visible: headerVisible } = useReveal(0.15);
  const { ref: contentRef, visible: contentVisible } = useReveal(0.1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const introParts = contactPage.headline.split(contactPage.headlineAccent);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const projectType = String(data.get("projectType") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const typeLabel =
      contactProjectTypes.find((t) => t.value === projectType)?.label ?? "General inquiry";

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        `Interest: ${typeLabel}`,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n")
    );

    window.location.href = `mailto:${contactPage.email}?subject=${subject}&body=${body}`;

    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      form.reset();
    }, 400);
  };

  return (
    <div className="bg-white text-cocoyam">
      <section aria-labelledby="contact-page-title">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:py-28">
          <header
            ref={headerRef}
            className={cn(
              "mx-auto max-w-3xl text-center transition-all duration-700 ease-out",
              headerVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cocoyam/45">
              {contactPage.eyebrow}
            </p>
            <h1
              id="contact-page-title"
              className="mt-5 font-display text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.06] tracking-tight"
            >
              {introParts[0]}
              <span className="italic underline decoration-cocoyam-light decoration-[3px] underline-offset-[0.14em]">
                {contactPage.headlineAccent}
              </span>
              {introParts[1] ?? ""}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-cocoyam/60 sm:text-lg">
              {contactPage.body}
            </p>
          </header>

          <div
            ref={contentRef}
            className={cn(
              "mt-14 grid gap-10 transition-all duration-700 ease-out sm:mt-16 lg:grid-cols-12 lg:gap-12 lg:mt-20",
              contentVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            {/* Channels */}
            <aside className="flex flex-col gap-8 lg:col-span-5">
              <article className="rounded-2xl border border-cocoyam bg-cocoyam p-6 text-white sm:rounded-3xl sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
                  Fastest path
                </p>
                <h2 className="mt-4 font-display text-2xl font-medium leading-snug tracking-tight sm:text-[1.75rem]">
                  {contactPage.calendlyLabel}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-[15px]">
                  {contactPage.calendlyNote}
                </p>
                <button
                  type="button"
                  className={cn("group mt-6 w-full", ctaPrimaryLime, ctaSizeMd)}
                  onClick={() => openCalendly()}
                >
                  Book a consultation
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </button>
              </article>

              <div className="space-y-6 rounded-2xl border border-cocoyam/10 bg-cocoyam/[0.02] p-6 sm:p-8">
                <ContactChannel icon={Mail} title="Email">
                  <a
                    href={`mailto:${contactPage.email}`}
                    className="font-medium text-cocoyam underline decoration-cocoyam/20 underline-offset-4 transition-colors hover:decoration-cocoyam-light"
                  >
                    {contactPage.email}
                  </a>
                  <span className="mt-2 block text-cocoyam/55">
                    Technical inquiries:{" "}
                    <a
                      href={`mailto:${contactPage.devEmail}`}
                      className="underline decoration-cocoyam/15 underline-offset-2 hover:decoration-cocoyam-light"
                    >
                      {contactPage.devEmail}
                    </a>
                  </span>
                </ContactChannel>

                <ContactChannel icon={MapPin} title="Location">
                  {contactPage.location}
                </ContactChannel>

                <ContactChannel icon={Clock} title="Response time">
                  {contactPage.responseTime}
                </ContactChannel>

                <ContactChannel icon={Calendar} title="Availability">
                  Open for new projects · Lagos &amp; remote
                </ContactChannel>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-cocoyam/10 bg-white p-6 shadow-[0_12px_40px_rgba(33,8,63,0.06)] sm:rounded-3xl sm:p-8 lg:p-10">
                {submitted ? (
                  <div
                    className="flex min-h-[20rem] flex-col items-center justify-center text-center"
                    role="status"
                  >
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-cocoyam-light/30 font-display text-2xl font-medium text-cocoyam"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <h2 className="mt-6 font-display text-2xl font-medium tracking-tight text-cocoyam">
                      Message ready to send
                    </h2>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-cocoyam/60 sm:text-base">
                      Your email client should have opened with your message pre-filled.
                      If it didn&apos;t, email us directly at{" "}
                      <a
                        href={`mailto:${contactPage.email}`}
                        className="font-medium text-cocoyam underline decoration-cocoyam-light/50 underline-offset-2"
                      >
                        {contactPage.email}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      className={cn("mt-8", ctaPrimary, ctaSizeMd)}
                      onClick={() => setSubmitted(false)}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div>
                      <h2 className="font-display text-xl font-medium tracking-tight text-cocoyam sm:text-2xl">
                        Send a message
                      </h2>
                      <p className="mt-2 text-sm text-cocoyam/55 sm:text-[15px]">
                        Share a few details—we&apos;ll follow up with next steps.
                      </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-name" className={labelClass}>
                          Name <span className="text-cocoyam-light">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          placeholder="Your name"
                          className={fieldClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className={labelClass}>
                          Email <span className="text-cocoyam-light">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          placeholder="you@company.com"
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-company" className={labelClass}>
                          Company
                        </label>
                        <input
                          id="contact-company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          placeholder="Optional"
                          className={fieldClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-type" className={labelClass}>
                          Project type
                        </label>
                        <select
                          id="contact-type"
                          name="projectType"
                          defaultValue=""
                          className={cn(fieldClass, "cursor-pointer appearance-none")}
                        >
                          {contactProjectTypes.map((option) => (
                            <option key={option.value || "default"} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className={labelClass}>
                        Message <span className="text-cocoyam-light">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your goals, timeline, and anything else we should know."
                        className={cn(fieldClass, "min-h-[140px] resize-y")}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className={cn("group w-full sm:w-auto", ctaPrimary, ctaSizeMd)}
                    >
                      {submitting ? "Opening email…" : "Send message"}
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
