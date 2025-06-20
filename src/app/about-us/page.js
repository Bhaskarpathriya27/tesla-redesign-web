import AboutHero from "@/components/about/AboutHero";
import CTASection from "@/components/about/CTASection";
import OurTeam from "@/components/about/OurTeam";
import ParallaxSection from "@/components/about/ParallaxSection";
import React from "react";

export default function Page() {
  return (
    <div className="w-full min-h-screen !overflow-visible">
      <AboutHero />
      <OurTeam />
      <ParallaxSection />
      <CTASection />
    </div>
  );
}
