import Image from "next/image";
function ProgrammingLanguages() {
  return <div
    className="max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-2 col-start-3 row-start-5 rounded-xl bg-spotify-light-dark overflow-hidden"
    id="programming-languages"
  ><div className="p-6"><h1 className="text-xl font-bold mb-5">Programming Languages</h1><div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 gap-4">{languageItems.map((item) => <div
    className="flex items-center justify-center p-2.5 rounded-lg sm:hover:bg-[#282828] transition-all duration-200"
    key={item.name}
  >{item.component}</div>)}</div></div></div>;
}
const devicon = (slug) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}.svg`;
const langs = [
  { name: "HTML5", slug: "html5/html5-original" },
  { name: "CSS3", slug: "css3/css3-original" },
  { name: "JavaScript", slug: "javascript/javascript-original" },
  { name: "TypeScript", slug: "typescript/typescript-original" },
  { name: "React", slug: "react/react-original" },
  { name: "Next.js", slug: "nextjs/nextjs-original", invert: true },
  { name: "Node.js", slug: "nodejs/nodejs-original" },
  { name: "Express", slug: "express/express-original" },
  { name: "MongoDB", slug: "mongodb/mongodb-original" },
  { name: "Python", slug: "python/python-original" },
  { name: "TailwindCSS", slug: "tailwindcss/tailwindcss-original" },
  { name: "C++", slug: "cplusplus/cplusplus-original" },
  { name: "Git", slug: "git/git-original" }
];
const languageItems = langs.map((l) => ({
  name: l.name,
  component: (
    <Image
      src={devicon(l.slug)}
      width={32}
      height={32}
      alt={l.name}
      style={l.invert ? { filter: "invert(1)" } : undefined}
    />
  )
}));
export {
  ProgrammingLanguages as default
};
