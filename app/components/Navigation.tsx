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
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-5 bg-[#F4EBE0]/90 backdrop-blur-md border-b border-[#D4C0B0]/60">
      <Link
        href="/"
        className="font-[var(--font-display)] text-2xl tracking-tight text-[#8B1A2C] italic"
      >
        AN.
      </Link>

      <nav className="hidden md:flex items-center gap-10">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-sm font-medium text-[#1C0D08]/55 hover:text-[#8B1A2C] transition-colors tracking-wide uppercase"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/ai-twin"
          className="text-sm font-medium px-4 py-2 rounded-full bg-[#8B1A2C] text-[#F4EBE0] hover:bg-[#5C0F1A] transition-all flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F4C9C0] animate-pulse" />
          AI Twin
        </Link>
        <a
          href="mailto:nakati.akanksha@gmail.com"
          className="text-sm font-medium px-4 py-2 rounded-full border border-[#8B1A2C] text-[#8B1A2C] hover:bg-[#8B1A2C] hover:text-[#F4EBE0] transition-all"
        >
          Contact
        </a>
      </nav>

      <button
        className="md:hidden text-[#1C0D08]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-[#1C0D08] mb-1.5" />
        <span className="block w-6 h-0.5 bg-[#1C0D08] mb-1.5" />
        <span className="block w-4 h-0.5 bg-[#1C0D08]" />
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#F4EBE0] border-b border-[#D4C0B0] flex flex-col px-8 py-6 gap-5 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-[#1C0D08]/60 hover:text-[#8B1A2C] uppercase tracking-wide"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/ai-twin" onClick={() => setMenuOpen(false)} className="text-base font-medium text-[#8B1A2C]">
            AI Twin →
          </Link>
        </div>
      )}
    </header>
  );
}
