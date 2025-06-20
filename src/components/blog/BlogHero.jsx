"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BlogHero() {
  const titleRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      titleRef.current?.children,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1.2,
        ease: "power3.out",
      }
    ).fromTo(
      subRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.8"
    );
  }, []);

  return (
    <div className="mb-12">
      <h1
        ref={titleRef}
        className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight flex flex-wrap gap-x-3"
      >
        <span className="text-[#0f172a]">INSIDE</span>
        <span className="text-[#00c896]">NEO.</span>
        <span className="text-black">INNOVATION.</span>
        <span className="text-black relative inline-block">
          IMPACT.
          <span className="absolute top-0 right-2 text-yellow-400 -z-10 text-6xl font-extrabold opacity-40">
            🚀
          </span>
        </span>
      </h1>

      <p ref={subRef} className="mt-4 text-base text-gray-500 max-w-xl">
        Stay updated with launch news, sustainability breakthroughs, industry
        insights, and how we build the future of electric mobility.
      </p>
    </div>
  );
}
