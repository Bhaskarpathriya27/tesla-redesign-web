"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TestRideBanner() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);
  const blobRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    // Scroll-driven horizontal animation
    const tl = gsap.to(textRef.current, {
      x: "-80%",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "top -150%",
        scrub: 2,
        pin: true,
      },
    });

    // Arrow bounce
    gsap.to(arrowRef.current, {
      x: 10,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });

    // Background blob pulse
    gsap.to(blobRef.current, {
      scale: 1.1,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "sine.inOut",
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#f9f9ff] flex items-center justify-start overflow-hidden"
    >
      {/* Subtle Background Motion Blob */}
      <div
        ref={blobRef}
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 blur-3xl opacity-50 z-0"
      />

      {/* Text + Animated Arrow */}
      <h1
        ref={textRef}
        className="relative z-10 ml-6 sm:ml-12 text-[40vh] font-bold whitespace-nowrap flex items-center gap-4 sm:gap-6 text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#0ea5e9] font-[Urbanist] tracking-tight"
      >
        Book Test Ride
        <ArrowRight
          ref={arrowRef}
          size={150}
          className="ml-4 sm:ml-6 text-[#0ea5e9]"
        />
      </h1>
    </section>
  );
}
