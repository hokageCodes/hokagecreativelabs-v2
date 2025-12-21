"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#21083F] text-white px-6 pt-20 pb-6 w-full mt-auto">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Brand */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h3 className="text-lg font-semibold mb-4">
            Hokage Creative Labs
          </h3>
          <p className="text-sm text-white/70 max-w-sm">
            Forging the future of digital experiences through creative
            technology and immersive design.
          </p>
        </div>

        {/* Studio Links - Centered on desktop only */}
        <div className="flex flex-col items-center">
          <h4 className="text-sm font-semibold tracking-widest text-white/60 mb-4 text-center">
            STUDIO
          </h4>
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            <li><Link href="/projects" className="hover:text-[#7FF41A]">Work</Link></li>
            <li><Link href="/about" className="hover:text-[#7FF41A]">About</Link></li>
            <li><Link href="/services" className="hover:text-[#7FF41A]">Services</Link></li>
            <li><Link href="/insights" className="hover:text-[#7FF41A]">Insights</Link></li>
            <li><Link href="/contact" className="hover:text-[#7FF41A]">Contact</Link></li>
          </ul>
        </div>

        {/* Connect - Centered on mobile, right on desktop */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-sm font-semibold tracking-widest text-white/60 mb-4">
            CONNECT
          </h4>
          <div className="flex items-center gap-4 mb-4">
            <button className="w-9 h-9 rounded bg-white/10 hover:bg-[#7FF41A] hover:text-[#21083F] transition" />
            <button className="w-9 h-9 rounded bg-white/10 hover:bg-[#7FF41A] hover:text-[#21083F] transition" />
            <button className="w-9 h-9 rounded bg-white/10 hover:bg-[#7FF41A] hover:text-[#21083F] transition" />
          </div>
          <a
            href="mailto:hello@hokage.lab"
            className="text-sm text-white/80 hover:text-[#7FF41A]"
          >
            hello@hokage.lab
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto my-10 border-t border-white/10" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>© 2024 Hokage Creative Labs. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover:text-[#7FF41A]"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
