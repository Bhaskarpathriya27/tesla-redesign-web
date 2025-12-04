// app/components/NewHeroSection.jsx
"use client";

import Image from "next/image";
import React from "react";

export default function NewHeroSection() {
  // tweak these to perfectly align the background-image used for the "image-text"
  const bgPos = "50% 50%"; // center the wheel in the text background
  const bgSize = "1200px"; // adjust to match the visible wheel size

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* left small content */}
      <div className="absolute top-16 left-8 md:left-16 lg:left-24 z-30 max-w-sm md:max-w-md">
        <h3 className="font-pigarnos text-sm md:text-base uppercase tracking-widest text-gray-800">
          THE FUTURE IS SUSTAINABLE ENERGY
        </h3>
        <p className="mt-4 text-xs md:text-sm text-gray-500 leading-relaxed">
          We're building a world powered by solar energy, Running on batteries
          and transported by electric vehicles.
        </p>
      </div>

      {/* big centered hero content */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <div
          className="relative w-[min(1100px,120vw)] h-[min(1100px,90vh)]
                     max-w-[1400px] max-h-[1200px] flex items-center justify-center"
          aria-hidden="true"
        >
          {/* 1) BLACK base text (visible everywhere) */}
          <h1
            className="absolute font-pigarnos z-20 pointer-events-none select-none text-black/95 
                       text-center font-medium
                       text-[clamp(64px,9vw,140px)] md:text-[clamp(80px,5vw,180px)]
                       tracking-[0.01em]"
            style={{ textTransform: "uppercase", lineHeight: 0.95 }}
          >
            <span className="block">ONE MISSION</span>
            <span className="block mt-8 md:mt-24 font-bold">
              SUSTAINABLE ENERGY
            </span>
          </h1>

          {/* 2) IMAGE-CLIP text that shows the wheel *inside* the glyphs */}
          <h1
            aria-hidden="true"
            className="absolute font-pigarnos z-30 pointer-events-none select-none 
                       text-center font-medium
                       text-[clamp(64px,9vw,140px)] md:text-[clamp(80px,5vw,180px)]
                       tracking-[0.01em]"
            style={{
              textTransform: "uppercase",
              lineHeight: 0.95,
              backgroundImage: "url('/wheel.webp')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: bgPos,
              backgroundSize: bgSize,
              WebkitBackgroundClip: "text",
              invert: 0,
              backgroundClip: "text",
              color: "transparent",
              textShadow: "0 1px 0 rgba(0,0,0,0.02)",
            }}
          >
            <span className="block">ONE MISSION</span>
            <span className="block mt-8 md:mt-24 font-bold">
              SUSTAINABLE ENERGY
            </span>
          </h1>

          {/* The actual image: keep it centered and large. This one is visual but the
              clipped text uses the same artwork as backgroundImage to align. */}
          <div className="relative w-full h-full z-10 flex items-center justify-center">
            <div className="relative w-[70%] h-[70%] max-w-[1200px] max-h-[900px]">
              <Image
                src="/wheel.webp"
                alt="Tesla steering wheel"
                fill
                priority
                sizes="(min-width: 1400px) 1200px, (min-width: 1024px) 900px, 700px"
                className="object-contain invert"
              />
            </div>
          </div>
        </div>
      </div>

      {/* bottom stats / divider */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-4xl px-6">
        <div className="mx-auto flex items-center justify-center gap-12 text-center text-xs md:text-sm ">
          <div>
            <div className="font-bold text-lg md:text-xl">100k+</div>
            <div>Employees</div>
          </div>
          <div className="w-0.5 h-20 bg-gray-700" />
          <div>
            <div className="font-bold text-lg md:text-xl">20.4 Mmt</div>
            <div>CO₂e Avoided in 2023</div>
          </div>
        </div>
      </div>
    </section>
  );
}
