import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./sections/Home";
import About from "./sections/About";
import Project from "./sections/Project";
import PhotoMarquee from "./components/PhotoMarquee";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  useEffect(() => {
    document.documentElement.classList.remove("night-mode");
    document.body.classList.remove("night-mode");
    localStorage.removeItem("nightMode");

    const cleanTitles = () => {
      document.querySelectorAll("[title]").forEach((el) => el.removeAttribute("title"));
    };
    cleanTitles();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            if (node.hasAttribute("title")) node.removeAttribute("title");
            node.querySelectorAll?.("[title]").forEach((el) => el.removeAttribute("title"));
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      <Navbar />
      <div className="relative">
        <Hero />
        <About />
      </div>
      <Project />
      <PhotoMarquee />
      <Footer />
      <BackToTop />
    </main>
  );
}

export default App;
