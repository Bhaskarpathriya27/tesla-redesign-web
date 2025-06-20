/* eslint-disable react/jsx-no-undef */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import eyeBlink from "@/lottie/eye-blink.json";
import Lottie from "lottie-react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    title: "HiRange",
    desc: "Premium long-range electric vehicle for intercity delivery with smart BMS and tough build.",
    images: ["/1.webp", "/1.webp", "/1.webp"],
    tags: ["200+ km", "Fast Charging", "Eco Mode"],
    leftSpecs: ["Battery: 10kWh", "Top Speed: 60 km/h"],
    rightSpecs: ["Charging: 2hr", "Cabin: Spacious"],
    bg: "from-[#eaf1f9] to-white",
    glow: "from-blue-500 to-indigo-600",
    link: "/product/hi-range",
  },
  {
    title: "HiCity",
    desc: "Compact, connected EV perfect for everyday city rides. Instant torque & diagnostics built-in.",
    images: ["/3.webp", "/3.webp", "/3.webp"],
    tags: ["Smart Cabin", "Realtime Analytics", "Compact Design"],
    leftSpecs: ["Battery: 6.5kWh", "Top Speed: 55 km/h"],
    rightSpecs: ["Charging: 90min", "Torque: Instant"],
    bg: "from-[#fff9e8] to-white",
    glow: "from-yellow-400 to-orange-500",
    link: "/product/hi-city",
  },
  {
    title: "HiUrbania",
    desc: "Urban EV designed for lifestyle. Where elegance, performance, and sustainability meet.",
    images: ["/4.webp", "/4.webp", "/4.webp"],
    tags: ["Sustainable", "Design First", "Connected System"],
    leftSpecs: ["Battery: 8kWh", "Style: Urban Luxe"],
    rightSpecs: ["Warranty: 5 Years", "Color: Matte Series"],
    bg: "from-[#fff0f4] to-white",
    glow: "from-pink-400 to-rose-500",
    link: "/product/hi-urbania",
  },
];

export default function GrandRevealShowcase() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const cards = sectionRefs.current;
    const triggers = [];

    cards.forEach((el, index) => {
      const isLastCard = index === cards.length - 1;

      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: isLastCard ? "+=100vh" : "top top",
          endTrigger: isLastCard ? null : cards[cards.length - 1],
          scrub: true,
          pin: true,
          pinSpacing: isLastCard,
          anticipatePin: 1,
        })
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        el.querySelectorAll(".spec-card-left"),
        { y: -120, opacity: 0, rotate: -5 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 1,
          stagger: 0.2,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: el,
            start: "top center",
            end: "top top",
            scrub: false,
          },
        }
      );

      gsap.fromTo(
        el.querySelectorAll(".spec-card-right"),
        { y: -120, opacity: 0, rotate: 5 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 1,
          stagger: 0.2,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: el,
            start: "top center",
            end: "top top",
            scrub: false,
          },
        }
      );
    });

    requestAnimationFrame(() => {
      setTimeout(() => ScrollTrigger.refresh(), 50);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Heading */}
      <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 text-center z-40">
        <h3 className="text-sm md:text-base text-gray-400 tracking-wide uppercase font-medium">
          Neo Mobility
        </h3>
        <h1 className="text-xl text-nowrap md:text-3xl font-semibold text-gray-900">
          Discover Our Product Lineup
        </h1>
      </div>

      {/* Slides */}
      {products.map((p, i) => (
        <div
          key={i}
          ref={(el) => (sectionRefs.current[i] = el)}
          className={`panel h-screen relative flex items-center justify-center bg-gradient-to-b ${p.bg} text-gray-800 px-4 md:px-8 lg:px-16 xl:px-32 overflow-hidden`}
        >
          {/* Left Specs */}
          <div className="hidden lg:flex absolute top-1/2 left-12 flex-col gap-10 -translate-y-1/2 z-30">
            {p.leftSpecs.map((s, idx) => (
              <div
                key={idx}
                className="spec-card-left relative opacity-0 translate-y-[-120px] rotate-[-5deg]"
              >
                <svg
                  width="30"
                  height="40"
                  viewBox="0 0 30 40"
                  className="absolute -top-10 left-1/2 -translate-x-1/2"
                >
                  <line
                    x1="15"
                    y1="0"
                    x2="15"
                    y2="40"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeDasharray="4"
                  />
                </svg>
                <div className="px-5 py-2 bg-white shadow-xl rounded-xl text-gray-800 text-sm font-semibold border border-gray-200">
                  {s}
                </div>
              </div>
            ))}
          </div>

          {/* Right Specs */}
          <div className="hidden lg:flex absolute top-1/2 right-12 flex-col gap-10 -translate-y-1/2 items-end z-30">
            {p.rightSpecs.map((s, idx) => (
              <div
                key={idx}
                className="spec-card-right relative opacity-0 translate-y-[-120px] rotate-[5deg]"
              >
                <svg
                  width="30"
                  height="40"
                  viewBox="0 0 30 40"
                  className="absolute -top-10 left-1/2 -translate-x-1/2"
                >
                  <line
                    x1="15"
                    y1="0"
                    x2="15"
                    y2="40"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeDasharray="4"
                  />
                </svg>
                <div className="px-5 py-2 bg-white shadow-xl rounded-xl text-gray-800 text-sm font-semibold border border-gray-200">
                  {s}
                </div>
              </div>
            ))}
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center text-center max-w-6xl">
            {/* Image */}
            <div className="relative image-wrap w-[100vw] max-w-[500px] h-[290px] md:h-[450px] mb-10">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                coverflowEffect={{
                  rotate: 30,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                modules={[EffectCoverflow]}
                className="mySwiper"
              >
                {p.images.map((img, idx) => (
                  <SwiperSlide
                    key={idx}
                    className="flex items-center justify-center w-[260px] md:w-[300px]"
                  >
                    <Image
                      src={img}
                      alt={`${p.title}-${idx}`}
                      width={300}
                      height={300}
                      className="object-contain rounded-2xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Minimal swipe hint */}
              <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[12px] text-gray-400 z-30 font-medium tracking-wide animate-pulse">
                ← swipe →
              </p>
            </div>

            <h2 className="title text-4xl md:text-7xl font-bold">{p.title}</h2>
            <p className="desc mt-4 text-md md:text-xl max-w-3xl text-gray-600">
              {p.desc}
            </p>

            {/* Mobile Specs */}
            <div className="flex flex-wrap justify-center gap-3 mt-3 lg:hidden">
              {[...p.leftSpecs, ...p.rightSpecs].map((s, idx) => (
                <div
                  key={idx}
                  className="px-4 py-1 bg-white border border-gray-200 text-xs rounded-full shadow-sm text-gray-700"
                >
                  {s}
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {p.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1 bg-gray-100 text-gray-700 text-xs rounded-full shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Button */}
            <Link
              href={`${p.link}`}
              className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:scale-105 hover:bg-gray-900 transition-all duration-300 flex items-center gap-3"
            >
              <div className="w-6 h-6">
                <Lottie animationData={eyeBlink} loop autoplay />
              </div>
              <span>Explore</span>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
