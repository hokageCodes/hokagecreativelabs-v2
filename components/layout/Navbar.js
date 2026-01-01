"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-2 md:px-6 py-3 bg-[#0A0118] text-white shadow-lg">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image
          src="/image.png"
          alt="Logo"
          width={150}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Center: Nav Links (DESKTOP ONLY) */}
      <div className="hidden md:flex space-x-8 items-center">
        <Link href="/" className="font-semibold">Home</Link>
        <Link href="/projects" className="font-semibold">Projects</Link>
        {/* Removed Services link */}
        {/* Expertise Dropdown */}
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 p-0 h-auto min-w-[110px] justify-center font-semibold text-base"
            onClick={() => setExpertiseOpen((v) => !v)}
            aria-expanded={expertiseOpen}
            aria-haspopup="true"
          >
            Expertise <span className="text-xs">▼</span>
          </Button>
          {expertiseOpen && (
            <div className="absolute left-0 mt-2 w-[110px] bg-[#21083F] rounded shadow-lg py-2 z-50">
              <Link href="/#philosophy-heading" scroll={true} className="block px-4 py-2" onClick={() => setExpertiseOpen(false)}>Our Philosophy</Link>
              <Link href="/#ourprocess-heading" scroll={true} className="block px-4 py-2" onClick={() => setExpertiseOpen(false)}>Our Process</Link>
            </div>
          )}
        </div>
        {/* About Dropdown */}
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 p-0 h-auto font-semibold text-base"
            onClick={() => setAboutOpen((v) => !v)}
            aria-expanded={aboutOpen}
            aria-haspopup="true"
          >
            About <span className="text-xs">▼</span>
          </Button>
          {aboutOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-[#21083F] rounded shadow-lg py-2 z-50">
              <Link href="/company" className="block px-4 py-2" onClick={() => setAboutOpen(false)}>Company</Link>
              <a href="https://academy.hokagecreativelabs.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2" onClick={() => setAboutOpen(false)}>Academy</a>
              <Link href="/contact" className="block px-4 py-2" onClick={() => setAboutOpen(false)}>Contact</Link>
            </div>
          )}
        </div>
      </div>

      {/* Right: CTA (DESKTOP & TABLET) */}
      <div className="hidden lg:block">
        <Button size="lg" className="bg-white text-[#21083F] hover:bg-[#21083F] hover:text-white font-semibold">
          Book a Consultation
        </Button>
      </div>

      {/* Mobile/Tablet Hamburger */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(!open)}
        className="lg:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle Menu"
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </Button>

      {/* Mobile/Tablet Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full min-h-screen bg-[#21083F] flex flex-col px-6 pt-12 space-y-4 lg:hidden z-50 transition-all duration-300">
          <Link href="/" onClick={() => setOpen(false)} className="text-2xl py-2">
            Home
          </Link>
          <Link href="/projects" onClick={() => setOpen(false)} className="text-2xl py-2">
            Projects
          </Link>
          {/* Expertise Dropdown Mobile */}
          <div className="relative">
            <button
              className="w-full text-2xl py-2 flex items-center justify-between focus:outline-none"
              onClick={() => setMobileExpertiseOpen((v) => !v)}
              aria-expanded={mobileExpertiseOpen}
              aria-haspopup="true"
            >
              Expertise <span className="text-base">{mobileExpertiseOpen ? '▲' : '▼'}</span>
            </button>
            {mobileExpertiseOpen && (
              <div className="ml-4 flex flex-col gap-2 py-2">
                <Link href="/#philosophy-heading" scroll={true} className="px-4 py-2 text-lg" onClick={() => { setMobileExpertiseOpen(false); setOpen(false); }}>Our Philosophy</Link>
                <Link href="/#ourprocess-heading" scroll={true} className="px-4 py-2 text-lg" onClick={() => { setMobileExpertiseOpen(false); setOpen(false); }}>Our Process</Link>
              </div>
            )}
          </div>
          {/* About Dropdown Mobile */}
          <div className="relative">
            <button
              className="w-full text-2xl py-2 flex items-center justify-between focus:outline-none"
              onClick={() => setMobileAboutOpen((v) => !v)}
              aria-expanded={mobileAboutOpen}
              aria-haspopup="true"
            >
              About <span className="text-base">{mobileAboutOpen ? '▲' : '▼'}</span>
            </button>
            {mobileAboutOpen && (
              <div className="ml-4 flex flex-col gap-2 py-2">
                <Link href="/company" className="px-4 py-2 text-lg" onClick={() => { setMobileAboutOpen(false); setOpen(false); }}>Company</Link>
                <a href="https://academy.hokagecreativelabs.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-lg" onClick={() => { setMobileAboutOpen(false); setOpen(false); }}>Academy</a>
                <Link href="/contact" className="px-4 py-2 text-lg" onClick={() => { setMobileAboutOpen(false); setOpen(false); }}>Contact</Link>
              </div>
            )}
          </div>
          <Button size="lg" className="mt-6 w-full bg-[#7FF41A] text-[#21083F] rounded text-lg font-semibold">
            Book a Consultation
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
