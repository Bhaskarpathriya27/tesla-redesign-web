"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

export default function OurTeam() {
  const teamContent = [
    {
      heading: "Fueled by Collaboration",
      quote:
        "At Neo Mobility, every idea begins with a conversation — in breakout rooms, on whiteboards, and over shared coffee. We move fast because we move together.",
      src: "/team/1.jpg",
    },
    {
      heading: "A Culture of Learning",
      quote:
        "We invest in minds that question, challenge, and build. Whether in strategy rooms or technical deep dives, our team thrives on curiosity and mutual growth.",
      src: "/team/2.jpg",
    },
    {
      heading: "Engineering the Future",
      quote:
        "Precision meets passion in every product review and code sprint. From design to deployment, we build with intent — pushing boundaries of electric mobility.",
      src: "/team/3.jpg",
    },
    {
      heading: "Driven by Purpose",
      quote:
        "It’s not just about what we build, but why. Our team shows up every day with the ambition to make cities cleaner, commutes smarter, and lives better.",
      src: "/team/4.jpg",
    },
    {
      heading: "Together, We’re Unstoppable",
      quote:
        "Across departments, disciplines, and desks — we share a single mission: to reimagine mobility for the modern world. And we’re just getting started.",
      src: "/team/5.jpg",
    },
  ];

  return (
    <section className="w-full min-h-screen font-sans antialiased bg-white py-28 px-6 lg:px-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
        className="text-left max-w-7xl mx-auto"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-5xl font-normal font-sans antialiased text-gray-900"
        >
          The minds behind the movement.
        </motion.h2>
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-5xl font-normal font-sans antialiased text-blue-500"
        >
          Visionaries, engineers, and creators
        </motion.h2>
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-5xl font-normal font-sans antialiased text-gray-900"
        >
          pushing the edge of what’s possible in electric mobility.
        </motion.h2>
      </motion.div>

      <AnimatedTestimonials testimonials={teamContent} />
    </section>
  );
}
