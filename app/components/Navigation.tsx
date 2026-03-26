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
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-5 bg-[#7C6FCD]/90 backdrop-blur-md border-b border-white/10">
      <Link href="/" className="font-[var(--font-display)] text-2xl tracking-tight text-white italic">
        AN.
      </Link>

      <nav className="hidden md:flex items-center gap-10">
        {links.map((l) => (
          <Link key={l.href} href={l.href}
            className="text-sm font-medium text-white/60 hover:text-white transition-colors tracking-wide uppercase">
            {l.label}
          </Link>
        ))}
        <Link href="/ai-twin"
          className="text-sm font-medium px-4 py-2 rounded-full bg-white text-[#7C6FCD] hover:bg-white/90 transition-all flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C6FCD] animate-pulse" />
          AI Twin
        </Link>
        <a href="mailto:nakati.akanksha@gmail.com"
          className="text-sm font-medium px-4 py-2 rounded-full border border-white/40 text-white hover:bg-white/10 transition-all">
          Contact
        </a>
      </nav>

      <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className="block w-6 h-0.5 bg-white mb-1.5" />
        <span className="block w-6 h-0.5 bg-white mb-1.5" />
        <span className="block w-4 h-0.5 bg-white" />
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#7C6FCD] border-b border-white/10 flex flex-col px-8 py-6 gap-5 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-white/70 hover:text-white uppercase tracking-wide">
              {l.label}
            </Link>
          ))}
          <Link href="/ai-twin" onClick={() => setMenuOpen(false)} className="text-base font-medium text-white">
            AI Twin →
          </Link>
        </div>
      )}
    </header>
  );
}
