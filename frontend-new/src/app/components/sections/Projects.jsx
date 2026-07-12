import Image from "next/image";
import { GrLinkNext } from "react-icons/gr";
import { FaArrowDown } from "react-icons/fa6";
import { personalProjects } from "../../../../data/projects";

const featured = personalProjects.filter((p) => p.featured);
const spotlight = (featured.length > 0 ? featured : personalProjects).slice(0, 2);

const domainOf = (href) =>
  href.replace(/^https?:\/\//, "").replace(/\/$/, "").split("/")[0];

export default function Projects({ onSetExperienceSection }) {
  return (
    <div
      className="max-md:hidden max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-6 col-start-5 bg-spotify-light-dark rounded-xl overflow-hidden h-full self-stretch min-h-0 flex flex-col"
      id="projects"
    >
      {/* Buttons */}
      <div className="shrink-0 p-4">
        <div className="flex gap-3 justify-center sm:flex-auto">
          <button
            type="button"
            className="flex items-center justify-center text-sm font-bold bg-spotify-green/10 border-spotify-green hover:scale-105 px-5 py-2 rounded-xl gap-2 min-w-[180px] text-spotify-green mb-0.5 transition-all duration-200 w-fit hover:bg-spotify-green/10 cursor-pointer"
            aria-label="View featured projects"
          >
            Featured Projects
            <FaArrowDown className="text-base" />
          </button>
          <button
            type="button"
            className="flex items-center justify-center text-sm font-bold border border-[#727272] hover:border-white hover:scale-105 text-white px-5 py-3 rounded-xl gap-2 transition-all duration-200 animate-pulse hover:animate-none hover:bg-white hover:text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] min-w-[180px]"
            onClick={onSetExperienceSection}
            aria-label="Explore all projects in expanded view"
          >
            Explore All Projects
            <GrLinkNext className="text-base" />
          </button>
        </div>
      </div>

      {/* Two browser-mockup cards, filling the column */}
      <div className="flex min-h-0 flex-1 flex-col gap-3 px-4 pb-4">
        {spotlight.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl bg-[#2a2a2a] ring-1 ring-white/5 transition-colors duration-200 hover:bg-[#333333]"
          >
            {/* Browser chrome */}
            <div className="flex shrink-0 items-center gap-2 bg-[#1c1c1c] px-3 py-2">
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              </span>
              <div className="ml-1 flex-1 truncate rounded-md bg-[#0f0f0f] px-2.5 py-1 text-[10px] text-neutral-400">
                {domainOf(project.href)}
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative min-h-0 flex-1 overflow-hidden bg-white">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                width={500}
                height={300}
                sizes="500px"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>

            {/* Text */}
            <div className="shrink-0 p-3.5">
              <h3 className="text-[15px] font-bold text-white">{project.title}</h3>
              <p className="mt-0.5 line-clamp-2 text-[12.5px] leading-snug text-spotify-grey">
                {project.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-spotify-green/15 px-2 py-0.5 text-[10px] font-medium text-spotify-green"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
