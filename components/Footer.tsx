export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-12">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
        <p>© 2026 Thy Nguyen</p>
        <div className="flex gap-5">
          <a
            href="https://github.com/thynguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/thynguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:thynguyen@email.com"
            className="hover:text-black transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
