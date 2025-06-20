import Image from "next/image";
import { Eye, MessageCircle, CalendarDays } from "lucide-react";
import Link from "next/link";

export default function BlogHero({
  title,
  date = "May 30, 2025",
  views = 6941,
  comments = 3,
}) {
  return (
    <section className="w-full max-w-5xl mx-auto text-center space-y-6 px-4 md:px-0">
      {/* Breadcrumb */}
      <div className="flex justify-center items-center text-sm text-gray-500 gap-1">
        <Link href="/" className="hover:text-indigo-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-indigo-600 transition-colors">
          BLOGS
        </Link>
        <span>/</span>
        <span className="text-indigo-600 font-medium">WEB DEVELOPMENT</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-normal text-[#0f172a] tracking-tight leading-tight">
        {title ||
          "Early Black Friday Amazon deals: cheap TVs, headphones, laptops"}
      </h1>

      {/* Meta Info */}
      <div className="flex justify-center items-center gap-4 text-gray-500 text-sm">
        <span className="flex items-center gap-1">
          <Eye size={16} /> {views.toLocaleString()}
        </span>
        <span className="flex items-center gap-1">
          <MessageCircle size={16} /> {comments}
        </span>
        <span className="flex items-center gap-1">
          <CalendarDays size={16} /> {date}
        </span>
      </div>

      {/* Image */}
      <div className="mt-6 w-full overflow-hidden rounded-3xl shadow-xl">
        <Image
          src="/blog/4.webp" // dynamic image src
          alt="Blog Visual"
          width={1200}
          height={600}
          className="w-full object-cover rounded-3xl"
        />
      </div>
    </section>
  );
}
