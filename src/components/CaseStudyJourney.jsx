"use client";

import { useState } from "react";
import Image from "next/image";
import ImageViewer from "@/components/ImageViewer";

const DESKTOP = { width: 2880, height: 1800 };
const MOBILE = { width: 780, height: 1688, viewerWidth: 390 };

// These screenshots have ready-made thumbnails beside them, so they skip the
// image optimizer, which can hang on very dark images when creating AVIF files.
const thumbOf = (src) => src.replace(/\.webp$/, "-thumb.webp");

/* Real screenshots of a live project. Every one opens in the image viewer. */
export default function CaseStudyJourney({ title, journey = [], mobile = [] }) {
  const [index, setIndex] = useState(null);

  const images = [
    ...journey.map((step) => ({
      ...DESKTOP,
      src: step.src,
      alt: step.alt,
      title: step.title,
      description: step.detail,
    })),
    ...mobile.map((shot) => ({
      ...MOBILE,
      src: shot.src,
      alt: `${title}, ${shot.title}. ${shot.description}`,
      title: shot.title,
      description: shot.description,
    })),
  ];

  return (
    <>
      <ol className="space-y-8">
        {journey.map((step, stepIndex) => (
          <li
            key={step.title}
            className="grid sm:grid-cols-2 gap-4 sm:gap-6 items-center"
          >
            <button
              type="button"
              onClick={() => setIndex(stepIndex)}
              aria-label={`View ${step.title} full size`}
              className="group relative block w-full aspect-16/10 overflow-hidden rounded-xl border border-dark-elevated hover:border-accent-cyan/60 cursor-zoom-in transition-colors duration-300"
            >
              <Image
                src={thumbOf(step.src)}
                alt={step.alt}
                fill
                unoptimized
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
              />
            </button>
            <div>
              <h3 className="text-base font-bold font-outfit text-txt-primary mb-2">
                <span className="font-mono text-accent-cyan mr-2">
                  {stepIndex + 1}
                </span>
                {step.title}
              </h3>
              <p className="text-sm text-txt-secondary leading-relaxed">
                {step.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {mobile.length > 0 && (
        <div className="mt-10">
          <h3 className="text-base font-bold font-outfit text-txt-primary mb-4">
            On a phone
          </h3>
          <ul className="grid grid-cols-3 gap-3 sm:gap-5">
            {mobile.map((shot, shotIndex) => (
              <li key={shot.title}>
                <button
                  type="button"
                  onClick={() => setIndex(journey.length + shotIndex)}
                  aria-label={`View ${shot.title} full size`}
                  className="group relative block w-full aspect-3/5 overflow-hidden rounded-xl border border-dark-elevated hover:border-accent-cyan/60 cursor-zoom-in transition-colors duration-300"
                >
                  <Image
                    src={thumbOf(shot.src)}
                    alt={`${title}, ${shot.title}`}
                    fill
                    unoptimized
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </button>
                <p className="mt-2 text-xs sm:text-sm text-txt-secondary">
                  {shot.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {index !== null && (
        <ImageViewer
          title={title}
          images={images}
          index={index}
          baseWidth={1100}
          onIndexChange={setIndex}
          onClose={() => setIndex(null)}
        />
      )}
    </>
  );
}
