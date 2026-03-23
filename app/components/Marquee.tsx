const items = [
  "Data Engineering",
  "★",
  "Python · PySpark · SQL",
  "★",
  "Databricks · Snowflake",
  "★",
  "LangChain · RAG",
  "★",
  "Machine Learning",
  "★",
  "Marketing Analytics",
  "★",
  "Airflow · dbt",
  "★",
  "Azure · GCP",
  "★",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-[#8B1A2C] py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center text-[#F4EBE0] text-sm font-medium uppercase tracking-widest mx-6 shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
