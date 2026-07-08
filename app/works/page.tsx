import Link from "next/link";
import { projects } from "../lib/projects";
import Footer from "../components/Footer";

export default function Works() {
  return (
    <>
      <main className="px-6 pt-32 md:px-10 md:pt-40">
        {/* Hero */}
        <div className="mx-auto w-full max-w-[1200px]">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
            All Work
          </span>
          <h1 className="mt-4 font-display text-[clamp(52px,9vw,120px)] font-medium leading-[0.9] tracking-tight text-foreground">
            Projects <span className="gradient-text italic">&amp; work.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[clamp(15px,1.5vw,18px)] leading-[1.7] text-muted">
            A selection of things I&apos;ve built — spanning data engineering, AI
            systems, and marketing analytics.
          </p>
        </div>

        {/* List */}
        <div className="mx-auto mt-16 w-full max-w-[1200px]">
          {projects.map((p, i) => (
            <Link key={p.slug} href={`/works/${p.slug}`} className="group block">
              <div className="relative flex items-center justify-between gap-6 border-t border-border py-8 transition-all">
                <div
                  className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-accent/[0.05] to-peach/[0.05] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="flex items-start gap-6 md:gap-10">
                  <span className="mt-1 w-8 shrink-0 font-display text-sm text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-[clamp(20px,2.4vw,32px)] font-medium leading-tight text-foreground transition-transform duration-300 group-hover:translate-x-1">
                      {p.title}
                    </h3>
                    <p className="hidden max-w-xl text-sm text-muted md:block">
                      {p.shortDesc}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-5">
                  <span className="hidden rounded-full bg-cream px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground/60 sm:block">
                    {p.tag}
                  </span>
                  <span className="hidden text-sm text-muted md:block">{p.year}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
          <div className="border-t border-border" />
        </div>
      </main>
      <Footer />
    </>
  );
}
