import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiCplusplus,
  SiPython,
} from "react-icons/si";

export default function Skills({ id }) {
  const skills = [
    { icon: <FaHtml5 className="text-[#E44D26]" />, name: "HTML", level: "Advanced" },
    { icon: <FaCss3Alt className="text-[#1572B6]" />, name: "CSS", level: "Advanced" },
    { icon: <FaJsSquare className="text-[#F7DF1E]" />, name: "JavaScript", level: "Proficient" },
    { icon: <FaReact className="text-[#61DBFB]" />, name: "React.js", level: "Proficient" },
    { icon: <SiTailwindcss className="text-[#38BDF8]" />, name: "TailwindCSS", level: "Proficient" },
    { icon: <FaNodeJs className="text-[#83CD29]" />, name: "Node.js", level: "Intermediate" },
    { icon: <SiExpress className="text-[var(--text)] opacity-70" />, name: "Express.js", level: "Intermediate" },
    { icon: <SiMongodb className="text-[#4DB33D]" />, name: "MongoDB", level: "Proficient" },
    { icon: <FaGitAlt className="text-[#F1502F]" />, name: "Git", level: "Beginner" },
    { icon: <FaGithub className="text-gray-900 dark:text-white" />, name: "GitHub", level: "Advanced" },
    { icon: <SiPython className="text-[#3776AB]" />, name: "Python", level: "Beginner" },
    { icon: <SiCplusplus className="text-[#00599C]" />, name: "C / C++", level: "Intermediate" },
  ];

  return (
    <section
      id={id}
      className="bg-[var(--bg)] text-[var(--text)] scroll-mt-16 min-h-[90vh] py-12 sm:py-16 transition-colors duration-300"
    >
      <div
        className="max-w-[1170px] mx-auto px-4 sm:px-6 text-center"
        data-aos="fade-up"
      >
        {/* Heading */}
        <h1 className="text-[26px] sm:text-[28px] md:text-[32px] font-bold text-[var(--accent)]">
          Skillset
        </h1>

        <p className="text-[15px] sm:text-[16px] md:text-[18px] italic font-semibold mt-2 opacity-70">
          Technologies that power my development journey.
        </p>

        {/* Skills Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100}
              className="flex flex-col items-center bg-[var(--bg)] border border-[var(--text)]/10 p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >

              <div className="text-[45px] sm:text-[55px] md:text-[60px] mb-3">
                {skill.icon}
              </div>

              <p className="font-semibold text-[var(--text)] text-[14px] sm:text-[15px] md:text-[16px]">
                {skill.name}
              </p>

              <span className="mt-2 text-[11px] sm:text-[12px] md:text-sm text-[var(--text)] opacity-60 bg-[var(--text)]/10 px-3 py-0.5 rounded-full">
                {skill.level}
              </span>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}