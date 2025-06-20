"use client";

import CTASection from "@/components/layout/CTASection";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import HeroSection from "@/components/homepage/HeroSection";
import ProductPage from "@/components/homepage/Product";
import ProductIntro from "@/components/homepage/ProductIntro";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      {/* <ScrollRevealEVShowcase /> */}
      {/* <TeslaScrollEffect /> */}
      <ProductIntro />
      <ProductPage />
      <CTASection />
    </main>
  );
}
