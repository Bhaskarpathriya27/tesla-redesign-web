"use client";
import React, { useState, useEffect, useRef } from "react";
import BlogCard from "./BlogCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

gsap.registerPlugin(ScrollTrigger);

const allBlogs = [
  {
    title: "5 Essential Tips for Designing a Memorable Brand Logo",
    author: "John Smith",
    date: "December 15, 2022",
    image: "/blog/1.webp",
    tag: "Branding",
    href: "/blog/designing-a-memorable-brand-logo",
  },
  {
    title: "The Dos and Don'ts of Social Media Marketing in 2022",
    author: "Sarah Johnson",
    date: "December 10, 2022",
    image: "/blog/2.webp",
    tag: "Social Media",
    href: "/blog/social-media-dos-and-donts-2022",
  },
  {
    title: "The Power of Video Marketing...",
    author: "Lisa Chen",
    date: "November 20, 2022",
    image: "/blog/3.webp",
    tag: "Video Marketing",
    href: "/blog/animated-explainer-video-strategy",
  },
  {
    title: "Designing for Accessibility...",
    author: "Alex Lee",
    date: "November 8, 2022",
    image: "/blog/4.webp",
    tag: "UX Design",
    href: "/blog/accessibility-best-practices",
  },
];

const tags = [
  "All",
  "Branding",
  "Social Media",
  "Video Marketing",
  "UX Design",
];

export default function BlogGrid() {
  const [search, setSearch] = useState("");
  const [filterTag, setFilterTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;

  const gridRef = useRef(null);
  const animatedCardsRef = useRef(new Set());

  const filteredBlogs = allBlogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesTag = filterTag === "All" || blog.tag === filterTag;
    return matchesSearch && matchesTag;
  });

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const blogsToRender = filteredBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  // Animate on scroll
  useEffect(() => {
    const cards = gsap.utils.toArray(".blog-card");

    cards.forEach((card) => {
      if (animatedCardsRef.current.has(card)) return;

      animatedCardsRef.current.add(card);

      gsap.fromTo(
        card,
        { y: 80, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });
  }, [blogsToRender]);

  return (
    <section className="space-y-10">
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search blog titles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <select
          value={filterTag}
          onChange={(e) => {
            setFilterTag(e.target.value);
            setCurrentPage(1); // reset page on filter change
          }}
          className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Blog Grid */}
      <div ref={gridRef} className="grid sm:grid-cols-2 gap-10 pt-4">
        {blogsToRender.length > 0 ? (
          blogsToRender.map((item, i) => (
            <div className="blog-card" key={i}>
              <BlogCard {...item} />
            </div>
          ))
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pt-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="text-sm px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`text-sm px-3 py-1 rounded-full border ${
                currentPage === i + 1
                  ? "bg-black text-white border-black"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="text-sm px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
