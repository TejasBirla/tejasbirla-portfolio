import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import profileImg from "../assets/profileImg.jpg";
import { Typewriter } from "react-simple-typewriter";

export default function Home({ id }) {
  return (
    <section
      id={id}
      className="bg-[var(--bg)] text-[var(--text)] scroll-mt-16 min-h-[90vh] flex items-center py-8 md:py-10 transition-colors duration-300"
    >
      <div className="max-w-[1170px] mx-auto px-5 sm:px-4 flex flex-col md:flex-row items-center justify-between gap-11 md:gap-16">

        {/* LEFT */}
        <div className="flex flex-col gap-4" data-aos="fade-right">

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-[var(--accent)]">
              <Typewriter
                words={["Tejas Birla"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <h3 className="text-xl md:text-2xl text-[var(--text)] opacity-70 font-semibold">
            MERN Stack Developer
          </h3>

          <p className="text-[var(--text)] opacity-80 text-[16px] leading-relaxed max-w-full md:max-w-[530px] text-left md:text-justify">
            I’m a passionate developer focused on building impactful full-stack
            applications using the MERN stack. I love crafting clean, efficient,
            and scalable code that brings ideas to life. Currently, I’m pursuing
            my{" "}
            <span className="font-semibold text-[var(--accent)]">
              Bachelor of Computer Applications (BCA)
            </span>{" "}
            and continuously improving my problem-solving skills.
          </p>

          <p className="text-[var(--text)] font-medium mt-2 opacity-90">
            💼 Currently open for internships and job opportunities!
          </p>

          <p className="text-[var(--text)] font-semibold mt-4 opacity-80">
            Turning ideas into reality — let’s connect!
          </p>


          <div className="flex items-center gap-7 mt-3 text-[26px] md:text-[30px]">

            {/* Email */}
            <a
              href="mailto:tejasbirla3@gmail.com"
              className="hover:scale-110 transition-transform text-[#EA4335]"
            >
              <MdEmail />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tejas-birla/"
              className="hover:scale-110 transition-transform text-[#0A66C2] dark:text-[#4ea1ff]"
            >
              <FaLinkedin />
            </a>

            {/* GitHub (FIXED visibility) */}
            <a
              href="https://github.com/TejasBirla"
              className="hover:scale-110 transition-transform text-gray-900 dark:text-white"
            >
              <FaGithub />
            </a>

            {/* X (FIXED visibility) */}
            <a
              href="https://x.com/TejasBytes"
              className="hover:scale-110 transition-transform text-black dark:text-white"
            >
              <FaXTwitter />
            </a>

          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end" data-aos="fade-left">

          <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-md bg-[var(--bg)] border border-[var(--accent)]/20 flex items-center justify-center transition-colors duration-300">

            <img src={profileImg} alt="profile" className="w-full h-full object-cover" />

          </div>

        </div>
      </div>
    </section>
  );
}