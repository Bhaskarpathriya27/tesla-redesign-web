"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Cpu, BatteryCharging, Globe2, LayoutDashboard } from "lucide-react";

export default function AboutPillarsSection() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 5,
      repeat: -1,
    });
  }, []);

  return (
    <>
      {/* Marquee */}
      <div className="w-full z-0 pointer-events-none border-y-2 border-gray-200 mb-4">
        <div
          ref={marqueeRef}
          className="whitespace-nowrap text-[8vw] font-bold uppercase text-[#0f172a] tracking-tight py-4"
        >
          Urban. Electric. Intelligent. This is the Neo way. · Urban. Electric.
          Intelligent. This is the Neo way. ·
        </div>
      </div>

      {/* Stacked Fullscreen Cards */}
      <section className="w-full px-6 lg:px-20 py-28 bg-gradient-to-br from-[#ecf3ff] to-[#f7faff] flex flex-col md:flex-row items-center justify-between gap-10 rounded-2xl">
        {/* Left Content */}
        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6"
        >
          <p className="text-sm uppercase tracking-wider text-[#2563eb] font-medium">
            What Drives Us
          </p>
          <div className="flex items-center gap-3">
            <div className="bg-[#e0edff] p-3 rounded-full">
              <BatteryCharging className="text-[#2563eb] w-6 h-6" />
            </div>
            <h2 className="text-4xl font-semibold text-[#0f172a] leading-snug">
              Mission
            </h2>
          </div>

          <p className="text-base text-gray-700 leading-relaxed">
            Redefining urban mobility with intelligent, design-driven EVs
            crafted for future cities. Our mission blends innovation,
            sustainability, and practicality into every vehicle we build.
          </p>

          <p className="text-sm text-gray-500 leading-relaxed">
            Every kilometer driven with Neo contributes to a smarter, greener,
            and more connected urban experience. From cabin design to battery
            intelligence — every detail is engineered for purpose.
          </p>
        </motion.div>

        {/* Right Box with Glass-style Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 h-[400px] rounded-3xl relative overflow-hidden flex items-end justify-start p-6"
          style={{
            backgroundImage: "url('/about/about_us_banner.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Frosted Overlay */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />

          {/* Text Overlay */}
          <div className="relative z-10 text-white text-3xl md:text-4xl font-semibold leading-snug">
            Smarter Cities <br />
            Start With Us
          </div>
        </motion.div>
      </section>
    </>
  );
}
