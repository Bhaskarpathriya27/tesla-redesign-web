"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const useCases = [
  {
    title: "Logistics & Fleet",
    desc: "Power long-haul and intercity delivery with consistent range, durable performance, and cost-efficient EV operations designed for fleet managers.",
    img: "/usecases/1.jpg",
  },
  {
    title: "Retail & E-Commerce",
    desc: "Ensure on-time doorstep delivery for your customers with HiRange’s agile movement, smart diagnostics, and optimized charging cycles for last-mile logistics.",
    img: "/usecases/2.jpg",
  },
  {
    title: "Shared Mobility",
    desc: "Deploy HiRange for ride-sharing, employee shuttles or urban transport solutions — combining comfort, performance, and low operating costs.",
    img: "/usecases/3.jpg",
  },
  {
    title: "Municipal Services",
    desc: "Electrify sanitation, security, and civic transport with silent, emission-free HiRange vehicles optimized for city infrastructure and public service workflows.",
    img: "/usecases/4.jpg",
  },
  {
    title: "Industrial Operations",
    desc: "Move goods and personnel within large factories or campus environments with a reliable, low-maintenance EV fleet tailored for internal logistics.",
    img: "/usecases/5.jpg",
  },
  {
    title: "Food Delivery",
    desc: "Deliver fresh and hot meals across the city without range anxiety. HiRange supports food tech partners with thermal-safe, fast-acting EV deployment.",
    img: "/usecases/6.jpg",
  },
];

export default function UseCaseGridSection() {
  return (
    <section className="w-full bg-[#f8fdfc] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800">
          Powerful Across Use Cases
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-xl mx-auto">
          HiRange adapts to your industry — whether it&#39;s logistics, retail,
          mobility or public services.
        </p>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {useCases.map((item, i) => (
            <motion.div
              key={i}
              initial="initial"
              whileHover="hover"
              className="relative group h-[260px] sm:h-[300px] w-full overflow-hidden rounded-md cursor-pointer"
            >
              {/* IMAGE */}
              <motion.div
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.05 },
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 z-0"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition duration-500 ease-in-out"
                />
              </motion.div>

              {/* Overlay on hover */}
              <motion.div
                variants={{
                  initial: {
                    backdropFilter: "blur(0px)",
                    backgroundColor: "rgba(0,0,0,0)",
                  },
                  hover: {
                    backdropFilter: "blur(6px)",
                    backgroundColor: "rgba(0,0,0,0.4)",
                  },
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 z-10 flex items-center justify-center text-center text-white px-4"
                style={{
                  WebkitBackdropFilter: "blur(0px)",
                  backdropFilter: "blur(0px)",
                }}
              >
                <motion.p
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    hover: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="text-sm sm:text-base"
                >
                  {item.desc}
                </motion.p>
              </motion.div>

              {/* Title stays visible */}
              <div className="absolute top-4 left-4 z-20">
                <h3 className="text-white text-lg font-semibold drop-shadow-sm">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
