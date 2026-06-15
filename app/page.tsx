import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Contact from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6">
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}