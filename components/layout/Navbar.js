"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

import { cn, openCalendly } from "@/lib/utils";
import {
  ctaPrimaryLime,
  ctaSizeMd,
  navControlBase,
  radiusNav,
} from "@/lib/ui-classes";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinkClass = cn(
  navControlBase,
  "h-12 min-h-12 bg-transparent px-6 py-3 text-lg font-medium text-white hover:bg-white/20 hover:text-white"
);

const navTriggerClass = cn(
  navigationMenuTriggerStyle(),
  "h-12 min-h-12 border border-transparent bg-transparent px-6 text-lg font-semibold text-white shadow-none",
  radiusNav,
  "hover:border-cocoyam-light hover:bg-cocoyam-light hover:text-cocoyam",
  "focus-visible:border-cocoyam-light focus-visible:bg-cocoyam-light focus-visible:text-cocoyam",
  "data-[state=open]:border-white data-[state=open]:bg-white data-[state=open]:text-cocoyam data-[state=open]:hover:bg-neutral-100 data-[state=open]:hover:text-cocoyam",
  "[&_svg]:ml-1.5 [&_svg]:size-5 [&_svg]:text-current"
);

const dropdownItemClass = cn(
  navControlBase,
  "flex w-full items-center gap-2.5 whitespace-nowrap px-4 py-3 text-base font-semibold text-cocoyam hover:bg-cocoyam/[0.07] focus-visible:bg-cocoyam/[0.07]"
);

const expertiseLinks = [
  { href: "/#philosophy-heading", label: "Our Philosophy" },
  { href: "/#ourprocess-heading", label: "Our Process" },
];

const aboutLinks = [
  { href: "/company", label: "Company", external: false },
  {
    href: "https://academy.hokagecreativelabs.com",
    label: "Academy",
    external: true,
  },
  { href: "/contact", label: "Contact", external: false },
];

function DropdownLink({ item }) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={dropdownItemClass}
      >
        {item.label}
        <ArrowUpRight className="size-4 shrink-0 text-cocoyam/45" aria-hidden />
      </a>
    );
  }

  return (
    <Link href={item.href} scroll={item.href.startsWith("/#")} className={dropdownItemClass}>
      {item.label}
    </Link>
  );
}

function DesktopNavFallback() {
  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
      aria-label="Main navigation"
    >
      <Link href="/" className={cn(navLinkClass)}>
        Home
      </Link>
      <Link href="/projects" className={cn(navLinkClass)}>
        Projects
      </Link>
      <Link href="/#philosophy-heading" scroll className={cn(navLinkClass)}>
        Expertise
      </Link>
      <Link href="/company" className={cn(navLinkClass)}>
        About
      </Link>
    </nav>
  );
}

function ConsultationCta({ className }) {
  return (
    <button
      type="button"
      className={cn("group", ctaPrimaryLime, ctaSizeMd, className)}
      onClick={() => openCalendly()}
    >
      Book a Consultation
      <ArrowRight
        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
        aria-hidden
      />
    </button>
  );
}

const mobileNavPrimaryClass =
  "py-3 font-display text-[clamp(1.75rem,7vw,2.5rem)] font-medium leading-[1.05] text-white hover:text-cocoyam-light";

const mobileNavSecondaryClass =
  "py-2 font-display text-[clamp(1.2rem,4.5vw,1.5rem)] font-medium leading-snug text-white/90 hover:text-cocoyam-light";

function MobileNavRow({
  href,
  label,
  external = false,
  scroll = false,
  size = "primary",
}) {
  const className = cn(
    navControlBase,
    "group flex w-full items-center justify-between gap-4 text-left transition-colors",
    size === "primary" ? mobileNavPrimaryClass : mobileNavSecondaryClass
  );

  const content = (
    <>
      <span>{label}</span>
      {external ? (
        <ArrowUpRight className="size-4 shrink-0 text-white/40" aria-hidden />
      ) : (
        <ArrowRight
          className="size-4 shrink-0 text-cocoyam-light opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
          aria-hidden
        />
      )}
    </>
  );

  return (
    <SheetClose asChild>
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {content}
        </a>
      ) : (
        <Link href={href} scroll={scroll} className={className}>
          {content}
        </Link>
      )}
    </SheetClose>
  );
}

