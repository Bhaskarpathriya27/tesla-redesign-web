"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScrollProvider({ children }) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: true, // ✅ enables smooth scrolling on touch devices
      touchMultiplier: 1,
      syncTouch: true, // ✅ syncs touch events with the scroll
      infinite: false, // ✅ disables infinite scrolling
    });

    // ✅ This is where you assign it globally
    window.lenis = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
