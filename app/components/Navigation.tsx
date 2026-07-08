"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "/works" },
  { label: "About", href: "/about" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between rounded-full px-5 md:px-7 transition-all duration-300 ${
          scrolled
            ? "glass shadow-[0_10px_40px_-18px_rgba(72,44,120,0.4)] py-2.5"
            : "border border-transparent py-2.5"
        }`}
        style={{ marginInline: "clamp(12px, 4vw, 40px)" }}
      >
        <Link
          href="/"
          className="font-display text-2xl italic tracking-tight text-foreground"
        >
          <span className="gradient-text font-semibold">AN.</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium uppercase tracking-[0.14em] text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/ai-twin"
            className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.06] px-4 py-2 text-[13px] font-medium text-accent-strong transition-all hover:border-accent/60 hover:bg-accent/10"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            AI Twin
          </Link>
          <a
            href="mailto:nakati.akanksha@gmail.com"
            className="shine rounded-full bg-foreground px-4 py-2 text-[13px] font-medium text-white transition-all hover:opacity-90"
          >
            Contact
          </a>
        </nav>

        <button
          className="text-foreground md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="mb-1.5 block h-0.5 w-6 rounded bg-foreground" />
          <span className="mb-1.5 block h-0.5 w-6 rounded bg-foreground" />
          <span className="block h-0.5 w-4 rounded bg-foreground" />
        </button>
      </div>

      {menuOpen && (
        <div
          className="glass mx-auto mt-2 flex flex-col gap-4 rounded-3xl px-6 py-6 md:hidden"
          style={{ marginInline: "clamp(12px, 4vw, 40px)" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium uppercase tracking-wide text-foreground hover:text-accent-strong"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/ai-twin"
            onClick={() => setMenuOpen(false)}
            className="rounded-full border border-accent/30 bg-accent/[0.06] px-4 py-3 text-center text-base font-medium text-accent-strong"
          >
            AI Twin →
          </Link>
          <a
            href="mailto:nakati.akanksha@gmail.com"
            className="rounded-full bg-foreground px-4 py-3 text-center text-base font-medium text-white"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
