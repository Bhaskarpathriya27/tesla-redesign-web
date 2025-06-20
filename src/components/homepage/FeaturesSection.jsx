"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  BatteryCharging,
  Gauge,
  Clock,
  LayoutPanelTop,
  BarChart2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    const ctx = gsap.context(() => {
      // Initial card setup
      cardRefs.current.forEach((card) => {
        gsap.set(card, {
          xPercent: -50,
          yPercent: -50,
          top: "50%",
          left: "50%",
          transformOrigin: "center",
        });
      });

      // Master timeline
      const masterTl = gsap.timeline({ paused: true });

      // Title animation with responsive scale
      const titleScale = isMobile ? 0.85 : 0.65;
      masterTl.to(titleRef.current, { scale: 0.8, ease: "none" }, 0);
      masterTl.to(
        titleRef.current,
        { scale: titleScale, ease: "power2.out" },
        0.6
      );

      // Initial positions (off-screen)
      const positions = [
        { x: -1200, y: -500 },
        { x: 0, y: -500 },
        { x: 1000, y: -300 },
        { x: -500, y: 500 },
        { x: 500, y: 500 },
      ];

      // Final desktop positions
      const finalPositions = [
        { x: -400, y: -160 },
        { x: 0, y: -230 },
        { x: 400, y: -160 },
        { x: -250, y: 130 },
        { x: 250, y: 130 },
      ];

      // Final mobile stacked layout
      const finalPositionsMobile = [
        { x: 0, y: -220 },
        { x: 0, y: -120 },
        { x: 0, y: 0 },
        { x: 0, y: 120 },
        { x: 0, y: 220 },
      ];

      // Animate cards in
      cardRefs.current.forEach((card, i) => {
        masterTl.fromTo(
          card,
          {
            autoAlpha: 1,
            x: positions[i].x,
            y: positions[i].y,
            scale: 0.8,
          },
          {
            autoAlpha: 1,
            x: isMobile ? finalPositionsMobile[i].x : finalPositions[i].x,
            y: isMobile ? finalPositionsMobile[i].y : finalPositions[i].y,
            scale: 1,
            ease: "none",
            duration: 1.5,
          },
          0.3
        );
      });

      // ScrollTrigger
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=600",
        scrub: true,
        pin: true,
        markers: false,
        onUpdate: (self) => {
          const progress = self.progress;
          masterTl.time(progress * masterTl.duration());
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      icon: BatteryCharging,
      title: "200+ km ARAI Range",
      desc: "Built to outlast every route.",
    },
    {
      icon: Gauge,
      title: "Smart Drive Modes",
      desc: "Eco & Thunder with instant torque.",
    },
    {
      icon: Clock,
      title: "Fast Charging",
      desc: "0–100% in under 2 hours.",
    },
    {
      icon: LayoutPanelTop,
      title: "Comfort Cabin",
      desc: "Spacious. Quiet. Driver-focused.",
    },
    {
      icon: BarChart2,
      title: "Real-time Analytics",
      desc: "Health, location & diagnostics.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col items-center justify-start pt-40 gap-32"
    >
      {/* Tagline */}
      <h2
        ref={titleRef}
        className="absolute z-20 font-bold text-[#1E293B] top-[50%] left-[50%] md:top-1/2 md:left-1/2 -translate-x-1/2 -translate-y-1/2 leading-[1] text px-4 max-w-[90%] md:max-w-none whitespace-nowrap text-center md:text-left"
        style={{
          fontSize: "clamp(40px, 8vw, 120px)",
          paddingBottom: "0.5em",
        }}
      >
        Where Intelligence
        <br />
        Meets the Road
      </h2>

      {/* Cards */}
      {cards.map((card, i) => {
        const Icon = card.icon;
        return (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="absolute z-30 opacity-0 w-[90%] max-w-[320px] md:min-h-[180px] min-h-[140px] rounded-2xl px-6 py-6 flex flex-col justify-start items-start backdrop-blur-lg bg-white/60 border border-slate-200 shadow-xl hover:scale-105 text-slate-800"
            style={{ top: "50%", left: "50%" }}
          >
            <div className="flex md:flex-col flex-row md:gap-2 gap-4 ">
              <Icon size={28} className="mb-2 text-indigo-500" />
              <div>
                <span className="block md:text-lg font-bold">{card.title}</span>
                <span className="block text-sm opacity-80 mt-1">
                  {card.desc}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
