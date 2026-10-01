import { useState, useEffect, useRef } from "react";

/**
 * Preload and decode an image into GPU/browser memory.
 * Uses img.decode() so the CPU doesn't stall during scrolling later.
 */
function preloadImage(src) {
  return new Promise((resolve) => {
    if (!src) return resolve();
    const img = new Image();
    img.src = src;

    let done = false;
    const finish = () => {
      if (!done) {
        done = true;
        resolve();
      }
    };

    if (img.complete) {
      if (img.decode) {
        img.decode().then(finish).catch(finish);
      } else {
        finish();
      }
    } else {
      img.onload = () => {
        if (img.decode) {
          img.decode().then(finish).catch(finish);
        } else {
          finish();
        }
      };
      img.onerror = finish;
      setTimeout(finish, 4500);
    }
  });
}

/**
 * Preload a video until buffered enough for instant playback.
 */
function preloadVideo(src) {
  return new Promise((resolve) => {
    if (!src) return resolve();
    const video = document.createElement("video");
    video.src = src;
    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;

    let done = false;
    const finish = () => {
      if (!done) {
        done = true;
        resolve();
      }
    };

    video.addEventListener("canplaythrough", finish, { once: true });
    video.addEventListener("canplay", finish, { once: true });
    video.addEventListener("loadeddata", finish, { once: true });
    video.addEventListener("error", finish, { once: true });
    setTimeout(finish, 5000);
    video.load();
  });
}

/**
 * Easing function for organic, luxurious acceleration and deceleration
 */
function easeInOutCubic(x) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

/**
 * Hook to manage real asset preloading with silky-smooth progress animation.
 */
export function useAssetPreloader({ images = [], videos = [], minDuration = 2600 } = {}) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const realProgressRef = useRef(0);
  const startTimeRef = useRef(performance.now());

  useEffect(() => {
    startTimeRef.current = performance.now();
    const totalItems = Math.max(1, images.length + videos.length + 1); // +1 for fonts
    let loadedCount = 0;

    const increment = () => {
      loadedCount++;
      realProgressRef.current = Math.min(100, (loadedCount / totalItems) * 100);
    };

    // 1. Font readiness
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(increment).catch(increment);
    } else {
      increment();
    }

    // 2. Preload & decode all images in parallel
    images.forEach((src) => {
      preloadImage(src).then(increment);
    });

    // 3. Preload all videos
    videos.forEach((src) => {
      preloadVideo(src).then(increment);
    });

    // Ultra-smooth RAF animation loop with continuous float interpolation (sub-pixel)
    let rafId = null;
    let currentDisplay = 0;

    const loop = (now) => {
      const elapsed = now - startTimeRef.current;
      const timeRatio = Math.min(1, elapsed / minDuration);
      const easedTime = easeInOutCubic(timeRatio) * 100;

      // Target progress is governed by the smooth easing curve, capped by real assets loaded
      let target = Math.min(easedTime, realProgressRef.current);

      // Once all assets are ready and minDuration has passed, head straight to 100
      if (realProgressRef.current >= 100 && timeRatio >= 1) {
        target = 100;
      }

      // Smooth exponential dampening (physical lerp filter)
      // Removes any sudden jump when multiple assets resolve at once
      const diff = target - currentDisplay;
      if (diff > 0.02) {
        currentDisplay += diff * 0.085;
      } else if (target >= 100) {
        currentDisplay = 100;
      }

      const clamped = Math.min(100, Math.max(0, currentDisplay));
      setProgress(clamped);

      if (clamped >= 99.8 && realProgressRef.current >= 100 && timeRatio >= 1) {
        setProgress(100);
        setIsReady(true);
      } else {
        rafId = requestAnimationFrame(loop);
      }
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [images, videos, minDuration]);

  return { progress, isReady };
}

export default useAssetPreloader;
