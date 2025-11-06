import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  const handleClickLink = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpenMenu(false);
  };

  return (
    <nav className="bg-[#FAFAFA] text-gray-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-[1170px] mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-[26px] font-bold green-text">Tejas Birla</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 font-medium text-[17px] list-none">
          <li
            onClick={() => handleClickLink("home")}
            className="hover:text-[#4CAF50] hover:underline underline-offset-4 cursor-pointer transition-colors duration-200"
          >
            Home
          </li>
          <li
            onClick={() => handleClickLink("skillSets")}
            className="hover:text-[#4CAF50] hover:underline underline-offset-4 cursor-pointer transition-colors duration-200"
          >
            Skills
          </li>
          <li
            onClick={() => handleClickLink("projects")}
            className="hover:text-[#4CAF50] hover:underline underline-offset-4 cursor-pointer transition-colors duration-200"
          >
            Projects
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div
          className="cursor-pointer md:hidden text-[22px]"
          onClick={toggleMenu}
        >
          {menu ? <FaTimes /> : <FaBars />}
        </div>

        {/* Resume Button (Desktop Only) */}
        <a
          href="/Tejas_Birla_Resume.pdf"
          rel="noreferrer"
          target="_blank"
          className="hidden md:inline-block bg-linear-to-r from-[#4CAF50] to-[#2E7D32] text-white px-8 py-3 rounded-full text-base font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          📄 View My Resume
        </a>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center transform transition-transform duration-300 ${
          menu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 list-none text-xl font-medium text-gray-800">
          <li
            onClick={() => handleClickLink("home")}
            className="cursor-pointer hover:text-[#4CAF50]"
          >
            Home
          </li>
          <li
            onClick={() => handleClickLink("skillSets")}
            className="cursor-pointer hover:text-[#4CAF50]"
          >
            Skills
          </li>
          <li
            onClick={() => handleClickLink("projects")}
            className="cursor-pointer hover:text-[#4CAF50]"
          >
            Projects
          </li>
          <li>
            <a
              href="/Tejas_Birla_Resume.pdf"
              rel="noreferrer"
              target="_blank"
              className="inline-block bg-linear-to-r from-[#4CAF50] to-[#2E7D32] text-white px-8 py-3 rounded-full text-base font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              📄 View My Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
