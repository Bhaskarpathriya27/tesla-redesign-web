"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";
import Image from "next/image";

export default function HiRangeFuturisticHero() {
  const titleRef = useRef(null);

  const fillVariants = {
    initial: { scaleX: 0 },
    hover: { scaleX: 1 },
  };

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.opacity = 0;
    }

    const split = new SplitType(titleRef.current, { types: "chars" });
    gsap.set(split.chars, { opacity: 0 });

    gsap.to(split.chars, {
      y: 0,
      opacity: 1,
      stagger: 0.015,
      duration: 1.2,
      ease: "power4.out",
    });

    gsap.to(titleRef.current, { opacity: 1, duration: 0.01 });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#f8fdfc] overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-16 gap-12 lg:gap-0">
      {/* BACKGROUND TEXT */}
      <h1 className="absolute text-[17vw] font-bold text-[#0f172a]/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        HiRange
      </h1>

      {/* BACKGROUND GLOW ORBS */}
      <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-[#00c896]/30 blur-[140px] rounded-full z-0" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-[#0f172a]/20 blur-[140px] rounded-full z-0" />

      {/* LEFT SIDE - MISSION */}
      <div className="z-10 w-full lg:w-1/3 space-y-6 text-center lg:text-left">
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl font-semibold text-[#0f172a] leading-tight"
        >
          Redefining <br />
          Urban Mobility.
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
          HiRange is built to conquer intercity routes with advanced electric
          performance, rugged reliability, and bold design — all powered by
          smart battery tech.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="group relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-black px-8 py-4 text-sm font-semibold text-black transition-all duration-300 shadow-xl"
        >
          <span className="absolute inset-0 bg-black translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
          <span className="relative z-10 group-hover:text-[#00c896] transition-colors duration-300">
            Explore Specs
          </span>
        </motion.button>
      </div>

      {/* CENTER IMAGE */}
      <div className="relative z-10 w-full lg:w-1/3 flex items-center justify-center">
        <Image
          src="/1.webp"
          alt="HiRange"
          width={420}
          height={420}
          className="w-[260px] sm:w-[300px] md:w-[360px] lg:w-[420px] object-contain drop-shadow-2xl"
          priority
        />
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/40 backdrop-blur-lg px-4 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg text-xs sm:text-sm font-medium text-[#0f172a]">
          Smart EV Platform
        </div>
      </div>

      {/* RIGHT SIDE - METRICS + ACTIONS */}
      <div className="z-10 w-full lg:w-1/3 flex flex-col items-center lg:items-end justify-center gap-8">
        {/* METRICS */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
          <div className="flex items-center gap-3">
            <Image
              src="https://randomuser.me/api/portraits/women/79.jpg"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full border-2 border-white"
              alt="User 1"
            />
            <Image
              src="https://randomuser.me/api/portraits/men/32.jpg"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full border-2 border-white -ml-2"
              alt="User 2"
            />
            <Image
              src="https://randomuser.me/api/portraits/men/44.jpg"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full border-2 border-white -ml-2"
              alt="User 3"
            />
          </div>
          <p className="text-sm text-gray-500 mt-1">
            12.5K+ businesses power logistics with HiRange.
          </p>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex gap-3 flex-wrap justify-center lg:justify-end">
          {["Fleet", "Specs", "Charging", "Book Now"].map((item, i) => (
            <motion.button
              key={i}
              initial="initial"
              whileHover="hover"
              variants={{}} // empty base
              className="relative overflow-hidden px-5 py-2 border-2 border-[#0f172a] rounded-full text-sm text-[#0f172a] font-medium z-10"
            >
              {/* Fill BG */}
              <motion.span
                variants={fillVariants}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 bg-[#0f172a] z-0 origin-left scale-x-0"
              />
              {/* Button text */}
              <motion.span
                className="relative z-10"
                variants={{
                  initial: { color: "#0f172a" },
                  hover: { color: "#ffffff" },
                }}
                transition={{ duration: 0.2 }}
              >
                {item}
              </motion.span>
            </motion.button>
          ))}
        </div>

        {/* KNOW MORE */}
        <div className="text-sm text-[#0f172a] underline cursor-pointer hover:opacity-70 mt-2">
          Know more →
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-[#0f172a] rounded-full flex items-start justify-center p-1">
          <div className="w-[6px] h-[6px] bg-[#0f172a] rounded-full animate-bounce-custom"></div>
        </div>
      </div>
    </section>
  );
}
