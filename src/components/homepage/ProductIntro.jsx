"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function ProductIntro() {
  const headingRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(headingRef.current, { types: "words" });

    gsap.fromTo(
      split.words,
      { color: "#9ca3af" },
      {
        color: "#000000",
        stagger: 0.1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    return () => {
      split.revert(); // cleanup on unmount
    };
  }, []);

  return (
    <section className="w-full min-h-screen px-6 md:px-20 flex flex-col justify-center py-10 font-sans">
      {/* Top Headline */}
      <div className="w-full text-center mb-16">
        <h1
          ref={headingRef}
          className="text-[42px] md:text-[70px] leading-[1.1] font-[600] text-gray-400"
        >
          Future-ready rides,
          <br /> for today’s challenges
        </h1>
      </div>

      {/* Bottom Grid: Left Tag + Right Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="text-lg font-semibold tracking-widest text-black/80 uppercase">
          [ FUTURE READY ]
        </div>

        <div className="space-y-6 text-left">
          <h2 className="text-[28px] md:text-[4.2rem] text-justify font-normal text-gray-800 leading-snug">
            What is Neo Mobility and what
            <br /> makes us different?
          </h2>
          <p className="text-[17px] md:text-[18px] text-gray-700 leading-[1.8]">
            Neo Mobility is reimagining how cities move — blending intelligent
            EV technology, user-centric design, and deep urban insights. Born
            from the expertise of Euler Motors, we’re building the next
            generation of electric 3-wheelers with focus on performance,
            reliability, and future-ready ecosystems. From design to delivery,
            every ride is smarter, greener, and purpose-built for modern India.
          </p>
        </div>
      </div>
    </section>
  );
}
