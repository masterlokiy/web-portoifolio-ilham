import { useState, useRef, useEffect } from "react";
import projects from "@/data/projects";
import { FiSearch, FiX } from "react-icons/fi";
import noiseTexture from "@assets/images/texture/noise-texture.png";
import filterIcon from "@assets/images/icons/filter-edit-svgrepo-com.svg";

const INITIAL_COUNT = 6;

const ProjectCardItem = ({ project, isOdd, isFlipped, onToggleFlip }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasScroll, setHasScroll] = useState(false);
  const scrollRef = useRef(null);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll > 6) {
      setHasScroll(true);
      setScrollProgress(Math.min(1, Math.max(0, scrollTop / maxScroll)));
    } else {
      setHasScroll(false);
    }
  };

  useEffect(() => {
    if (isFlipped) {
      const timer = setTimeout(checkScroll, 120);
      return () => clearTimeout(timer);
    }
  }, [isFlipped]);

  const handleLinkClick = (e) => {
    e.stopPropagation();
    if (project.link && project.link !== "#") {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="perspective-1000 w-full h-[400px] sm:h-[420px] md:h-[435px]">
      <div
        onClick={onToggleFlip}
        className={`relative w-full h-full transform-style-3d transition-transform duration-700 ease-out cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div
          className={`backface-hidden absolute inset-0 w-full h-full polaroid-card p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden group select-none transition-all duration-300 hover:-translate-y-2 hover:border-[#fc731f] ${
            isOdd ? "rotate-[-0.6deg] hover:rotate-0" : "rotate-[0.6deg] hover:rotate-0"
          } ${isFlipped ? "pointer-events-none select-none invisible" : "pointer-events-auto visible"}`}
        >
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-30 mix-blend-multiply"
            style={{
              backgroundImage: `url(${noiseTexture})`,
              backgroundSize: "cover",
              filter: "blur(0.2px)",
            }}
          />

          <div className="relative z-20 w-full h-[235px] sm:h-[250px] polaroid-photo-frame flex items-center justify-center">
            {project.image ? (
              <>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
              </>
            ) : (
              <div className="relative w-full h-full bg-gradient-to-br from-[#242424] via-[#1a1a1a] to-[#202020] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fc731f_1px,transparent_1px)] [background-size:16px_16px]" />
                <h4 className="relative z-10 text-lg sm:text-xl font-bold text-white tracking-tight line-clamp-2 px-2">
                  {project.title}
                </h4>
              </div>
            )}

            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20 pointer-events-none" />
          </div>

          <div className="relative z-20 pt-3 pb-1 px-1 flex flex-col justify-between flex-1">
            <div>
              <span className="text-[11px] font-bold tracking-wider text-[#fc731f] uppercase block mb-1">
                {project.year}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#1e1e1e] tracking-tight leading-snug line-clamp-1 font-sans">
                {project.title}
              </h3>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#777777] pt-2 border-t border-[#f0ede6]">
              <span className="truncate max-w-[170px] text-[#555555] font-medium">
                {project.tools?.[0] ? `${project.tools.slice(0, 2).join(" • ")}` : "Explore Project"}
              </span>
            </div>
          </div>
        </div>

        <div
          onMouseEnter={checkScroll}
          onWheel={(e) => e.stopPropagation()}
          className={`backface-hidden rotate-y-180 absolute inset-0 w-full h-full polaroid-back p-5 sm:p-6 flex flex-col justify-between overflow-hidden text-left transition-all duration-300 hover:border-[#fc731f] ${
            isFlipped ? "pointer-events-auto visible" : "pointer-events-none select-none invisible"
          }`}
        >
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-30 mix-blend-multiply"
            style={{
              backgroundImage: `url(${noiseTexture})`,
              backgroundSize: "cover",
              filter: "blur(0.2px)",
            }}
          />

          <div className="relative z-30 flex items-center justify-between border-b border-[#f0ede6] pb-3 mb-2">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#444444] uppercase font-bold px-2 py-0.5 bg-[#f4f2eb] border border-[#e2ded5] rounded-sm">
                NO. {project.id}
              </span>
            </div>

            {project.link && project.link !== "#" && (
              <button
                type="button"
                onClick={handleLinkClick}
                className="cursor-pointer flex h-7 w-7 items-center justify-center rounded-full bg-[#f4f2eb] hover:bg-[#fc731f] text-[#444444] hover:text-white border border-[#e2ded5] transition-colors shadow-xs"
                aria-label="Open Project Link"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            onWheel={(e) => e.stopPropagation()}
            className="relative z-20 flex-1 overflow-y-auto no-scrollbar pr-2 overscroll-contain"
          >
            <h3 className="text-base sm:text-lg font-bold text-[#1e1e1e] leading-snug tracking-tight mb-2">
              {project.title}
            </h3>

            <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed mb-3">
              {project.description}
            </p>

            {project.details && project.details.length > 0 && (
              <div className="space-y-1.5 mb-3 text-xs text-[#666666]">
                {project.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#fc731f] font-bold shrink-0 mt-0.5">—</span>
                    <span className="leading-snug">{detail}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative z-20 pt-2 border-t border-[#f0ede6] text-[11px] text-[#777777] flex items-center justify-between">
            <span className="truncate max-w-[180px]">{project.category}</span>
          </div>

          {hasScroll && (
            <div className="absolute right-2 top-16 bottom-16 w-0.5 rounded-full pointer-events-none z-30 bg-[#e2ded5]/60">
              <div
                className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#fc731f] transition-all duration-75"
                style={{
                  top: `calc(${scrollProgress * 100}% - ${scrollProgress * 8}px)`,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "data", label: "Data / AI" },
  { id: "web", label: "Web" },
  { id: "design", label: "Design" },
  { id: "game", label: "Game Dev" },
  { id: "desktop", label: "Desktop" },
];

const Project = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    const el = headerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "all" ||
      (project.tags && project.tags.includes(activeCategory));

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      (project.tools && project.tools.some((t) => t.toLowerCase().includes(query))) ||
      project.year.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_COUNT);
  const hasMore = filteredProjects.length > INITIAL_COUNT;

  return (
    <section id="projects" className="relative z-10 w-full bg-[#f5f4f1] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-12">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-[#333333]">
            Things I've Been{" "}
            <span className="relative inline-block px-3.5 sm:px-4 py-0.5">
              Exploring
              <svg
                className="absolute -inset-x-3.5 -inset-y-2.5 w-[calc(100%+28px)] h-[calc(100%+20px)] pointer-events-none"
                viewBox="0 0 240 80"
                preserveAspectRatio="none"
              >
                <path
                  d="M15 22 
     C15 4, 225 6, 225 40 
     C225 90, 15 76, 15 40 
     C15 12, 90 10, 230 18"
                  stroke="#fc731f"
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    strokeDasharray: 850,
                    strokeDashoffset: isHeaderVisible ? 0 : 850,
                    transition: "stroke-dashoffset 1.3s cubic-bezier(0.65, 0, 0.35, 1)",
                  }}
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 md:mt-8 text-[#6b6b6b] max-w-md mx-auto leading-relaxed">
            Some things I’ve learned, built, and played around with along the way.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-10 md:mb-12">
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999] pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowAll(false);
                }}
                placeholder="Search projects, keywords..."
                className="w-full pl-11 pr-10 py-3 rounded-full bg-white border border-[#dedbd4] text-sm text-[#333333] placeholder-[#999999] focus:outline-none focus:border-[#fc731f] shadow-xs transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="cursor-pointer absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#edeae2] text-[#666] flex items-center justify-center hover:bg-[#fc731f] hover:text-white transition-colors"
                >
                  <FiX className="w-3 h-3" />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                if (isFilterOpen) {
                  setIsFilterOpen(false);
                  setActiveCategory("all");
                  setShowAll(false);
                } else {
                  setIsFilterOpen(true);
                }
              }}
              className={`group cursor-pointer flex items-center justify-center h-11 w-11 shrink-0 rounded-full border transition-all duration-200 select-none shadow-xs relative ${
                isFilterOpen || activeCategory !== "all"
                  ? "bg-[#fc731f] border-[#fc731f] text-white"
                  : "bg-white border-[#dedbd4] text-[#444444] hover:border-[#fc731f]"
              }`}
              aria-label={isFilterOpen ? "Close filter" : "Open filter"}
            >
              <span
                className={`w-5 h-5 inline-block transition-colors ${
                  isFilterOpen || activeCategory !== "all"
                    ? "bg-white"
                    : "bg-[#666666] group-hover:bg-[#fc731f]"
                }`}
                style={{
                  maskImage: `url(${filterIcon})`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskImage: `url(${filterIcon})`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                }}
              />
              {activeCategory !== "all" && (
                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-white ring-2 ring-[#fc731f] animate-pulse" />
              )}
            </button>
          </div>

          {isFilterOpen && (
            <div className="mt-4 md:mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory((prev) => (prev === cat.id && cat.id !== "all" ? "all" : cat.id));
                      setShowAll(false);
                    }}
                    className={`cursor-pointer inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold border transition-colors select-none shadow-xs ${
                      isActive
                        ? "bg-[#fc731f] border-[#fc731f] text-white"
                        : "bg-white border-[#dedbd4] text-[#555555] hover:border-[#fc731f] hover:text-[#fc731f] hover:bg-[#fc731f]/5"
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {visibleProjects.map((project, index) => {
            const cardId = project.id || String(index);
            return (
              <div
                key={cardId}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] max-w-[380px] sm:max-w-none"
              >
                <ProjectCardItem
                  project={project}
                  isOdd={index % 2 === 0}
                  isFlipped={Boolean(flippedCards[cardId])}
                  onToggleFlip={() => toggleFlip(cardId)}
                />
              </div>
            );
          })}
        </div>

        {visibleProjects.length === 0 && (
          <div className="py-16 text-center text-[#777777]">
            <p className="text-base font-medium mb-3">No projects match your search or filter criteria.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="cursor-pointer inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#dedbd4] bg-white text-[#444444] text-xs font-semibold shadow-xs hover:border-[#fc731f] hover:text-[#fc731f] transition-colors"
            >
              Reset Search & Filter
            </button>
          </div>
        )}

        {hasMore && (
          <div className="mt-12 md:mt-16 text-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="cursor-pointer inline-flex items-center justify-center px-8 py-3 rounded-full bg-white border border-[#dedbd4] text-xs md:text-sm font-semibold text-[#444444] shadow-xs hover:border-[#fc731f] hover:text-[#fc731f] hover:bg-[#fc731f]/5 transition-colors select-none"
            >
              {showAll ? "Show less" : "Show more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;