"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={ref}
      className="relative h-[80vh] w-full overflow-hidden bg-black"
    >
      {/* Background Image with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 opacity-40 scale-110 will-change-transform"
      >
        <Image
          src="/team/team.jpg"
          alt="Parallax EV Background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-6xl font-normal tracking-tight leading-tight"
        >
          Redefining Urban Mobility
          <br />
          with Intelligence and Design
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-white/80 max-w-3xl text-lg"
        >
          Born from the legacy of Euler Motors, we carry forward deep EV
          expertise to create solutions that are sustainable, smart, and built
          for tomorrow’s cities. Our mission is simple — transform how cities
          move through electric innovation that’s elegant and efficient.
        </motion.p>
      </div>
    </section>
  );
}
