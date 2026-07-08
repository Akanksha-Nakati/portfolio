import Image from "next/image";

/* ------------------------------------------------------------------ *
 *  "My journey" — light scrapbook timeline (purple / peach palette)
 *  Hand-drawn annotations, polaroids, mono headings, badges.
 * ------------------------------------------------------------------ */

function Polaroid({
  src,
  caption,
  rotate = "-3deg",
  w = 300,
  h = 230,
  fit = "cover",
  bg = "#f2f0f4",
  className = "",
}: {
  src: string;
  caption: string;
  rotate?: string;
  w?: number;
  h?: number;
  fit?: "cover" | "contain";
  bg?: string;
  className?: string;
}) {
  return (
    <figure
      className={`relative shrink-0 rounded-[14px] border border-white/70 bg-white p-3 shadow-[0_28px_60px_-18px_rgba(72,44,120,0.35)] ${className}`}
      style={{ transform: `rotate(${rotate})`, width: w + 24 }}
    >
      <div
        className="relative overflow-hidden rounded-[6px]"
        style={{ width: w, height: h, background: bg }}
      >
        <Image src={src} alt={caption} fill sizes={`${w}px`} style={{ objectFit: fit }} />
      </div>
      <figcaption className="font-hand pb-1 pt-2.5 text-center text-[22px] leading-none text-[#2c2233]">
        {caption}
      </figcaption>
    </figure>
  );
}

function Badge({ emoji, children }: { emoji: string; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-2xl border border-border bg-surface px-4 py-3 text-sm leading-snug text-foreground/70">
      <span className="text-base">{emoji}</span>
      {children}
    </span>
  );
}

