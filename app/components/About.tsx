import Link from "next/link";

const skills = ["Python", "PySpark", "SQL", "Databricks", "Snowflake", "Airflow", "LangChain", "RAG", "Azure", "dbt", "GCP", "Tableau"];

export default function About() {
  return (
    <section className="bg-[#F4EBE0] py-24 px-8 md:px-14">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-20">
        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B1A2C]">About Me</span>
            <h2 className="font-[var(--font-display)] text-[clamp(44px,6vw,80px)] leading-[0.92] text-[#1C0D08] tracking-tight">
              I build<br />
              <span className="italic text-[#8B1A2C]">data</span><br />
              systems<br />
              that think.
            </h2>
            <Link
              href="/about"
              className="self-start mt-2 text-sm font-semibold uppercase tracking-widest px-6 py-3 border border-[#8B1A2C] text-[#8B1A2C] rounded-full hover:bg-[#8B1A2C] hover:text-[#F4EBE0] transition-all"
            >
              Full Story →
            </Link>
          </div>

          {/* Right: bio + skills */}
          <div className="flex flex-col gap-10 pt-2">
            <p className="font-[var(--font-playfair)] text-[clamp(17px,1.8vw,22px)] leading-[1.55] text-[#1C0D08]/75">
              From building intelligent data pipelines to designing predictive
              models, I blend analytics and engineering to transform raw data into
              strategic insights. My work bridges AI innovation and business
              storytelling — creating systems that not only analyze, but also
              anticipate, optimize, and inspire action.
            </p>

            {/* Skills */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A7468]">Skills</span>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#EDE3D7] text-[#1C0D08]/70 border border-[#D4C0B0]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stat row */}
        <div className="grid grid-cols-3 border-t border-[#D4C0B0] pt-10 gap-4">
          {[
            { num: "2+", label: "Years Experience" },
            { num: "4+", label: "Projects Shipped" },
            { num: "2M+", label: "Records Processed Daily" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-[var(--font-display)] text-[clamp(28px,4vw,52px)] text-[#8B1A2C] leading-none">
                {s.num}
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-[#8A7468]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
