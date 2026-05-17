import { cn } from "@/lib/utils";

/** Partial corners — navigation, dropdowns, in-bar controls */
export const radiusNav = "rounded-lg";

/** Full pill — primary marketing CTAs */
export const radiusCta = "rounded-full";

const ctaFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cocoyam-light focus-visible:ring-offset-2";

export const ctaBase = cn(
  "inline-flex items-center justify-center gap-2 font-semibold transition-colors",
  radiusCta,
  ctaFocus
);

export const ctaPrimary = cn(ctaBase, "bg-cocoyam text-white hover:bg-cocoyam/90");

export const ctaPrimaryLime = cn(
  ctaBase,
  "bg-cocoyam-light text-cocoyam shadow-sm hover:bg-white hover:text-cocoyam"
);

export const ctaOutline = cn(
  ctaBase,
  "border border-cocoyam/20 bg-white text-cocoyam hover:border-cocoyam/30 hover:bg-cocoyam/[0.03]"
);

export const ctaSizeMd = "h-12 min-h-12 px-6 text-sm";
export const ctaSizeLg = "h-12 min-h-12 px-7 text-[15px]";

export const navControlBase = cn(
  "inline-flex items-center justify-center font-semibold transition-colors",
  radiusNav,
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cocoyam-light/70"
);
