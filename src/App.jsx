import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Experience from "./components/Experience.jsx";

import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // AOS setup
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
    });

    const handleHashChange = () => {
      Aos.refresh();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="bg-white text-gray-800 dark:bg-[#09090b] dark:text-[#e4e4e7] transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Home id="home" />
      <Experience id="experience" />
      <Skills id="skillSets" />
      <Projects id="projects" />
      <Footer />
    </div>
  );
}

export default App;