"use client";
import { useState } from "react";
import { FaCode } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import SocialLinks from "./SocialLinks";
import MobileNav from "./MobileNav";
import { TypewriterEffect } from "./ui/type-writer-effect";
import Link from "next/link";
import { getNameWords } from "@/src/config/site";
function Navigation() {
  const [mobile, setMobile] = useState(false);
  function handleMobile() {
    setMobile((prev) => !prev);
  }
  return <nav aria-label="Primary navigation"><div
    className={`flex flex-col bg-spotify-light-dark max-md:mx-2 max-md:mt-2 mx-32 mt-4 p-2 rounded-full max-md:rounded-xl
         `}
  ><section className="flex flex-row w-full justify-between items-center max-md:px-4 max-md:py-1">{
    /*Mobile Mode*/
  }<button
    type="button"
    onClick={handleMobile}
    className="sm:hidden"
    aria-label={mobile ? "Close navigation menu" : "Open navigation menu"}
    aria-expanded={mobile}
    aria-controls="mobile-navigation"
  >{mobile ? <FaTimes className="text-4xl" aria-hidden="true" /> : <GiHamburgerMenu className="text-4xl" aria-hidden="true" />}</button><Link href="/" className="flex gap-2 text-3xl font-bold items-center"><FaCode className="text-spotify-green w-[70px]" /><TypewriterEffect
    words={getNameWords().map((word) => ({
      text: word,
      className: "text-4xl"
    }))}
    className="place-self-center max-lg:hidden text-white"
  /></Link>{
    /*Hidden on Mobile*/
  }<section className="flex flex-row gap-4 items-center max-sm:hidden mx-4"><SocialLinks /><a
    href="/Tejas_Birla_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 rounded-full bg-spotify-green px-4 py-2 text-base font-bold text-spotify-black hover:scale-105 transition-transform duration-200"
    aria-label="View résumé"
  >
              Resume
              <MdOutlineDownloadForOffline className="text-xl" /></a></section></section>{mobile && <MobileNav handleMobile={handleMobile} />}</div></nav>;
}
export {
  Navigation as default
};
