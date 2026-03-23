import Link from "next/link";
import { projects } from "../lib/projects";

const featured = projects.slice(0, 4);

const cardColors = [
  "bg-[#EDE3D7]",
  "bg-[#E8DDD0]",
  "bg-[#EDE3D7]",
  "bg-[#E8DDD0]",
];

export default function Projects() {
  return (
    <section className="bg-[#1C0D08] py-24 px-8 md:px-14">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="flex items-end justify-between">
          <h2 className="font-[var(--font-display)] text-[clamp(40px,6vw,80px)] leading-none text-[#F4EBE0] tracking-tight">
            Selected<br />
            <span className="italic text-[#C4918C]">Work.</span>
          </h2>
          <Link
            href="/works"
            className="text-sm font-medium text-[#C4918C] hover:text-[#F4EBE0] transition-colors uppercase tracking-widest border-b border-[#C4918C]/40 pb-0.5 self-end mb-2"
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
                  <span className="text-[10px] font-semibold text-[#8B1A2C] uppercase tracking-[0.2em] bg-[#8B1A2C]/10 px-2.5 py-1 rounded-full">
                    {p.tag}
                  </span>
                  <div className="flex items-center gap-2">
                    {p.live && (
                      <span className="text-[9px] font-semibold text-green-700 uppercase tracking-widest bg-green-100 px-2 py-1 rounded-full">
                        Live
                      </span>
                    )}
                    <span className="text-xs text-[#8A7468]">{p.year}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-6">
                  <h3 className="font-[var(--font-display)] text-[clamp(20px,2.2vw,28px)] leading-tight text-[#1C0D08]">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#8A7468] leading-relaxed">{p.shortDesc}</p>
                  <span className="text-xs font-semibold text-[#8B1A2C] uppercase tracking-widest group-hover:underline mt-1">
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
