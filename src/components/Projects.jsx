import React from "react";
import projects from "../data.js";

export default function Projects({ id }) {
  return (
    <section
      id={id}
      className="bg-[#FAFAFA] scroll-mt-16 py-12 sm:py-16 text-gray-800"
    >
      <div
        className="max-w-[1170px] mx-auto px-4 sm:px-6 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Heading */}
        <h1 className="text-[26px] sm:text-[28px] md:text-[32px] font-bold green-text">
          Projects
        </h1>
        <p className="text-[15px] sm:text-[16px] md:text-[18px] italic font-semibold mt-2 text-gray-600">
          Showcasing some of the projects I’ve built with passion and precision.
        </p>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((project) => (
            <div
              key={project.pId}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="w-full h-52 sm:h-56 md:h-60 lg:h-52">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 text-left">
                <h2 className="text-[18px] font-semibold text-[#333] mb-2">
                  {project.name}
                </h2>
                <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-between items-center gap-3 mt-5">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white bg-[#4CAF50] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#43A047] transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="green-text border border-[#4CAF50] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#E8F5E9] transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
