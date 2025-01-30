import Button from "./components/Button";
import Footer from "./components/Footer";
import SkillCard from "./components/SkillCards";

export default function HomePage() {
  const skills = [
    { imgSrc: "/images/react.png", name: "React", years: 2, stackFocus: "Front-End" },
    { imgSrc: "/images/typescript.png", name: "TypeScript", years: 2, stackFocus: "Front-End" },
    { imgSrc: "/images/nextjs.png", name: "Next.js", years: 2, stackFocus: "Front-End" },
    { imgSrc: "/images/ruby.png", name: "Ruby", years: 1, stackFocus: "Full-Stack / Back-End" },
    { imgSrc: "/images/java.png", name: "Java", years: 2, stackFocus: "Back-End" },
    { imgSrc: "/images/cpp.png", name: "C/C++", years: 1, stackFocus: "Robotics / Back-End" },
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-start px-4 pt-36">
      <section className="text-center w-full max-w-4xl mx-auto space-y-8">
        <h1 className="text-6xl sm:text-7xl font-extrabold uppercase tracking-wide border-b-4 border-white pb-4">
          HELLO, I&apos;M PEDRO OLIVEIRA
        </h1>

        <p className="text-2xl sm:text-3xl font-medium tracking-widest max-w-3xl mx-auto">
          Full-Stack Developer &amp; Software Engineer | Web, AI, Robotics, and More
        </p>

        <Button label="VIEW MY WORK" />

        <div className="mt-12 flex justify-center gap-8 text-white">
          <a href="https://twitter.com/" className="hover:text-pink-600 transition-colors">
            <i className="fab fa-twitter text-3xl"></i>
          </a>
          <a href="https://github.com/" className="hover:text-pink-600 transition-colors">
            <i className="fab fa-github text-3xl"></i>
          </a>
        </div>
      </section>

      <div className="text-center w-full max-w-4xl mx-auto space-y-8 py-24">
        <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-wide border-b-4 border-white pb-4">
          KNOW MORE ABOUT ME
        </h2>

        <p className="text-2xl sm:text-3xl font-medium tracking-widest max-w-3xl mx-auto">
          I&apos;m a passionate Software Engineering student and Front-End Developer with a love for AI, robotics, space related subjects, and games!
        </p>

        <p className="text-xl sm:text-2xl font-light tracking-widest max-w-3xl mx-auto">
          Constantly learning and exploring new technologies, pushing boundaries, and creating impactful digital experiences that inspire.
        </p>

        <Button label="LEARN MORE" />
      </div>

      <section className="text-center w-full max-w-4xl mx-auto space-y-8 py-24">
        <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-wide border-b-4 border-white pb-4">
          SKILLS
        </h2>
        <p className="text-xl sm:text-2xl font-medium tracking-widest max-w-3xl mx-auto">
          Tools I work with and my experience
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              imgSrc={skill.imgSrc}
              name={skill.name}
              years={skill.years}
              stackFocus={skill.stackFocus}
            />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
