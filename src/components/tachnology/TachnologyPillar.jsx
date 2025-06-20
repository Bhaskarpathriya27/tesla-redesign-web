
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Cpu, BatteryCharging, Globe2, LayoutDashboard } from "lucide-react";
import Image from "next/image";

export default function TechnologyPillar() {
  const marqueeRef = useRef(null);
  const urbanRef = useRef(null);

  useEffect(() => {
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 5,
        repeat: -1,
      });
    }

    if (urbanRef.current) {
      gsap.fromTo(
        urbanRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: urbanRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <>
      {/* Marquee */}
      {/* <div className="w-full z-0 pointer-events-none border-y-2 border-gray-200 mb-4">
        <div
          ref={marqueeRef}
          className="whitespace-nowrap text-[8vw] font-bold uppercase text-[#0f172a] tracking-tight py-4"
        >
           Sustainable <span className="text-[#00c896]">technology</span>  solutions designed for the modern cityscape
        </div>
      </div> */}

    
      {/* Urban Solution Design Section */}
      <section className="md:py-20 px-6 lg:px-16 bg-white">
        <div
          ref={urbanRef}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="order-2 md:order-1">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-[#e0eaf8] text-[#1e3a8a]">
              Urban Innovation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-[#0f172a]">
              DESIGNED FOR CITY <span className="text-[#00c896]">LIFE</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our compact yet powerful solutions are engineered specifically for
              urban environments, balancing efficiency with performance to
              navigate crowded city streets with ease.
            </p>
            <ul className="space-y-3">
              {[
                "Space-efficient design",
                "Maneuverability optimized",
                "Low-noise operation",
                "Zero-emission performance",
              ].map((item, i) => (
                <li key={i} className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#00c896] mr-3 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 md:order-2 relative md:h-[500px] h-[250px] overflow-hidden">
            <Image
            //   src="/Technology/urban2.webp"
              src="/Technology/urban7.webp"
              alt="Urban Solution Design"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
