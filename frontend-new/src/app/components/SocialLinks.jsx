import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { siteConfig } from "@/src/config/site";
function SocialLinks() {
  return <>{socialMedias.map((social) => <a
    href={social.url}
    className="text-3xl hover:text-spotify-green"
    key={social.title}
    target={social.url.startsWith("mailto:") ? void 0 : "_blank"}
    rel={social.url.startsWith("mailto:") ? void 0 : "noopener noreferrer"}
    aria-label={social.ariaLabel}
  >{social.icon}</a>)}</>;
}
const socialMedias = [
  {
    title: "Github",
    url: siteConfig.socials.github,
    icon: <FaGithub />,
    ariaLabel: "Visit the GitHub profile"
  },
  {
    title: "Linkedin",
    url: siteConfig.socials.linkedin,
    icon: <FaLinkedin />,
    ariaLabel: "Visit the LinkedIn profile"
  },
  {
    title: "X",
    url: siteConfig.socials.x,
    icon: <FaSquareXTwitter />,
    ariaLabel: "Visit the X profile"
  },
  {
    title: "Email",
    url: `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.contact.email}`,
    icon: <FaEnvelope />,
    ariaLabel: "Send an email"
  }
].filter((social) => Boolean(social.url));
export {
  SocialLinks as default
};
