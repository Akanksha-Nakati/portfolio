import Image from "next/image";
import Footer from "../components/Footer";
import BeyondWork from "../components/BeyondWork";

const journey = [
  {
    year: "2018 – 2022",
    chapter: "Undergrad",
    location: "Mumbai, India",
    role: "Electronics & Telecommunication Engineering Student",
    company: "SIES Graduate School of Technology",
    story:
      "I started studying Electronics & Telecommunication Engineering at SIES Graduate School of Technology in India. During this time, I discovered my interest in data and technology, exploring courses in data analysis, databases, and machine learning, laying the foundation for my career in analytics.",
    highlights: ["🏆 Sports Excellence Award 2022", "🏃 National-level track athlete (Track & Field)"],
    tags: ["Python", "ML", "Data Analysis", "Mumbai"],
    type: "origin",
  },
  {
    year: "May 2021 – Jul 2021",
    chapter: "Go Dutch",
    location: "Mumbai, India",
    role: "Marketing Analyst Intern",
    company: "Go Dutch",
    story:
      "I joined Go Dutch as a Marketing Analyst Intern. I analyzed user activity data and evaluated marketing funnels to improve retention and campaign ROI. This experience sharpened my data storytelling and taught me how to translate insights into impact within a fast-paced fintech environment.",
    highlights: [],
    tags: ["Marketing Analytics", "Funnels", "Campaign ROI", "Fintech"],
    type: "growth",
  },
  {
    year: "Jun 2021 – Jul 2021",
    chapter: "First ML Project",
    location: "Mumbai, India",
    role: "ML Engineer Intern",
    company: "SIES Graduate School of Technology",
    story:
      "My first real encounter with machine learning, a brain tumor detection model. Something clicked. Data wasn't just numbers; it was a language that could diagnose, predict, and change outcomes.",
    highlights: [],
    tags: ["Python", "TensorFlow", "Deep Learning", "Computer Vision"],
    type: "growth",
  },
  {
    year: "Jul 2022 – Aug 2023",
    chapter: "Medius AI",
    location: "Mumbai, India",
    role: "Data Engineer",
    company: "Medius AI",
    story:
      "My first full-time role. I moved from experiments to production, building dashboards, cleaning messy datasets, and translating raw numbers into insights the business could act on. This is where I learned that good data work isn't just technically correct, it has to be understood.",
    highlights: [],
    tags: ["SQL", "Python", "Dashboards", "Analytics"],
    type: "growth",
  },
  {
    year: "2023",
    chapter: "The Leap",
    location: "Boston, MA",
    role: "MS Information Systems",
    company: "Northeastern University",
    story:
      "I packed up and moved across the world to Boston. Northeastern's co-op model pushed me into real projects immediately, not just coursework. I dove into data engineering at scale, cloud platforms, and AI-powered systems. The city reshaped how I think about technology and ambition.",
    highlights: [],
    tags: ["Data Engineering", "Cloud", "AI", "Boston"],
    type: "pivot",
  },
  {
    year: "Feb 2025 – May 2025",
    chapter: "Where Data Meets Marketing",
    location: "Boston, MA",
    role: "Data Engineer Intern",
    company: "Lid Vizion",
    story:
      "I found my niche, the intersection of data engineering and marketing intelligence. I built pipelines that fed real-time campaign analytics, helping teams make faster, smarter decisions. Not just moving data, making marketing measurable at scale.",
    highlights: [],
    tags: ["Marketing Analytics", "Pipelines", "Campaign Data"],
    type: "growth",
  },
  {
    year: "Oct 2025 – Present",
    chapter: "Engineering at Scale",
    location: "Boston, MA",
    role: "Data Engineer",
    company: "Lid Vizion",
    story:
      "Today I build the infrastructure that powers decisions. Scalable pipelines, data warehouses, LLM-powered tools, I work at the layer where raw data becomes strategy. The journey from a Mumbai lab to Boston's data world feels complete, and yet it's just the beginning.",
    highlights: [],
    tags: ["Data Engineering", "LLMs", "Snowflake", "Databricks", "dbt"],
    type: "now",
  },
];

