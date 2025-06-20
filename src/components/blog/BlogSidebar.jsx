import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogSidebar() {
  const latestPosts = [
    {
      title: "The Power of Storytelling",
      date: "March 1, 2023",
      image: "/blog/5.jpg",
    },
    {
      title: "Designing for EV Brands",
      date: "Feb 18, 2023",
      image: "/blog/7.jpg",
    },
    {
      title: "Sustainable Mobility Trends 2024",
      date: "Jan 30, 2023",
      image: "/blog/6.jpg",
    },
  ];

  const tags = [
    "neo mobility",
    "urban transport",
    "ev design",
    "battery tech",
    "sustainability",
    "electric rickshaw",
  ];

  return (
    <div className="space-y-10">
      {/* Latest Posts */}
      <div>
        <h4 className="font-bold text-lg mb-4">Latest Posts</h4>
        <ul className="space-y-4 text-sm">
          {latestPosts.map((post, index) => (
            <li key={index}>
              <a
                href={post.href}
                className="group flex gap-3 items-start transition-all duration-300 hover:bg-gray-100 p-2 cursor-pointer rounded-xl"
              >
                <div className="relative w-14 h-14 rounded-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold leading-snug transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-blue-600">
                    {post.title}
                  </p>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Tags with Hover Fill Animation */}
      <div>
        <h4 className="font-bold text-lg mb-4">Popular Tags</h4>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag.replace(/\s+/g, "-").toLowerCase()}`}
              className="relative inline-block px-4 py-1 text-sm font-medium text-black border border-black rounded-full overflow-hidden group transition-all duration-300 hover:text-white"
            >
              <span className="absolute inset-0 bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out z-0" />
              <span className="relative z-10 capitalize">{tag}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
