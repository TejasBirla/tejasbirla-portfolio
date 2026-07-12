export const siteConfig = {
  siteName: "Tejas Birla Portfolio",
  siteUrl: "https://tejasbirla.dev",
  locale: "en_US",
  owner: {
    name: "Tejas Birla",
    role: "Full-Stack Engineer",
    headline: "Developer • Engineer • Builder",
    description:
      "A full-stack developer building web products across the MERN stack, Next.js and Python.",
    currentCompany: {
      name: "Import Star Technologies",
      url: "#experience",
    },
    profileIntro: "Hi, I'm Tejas Birla.",
    profileBody:
      "I'm a passionate developer focused on building impactful full-stack applications using the MERN stack. I love crafting clean, efficient, and scalable code that brings ideas to life. Currently, I'm pursuing my Bachelor of Computer Applications (BCA) and continuously improving my problem-solving skills.",
    focus: "MERN, Next.js, and Python",
    blogPrompt: "",
  },
  contact: {
    email: "tejasbirla3@gmail.com",
  },
  socials: {
    github: "https://github.com/TejasBirla",
    linkedin: "https://www.linkedin.com/in/tejas-birla/",
    x: "https://x.com/TejasBytes",
  },
  seo: {
    defaultTitle: "Tejas Birla | Full-Stack Engineer",
    description:
      "Tejas Birla, full-stack developer building web products with the MERN stack, Next.js and Python.",
    keywords: [
      "Tejas Birla",
      "portfolio website",
      "spotify portfolio",
      "full-stack developer",
      "MERN developer portfolio",
      "software engineer portfolio",
    ],
    ogImage: "/og-template.svg",
    ogImageAlt: "Tejas Birla portfolio preview",
    twitterHandle: "@TejasBytes",
  },
  blog: {
    title: "Writings",
    description: "Notes on projects and things I'm learning.",
    author: "Tejas Birla",
  },
  footer: {
    repositoryUrl: "",
  },
  features: {
    vercelAnalytics: false,
    speedInsights: false,
  },
  widgets: {
    githubUsername: "TejasBirla",
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator",
  },
  assets: {
    avatar: "/profileImg.jpg",
    favicon: "/favicon.svg",
  },
};

export function absoluteUrl(path = "") {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  if (!path) return baseUrl;
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getSocialProfileUrls() {
  return Object.values(siteConfig.socials).filter((url) =>
    url.startsWith("http")
  );
}

export function getNameWords() {
  return siteConfig.owner.name.split(/\s+/).filter(Boolean);
}
