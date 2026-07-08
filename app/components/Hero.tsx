import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-32 md:pt-40">
      {/* soft floating accents */}
      <div
        className="float-slow pointer-events-none absolute -left-10 top-40 h-56 w-56 opacity-40 blur-2xl"
        style={{ background: "radial-gradient(circle, var(--peach), transparent 70%)" }}
      />
      <div
        className="float-slow pointer-events-none absolute right-[6%] top-24 h-72 w-72 opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)", animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left — copy */}
        <div className="flex flex-col gap-7">
          <span className="rise inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-[12px] font-medium tracking-wide text-muted backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.18)]" />
            Open to Data / AI Engineering roles
          </span>

          <h1
            className="rise font-display text-[clamp(44px,7vw,88px)] font-medium leading-[0.95] tracking-tight text-foreground"
            style={{ animationDelay: "0.06s" }}
          >
            I build{" "}
            <span className="gradient-text italic">data systems</span>
            <br />
            that <span className="italic">think ahead.</span>
          </h1>

          <p
            className="rise max-w-xl text-[clamp(15px,1.5vw,18px)] leading-[1.7] text-muted"
            style={{ animationDelay: "0.12s" }}
          >
            I&apos;m <span className="font-medium text-foreground">Akanksha Nakati</span> — a Data &amp; AI
            Engineer turning raw, messy data into intelligent pipelines,
            predictive models, and analytics that anticipate and inspire action.
          </p>

          <div className="rise flex flex-wrap items-center gap-3" style={{ animationDelay: "0.18s" }}>
            <Link
              href="/works"
              className="shine rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              View my work →
            </Link>
            <Link
              href="/ai-twin"
              className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.06] px-7 py-3.5 text-sm font-medium text-accent-strong transition-all hover:border-accent/60"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              Chat with my AI Twin
            </Link>
          </div>

          <div className="rise flex flex-wrap gap-x-10 gap-y-4 pt-4" style={{ animationDelay: "0.24s" }}>
            {[
              { num: "2+", label: "Years experience" },
              { num: "9+", label: "Projects shipped" },
              { num: "2M+", label: "Records / day" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-display text-[clamp(26px,3vw,40px)] leading-none text-foreground">
                  {s.num}
                </span>
                <span className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — portrait in organic frame */}
        <div className="rise relative mx-auto w-full max-w-[460px]" style={{ animationDelay: "0.1s" }}>
          <div
            className="spin-slow absolute -inset-6 -z-10 opacity-70 blur-2xl"
            style={{ background: "conic-gradient(from 0deg, var(--accent), var(--peach), var(--lilac), var(--accent))", borderRadius: "42% 58% 63% 37% / 42% 45% 55% 58%" }}
          />
          <div
            className="relative overflow-hidden border border-white/60 shadow-[0_40px_90px_-40px_rgba(72,44,120,0.55)]"
            style={{ borderRadius: "42% 58% 63% 37% / 42% 45% 55% 58%", animation: "blob 12s ease-in-out infinite" }}
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/grad-hero.jpg"
                alt="Akanksha Nakati"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 460px"
                className="object-cover"
              />
            </div>
          </div>

          {/* floating chips */}
          <div className="float-slow glass absolute -left-4 top-10 rounded-2xl px-4 py-3 shadow-lg" style={{ ["--r" as string]: "-6deg" }}>
            <p className="font-display text-lg leading-none text-foreground">Databricks</p>
            <p className="mt-1 text-[11px] uppercase tracking-widest text-muted">Data Engineering</p>
          </div>
          <div className="float-slow glass absolute -right-3 bottom-12 rounded-2xl px-4 py-3 shadow-lg" style={{ ["--r" as string]: "7deg", animationDelay: "1.2s" }}>
            <p className="font-display text-lg leading-none text-foreground">LangChain · RAG</p>
            <p className="mt-1 text-[11px] uppercase tracking-widest text-muted">AI Systems</p>
          </div>
        </div>
      </div>
    </section>
  );
}
