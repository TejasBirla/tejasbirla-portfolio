import ShopperImg from "../src/assets/ShopperImg.png";
import pulseCheckImg from "../src/assets/pulseCheckImg.png";
import EventlyImg from "../src/assets/EventlyImg.png";
import SnipVaultImg from "../src/assets/SnipVaultImg.png";
import QuickChatImg from "../src/assets/quickChatImg.png";
import WeatherAppImg from "../src/assets/weather.jpg";

const projects = [
  {
    pId: 1,
    name: "pulseCheck Monitoring System",
    image: pulseCheckImg,
    description:
      "PulseCheck is a real-time website and API uptime monitoring platform that helps users track availability, response times, and service reliability.",
    liveDemo: "https://pulse-check-api-monitoring.vercel.app",
    githubLink: "https://github.com/TejasBirla/pulseCheck",
  },
  {
    pId: 2,
    name: "Shopper E-Commerce Platform",
    image: ShopperImg,
    description:
      "A full-stack e-commerce website built using the MERN stack with features like product browsing, cart system and Cashfree payment integration.",
    liveDemo: "https://shopper-shopping-website-frontend.vercel.app",
    githubLink: "https://github.com/TejasBirla/SHOPPER-shopping-website",
  },
  {
    pId: 3,
    name: "Evently - Event Booking Platform",
    image: EventlyImg,
    description:
      "An online event booking platform developed with MERN stack that allows users to browse, book, and pay for events using Cashfree integration.",
    liveDemo: "https://evently-ticket-booking-website.vercel.app",
    githubLink:
      "https://github.com/TejasBirla/Evently---Ticket-Booking-website",
  },
  {
    pId: 4,
    name: "SnipVault - Code Manager",
    image: SnipVaultImg,
    description:
      "A MERN-based code snippet manager that lets users save, organize, and share code snippets with syntax highlighting and public feed features.",
    liveDemo: "https://snip-vault-one.vercel.app",
    githubLink: "https://github.com/TejasBirla/SnipVault",
  },
  {
    pId: 5,
    name: "QuickChat Real-Time Messaging",
    image: QuickChatImg,
    description:
      "A real-time chat application using React, Node.js, Express, and Socket.io for instant communication between users.",
    liveDemo: "https://quickchat-app-five.vercel.app/",
    githubLink: "https://github.com/TejasBirla/Quick-Chat",
  },
  {
    pId: 6,
    name: "Weather App",
    image: WeatherAppImg,
    description:
      "A weather forecast app built with React and OpenWeather API that displays real-time weather updates of any city.",
    liveDemo: "",
    githubLink: "https://github.com/TejasBirla/Weather-App-using-React",
  },
];

export default projects;
