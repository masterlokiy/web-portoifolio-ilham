import { useEffect, useRef, useState } from "react";
import journey from "@/data/journey";
import bandageIcon from "@assets/images/icons/bandage-svgrepo-com.svg";
import eraserIcon from "@assets/images/icons/eraser-svgrepo-com.svg";
import paperPlaneIcon from "@assets/images/icons/paper-plane-svgrepo-com.svg";
import pencilIcon from "@assets/images/icons/pencil-svgrepo-com.svg";
import paperTornBorder from "@assets/images/picture/Paper-torn-border.webp";
import picProfile from "@assets/images/picture/pic-profile.webp";
import Certification from "./Certification";

const About = () => {
  const aboutRef = useRef(null);
  const cardRef = useRef(null);
  const journeyRefs = useRef([]);
  const activeJourneyRef = useRef(0);
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });
  const [activeJourney, setActiveJourney] = useState(0);
  const [ornamentPosition, setOrnamentPosition] = useState({ x: 0, y: 0 });

  const handleCardMove = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    setCardTilt({ x: y * -8, y: x * 8 });
  };

  const resetCardTilt = () => setCardTilt({ x: 0, y: 0 });

  const handleAboutPointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    setOrnamentPosition({ x: x * 24, y: y * 24 });
  };

  const resetOrnaments = () => setOrnamentPosition({ x: 0, y: 0 });

  useEffect(() => {
    let rafId = null;

    const updateActiveJourney = () => {
      const focusLine = window.innerHeight * 0.48;
      let currentJourney = 0;

      journeyRefs.current.forEach((item, index) => {
        if (item && item.getBoundingClientRect().top <= focusLine) {
          currentJourney = index;
        }
      });

      if (currentJourney !== activeJourneyRef.current) {
        activeJourneyRef.current = currentJourney;
        setActiveJourney(currentJourney);
      }
      rafId = null;
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(updateActiveJourney);
      }
    };

    updateActiveJourney();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const wave = (
    <div className="relative z-10 -mb-3 -translate-y-3 w-full overflow-hidden leading-0">
      <img
        src={paperTornBorder}
        alt=""
        className="block w-full scale-[1.01] brightness-0 invert h-auto"
      />
    </div>
  );

  return (
    <section ref={aboutRef} id="about" className="relative z-10 w-full">
      <div className="relative z-10 -mb-px w-full overflow-hidden leading-0">
        {wave}
      </div>

      <div
        className="relative w-full overflow-hidden bg-white"
        onPointerMove={handleAboutPointerMove}
        onPointerLeave={resetOrnaments}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
        linear-gradient(rgba(252, 115, 31, 0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(252, 115, 31, 0.08) 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="pointer-events-none absolute inset-0 z-1">
          <img
            src={bandageIcon}
            alt=""
            className="absolute left-[8%] top-[18%] h-12 w-12 rotate-[-18deg] opacity-20"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(48%) sepia(94%) saturate(2600%) hue-rotate(353deg) brightness(102%) contrast(98%)",
              transform: `translate(${ornamentPosition.x}px, ${ornamentPosition.y}px) rotate(-18deg)`,
            }}
          />

          <img
            src={pencilIcon}
            alt=""
            className="absolute right-[8%] top-[28%] h-14 w-14 rotate-25 opacity-20"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(48%) sepia(94%) saturate(2600%) hue-rotate(353deg) brightness(102%) contrast(98%)",
              transform: `translate(${-ornamentPosition.x}px, ${ornamentPosition.y}px) rotate(25deg)`,
            }}
          />

          <img
            src={paperPlaneIcon}
            alt=""
            className="absolute left-[10%] bottom-[28%] h-14 w-14 -rotate-12 opacity-20"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(48%) sepia(94%) saturate(2600%) hue-rotate(353deg) brightness(102%) contrast(98%)",
              transform: `translate(${ornamentPosition.x}px, ${-ornamentPosition.y}px) rotate(-12deg)`,
            }}
          />

          <img
            src={eraserIcon}
            alt=""
            className="absolute right-[10%] bottom-[14%] h-12 w-12 rotate-18 opacity-20"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(48%) sepia(94%) saturate(2600%) hue-rotate(353deg) brightness(102%) contrast(98%)",
              transform: `translate(${-ornamentPosition.x}px, ${-ornamentPosition.y}px) rotate(18deg)`,
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-36 pt-20 md:px-16 md:pb-48 md:pt-28">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-[#fc731f] uppercase font-sans">
              About Me
            </h2>
          </div>

          <div className="about-card mx-auto max-w-4xl">
            <div
              ref={cardRef}
              onMouseMove={handleCardMove}
              onMouseLeave={resetCardTilt}
              className="about-card-content group grid overflow-hidden rounded-2xl md:rounded-3xl border border-[#dedbd4] bg-[#f5f4f1] transition-colors duration-300 hover:border-[#fc731f] md:grid-cols-[0.75fr_1.25fr]"
              style={{
                transform: `perspective(1200px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg) translateY(${cardTilt.x || cardTilt.y ? -6 : 0}px)`,
              }}
            >
              <div className="relative min-h-64 sm:min-h-72 md:min-h-0 overflow-hidden bg-[#333333]">
                <img
                  src={picProfile}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-700 ease-out md:group-hover:scale-105"
                  alt="Ilham Cahyo Saputro Wibowo"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#333333]/60 to-transparent"></div>
              </div>

              <div className="flex flex-col justify-between p-4 sm:p-6 md:p-8">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight text-[#333333]">
                    Ilham Cahyo Saputro Wibowo
                  </h2>
                  <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-sm md:text-[15px] leading-relaxed text-[#666666]">
                    A Bachelor&apos;s graduate in Informatics specializing in Big Data, Artificial Intelligence, Machine Learning, Deep Learning, and IoT. Experienced in data processing, analytics, and machine learning model development.
                  </p>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-[15px] leading-relaxed text-[#666666]">
                    Curious, detail-oriented, and driven by continuous growth. Seeking opportunities to contribute in dynamic, data-driven environments.
                  </p>
                </div>

                <div className="mt-4 sm:mt-6 border-t border-[#d8d4cc] pt-3 sm:pt-4">
                  <div className="flex items-center">
                    <a
                      href="/cv.pdf"
                      download
                      className="inline-flex shrink-0 items-center gap-1 rounded-full border-2 border-transparent bg-[#fc731f] px-3 py-1.5 text-xs font-medium text-white transition-all duration-200 hover:border-[#fc731f] hover:bg-[#f5f4f1] hover:text-[#333333]"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-20 sm:mt-24 max-w-4xl">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-[#fc731f] uppercase font-sans">
                Experience
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 pointer-events-none">
                <span className="absolute inset-0 bg-[#e4b995]"></span>
                <span
                  className="absolute left-0 top-0 w-full bg-[#fc731f] transition-[height] duration-500"
                  style={{
                    height: `${((activeJourney + 1) / journey.length) * 100}%`,
                  }}
                ></span>
              </div>

              {journey.map((item, index) => (
                <div
                  key={item.step}
                  ref={(element) => {
                    journeyRefs.current[index] = element;
                  }}
                  className={`relative md:grid md:grid-cols-2 md:gap-16 transition-opacity duration-500 ${index === journey.length - 1 ? "pb-0" : "pb-9 md:pb-10"
                    } ${index === activeJourney ? "opacity-100" : "opacity-55"}`}
                >
                  <div className="absolute left-4 md:left-1/2 top-1.5 -translate-x-1/2 flex items-center justify-center pointer-events-none z-10">
                    <span
                      className={`relative flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full border-[2.5px] sm:border-3 border-white bg-[#fc731f] transition-all duration-300 pointer-events-auto ${index === activeJourney
                        ? "timeline-dot-active opacity-100"
                        : "scale-90 opacity-60 hover:opacity-100 hover:scale-100"
                        }`}
                    >
                      {index === activeJourney && (
                        <span className="timeline-radar"></span>
                      )}
                    </span>
                  </div>

                  <div
                    className={`pl-10 md:pl-0 relative ${index % 2 === 0
                      ? "md:col-start-2"
                      : "md:col-start-1 md:row-start-1 md:text-right"
                      }`}
                  >
                    <p className="text-xs sm:text-sm font-semibold tracking-[0.16em] text-[#fc731f]">
                      {item.step}
                    </p>
                    <h3 className="mt-0.5 sm:mt-1 text-lg sm:text-xl font-semibold text-[#333333]">
                      {item.title}
                    </h3>
                    {item.organization && (
                      <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-medium text-[#555555]">
                        {item.organization}{" "}
                        <span className="text-[#fc731f]">/</span> {item.period}
                      </p>
                    )}
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base leading-relaxed text-[#666666] md:ml-auto">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Certification />
        </div>
      </div>

      <div className="relative z-10 -mt-px w-full overflow-hidden leading-0">
        <img
          src={paperTornBorder}
          alt=""
          className="block w-full brightness-0 invert h-auto rotate-180"
        />
      </div>
    </section>
  );
};

export default About;