/* curvy hand-drawn connector arrow */
function Arrow({
  color,
  flip = false,
  dashed = false,
  className = "",
}: {
  color: string;
  flip?: boolean;
  dashed?: boolean;
  className?: string;
}) {
  return (
    <svg
      width="110"
      height="150"
      viewBox="0 0 110 150"
      fill="none"
      className={className}
      style={{ color, transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden
    >
      <path
        d="M70 6 C 74 55, 26 72, 34 128"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={dashed ? "1 11" : undefined}
      />
      <path
        d="M34 130 l -13 -16 M34 130 l 19 -9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const heading = "font-mono-d font-bold leading-[0.95] tracking-tight text-[clamp(38px,6vw,68px)]";
const dateStyle = "font-mono-d font-bold text-lg mt-2";
const body = "text-[16px] md:text-[17px] leading-[1.7] text-foreground/75 font-medium";

// palette
const PURPLE = "var(--accent-strong)";
const PEACH = "var(--peach-strong)";
const gradientPP = "linear-gradient(90deg, var(--accent-strong), var(--peach-strong))";

export default function Journey() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{ background: "linear-gradient(180deg,#fdfbfa 0%,#f5ede8 100%)" }}>
      {/* ambient glows */}
      <div className="pointer-events-none absolute left-[6%] top-[16%] h-72 w-72 rounded-full opacity-30 blur-[120px]" style={{ background: "var(--accent)" }} />
      <div className="pointer-events-none absolute right-[8%] top-[46%] h-72 w-72 rounded-full opacity-30 blur-[120px]" style={{ background: "var(--peach)" }} />
      <div className="pointer-events-none absolute bottom-[8%] left-[22%] h-72 w-72 rounded-full opacity-25 blur-[130px]" style={{ background: "var(--lilac)" }} />

      <div className="relative mx-auto max-w-[1080px] px-6">
        {/* ── Heading ── */}
        <div className="relative mb-10 text-center">
          <h2 className="font-mono-d text-[clamp(36px,6vw,64px)] font-bold tracking-tight text-foreground">
            My journey
          </h2>
          <span className="font-hand absolute right-[30%] top-0 hidden text-3xl text-accent-strong sm:block">
            ✦
          </span>
        </div>

        {/* ── Intro ── */}
        <div className="relative grid gap-8 md:grid-cols-2 md:gap-16">
          <p className="font-hand text-[26px] leading-[1.25] tracking-wide text-accent-strong md:text-[30px]">
            I began my data journey in 2020 during undergrad, driven by a passion
            for transforming raw numbers into real-world insights.
          </p>
          <Arrow color="var(--accent)" dashed className="absolute left-1/2 top-2 hidden -translate-x-1/2 md:block" />
          <p className="self-center text-[16px] leading-[1.7] text-muted md:text-[17px]">
            My curiosity for patterns and systems started in high school, but it
            was during my undergrad that I discovered the power of data in
            decision-making — from class projects to real-world use cases. 🐠
          </p>
        </div>

        {/* ── Undergrad ── */}
        <div className="mt-24 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex justify-center md:justify-start">
            <Polaroid src="/photo-undergrad.jpg" caption="UNDERGRAD — 2022" rotate="-4deg" w={330} h={250} />
          </div>
          <div>
            <h3 className={heading} style={{ color: PURPLE }}>Undergrad</h3>
            <p className={dateStyle} style={{ color: PURPLE }}>2018 – 2022</p>
            <p className={`${body} mt-6`}>
              I started studying at the <span className="font-semibold text-foreground">SIES Graduate School of Technology</span> in
              India. During this time I discovered my interest in data and
              technology — exploring courses in data analysis, databases, and
              machine learning, laying the foundation for my career in analytics.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge emoji="🏆">Awarded Sports Excellence Award 2022</Badge>
              <Badge emoji="🏃‍♀️">National-level track athlete (Track &amp; Field)</Badge>
            </div>
          </div>
        </div>

        {/* ── Sports Secretary ── */}
        <div className="mt-8 flex justify-center">
          <Arrow color="var(--peach-strong)" className="hidden md:block" />
        </div>
        <div className="mt-8 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <h3 className={heading} style={{ color: PEACH }}>Sports Secretary</h3>
            <p className={dateStyle} style={{ color: PEACH }}>2020 – 2022</p>
            <p className={`${body} mt-6`}>
              In my final year of undergrad I was elected Sports Secretary, where
              I led the planning and execution of intercollegiate sports events,
              managed logistics for 20+ sports, and coordinated a council of
              student leaders.
            </p>
            <p className={`${body} mt-4`}>
              This role helped me grow as a leader and collaborator, sharpened my
              communication skills, and taught me how to thrive under pressure —
              all of which I now apply in data-driven team environments.
            </p>
          </div>
          <div className="order-1 flex flex-col items-center gap-5 md:order-2 md:block">
            <Polaroid src="/lakshya-22.jpg" caption="LAKSHYA '22" rotate="3deg" w={270} h={340} className="md:ml-auto" />
            <Polaroid src="/sports-team-22.jpg" caption="SPORTS TEAM '22" rotate="-3deg" w={300} h={205} className="md:ml-auto md:mt-6" />
          </div>
        </div>

        {/* ── SIES internships ── */}
        <div className="mt-8 flex justify-center">
          <Arrow color="var(--accent)" flip className="hidden md:block" />
        </div>
        <div className="mt-8 grid items-center gap-10 md:grid-cols-[1.4fr_0.9fr] md:gap-16">
          <div className="order-2 md:order-1">
            <h3 className={heading}>
              <span style={{ background: gradientPP, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                SIES Graduate School of Technology
              </span>
            </h3>
            <p className={dateStyle} style={{ color: PURPLE }}>Dec 2019 / Jun 2021</p>
            <p className={`${body} mt-6`}>
              I worked as a <span className="font-semibold" style={{ color: PURPLE }}>Web Design Intern</span>, where
              I developed responsive UIs and gained hands-on experience with HTML,
              CSS, and JavaScript to build user-centric websites.
              <span style={{ color: PURPLE }}> (Dec 2019)</span>
            </p>
            <p className={`${body} mt-4`}>
              Later I transitioned into a <span className="font-semibold" style={{ color: PEACH }}>Machine Learning Intern</span> role,
              where I built a deep learning model using TensorFlow to predict
              gender and age from images.
              <span style={{ color: PEACH }}> (Jun 2021 – Jul 2021)</span>
            </p>
          </div>
          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <Polaroid src="/logo-sies.png" caption="SIES GST" rotate="4deg" w={230} h={200} fit="contain" />
          </div>
        </div>

        {/* ── Go Dutch ── */}
        <div className="mt-8 flex justify-center">
          <Arrow color="var(--accent-strong)" className="hidden md:block" />
        </div>
        <div className="mt-8 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex justify-center md:justify-start">
            <Polaroid src="/logo-godutch.png" caption="GO DUTCH" rotate="-4deg" w={280} h={220} fit="contain" />
          </div>
          <div>
            <h3 className={heading} style={{ color: PURPLE }}>Go Dutch</h3>
            <p className={dateStyle} style={{ color: PURPLE }}>May 2021 – Jul 2021</p>
            <p className={`${body} mt-6`}>
              I joined Go Dutch as a <span className="font-semibold text-foreground">Marketing Analyst Intern</span>. I
              analyzed user activity data and evaluated marketing funnels to
              improve retention and campaign ROI.
            </p>
            <p className={`${body} mt-4`}>
              This experience sharpened my data storytelling and taught me how to
              translate insights into impact within a fast-paced fintech
              environment.
            </p>
          </div>
        </div>

        {/* ── Medius AI ── */}
        <div className="mt-8 flex justify-center">
          <Arrow color="var(--peach-strong)" flip className="hidden md:block" />
        </div>
        <div className="mt-8 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <h3 className={heading} style={{ color: PEACH }}>Medius AI</h3>
            <p className={dateStyle} style={{ color: PEACH }}>Jul 2022 – Aug 2023</p>
            <p className={`${body} mt-6`}>
              I worked with the loan recovery team at <span className="font-semibold text-foreground">Medius Technologies</span> as
              a Data Analyst Intern, analyzing financial datasets and building
              automated reporting systems to track overdue payments and client
              behavior trends.
            </p>
            <p className={`${body} mt-4`}>
              My analysis helped reduce manual reporting time and surfaced new
              opportunities for improving recovery strategies.
            </p>
          </div>
          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <Polaroid src="/logo-medius.png" caption="MEDIUS.AI" rotate="3deg" w={300} h={230} fit="contain" bg="#0b1220" />
          </div>
        </div>

        {/* ── Masters in Information Systems ── */}
        <div className="mt-8 flex justify-center">
          <Arrow color="var(--accent)" className="hidden md:block" />
        </div>
        <div className="mt-8 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Polaroid src="/neu-2025.jpg" caption="NEU — 2025" rotate="-3deg" w={330} h={250} />
            <span className="font-hand text-2xl text-accent-strong">Masters in Information Systems ✦</span>
          </div>
          <div>
            <h3 className={heading} style={{ color: PURPLE }}>Northeastern University</h3>
            <p className={dateStyle} style={{ color: PURPLE }}>2023 – 2025</p>
            <p className={`${body} mt-6`}>
              I moved to Boston for my <span className="font-semibold text-foreground">MS in Information Systems at Northeastern University</span>,
              deepening my foundation in data engineering, machine learning, and
              analytics.
            </p>
            <p className={`${body} mt-4`}>
              I worked on a lot of hands-on, end-to-end projects and started
              working as an intern in the US 🇺🇸 — turning coursework into real,
              shipped systems.
            </p>
          </div>
        </div>

        {/* ── Lid Vizion (today) ── */}
        <div className="mt-8 flex justify-center">
          <Arrow color="var(--peach-strong)" flip className="hidden md:block" />
        </div>
        <div className="mt-8 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <h3 className={heading}>
              <span style={{ background: gradientPP, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                Lid Vizion
              </span>
            </h3>
            <p className={dateStyle} style={{ color: PURPLE }}>Today</p>
            <p className={`${body} mt-6`}>
              Today I&apos;m a <span className="font-semibold text-foreground">Data / AI Engineer at Lid Vizion</span>,
              building reliable, production-grade data and AI infrastructure —
              turning high-volume, messy data into signal that teams can act on.
            </p>
            <p className="font-hand mt-5 text-2xl text-accent-strong">and the journey continues… ✦</p>
          </div>
          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <Polaroid src="/photo-lidvizion.png" caption="LID VIZION" rotate="3deg" w={320} h={240} />
          </div>
        </div>
      </div>
    </section>
  );
}
