import { siteConfig } from "@/src/config/site";

function Footer() {
  return (
    <footer className="max-lg:col-span-1 max-lg:row-span-1 col-span-6 items-center text-center mt-12 mb-10">
      <p className="text-2xl font-bold tracking-wide text-white max-md:text-xl">
        Code. <span className="text-spotify-green">Create.</span> Innovate.
      </p>
      <p className="text-spotify-light-gray max-md:text-sm mt-3">
        &copy; {new Date().getFullYear()} {siteConfig.owner.name}
      </p>
    </footer>
  );
}

export default Footer;
