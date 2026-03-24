export type Article = {
  title: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  tag: string;
  year: string;
  shortDesc: string;
  fullDesc: string;
  stack: string[];
  github: string | null;
  live: string | null;
  articles?: Article[];
};

export const projects: Project[] = [
  {
    slug: "ai-coffee",
    title: "AI Coffee Recommendation Engine",
    tag: "AI / ML",
    year: "2025",
    shortDesc: "Full medallion pipeline on Databricks with ChromaDB vector search and Streamlit UI.",
    fullDesc:
      "A recommendation system that leverages real user reviews from Reddit communities and coffee forums to provide personalized coffee suggestions. Unlike traditional product-based recommenders, this system analyzes authentic consumer experiences and sentiment to match users with coffee products based on genuine community feedback. Built on a full medallion architecture (Bronze → Silver → Gold) on Databricks, it uses ChromaDB for vector similarity search and a Streamlit UI for interactive recommendations.",
    stack: ["Python", "Databricks", "PySpark", "ChromaDB", "Streamlit", "Delta Lake", "NLP", "RAG"],
    github: "https://github.com/Akanksha-Nakati/AI-Coffee-Recommendation-Engine",
    live: null,
  },
  {
    slug: "imdb-pipeline",
    title: "IMDB Analytics Data Warehouse",
    tag: "Data Engineering",
    year: "2025",
    shortDesc: "End-to-end ETL pipeline processing millions of IMDB records on Databricks.",
    fullDesc:
      "An end-to-end data engineering pipeline that transforms millions of IMDB records into clean, analyzable datasets. Built on Databricks with PySpark, this project ingests raw movie data, performs distributed data cleaning and transformation, and stores results in Delta Lake for efficient querying. The warehouse enables analytics on movie trends, genre performance, and rating distributions at scale.",
    stack: ["PySpark", "Databricks", "Delta Lake", "SQL", "Python", "ETL", "GCP"],
    github: "https://github.com/Akanksha-Nakati/Analytics_Data_Warehouse_Platform",
    live: null,
  },
  {
    slug: "rare-beauty",
    title: "User-Centered Product Design & Marketing Optimization",
    tag: "Marketing Analytics",
    year: "2025",
    shortDesc: "UX audit + SQL-backed Tableau dashboards for Rare Beauty's campaign analytics.",
    fullDesc:
      "A comprehensive analysis of Rare Beauty's digital presence combining UX research with data-driven marketing insights. Conducted a full UX audit identifying critical conversion barriers and checkout flow inefficiencies. Built a SQL-backed Tableau dashboard to analyze social media advertising performance across platforms. Delivered actionable product design recommendations and campaign optimization strategies grounded in behavioral data.",
    stack: ["SQL", "Tableau", "UX Research", "A/B Testing", "Python", "Data Visualization"],
    github: "https://github.com/Akanksha-Nakati/User-Centered-Product-Design-and-Marketing-Optimization",
    live: "https://dash-sheen-59603545.figma.site/",
    articles: [
      {
        title: "Rare Beauty's Dashboard Insights: Driving Smarter Marketing Decisions",
        url: "https://medium.com/@nakati.akanksha/rare-beautys-dashboard-insights-driving-smarter-marketing-decisions-ff0bc0cc7db6",
      },
      {
        title: "Rare Beauty's Website UI/UX Analysis for Brand Growth: What Works and What Needs Improvement",
        url: "https://medium.com/@nakati.akanksha/rare-beautys-website-ui-ux-analysis-for-brand-growth-what-works-and-what-needs-improvement-d63008a9cb24",
      },
    ],
  },
  {
    slug: "trading-chatbot",
    title: "AI-Powered Ad Assessment Platform",
    tag: "AI / NLP",
    year: "2025",
    shortDesc: "Intelligent marketing assistant that evaluates ad content using LangChain + RAG.",
    fullDesc:
      "An AI-powered platform that evaluates advertising content and provides expert-level feedback instantly. Think of it as a marketing consultant available 24/7 who has memorized your brand guidelines, past campaigns, and industry best practices. Powered by LangChain and RAG architecture, it retrieves relevant brand context and generates structured feedback on tone, compliance, and effectiveness.",
    stack: ["LangChain", "RAG", "Python", "OpenAI", "Vector DB", "FastAPI"],
    github: "https://github.com/Akanksha-Nakati/AI-Powered-Ad-Assessment-Platform",
    live: null,
  },
  {
    slug: "marathon-tracker",
    title: "Marathon Runner AI Tracker",
    tag: "AI / Full Stack",
    year: "2025",
    shortDesc: "AI-powered live marathon tracking with real-time commentary.",
    fullDesc:
      "An AI-powered marathon runner tracking system with live commentary generation. The platform tracks runners in real time, provides dynamic AI-generated race commentary, and surfaces performance analytics. Built with a modern full-stack architecture and deployed on Vercel for low-latency live updates.",
    stack: ["Next.js", "TypeScript", "AI", "Vercel", "Real-time", "APIs"],
    github: "https://github.com/Akanksha-Nakati/marathon-tracker",
    live: "https://marathon-tracker-sooty.vercel.app",
  },
  {
    slug: "social-media-causality",
    title: "Social Media Engagement, Causal Analysis",
    tag: "Data Science",
    year: "2025",
    shortDesc: "Causal inference on Instagram & LinkedIn to find what actually drives engagement.",
    fullDesc:
      "A data science project that goes beyond correlation to uncover true causal relationships between content characteristics and engagement metrics across Instagram and LinkedIn. Using advanced causal inference techniques (do-calculus, propensity score matching), this analysis identifies which posting strategies actually drive engagement, not just what's associated with it. Delivers actionable content recommendations grounded in causal evidence.",
    stack: ["Python", "Causal Inference", "Pandas", "Statsmodels", "Data Visualization"],
    github: "https://github.com/Akanksha-Nakati/Social-Media-Engagement-Analysis-using-Causality",
    live: null,
  },
  {
    slug: "stocks",
    title: "Google Stocks Prediction Analysis",
    tag: "ML / Finance",
    year: "2024",
    shortDesc: "Machine learning model predicting Google stock price movements.",
    fullDesc:
      "A time-series machine learning project analyzing and predicting Google stock price movements. Uses historical OHLCV data combined with technical indicators and sentiment signals to train predictive models. Includes exploratory data analysis, feature engineering, model comparison (LSTM, ARIMA, XGBoost), and performance evaluation with backtesting.",
    stack: ["Python", "scikit-learn", "LSTM", "ARIMA", "XGBoost", "Pandas", "Matplotlib"],
    github: "https://github.com/Akanksha-Nakati/Google-Stocks-Prediction-Analysis",
    live: null,
  },
  {
    slug: "sleep-health",
    title: "Sleep Health & Lifestyle Analysis",
    tag: "Data Analysis",
    year: "2024",
    shortDesc: "Statistical analysis of sleep patterns, lifestyle factors, and health outcomes.",
    fullDesc:
      "A comprehensive data analysis project exploring the relationship between sleep health and lifestyle factors. Investigates how variables like exercise frequency, screen time, stress levels, and diet quality correlate with sleep duration and quality. Uses statistical methods and visualizations to surface key health insights and patterns across demographic groups.",
    stack: ["Python", "Pandas", "Seaborn", "Matplotlib", "Statistical Analysis", "Jupyter"],
    github: "https://github.com/Akanksha-Nakati/Sleep-Health-and-Lifestyle-Analysis",
    live: null,
  },
  {
    slug: "brain-tumor",
    title: "Brain Tumor Segmentation & Classification",
    tag: "ML / Research",
    year: "2023",
    shortDesc: "Deep learning model for MRI-based brain tumor detection and classification.",
    fullDesc:
      "A deep learning research project applying convolutional neural networks to MRI scans for automated brain tumor detection, segmentation, and classification. Achieves high accuracy on multi-class tumor identification (glioma, meningioma, pituitary) using transfer learning with pre-trained architectures. Includes data augmentation, class balancing, and grad-CAM visualizations for model interpretability.",
    stack: ["Python", "TensorFlow", "Keras", "CNN", "Transfer Learning", "OpenCV", "Grad-CAM"],
    github: "https://github.com/Akanksha-Nakati/Brain-Tumor-Segmentation-and-Classification",
    live: null,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
