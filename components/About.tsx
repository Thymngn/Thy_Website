import Image from "next/image";

const skills = [
  "Python", "SQL", "Java", "JavaScript",
  "Azure", "OCI", "TensorFlow", "PyTorch",
  "Power BI", "Tableau",
];

export default function About() {
  return (
    <section id="about" className="py-16">
      {/* Hero */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1">
          <p className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-3">
            Computer Science Graduate · Florida Atlantic University
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I&apos;m Thy
          </h1>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-xl">
            I build data-driven solutions and turn insights into action.
            Passionate about AI, analytics, and cloud computing.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-2xl">
            Based in Florida, United States.
          </p>
          <div className="mt-7 flex gap-3 flex-wrap">
            <a
              href="#projects"
              className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-gray-300 px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="flex-shrink-0">
          <Image
            src="/Thy.webp"
            alt="Thy Nguyen"
            width={208}
            height={208}
            className="rounded-full object-cover w-44 h-44 md:w-52 md:h-52 ring-4 ring-gray-100 shadow-md"
          />
        </div>
      </div>

      {/* About blurb + skills */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed max-w-2xl">
          I enjoy solving business problems through data analytics,
          machine learning, and cloud technologies. My experience spans
          SQL, Python, Oracle Cloud Infrastructure, Microsoft Azure,
          and applied AI development.
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed max-w-2xl">
            Beyond technology, I enjoy traveling, watching soccer and movies, and
            learning new languages. I am currently studying Japanese. 
        </p>

        <div className="mt-8">
          <h3 className="font-semibold text-gray-900 mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}