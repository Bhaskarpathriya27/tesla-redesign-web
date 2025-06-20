"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCTASection() {
  return (
    <>
      {/* ==== CTA SECTION ==== */}
      <section className="relative w-full bg-[#0f172a] py-28 px-6 overflow-hidden">
        {/* BACKGROUND GLOW ORBS */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#00c896]/20 rounded-full blur-[120px] z-0" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] z-0" />

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Power your fleet with{" "}
            <span className="text-[#00c896]">HiRange</span>.
          </h2>
          <p className="text-white/70 mt-4 text-base sm:text-lg max-w-xl mx-auto">
            Built for logistics. Designed for the future. Let’s electrify your
            business together.
          </p>

          {/* CTA BUTTON */}
          <motion.a
            href="/contact-us"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-3 bg-[#00c896] text-black px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-[#00c896]/60 transition-all duration-300"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}
