import { useContext } from "react";
import { AppContext } from "../App.jsx";

const SECTIONS = [
  {
    title: "Programming Languages & Tools",
    items: [
      "Python",
      "SQL",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Flask",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    title: "Machine Learning & AI",
    items: [
      "Deep Learning",
      "Neural Networks",
      "GANs",
      "LLMs",
      "Model Fine-Tuning",
      "AgenticAI",
    ],
  },
  {
    title: "Data Science & Analytics",
    items: [
      "Data Analytics",
      "Feature Engineering",
      "Predictive Modeling",
      "Statistical Analysis",
      "A/B Testing",
      "Tableau",
      "Power BI",
      "Excel",
    ],
  },
  {
    title: "Big Data & Cloud",
    items: ["Snowflake", "Airflow", "dbt", "SQL Server", "AWS"],
  },
];

export default function SkillsSection() {
  const { theme } = useContext(AppContext);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
      {SECTIONS.map((section) => (
        <div
          key={section.title}
          className="border dark:border-gray-700 p-6 rounded-xl bg-white dark:bg-[#0e182c] hover:bg-gray-100 hover:dark:bg-[#1a2b4a] transition-all duration-300"
        >
          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
            {section.title}
          </h4>
          <div className="flex flex-wrap gap-4">
            {section.items.map((skill) => (
              <div
                key={skill}
                className="px-2 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-800 dark:text-gray-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
