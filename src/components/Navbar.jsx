import { useState, useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logoIcon from "@assets/images/logo/logo.ico";
import MusicPlayer from "./MusicPlayer";
import { useMusic } from "@/hooks/useMusic";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isPlaying } = useMusic();
  const lastScrollY = useRef(0);

  const menu = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
  ];

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsOpen(false);
      }

      const aboutSection = document.getElementById("about");
      const projectsSection = document.getElementById("projects");

      const scrollPos = currentScrollY + 250;

      if (projectsSection && scrollPos >= projectsSection.offsetTop) {
        setActive("projects");
      } else if (aboutSection && scrollPos >= aboutSection.offsetTop) {
        setActive("about");
      } else {
        setActive("home");
      }

      if (isOpen && Math.abs(currentScrollY - lastScrollY.current) > 25) {
        setIsOpen(false);
      }

      lastScrollY.current = currentScrollY;
      rafId = null;
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(handleScroll);
      }
    };

    handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isOpen]);

  const handleLinkClick = (id) => {
    setActive(id);
    setIsOpen(false);
    if (id === "home") {
      scroll.scrollToTop({ duration: 500, smooth: "easeInOutQuart" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isCollapsed = isScrolled && !isOpen;

  return (
    <>
      <div
        className={`fixed top-6 left-6 md:left-10 z-50 transition-all duration-500 ease-out ${
          isCollapsed
            ? "opacity-100 scale-100 pointer-events-auto translate-x-0"
            : "opacity-0 scale-50 pointer-events-none -translate-x-4"
        }`}
      >
        <div className="relative flex items-center justify-center">
          {isCollapsed && isPlaying && (
            <>
              <span className="navbar-radar-ring" />
              <span className="navbar-radar-ring navbar-radar-ring-delayed" />
            </>
          )}

          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Navigation Menu"
            className={`cursor-pointer relative z-10 flex h-9 w-9 md:h-10 md:w-10 items-center justify-center bg-transparent border-0 outline-none transition-transform duration-300 hover:scale-120 active:scale-95 group p-0.5 ${
              isPlaying ? "animate-pulse" : ""
            }`}
          >
            <img
              src={logoIcon}
              alt="Logo"
              className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 ${
                isPlaying
                  ? "drop-shadow-[0_0_12px_rgba(252,115,31,0.85)] scale-105"
                  : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out flex items-center gap-2.5 sm:gap-3 ${
          !isCollapsed
            ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
            : "opacity-0 scale-90 pointer-events-none -translate-y-4"
        }`}
      >
        <nav
          className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full 
          bg-[#f5f4f1]
          border border-black/10
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          transition-all duration-500 flex items-center gap-1 md:gap-2
          ${isScrolled ? "border-[#fc731f]/50 shadow-[0_0_25px_rgba(252,115,31,0.25)]" : ""}`}
        >
          <ul className="flex items-center gap-1 md:gap-2 text-sm font-medium text-[#6b6b6b] whitespace-nowrap">
            {menu.map((item) => (
              <li key={item.id}>
                {item.id === "home" ? (
                  <button
                    onClick={() => handleLinkClick("home")}
                    className={`cursor-pointer inline-flex items-center justify-center
                    px-5 py-1.5 md:px-7 md:py-2 rounded-full transition-all duration-200
                    ${
                      active === "home"
                        ? "text-[#fc731f] font-semibold"
                        : "text-[#6b6b6b] hover:text-[#fc731f]"
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={item.id === "about" ? 140 : item.id === "projects" ? 60 : 0}
                    onClick={() => handleLinkClick(item.id)}
                    className={`cursor-pointer inline-flex items-center justify-center
                    px-5 py-1.5 md:px-7 md:py-2 rounded-full transition-all duration-200
                    ${
                      active === item.id
                        ? "text-[#fc731f] font-semibold"
                        : "text-[#6b6b6b] hover:text-[#fc731f]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <MusicPlayer />
      </div>
    </>
  );
};

export default Navbar;
