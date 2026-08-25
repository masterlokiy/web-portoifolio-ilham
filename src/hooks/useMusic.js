import { useState, useEffect } from "react";
import homeMusic from "@assets/music/Dayglow - Close to You (Official Video).mp3";

export const DEFAULT_TRACKS = [
  {
    id: "music-1",
    title: "Dayglow - Close to You",
    artist: "Dayglow",
    src: homeMusic || "/assets/music/Dayglow - Close to You (Official Video).mp3",
    startTime: 48,
  },
];

let globalAudio = null;
let currentTrackSrc = null;
const globalListeners = new Set();
const audioState = {
  isPlaying: false,
  isMuted: false,
  volume: 0.5,
  trackIndex: 0,
};

const notifyListeners = () => {
  globalListeners.forEach((fn) => fn({ ...audioState }));
};

const initAudio = () => {
  if (typeof window === "undefined") return null;

  if (!globalAudio) {
    const track = DEFAULT_TRACKS[audioState.trackIndex];
    currentTrackSrc = track.src;
    globalAudio = new Audio(track.src);
    globalAudio.loop = true;
    globalAudio.volume = audioState.isMuted ? 0 : audioState.volume;
    globalAudio.preload = "auto";

    const setInitialTime = () => {
      if (track?.startTime && globalAudio.currentTime < track.startTime) {
        globalAudio.currentTime = track.startTime;
      }
    };

    globalAudio.addEventListener("loadedmetadata", setInitialTime, { once: true });
    globalAudio.addEventListener("canplay", setInitialTime, { once: true });

    globalAudio.onplay = () => {
      audioState.isPlaying = true;
      notifyListeners();
    };

    globalAudio.onpause = () => {
      audioState.isPlaying = false;
      notifyListeners();
    };

    globalAudio.onended = () => {
      const nextIdx = (audioState.trackIndex + 1) % DEFAULT_TRACKS.length;
      audioState.trackIndex = nextIdx;
      const nextTrack = DEFAULT_TRACKS[nextIdx];
      currentTrackSrc = nextTrack.src;
      globalAudio.src = nextTrack.src;
      if (nextTrack?.startTime) {
        globalAudio.currentTime = nextTrack.startTime;
      }
      globalAudio.play().catch(() => { });
      notifyListeners();
    };

    globalAudio.onerror = (e) => {
      console.warn("Audio element error:", e);
      audioState.isPlaying = false;
      notifyListeners();
    };
  }

  return globalAudio;
};

export const useMusic = () => {
  const [state, setState] = useState(() => ({ ...audioState }));

  useEffect(() => {
    initAudio();
    const listener = (newState) => {
      setState(newState);
    };
    globalListeners.add(listener);
    return () => {
      globalListeners.delete(listener);
    };
  }, []);

  const togglePlay = () => {
    const audio = initAudio();
    if (!audio) return;

    if (audio.paused) {
      const track = DEFAULT_TRACKS[audioState.trackIndex];
      if (track?.startTime && audio.currentTime < 1) {
        audio.currentTime = track.startTime;
      }
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            audioState.isPlaying = true;
            notifyListeners();
          })
          .catch((err) => {
            console.error("Playback error:", err);
            audioState.isPlaying = false;
            notifyListeners();
          });
      }
    } else {
      audio.pause();
      audioState.isPlaying = false;
      notifyListeners();
    }
  };

  const changeTrack = (newIndex) => {
    const audio = initAudio();
    audioState.trackIndex = newIndex;
    const track = DEFAULT_TRACKS[newIndex];
    if (audio && track) {
      currentTrackSrc = track.src;
      const wasPlaying = !audio.paused;
      audio.src = track.src;
      if (track?.startTime) {
        audio.currentTime = track.startTime;
      }
      if (wasPlaying || audioState.isPlaying) {
        audio.play().catch(() => { });
      }
    }
    notifyListeners();
  };

  const nextTrack = () => {
    const nextIdx = (audioState.trackIndex + 1) % DEFAULT_TRACKS.length;
    changeTrack(nextIdx);
  };

  const prevTrack = () => {
    const prevIdx = (audioState.trackIndex - 1 + DEFAULT_TRACKS.length) % DEFAULT_TRACKS.length;
    changeTrack(prevIdx);
  };

  const toggleMute = (e) => {
    if (e) e.stopPropagation();
    const audio = initAudio();
    audioState.isMuted = !audioState.isMuted;
    if (audio) {
      audio.muted = audioState.isMuted;
      audio.volume = audioState.isMuted ? 0 : audioState.volume;
    }
    notifyListeners();
  };

  const setVolume = (val) => {
    const audio = initAudio();
    const cleanVal = Math.min(1, Math.max(0, val));
    audioState.volume = cleanVal;
    if (cleanVal > 0 && audioState.isMuted) {
      audioState.isMuted = false;
    }
    if (audio) {
      audio.muted = audioState.isMuted;
      audio.volume = audioState.isMuted ? 0 : cleanVal;
    }
    notifyListeners();
  };

  return {
    ...state,
    currentTrack: DEFAULT_TRACKS[state.trackIndex] || DEFAULT_TRACKS[0],
    togglePlay,
    nextTrack,
    prevTrack,
    toggleMute,
    setVolume,
  };
};
