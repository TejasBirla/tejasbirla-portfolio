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
      className="bg-[#FAFAFA] scroll-mt-16 text-gray-800 min-h-[90vh] flex items-center py-8 md:py-10"
    >
      <div className="max-w-[1170px] mx-auto px-5 sm:px-4 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Left Side - Text */}
        <div
          className="flex flex-col gap-4"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="green-text">
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
          <h3 className="text-xl md:text-2xl text-gray-600 font-semibold">
            MERN Stack Developer
          </h3>

          <p className="text-gray-600 text-[16px] leading-relaxed max-w-full md:max-w-[530px] text-left md:text-justify">
            I’m a passionate developer focused on building impactful full-stack
            applications using the MERN stack. I love crafting clean, efficient,
            and scalable code that brings ideas to life. Currently, I’m pursuing
            my{" "}
            <span className="font-semibold green-text">
              Bachelor of Computer Applications (BCA)
            </span>
            , and continuously improving my problem-solving and development
            skills.
          </p>

          <p className="text-[15px] md:text-[16px] font-medium text-gray-800 mt-2">
            💼 Currently open for internships and job opportunities!
          </p>

          <p className="text-[15px] md:text-[16px] text-gray-700 font-semibold mt-4">
            Turning ideas into reality — let’s connect!
          </p>

          <div className="flex items-center gap-7 mt-3 text-[26px] md:text-[30px]">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tejasbirla3@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
              style={{ color: "#EA4335" }}
            >
              <MdEmail />
            </a>

            <a
              href="https://www.linkedin.com/in/tejas-birla/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
              style={{ color: "#0A66C2" }}
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/TejasBirla"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
              style={{ color: "#171515" }}
            >
              <FaGithub />
            </a>

            <a
              href="https://x.com/TejasBytes"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
              style={{ color: "#000000" }}
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div
          className="flex justify-center md:justify-end"
          data-aos="fade-left"
          data-aos-once="true"
        >
          <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-md bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <img src={profileImg} alt="profile-Img" />
          </div>
        </div>
      </div>
    </section>
  );
}
