const items = [
  "Data Engineering",
  "✦",
  "Python",
  "✦",
  "PySpark",
  "✦",
  "SQL",
  "✦",
  "Databricks",
  "✦",
  "Snowflake",
  "✦",
  "LangChain",
  "✦",
  "RAG",
  "✦",
  "Machine Learning",
  "✦",
  "Marketing Analytics",
  "✦",
  "Airflow",
  "✦",
  "dbt",
  "✦",
  "Azure",
  "✦",
  "GCP",
  "✦",
  "Delta Lake",
  "✦",
  "Tableau",
  "✦",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-[#6B5CE7] py-4 overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee-scroll 22s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center text-white text-sm font-medium uppercase tracking-widest mx-6 shrink-0"
          >
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
