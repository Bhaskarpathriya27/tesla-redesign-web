"use client";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

export default function OurTeam() {
  const teamContent = [
    {
      heading: "Protection Against Outages",
      quote:
        "Powerwall keeps your home energized when the grid can’t. Paired with Solar Roof, it stores the clean energy you generate and delivers seamless backup power — day or night, outage or not.",
      src: "/energy/solar-roof-protection.avif",
    },
    {
      heading: "Powerwall — Energy That Works for You",
      quote:
        "Powerwall stores energy from solar or the grid, giving you control over how and when you use power. Run your home day and night, reduce reliance on the grid, and stay powered through outages or off-grid living.",
      src: "/energy/powerwall.avif",
    },
    {
      heading: "Maximum Solar Production",
      quote:
        "Solar Roof is engineered to capture the most energy possible — even on complex rooftops or in shifting sunlight. Durable glass tiles and architectural steel form a seamless, high-performance roof that pairs perfectly with Powerwall.",
      src: "/energy/maximum-solar-production.avif",
    },
    {
      heading: "Backup Protection",
      quote:
        "Powerwall is built for real-world conditions — from freezing temperatures to storms and flooding. When the grid goes down, Powerwall keeps essential systems running with dependable, weather-ready backup power.",
      src: "/energy/energy-thats-there.avif",
    },
  ];

  return (
    <section className="w-full min-h-screen  antialiased bg-white py-32 px-6 lg:px-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.25 },
          },
        }}
        className="text-left max-w-7xl mx-auto"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-5xl font-normal antialiased text-gray-900"
        >
          The People Powering the Future of Electric Mobility.
        </motion.h2>

        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-5xl font-normal antialiased text-gray-600"
        >
          Engineers, Designers & Innovators
        </motion.h2>

        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-5xl font-normal antialiased text-gray-900"
        >
          redefining what’s possible in mobility.
        </motion.h2>
      </motion.div>

      <Suspense fallback={<div className="h-[400px]" />}>
        <AnimatedTestimonials testimonials={teamContent} autoplay />
      </Suspense>
    </section>
  );
}
