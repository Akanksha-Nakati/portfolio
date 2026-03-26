import Image from "next/image";
import Link from "next/link";

const Sparkle = ({ className }: { className: string }) => (
  <span className={`absolute select-none pointer-events-none font-bold leading-none ${className}`}>✦</span>
);

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#F0ECFF] flex flex-col justify-between pt-24 pb-0 overflow-hidden relative">

      {/* Giant background "Portfolio." text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-[var(--font-display)] text-[clamp(100px,16vw,260px)] text-[#6B5CE7]/[0.07] leading-none tracking-tight whitespace-nowrap">
          Portfolio.
        </span>
      </div>

      {/* Sparkle decorations */}
      <Sparkle className="top-32 right-[12%] text-[#6B5CE7]/40 text-3xl" />
      <Sparkle className="top-44 left-[38%] text-[#6B5CE7]/25 text-xl" />
      <Sparkle className="top-56 right-[35%] text-[#FFD4B8] text-2xl" />
      <Sparkle className="bottom-56 left-[20%] text-[#6B5CE7]/30 text-4xl" />
      <Sparkle className="bottom-40 right-[18%] text-[#FFD4B8] text-3xl" />
      <Sparkle className="top-80 left-[12%] text-[#A89EF0]/50 text-2xl" />

      {/* Top label bar */}
      <div className="relative flex items-center justify-between px-8 md:px-14 pt-6 pb-2">
        <span className="text-xs font-medium text-[#7B72A8] uppercase tracking-[0.2em]">
          Data Engineer · AI · Boston MA
        </span>
        <span className="text-xs font-medium text-[#6B5CE7] uppercase tracking-[0.2em] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6B5CE7] animate-pulse inline-block" />
          Available for work
        </span>
      </div>

      {/* Main display name */}
      <div className="relative px-8 md:px-14 flex flex-col">
        <h1 className="font-[var(--font-display)] text-[clamp(80px,13vw,180px)] leading-[0.88] tracking-[-0.02em] text-[#1A1040] select-none">
          Akanksha
        </h1>

        {/* Second line with photo inset */}
        <div className="relative flex items-end">
          <h1 className="font-[var(--font-display)] text-[clamp(80px,13vw,180px)] leading-[0.88] tracking-[-0.02em] text-[#1A1040] select-none">
            Nakati
          </h1>

          {/* Floating photo card */}
          <div className="absolute right-0 bottom-2 md:bottom-4">
            <div className="relative w-[160px] h-[200px] md:w-[220px] md:h-[270px] rounded-2xl overflow-hidden border-4 border-[#F0ECFF] shadow-2xl rotate-2 ring-4 ring-[#6B5CE7]/20">
              <Image
                src="/photo-headshot.png"
                alt="Akanksha Nakati"
                fill
                className="object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 bg-[#6B5CE7] text-white text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1.5 rounded-full">
                Open to work
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Italic tagline */}
      <div className="relative px-8 md:px-14 mt-8">
        <p className="font-[var(--font-display)] italic text-[clamp(18px,2.5vw,28px)] text-[#7B72A8] max-w-lg leading-snug">
          Building data systems that think,<br />
          <span className="text-[#6B5CE7]">not just compute.</span>
        </p>
      </div>

      {/* Bottom action bar */}
      <div className="relative flex items-center justify-between gap-6 px-8 md:px-14 py-8 mt-8 border-t border-[#C8C0E8]">
        <div className="flex items-center gap-4">
          <Link
            href="/works"
            className="text-sm font-semibold uppercase tracking-widest px-6 py-3 bg-[#6B5CE7] text-white rounded-full hover:bg-[#4838C9] transition-all"
          >
            View Work
          </Link>
          <Link
            href="/ai-twin"
            className="text-sm font-medium uppercase tracking-widest px-6 py-3 border border-[#C8C0E8] text-[#1A1040] rounded-full hover:border-[#6B5CE7] hover:text-[#6B5CE7] transition-all flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B5CE7] animate-pulse" />
            Chat with AI Twin
          </Link>
        </div>

        {/* Social links */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/akanksha-nakati/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-widest text-[#7B72A8] hover:text-[#6B5CE7] transition-colors border-b border-[#C8C0E8] pb-0.5"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Akanksha-Nakati"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-widest text-[#7B72A8] hover:text-[#6B5CE7] transition-colors border-b border-[#C8C0E8] pb-0.5"
          >
            GitHub
          </a>
          <a
            href="mailto:nakati.akanksha@gmail.com"
            className="text-xs font-semibold uppercase tracking-widest text-[#7B72A8] hover:text-[#6B5CE7] transition-colors border-b border-[#C8C0E8] pb-0.5"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
