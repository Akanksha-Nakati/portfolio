import Link from "next/link";
import { projects } from "../lib/projects";

const featured = projects.slice(0, 4);

const cardColors = [
  "bg-[#E8E2FF]",
  "bg-[#FFE8D6]",
  "bg-[#E8E2FF]",
  "bg-[#FFE8D6]",
];

const tagColors = [
  "bg-[#6B5CE7]/10 text-[#4838C9]",
  "bg-[#FFD4B8] text-[#A0500A]",
  "bg-[#6B5CE7]/10 text-[#4838C9]",
  "bg-[#FFD4B8] text-[#A0500A]",
];

const linkColors = [
  "text-[#6B5CE7]",
  "text-[#A0500A]",
  "text-[#6B5CE7]",
  "text-[#A0500A]",
];

export default function Projects() {
  return (
    <section className="bg-[#1A1040] py-24 px-8 md:px-14 relative overflow-hidden">
      {/* Decorative sparkles */}
      <span className="absolute top-12 right-16 text-[#6B5CE7]/30 text-4xl select-none pointer-events-none font-bold">✦</span>
      <span className="absolute bottom-16 left-[40%] text-[#FFD4B8]/20 text-3xl select-none pointer-events-none font-bold">✦</span>

      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="flex items-end justify-between">
          <h2 className="font-[var(--font-display)] text-[clamp(40px,6vw,80px)] leading-none text-[#F0ECFF] tracking-tight">
            Selected<br />
            <span className="italic text-[#A89EF0]">Work.</span>
          </h2>
          <Link
            href="/works"
            className="text-sm font-medium text-[#A89EF0] hover:text-[#F0ECFF] transition-colors uppercase tracking-widest border-b border-[#A89EF0]/40 pb-0.5 self-end mb-2"
          >
            All Projects →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featured.map((p, i) => (
            <Link key={p.slug} href={`/works/${p.slug}`}>
              <div
                className={`${cardColors[i]} rounded-2xl p-8 flex flex-col justify-between min-h-[280px] group hover:scale-[1.015] transition-all duration-300 cursor-pointer`}
              >
                <div className="flex items-start justify-between">
                  <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full ${tagColors[i]}`}>
                    {p.tag}
                  </span>
                  <div className="flex items-center gap-2">
                    {p.live && (
                      <span className="text-[9px] font-semibold text-green-700 uppercase tracking-widest bg-green-100 px-2 py-1 rounded-full">
                        Live
                      </span>
                    )}
                    <span className="text-xs text-[#7B72A8]">{p.year}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-6">
                  <h3 className="font-[var(--font-display)] text-[clamp(20px,2.2vw,28px)] leading-tight text-[#1A1040]">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#7B72A8] leading-relaxed">{p.shortDesc}</p>
                  <span className={`text-xs font-semibold uppercase tracking-widest group-hover:underline mt-1 ${linkColors[i]}`}>
                    View Project →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
