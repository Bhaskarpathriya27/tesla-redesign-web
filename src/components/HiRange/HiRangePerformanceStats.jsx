"use client";
import { motion } from "framer-motion";

export default function HiRangeRangeStats() {
  const stats = [
    {
      value: "94",
      unit: "kmph",
      label: "Top Speed",
    },
    {
      value: "4.5",
      unit: "kWh",
      label: "Battery Capacity",
    },
    {
      value: "750",
      unit: "w",
      label: "Fast Charging",
    },
  ];

  return (
    <section className="w-full bg-[#f8fdfc] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800"
        >
          Limitless Adventures, Powered by Innovation
        </motion.h2>

        <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
          Turn heads with bold styling, say goodbye to range anxiety, and enjoy
          unmatched storage. This ride is built to impress and perform!
        </p>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {/* LEFT – Big Range */}
          <div className="text-center space-y-3">
            <h3 className="text-[80px] sm:text-[100px] leading-none font-extrabold text-neutral-800">
              200<span className="text-[#00c896]">+</span>
              <span className="text-3xl align-top"> km</span>
            </h3>
            <p className="text-gray-500 font-semibold">IDC Range*</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-32 bg-gray-300" />

          {/* RIGHT – Metrics */}
          <div className="grid grid-cols-1 gap-8 text-left">
            {stats.map((item, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-neutral-800">
                  {item.value}
                  <span className="text-sm font-medium ml-1">{item.unit}</span>
                </p>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
