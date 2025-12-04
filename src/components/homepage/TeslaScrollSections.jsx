"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: "Model-S",
    title: "Tesla Model S",
    price: "From $66,490",
    tagline: "[ A revolutionary electric car ]",
    desc: "The Tesla Model S is a battery electric executive car with a liftback body style. It features a dual-motor, all-wheel drive layout, providing impressive performance and long range. Since its launch in 2012, it has set benchmarks in the electric vehicle market.",
    thumbs: ["/img/Model-S/s1.avif", "/img/Model-S/s2.avif"],
    image: "/img/Model-S/model s.avif",
  },
  {
    id: "Model-Y",
    title: "Tesla Model Y",
    price: "From $31,490",
    tagline: "[ A versatile electric SUV ]",
    desc: "The Tesla Model Y is a mid-size crossover SUV with a fully electric powertrain. It offers up to 320 miles of range and advanced safety features.",
    thumbs: ["/img/Model-Y/my1.avif", "/img/Model-Y/my2.avif"],
    image: "/img/Model-Y/model y.avif",
  },
  {
    id: "Cybertruck",
    title: "Tesla Cybertruck",
    price: "From $66,490",
    tagline: "[ A futuristic electric pickup ]",
    desc: "The Tesla Cybertruck is a full-size electric pickup truck with a unique, angular design. It offers impressive performance and capability.",
    thumbs: ["/img/Cybertruck/cyber1.avif", "/img/Cybertruck/cyber2.avif"],
    image: "/img/Cybertruck/cybertruck.avif",
  },
  {
    id: "ModelX",
    title: "Tesla Model X",
    price: "From $63,990",
    tagline: "[ A powerful electric SUV ]",
    desc: "The Tesla Model X is a mid-size luxury crossover SUV with a fully electric powertrain and distinctive falcon-wing doors.",
    thumbs: ["/img/Model-X/mx 1.avif", "/img/Model-X/mx 2.avif"],
    image: "/img/Model-X/model x.avif",
  },
];

export default function TeslaScrollEffect() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  // dynamic overlay refs arrays (one overlay per section after first)
  const overlayImgRefs = useRef([]);
  const overlayInnerRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".scroll-panel");
      const panelCount = panels.length;

      // ---- content scroll animation (right column)
      const totalScrollPx = (panelCount - 1) * window.innerHeight; // amount to scroll through panels
      gsap.to(contentRef.current, {
        yPercent: -100 * (panelCount - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalScrollPx}`,
          scrub: 1.5,
          pinSpacing: true,
          pin: true,
        },
      });

      // ---- prepare overlays initial state
      // overlays correspond to sections[1..n-1]
      overlayImgRefs.current.forEach((el, i) => {
        // set a staggered initial y offset so they are off-canvas initially
        gsap.set(el, { yPercent: 120 + i * 100 }); // higher index = slightly further down
        if (overlayInnerRefs.current[i]) {
          gsap.set(overlayInnerRefs.current[i], { scale: 1.3 });
        }
        // performance hint
        el.style.willChange = "transform";
        if (overlayInnerRefs.current[i]) {
          overlayInnerRefs.current[i].style.willChange = "transform";
        }
      });

      // ---- ScrollTrigger that maps progress to overlay reveals (dynamic)
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 50%",
        end: `+=${totalScrollPx}`,
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress; // 0..1 across totalScrollPx

          // We'll reveal overlay for panel index j (1..panelCount-1).
          // For each overlay (index j-1 in overlays array), compute a window centered at j/(panelCount-1)
          const step = 1 / (panelCount - 1);
          const half = step * 0.2; // window half-width (adjust 0.6 to widen/narrow reveal)

          overlayImgRefs.current.forEach((el, idx) => {
            // overlay corresponds to panelIndex = idx + 1
            const panelIndex = idx + 1;
            const center = panelIndex * step;
            const start = Math.max(0, center - half);
            const end = Math.min(1, center + half);

            // Map p from [start, end] -> [0,1] and clamp
            let t = gsap.utils.mapRange(start, end, 0, 1, p);
            t = gsap.utils.clamp(0, 1, t);

            // apply transforms: el yPercent from 100 -> 0 (we set larger initial offsets earlier)
            gsap.to(el, {
              yPercent: 100 - t * 100,
              ease: "power1.out",
              overwrite: true,
            });
            const inner = overlayInnerRefs.current[idx];
            if (inner) {
              gsap.to(inner, {
                scale: 1.3 - t * 0.2,
                ease: "power1.out",
                overwrite: true,
              });
            }
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // helper for attaching refs in map
  const setOverlayImgRef = (el, i) => {
    overlayImgRefs.current[i] = el;
  };
  const setOverlayInnerRef = (el, i) => {
    overlayInnerRefs.current[i] = el;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100vh] overflow-hidden"
    >
      {/* Image stack - right side visual area */}
      <div className="absolute top-2 right-2 bottom-2 w-1/2 z-0 rounded-md pointer-events-none">
        {/* Base image (index 0) */}
        <div
          className="absolute inset-0 overflow-hidden z-10 rounded-md"
          style={{ willChange: "transform" }}
        >
          <Image
            src={sections[0].image}
            alt={sections[0].title}
            fill
            className="object-cover rounded-md"
            priority // first image should be priority for LCP
          />
        </div>

        {/* dynamically render overlays for sections[1..] */}
        {sections.slice(1).map((s, i) => {
          // overlay index i corresponds to section index i+1
          return (
            <div
              key={s.id}
              className="absolute inset-0 overflow-hidden z-[20]"
              ref={(el) => setOverlayImgRef(el, i)}
              style={{ borderRadius: 8 }}
            >
              <div
                ref={(el) => setOverlayInnerRef(el, i)}
                className="w-full h-full relative"
                style={{ willChange: "transform" }}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover rounded-md"
                  // lazy load overlays for performance — they are revealed later
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Right content column that scrolls up through panels */}
      <div ref={contentRef} className="relative z-40 w-1/2 h-full">
        {sections.map((sec, i) => (
          <section
            key={sec.id}
            className="scroll-panel h-screen flex items-center px-6 md:px-16"
          >
            <div className="space-y-5 max-w-xl font-medium">
              <h1 className="text-[2rem] md:text-[2.5rem] tracking-tight text-black">
                {sec.title}
              </h1>
              <p className="text-[17px] text-[#000] font-normal">{sec.price}</p>
              <p className="text-[20px] font-bold">{sec.tagline}</p>

              <div className="flex gap-4 pt-3">
                {sec.thumbs.map((src, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-[10px]"
                    style={{
                      clipPath:
                        "polygon(20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 20%)",
                    }}
                  >
                    <Image
                      src={src}
                      alt="thumb"
                      width={230}
                      height={140}
                      className="object-cover"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>

              <p className="text-[17px] text-[#333] leading-[1.65] pt-3 font-medium">
                {sec.desc}
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
