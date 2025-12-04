import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogCard({
  title,
  tag,
  image,
  author,
  date,
  href = "#",
}) {
  return (
    <Link
      href={"#"}
      className="group relative flex flex-col justify-between bg-[#f9f9f9] hover:bg-[#e6f0ff] rounded-3xl overflow-hidden transition-colors duration-500 p-4 md:p-6 min-h-[400px] shadow-sm hover:shadow-md"
    >
      {/* Image */}
      <div className="relative w-full h-52 sm:h-56 overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Tag */}
      <span className="mt-5 inline-block bg-[#e0eaf8] text-xs font-medium px-3 py-1 rounded-full text-gray-700 uppercase tracking-wide">
        {tag}
      </span>

      {/* Title */}
      <h3 className="mt-3 text-lg font-semibold text-[#1a1a1a] group-hover:text-black leading-snug transition-all duration-300">
        {title}
      </h3>

      {/* Author & Date */}
      <p className="mt-2 text-sm text-gray-500">
        {date} by <span className="text-gray-700 font-medium">{author}</span>
      </p>

      {/* Animated Arrow */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-0 translate-x-4">
        <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </Link>
  );
}
