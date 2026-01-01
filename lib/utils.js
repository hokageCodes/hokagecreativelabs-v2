import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Opens Calendly in a popup (desktop) or new tab (mobile)
export function openCalendly(link = "https://calendly.com/hokagecreativelabs001/30mins") {
  if (typeof window === "undefined") return;
  const isMobile = window.innerWidth < 1024;
  if (isMobile) {
    window.open(link, "_blank");
  } else {
    const width = 600;
    const height = 700;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    window.open(
      link,
      "CalendlyPopup",
      `width=${width},height=${height},left=${left},top=${top},resizable,scrollbars=yes`
    );
  }
}
