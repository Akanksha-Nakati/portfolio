import Image from "next/image";
import Footer from "../components/Footer";

const experience = [
  { role: "Data Engineer", company: "Lid Vizion", period: "Oct 2025 – Present" },
  { role: "Marketing Analytics Engineer", company: "Lid Vizion", period: "Feb 2025 – May 2025" },
  { role: "Data Analyst", company: "Medius AI", period: "Jul 2022 – Aug 2023" },
  { role: "Marketing Analyst Intern", company: "Go Dutch", period: "May 2021 – Jul 2021" },
  { role: "ML Engineer Intern", company: "SIES Graduate School of Technology", period: "Jun 2021 – Jul 2021" },
];

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
            <div className="relative w-[160px] h-[200px] md:w-[200px] md:h-[250px] rounded-2xl overflow-hidden border-4 border-[#EDE3D7] shadow-xl -rotate-1 shrink-0">
              <Image
                src="https://framerusercontent.com/images/6N1kzveeLopAiZvDLCaDvsjtnew.jpeg"
                alt="Akanksha Nakati"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="px-8 md:px-14 py-20">
          <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <p className="font-[var(--font-display)] italic text-[clamp(22px,2.8vw,34px)] leading-[1.3] text-[#1C0D08]/80 md:col-span-2 max-w-[900px]">
              &ldquo;From building intelligent data pipelines to designing predictive
              models, I blend analytics and engineering to transform raw data into
              strategic insights.&rdquo;
            </p>
            <p className="text-[15px] leading-relaxed text-[#8A7468]">
              My work bridges AI innovation and business storytelling — creating
              systems that not only analyze, but also anticipate, optimize, and
              inspire action. I specialize in scalable data architecture, marketing
              intelligence, and LLM-powered applications.
            </p>
            <p className="text-[15px] leading-relaxed text-[#8A7468]">
              Currently based in Boston, MA. MS Information Systems from
              Northeastern University (2025). Open to data engineering, analytics
              engineering, and AI-adjacent roles. H1B sponsorship required.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="px-8 md:px-14 pb-24">
          <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-8">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B1A2C]">Experience</span>
            <div className="flex flex-col">
              {experience.map((e, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-6 border-b border-[#D4C0B0] group hover:bg-[#EDE3D7] -mx-4 px-4 rounded-lg transition-colors"
                >
                  <div className="flex flex-col gap-0.5">
                    <p className="font-[var(--font-playfair)] font-semibold text-lg text-[#1C0D08] group-hover:text-[#8B1A2C] transition-colors">
                      {e.role}
                    </p>
                    <p className="text-sm text-[#8A7468]">{e.company}</p>
                  </div>
                  <p className="text-sm text-[#8A7468] shrink-0">{e.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
