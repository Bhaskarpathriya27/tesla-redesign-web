/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutPillarsSection from "./AboutPillarsSection";

export default function AboutHero() {
  const line1Ref = useRef(null);
  const boxRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(line1Ref.current, { types: "words" });

    gsap.from(split.words, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power4.out",
      delay: 0.3,
    });

    gsap.set(boxRef.current, { opacity: 0, x: -100 });
    gsap.set(textRef.current, { x: -150, y: 0 });

    const tl = gsap.timeline({ delay: 1.2 });

    tl.to(boxRef.current, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
    }).to(
      textRef.current,
      {
        x: 0,
        y: 15,
        duration: 0.8,
        ease: "power4.out",
      },
      "<"
    );

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
    <div className="w-full relative overflow-hidden">
      <section className="panel h-screen">
        <div className="flex flex-col justify-center px-6 lg:px-20 pt-24 bg-white">
          <div className="flex flex-col items-start gap-1">
            <h1
              ref={line1Ref}
              className="text-5xl lg:text-[8vw] font-normal tracking-tighter leading-[1.2] text-black"
            >
              WE ARE
            </h1>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              {/* Image Box */}
              <div
                ref={boxRef}
                className="w-[160px] h-[100px] lg:w-[140px] lg:h-[100px] overflow-hidden rounded-md"
              >
                <Image
                  src="/about/content-image01.jpg"
                  alt="Neo EV Card"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Text */}
              <h1
                ref={textRef}
                className="text-5xl lg:text-[8vw] font-normal tracking-tighter leading-[0.5] text-black"
              >
                NEO MOBILITY
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-white/10 mt-20 px-6 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-3 gap-10 bg-[#181818]">
          <div>
            <p className="text-white font-medium">About us:</p>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <p className="text-white/80 max-w-3xl">
              Neo Mobility is born from the electric innovation legacy of Euler
              Motors. We're not just building EVs — we're redefining how cities
              move. With cutting-edge design, deep technology, and a relentless
              focus on sustainability, we bring the future closer to today.
            </p>

            <p className="text-white/80 max-w-3xl">
              We believe every journey counts. That's why our vehicles are
              crafted to deliver exceptional performance, intuitive
              intelligence, and purposeful design. Whether it's logistics,
              rideshare, or personal commute — Neo makes it smarter and greener.
            </p>

            <Link
              href="/our-products"
              className="inline-flex items-center border border-white text-white hover:bg-[#00FFAB] hover:text-black px-6 py-2 rounded-full transition"
            >
              OUR RANGE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <section className="panel min-h-screen w-full px-6 lg:px-20 py-20 overflow-hidden bg-gray-50 relative text-[#111] rounded-t-3xl">
        <AboutPillarsSection />
      </section>
    </div>
  );
}
