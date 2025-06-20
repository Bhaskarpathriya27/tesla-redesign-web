// app/blog/page.tsx

import BlogGrid from "@/components/blog/BlogGrid";
import BlogHero from "@/components/blog/BlogHero";
import BlogSidebar from "@/components/blog/BlogSidebar";
import React from "react";

export default function Page() {
  return (
    <main className="w-full min-h-screen px-6 lg:px-16 py-20">
      {/* Full-width Hero */}

      <div className="mb-16">
        <BlogHero />
      </div>

      {/* Grid Layout for Blog Content + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-10">
        <div>
          {/* <BlogGrid /> */}
          <BlogGrid />
        </div>

        <aside className="sticky top-28 h-fit">
          <BlogSidebar />
        </aside>
      </div>
    </main>
  );
}
