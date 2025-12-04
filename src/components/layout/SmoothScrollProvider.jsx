// app/components/LenisProvider.jsx
"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children, options = {} }) {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // default options — override by passing options prop
    const defaultOptions = {
      duration: 1.2, // animation duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth ease
      smooth: true,
      direction: "vertical",
      // wheelMultiplier: 1, // tweak if needed
    };

    // create Lenis instance if not already
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({ ...defaultOptions, ...options });
    }
    const lenis = lenisRef.current;

    // RAF loop required by Lenis
    const raf = (time) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    // optional: expose to window for debugging
    // window.__lenis = lenis;

    return () => {
      // cleanup RAF and destroy instance
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, [options]);

  // Provide children directly — Lenis works on document scrolling by default.
  return <>{children}</>;
}
