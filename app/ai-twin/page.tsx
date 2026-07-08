"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const SUGGESTIONS = [
  "What's your stack?",
  "Show me your projects",
  "What makes you unique?",
  "Are you open to new roles?",
  "Tell me about your education",
];

const SKILLS = ["Python", "PySpark", "SQL", "Databricks", "Snowflake", "Airflow", "LangChain", "RAG", "Azure", "dbt"];

type Message = { role: "user" | "ai"; text: string };

const INITIAL_MESSAGE: Message = {
  role: "ai",
  text: "Hey! I'm Akanksha's AI Twin. I know everything about her work, projects, and what she's looking for. What would you like to know?",
};

export default function AiTwinPage() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai-twin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "ai", text: "Sorry, something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="flex flex-col md:flex-row overflow-hidden"
      style={{ height: "100vh", paddingTop: "72px" }}
    >
      {/* ── LEFT PANEL ── info sidebar */}
      <aside className="w-full md:w-[300px] shrink-0 bg-cream border-r border-soft flex flex-col justify-between p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* Avatar + name */}
          <div className="flex flex-col items-center gap-3 pb-6 border-b border-soft">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-soft shrink-0 relative bg-cream mx-auto">
              <Image
                src="/photo-avatar.png"
                alt="Akanksha Nakati"
                fill
                className="object-cover object-center scale-[1.45] translate-x-[5px]"
                quality={100}
              />
            </div>
            <div className="text-center">
              <p className="font-[var(--font-playfair)] font-semibold text-foreground">Akanksha Nakati</p>
              <p className="text-sm text-muted mt-0.5">Data Engineer · Boston, MA</p>
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-white border border-soft text-muted uppercase tracking-widest">
                H1B
              </span>
            </div>
          </div>

          {/* Current */}
          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-semibold text-muted uppercase tracking-[0.2em]">Current</p>
            <p className="text-sm font-medium text-foreground">Data Engineer</p>
            <p className="text-sm text-muted">Lid Vizion</p>
          </div>

          {/* Education */}
          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-semibold text-muted uppercase tracking-[0.2em]">Education</p>
            <p className="text-sm font-medium text-foreground">MS Information Systems</p>
            <p className="text-sm text-muted">Northeastern, 2025</p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-semibold text-muted uppercase tracking-[0.2em]">Skills</p>
            <div className="flex flex-wrap gap-1.5">
              {SKILLS.map((s) => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-surface border border-soft text-muted">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 mt-8">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/akanksha-nakati/" },
            { label: "GitHub", href: "https://github.com/Akanksha-Nakati" },
            { label: "Email me", href: "mailto:nakati.akanksha@gmail.com" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-sm text-center rounded-lg border border-soft text-foreground/60 hover:bg-cream hover:text-foreground hover:border-soft transition-all font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>
      </aside>

      {/* ── RIGHT PANEL ── chat area */}
      <div className="flex-1 flex flex-col bg-white overflow-hidden">
        {/* Chat header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-soft shrink-0 bg-white/80 backdrop-blur">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-[0_0_0_4px_rgba(124,92,255,0.15)]" />
          <span className="font-display italic text-lg text-foreground">
            Akanksha&apos;s AI Twin
          </span>
          <span className="text-sm text-muted ml-1">· Ask me anything</span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-5">
          {messages.map((m, i) => (
            <div key={i} className={`flex items-end gap-3 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
              {m.role === "ai" && (
                <div className="w-8 h-8 rounded-full overflow-hidden border border-soft shrink-0 relative bg-cream">
                  <Image src="/photo-avatar.png" alt="AN" fill className="object-cover object-center scale-[1.45] translate-x-[5px]" />
                </div>
              )}
              {m.role === "user" && (
                <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-[10px] font-semibold uppercase tracking-widest shrink-0 text-muted">
                  you
                </div>
              )}
              <div
                className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  m.role === "ai"
                    ? "bg-surface text-foreground rounded-bl-sm border border-soft"
                    : "text-white rounded-br-sm bg-[linear-gradient(120deg,var(--accent),var(--peach-strong))]"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-end gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-soft shrink-0 relative bg-cream">
                <Image src="/photo-avatar.png" alt="AN" fill className="object-cover object-center scale-[1.45] translate-x-[5px]" />
              </div>
              <div className="bg-surface border border-soft px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestion chips */}
            <div className="px-6 pb-3 flex flex-wrap gap-2 shrink-0">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => sendMessage(s)}
              className="text-xs px-3 py-1.5 rounded-full border border-soft text-foreground hover:border-accent hover:text-accent transition-all"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input bar */}
        <div className="px-6 pb-6 shrink-0">
          <form
            onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
            className="flex items-center gap-3 bg-surface rounded-xl px-4 py-3 border border-soft focus-within:border-accent/30 transition-colors"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about Akanksha..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white bg-[linear-gradient(120deg,var(--accent),var(--peach-strong))] hover:opacity-90 disabled:opacity-30 transition-all"
            >
              →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
