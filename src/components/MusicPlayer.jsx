import React from "react";
import { RiMusic2Line, RiMusic2Fill } from "react-icons/ri";
import { useMusic } from "@/hooks/useMusic";

const MusicPlayer = () => {
  const { isPlaying, togglePlay } = useMusic();

  return (
    <div className="relative flex items-center justify-center">
      {isPlaying && (
        <>
          <span className="navbar-radar-ring" />
          <span className="navbar-radar-ring navbar-radar-ring-delayed" />
        </>
      )}

      <button
        onClick={togglePlay}
        type="button"
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
        className={`cursor-pointer group relative z-10 flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full transition-all duration-300 select-none shadow-[0_8px_25px_rgba(0,0,0,0.08)] backdrop-blur-md active:scale-95 hover:scale-110 ${
          isPlaying
            ? "bg-[#fc731f] text-white border-2 border-white shadow-[0_4px_20px_rgba(252,115,31,0.45)] music-playing-pulse"
            : "bg-[#f5f4f1]/90 hover:bg-white text-[#555555] hover:text-[#fc731f] border border-black/10 hover:border-[#fc731f]"
        }`}
      >
        {isPlaying ? (
          <div className="flex items-center justify-center relative">
            <RiMusic2Fill className="w-5 h-5 animate-pulse text-white drop-shadow-xs" />
          </div>
        ) : (
          <RiMusic2Line className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
