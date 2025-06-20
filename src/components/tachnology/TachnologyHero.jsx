/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TachnologyPillar from "./TachnologyPillar";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function TechnologyHero() {
  const line1Ref = useRef(null);
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    // Split text animations
    const split = new SplitType(line1Ref.current, { types: "words" });

    // Title animation
    gsap.from(split.words, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power4.out",
      delay: 0.3,
    });

    // Image box animation
    gsap.set(boxRef.current, { opacity: 0, x: -100 });
    gsap.set(textRef.current, { x: -150, y: 0 });

    const tl = gsap.timeline({ delay: 1.2 });

    tl.to(boxRef.current, {
      x: 0,
      y: -20,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
    }).to(
      textRef.current,
      {
        x: 0,
        duration: 0.8,
        ease: "power4.out",
      },
      "<"
    );

    // Icon animations with GSAP
    iconRefs.current.forEach((icon, index) => {
      // Pulse animation
      gsap.to(icon, {
        y: -50,
        duration: 2.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1 + index * 0.2,
      });

      // Rotation animation on hover
      const iconElement = icon.querySelector("svg");
      gsap.set(iconElement, { transformOrigin: "center" });

      icon.addEventListener("mouseenter", () => {
        gsap.to(iconElement, {
          rotation: 15,
          duration: 0.5,
          ease: "back.out(2)",
        });
      });

      icon.addEventListener("mouseleave", () => {
        gsap.to(iconElement, {
          rotation: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
        });
      });
    });

    // Panel pinning
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

    // Force full refresh after layout settles
    requestAnimationFrame(() => {
      setTimeout(() => ScrollTrigger.refresh(), 50);
    });

    return () => {
      triggers.forEach((t) => t.kill());
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div className="w-full relative overflow-hidden">
      <section className="panel min-h-screen w-full px-6 lg:px-20 md:py-20 py-4 overflow-hidden bg-gray-50 to-white relative text-[#111] rounded-t-3xl">
        <TachnologyPillar />
      </section>
    </div>
  );
}
