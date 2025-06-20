"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SlideScrollStack() {
  useEffect(() => {
    const cards = gsap.utils.toArray(".panel");

    const triggers = [];

    cards.forEach((card, index) => {
      const isLastCard = index === cards.length - 1;

      triggers.push(
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: isLastCard ? "+=100vh" : "top top",
          endTrigger: isLastCard ? null : cards[cards.length - 1],
          scrub: true,
          pin: true,
          pinSpacing: isLastCard,
          anticipatePin: 1,
        })
      );
    });

    // ✅ Force full refresh after layout settles
    requestAnimationFrame(() => {
      setTimeout(() => ScrollTrigger.refresh(), 50);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <section className="panel h-screen w-full flex items-center justify-center text-white text-4xl font-bold bg-[#111]">
        Slide 1: Welcome to Neo Mobility
      </section>
      <section className="panel h-screen w-full flex items-center justify-center text-white text-4xl font-bold bg-[#181818]">
        Slide 2: HiRange | HiCity | HiUrbania
      </section>
      <section className="panel h-screen w-full flex items-center justify-center text-white text-4xl font-bold bg-[#222]">
        Slide 3: Intelligence Meets the Road
      </section>
    </div>
  );
}
