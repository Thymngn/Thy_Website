const contacts = [
  {
    label: "Email",
    display: "thynguyen@email.com",
    href: "mailto:thynguyen@email.com",
    icon: "✉",
  },
  {
    label: "LinkedIn",
    display: "linkedin.com/in/thy-nguyen-fau2022",
    href: "https://linkedin.com/in/thy-nguyen-fau2022",
    icon: "💼",
  },
  {
    label: "GitHub",
    display: "github.com/thymngn",
    href: "https://github.com/thymngn",
    icon: "⌥",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <h2 className="text-3xl font-bold mb-3">Contact</h2>
      <p className="text-gray-500 mb-10 max-w-lg">
        Open to full-time roles in data science, machine learning, and
        cloud engineering. Feel free to reach out.
      </p>

      <div className="flex flex-col gap-4 max-w-sm">
        {contacts.map(({ label, display, href, icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex items-center gap-4 border border-gray-200 rounded-xl px-5 py-4 hover:bg-gray-50 hover:shadow-sm transition-all group"
          >
            <span className="text-xl w-8 text-center" aria-hidden>
              {icon}
            </span>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {label}
              </p>
              <p className="text-sm font-medium text-gray-800 group-hover:text-black">
                {display}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}