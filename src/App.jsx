import { useEffect, useState, useRef } from "react";
import Lenis from "lenis";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./sections/Home";
import About from "./sections/About";
import Project from "./sections/Project";
import PhotoMarquee from "./components/PhotoMarquee";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef(null);

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
    lenisRef.current = lenis;

    if (isLoading) {
      lenis.stop();
    } else {
      lenis.start();
    }

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  const handlePreloaderFinish = () => {
    setIsLoading(false);
    if (lenisRef.current) {
      lenisRef.current.start();
    }
  };

  return (
    <main>
      <Preloader onFinish={handlePreloaderFinish} />
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

