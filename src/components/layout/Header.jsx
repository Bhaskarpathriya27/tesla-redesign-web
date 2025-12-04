"use client";
import { useEffect, useRef, useState, useEffectEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Linkedin, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);
  const THRESHOLD = 10; // px threshold to consider direction change

  // stable scroll handler using useEffectEvent so it always has latest closures
  const handleScroll = useEffectEvent(() => {
    const currentY =
      typeof window !== "undefined" && window.lenis
        ? window.lenis.scroll
        : typeof window !== "undefined"
        ? window.scrollY
        : 0;

    // small movements are ignored
    const delta = currentY - lastYRef.current;
    if (Math.abs(delta) < THRESHOLD) {
      // don't update lastYRef yet, wait for a meaningful change
      return;
    }

    if (delta > 0) {
      // scrolled down
      setShowHeader(false);
    } else if (delta < 0) {
      // scrolled up
      setShowHeader(true);
    }

    lastYRef.current = currentY;
  });

  // attach the handler to Lenis if present, otherwise attach a rAF'd scroll listener
  useEffect(() => {
    if (typeof window === "undefined") return;

    // initialize lastYRef to current scroll pos
    lastYRef.current =
      (window.lenis ? window.lenis.scroll : window.scrollY) || 0;

    if (window.lenis) {
      // Lenis exposes an event emitter
      window.lenis.on("scroll", handleScroll);
      return () => {
        try {
          window.lenis.off("scroll", handleScroll);
        } catch (e) {
          // ignore if lenis gone
        }
      };
    } else {
      // fallback: window scroll with rAF to avoid heavy events
      const onScroll = () => {
        if (tickingRef.current) return;
        tickingRef.current = true;
        requestAnimationFrame(() => {
          handleScroll();
          tickingRef.current = false;
        });
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [handleScroll]);

  // optional: show header immediately when menu opened
  useEffect(() => {
    if (open) setShowHeader(true);
  }, [open]);

  return (
    <>
      {/* Top Fixed Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 w-full z-50 px-6 py-4 flex items-center justify-center backdrop-blur-sm bg-white/10 transition-transform"
        animate={{ y: showHeader ? 0 : -120 }}
        initial={false}
        transition={{ type: "spring", stiffness: 210, damping: 26 }}
        aria-hidden={!showHeader}
      >
        <div className="w-full">
          {" "}
          <p className="font-pigarnos text-center text-black text-2xl font-bold tracking-widest">
            {" "}
            TESLA{" "}
          </p>{" "}
        </div>{" "}
        <button
          onClick={() => setOpen(true)}
          className="w-9 h-9 rounded-full bg-white flex items-center justify-center"
        >
          {" "}
          <Menu className="w-5 h-5 text-black" />{" "}
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
                          /* dropdown logic preserved (omitted here for brevity) */
                          <div />
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
                    className="bg-gradient-to-br from-[#3a3a3a] via-[#1f1f1f] to-[#0c0c0c] 
rounded-2xl h-[180px] p-6 flex justify-between items-end relative 
overflow-hidden shadow-xl hover:scale-[1.01] transition-transform duration-300"
                  >
                    <Link
                      href={"/contact"}
                      className="text-white z-10"
                      onClick={() => setOpen(false)}
                    >
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
