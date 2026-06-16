export default function Resume() {
  return (
    <section id="resume" className="py-5">
      <h2 className="text-3xl font-bold mb-3">Resume</h2>
      <p className="text-gray-500 mb-6 max-w-lg">
        My full resume covers education, work experience, projects, and
        technical skills in data science, AI, and cloud engineering.
      </p>

      <iframe
        src="/ThyNguyenResume2026.pdf"
        title="Thy Nguyen Resume"
        className="w-full rounded-xl border border-gray-200 shadow-sm mb-6"
        style={{ height: "800px" }}
      />

      <a
        href="/ThyNguyenResume2026.pdf"
        download="ThyNguyenResume2026.pdf"
        className="inline-block border border-gray-300 px-5 py-3 rounded-lg hover:bg-gray-50 transition-colors"
      >
        Download PDF
      </a>
    </section>
  );
}