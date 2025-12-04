"use client";

import FeaturesSection from "@/components/homepage/FeaturesSection";
import NewHeroSection from "@/components/homepage/NewHeroSection";
import ProductPage from "@/components/homepage/Product";
import ProductIntro from "@/components/homepage/ProductIntro";
import { useRevealer } from "@/hooks/useRevealer";
import OurTeam from "@/components/about/OurTeam";

export default function Home() {
  useRevealer();

  return (
    <main>
      <div className="revealer relative">
        <span className="reveal-percentage font-pigarnos absolute bottom-6 right-6">
          0%
        </span>

        <span className="font-pigarnos tesla-start absolute inset-0 flex items-center justify-center">
          Engine is Starting
        </span>
      </div>

      <NewHeroSection />
      <FeaturesSection />
      <ProductIntro />
      <ProductPage />
      <OurTeam />
    </main>
  );
}
