import { useEffect, useState } from "react";
import video from "@assets/video/sherlockholmes.webm";
import Squiggle1 from "@assets/images/svg/Squiggle_Leave_1.svg";
import Squiggle2 from "@assets/images/svg/Squiggle_Leave_2.svg";
import noiseTexture from "@assets/images/texture/noise-texture.png";

const images1 = Object.values(
  import.meta.glob("../../assets/images/bg-pencapaian/*.{jpg,jpeg,png,webp}", {
    eager: true,
    query: "?url",
    import: "default",
  }),
);

const images2 = Object.values(
  import.meta.glob(
    "../../assets/images/bg-kenangkenangan/*.{jpg,jpeg,png,webp}",
    {
      eager: true,
      query: "?url",
      import: "default",
    },
  ),
);

const Hero = () => {
  const getRandomImage = (images) => {
    return images[Math.floor(Math.random() * images.length)];
  };

  const [currentImg1, setCurrentImg1] = useState(() => getRandomImage(images1));
  const [currentImg2, setCurrentImg2] = useState(() => getRandomImage(images2));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg1(getRandomImage(images1));
      setCurrentImg2(getRandomImage(images2));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative z-0 min-h-screen flex flex-col items-center px-6 md:px-16 pt-20 md:pt-28 overflow-visible"
    >
      <div className="relative w-full max-w-5xl mx-auto text-center will-change-transform">
        <br />
        <p className="text-sm mb-6 md:mb-10 text-[#fc731f]">Hi, i'm ilham</p>
        <h1 className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-[#333333]">
          A{" "}
          <span className="highlight-wrapper">
            <span className="highlight-fill">
              <span className="highlight-cursor">
                <span className="name-tag">Ilham</span>
              </span>
            </span>

            <span className="relative z-10 px-2 py-0.5 leading-none">
              data enthusiast
            </span>
          </span>
          you should get to know.
        </h1>

        <p className="mt-6 md:mt-8 text-[#6b6b6b] max-w-md mx-auto leading-relaxed">
          Data! Data! Data! I can't make bricks without clay
        </p>

        <div className="relative text-left">
          <div className="py-5 md:py-10 flex flex-col md:flex-row gap-4 md:gap-10 items-center justify-center max-w-6xl mx-auto">
            <div className="w-full md:flex-1 relative h-64 md:h-[56vh] min-h-64 md:min-h-0">
              <div
                className="
                  absolute inset-0 
                  bg-[#f5f4f1]/80 backdrop-blur-xl
                  rounded-3xl 
                  border border-white/30
                  shadow-[0_10px_40px_rgba(0,0,0,0.15)]
                  overflow-hidden
                "
              >
                <div
                  className="pointer-events-none absolute inset-0 z-10 opacity-70 mix-blend-multiply"
                  style={{
                    backgroundImage: `url(${noiseTexture})`,
                    backgroundSize: "cover",
                    filter: "blur(0.2px)",
                  }}
                />
              </div>

              <div
                className="
                absolute
                inset-0
                rounded-3xl
                overflow-hidden
                -rotate-6
                -translate-y-1
                shadow-2xl
                transition-all
                duration-500
                ease-out
                hover:scale-[1.02]
                hover:-translate-y-1
                hover:-rotate-3
                md:-rotate-6
              "
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="
                      w-full
                      h-full
                      object-cover
                      scale-110
                      transition-transform
                      duration-700
                      hover:scale-[1.15]
                    "
                >
                  <source src={video} type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
              </div>
              <img
                src={Squiggle2}
                alt="decor"
                className="absolute -bottom-8 -left-8 w-10 opacity-90 pointer-events-none"
              />
            </div>

            <div className="w-full md:flex-1 relative flex flex-col h-90 md:h-[56vh] min-h-90 md:min-h-0">
              <div
                className="
                  absolute inset-0 
                  bg-[#f5f4f1]/80 backdrop-blur-xl
                  rounded-2xl 
                  border border-white/30
                  shadow-[0_10px_40px_rgba(0,0,0,0.15)]
                  overflow-hidden
                "
              >
                <div
                  className="pointer-events-none absolute inset-0 z-10 opacity-70 mix-blend-multiply"
                  style={{
                    backgroundImage: `url(${noiseTexture})`,
                    backgroundSize: "cover",
                    filter: "blur(0.2px)",
                  }}
                />
              </div>

              <div className="relative z-20 p-2 rounded-2xl flex-1 overflow-hidden">
                <img
                  src={currentImg1}
                  alt="Profile"
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="relative z-20 p-2 rounded-2xl flex-1 overflow-hidden">
                <img
                  src={currentImg2}
                  alt="Profile"
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <img
                src={Squiggle1}
                alt="decor"
                className="absolute -top-7 -right-7 w-11 opacity-90 pointer-events-none z-30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
