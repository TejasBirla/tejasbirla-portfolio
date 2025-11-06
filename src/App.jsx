import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800, // animation duration (ms)
      once: false, // animation runs only once
      easing: "ease-in-out", // smooth easing
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
    <div>
      <Navbar />
      <Home id="home" />
      <Skills id="skillSets" />
      <Projects id="projects" />
      <Footer />
    </div>
  );
}

export default App;
