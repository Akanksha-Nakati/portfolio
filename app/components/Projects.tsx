import Link from "next/link";
import { projects } from "../lib/projects";

const featured = projects.slice(0, 4);

const cards = [
  { bg: "bg-[#7C6FCD]", text: "text-white", tag: "bg-white/15 text-white", num: "text-white/10", desc: "text-white/60", link: "text-white/70 group-hover:text-white" },
  { bg: "bg-white border border-[#DDD8F5]", text: "text-[#2D1B69]", tag: "bg-[#EDE9FF] text-[#5A4FB0]", num: "text-[#7C6FCD]/10", desc: "text-[#8880B8]", link: "text-[#7C6FCD] group-hover:text-[#5A4FB0]" },
  { bg: "bg-white border border-[#DDD8F5]", text: "text-[#2D1B69]", tag: "bg-[#EDE9FF] text-[#5A4FB0]", num: "text-[#7C6FCD]/10", desc: "text-[#8880B8]", link: "text-[#7C6FCD] group-hover:text-[#5A4FB0]" },
  { bg: "bg-[#7C6FCD]", text: "text-white", tag: "bg-white/15 text-white", num: "text-white/10", desc: "text-white/60", link: "text-white/70 group-hover:text-white" },
];

export default function Projects() {
  return (
    <section className="bg-[#F5F3FF] py-24 px-8 md:px-14">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-12">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7C6FCD]">My Projects</span>
            <h2 className="font-[var(--font-display)] text-[clamp(40px,6vw,80px)] leading-none text-[#2D1B69] tracking-tight">
              My<br />
              <span className="italic text-[#7C6FCD]">Projects.</span>
            </h2>
          </div>
          <Link href="/works"
            className="text-sm font-semibold uppercase tracking-widest px-6 py-3 border border-[#7C6FCD] text-[#7C6FCD] rounded-full hover:bg-[#7C6FCD] hover:text-white transition-all self-end mb-2">
            All Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {featured.map((p, i) => {
            const c = cards[i];
            return (
              <Link key={p.slug} href={`/works/${p.slug}`}>
                <div className={`${c.bg} rounded-2xl p-8 flex flex-col justify-between min-h-[300px] group hover:scale-[1.015] transition-all duration-300 cursor-pointer relative overflow-hidden`}>
                  <span className={`absolute top-4 right-6 font-[var(--font-display)] text-[120px] leading-none font-bold select-none pointer-events-none ${c.num}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex items-start justify-between relative">
                    <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full ${c.tag}`}>
                      {p.tag}
                    </span>
                    <div className="flex items-center gap-2">
                      {p.live && (
                        <span className="text-[9px] font-semibold text-green-600 uppercase tracking-widest bg-green-100 px-2 py-1 rounded-full">Live</span>
                      )}
                      <span className={`text-xs ${c.desc}`}>{p.year}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 relative mt-8">
                    <h3 className={`font-[var(--font-display)] text-[clamp(20px,2.2vw,30px)] leading-tight ${c.text}`}>
                      {p.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${c.desc}`}>{p.shortDesc}</p>
                    <span className={`text-xs font-semibold uppercase tracking-widest group-hover:underline mt-2 ${c.link}`}>
                      View Project →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