const typeStyles: Record<string, { dot: string; tag: string }> = {
  origin: { dot: "bg-[#B0A8E8]", tag: "bg-[#B0A8E8]/20 text-[#5A4FB0]" },
  growth: { dot: "bg-[#7C6FCD]", tag: "bg-[#7C6FCD]/10 text-[#5A4FB0]" },
  pivot:  { dot: "bg-[#FFD4B8]", tag: "bg-[#FFD4B8]/40 text-[#A0500A]" },
  now:    { dot: "bg-[#7C6FCD] ring-4 ring-[#7C6FCD]/20", tag: "bg-[#7C6FCD] text-white" },
};

export default function About() {
  return (
    <>
      <main className="bg-white pt-0 pb-0">

        {/* Hero header - solid purple */}
        <div className="bg-[#7C6FCD] px-8 md:px-14 pt-36 pb-16 relative overflow-hidden">
          <span className="absolute top-10 right-20 text-white/20 text-4xl select-none font-bold">✦</span>
          <span className="absolute bottom-6 left-[35%] text-white/15 text-3xl select-none font-bold">✦</span>
          <div className="w-full max-w-[1400px] mx-auto">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50 block mb-4">About</span>
            <h1 className="font-[var(--font-display)] text-[clamp(56px,9vw,120px)] leading-[0.88] tracking-tight text-white">
              About<br />
              <span className="italic text-white/60">Me.</span>
            </h1>
          </div>
        </div>

        {/* Bio */}
        <div className="px-8 md:px-14 py-20 border-b border-[#DDD8F5]">
          <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Text, 2 cols */}
            <div className="md:col-span-2 flex flex-col gap-10">
              <p className="font-[var(--font-display)] italic text-[clamp(22px,2.8vw,34px)] leading-[1.3] text-[#2D1B69]/80 max-w-[700px]">
                &ldquo;My curiosity for patterns and systems started early, but it was during undergrad where I discovered the power of data in decision-making, from class projects to real-world use cases.&rdquo;
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <p className="text-[15px] leading-relaxed text-[#8880B8]">
                  My work bridges AI innovation and business storytelling, creating systems that not only analyze, but also anticipate, optimize, and inspire action.
                </p>
                <p className="text-[15px] leading-relaxed text-[#8880B8]">
                  Based in Boston, MA. MS Information Systems, Northeastern University (2025). Open to data engineering and AI-adjacent roles. H1B sponsorship required.
                </p>
              </div>
            </div>

            {/* Photo */}
            <div className="flex items-start justify-center md:justify-end pt-4">
              <div className="relative w-[180px] h-[180px] md:w-[210px] md:h-[210px] rounded-full ring-4 ring-[#7C6FCD] bg-white overflow-hidden">
                <Image
                  src="/photo-bio-v2.png"
                  alt="Akanksha Nakati"
                  fill
                  className="object-cover object-[center_20%]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Story Journey — polaroid card style */}
        <div className="px-8 md:px-14 py-20 pb-32 bg-[#F5F3FF]">
          <div className="w-full max-w-[1400px] mx-auto">

            {/* Header */}
            <div className="text-center mb-16 relative">
              <span className="absolute top-0 right-[22%] text-[#7C6FCD] text-2xl font-bold select-none">✦</span>
              <span className="absolute top-6 right-[17%] text-[#B0A8E8] text-base font-bold select-none">✦</span>
              <h2 className="font-[var(--font-display)] text-[clamp(48px,7vw,96px)] text-[#2D1B69] tracking-tight leading-none">
                My journey
              </h2>
            </div>

            {/* Intro two-col */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center relative">
              <p className="text-sm uppercase tracking-[0.15em] text-[#8880B8] leading-relaxed text-center md:text-left font-[var(--font-playfair)] italic text-[16px]">
                I began my data journey during undergrad, driven by a passion for transforming raw numbers into real-world insights.
              </p>
              {/* Curved arrow */}
              <svg className="hidden md:block absolute left-[46%] top-1/2 -translate-y-1/2 w-32 h-16" viewBox="0 0 120 60" fill="none">
                <defs>
                  <marker id="arr0" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                    <path d="M1,1 L7,4 L1,7" stroke="#7C6FCD" strokeWidth="1.2" fill="none"/>
                  </marker>
                </defs>
                <path d="M 10,15 C 30,10 90,50 110,48" stroke="#7C6FCD" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#arr0)"/>
              </svg>
              <p className="text-[15px] leading-[1.75] text-[#8880B8]">
                My curiosity for patterns and systems started early, but it was during undergrad where I discovered the power of data in decision-making, from class projects to real-world use cases.
              </p>
            </div>

            {/* Journey entries */}
            <div className="flex flex-col gap-0">
              {journey.map((item, i) => {
                const styles = typeStyles[item.type];
                const isEven = i % 2 === 0;
                const photoMap: Record<number, string | null> = {
                  0: "/photo-undergrad.png",
                  1: "/logo-godutch.png",
                  2: "/logo-sies.png",
                  3: "/logo-medius.png",
                  4: "/photo-graduation.png",
                  5: "/photo-lidvizion.png",
                  6: "/photo-headshot.png",
                };
                const logoEntries = new Set([1, 2, 3, 5]);
                const bgMap: Record<number, string> = {
                  0: "#EDE9FF",
                  1: "#DDD8F5",
                  2: "#E8E4FF",
                  3: "#D8D0F8",
                  4: "#EDE9FF",
                  5: "#DDD8F5",
                  6: "#7C6FCD",
                };
                const photo = photoMap[i];
                const cardBg = bgMap[i] ?? "#EDE9FF";
                const rotations = [-5, 4, -3, 5, -4, 3, -5];
                const rot = rotations[i] ?? -4;

                return (
                  <div key={i}>
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center`}>
                      {/* Polaroid — alternates sides */}
                      <div className={`flex justify-center ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                        <div
                          className="bg-white p-3 pb-10 shadow-xl relative"
                          style={{ transform: `rotate(${rot}deg)`, width: i === 5 ? 300 : 220 }}
                        >
                          <div className="w-full overflow-hidden" style={{ background: cardBg, height: i === 5 ? 130 : 160 }}>
                            {photo ? (
                              <img src={photo} alt={item.chapter} className={i === 5 ? "w-full h-full object-contain" : i === 6 ? "w-full h-full object-cover object-[center_25%] scale-[1.1] origin-center" : i === 2 ? "w-full h-full object-contain p-2" : logoEntries.has(i) ? "w-full h-full object-contain p-6" : "w-full h-full object-cover object-[center_20%] scale-[1.6] origin-center"} />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <span className="font-[var(--font-display)] text-[clamp(28px,4vw,48px)] text-[#7C6FCD]/40 text-center leading-tight px-2">
                                  {item.chapter}
                                </span>
                              </div>
                            )}
                          </div>
                          <p className="absolute bottom-2 left-0 right-0 text-center text-[10px] uppercase tracking-[0.2em] text-[#8880B8] font-[var(--font-playfair)]">
                            {item.chapter} {item.year.slice(-4)}
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`flex flex-col gap-4 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                        <span className="text-sm font-medium text-[#7C6FCD]">{item.year}</span>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="font-[var(--font-display)] text-[clamp(32px,4.5vw,64px)] text-[#7C6FCD] leading-none tracking-tight">
                            {item.chapter}
                          </h3>
                          {item.type === "now" && (
                            <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 bg-[#7C6FCD] text-white rounded-full animate-pulse">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[#8880B8]">{item.company} · <span className="text-[#2D1B69] font-medium">{item.role}</span></p>
                        <p className="text-[15px] leading-[1.75] text-[#8880B8] max-w-[520px]">
                          {item.story}
                        </p>
                        {item.highlights.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {item.highlights.map((h) => (
                              <span key={h} className="text-xs px-3 py-1.5 rounded-lg bg-[#EDE9FF] border border-[#DDD8F5] text-[#2D1B69]/70">
                                {h}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2 mt-1">
                          {item.tags.map((tag) => (
                            <span key={tag} className={`text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full ${styles.tag}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Curved arrow connector between entries */}
                    {i < journey.length - 1 && (
                      <div className={`hidden md:flex my-6 ${isEven ? 'justify-end pr-[38%]' : 'justify-start pl-[38%]'}`}>
                        <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
                          <defs>
                            <marker id={`arr${i+1}`} markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
                              <path d="M1,1 L6,3.5 L1,6" stroke="#7C6FCD" strokeWidth="1.2" fill="none"/>
                            </marker>
                          </defs>
                          {isEven
                            ? <path d="M 80,5 C 80,30 20,30 20,55" stroke="#7C6FCD" strokeWidth="1.5" strokeDasharray="5,3" markerEnd={`url(#arr${i+1})`}/>
                            : <path d="M 20,5 C 20,30 80,30 80,55" stroke="#7C6FCD" strokeWidth="1.5" strokeDasharray="5,3" markerEnd={`url(#arr${i+1})`}/>
                          }
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <BeyondWork />

      </main>
      <Footer />
    </>
  );
}