function MobileNavGroup({ title, links, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="border-b border-white/10"
    >
      <CollapsibleTrigger
        className={cn(
          navControlBase,
          "flex w-full items-center justify-between gap-4 text-left",
          mobileNavPrimaryClass
        )}
      >
        {title}
        <ChevronDown
          className={cn(
            "size-5 shrink-0 text-white/50 transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out data-[state=closed]:grid-rows-[0fr] data-[state=open]:grid-rows-[1fr]">
        <ul className="min-h-0 space-y-0 border-l-2 border-cocoyam-light/40 pl-3 pb-2 pt-0.5">
          {links.map((item) => (
            <li key={item.href} className="list-none">
              <MobileNavRow
                href={item.href}
                label={item.label}
                external={item.external}
                scroll={item.href.startsWith("/#")}
                size="secondary"
              />
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}

function MobileNavMenu() {
  return (
  <div className="flex min-h-0 flex-1 flex-col">
    <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
      <SheetClose asChild>
        <Link
          href="/"
          className="rounded-md outline-none ring-offset-2 ring-offset-cocoyam focus-visible:ring-2 focus-visible:ring-cocoyam-light/60"
          aria-label="Hokage Creative Labs home"
        >
          <Image
            src="/image.png"
            alt=""
            width={120}
            height={48}
            className="h-9 w-auto object-contain"
          />
        </Link>
      </SheetClose>
      <SheetClose asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={cn(
            "size-11 text-white hover:bg-white/10 [&_svg]:size-6",
            radiusNav
          )}
          aria-label="Close menu"
        >
          <X />
        </Button>
      </SheetClose>
    </div>

    <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5 sm:py-5">
      <nav aria-label="Mobile navigation">
        <ul className="space-y-0">
          <li className="list-none border-b border-white/10">
            <MobileNavRow href="/" label="Home" />
          </li>
          <li className="list-none border-b border-white/10">
            <MobileNavRow href="/projects" label="Projects" />
          </li>
        </ul>

        <MobileNavGroup title="Expertise" links={expertiseLinks} />
        <MobileNavGroup title="About" links={aboutLinks} />
      </nav>
    </div>

    <div className="shrink-0 border-t border-white/10 bg-cocoyam px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-5 md:hidden">
      <SheetClose asChild>
        <ConsultationCta className="w-full justify-center" />
      </SheetClose>
      <SheetClose asChild>
        <a
          href="mailto:devteam@hokagecreativelabs.com"
          className="mt-3 block text-center text-sm font-medium text-white/45 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white/70"
        >
          devteam@hokagecreativelabs.com
        </a>
      </SheetClose>
    </div>
  </div>
  );
}

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6 lg:pt-6 xl:px-8">
      <div
        className={cn(
          "pointer-events-auto grid w-full grid-cols-[1fr_auto] items-center gap-3 rounded-2xl border border-white/10 bg-cocoyam px-4 py-4 shadow-2xl shadow-black/40 sm:gap-4 sm:px-5 sm:py-5 lg:grid-cols-[auto_1fr_auto] lg:gap-6 lg:px-6 lg:py-5 xl:px-8 xl:py-6"
        )}
      >
        <Link
          href="/"
          className="flex shrink-0 items-center justify-self-start rounded-md outline-none ring-offset-2 ring-offset-cocoyam focus-visible:ring-2 focus-visible:ring-cocoyam-light/60"
          aria-label="Hokage Creative Labs home"
        >
          <Image
            src="/image.png"
            alt="Hokage Creative Labs"
            width={160}
            height={64}
            className="h-12 w-auto object-contain sm:h-[3.25rem] lg:h-14"
            priority
          />
        </Link>

        <div className="hidden min-w-0 items-center justify-center justify-self-stretch overflow-visible lg:flex">
          {!mounted ? (
            <DesktopNavFallback />
          ) : (
            <NavigationMenu
              viewport={false}
              className="relative z-10 flex w-max max-w-none flex-none justify-center"
            >
              <NavigationMenuList className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className={cn(navLinkClass)}>
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/projects" className={cn(navLinkClass)}>
                      Projects
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className={navTriggerClass}>
                    Expertise
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    className={cn(
                      "border border-neutral-200 bg-white text-cocoyam shadow-2xl",
                      radiusNav
                    )}
                  >
                    <ul className="flex min-w-[12.5rem] flex-col gap-0.5 p-2">
                      {expertiseLinks.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <DropdownLink item={item} />
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className={navTriggerClass}>
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    className={cn(
                      "border border-neutral-200 bg-white text-cocoyam shadow-2xl",
                      radiusNav
                    )}
                  >
                    <ul className="flex min-w-[12.5rem] flex-col gap-0.5 p-2">
                      {aboutLinks.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <DropdownLink item={item} />
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>

        <div className="col-start-2 flex items-center justify-end gap-2 justify-self-end lg:col-start-3">
          {/* Tablet + desktop: CTA in bar. Mobile: only inside open menu */}
          <ConsultationCta className="hidden shrink-0 whitespace-nowrap md:inline-flex" />

          {!mounted ? (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className={cn(
                "size-12 text-white hover:bg-white/10 lg:hidden [&_svg]:size-7",
                radiusNav
              )}
              aria-label="Open menu"
              disabled
            >
              <Menu />
            </Button>
          ) : (
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "size-12 text-white hover:bg-white/10 lg:hidden [&_svg]:size-7",
                    radiusNav
                  )}
                  aria-label="Open menu"
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                hideCloseButton
                side="right"
                className={cn(
                  "flex !inset-0 !left-0 !top-0 !h-[100dvh] !max-h-none !w-full !max-w-none !translate-x-0 flex-col gap-0 !border-0 !p-0",
                  "border-0 bg-cocoyam text-white shadow-none",
                  "data-[state=closed]:duration-300 data-[state=open]:duration-300",
                  "data-[state=closed]:slide-out-to-right-0 data-[state=open]:slide-in-from-right-0"
                )}
              >
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <MobileNavMenu />
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
