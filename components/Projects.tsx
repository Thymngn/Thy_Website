const projects = [
  {
    title: "ECG Arrhythmia Classification",
    description:
      "CNN model trained on the MIT-BIH dataset achieving 98% accuracy in detecting arrhythmia patterns from ECG signals.",
    tech: ["Python", "TensorFlow", "Signal Processing"],
    github: "https://github.com/Thymngn/ECG-1DCNN",
  },
  {
    title: "Owl Search",
    description:
      "Retrieval-Augmented Generation (RAG) assistant that answers plain-language questions about Florida Atlantic University",
    tech: ["Python", "RAG", "Gradio"],
    github: "https://github.com/Thymngn/ai201-Owl_Search",
  },
  {
    title: "Finance Education Agent",
    description:
      "AI-powered educational assistant that explains financial concepts using Azure OpenAI, MCP tools, and a Streamlit UI.",
    tech: ["Azure OpenAI", "Streamlit", "MCP"],
    github: "https://github.com/Thymngn/FinanceAgent",
  },
  {
    title: "OSWA Pentesting Agent",
    description:
      "Autonomous AI agent that conducts penetration testing against OWASP Juice Shop, a deliberately vulnerable web application.",
    tech: ["Python", "LLM", "Shell", "Docker"],
    github: "https://github.com/Thymngn/OSWA_Pentesting_Agent",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="mt-3 text-gray-600 leading-relaxed flex-1">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-5 text-sm font-medium text-gray-800 hover:text-black transition-colors"
            >
              View on GitHub
              <span aria-hidden>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}