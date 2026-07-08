const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akanksha-nakati/" },
  { label: "GitHub", href: "https://github.com/Akanksha-Nakati" },
  { label: "Medium", href: "https://medium.com/@nakati.akanksha" },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 px-6 pb-10 md:px-10">
      <div className="grain relative mx-auto w-full max-w-[1280px] overflow-hidden rounded-[2.5rem] border border-white/50 px-8 py-20 md:px-16 md:py-28"
        style={{ background: "linear-gradient(135deg, #2c2233 0%, #45305e 55%, #7c5cff 130%)" }}
      >
        {/* peach glow */}
        <div
          className="pointer-events-none absolute -right-20 -top-16 h-80 w-80 rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--peach), transparent 70%)" }}
        />

        <div className="relative flex flex-col items-start gap-12">
          <div className="flex flex-col gap-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">
              Let&apos;s build something
            </span>
            <h2 className="font-display text-[clamp(40px,7vw,96px)] font-medium leading-[0.92] tracking-tight text-white">
              Let&apos;s work
              <br />
              <span className="italic text-[var(--peach)]">together</span> on
              <br />
              something great.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:nakati.akanksha@gmail.com"
              className="shine rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-widest text-foreground transition-transform hover:-translate-y-0.5"
            >
              Get in touch →
            </a>
            <a
              href="/ai-twin"
              className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-white/10"
            >
              Ask my AI Twin
            </a>
          </div>

          <div className="mt-4 flex w-full flex-col items-start justify-between gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
            <span className="font-display text-2xl italic text-white/80">AN.</span>
            <div className="flex flex-wrap items-center gap-7">
              {socials.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-widest text-white/60 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <p className="text-xs text-white/40">© {new Date().getFullYear()} Akanksha Nakati</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
