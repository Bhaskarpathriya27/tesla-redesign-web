"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Linkedin, ArrowLeft } from "lucide-react";
import Link from "next/link";

const ripple = `relative overflow-hidden 
  before:absolute before:inset-0 before:bg-black/10 
  hover:before:scale-125 hover:before:opacity-0 hover:bg-black hover:text-white transition
  before:transition before:duration-500 before:rounded`;

export default function NeoHeader() {
  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "About Neo", href: "/about-us" },
    {
      name: "Product",
      icon: true,
      children: [
        { name: "HiRange", href: "/product/hi-range" },
        { name: "HiCity", href: "/product/hi-city" },
        { name: "HiUrbania", href: "/product/hi-urbania" },
      ],
    },
  ];
  const bottomLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Technology", href: "/technology" },
  ];

  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // ✅ Scroll direction logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== "undefined" && window.lenis) {
        let lastY = window.lenis.scroll;

        const handleScroll = () => {
          const currentY = window.lenis.scroll;
          if (currentY > lastY + 5) {
            setShowHeader(false);
          } else if (currentY < lastY - 1) {
            setShowHeader(true);
          }
          lastY = currentY;
        };

        window.lenis.on("scroll", handleScroll);

        clearInterval(interval);

        return () => {
          window.lenis.off("scroll", handleScroll);
        };
      }
    }, 100); // Check every 100ms if lenis is ready

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top Fixed Header */}
      <motion.header
        className="fixed w-full z-50 px-6 py-4 flex justify-between items-center bg-black/10 backdrop-blur-sm transition-transform duration-300"
        animate={{ y: showHeader ? 0 : -100 }}
      >
        <span className="text-white text-lg font-bold tracking-widest">
          NEO
        </span>
        <button
          onClick={() => setOpen(true)}
          className="w-9 h-9 rounded-full bg-white flex items-center justify-center"
        >
          <Menu className="w-5 h-5 text-black" />
        </button>
      </motion.header>

      {/* Overlay Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[99] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background Blur & Left Brand */}
            <div className="w-full h-full bg-[#cfe6fe52] backdrop-blur-md relative flex justify-end overflow-hidden">
              {/* Brand Name Animation */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute left-10 top-1/2 -translate-y-1/2 text-white text-5xl font-extrabold tracking-widest select-none"
              >
                NEO Mobility
              </motion.div>

              {/* Main Card */}
              <motion.div
                initial={{ x: "100%", opacity: 0, skewX: -10 }}
                animate={{ x: 0, opacity: 1, skewX: 0 }}
                exit={{ x: "100%", opacity: 0, skewX: -10 }}
                transition={{ type: "spring", stiffness: 90, damping: 16 }}
                className="w-[95%] md:w-[50%] h-[90vh] bg-white rounded-3xl shadow-2xl p-10 flex flex-col justify-between mt-2 mr-2"
              >
                {/* Top Section */}
                <div className="flex justify-between items-start">
                  {/* Left Links with Arrow Hover */}
                  <div className="space-y-6">
                    {mainLinks.map((item, i) => (
                      <div key={i} className="space-y-2">
                        {!item.children ? (
                          <Link
                            href={item.href}
                            className="text-[26px] font-medium text-[#0f172a] flex items-center gap-2 group cursor-pointer relative font-serif"
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            onClick={() => {
                              setOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {item.name}
                            <motion.span
                              initial={{ opacity: 0, x: -10 }}
                              animate={{
                                opacity: hovered === i ? 1 : 0,
                                x: hovered === i ? 0 : -10,
                              }}
                              transition={{ duration: 0.2 }}
                              className="text-[#0f172a]"
                            >
                              <ArrowLeft size={20} />
                            </motion.span>
                          </Link>
                        ) : (
                          <>
                            <div
                              className="text-[26px] font-medium text-[#0f172a] flex items-center gap-2 font-serif cursor-pointer"
                              onClick={() =>
                                setActiveDropdown((prev) =>
                                  prev === i ? null : i
                                )
                              }
                              onMouseEnter={() => setHovered(i)}
                              onMouseLeave={() => setHovered(null)}
                            >
                              {item.name}
                              <motion.div
                                initial={{ rotate: 0 }}
                                animate={{
                                  rotate: activeDropdown === i ? 180 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-5 h-5 text-[#0f172a]"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.19l3.71-3.96a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </motion.div>
                            </div>

                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{
                                opacity: activeDropdown === i ? 1 : 0,
                                height: activeDropdown === i ? "auto" : 0,
                              }}
                              transition={{ duration: 0.3 }}
                              onMouseEnter={() => setHovered(i)}
                              onMouseLeave={() => setHovered(null)}
                              className="ml-4 overflow-hidden space-y-2"
                            >
                              {item.children.map((sub, idx) => (
                                <Link
                                  href={sub.href}
                                  key={idx}
                                  className="block text-[20px] text-[#1e293b] relative overflow-hidden group"
                                  onClick={() => {
                                    setOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                >
                                  <span className="relative z-10">
                                    {sub.name}
                                  </span>
                                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#1e293b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </Link>
                              ))}
                            </motion.div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Close */}
                  <div className="text-sm text-[#1e2b50] font-semibold flex items-center gap-2">
                    <span>Close</span>
                    <button
                      onClick={() => setOpen(false)}
                      className="w-10 h-10 bg-[#f59e0b] text-white rounded-full flex items-center justify-center"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col gap-8 mt-4">
                  {/* Ripple Links + Socials */}
                  <div className="flex items-center justify-between md:flex-row flex-col gap-6">
                    {/* Ripple Bottom Links */}
                    <div className="grid grid-cols-3 w-full gap-3 text-sm text-[#1e2b50] font-medium">
                      {bottomLinks.map((link, i) => (
                        <Link
                          key={i}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={`px-3 py-1.5 rounded-md text-left text-nowrap cursor-pointer ${ripple}`}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-3 w-full justify-end items-center md:justify-end">
                      <a
                        href="#"
                        className="bg-gray-100 hover:bg-gray-200 text-black p-2 rounded-full transition"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href="#"
                        className="bg-gray-100 hover:bg-gray-200 text-black p-2 rounded-full transition"
                      >
                        <Instagram size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Contact Card Reveal Animation */}
                  <motion.div
                    initial={{ clipPath: "inset(100% 50% 0% 50%)", opacity: 0 }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
                    exit={{ clipPath: "inset(100% 50% 0% 50%)", opacity: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.4,
                    }}
                    className="bg-gradient-to-br from-[#6366f1] via-[#3b82f6] to-[#0ea5e9] rounded-2xl h-[180px] p-6 flex justify-between items-end relative overflow-hidden shadow-xl hover:scale-[1.01] transition-transform duration-300"
                  >
                    <Link href={"/contact"} className="text-white z-10">
                      <p className="text-sm opacity-90">Contact</p>
                      <h4 className="text-lg font-semibold">
                        Let’s <span className="text-yellow-300">Talk</span>{" "}
                        <span className="text-white">Mobility</span>
                      </h4>
                      <p className="text-xs opacity-80 mt-1">
                        We’re ready to assist you.
                      </p>
                    </Link>
                    <button className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center z-10">
                      →
                    </button>
                    <div className="absolute inset-0 bg-black/10 z-0 rounded-2xl" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
