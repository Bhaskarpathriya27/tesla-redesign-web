"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollFadeSection({ children }) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null); // <-- store trigger instance

  useEffect(() => {
    const el = sectionRef.current;

    triggerRef.current = ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: "+=100%",
      pin: true,
      anticipatePin: 1,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(el, {
          opacity: 1 - progress,
          scale: 1 - progress * 0.2,
          transformOrigin: "center top",
          overwrite: true,
        });
      },
    });

    return () => {
      // ✅ Proper cleanup
      triggerRef.current && triggerRef.current.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen flex items-center justify-center bg-white text-black font-bold text-5xl"
    >
      {children}
    </section>
  );
}
