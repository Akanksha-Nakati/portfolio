const items = [
  "Data Engineering", "Python", "PySpark", "SQL", "Databricks", "Snowflake",
  "LangChain", "RAG", "Machine Learning", "Marketing Analytics", "Airflow",
  "dbt", "Azure", "GCP", "Delta Lake", "Tableau",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="relative my-6 overflow-hidden border-y border-border/70 bg-surface/50 py-4 backdrop-blur-sm">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--background)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--background)] to-transparent" />

      <div className="animate-marquee flex w-max whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center">
            <span className="mx-7 text-sm font-medium uppercase tracking-[0.22em] text-muted">
              {item}
            </span>
            <span className="text-accent-strong/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
