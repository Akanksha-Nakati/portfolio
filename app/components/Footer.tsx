import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1A1040] text-[#F0ECFF]">
      {/* Big CTA */}
      <div className="px-8 md:px-14 pt-24 pb-16 border-b border-[#F0ECFF]/10 relative overflow-hidden">
        {/* Sparkle decorations */}
        <span className="absolute top-12 right-[20%] text-[#6B5CE7]/40 text-4xl select-none pointer-events-none font-bold">✦</span>
        <span className="absolute bottom-8 left-[15%] text-[#FFD4B8]/30 text-3xl select-none pointer-events-none font-bold">✦</span>
        <span className="absolute top-20 left-[45%] text-[#A89EF0]/25 text-2xl select-none pointer-events-none font-bold">✦</span>

        <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          {/* Left: headline */}
          <h2 className="font-[var(--font-display)] text-[clamp(44px,7vw,100px)] leading-[0.9] tracking-tight max-w-2xl">
            Let&apos;s work<br />
            <span className="italic text-[#A89EF0]">together</span><br />
            on something great.
          </h2>

          {/* Right: coffee graphic + button */}
          <div className="flex flex-col items-center gap-5 shrink-0">
            <Image
              src="/photo-coffee.png"
              alt="Iced coffee"
              width={130}
              height={180}
              className="object-contain drop-shadow-2xl rotate-[-8deg]"
            />
            <a
              href="mailto:nakati.akanksha@gmail.com"
              className="text-sm font-semibold uppercase tracking-widest px-8 py-4 bg-[#6B5CE7] text-white rounded-full hover:bg-[#4838C9] transition-all whitespace-nowrap"
            >
              Get in Touch →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-8 md:px-14 py-8">
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between flex-wrap gap-4">
          <span className="font-[var(--font-display)] italic text-2xl text-[#A89EF0]">AN.</span>
          <div className="flex items-center gap-8">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/akanksha-nakati/" },
              { label: "GitHub", href: "https://github.com/Akanksha-Nakati" },
              { label: "Portfolio", href: "https://akankshanakati.framer.website" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#F0ECFF]/40 hover:text-[#F0ECFF] transition-colors uppercase tracking-widest"
              >
                {l.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-[#F0ECFF]/20">© {new Date().getFullYear()} Akanksha Nakati</p>
        </div>
      </div>
    </footer>
  );
}
