import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#F4EBE0] flex flex-col justify-between pt-24 pb-0 overflow-hidden">
      {/* Top label bar */}
      <div className="flex items-center justify-between px-8 md:px-14 pt-6 pb-2">
        <span className="text-xs font-medium text-[#8A7468] uppercase tracking-[0.2em]">
          Data Engineer · AI · Boston MA
        </span>
        <span className="text-xs font-medium text-[#8A7468] uppercase tracking-[0.2em]">
          Available for work
        </span>
      </div>

      {/* Main display name */}
      <div className="relative px-8 md:px-14 flex flex-col">
        <h1
          className="font-[var(--font-display)] text-[clamp(80px,13vw,180px)] leading-[0.88] tracking-[-0.02em] text-[#1C0D08] select-none"
        >
          Akanksha
        </h1>

        {/* Second line with photo inset */}
        <div className="relative flex items-end">
          <h1
            className="font-[var(--font-display)] text-[clamp(80px,13vw,180px)] leading-[0.88] tracking-[-0.02em] text-[#1C0D08] select-none"
          >
            Nakati
          </h1>

          {/* Floating photo card */}
          <div className="absolute right-0 bottom-2 md:bottom-4">
            <div className="relative w-[160px] h-[200px] md:w-[220px] md:h-[270px] rounded-2xl overflow-hidden border-4 border-[#F4EBE0] shadow-2xl rotate-2">
              <Image
                src="https://framerusercontent.com/images/6N1kzveeLopAiZvDLCaDvsjtnew.jpeg"
                alt="Akanksha Nakati"
                fill
                className="object-cover"
                unoptimized
              />
              {/* Burgundy overlay badge */}
              <div className="absolute bottom-3 left-3 bg-[#8B1A2C] text-[#F4EBE0] text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1.5 rounded-full">
                Open to work
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Italic tagline */}
      <div className="px-8 md:px-14 mt-8">
        <p className="font-[var(--font-display)] italic text-[clamp(18px,2.5vw,28px)] text-[#8A7468] max-w-lg leading-snug">
          Building data systems that think,<br />
          <span className="text-[#8B1A2C]">not just compute.</span>
        </p>
      </div>

      {/* Bottom action bar */}
      <div className="flex items-center justify-between gap-6 px-8 md:px-14 py-8 mt-8 border-t border-[#D4C0B0]">
        <div className="flex items-center gap-4">
          <Link
            href="/works"
            className="text-sm font-semibold uppercase tracking-widest px-6 py-3 bg-[#8B1A2C] text-[#F4EBE0] rounded-full hover:bg-[#5C0F1A] transition-all"
          >
            View Work
          </Link>
          <Link
            href="/ai-twin"
            className="text-sm font-medium uppercase tracking-widest px-6 py-3 border border-[#D4C0B0] text-[#1C0D08] rounded-full hover:border-[#8B1A2C] hover:text-[#8B1A2C] transition-all flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B1A2C] animate-pulse" />
            Chat with AI Twin
          </Link>
        </div>
        <a
          href="mailto:nakati.akanksha@gmail.com"
          className="hidden md:block text-sm text-[#8A7468] hover:text-[#8B1A2C] transition-colors border-b border-[#D4C0B0] pb-0.5"
        >
          nakati.akanksha@gmail.com
        </a>
      </div>
    </section>
  );
}
