import Link from "next/link";
import { projects } from "../lib/projects";
import Footer from "../components/Footer";

export default function Works() {
  return (
    <>
      <main className="bg-white pt-0 pb-0">
        {/* Hero header - solid purple matching hero style */}
        <div className="bg-[#7C6FCD] px-8 md:px-14 pt-36 pb-16 relative overflow-hidden">
          <span className="absolute top-8 right-16 text-white/20 text-4xl select-none font-bold">✦</span>
          <span className="absolute bottom-8 left-[40%] text-white/15 text-3xl select-none font-bold">✦</span>
          <div className="w-full max-w-[1400px] mx-auto">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50 block mb-4">All Work</span>
            <h1 className="font-[var(--font-display)] text-[clamp(56px,9vw,120px)] leading-[0.88] tracking-tight text-white">
              Projects<br />
              <span className="italic text-white/60">&amp; Work.</span>
            </h1>
          </div>
        </div>

        {/* Project list */}
        <div className="px-8 md:px-14 py-12">
          <div className="w-full max-w-[1400px] mx-auto flex flex-col">
            {projects.map((p, i) => (
              <Link key={p.slug} href={`/works/${p.slug}`}>
                <div className="flex items-center justify-between py-7 border-b border-[#DDD8F5] group hover:bg-[#EDE9FF] -mx-4 px-4 rounded-lg transition-colors cursor-pointer">
                  <div className="flex items-start gap-8">
                    <span className="font-[var(--font-display)] text-[#C8C0E8] text-sm mt-1 w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-[var(--font-playfair)] font-semibold text-[clamp(16px,1.8vw,22px)] text-[#2D1B69] group-hover:text-[#7C6FCD] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-[#8880B8] hidden md:block">{p.shortDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 shrink-0">
                    <span className="text-[10px] font-semibold text-[#5A4FB0] uppercase tracking-widest hidden sm:block bg-[#7C6FCD]/10 px-2.5 py-1 rounded-full">
                      {p.tag}
                    </span>
                    <span className="text-sm text-[#8880B8]">{p.year}</span>
                    {p.live && (
                      <span className="text-[10px] font-semibold text-green-700 uppercase tracking-widest hidden lg:block">
                        Live ↗
                      </span>
                    )}
                    <span className="text-[#C8C0E8] group-hover:text-[#7C6FCD] transition-colors text-lg">→</span>
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
