"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const gradients = [
  "linear-gradient(to bottom right, #06b6d4, #10b981)",
  "linear-gradient(to bottom right, #ec4899, #6366f1)",
  "linear-gradient(to bottom right, #f97316, #eab308)",
  "linear-gradient(to bottom right, #00FFAB, #0ea5e9)",
];

export const StickyScroll = ({ content, contentClassName }) => {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalCards = content.length;
      const sectionWidth = totalCards * 100; // 100% per card
      const scrollLength = totalCards * 100; // 100vh per card

      gsap.to(trackRef.current, {
        xPercent: -((totalCards - 1) * 100),
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: () => `+=${scrollLength}vh`,
          pin: true,
          scrub: 1.2, // slower scroll
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, [content]);

  return (
    <section
      ref={wrapperRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#0f172a] text-white py-20"
    >
      <div
        ref={trackRef}
        className="flex w-fit h-full items-center gap-16 px-10"
      >
        {content.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[80vw] max-w-[500px] flex flex-col items-center text-center"
          >
            <div
              style={{ background: gradients[i % gradients.length] }}
              className={`w-full h-[300px] rounded-xl shadow-xl mb-8 flex items-center justify-center text-lg font-bold ${contentClassName}`}
            >
              {item.content}
            </div>
            <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
            <p className="text-white/80 text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
