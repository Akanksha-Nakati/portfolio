import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, projects } from "../../lib/projects";
import Footer from "../../components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Akanksha Nakati`,
    description: project.shortDesc,
  };
}

const MediumIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="14" height="14" viewBox="0 0 1770.86 1000" fill="currentColor" aria-hidden>
    <path d="M992.49 514.29c0 276.07-221.95 499.89-495.77 499.89S.95 790.36.95 514.29 222.9 14.4 496.72 14.4s495.77 223.82 495.77 499.89m543.77 0c0 259.89-110.97 470.67-247.89 470.67s-247.89-210.78-247.89-470.67 110.97-470.67 247.89-470.67 247.89 210.73 247.89 470.67m233.6 0c0 232.81-39.01 421.6-87.15 421.6s-87.15-188.74-87.15-421.6 39.01-421.6 87.15-421.6 87.15 188.74 87.15 421.6" />
  </svg>
);

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <main>
        {/* Hero band — dark gradient */}
        <div className="px-6 pt-24 md:px-10">
          <div
            className="grain relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-[2.5rem] px-8 py-14 md:px-14 md:py-20"
            style={{ background: "linear-gradient(135deg, #2c2233 0%, #45305e 60%, #7c5cff 135%)" }}
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full opacity-50 blur-3xl"
              style={{ background: "radial-gradient(circle, var(--peach), transparent 70%)" }}
            />

            <Link
              href="/works"
              className="relative mb-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-white/60 transition-colors hover:text-white"
            >
              ← All work
            </Link>

            <div className="relative flex max-w-3xl flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                  {project.tag}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-widest text-white/60">
                  {project.year}
                </span>
                {project.live && (
                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/20 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-emerald-200">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                    Live
                  </span>
                )}
              </div>
              <h1 className="font-display text-[clamp(34px,6vw,76px)] font-medium leading-[0.98] tracking-tight text-white">
                {project.title}
              </h1>
              <p className="font-display text-[clamp(16px,1.8vw,22px)] italic leading-relaxed text-white/70">
                {project.shortDesc}
              </p>

              <div className="flex flex-wrap gap-3 pt-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shine inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition-transform hover:-translate-y-0.5"
                  >
                    View live ↗
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-white/10"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
                {project.articles && project.articles.length > 0 && (
                  <a
                    href={project.articles[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white/80 transition-all hover:bg-white/10 hover:text-white"
                  >
                    <MediumIcon />
                    Read on Medium
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-20 md:px-10">
          <div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 gap-14 md:grid-cols-3">
            <div className="flex flex-col gap-6 md:col-span-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
                About this project
              </span>
              <p className="text-[16px] leading-[1.85] text-foreground/80">
                {project.fullDesc}
              </p>
            </div>

            <aside className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-cream px-3 py-1.5 text-xs font-medium text-foreground/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted">
                  Links
                </span>
                <div className="flex flex-col gap-2">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-accent-strong">
                      <span className="h-1 w-1 rounded-full bg-accent" /> Live website ↗
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-accent-strong">
                      <span className="h-1 w-1 rounded-full bg-accent" /> GitHub repository ↗
                    </a>
                  )}
                  {!project.github && (
                    <span className="text-sm text-muted">Private repository</span>
                  )}
                </div>
              </div>

              {project.articles && project.articles.length > 0 && (
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted">
                    Written About This
                  </span>
                  <div className="flex flex-col gap-3">
                    {project.articles.map((a) => (
                      <a
                        key={a.url}
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-2.5 rounded-xl border border-border p-3 transition-all hover:border-accent/40 hover:bg-cream"
                      >
                        <MediumIcon className="mt-0.5 shrink-0 text-muted" />
                        <span className="text-xs leading-relaxed text-foreground/70 transition-colors group-hover:text-accent-strong">
                          {a.title} ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="px-6 md:px-10">
          <div className="mx-auto flex w-full max-w-[1000px] items-center justify-between border-t border-border py-10">
            <Link href="/works" className="text-sm font-medium uppercase tracking-widest text-muted transition-colors hover:text-foreground">
              ← Back to all work
            </Link>
            <Link href="/ai-twin" className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-muted transition-colors hover:text-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              Chat with AI Twin
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
