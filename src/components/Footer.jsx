import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] text-[var(--text)] py-6 border-t border-[var(--text)]/10 transition-colors duration-300">

      <div className="max-w-[1170px] mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

        {/* Left */}
        <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
          Built with ❤️ by{" "}
          <span className="text-[var(--accent)] font-semibold">
            Tejas Birla
          </span>
        </p>

        {/* Center */}
        <p className="italic text-[15px] sm:text-[16px] md:text-[17px] font-semibold opacity-80">
          <Typewriter
            words={["Code. Create. Innovate."]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </p>

        {/* Right - Icons */}
        <div className="flex gap-4 sm:gap-5 text-[20px] sm:text-[22px] justify-center md:justify-end">

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

          {/* GitHub */}
          <a
            href="https://github.com/TejasBirla"
            className="hover:scale-110 transition-transform text-gray-900 dark:text-white"
          >
            <FaGithub />
          </a>

          {/* X */}
          <a
            href="https://x.com/TejasBytes"
            className="hover:scale-110 transition-transform text-black dark:text-white"
          >
            <FaXTwitter />
          </a>

        </div>

      </div>
    </footer>
  );
}