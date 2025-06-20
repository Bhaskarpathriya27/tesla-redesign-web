"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BatteryCharging, Zap, ShieldCheck, RefreshCcw } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function BatteryIntelligenceSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [charge, setCharge] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2000", // amount of scroll length
        scrub: true,
        pin: true,
        anticipatePin: 1,
      });

      // Scroll-based % Charge
      gsap.to(
        {},
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=2000",
            scrub: 1,
            onUpdate: (self) => {
              const progress = Math.round(self.progress * 100);
              setCharge(progress);
            },
          },
        }
      );

      // Fade content in
      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 0%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      // Animate stats staggered
      gsap.from(".bms-stat", {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-black text-white"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/video/battery.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />

      {/* Content */}
      <div
        className="relative z-20 max-w-5xl mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20 sm:py-28 md:py-32 space-y-12 h-full"
        ref={contentRef}
      >
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Battery Intelligence. Reimagined.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-xl sm:max-w-2xl mx-auto">
            Experience HiRange&#39;s intelligent battery system — engineered for
            real-time optimization, thermal control, and high-efficiency
            regenerative recovery.
          </p>
        </div>

        {/* % Charged */}
        <div className="px-6 py-4 bg-white/10 backdrop-blur-md rounded-xl text-2xl sm:text-3xl font-semibold text-green-300 shadow-xl">
          {charge}% Charged
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 gap-5 sm:gap-6 mt-8 text-white/90 text-xs sm:text-sm md:text-base">
          <div className="bms-stat flex flex-col items-center gap-2 text-center">
            <BatteryCharging className="w-6 h-6 text-green-400" />
            <span>Smart BMS</span>
          </div>
          <div className="bms-stat flex flex-col items-center gap-2 text-center">
            <Zap className="w-6 h-6 text-yellow-300" />
            <span>Rapid Charge</span>
          </div>
          <div className="bms-stat flex flex-col items-center gap-2 text-center">
            <ShieldCheck className="w-6 h-6 text-blue-400" />
            <span>Safety Control</span>
          </div>
          <div className="bms-stat flex flex-col items-center gap-2 text-center">
            <RefreshCcw className="w-6 h-6 text-cyan-400" />
            <span>Regen Boost</span>
          </div>
        </div>
      </div>
    </section>
  );
}
