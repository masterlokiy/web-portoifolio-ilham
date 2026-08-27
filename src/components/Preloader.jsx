import { useState, useEffect, useRef } from "react";
import logoIcon from "@assets/images/logo/logo.ico";

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isFilled, setIsFilled] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const totalDuration = 2200;
    const startTime = performance.now();
    let rafId = null;

    const loop = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / totalDuration, 1);

      const currentProg = Math.round(
        t < 0.7 ? (t / 0.7) * 75 : 75 + Math.pow((t - 0.7) / 0.3, 1.2) * 25
      );

      const cappedProg = Math.min(currentProg, 100);
      setProgress(cappedProg);

      if (cappedProg >= 99) {
        setIsFilled(true);
      }

      if (t < 1) {
        rafId = requestAnimationFrame(loop);
      } else {
        setProgress(100);
        setIsFilled(true);

        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setIsDone(true);
            document.body.style.overflow = originalOverflow;
            if (onFinish) onFinish();
          }, 950);
        }, 400);
      }
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.body.style.overflow = originalOverflow;
    };
  }, [onFinish]);

  if (isDone) return null;

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
            backgroundImage: `url('/assets/images/texture/Transparent-Texture.webp')`,
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
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 grayscale brightness-75 select-none">
              <img
                src={logoIcon}
                alt="HW Logo Background"
                className="w-full h-full object-contain"
              />
            </div>

            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none transition-all duration-75 ease-out"
              style={{
                clipPath: `inset(${100 - progress}% 0 0 0)`,
                WebkitClipPath: `inset(${100 - progress}% 0 0 0)`,
              }}
            >
              <img
                src={logoIcon}
                alt="HW Logo"
                className={`w-full h-full object-contain transition-all duration-500 ${isFilled
                  ? "scale-105"
                  : "scale-100"
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
