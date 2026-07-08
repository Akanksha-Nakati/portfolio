import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Journey from "../components/ExperienceDial";
import BeyondWork from "../components/BeyondWork";

const skillGroups = [
  { label: "Data Engineering", items: ["Python", "PySpark", "SQL", "Databricks", "Snowflake", "Airflow", "dbt", "Delta Lake"] },
  { label: "AI / ML", items: ["LangChain", "RAG", "TensorFlow", "scikit-learn", "Causal Inference", "NLP"] },
  { label: "Cloud & Analytics", items: ["Azure", "GCP", "Tableau", "A/B Testing", "Data Viz"] },
];

export default function About() {
  return (
    <>
      <main className="pt-32 md:pt-40">
        {/* Intro */}
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <section className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
                About
              </span>
              <h1 className="font-display text-[clamp(40px,6vw,80px)] font-medium leading-[0.96] tracking-tight text-foreground">
                Data engineer by craft,
                <br />
                <span className="gradient-text italic">storyteller</span> by
                instinct.
              </h1>
              <p className="max-w-xl text-[clamp(15px,1.5vw,18px)] leading-[1.7] text-muted">
                I&apos;m Akanksha — a Data &amp; AI Engineer based in Boston. I
                build the pipelines, models, and dashboards that let teams move
                fast and trust their data. I care as much about the story the
                data tells as the systems that produce it.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="mailto:nakati.akanksha@gmail.com"
                  className="shine rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                >
                  Get in touch →
                </a>
                <Link
                  href="/works"
                  className="rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:text-accent-strong"
                >
                  See my work
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[380px]">
              <div
                className="spin-slow absolute -inset-5 -z-10 opacity-60 blur-2xl"
                style={{ background: "conic-gradient(from 0deg, var(--accent), var(--peach), var(--lilac), var(--accent))", borderRadius: "48% 52% 60% 40% / 45% 45% 55% 55%" }}
              />
              <div
                className="relative overflow-hidden border border-white/60 shadow-[0_40px_90px_-40px_rgba(72,44,120,0.55)]"
                style={{ borderRadius: "48% 52% 60% 40% / 45% 45% 55% 55%" }}
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/photo-graduation.png"
                    alt="Akanksha Nakati"
                    fill
                    sizes="380px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Journey — full-bleed dark scrapbook timeline */}
        <div className="mt-24 md:mt-32">
          <Journey />
        </div>

        {/* What I work with */}
        <div className="mx-auto mt-28 w-full max-w-[1200px] px-6 md:px-10">
          <section>
            <div className="mb-12 flex items-center gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
                What I Work With
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {skillGroups.map((g) => (
                <div
                  key={g.label}
                  className="rounded-3xl border border-border bg-surface p-7 shadow-[0_20px_50px_-34px_rgba(72,44,120,0.4)]"
                >
                  <h3 className="font-display text-xl text-foreground">{g.label}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-cream px-3 py-1.5 text-xs font-medium text-foreground/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Beyond work */}
        <div className="mt-20">
          <BeyondWork />
        </div>
      </main>
      <Footer />
    </>
  );
}
