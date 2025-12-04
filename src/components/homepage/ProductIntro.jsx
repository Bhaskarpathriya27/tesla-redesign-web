"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function ProductIntro() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(headingRef.current, { types: "words" });
    splitRef.current = split;

    const words = split.words;

    words.forEach((w) => {
      w.style.backgroundImage =
        "linear-gradient(90deg, #000000 0%, #000000 100%)";
      w.style.backgroundSize = "0% 100%";
      w.style.backgroundRepeat = "no-repeat";
      w.style.backgroundPosition = "left center";
      w.style.WebkitBackgroundClip = "text";
      w.style.backgroundClip = "text";

      w.style.color = "#b7b7b7"; // Tesla grey base
      w.style.display = "inline-block";
      w.style.whiteSpace = "nowrap";
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 30%",
        end: "top 20%",
        scrub: 1,
      },
    });

    tl.to(words, {
      backgroundSize: "100% 100%",
      color: "#000000",
      ease: "none",
      stagger: 0.5,
    });

    return () => {
      splitRevert();
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };

    function splitRevert() {
      try {
        if (splitRef.current) splitRef.current.revert();
      } catch {}
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen px-6 md:px-20 flex flex-col justify-center py-20 font-sans bg-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Tesla Tag */}
        <div className="text-sm md:text-base tracking-widest text-black/70 uppercase">
          [ ELECTRIC INTELLIGENCE ]
        </div>

        {/* Right Content */}
        <div className="space-y-10">
          {/* Animated Tesla Heading */}
          <h1
            ref={headingRef}
            className="text-[42px] md:text-[70px] leading-[0.95] font-bold text-gray-400"
          >
            Electric Intelligence,
            <br />
            Engineered for the Road
          </h1>

          {/* Tesla Philosophy */}
          <p className="text-[17px] md:text-[19px] text-gray-700 leading-[1.8] max-w-[640px]">
            Our vehicles combine high-efficiency electric architecture,
            real-time data intelligence and an always-improving software
            platform. Designed to adapt, update and elevate every drive — no
            matter where the road leads.
          </p>
        </div>
      </div>
    </section>
  );
}
