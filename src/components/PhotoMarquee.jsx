import noiseTexture from "@assets/images/texture/noise-texture.png";

const kenangkenanganImages = Object.values(
  import.meta.glob(
    "../../assets/images/bg-kenangkenangan/*.{jpg,jpeg,png,webp}",
    { eager: true, query: "?url", import: "default" }
  )
);

const pencapaianImages = Object.values(
  import.meta.glob(
    "../../assets/images/bg-pencapaian/*.{jpg,jpeg,png,webp}",
    { eager: true, query: "?url", import: "default" }
  )
);

const allPhotos = [...pencapaianImages, ...kenangkenanganImages];

const rotations = [-3, 2.5, -4, 3, -1.5, 3.5, -2.5, 4, -3.5, 2, -2, 3];

const PhotoMarquee = () => {
  const marqueePhotos = [...allPhotos, ...allPhotos];

  return (
    <section id="memories" className="texture-paper relative z-10 w-full bg-[#f5f4f1] pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden select-none">
      <div className="text-center mb-6 md:mb-8 px-4">
        <p className="text-sm md:text-base font-medium text-[#6b6b6b]">
          Every memory I make
        </p>
      </div>

      <div className="relative w-full overflow-hidden marquee-mask py-4">
        <div className="flex animate-marquee-infinite gap-5 sm:gap-7 md:gap-8 items-center">
          {marqueePhotos.map((photo, index) => {
            const rot = rotations[index % rotations.length];
            return (
              <div
                key={index}
                className="group relative shrink-0 transition-all duration-300 ease-out"
                style={{
                  transform: `rotate(${rot}deg)`,
                }}
              >
                <div
                  className="relative p-2.5 pb-7 sm:p-3 sm:pb-9 md:p-3.5 md:pb-11 bg-white rounded-xl border border-[#dedbd4] shadow-[0_6px_20px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:rotate-0 group-hover:scale-105 group-hover:border-[#fc731f] group-hover:shadow-[0_16px_36px_rgba(252,115,31,0.15)]"
                >
                  <div
                    className="pointer-events-none absolute inset-0 z-10 opacity-70 mix-blend-multiply rounded-xl"
                    style={{
                      backgroundImage: `url(${noiseTexture})`,
                      backgroundSize: "cover",
                      filter: "blur(0.2px)",
                    }}
                  />

                  <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 overflow-hidden rounded-lg bg-[#e8e4dc]">
                    <img
                      src={photo}
                      alt={`Moment ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PhotoMarquee;
