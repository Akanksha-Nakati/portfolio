import Link from "next/link";
import { projects } from "../lib/projects";

const featured = projects.slice(0, 4);

// alternating accent tints
const tints = [
  { glow: "rgba(124,92,255,0.16)", chip: "bg-accent/10 text-accent-strong", num: "text-accent/10" },
  { glow: "rgba(244,165,138,0.20)", chip: "bg-peach/15 text-peach-strong", num: "text-peach/15" },
  { glow: "rgba(244,165,138,0.20)", chip: "bg-peach/15 text-peach-strong", num: "text-peach/15" },
  { glow: "rgba(124,92,255,0.16)", chip: "bg-accent/10 text-accent-strong", num: "text-accent/10" },
];

export default function Projects() {
  return (
    <section className="relative px-6 py-24 md:px-10">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-14">
        <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
              Selected Work
            </span>
            <h2 className="font-display text-[clamp(40px,6vw,76px)] font-medium leading-[0.95] tracking-tight text-foreground">
              Featured <span className="gradient-text italic">projects.</span>
            </h2>
          </div>
          <Link
            href="/works"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:text-accent-strong"
          >
            All projects
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {featured.map((p, i) => {
            const t = tints[i];
            return (
              <Link key={p.slug} href={`/works/${p.slug}`} className="reveal group">
                <div className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-accent/30 group-hover:shadow-[0_36px_80px_-40px_rgba(72,44,120,0.45)]">
                  {/* glow on hover */}
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `radial-gradient(circle, ${t.glow}, transparent 70%)` }}
                  />
                  <span className={`pointer-events-none absolute -top-5 right-3 select-none font-display text-[130px] font-bold leading-none ${t.num}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex items-start justify-between">
                    <span className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${t.chip}`}>
                      {p.tag}
                    </span>
                    <div className="flex items-center gap-2">
                      {p.live && (
                        <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-emerald-600">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                          Live
                        </span>
                      )}
                      <span className="text-xs text-muted">{p.year}</span>
                    </div>
                  </div>

                  <div className="relative mt-8 flex flex-col gap-3">
                    <h3 className="font-display text-[clamp(21px,2.2vw,30px)] font-medium leading-tight text-foreground">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">{p.shortDesc}</p>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent-strong">
                      View project
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
