"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

// lives for the lifetime of this JS bundle
let hasPlayed = false;

export function useRevealer() {
  useGSAP(() => {
    // if animation already played in this session, just hide the overlay
    if (hasPlayed) {
      gsap.set(".revealer", { scaleY: 0 });
      return;
    }

    // mark as played for the rest of this SPA session
    hasPlayed = true;

    const counter = { value: 0 };
    const tl = gsap.timeline({ delay: 0.3 });

    // 1) counter 0 -> 100
    tl.to(counter, {
      value: 100,
      duration: 4,
      ease: "hop",
      onUpdate: () => {
        const el = document.querySelector(".reveal-percentage");
        if (el) el.textContent = `${Math.round(counter.value)}%`;
      },
    });

    // 2) then reveal
    tl.to(".revealer", {
      scaleY: 0,
      duration: 0.9,
      ease: "hop",
      transformOrigin: "top",
    });

    return () => tl.kill();
  }, []);
}
