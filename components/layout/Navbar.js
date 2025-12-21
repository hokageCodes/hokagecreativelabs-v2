"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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

      {/* Center: Nav Links (DESKTOP ONLY – UNCHANGED) */}
      <div className="hidden md:flex space-x-12">
        <Link href="/" className="hover:text-[#7FF41A]">Home</Link>
        <Link href="/services" className="hover:text-[#7FF41A]">Services</Link>
        <Link href="/projects" className="hover:text-[#7FF41A]">Projects</Link>
        <Link href="/about" className="hover:text-[#7FF41A]">About</Link>
        <Link href="/academy" className="hover:text-[#7FF41A]">Academy</Link>
      </div>

      {/* Right: CTA (DESKTOP ONLY – UNCHANGED) */}
      <div className="hidden md:block">
        <button className="px-4 py-2 bg-[#7FF41A] text-[#21083F] rounded hover:opacity-90">
          Call to Action
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5"
        aria-label="Toggle Menu"
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full h-screen bg-[#21083F] flex flex-col px-6 pt-12 space-y-8 md:hidden z-50">
          <Link href="/" onClick={() => setOpen(false)} className="text-2xl">
            Home
          </Link>
          <Link href="/services" onClick={() => setOpen(false)} className="text-2xl">
            Services
          </Link>
          <Link href="/projects" onClick={() => setOpen(false)} className="text-2xl">
            Projects
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="text-2xl">
            About
          </Link>
          <Link href="/academy" onClick={() => setOpen(false)} className="text-2xl">
            Academy
          </Link>

          <button className="mt-6 w-full px-6 py-3 bg-[#7FF41A] text-[#21083F] rounded text-lg">
            Call to Action
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
