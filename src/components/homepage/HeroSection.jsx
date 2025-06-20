"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  PlayCircle,
  Gauge,
  Zap,
  ShieldCheck,
  BatteryCharging,
  Bolt,
  ArrowRightCircle,
  FastForward,
} from "lucide-react";
import { PointerHighlight } from "../ui/pointer-highlight";

// Features Data
const features = [
  {
    icon: <BatteryCharging className="w-5 h-5 text-blue-600" />,
    label: "50 km in 15 mins",
  },
  {
    icon: <Gauge className="w-5 h-5 text-blue-600" />,
    label: "200 km ARAI Range",
  },
  {
    icon: <Zap className="w-5 h-5 text-blue-600" />,
    label: "Lithium-ion Battery",
  },
  {
    icon: <FastForward className="w-5 h-5 text-blue-600" />,
    label: "Drive Modes (45 / 60 km/h)",
  },
  { icon: <Bolt className="w-5 h-5 text-blue-600" />, label: "Torque: 72 Nm" },
  {
    icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    label: "5 Yr Battery Warranty",
  },
  {
    icon: <ArrowRightCircle className="w-5 h-5 text-blue-600" />,
    label: "Real Range 150+ km",
  },
];

// Animation Variants
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroRevealHiCityRadial() {
  const scrollRef = useRef(null);
  const scrollAnim = useAnimation();

  useEffect(() => {
    scrollAnim.start({
      x: ["0%", "-50%"],
      transition: { duration: 50, ease: "linear", repeat: Infinity },
    });
  }, [scrollAnim]);

  return (
    <motion.div
      initial={{
        scale: 0.9,
      }}
      animate={{
        scale: 1,
      }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
      className=" rounded-xl shadow-xl overflow-hidden"
    >
      <section className="w-full min-h-screen bg-gradient-to-b from-[#d3e9ff] to-white font-[Urbanist] flex flex-col  justify-between overflow-hidden">
        {/* Hero Main */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="flex-1 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 gap-10 md:gap-0 relative pt-20 md:pt-0"
        >
          {/* Radial Background Glow */}
          <motion.div
            className="absolute w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-blue-400 rounded-full blur-[160px] opacity-30 z-0"
            style={{ bottom: "-10%", left: "5%" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Left Image Section */}
          <motion.div
            variants={fadeUp}
            className="w-full md:w-1/2 relative z-10 flex justify-center items-end"
          >
            <Image
              src="/1.webp"
              alt="Neo HiCity"
              width={600}
              height={400}
              className="object-contain w-[80%] md:w-[500px]"
            />

            {/* Floating Card */}
            <div className="md:block hidden absolute -bottom-10 left-1/2 -translate-x-1/2 md:left-[49%] md:translate-x-0 bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-4 shadow-2xl w-[220px] text-center">
              <div className="text-sm font-medium mb-2 px-3 py-1 bg-white rounded-full inline-block shadow-sm border border-gray-300">
                + HiCity
              </div>
              <p className="text-xs text-gray-600">
                Compact. Agile. Intelligent.
              </p>
              <p className="text-2xl font-bold text-[#1e3a8a]">Urban EV</p>
            </div>
          </motion.div>

          {/* Right Text Section */}
          <motion.div
            variants={container}
            className="w-full md:w-1/2 z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm text-gray-500 mb-2 tracking-wide border-l-0 md:border-l-2 border-gray-400 pl-0 md:pl-4"
            >
              Designed for Tomorrow’s Cities
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-4"
            >
              Meet the <span className="text-blue-700">Future</span> <br />
              of
              <PointerHighlight>
                <span className="text-[#111827]">Urban Mobility</span>
              </PointerHighlight>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center md:justify-start gap-3 mt-1 mb-4"
            >
              <span className="w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow" />
              <p className="text-sm text-gray-600">
                Engineered for the Indian commute
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-base text-gray-500 max-w-xl leading-relaxed"
            >
              Neo Mobility is redefining sustainable city travel. HiCity is our
              compact, design-forward electric 3-wheeler — smartly built for
              speed, space, and next-gen performance. From the creators of Euler
              Motors, backed by deep EV expertise.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-row sm:flex-row gap-4 md:mt-8 my-5 justify-center md:justify-start"
            >
              <button className="bg-black text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 text-sm hover:bg-gray-800 transition">
                Explore Models <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-gray-400 px-6 py-3 rounded-full flex items-center justify-center gap-2 text-sm hover:bg-gray-100 transition">
                Watch Vision <PlayCircle className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features Strip */}
        <div className="w-full py-5  bg-white/50 backdrop-blur-md border-t border-gray-200 overflow-hidden rounded-t-3xl">
          <motion.div
            ref={scrollRef}
            animate={scrollAnim}
            className="flex gap-8 px-6 w-max"
          >
            {features.concat(features).map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center min-w-[140px] whitespace-nowrap"
              >
                <div className="mb-2">{item.icon}</div>
                <p className="text-sm font-medium text-gray-800 text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
