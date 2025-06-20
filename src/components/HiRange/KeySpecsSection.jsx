"use client";
import { motion } from "framer-motion";
import { Card } from "../ui/apple-cards-carousel";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function KeySpecsSection() {
  const containerRef = useRef(null);
  const panelRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalPanels = panelRef.current.length;
      if (!panelRef.current[0]) return;

      const scrollWidth = panelRef.current[0].offsetWidth * totalPanels;

      const isMobile = window.innerWidth < 768; // Tailwind's sm breakpoint
      const startTrigger = isMobile ? "center center" : "top top";
      const x = isMobile ? -110 : -80;

      gsap.to(panelRef.current, {
        xPercent: x * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: startTrigger,
          pin: true,
          scrub: 1,
          end: `+=${scrollWidth}`,
          pinSpacing: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] py-16 sm:py-20 bg-[#f8fdfc] ">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-5xl font-bold text-center px-4 sm:px-8 pt-10 sm:pt-16 text-neutral-800 tracking-tight"
      >
        The Future of <span className="text-[#00c896]">Urban Range</span> Starts
        Here
      </motion.h2>

      {/* Card Container */}
      <div
        ref={containerRef}
        className="flex gap-4 sm:gap-6 px-4 sm:px-6 pt-12 sm:pt-20 scrollbar-hide"
      >
        <div className="min-w-[5vw] sm:min-w-[10vw] shrink-0" />

        {data.map((card, i) => (
          <div
            key={i}
            ref={(el) => (panelRef.current[i] = el)}
            className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[30vw] shrink-0"
          >
            <Card card={card} index={i} />
          </div>
        ))}

        <div className="min-w-[5vw] sm:min-w-[10vw] shrink-0" />
      </div>
    </section>
  );
}

const data = [
  {
    category: "Performance",
    title: "Go the distance with 200+ km range.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop",
  },
  {
    category: "Charging",
    title: "Charge faster. Deliver smarter.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop",
  },
  {
    category: "Design",
    title: "Bold, aerodynamic. Built to turn heads.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop",
  },
  {
    category: "Cabin Comfort",
    title: "Spacious interiors for all-day comfort.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop",
  },
  {
    category: "Smart Tech",
    title: "Stay connected with onboard diagnostics.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop",
  },
  {
    category: "Built for Business",
    title: "Ideal for logistics, retail & last-mile delivery.",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop",
  },
];
