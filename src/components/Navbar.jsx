import React, { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  const handleClickLink = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpenMenu(false);
  };

  return (
    <nav className="bg-[var(--bg)] text-[var(--text)] shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-[1170px] mx-auto px-5 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-[26px] font-bold text-[var(--accent)]">
          Tejas Birla
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 font-medium text-[17px]">
          {["home", "experience", "skillSets", "projects"].map((id) => (
            <li
              key={id}
              onClick={() => handleClickLink(id)}
              className="cursor-pointer hover:text-[var(--accent)] transition-colors"
            >
              {id === "skillSets" ? "Skills" : id.charAt(0).toUpperCase() + id.slice(1)}
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle (animated) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-10 h-10 flex items-center justify-center rounded-full
                       bg-gray-200 dark:bg-gray-800 transition-all duration-500
                       hover:scale-110"
          >
            <span className="transition-all duration-500 transform">
              {darkMode ? (
                <FaSun className="text-yellow-400 animate-spin-slow" />
              ) : (
                <FaMoon className="text-gray-700 animate-pulse" />
              )}
            </span>
          </button>

          {/* Resume */}
          <a
            href="/Tejas_Birla_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-block bg-[var(--accent)] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition"
          >
            📄 View My Resume
          </a>

          {/* Hamburger */}
          <div
            className="md:hidden text-[22px] cursor-pointer"
            onClick={toggleMenu}
          >
            {menu ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[var(--bg)] text-[var(--text)]
        flex flex-col items-center justify-center transition-transform duration-300
        ${menu ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex flex-col items-center gap-8 text-xl font-medium">
          {["home", "experience", "skillSets", "projects"].map((id) => (
            <li
              key={id}
              onClick={() => handleClickLink(id)}
              className="cursor-pointer hover:text-[var(--accent)] transition"
            >
              {id === "skillSets" ? "Skills" : id.charAt(0).toUpperCase() + id.slice(1)}
            </li>
          ))}

          <li>
            <a
              href="/Tejas_Birla_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-[var(--accent)] text-white px-6 py-3 rounded-full mt-4"
            >
              📄 View My Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}