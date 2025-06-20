// app/technology/page.js

"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import TachnologyHero from "@/components/tachnology/TachnologyHero";
import TechHeroSection from "@/components/tachnology/TechHeroSection";

gsap.registerPlugin(ScrollTrigger);

export default function TechnologyPage() {
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    // Section animations
    sectionRefs.current.forEach((section, i) => {
      if (!section) return;

      gsap.fromTo(
        section,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  // Add section to refs array
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const innovationSectionRef = useRef(null);
  const cardRefs = useRef([]);
  const titleRef = useRef(null);

  // Initialize card refs array
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, 4);
  }, []);

  useEffect(() => {
    // Section title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: innovationSectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Card animations
    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        card.querySelector(".card-icon"),
        {
          scale: 0.2,
          opacity: 0,
          rotation: -20,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.75)",
        }
      )
        .fromTo(
          card.querySelector(".card-title"),
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .fromTo(
          card.querySelector(".card-desc"),
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        );
    });

    // Hover animations
    cardRefs.current.forEach((card) => {
      if (!card) return;

      card.addEventListener("mouseenter", () => {
        gsap.to(card.querySelector(".card-icon"), {
          y: -10,
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(card.querySelector(".card-hover-bg"), {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card.querySelector(".card-icon"), {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(card.querySelector(".card-hover-bg"), {
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <TechHeroSection />
      <TachnologyHero />

      <section
        ref={innovationSectionRef}
        // className="py-28 px-6 lg:px-16 bg-gradient-to-b from-[#0f172a] to-[#0c1a3a] text-white relative panel min-h-screen w-full px-6 lg:px-20 py-20 overflow-hidden rounded-t-3xl"
        className="py-28 px-6 lg:px-16 bg-black text-white relative panel min-h-screen w-full px-6 lg:px-20 py-20 overflow-hidden rounded-t-3xl"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#00c896]/10 blur-[100px]"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-[#0066cc]/10 blur-[100px]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/grid-pattern.svg')] bg-[length:120px_120px]"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20" ref={titleRef}>
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#00c896]/20 border border-[#00c896]/30 mb-6">
              <span className="text-sm font-medium text-[#00c896] tracking-wider">
                CORE TECHNOLOGIES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="bg-gradient-to-r from-[#00c896] to-[#00a8ff] bg-clip-text text-transparent">
                INNOVATION PILLARS
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Foundational technologies driving the future of urban mobility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Extended Range",
                desc: "Advanced battery systems delivering industry-leading range",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.75 6.75a3 3 0 0 0 0 6h.75v.75a.75.75 0 0 0 1.5 0v-.75h.75a.75.75 0 0 0 0-1.5h-.75V9a.75.75 0 0 0-1.5 0v.75H4.5a.75.75 0 0 0 0 1.5h.75a3 3 0 0 0 3-3 3 3 0 0 0-3-3h-.75a.75.75 0 0 0 0 1.5h.75z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M9.75 3.75A.75.75 0 0 0 9 4.5v15a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 0-.75-.75z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M15.75 3.75a.75.75 0 0 0-.75.75v15a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 0-.75-.75z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M19.5 12a3 3 0 0 1-3 3h-.75v.75a.75.75 0 0 1-1.5 0v-.75H13.5a.75.75 0 0 1 0-1.5h.75V12a.75.75 0 0 1 1.5 0v.75h.75a.75.75 0 0 1 0 1.5h-.75a3 3 0 0 1-3-3 3 3 0 0 1 3-3h.75a.75.75 0 0 1 0 1.5h-.75V12z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
                color: "from-[#00c896] to-[#00a8ff]",
              },
              {
                title: "Peak Performance",
                desc: "Optimized powertrains for responsive urban acceleration",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
                color: "from-[#ff6b6b] to-[#ffa36b]",
              },
              {
                title: "Smart Connectivity",
                desc: "IoT-enabled vehicles with real-time monitoring",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12"
                  >
                    <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
                color: "from-[#9d4edd] to-[#5a189a]",
              },
              {
                title: "Rapid Charging",
                desc: "Fast-charge infrastructure compatible with city grids",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
                color: "from-[#f9c74f] to-[#f8961e]",
              },
            ].map((pillar, i) => (
              <div
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
                className="relative h-full rounded-2xl overflow-hidden group p-0.5 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm"
              >
                {/* Hover background */}
                <div
                  className="card-hover-bg absolute inset-0 bg-gradient-to-br opacity-0 scale-90 transition-all duration-500 rounded-2xl z-0 group-hover:opacity-100 group-hover:scale-100"
                  style={{
                    background: (() => {
                      const colors = pillar?.color?.split(" ") || [];
                      const fromColor =
                        colors[0]?.replace("from-[", "#").replace("]", "") ||
                        "#000000";
                      const toColor =
                        colors[2]?.replace("to-[", "#").replace("]", "") ||
                        "#ffffff";
                      return `linear-gradient(135deg, ${fromColor} 0%, ${toColor} 100%)`;
                    })(),
                  }}
                ></div>

                {/* Card content */}
                <div className="relative z-10 bg-gradient-to-b from-[#0f172a] to-[#000] rounded-2xl p-8 h-full flex flex-col items-center text-center transition-all duration-500 group-hover:bg-transparent">
                  {/* Icon container */}
                  <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] group-hover:bg-transparent">
                    <div className="card-icon w-20 h-20 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] group-hover:from-transparent group-hover:to-transparent">
                      {pillar.icon}
                    </div>
                  </div>

                  <h3 className="card-title text-xl font-bold mb-4 group-hover:text-white">
                    {pillar.title}
                  </h3>
                  <p className="card-desc text-gray-300 group-hover:text-white/90">
                    {pillar.desc}
                  </p>

                  {/* Animated indicator */}
                  <div className="mt-6 w-12 h-1 bg-gradient-to-r from-gray-700 to-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-0 bg-gradient-to-r from-[#00c896] to-[#00a8ff] rounded-full transition-all duration-700 group-hover:w-full"></div>
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(8)].map((_, j) => (
                    <div
                      key={j}
                      className="absolute rounded-full bg-white/10"
                      style={{
                        width: `${Math.random() * 8 + 4}px`,
                        height: `${Math.random() * 8 + 4}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float${j % 3} ${
                          5 + Math.random() * 10
                        }s infinite ease-in-out`,
                        animationDelay: `${Math.random() * 5}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Animated grid lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
            <div className="absolute top-0 left-1/4 h-full w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
            <div className="absolute top-0 left-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
            <div className="absolute top-0 left-3/4 h-full w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
            <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Add global styles for floating animations */}
      <style jsx global>{`
        @keyframes float0 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(
              ${Math.random() * 20 - 10}px,
              ${Math.random() * 20 - 10}px
            );
          }
        }
        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(
              ${Math.random() * 15 - 7.5}px,
              ${Math.random() * 15 - 7.5}px
            );
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(
              ${Math.random() * 25 - 12.5}px,
              ${Math.random() * 25 - 12.5}px
            );
          }
        }
      `}</style>

      {/* EV Platform */}
      <section className="py-20 px-6 lg:px-16 bg-white">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Battery Intelligence */}
            <div>
              <div className="flex items-start mb-6">
                <div className="bg-[#00c896] w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl mr-4">
                  B
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a]">
                    BATTERY INTELLIGENCE
                  </h3>
                  <div className="w-16 h-1 bg-[#00c896] mt-2"></div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                Our proprietary battery management system optimizes power usage,
                extends lifespan, and provides real-time health monitoring
                through AI-driven analytics.
              </p>

              <div className="space-y-4">
                {[
                  "Predictive maintenance algorithms",
                  "Thermal management system",
                  "Fast-charge optimization",
                  "Cell-level monitoring",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#00c896] mr-3"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ride Experience */}
            <div>
              <div className="flex items-start mb-6">
                <div className="bg-[#00c896] w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl mr-4">
                  R
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a]">
                    RIDE EXPERIENCE
                  </h3>
                  <div className="w-16 h-1 bg-[#00c896] mt-2"></div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                Engineered for comfort and safety in urban environments with
                adaptive suspension, noise cancellation, and intuitive driver
                interfaces.
              </p>

              <div className="space-y-4">
                {[
                  "Ergonomic cabin design",
                  "Adaptive suspension system",
                  "Driver assistance features",
                  "Intuitive control interface",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#00c896] mr-3"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Platform Image */}
          <div className="mt-20 relative md:h-[500px] h-[250px] rounded-xl overflow-hidden">
            <Image
              // src="/technology/ev-platform.jpg"
              src="/Technology/urban8.webp"
              alt="EV Platform"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 to-transparent flex items-center">
              <div className="max-w-md p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">MODULAR EV PLATFORM</h3>
                <p>
                  Scalable architecture supporting multiple vehicle types with
                  shared core technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
