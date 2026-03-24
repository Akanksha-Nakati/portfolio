import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1C0D08] text-[#F4EBE0]">
      {/* Big CTA */}
      <div className="px-8 md:px-14 pt-24 pb-16 border-b border-[#F4EBE0]/10">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          {/* Left: headline */}
          <h2 className="font-[var(--font-display)] text-[clamp(44px,7vw,100px)] leading-[0.9] tracking-tight max-w-2xl">
            Let&apos;s build<br />
            <span className="italic text-[#C4918C]">something</span><br />
            great together.
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
              className="text-sm font-semibold uppercase tracking-widest px-8 py-4 bg-[#8B1A2C] text-[#F4EBE0] rounded-full hover:bg-[#5C0F1A] transition-all whitespace-nowrap"
            >
              Get in Touch →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-8 md:px-14 py-8">
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between flex-wrap gap-4">
          <span className="font-[var(--font-display)] italic text-2xl text-[#C4918C]">AN.</span>
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
                className="text-sm text-[#F4EBE0]/40 hover:text-[#F4EBE0] transition-colors uppercase tracking-widest"
              >
                {l.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-[#F4EBE0]/20">© {new Date().getFullYear()} Akanksha Nakati</p>
        </div>
      </div>
    </footer>
  );
}
