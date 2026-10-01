import { useState, useEffect } from "react";
import logoIcon from "@assets/images/logo/logo.ico";
import transparentTexture from "@assets/images/texture/Transparent-Texture.webp";

function easeInOutCubic(x) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

const Preloader = ({ onFinish, progress = 0, isReady = false }) => {
  const [internalProgress, setInternalProgress] = useState(0);
  const [isFilled, setIsFilled] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // Lock scroll while preloader is active
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Determine current display progress (high precision float)
  const currentProgress =
    typeof progress === "number" && progress > 0 ? progress : internalProgress;

  // Standalone fallback in case props are not passed
  useEffect(() => {
    if (typeof progress === "number" && progress > 0) return;

    const totalDuration = 2600;
    const startTime = performance.now();
    let rafId = null;
    let currentDisplay = 0;

    const loop = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / totalDuration, 1);
      const target = easeInOutCubic(t) * 100;

      const diff = target - currentDisplay;
      if (diff > 0.02) {
        currentDisplay += diff * 0.085;
      } else if (target >= 100) {
        currentDisplay = 100;
      }

      const clamped = Math.min(100, Math.max(0, currentDisplay));
      setInternalProgress(clamped);

      if (clamped < 99.8 || t < 1) {
        rafId = requestAnimationFrame(loop);
      } else {
        setInternalProgress(100);
      }
    };

    rafId = requestAnimationFrame(loop);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [progress]);

  // Logo fill check (trigger soft scale animation when nearly 100%)
  useEffect(() => {
    if (currentProgress >= 99.5) {
      setIsFilled(true);
    }
  }, [currentProgress]);

  // Trigger exit when asset preloading is 100% ready
  useEffect(() => {
    if (isReady || (currentProgress >= 99.9 && !progress)) {
      setIsFilled(true);
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        const doneTimer = setTimeout(() => {
          setIsDone(true);
          document.body.style.overflow = "";
          if (onFinish) onFinish();
        }, 950);

        return () => clearTimeout(doneTimer);
      }, 450);

      return () => clearTimeout(exitTimer);
    }
  }, [isReady, currentProgress, progress, onFinish]);

  if (isDone) return null;

  // High-precision subpixel clipping
  const insetPercentage = Math.max(0, Math.min(100, 100 - currentProgress)).toFixed(2);

  return (
    <aside
      aria-label="Loading Screen"
      className="fixed inset-0 z-[9999] pointer-events-auto select-none overflow-hidden"
    >
      <div
        className="preloader-curtain absolute inset-0 w-full h-full bg-[#f5f4f1] z-10 flex items-center justify-center border-r border-[#dedbd4] will-change-transform"
        style={{
          transform: isExiting ? "translateX(-100%)" : "translateX(0%)",
          transition: "transform 900ms cubic-bezier(0.77, 0, 0.175, 1)",
          boxShadow: isExiting ? "35px 0 70px rgba(0, 0, 0, 0.25)" : "none",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-90 mix-blend-multiply"
          style={{
            backgroundImage: `url(${transparentTexture})`,
            filter: "blur(0.3px)",
          }}
        />

        <div
          className="relative z-20 will-change-transform"
          style={{
            transform: isExiting ? "translateX(-160px)" : "translateX(0)",
            opacity: isExiting ? 0 : 1,
            transition: "transform 850ms cubic-bezier(0.77, 0, 0.175, 1), opacity 650ms ease-out",
          }}
        >
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center select-none">
            {/* Background subtle ghost logo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 grayscale brightness-75 select-none">
              <img
                src={logoIcon}
                alt="HW Logo Background"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Silky-smooth filled logo with sub-pixel clip path */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none will-change-[clip-path]"
              style={{
                clipPath: `inset(${insetPercentage}% 0 0 0)`,
                WebkitClipPath: `inset(${insetPercentage}% 0 0 0)`,
              }}
            >
              <img
                src={logoIcon}
                alt="HW Logo"
                className={`w-full h-full object-contain transition-transform duration-700 ease-out ${
                  isFilled ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Preloader;
