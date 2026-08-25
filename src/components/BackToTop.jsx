import { useState, useEffect, useRef } from "react";
import { FiArrowUp } from "react-icons/fi";

const CIRCUMFERENCE = 125.66;

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(false);
  const circleRef = useRef(null);

  useEffect(() => {
    let rafId = null;

    const updateProgress = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (circleRef.current && totalScroll > 0) {
        const progress = Math.min(1, Math.max(0, currentScroll / totalScroll));
        const offset = CIRCUMFERENCE - CIRCUMFERENCE * progress;
        circleRef.current.style.strokeDashoffset = `${offset}`;
      }

      const shouldShow = currentScroll > 400;
      if (shouldShow !== isVisibleRef.current) {
        isVisibleRef.current = shouldShow;
        setIsVisible(shouldShow);
      }

      rafId = null;
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/95 backdrop-blur-md border border-[#dedbd4] shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-[#fc731f] hover:shadow-[0_8px_24px_rgba(252,115,31,0.22)] hover:scale-110 select-none cursor-pointer group ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg
        className="absolute inset-0 w-full h-full -rotate-90 p-0.5"
        viewBox="0 0 48 48"
      >
        <circle
          cx="24"
          cy="24"
          r="20"
          className="stroke-[#eae7df]"
          strokeWidth="2"
          fill="none"
        />
        <circle
          ref={circleRef}
          cx="24"
          cy="24"
          r="20"
          className="stroke-[#fc731f]"
          strokeWidth="2"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <FiArrowUp className="relative z-10 w-4 h-4 md:w-5 md:h-5 text-[#444444] transition-all duration-200 group-hover:text-[#fc731f] group-hover:-translate-y-0.5" />
    </button>
  );
};

export default BackToTop;
