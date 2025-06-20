"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const texts = [
  "Revolutionizing the automotive industry with Tesla's innovative electric vehicles and commitment to sustainability",
  "Discover the future of driving with Tesla's state-of-the-art electric vehicles and renewable energy.",
  "Driving change through clean energy and intelligent design — Tesla leads the charge.",
];

export default function TechHeroSection() {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stepHeight = 500; // % of viewport height between each
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(texts.length - 1) * stepHeight}vh`, // scroll only for next texts
          scrub: 1,
          pin: true,
        },
      });

      textRefs.current.forEach((el, i) => {
        gsap.set(el, {
          opacity: i === 0 ? 1 : 0,
          y: i === 0 ? 0 : 200,
          position: "absolute",
          top: "50%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
        });

        if (i !== 0) {
          // Out previous
          tl.to(textRefs.current[i - 1], {
            y: -150,
            opacity: 0,
            duration: 2.2,
            ease: "expo.out",
          });

          // In next from bottom
          tl.to(el, {
            opacity: 1,
            y: 0,
            duration: 2.2,
            ease: "expo.out",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-screen h-screen object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/video/landing.mp4"
        />
        {/* Overlay for visibility */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />
      </div>

      {/* Text Transitions */}
      <div className="relative z-20 w-full h-full">
        {texts.map((text, i) => (
          <div
            key={i}
            ref={(el) => (textRefs.current[i] = el)}
            className="text-white text-center text-3xl sm:text-5xl font-medium max-w-5xl mx-auto leading-snug font-serif"
          >
            {text}
          </div>
        ))}
      </div>
    </section>
  );
}
