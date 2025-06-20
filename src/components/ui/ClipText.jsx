"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function ClipText({ text, className = "", triggerKey = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;

    // Junk chars as base
    const placeholder = text.replace(/[a-zA-Z0-9]/g, "#");

    gsap.set(el, {
      text: placeholder,
      filter: "blur(4px)",
      opacity: 0.7,
    });

    gsap.to(el, {
      duration: 1.4,
      text: {
        value: text,
        delimiter: "",
      },
      ease: "power3.out",
      opacity: 1,
      filter: "blur(0px)",
    });
  }, [triggerKey]);

  return (
    <div
      ref={containerRef}
      className={`will-change-transform ${className}`}
      style={{
        display: "inline-block",
        whiteSpace: "pre-wrap",
        fontFamily: "monospace",
        minHeight: "1.5em",
      }}
    />
  );
}
