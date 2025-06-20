"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogHero from "@/components/blog/BlogDetailHero";

export default function Page({ params }) {
  const { slug } = params;
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        pageRef.current,
        { opacity: 0, y: "100%" },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.main
      ref={pageRef}
      className="w-full min-h-screen px-4 md:px-10 lg:px-20 py-20 bg-[#f1f5f9] text-[#0f172a] relative overflow-hidden"
    >
      {/* Background Floating Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#6366f1]/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#3730a3]/30 rounded-full blur-2xl z-0" />

      {/* Hero */}
      <div className="relative z-10">
        <BlogHero
          title="The Future of Electric Urban Mobility"
          date="May 30, 2025"
          views={15327}
          comments={12}
        />
      </div>

      {/* Main Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-12 mt-20">
        {/* Blog Content */}
        {/* Blog Content - Developer Style Layout */}
        <div className="bg-white rounded-2xl shadow-sm px-6 md:px-10 py-10 space-y-8 text-[1.05rem] leading-relaxed text-slate-800">
          <p>
            In today’s digital age, having a responsive website is no longer
            optional—it’s a necessity. With the increasing variety of devices
            used to access the web, from smartphones and tablets to laptops and
            large desktop monitors, developers face the challenge of ensuring a
            seamless experience across all screen sizes.
          </p>

          <p>
            This article offers essential tips and tricks for modern developers
            to create responsive websites that not only look great but also
            perform efficiently.
          </p>

          <h2 className="text-2xl font-semibold text-[#0f172a]">
            Adopt a Mobile-First Approach
          </h2>
          <p>
            Starting with mobile design and then scaling up is a widely
            recommended approach. By prioritizing the mobile experience,
            developers can ensure that the most critical content is accessible
            on smaller screens. Once the mobile version is optimized, expanding
            to larger screens becomes much easier.
          </p>

          <h2 className="text-2xl font-semibold text-[#0f172a]">
            Use Fluid Grid Layouts
          </h2>
          <p>
            A fluid grid layout is the backbone of a responsive design. Unlike
            fixed layouts, fluid grids use relative units like percentages
            instead of pixels, allowing the layout to adjust smoothly across
            different screen sizes. Popular frameworks like{" "}
            <a href="#" className="text-indigo-600 underline">
              Bootstrap
            </a>{" "}
            and Foundation offer pre-built grid systems that simplify the
            implementation of fluid grids.
          </p>

          <h2 className="text-2xl font-semibold text-[#0f172a]">
            Leverage Media Queries
          </h2>
          <p>
            Media queries are CSS techniques that apply styles based on the
            screen size or device characteristics. By using media queries,
            developers can create breakpoints in their design, ensuring that the
            layout adapts to different screen widths.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Set Breakpoints</strong>: Define breakpoints for different
              screen sizes (e.g., 600px, 768px, 1024px)
            </li>
            <li>
              <strong>Adjust Font Sizes</strong>: Use media queries to change
              font sizes for readability on smaller screens.
            </li>
            <li>
              <strong>Modify Layout</strong>: Rearrange or hide certain elements
              based on the screen size to maintain a clean design.
            </li>
          </ul>
        </div>

        {/* Sidebar */}
        <aside className="sticky top-28 h-fit z-20">
          <BlogSidebar theme="light" />
        </aside>
      </div>
    </motion.main>
  );
}
