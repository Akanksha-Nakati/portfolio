import Image from "next/image";
import Link from "next/link";

const skills = ["Python", "PySpark", "SQL", "Databricks", "Snowflake", "Airflow", "LangChain", "RAG", "Azure", "dbt", "GCP", "Tableau"];

export default function About() {
  return (
    <section className="relative px-6 py-24 md:px-10">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-16">
        <div className="reveal flex items-center gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
            About Me
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[0.85fr_1.15fr]">
          {/* Portrait */}
          <div className="reveal relative mx-auto w-full max-w-[340px]">
            <div
              className="pointer-events-none absolute -inset-4 -z-10 opacity-60 blur-2xl"
              style={{ background: "radial-gradient(circle at 30% 20%, var(--accent), transparent 60%), radial-gradient(circle at 80% 90%, var(--peach), transparent 60%)" }}
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[var(--accent-cream)] shadow-[0_30px_70px_-35px_rgba(72,44,120,0.5)]">
              <div className="relative aspect-square w-full">
                <Image
                  src="/photo-about.png"
                  alt="Akanksha Nakati"
                  fill
                  sizes="340px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="glass absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full px-5 py-2 shadow-lg">
              <span className="font-display text-sm italic text-foreground">Boston, MA · Data Engineer</span>
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-8">
            <h2 className="reveal font-display text-[clamp(34px,5vw,60px)] font-medium leading-[0.98] tracking-tight text-foreground">
              I build <span className="gradient-text italic">data</span> systems
              <br />
              that think.
            </h2>
            <p className="reveal max-w-xl text-[clamp(15px,1.5vw,18px)] leading-[1.7] text-muted">
              From intelligent data pipelines to predictive models, I blend
              analytics and engineering to transform raw data into strategic
              insight. My work bridges AI innovation and business storytelling —
              creating systems that don&apos;t just analyze, but anticipate and
              inspire action.
            </p>

            <div className="reveal flex flex-col gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Stack &amp; Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-foreground/70 transition-colors hover:border-accent/40 hover:text-accent-strong"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className="reveal group inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-7 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:text-accent-strong"
            >
              Read my full story
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
