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
    title: `${project.title} — Akanksha Nakati`,
    description: project.shortDesc,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <main className="bg-[#F4EBE0] min-h-screen pt-28">
        {/* Back link */}
        <div className="px-8 md:px-14 pt-8">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#8A7468] hover:text-[#8B1A2C] transition-colors uppercase tracking-widest"
          >
            ← All Work
          </Link>
        </div>

        {/* Hero section */}
        <div className="px-8 md:px-14 py-14 border-b border-[#D4C0B0]">
          <div className="w-full max-w-[1000px] flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-semibold text-[#8B1A2C] uppercase tracking-[0.25em] bg-[#8B1A2C]/10 px-3 py-1.5 rounded-full">
                {project.tag}
              </span>
              <span className="text-[10px] font-medium text-[#8A7468] uppercase tracking-widest">
                {project.year}
              </span>
            </div>
            <h1 className="font-[var(--font-display)] text-[clamp(36px,6vw,80px)] leading-[0.92] tracking-tight text-[#1C0D08]">
              {project.title}
            </h1>
            <p className="font-[var(--font-playfair)] italic text-[clamp(16px,1.8vw,22px)] text-[#8A7468] leading-relaxed max-w-2xl">
              {project.shortDesc}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B1A2C] text-[#F4EBE0] text-sm font-semibold uppercase tracking-widest rounded-full hover:bg-[#5C0F1A] transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C9C0]" />
                  View Live
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#8B1A2C] text-[#8B1A2C] text-sm font-semibold uppercase tracking-widest rounded-full hover:bg-[#8B1A2C] hover:text-[#F4EBE0] transition-all"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
              {!project.github && (
                <span className="inline-flex items-center gap-2 px-6 py-3 border border-[#D4C0B0] text-[#8A7468] text-sm font-medium uppercase tracking-widest rounded-full cursor-not-allowed">
                  Private Repo
                </span>
              )}
              {project.articles && project.articles.length > 0 && (
                <a
                  href={project.articles[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#D4C0B0] text-[#1C0D08]/60 text-sm font-semibold uppercase tracking-widest rounded-full hover:border-[#8B1A2C] hover:text-[#8B1A2C] transition-all"
                >
                  <svg width="14" height="14" viewBox="0 0 1770.86 1000" fill="currentColor">
                    <path d="M992.49 514.29c0 276.07-221.95 499.89-495.77 499.89S.95 790.36.95 514.29 222.9 14.4 496.72 14.4s495.77 223.82 495.77 499.89m543.77 0c0 259.89-110.97 470.67-247.89 470.67s-247.89-210.78-247.89-470.67 110.97-470.67 247.89-470.67 247.89 210.73 247.89 470.67m233.6 0c0 232.81-39.01 421.6-87.15 421.6s-87.15-188.74-87.15-421.6 39.01-421.6 87.15-421.6 87.15 188.74 87.15 421.6" />
                  </svg>
                  Read on Medium
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 md:px-14 py-16">
          <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Description */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B1A2C]">About this project</span>
              <p className="text-[16px] leading-[1.8] text-[#1C0D08]/75">
                {project.fullDesc}
              </p>
            </div>

            {/* Sidebar: stack + links */}
            <div className="flex flex-col gap-10">
              {/* Tech Stack */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B1A2C]">Tech Stack</span>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#EDE3D7] border border-[#D4C0B0] text-[#1C0D08]/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B1A2C]">Links</span>
                <div className="flex flex-col gap-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#1C0D08]/60 hover:text-[#8B1A2C] transition-colors flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#8B1A2C]" />
                      Live Website ↗
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#1C0D08]/60 hover:text-[#8B1A2C] transition-colors flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#8B1A2C]" />
                      GitHub Repository ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Medium articles */}
              {project.articles && project.articles.length > 0 && (
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B1A2C]">
                    Written About This
                  </span>
                  <div className="flex flex-col gap-3">
                    {project.articles.map((a) => (
                      <a
                        key={a.url}
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-2.5 p-3 rounded-xl border border-[#D4C0B0] hover:border-[#8B1A2C]/40 hover:bg-[#EDE3D7] transition-all"
                      >
                        {/* Medium M icon */}
                        <svg className="shrink-0 mt-0.5 text-[#8B1A2C]" width="14" height="14" viewBox="0 0 1770.86 1000" fill="currentColor">
                          <path d="M992.49 514.29c0 276.07-221.95 499.89-495.77 499.89S.95 790.36.95 514.29 222.9 14.4 496.72 14.4s495.77 223.82 495.77 499.89m543.77 0c0 259.89-110.97 470.67-247.89 470.67s-247.89-210.78-247.89-470.67 110.97-470.67 247.89-470.67 247.89 210.73 247.89 470.67m233.6 0c0 232.81-39.01 421.6-87.15 421.6s-87.15-188.74-87.15-421.6 39.01-421.6 87.15-421.6 87.15 188.74 87.15 421.6" />
                        </svg>
                        <span className="text-xs text-[#1C0D08]/65 group-hover:text-[#8B1A2C] leading-relaxed transition-colors">
                          {a.title} ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom nav: prev / next project */}
        <div className="px-8 md:px-14 py-10 border-t border-[#D4C0B0]">
          <div className="w-full max-w-[1000px] flex justify-between items-center">
            <Link
              href="/works"
              className="text-sm font-medium text-[#8A7468] hover:text-[#8B1A2C] transition-colors uppercase tracking-widest"
            >
              ← Back to All Work
            </Link>
            <Link
              href="/ai-twin"
              className="text-sm font-medium text-[#8A7468] hover:text-[#8B1A2C] transition-colors uppercase tracking-widest flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B1A2C] animate-pulse" />
              Chat with AI Twin
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
