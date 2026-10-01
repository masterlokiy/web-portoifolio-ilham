import { useEffect, useState, useRef, useMemo } from "react";
import Lenis from "lenis";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./sections/Home";
import About from "./sections/About";
import Project from "./sections/Project";
import PhotoMarquee from "./components/PhotoMarquee";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import useAssetPreloader from "./hooks/useAssetPreloader";

import heroVideo from "@assets/video/sherlockholmes.webm";

// Collect all critical image assets in the application for preloading & memory decoding
const allAppImages = Object.values(
  import.meta.glob(
    "../assets/images/**/*.{jpg,jpeg,png,webp,svg,ico}",
    { eager: true, query: "?url", import: "default" }
  )
);
const allAppVideos = [heroVideo];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef(null);

  // Real asset preloader: loads & decodes fonts, images, and video in memory
  const { progress, isReady } = useAssetPreloader({
    images: allAppImages,
    videos: allAppVideos,
    minDuration: 2600,
  });

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
      <Preloader
        progress={progress}
        isReady={isReady}
        onFinish={handlePreloaderFinish}
      />
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
