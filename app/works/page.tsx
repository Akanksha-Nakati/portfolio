import Link from "next/link";
import { projects } from "../lib/projects";
import Footer from "../components/Footer";

export default function Works() {
  return (
    <>
      <main className="bg-[#F0ECFF] pt-28 pb-0">
        {/* Header */}
        <div className="px-8 md:px-14 py-16 border-b border-[#C8C0E8]">
          <div className="w-full max-w-[1400px] mx-auto">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6B5CE7] block mb-4">All Work</span>
            <h1 className="font-[var(--font-display)] text-[clamp(56px,9vw,120px)] leading-[0.88] tracking-tight text-[#1A1040]">
              Projects<br />
              <span className="italic text-[#6B5CE7]">&amp; Work.</span>
            </h1>
          </div>
        </div>

        {/* Project list */}
        <div className="px-8 md:px-14 py-12">
          <div className="w-full max-w-[1400px] mx-auto flex flex-col">
            {projects.map((p, i) => (
              <Link key={p.slug} href={`/works/${p.slug}`}>
                <div className="flex items-center justify-between py-7 border-b border-[#C8C0E8] group hover:bg-[#E8E2FF] -mx-4 px-4 rounded-lg transition-colors cursor-pointer">
                  <div className="flex items-start gap-8">
                    <span className="font-[var(--font-display)] text-[#C8C0E8] text-sm mt-1 w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-[var(--font-playfair)] font-semibold text-[clamp(16px,1.8vw,22px)] text-[#1A1040] group-hover:text-[#6B5CE7] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-[#7B72A8] hidden md:block">{p.shortDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 shrink-0">
                    <span className="text-[10px] font-semibold text-[#4838C9] uppercase tracking-widest hidden sm:block bg-[#6B5CE7]/10 px-2.5 py-1 rounded-full">
                      {p.tag}
                    </span>
                    <span className="text-sm text-[#7B72A8]">{p.year}</span>
                    {p.live && (
                      <span className="text-[10px] font-semibold text-green-700 uppercase tracking-widest hidden lg:block">
                        Live ↗
                      </span>
                    )}
                    <span className="text-[#C8C0E8] group-hover:text-[#6B5CE7] transition-colors text-lg">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
