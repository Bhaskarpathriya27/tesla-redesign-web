/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-28 px-6 lg:px-20 bg-gradient-to-br from-[#e5f1ff] via-[#f1f5ff] to-[#ffffff] text-black overflow-hidden">
      {/* Animated Glow Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-400/20 blur-3xl rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-violet-300/20 blur-2xl rounded-full"
        />
      </div>

      {/* CTA Content */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight"
        >
          Ready to Join the Electric Revolution?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-lg text-gray-700"
        >
          Whether you're a rider, partner, or believer in a cleaner tomorrow —
          let's move forward together.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 250 }}
          className="relative mt-10 px-8 py-4 rounded-full text-lg font-semibold bg-black text-white shadow-lg hover:bg-gray-900 transition"
        >
          <span className="relative z-10">Contact Us</span>
          <motion.span
            layoutId="cta-glow"
            className="absolute inset-0 z-0 rounded-full bg-indigo-500/30 blur-lg"
          />
        </motion.button>
      </div>
    </section>
  );
}
