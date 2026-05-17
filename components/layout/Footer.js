"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-auto w-full bg-white text-[#21083F]">
      <div className="px-6 pt-16 pb-10 sm:pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10 lg:items-start">
          {/* Brand */}
          <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#21083F]/50 mb-3">
              Hokage Creative Labs
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#21083F] mb-4 max-w-md">
              Digital experiences that leave a mark.
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-600 max-w-md">
              Forging the future of digital experiences through creative
              technology and immersive design.
            </p>
          </div>

          {/* Studio — centered in column; vertically centered vs taller neighbors */}
          <div className="lg:col-span-3 flex flex-col items-center text-center lg:self-center">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#21083F]/45 mb-3">
              Studio
            </h4>
            <nav aria-label="Studio">
              <ul className="flex flex-row flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-medium">
                <li>
                  <Link
                    href="/projects"
                    className="text-[#21083F] hover:text-[#5cb816] transition-colors"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-[#21083F] hover:text-[#5cb816] transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-[#21083F] hover:text-[#5cb816] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end text-center lg:text-right">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#21083F]/45 mb-3">
              Connect
            </h4>
            <div className="flex items-center justify-center lg:justify-end gap-3 mb-4">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Twitter"
                className="h-10 w-10 rounded-full border border-[#21083F]/15 bg-[#21083F]/[0.04] text-[#21083F] hover:bg-[#7FF41A] hover:border-[#7FF41A] hover:text-[#21083F] transition-colors"
              >
                <FaTwitter className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full border border-[#21083F]/15 bg-[#21083F]/[0.04] text-[#21083F] hover:bg-[#7FF41A] hover:border-[#7FF41A] hover:text-[#21083F] transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-full border border-[#21083F]/15 bg-[#21083F]/[0.04] text-[#21083F] hover:bg-[#7FF41A] hover:border-[#7FF41A] hover:text-[#21083F] transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
              </Button>
            </div>
            <a
              href="mailto:info@hokagecreativelabs.com"
              className="text-sm font-medium text-[#21083F] underline decoration-[#21083F]/25 underline-offset-4 hover:decoration-[#7FF41A] hover:text-[#5cb816] transition-colors"
            >
              info@hokagecreativelabs.com
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Hokage Creative Labs. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              <Link
                href="/privacy"
                className="text-[#21083F]/80 hover:text-[#21083F] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#21083F]/80 hover:text-[#21083F] transition-colors"
              >
                Terms of Service
              </Link>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[#21083F]/80 hover:text-[#21083F] hover:bg-[#21083F]/5"
            >
              Back to top ↑
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
