"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function PortfolioMotion({ children }) {
  const main = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      for (const item of main.current.querySelectorAll("[data-reveal]")) {
        gsap.fromTo(item, { y: 16, opacity: 0.82 }, {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power2.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: item, start: "top 94%", once: true },
        });
      }

      for (const marker of main.current.querySelectorAll(".section-number")) {
        gsap.to(marker, {
          y: -48,
          ease: "none",
          scrollTrigger: { trigger: marker.parentElement, start: "top bottom", end: "bottom top", scrub: 1 },
        });
      }
    }, main);

    return () => media.revert();
  }, []);

  return <main id="main-content" ref={main} tabIndex={-1}>{children}</main>;
}
