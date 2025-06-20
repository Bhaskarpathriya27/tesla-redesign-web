"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import HeroSection from "@/components/HiRange/HeroSection";
import KeySpecsSection from "@/components/HiRange/KeySpecsSection";
import BatteryIntelligenceSection from "@/components/HiRange/BatteryIntelligenceSection";
import FinalCTASection from "@/components/HiRange/FinalCTASection";
import HiRangePerformanceStats from "@/components/HiRange/HiRangePerformanceStats";
import UseCaseGridSection from "@/components/HiRange/UseCases";
import ScrollSplitTransition from "@/components/HiRange/ScrollSplitTransition";

export default function HiRange() {
  const overlayRef = useRef(null);
  const pathsRef = useRef([]);
  const numPoints = 10;
  const delayPointsMax = 0.3;
  const delayPerPath = 0.25;
  const duration = 0.9;
  const numPaths = 3;
  const allPoints = [];

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const overlay = overlayRef.current;
    const paths = pathsRef.current;
    const pointsDelay = [];
    const tl = gsap.timeline({
      onUpdate: render,
      onComplete: () => {
        // Fade out overlay
        gsap.to(overlay, {
          opacity: 0,
          duration: 1,
          onComplete: () => setShowContent(true),
        });
      },
    });

    for (let i = 0; i < numPaths; i++) {
      let points = [];
      allPoints.push(points);
      for (let j = 0; j < numPoints; j++) {
        points.push(100);
      }
    }

    for (let i = 0; i < numPoints; i++) {
      pointsDelay[i] = Math.random() * delayPointsMax;
    }

    for (let i = 0; i < numPaths; i++) {
      let points = allPoints[i];
      let pathDelay = delayPerPath * i;
      for (let j = 0; j < numPoints; j++) {
        let delay = pointsDelay[j];
        tl.to(points, { [j]: 0, duration }, delay + pathDelay);
      }
    }

    function render() {
      for (let i = 0; i < numPaths; i++) {
        let path = paths[i];
        let points = allPoints[i];
        let d = `M 0 0 V ${points[0]} C`;
        for (let j = 0; j < numPoints - 1; j++) {
          let p = ((j + 1) / (numPoints - 1)) * 100;
          let cp = p - ((1 / (numPoints - 1)) * 100) / 2;
          d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${
            points[j + 1]
          }`;
        }
        d += ` V 100 H 0`;
        path.setAttribute("d", d);
      }
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#eaf1f9] text-black font-serif">
      {/* SVG Shape Overlay */}
      <svg
        ref={overlayRef}
        className="shape-overlays pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 50,
          background: "#181818", // Dark bg for better visual
        }}
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#eaf1f9" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7e22ce" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>
        {[...Array(3)].map((_, i) => (
          <path
            key={i}
            ref={(el) => (pathsRef.current[i] = el)}
            className="shape-overlays__path"
            fill={`url(#gradient${i + 1})`}
          />
        ))}
      </svg>

      {/* Page Content (after overlay fadeout) */}
      {showContent && (
        <div className="relative bg-[#f8fdfc]">
          <HeroSection />
          <HiRangePerformanceStats />
          <KeySpecsSection />
          <BatteryIntelligenceSection />
          <UseCaseGridSection />
          <ScrollSplitTransition />
          <FinalCTASection />
        </div>
      )}
    </div>
  );
}
