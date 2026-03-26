import Image from "next/image";
import Link from "next/link";

const Sparkle = ({ className }: { className: string }) => (
  <span className={`absolute select-none pointer-events-none font-bold leading-none ${className}`}>✦</span>
);

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#7C6FCD] flex flex-col pt-20 overflow-hidden relative">

      {/* Sparkle decorations */}
      <Sparkle className="top-28 left-[6%] text-white/40 text-3xl" />
      <Sparkle className="top-40 right-[8%] text-white/30 text-4xl" />
      <Sparkle className="top-56 left-[42%] text-white/20 text-2xl" />
      <Sparkle className="top-72 right-[30%] text-white/25 text-xl" />
      <Sparkle className="bottom-52 left-[18%] text-white/30 text-4xl" />
      <Sparkle className="bottom-36 right-[14%] text-white/25 text-3xl" />
      <Sparkle className="top-96 left-[70%] text-white/15 text-5xl" />


      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center relative px-4">
        <div className="relative w-full text-center select-none flex flex-col items-center gap-5">
          <p className="text-white/50 text-xs uppercase tracking-[0.4em]">
            Data Engineer &nbsp;·&nbsp; AI &nbsp;·&nbsp; Boston, MA
          </p>
          <h1 className="font-[var(--font-playfair)] italic text-[clamp(56px,10vw,160px)] leading-[0.95] text-white tracking-tight">
            Akanksha Nakati
          </h1>
          <p className="font-[var(--font-display)] italic text-[clamp(16px,1.8vw,24px)] text-white/60 max-w-md leading-snug">
            Building data systems that think,<br />not just compute.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-4 mt-10">
          <Link
            href="/works"
            className="text-sm font-semibold uppercase tracking-widest px-7 py-3 bg-white text-[#7C6FCD] rounded-full hover:bg-white/90 transition-all"
          >
            View Work
          </Link>
          <Link
            href="/ai-twin"
            className="text-sm font-medium uppercase tracking-widest px-7 py-3 border border-white/40 text-white rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            AI Twin
          </Link>
        </div>
      </div>

      {/* Bottom social links bar */}
      <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 px-8 md:px-14 py-5 border-t border-white/15">
        <div className="flex items-center gap-6 md:gap-10 flex-wrap justify-center">

          <a href="https://www.linkedin.com/in/akanksha-nakati/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-xs font-medium uppercase tracking-widest hidden sm:block">LinkedIn</span>
          </a>

          <a href="mailto:nakati.akanksha@gmail.com"
            className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span className="text-xs font-medium uppercase tracking-widest hidden sm:block">nakati.akanksha@gmail.com</span>
          </a>

          <a href="https://github.com/Akanksha-Nakati" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="text-xs font-medium uppercase tracking-widest hidden sm:block">GitHub</span>
          </a>

          <a href="https://medium.com/@nakati.akanksha" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 1770.86 1000" fill="currentColor">
              <path d="M992.49 514.29c0 276.07-221.95 499.89-495.77 499.89S.95 790.36.95 514.29 222.9 14.4 496.72 14.4s495.77 223.82 495.77 499.89m543.77 0c0 259.89-110.97 470.67-247.89 470.67s-247.89-210.78-247.89-470.67 110.97-470.67 247.89-470.67 247.89 210.73 247.89 470.67m233.6 0c0 232.81-39.01 421.6-87.15 421.6s-87.15-188.74-87.15-421.6 39.01-421.6 87.15-421.6 87.15 188.74 87.15 421.6"/>
            </svg>
            <span className="text-xs font-medium uppercase tracking-widest hidden sm:block">Medium</span>
          </a>

          <span className="flex items-center gap-2.5 text-white/40">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span className="text-xs font-medium uppercase tracking-widest hidden sm:block">Boston, MA</span>
          </span>
        </div>

      </div>
    </section>
  );
}
