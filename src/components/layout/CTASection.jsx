/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Marquee text animation
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });

      // ScrollTrigger pin & slide
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          gsap.to(sectionRef.current, {
            y: -self.progress * window.innerHeight,
            ease: "power2.out",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative">
        {/* === Pinned CTA Section === */}
        <section
          ref={sectionRef}
          className="absolute top-0 left-0 w-[calc(100%-2.5rem)] h-[calc(100vh-2rem)] bg-[#0D0D0D] text-white flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-20 z-20 overflow-hidden rounded-3xl m-5"
        >
          {/* Marquee Background */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div
              ref={marqueeRef}
              className="absolute whitespace-nowrap text-[15vw] font-bold opacity-10 text-white"
            >
              Ready to get started? Ready to get started? Ready to get started?
            </div>
          </div>

          {/* === Roadside Assistance Strip === */}
          <div className="relative w-full max-w-5xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-8 z-10">
            {/* Left - Roadside Assistance */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-left">
              <div className="text-sm md:text-base text-white/80">Roadside</div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                Assistance
              </div>
              <p className="text-sm text-white/60 mt-1 md:mt-0 md:ml-4">
                For roadside assistance anytime, anywhere.
              </p>
            </div>

            {/* Right - Call Us */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <div className="text-sm md:text-base text-white/80">Call Us</div>
              <div className="text-xl md:text-2xl font-bold text-white">
                180012381238
              </div>
            </div>
          </div>

          {/* === Main CTA Card === */}
          <div className="relative z-10 text-center w-full max-w-3xl rounded-2xl border border-white/20 p-8 md:p-12 bg-[#1A1A1A]/90 shadow-xl backdrop-blur-sm">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Let's Collaborate to Build the Future of Mobility
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Whether you're ready to electrify your fleet or explore
              intelligent mobility solutions — we're here to power your journey.
            </p>
          </div>

          <div className="w-40 h-1 bg-white mt-6 origin-left scale-x-100 z-10"></div>

          <div className="md:mt-8 mt-8 flex flex-row justify-center gap-4 z-10 mb-28 md:mb-0">
            <button className="group inline-flex items-center px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
              Explore
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group inline-flex items-center px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
              Enquire
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
