"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Work", href: "/works" },
  { label: "About", href: "/about" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-5 bg-[#F0ECFF]/90 backdrop-blur-md border-b border-[#C8C0E8]/60">
      <Link
        href="/"
        className="font-[var(--font-display)] text-2xl tracking-tight text-[#6B5CE7] italic"
      >
        AN.
      </Link>

      <nav className="hidden md:flex items-center gap-10">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-sm font-medium text-[#1A1040]/55 hover:text-[#6B5CE7] transition-colors tracking-wide uppercase"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/ai-twin"
          className="text-sm font-medium px-4 py-2 rounded-full bg-[#6B5CE7] text-white hover:bg-[#4838C9] transition-all flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD4B8] animate-pulse" />
          AI Twin
        </Link>
        <a
          href="mailto:nakati.akanksha@gmail.com"
          className="text-sm font-medium px-4 py-2 rounded-full border border-[#6B5CE7] text-[#6B5CE7] hover:bg-[#6B5CE7] hover:text-white transition-all"
        >
          Contact
        </a>
      </nav>

      <button
        className="md:hidden text-[#1A1040]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-[#1A1040] mb-1.5" />
        <span className="block w-6 h-0.5 bg-[#1A1040] mb-1.5" />
        <span className="block w-4 h-0.5 bg-[#1A1040]" />
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#F0ECFF] border-b border-[#C8C0E8] flex flex-col px-8 py-6 gap-5 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-[#1A1040]/60 hover:text-[#6B5CE7] uppercase tracking-wide"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/ai-twin" onClick={() => setMenuOpen(false)} className="text-base font-medium text-[#6B5CE7]">
            AI Twin →
          </Link>
        </div>
      )}
    </header>
  );
}
