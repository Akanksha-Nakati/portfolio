import { NextRequest, NextResponse } from "next/server";

const knowledge = {
  name: "Akanksha Nakati",
  title: "Data Engineer · Boston, MA",
  status: ["Open to work", "H1B"],
  current: { role: "Data Engineer", company: "Lid Vizion" },
  education: { degree: "MS Information Systems", school: "Northeastern University", year: "2025" },
  skills: ["Python", "PySpark", "SQL", "Databricks", "Snowflake", "Airflow", "LangChain", "RAG", "Azure", "dbt"],
  projects: [
    "AI Coffee Recommendation Engine, a full medallion pipeline on Databricks with ChromaDB vector search and a Streamlit UI.",
    "Agentic AI Trading Assistant using LangChain + RAG.",
    "Data warehouse processing 2M+ records/day on Snowflake + GCP.",
    "IMDB Analysis Pipeline, end-to-end ETL on cloud.",
    "Product Design & Marketing Optimization for Rare Beauty using Tableau dashboards.",
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/akanksha-nakati/",
    github: "https://github.com/Akanksha-Nakati",
    email: "nakati.akanksha@gmail.com",
  },
};

function generateResponse(message: string): string {
  const msg = message.toLowerCase();

  if (msg.includes("project") || msg.includes("work") || msg.includes("built") || msg.includes("show")) {
    return `My flagship is the ${knowledge.projects[0]} I've also built an ${knowledge.projects[1]}, and ${knowledge.projects[2]}.`;
  }

  if (msg.includes("open") || msg.includes("role") || msg.includes("job") || msg.includes("hire") || msg.includes("available")) {
    return "Absolutely! I'm actively looking for data engineering and AI-adjacent roles, ideally fintech or SaaS. I need H1B sponsorship and I'm targeting $100K+. Would love to connect!";
  }

  if (msg.includes("stack") || msg.includes("skill") || msg.includes("tech") || msg.includes("tool")) {
    return `My core stack is ${knowledge.skills.slice(0, 5).join(", ")} and more. I build scalable data pipelines, work with LLMs via LangChain & RAG, and deploy on Azure and GCP.`;
  }

  if (msg.includes("unique") || msg.includes("different") || msg.includes("special") || msg.includes("stand out")) {
    return "What makes me unique is my blend of deep data engineering (pipelines, warehouses, orchestration) with marketing analytics and AI. I don't just move data, I turn it into decisions.";
  }

  if (msg.includes("education") || msg.includes("school") || msg.includes("degree") || msg.includes("study")) {
    return `I'm completing my ${knowledge.education.degree} at ${knowledge.education.school}, graduating in ${knowledge.education.year}. My undergrad was in Computer Engineering from SIES Graduate School of Technology in Mumbai.`;
  }

  if (msg.includes("contact") || msg.includes("reach") || msg.includes("email") || msg.includes("linkedin")) {
    return `Best way to reach me is via email at ${knowledge.links.email} or connect on LinkedIn at linkedin.com/in/akanksha-nakati/. Always happy to chat!`;
  }

  if (msg.includes("experience") || msg.includes("background") || msg.includes("career")) {
    return "I have 2+ years of experience across data engineering, marketing analytics, and ML. I've worked at Lid Vizion, Medius AI, and Go Dutch, spanning fintech, AI, and growth analytics.";
  }

  if (msg.includes("location") || msg.includes("where") || msg.includes("boston") || msg.includes("relocate")) {
    return "I'm based in Boston, MA. I'm open to remote roles or hybrid in the US. I require H1B sponsorship.";
  }

  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey") || msg.includes("who are you")) {
    return `Hey! I'm Akanksha's AI Twin. I know everything about her work, projects, and what she's looking for. Ask me about her skills, projects, experience, or job search!`;
  }

  return "That's a great question! Akanksha is a Data Engineer and AI practitioner based in Boston, with 2+ years of experience building data pipelines, marketing analytics systems, and AI-powered tools. What would you like to know specifically, her projects, skills, or availability?";
}

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  if (!message || typeof message !== "string") {
    return NextResponse.json({ error: "Invalid message" }, { status: 400 });
  }
  const reply = generateResponse(message);
  return NextResponse.json({ reply });
}
