"use client";

import { useEffect, useRef, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import Image from "next/image";
import {
  FaArrowLeft,
  FaArrowRight,
  FaMinus,
  FaPlus,
  FaTimes,
} from "react-icons/fa";

const ZOOM_LEVELS = [1, 1.5, 2, 3];

const roundButtonClass =
  "flex items-center justify-center w-11 h-11 shrink-0 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/15 disabled:opacity-35 disabled:hover:bg-white/5 transition-colors duration-200";

/* Full-screen viewer. Native <dialog> traps focus, and zooming uses native
   scrolling, so panning works the same with a mouse, trackpad or finger. */
export default function ImageViewer({
  title,
  images,
  index,
  baseWidth,
  onIndexChange,
  onClose,
}) {
  const dialogRef = useRef(null);
  const scrollRef = useRef(null);
  const touchStart = useRef(null);
  const [zoom, setZoom] = useState(1);

  const image = images[index];
  const hasMany = images.length > 1;
  const nextImage = hasMany ? images[(index + 1) % images.length] : null;
  const zoomStep = ZOOM_LEVELS.indexOf(zoom);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;

    if (!dialog.open) dialog.showModal();
    root.style.overflow = "hidden";
    // Start on the image, so the up and down keys scroll it straight away.
    scrollRef.current?.focus({ preventScroll: true });

    return () => {
      root.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, []);

  const step = (delta) => {
    if (!hasMany) return;
    setZoom(1);
    scrollRef.current?.scrollTo({ top: 0, left: 0 });
    onIndexChange((index + delta + images.length) % images.length);
  };

  // Keeps the point being looked at in place while the image changes size.
  const applyZoom = (nextZoom, focus) => {
    const el = scrollRef.current;
    const rect = el.getBoundingClientRect();
    const x = focus ? focus.x - rect.left : el.clientWidth / 2;
    const y = focus ? focus.y - rect.top : el.clientHeight / 2;
    const ratioX = (el.scrollLeft + x) / el.scrollWidth;
    const ratioY = (el.scrollTop + y) / el.scrollHeight;

    setZoom(nextZoom);
    requestAnimationFrame(() => {
      el.scrollTo({
        left: ratioX * el.scrollWidth - x,
        top: ratioY * el.scrollHeight - y,
      });
    });
  };

  const zoomIn = () => {
    if (zoomStep < ZOOM_LEVELS.length - 1) applyZoom(ZOOM_LEVELS[zoomStep + 1]);
  };
  const zoomOut = () => {
    if (zoomStep > 0) applyZoom(ZOOM_LEVELS[zoomStep - 1]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "+" || e.key === "=") zoomIn();
    if (e.key === "-") zoomOut();
    if (e.key === "0") applyZoom(1);
  };

  const handleTouchStart = (e) => {
    // Ignore pinches, and swipes while zoomed, since those pan the image.
    if (e.touches.length > 1 || zoom > 1) {
      touchStart.current = null;
      return;
    }
    const touch = e.changedTouches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStart.current.x;
    const dy = touch.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      step(dx < 0 ? 1 : -1);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label={`${title} image viewer`}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      // Some browsers can close a dialog without a cancel event.
      onClose={() => {
        if (!dialogRef.current?.open) onClose();
      }}
      onKeyDown={handleKeyDown}
      className="fixed inset-0 m-0 w-screen h-dvh max-w-none max-h-none bg-dark text-white"
    >
      <MotionConfig reducedMotion="user">
        <motion.div
          className="flex flex-col w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <header className="shrink-0 flex items-center justify-between gap-3 px-3 sm:px-6 py-2 border-b border-white/10">
            <p className="min-w-0 flex items-baseline gap-3">
              <span className="sr-only">
                Image {index + 1} of {images.length}
              </span>
              <span
                aria-hidden="true"
                className="font-mono text-sm text-accent-cyan whitespace-nowrap"
              >
                {index + 1} / {images.length}
              </span>
              <span className="hidden sm:block truncate text-sm text-txt-secondary">
                {title}
              </span>
            </p>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={zoomOut}
                disabled={zoomStep === 0}
                aria-label="Zoom out"
                className={roundButtonClass}
              >
                <FaMinus aria-hidden="true" className="text-xs" />
              </button>
              <button
                type="button"
                onClick={() => applyZoom(1)}
                aria-label={`Zoom ${Math.round(zoom * 100)} percent. Reset zoom`}
                className="min-h-11 w-13 font-mono text-xs text-txt-primary rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                {Math.round(zoom * 100)}%
              </button>
              <button
                type="button"
                onClick={zoomIn}
                disabled={zoomStep === ZOOM_LEVELS.length - 1}
                aria-label="Zoom in"
                className={roundButtonClass}
              >
                <FaPlus aria-hidden="true" className="text-xs" />
              </button>
              <span className="w-px h-6 mx-1 sm:mx-2 bg-white/15" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close viewer"
                className={roundButtonClass}
              >
                <FaTimes aria-hidden="true" />
              </button>
            </div>
          </header>

          <div
            ref={scrollRef}
            tabIndex={0}
            aria-label="Image, scrollable"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="flex-1 min-h-0 overflow-auto p-3 sm:p-6"
          >
            {/* Remounting on each image gives a short fade between them. */}
            <motion.div
              key={image.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="mx-auto"
              style={{
                width: `calc(min(100%, ${baseWidth}px) * ${zoom})`,
              }}
            >
              {/* Shown at original quality, so details stay sharp when zoomed. */}
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                unoptimized
                priority
                draggable={false}
                onDoubleClick={(e) =>
                  applyZoom(zoom === 1 ? 2 : 1, { x: e.clientX, y: e.clientY })
                }
                className={`block w-full h-auto rounded-lg bg-dark-card ${
                  zoom === 1 ? "cursor-zoom-in" : "cursor-zoom-out"
                }`}
              />
            </motion.div>
            {/* Loads the next image early so moving forward feels instant. */}
            {nextImage && (
              <Image
                key={`next-${nextImage.src}`}
                src={nextImage.src}
                alt=""
                width={nextImage.width}
                height={nextImage.height}
                unoptimized
                loading="eager"
                className="hidden"
              />
            )}
          </div>

          <footer className="shrink-0 flex items-center gap-3 px-3 sm:px-6 py-2 border-t border-white/10">
            {hasMany && (
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous image"
                className={roundButtonClass}
              >
                <FaArrowLeft aria-hidden="true" />
              </button>
            )}
            <div className="flex-1 min-w-0 text-center">
              <h2 className="text-sm sm:text-base font-bold font-outfit truncate">
                {image.title}
              </h2>
              <p className="text-xs sm:text-sm text-txt-secondary line-clamp-2">
                {image.description}
              </p>
            </div>
            {hasMany && (
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next image"
                className={roundButtonClass}
              >
                <FaArrowRight aria-hidden="true" />
              </button>
            )}
          </footer>
        </motion.div>
      </MotionConfig>
    </dialog>
  );
}
