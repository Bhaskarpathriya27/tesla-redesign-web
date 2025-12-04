"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  IconBatteryCharging,
  IconCamera,
  IconReload,
} from "@tabler/icons-react";
import { Users2, ZapIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    // desired timings (match card duration and start)
    const CARD_ANIM_DURATION = 1.5;
    const CARD_ANIM_START = 0.3;

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
      gsap.set(titleRef.current, { scale: 1 });

      masterTl.to(
        titleRef.current,
        {
          scale: titleScale,
          ease: "power2.out",
          duration: CARD_ANIM_DURATION,
        },
        CARD_ANIM_START // start at same time as card anims
      );

      // Initial positions (off-screen)
      const positions = [
        { x: -1200, y: -600 },
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
            duration: CARD_ANIM_DURATION,
          },
          CARD_ANIM_START
        );
      });

      // ScrollTrigger
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+${window.innerHeight * 2}px`,
        pin: true,
        pinSpacing: true,
        scrub: true,
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
      icon: IconCamera,
      title: "Full Self-Driving (FSD)",
      desc: "Advanced driver assistance with continual improvement via fleet learning.",
      note: "Computer vision + neural nets",
    },
    {
      icon: IconBatteryCharging,
      title: "Long Range Powertrain",
      desc: "Optimized battery chemistry and thermal management for extended range.",
      note: "200+ miles real-world range",
    },
    {
      icon: ZapIcon,
      title: "Supercharging Network",
      desc: "Ultra-fast charging across a global grid for long-distance confidence.",
      note: "Up to 250 kW in supported sites",
    },
    {
      icon: IconReload,
      title: "Over-the-Air Updates",
      desc: "Ship new features and safety updates instantly to every car.",
      note: "Features, smoothing & safety",
    },
    {
      icon: Users2,
      title: "Driver Safety & UX",
      desc: "Ergonomic cabin, centralized compute and real-time diagnostics.",
      note: "Driver monitoring & telemetry",
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
        className="absolute z-20 font-pigarnos font-bold text-[#0f172a]
             top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
             leading-[0.9] px-4 whitespace-nowrap text-center"
        style={{
          fontSize: "clamp(48px, 8vw, 128px)",
          letterSpacing: "0.05em",
        }}
      >
        Engineering the
        <br />
        Future of Motion
      </h2>

      {/* Cards */}
      {cards.map((card, i) => {
        const Icon = card.icon;
        return (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="absolute z-30 opacity-0 w-[90%] max-w-[320px] md:min-h-[180px] min-h-[140px] rounded-2xl px-6 py-6 flex flex-col justify-between items-start
                       backdrop-blur-md bg-white/40 border border-white/30 shadow-xl hover:scale-105"
            style={{ top: "50%", left: "50%" }}
            aria-hidden="false"
          >
            <div className="flex items-start gap-4 w-full">
              {/* circular badge icon */}
              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-md border border-slate-100">
                <Icon size={20} className="text-[#0f172a]" />
              </div>

              {/* main content */}
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-700 mt-2">{card.desc}</p>
              </div>
            </div>

            {/* accent line + note */}
            <div className="mt-4 w-full flex items-center justify-between gap-3">
              <div className="h-0.5 w-8 bg-gradient-to-r from-slate-900/60 to-slate-400/20 rounded" />
              <span className="text-xs text-slate-600">{card.note}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
}
