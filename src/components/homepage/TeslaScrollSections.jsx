"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Lottie from "lottie-react";
import eyeBlink from "@/lottie/eye-blink.json";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: "hiRange",
    title: "HiRange",
    price: "From ₹3,45,000",
    tagline: "[ Long-range electric mobility redefined ]",
    desc: "HiRange is built for businesses that demand more. With a certified range of over 200 km on a single charge, dual ride modes, and intelligent battery management, it’s designed for intercity logistics and high-efficiency operations. The premium build quality, spacious cabin, and fast-charging capabilities make it the go-to EV for delivery fleets and enterprise transport. Designed to move farther, smarter, and tougher.",
    thumbs: ["/img/model-y-1.avif", "/img/model-y-2.avif"],
    image: "/img/model-y.avif",
    url: "/product/hi-range",
  },
  {
    id: "hiCity",
    title: "HiCity",
    price: "From ₹2,95,000",
    tagline: "[ Compact. Agile. Built for the city. ]",
    desc: "HiCity is engineered for India’s dense, fast-paced urban landscapes. With a lightweight frame, superior torque, and smart diagnostics, it offers unmatched maneuverability and efficiency in traffic-heavy zones. Quick to charge and even quicker to zip through city streets, HiCity is ideal for intra-city deliveries, small businesses, and modern urban mobility needs — all packed into a highly space-efficient design.",
    thumbs: ["/img/model-x-1.avif", "/img/model-x-2.avif"],
    image: "/img/model-x.avif",
    url: "/product/hi-city",
  },
  {
    id: "hiUrbania",
    title: "HiUrbania",
    price: "From ₹3,15,000",
    tagline: "[ A new era of style-driven electric mobility ]",
    desc: "HiUrbania is where design meets performance. With a futuristic aesthetic, connected ride experience, and customizable options, it’s made for urban explorers and next-gen commuters. Whether you're navigating city nights or making a style statement on the go, HiUrbania offers comfort, performance, and identity — all powered by clean electric energy. It’s not just a ride; it’s a vibe.",
    thumbs: ["/img/model-3-1.avif", "/img/model-3-2.avif"],
    image: "/img/model-3.avif",
    url: "/product/hi-urbania",
  },
];

export default function TeslaScrollEffect() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const overlayImgRef1 = useRef(null);
  const overlayImgRef2 = useRef(null);
  const overlayInnerRef1 = useRef(null);
  const overlayInnerRef2 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".scroll-panel");

      gsap.to(contentRef.current, {
        yPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${panels.length * 110}%`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      gsap.set(overlayImgRef1.current, { yPercent: 120 });
      gsap.set(overlayInnerRef1.current, { scale: 1.3 });

      gsap.set(overlayImgRef2.current, { yPercent: 240 });
      gsap.set(overlayInnerRef2.current, { scale: 1.3 });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=250%",
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;

          // 1st overlay reveal (Image 2)
          const progress1 = Math.min(1, Math.max(0, (p - 0.2) / 0.4));
          gsap.to(overlayImgRef1.current, {
            yPercent: 100 - progress1 * 100,
            ease: "none",
          });
          gsap.to(overlayInnerRef1.current, {
            scale: 1.3 - progress1 * 0.2,
            ease: "none",
          });

          // 2nd overlay reveal (Image 3)
          const progress2 = Math.min(1, Math.max(0, (p - 0.79) / 0.21));
          gsap.to(overlayImgRef2.current, {
            yPercent: 100 - progress2 * 100,
            ease: "none",
          });
          gsap.to(overlayInnerRef2.current, {
            scale: 1.3 - progress2 * 0.2,
            ease: "none",
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100vh] overflow-hidden"
    >
      {/* Image stack */}
      <div className="absolute top-2 right-2 bottom-2 w-1/2 z-0 rounded-md">
        {/* Base image */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <Image
            src={sections[0].image}
            alt={sections[0].title}
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Overlay 1 */}
        <div
          className="absolute inset-0 overflow-hidden z-20 rounded-md"
          ref={overlayImgRef1}
        >
          <div ref={overlayInnerRef1} className="w-full h-full relative">
            <Image
              src={sections[1].image}
              alt={sections[1].title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Overlay 2 */}
        <div
          className="absolute inset-0 overflow-hidden z-30 rounded-md"
          ref={overlayImgRef2}
        >
          <div ref={overlayInnerRef2} className="w-full h-full relative">
            <Image
              src={sections[2].image}
              alt={sections[2].title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Content */}
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
                    />
                  </div>
                ))}
              </div>

              <p className="text-[17px] text-[#333] leading-[1.65] pt-3 font-medium">
                {sec.desc}
              </p>
              <Link
                href={`${sec.url}`}
                className="w-fit mt-6 px-6 py-3 bg-black text-white rounded-full hover:scale-105 hover:bg-gray-900 transition-all duration-300 flex items-start gap-3"
              >
                <div className="w-6 h-6">
                  <Lottie animationData={eyeBlink} loop autoplay />
                </div>
                <span>Explore</span>
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
