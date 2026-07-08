"use client";

type Card = {
  emoji: string;
  title: string;
  desc: string;
  tint: string;
};

const cards: Card[] = [
  {
    emoji: "🏃‍♀️",
    title: "National-level Athlete",
    desc: "Competed in Track & Field at the national level and won the Sports Excellence Award in 2022. Running taught me discipline and how to perform under pressure.",
    tint: "var(--accent)",
  },
  {
    emoji: "🥤",
    title: "Iced Coffee Devotee",
    desc: "Strong opinions about iced coffee — Dunkin' is non-negotiable in Boston. I even built an AI that recommends coffee. Full circle.",
    tint: "var(--peach)",
  },
  {
    emoji: "🏀",
    title: "Always Competitive",
    desc: "Running, bowling, basketball — doesn't matter what it is, I show up to win. Competition is how I have fun.",
    tint: "var(--peach)",
  },
  {
    emoji: "🤖",
    title: "Always Building",
    desc: "When I'm not working, I'm experimenting — LLM tools, data pipelines, side projects. Learning for fun is how I stay sharp.",
    tint: "var(--accent)",
  },
];

export default function BeyondWork() {
  return (
    <div className="py-20">
      <div className="mb-12 px-6 md:px-10">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
              Beyond Work
            </span>
            <h2 className="font-display text-[clamp(30px,4.5vw,54px)] font-medium leading-none tracking-tight text-foreground">
              A few things <span className="gradient-text italic">about me.</span>
            </h2>
          </div>
          <span className="hidden font-mono-d text-xs uppercase tracking-[0.2em] text-muted sm:block">
            Hover to explore →
          </span>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-6 md:h-[460px] md:flex-row md:px-10">
        {cards.map((card, i) => (
          <div
            key={i}
            className="group relative flex flex-1 cursor-pointer flex-col overflow-hidden rounded-[26px] border border-border p-6 transition-[flex-grow,box-shadow] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_40px_90px_-40px_rgba(72,44,120,0.6)] md:basis-0 md:p-0 md:hover:flex-grow-[4]"
            style={{
              background:
                "linear-gradient(165deg, color-mix(in srgb, var(--tint) 16%, var(--surface)) 0%, var(--surface) 70%)",
              ["--tint" as string]: card.tint,
            }}
          >
            {/* accent glow */}
            <span
              className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full opacity-40 blur-[70px] transition-opacity duration-500 group-hover:opacity-90"
              style={{ background: "var(--tint)" }}
            />
            {/* index */}
            <span className="absolute right-5 top-5 z-20 font-mono-d text-xs font-bold text-foreground/30">
              0{i + 1}
            </span>
            {/* oversized watermark */}
            <span className="pointer-events-none absolute -bottom-10 -right-6 select-none text-[170px] leading-none opacity-[0.06] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
              {card.emoji}
            </span>

            {/* collapsed strip (desktop only) */}
            <div className="absolute inset-0 z-10 hidden flex-col items-center justify-center gap-7 opacity-100 transition-opacity duration-300 group-hover:opacity-0 md:flex">
              <span className="text-3xl">{card.emoji}</span>
              <span className="font-display text-xl font-semibold tracking-tight text-foreground [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                {card.title}
              </span>
            </div>

            {/* expanded content (static on mobile, revealed on hover on desktop) */}
            <div className="relative z-10 flex flex-col gap-3 md:absolute md:inset-0 md:justify-end md:p-8 md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100 md:group-hover:delay-150">
              <span className="text-4xl">{card.emoji}</span>
              <h3 className="font-display text-2xl font-semibold leading-tight text-foreground">
                {card.title}
              </h3>
              <p className="max-w-[360px] text-sm leading-relaxed text-muted">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
