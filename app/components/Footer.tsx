import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#7C6FCD] text-white">
      <div className="px-8 md:px-14 pt-24 pb-16 border-b border-white/10 relative overflow-hidden">
        <span className="absolute top-12 right-[20%] text-white/20 text-4xl select-none pointer-events-none font-bold">✦</span>
        <span className="absolute bottom-8 left-[15%] text-white/15 text-3xl select-none pointer-events-none font-bold">✦</span>
        <span className="absolute top-20 left-[45%] text-white/10 text-2xl select-none pointer-events-none font-bold">✦</span>

        <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <h2 className="font-[var(--font-display)] text-[clamp(44px,7vw,100px)] leading-[0.9] tracking-tight max-w-2xl">
            Let&apos;s work<br />
            <span className="italic text-white/60">together</span><br />
            on something great.
          </h2>

          <div className="flex flex-col items-center gap-5 shrink-0">
            <Image src="/photo-coffee.png" alt="Iced coffee" width={130} height={180}
              className="object-contain drop-shadow-2xl rotate-[-8deg]" />
            <a href="mailto:nakati.akanksha@gmail.com"
              className="text-sm font-semibold uppercase tracking-widest px-8 py-4 bg-white text-[#7C6FCD] rounded-full hover:bg-white/90 transition-all whitespace-nowrap">
              Get in Touch →
            </a>
          </div>
        </div>
      </div>

      <div className="px-8 md:px-14 py-8">
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between flex-wrap gap-4">
          <span className="font-[var(--font-display)] italic text-2xl text-white/60">AN.</span>
          <div className="flex items-center gap-8">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/akanksha-nakati/" },
              { label: "GitHub", href: "https://github.com/Akanksha-Nakati" },
              { label: "Medium", href: "https://medium.com/@nakati.akanksha" },
            ].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-white transition-colors uppercase tracking-widest">
                {l.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-white/20">© {new Date().getFullYear()} Akanksha Nakati</p>
        </div>
      </div>
    </footer>
  );
}
