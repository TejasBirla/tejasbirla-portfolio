import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { experiences } from "../data.js";

export default function Experience({ id }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id={id}
      className="bg-[var(--bg)] text-[var(--text)] scroll-mt-20 min-h-[65vh] py-14 sm:py-16 transition-colors duration-300"
    >
      <div className="max-w-[1170px] mx-auto px-5 sm:px-6">

        {/* Heading */}
        <div className="text-center" data-aos="fade-up">

          <h1 className="text-[26px] sm:text-[28px] md:text-[32px] font-bold text-[var(--accent)]">
            Experience
          </h1>

          <p className="text-[15px] sm:text-[16px] md:text-[18px] italic font-semibold mt-2 opacity-70">
            My professional journey so far.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative mt-10">

          {/* Line */}
          <div className="absolute left-3 sm:left-4 top-0 h-full w-[2px] bg-[var(--text)] opacity-10" />

          <div className="flex flex-col gap-5">

            {experiences.map((exp, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="relative pl-10 sm:pl-12"
              >

                {/* Dot */}
                <span className="absolute left-3 sm:left-4 top-6 -translate-x-1/2 w-3 h-3 bg-[var(--accent)] rounded-full border-4 border-[var(--bg)]" />

                {/* Card */}
                <div className="bg-[var(--bg)] border border-[var(--text)]/10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-5 sm:p-6">

                  {/* Header */}
                  <div className="flex justify-between items-start gap-3">

                    <div>
                      <h2 className="text-[17px] sm:text-[18px] font-semibold">
                        {exp.role}
                      </h2>

                      <p className="text-[var(--accent)] font-medium mt-1 text-[13px] sm:text-[14px]">
                        {exp.company}
                      </p>
                    </div>

                    <button
                      onClick={() => toggle(index)}
                      className={`p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <FaChevronDown className="text-[var(--text)] opacity-60 text-base" />
                    </button>

                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-3 mt-3 flex-wrap">

                    <span className="text-[11px] sm:text-[12px] bg-[var(--accent)]/10 text-[var(--accent)] font-semibold px-3 py-1 rounded-full">
                      {exp.type}
                    </span>

                    <span className="text-[11px] sm:text-[12px] opacity-60 font-medium">
                      {exp.duration}
                    </span>

                  </div>

                  {/* Expand */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openIndex === index ? "max-h-[500px] mt-4" : "max-h-0"
                    }`}
                  >
                    <ul className="flex flex-col gap-2">

                      {exp.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[13px] sm:text-[14px] opacity-80"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
                          {point}
                        </li>
                      ))}

                    </ul>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}