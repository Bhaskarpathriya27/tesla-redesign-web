"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ClipText from "../ui/ClipText";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    tag: "Performance",
    heading: "Command the Streets",
    label: "Performance",
    desc: "HiRange is built for businesses that demand more. With 200+ km certified range, dual ride modes, and intelligent BMS — perfect for intercity delivery and logistics operations.",
    image: "/usecases/6.jpg",
    features: ["200+ km Range", "Dual Ride Modes", "Smart BMS", "Tough Build"],
  },
  {
    tag: "Agility",
    heading: "Master City Mobility",
    label: "Agility",
    desc: "HiCity is compact yet feature-rich. Quick charging, superior torque, and smart diagnostics — designed to rule the urban grid.",
    image: "/usecases/7.jpg",
    features: [
      "Fast Charging",
      "Compact Build",
      "Smart Diagnostics",
      "Urban Ready",
    ],
  },
];

export default function ScrollCardSwitcher() {
  const sectionRef = useRef(null);
  const afterRef = useRef(null);
  const afterImgRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const after = afterRef.current;
    const afterImg = afterImgRef.current;

    gsap.set(after, { yPercent: 100 });
    gsap.set(afterImg, { yPercent: -100 });

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=200vh",
      pin: true,
      anticipatePin: 1,
    });

    ScrollTrigger.create({
      trigger: section,
      start: "center center",
      end: "+=200vh",
      anticipatePin: 1,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        setActiveIndex(progress > 0.5 ? 1 : 0);

        gsap.to(after, {
          yPercent: (1 - progress) * 100,
          ease: "none",
        });

        gsap.to(afterImg, {
          yPercent: -1 * (1 - progress) * 100,
          ease: "none",
        });
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const current = sections[0];
  const next = sections[1];
  const active = activeIndex === 0 ? current : next;

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen bg-white text-black px-6 md:px-16 lg:px-24 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* IMAGE LEFT */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden border border-gray-200 shadow-[0_15px_60px_rgba(0,0,0,0.1)] bg-white/50 mx-auto md:ml-0">
          <div className="absolute inset-0 z-10">
            <Image
              src={current.image}
              alt="base"
              fill
              className="object-cover rounded-[32px]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
          <div ref={afterRef} className="absolute inset-0 overflow-hidden z-20">
            <img
              ref={afterImgRef}
              src={next.image}
              alt="reveal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        </div>

        {/* CONTENT RIGHT */}
        <div className="flex flex-col justify-start items-start space-y-6 text-left">
          <h1 className="text-4xl font-bold uppercase tracking-wide bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text drop-shadow-sm">
            <ClipText text={active.label} triggerKey={activeIndex} />
          </h1>

          <ClipText
            text={active.heading}
            className="text-2xl md:text-3xl font-semibold text-[#0f172a] drop-shadow-sm"
            triggerKey={activeIndex}
          />
          <ClipText
            text={active.desc}
            className="text-gray-600 text-sm leading-relaxed max-w-md"
            triggerKey={activeIndex}
          />

          {/* Features */}
          <ul className="grid grid-cols-2 gap-3 pt-2">
            {active.features.map((feature, idx) => (
              <li
                key={idx}
                className="text-xs text-gray-800 bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-full text-center"
              >
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="pt-4">
            <button className="px-6 py-2 rounded-full text-sm font-medium bg-black text-white hover:bg-gray-800 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
