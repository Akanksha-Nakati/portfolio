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
    role: "Data Analyst",
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
    role: "Marketing Analytics Engineer",
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
  origin: { dot: "bg-[#C4918C]", tag: "bg-[#C4918C]/15 text-[#8B1A2C]" },
  growth: { dot: "bg-[#8B1A2C]", tag: "bg-[#8B1A2C]/10 text-[#8B1A2C]" },
  pivot:  { dot: "bg-[#1C0D08]", tag: "bg-[#1C0D08]/10 text-[#1C0D08]" },
  now:    { dot: "bg-[#8B1A2C] ring-4 ring-[#8B1A2C]/20", tag: "bg-[#8B1A2C] text-[#F4EBE0]" },
};

export default function About() {
  return (
    <>
      <main className="bg-[#F4EBE0] pt-28 pb-0">

        {/* Hero header */}
        <div className="px-8 md:px-14 py-16 border-b border-[#D4C0B0]">
          <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B1A2C]">About</span>
              <h1 className="font-[var(--font-display)] text-[clamp(56px,9vw,120px)] leading-[0.88] tracking-tight text-[#1C0D08]">
                About<br />
                <span className="italic text-[#8B1A2C]">Me.</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="px-8 md:px-14 py-20 border-b border-[#D4C0B0]">
          <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Text, 2 cols */}
            <div className="md:col-span-2 flex flex-col gap-10">
              <p className="font-[var(--font-display)] italic text-[clamp(22px,2.8vw,34px)] leading-[1.3] text-[#1C0D08]/80 max-w-[700px]">
                &ldquo;My curiosity for patterns and systems started early, but it was during undergrad where I discovered the power of data in decision-making, from class projects to real-world use cases.&rdquo;
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <p className="text-[15px] leading-relaxed text-[#8A7468]">
                  My work bridges AI innovation and business storytelling, creating systems that not only analyze, but also anticipate, optimize, and inspire action.
                </p>
                <p className="text-[15px] leading-relaxed text-[#8A7468]">
                  Based in Boston, MA. MS Information Systems, Northeastern University (2025). Open to data engineering and AI-adjacent roles. H1B sponsorship required.
                </p>
              </div>
            </div>

            {/* Photo, circle, image blended into bg */}
            <div className="flex items-start justify-center md:justify-end pt-4">
              <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full ring-4 ring-[#8B1A2C] bg-[#F4EBE0] overflow-hidden">
                <Image
                  src="/photo-bio.png"
                  alt="Akanksha Nakati"
                  fill
                  className="object-contain scale-[1.08] mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </div>

        <BeyondWork />

        {/* Story Timeline */}
        <div className="px-8 md:px-14 py-20 pb-32">
          <div className="w-full max-w-[1400px] mx-auto">
            <div className="flex flex-col gap-3 mb-16">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B1A2C]">The Journey</span>
              <h2 className="font-[var(--font-display)] text-[clamp(32px,5vw,64px)] leading-none text-[#1C0D08] tracking-tight">
                Mumbai → Boston ✈️<br />
                <span className="italic text-[#8B1A2C]">one dataset at a time.</span>
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative flex flex-col">
              {journey.map((item, i) => {
                const styles = typeStyles[item.type];
                const isLast = i === journey.length - 1;
                return (
                  <div key={i} className="relative flex gap-8 md:gap-14">
                    {/* Year column */}
                    <div className="hidden md:flex flex-col items-end w-[90px] shrink-0 pt-1">
                      <span className="font-[var(--font-display)] italic text-[#8B1A2C] text-sm leading-none text-right">
                        {item.year}
                      </span>
                    </div>

                    {/* Dot + line */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${styles.dot}`} />
                      {!isLast && <div className="w-px flex-1 bg-[#D4C0B0] mt-2 min-h-[40px]" />}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-4 pb-14 flex-1">
                      <span className="md:hidden font-[var(--font-display)] italic text-[#8B1A2C] text-sm">
                        {item.year}
                      </span>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-[var(--font-display)] text-[clamp(20px,2.5vw,30px)] text-[#1C0D08] leading-none">
                          {item.company}
                        </span>
                        {item.type === "now" && (
                          <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 bg-[#8B1A2C] text-[#F4EBE0] rounded-full animate-pulse">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm text-[#8A7468]">{item.company}</span>
                        <span className="text-[#D4C0B0]">·</span>
                        <span className="text-sm font-bold text-[#1C0D08]">{item.role}</span>
                        <span className="text-[#D4C0B0]">·</span>
                        <span className="text-xs text-[#8A7468] uppercase tracking-widest">{item.location}</span>
                      </div>
                      <p className="text-[15px] leading-[1.75] text-[#8A7468] max-w-[640px]">
                        {item.story}
                      </p>
                      {item.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((h) => (
                            <span key={h} className="text-xs px-3 py-1.5 rounded-lg bg-[#EDE3D7] border border-[#D4C0B0] text-[#1C0D08]/70">
                              {h}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className={`text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full ${styles.tag}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
