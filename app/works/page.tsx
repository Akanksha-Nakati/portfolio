import Link from "next/link";
import { projects } from "../lib/projects";
import Footer from "../components/Footer";

export default function Works() {
  return (
    <>
      <main className="bg-[#F4EBE0] pt-28 pb-0">
        {/* Header */}
        <div className="px-8 md:px-14 py-16 border-b border-[#D4C0B0]">
          <div className="w-full max-w-[1400px] mx-auto">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B1A2C] block mb-4">All Work</span>
            <h1 className="font-[var(--font-display)] text-[clamp(56px,9vw,120px)] leading-[0.88] tracking-tight text-[#1C0D08]">
              Projects<br />
              <span className="italic text-[#8B1A2C]">&amp; Work.</span>
            </h1>
          </div>
        </div>

        {/* Project list */}
        <div className="px-8 md:px-14 py-12">
          <div className="w-full max-w-[1400px] mx-auto flex flex-col">
            {projects.map((p, i) => (
              <Link key={p.slug} href={`/works/${p.slug}`}>
                <div className="flex items-center justify-between py-7 border-b border-[#D4C0B0] group hover:bg-[#EDE3D7] -mx-4 px-4 rounded-lg transition-colors cursor-pointer">
                  <div className="flex items-start gap-8">
                    <span className="font-[var(--font-display)] text-[#D4C0B0] text-sm mt-1 w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-[var(--font-playfair)] font-semibold text-[clamp(16px,1.8vw,22px)] text-[#1C0D08] group-hover:text-[#8B1A2C] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-[#8A7468] hidden md:block">{p.shortDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 shrink-0">
                    <span className="text-[10px] font-semibold text-[#8B1A2C] uppercase tracking-widest hidden sm:block bg-[#8B1A2C]/10 px-2.5 py-1 rounded-full">
                      {p.tag}
                    </span>
                    <span className="text-sm text-[#8A7468]">{p.year}</span>
                    {p.live && (
                      <span className="text-[10px] font-semibold text-green-700 uppercase tracking-widest hidden lg:block">
                        Live ↗
                      </span>
                    )}
                    <span className="text-[#D4C0B0] group-hover:text-[#8B1A2C] transition-colors text-lg">→</span>
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
