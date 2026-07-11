"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type CarouselProps = {
  images: string[];
  title: string;
  labels: { prev: string; next: string; goTo: string };
};

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {direction === "left" ? <path d="m15 5-7 7 7 7" /> : <path d="m9 5 7 7-7 7" />}
    </svg>
  );
}

/**
 * Cross-fading photo carousel: auto-advances every 5s (paused on hover and
 * under prefers-reduced-motion), with arrows and dots. Each photo keeps its
 * own aspect ratio (object-contain) over a blurred backdrop of itself.
 */
export function Carousel({ images, title, labels }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [paused, images.length]);

  const goTo = (i: number) => setIndex((i + images.length) % images.length);

  if (images.length === 1) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={images[0]}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className="group/carousel relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <div
          key={src}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-700 ease-out motion-reduce:transition-none ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          {/* Blurred self-backdrop so portrait/landscape photos fill the frame */}
          <Image
            src={src}
            alt=""
            aria-hidden
            fill
            sizes="64px"
            className="scale-110 object-cover opacity-50 blur-2xl"
          />
          <Image
            src={src}
            alt={`${title} — ${i + 1}/${images.length}`}
            fill
            sizes="(max-width: 640px) 100vw, 600px"
            className="object-contain"
          />
        </div>
      ))}

      <button
        type="button"
        aria-label={labels.prev}
        onClick={() => goTo(index - 1)}
        className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition-opacity hover:bg-black/60 sm:opacity-0 sm:group-hover/carousel:opacity-100 sm:focus-visible:opacity-100"
      >
        <Chevron direction="left" />
      </button>
      <button
        type="button"
        aria-label={labels.next}
        onClick={() => goTo(index + 1)}
        className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition-opacity hover:bg-black/60 sm:opacity-0 sm:group-hover/carousel:opacity-100 sm:focus-visible:opacity-100"
      >
        <Chevron direction="right" />
      </button>

      <div className="absolute inset-x-0 bottom-2 z-10 flex justify-center gap-1.5">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`${labels.goTo} ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-4 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
