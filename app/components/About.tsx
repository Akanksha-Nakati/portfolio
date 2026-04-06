import Link from "next/link";

const skills = ["Python", "PySpark", "SQL", "Databricks", "Snowflake", "Airflow", "LangChain", "RAG", "Azure", "dbt", "GCP", "Tableau"];

export default function About() {
  return (
    <section className="bg-white py-24 px-8 md:px-14 relative overflow-hidden">
      <span className="absolute top-10 right-16 text-[#7C6FCD]/20 text-3xl select-none pointer-events-none font-bold">✦</span>
      <span className="absolute bottom-16 left-[8%] text-[#7C6FCD]/15 text-4xl select-none pointer-events-none font-bold">✦</span>

      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-16">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7C6FCD]">About Me</span>
          <div className="flex-1 h-px bg-[#DDD8F5]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo with heart frame */}
          <div className="flex justify-center md:justify-start">
            <div className="relative flex items-center justify-center" style={{ width: 360, height: 320 }}>

              {/* "Introduction" pill — top left */}
              <div className="absolute top-4 left-0 bg-white border border-[#DDD8F5] rounded-full px-3 py-1.5 shadow-md z-20 rotate-[-8deg]">
                <span className="font-[var(--font-playfair)] italic text-[11px] text-[#7C6FCD] whitespace-nowrap">Introduction ✦</span>
              </div>

              {/* "About me" pill — top right */}
              <div className="absolute top-4 right-0 bg-[#7C6FCD] rounded-full px-3 py-1.5 shadow-md z-20 rotate-[7deg]">
                <span className="font-[var(--font-playfair)] italic text-[11px] text-white whitespace-nowrap">About me</span>
              </div>

              {/* Dot decorations */}
              <span className="absolute top-14 left-6 w-2.5 h-2.5 rounded-full bg-[#7C6FCD] z-20" />
              <span className="absolute top-20 left-2 w-1.5 h-1.5 rounded-full bg-[#B0A8E8] z-20" />
              <span className="absolute top-14 right-6 w-2 h-2 rounded-full bg-[#B0A8E8] z-20" />
              <span className="absolute top-20 right-2 w-1.5 h-1.5 rounded-full bg-[#7C6FCD] z-20" />
              <span className="absolute bottom-14 left-4 w-2 h-2 rounded-full bg-[#B0A8E8] z-20" />
              <span className="absolute bottom-14 right-4 w-2.5 h-2.5 rounded-full bg-[#7C6FCD] z-20" />

              {/* Circle SVG frame */}
              <svg
                viewBox="0 0 140 140"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute"
                style={{ width: 240, height: 240, top: 40 }}
              >
                <defs>
                  <clipPath id="circle-clip">
                    <circle cx="70" cy="70" r="65" />
                  </clipPath>
                </defs>

                {/* Background fill */}
                <circle cx="70" cy="70" r="65" fill="#EDE9FF" />

                {/* Photo clipped to circle */}
                <image
                  href="/photo-about.png"
                  x="0" y="0" width="140" height="140"
                  preserveAspectRatio="xMidYMin slice"
                  clipPath="url(#circle-clip)"
                />

                {/* Dashed border */}
                <circle
                  cx="70" cy="70" r="65"
                  fill="none"
                  stroke="#7C6FCD"
                  strokeWidth="2"
                  strokeDasharray="5,3"
                  strokeLinecap="round"
                />

                {/* Outer glow ring */}
                <circle
                  cx="70" cy="70" r="68"
                  fill="none"
                  stroke="#B0A8E8"
                  strokeWidth="1"
                  strokeDasharray="3,5"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>

            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="font-[var(--font-display)] text-[clamp(36px,5vw,64px)] leading-[0.92] text-[#2D1B69] tracking-tight">
                I build<br />
                <span className="italic text-[#7C6FCD]">data</span> systems<br />
                that think.
              </h2>
              <p className="font-[var(--font-playfair)] text-[clamp(15px,1.6vw,19px)] leading-[1.65] text-[#2D1B69]/60">
                From intelligent data pipelines to predictive models, I blend
                analytics and engineering to transform raw data into strategic
                insights. My work bridges AI innovation and business storytelling,
                creating systems that not only analyze, but anticipate and inspire action.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8880B8]">Stack & Tools</span>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#EDE9FF] text-[#5A4FB0] border border-[#DDD8F5]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <Link href="/about"
              className="self-start text-sm font-semibold uppercase tracking-widest px-7 py-3 bg-[#7C6FCD] text-white rounded-full hover:bg-[#5A4FB0] transition-all">
              Full Story →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 border-t border-[#DDD8F5] pt-10 gap-4">
          {[
            { num: "2+", label: "Years Experience" },
            { num: "9+", label: "Projects Shipped" },
            { num: "2M+", label: "Records Processed Daily" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-[var(--font-display)] text-[clamp(28px,4vw,52px)] text-[#7C6FCD] leading-none">{s.num}</span>
              <span className="text-xs font-medium uppercase tracking-widest text-[#8880B8]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
