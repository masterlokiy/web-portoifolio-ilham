import certifications from "@/data/certifications";
import transparentTexture from "@assets/images/texture/Transparent-Texture.webp";

const Certification = () => {
  return (
    <div id="certifications" className="relative z-10 w-full mt-28 sm:mt-36 md:mt-40 pb-8 sm:pb-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#fc731f] uppercase font-sans">
            Licenses & Certifications
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-7 max-w-2xl mx-auto">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${cert.title} — ${cert.issuer}`}
              className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 p-2.5 sm:p-3 md:p-3.5 rounded-full bg-[#f5f4f1] border border-[#dedbd4] shadow-xs overflow-hidden select-none transition-all duration-300 hover:scale-110 hover:border-[#fc731f] hover:shadow-[0_8px_20px_rgba(252,115,31,0.18)] cursor-pointer"
            >
              <div
                className="pointer-events-none absolute inset-0 z-10 opacity-90 mix-blend-multiply rounded-full"
                style={{
                  backgroundImage: `url(${transparentTexture})`,
                  backgroundSize: "cover",
                  filter: "blur(0.3px)",
                }}
              />
              <div className="relative z-20 w-full h-full flex items-center justify-center rounded-full overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 pointer-events-none select-none"
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
