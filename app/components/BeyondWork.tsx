"use client";

import { useRef } from "react";

const cards = [
  {
    emoji: "🏃",
    title: "National-level Athlete",
    desc: "Competed in Track & Field at the national level and won the Sports Excellence Award in 2022. Running taught me discipline and how to perform under pressure.",
    accent: "#8B1A2C",
  },
  {
    emoji: "🥤",
    title: "Iced Coffee Devotee",
    desc: "Strong opinions about iced coffee. Dunkin' is a non-negotiable part of Boston life. Also built an AI that recommends coffee, full circle.",
    accent: "#C4918C",
  },
  {
    emoji: "🏀",
    title: "Always Competitive",
    desc: "Running, bowling, basketball, I love playing games and sports. Doesn't matter what it is, I show up to win. Competition is how I have fun.",
    accent: "#8B1A2C",
  },
  {
    emoji: "🤖",
    title: "Always Building",
    desc: "When I'm not working, I'm experimenting, LLM tools, data pipelines, side projects. Learning for fun is how I stay sharp.",
    accent: "#C4918C",
  },
];

const CARD_WIDTH = 320; // px (card width + gap)

export default function BeyondWork() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({
      left: dir === "right" ? CARD_WIDTH : -CARD_WIDTH,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-20 border-b border-[#D4C0B0]">
      <div className="px-8 md:px-14 mb-10">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B1A2C]">Beyond Work</span>
            <h2 className="font-[var(--font-display)] text-[clamp(28px,4vw,52px)] leading-none text-[#1C0D08] tracking-tight">
              A few things about <span className="italic text-[#8B1A2C]">me.</span>
            </h2>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-[#8B1A2C] text-[#8B1A2C] flex items-center justify-center text-lg transition-all hover:bg-[#8B1A2C] hover:text-[#F4EBE0]"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-[#8B1A2C] text-[#8B1A2C] flex items-center justify-center text-lg transition-all hover:bg-[#8B1A2C] hover:text-[#F4EBE0]"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-[#F4EBE0] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-[#F4EBE0] to-transparent" />

        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto scroll-smooth px-8 md:px-14 pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`.beyond-track::-webkit-scrollbar { display: none; }`}</style>

          {cards.map((card, i) => (
            <div
              key={i}
              className="relative w-[300px] shrink-0 h-[240px] rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.45)",
                boxShadow: "0 4px 32px 0 rgba(139,26,44,0.07)",
              }}
            >
              {/* Ghost emoji background */}
              <span
                className="absolute -bottom-4 -right-4 text-[120px] leading-none select-none pointer-events-none"
                style={{ opacity: 0.12 }}
              >
                {card.emoji}
              </span>

              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: card.accent }} />

              <div className="relative z-10 flex flex-col gap-3 p-6 h-full">
                <span className="text-3xl">{card.emoji}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-[var(--font-playfair)] font-semibold text-base leading-snug text-[#1C0D08]">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#8A7468] leading-relaxed line-clamp-4">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
