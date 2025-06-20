"use client";

import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import eyeBlink from "@/lottie/eye-blink.json";

const sections = [
  {
    id: "hiRange",
    title: "HiRange",
    price: "From ₹3,45,000",
    tagline: "[ Long-range electric mobility redefined ]",
    desc: "HiRange is built for businesses that demand more. With a certified range of over 200 km on a single charge, dual ride modes, and intelligent battery management, it’s designed for intercity logistics and high-efficiency operations. The premium build quality, spacious cabin, and fast-charging capabilities make it the go-to EV for delivery fleets and enterprise transport. Designed to move farther, smarter, and tougher.",
    thumbs: ["/img/model-y-1.avif", "/img/model-y-2.avif"],
    image: "/img/model-y.avif",
    url: "/product/hi-range",
  },
  {
    id: "hiCity",
    title: "HiCity",
    price: "From ₹2,95,000",
    tagline: "[ Compact. Agile. Built for the city. ]",
    desc: "HiCity is engineered for India’s dense, fast-paced urban landscapes. With a lightweight frame, superior torque, and smart diagnostics, it offers unmatched maneuverability and efficiency in traffic-heavy zones. Quick to charge and even quicker to zip through city streets, HiCity is ideal for intra-city deliveries, small businesses, and modern urban mobility needs — all packed into a highly space-efficient design.",
    thumbs: ["/img/model-x-1.avif", "/img/model-x-2.avif"],
    image: "/img/model-x.avif",
    url: "/product/hi-city",
  },
  {
    id: "hiUrbania",
    title: "HiUrbania",
    price: "From ₹3,15,000",
    tagline: "[ A new era of style-driven electric mobility ]",
    desc: "HiUrbania is where design meets performance. With a futuristic aesthetic, connected ride experience, and customizable options, it’s made for urban explorers and next-gen commuters. Whether you're navigating city nights or making a style statement on the go, HiUrbania offers comfort, performance, and identity — all powered by clean electric energy. It’s not just a ride; it’s a vibe.",
    thumbs: ["/img/model-3-1.avif", "/img/model-3-2.avif"],
    image: "/img/model-3.avif",
    url: "/product/hi-urbania",
  },
];
export default function MobileProductScroll() {
  return (
    <div className="w-full px-4 py-10 space-y-10">
      {sections.map((sec) => (
        <div
          key={sec.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {/* Image */}
          <div className="w-full h-[250px] relative">
            <Image
              src={sec.image}
              alt={sec.title}
              fill
              className="object-cover rounded-t-xl"
            />
          </div>

          {/* Content */}
          <div className="p-5 space-y-3">
            <h2 className="text-2xl font-bold text-black">{sec.title}</h2>
            <p className="text-[15px] font-semibold text-gray-800">
              {sec.price}
            </p>
            <p className="text-[16px] font-medium text-black">{sec.tagline}</p>
            <p className="text-sm text-gray-600 leading-[1.6]">{sec.desc}</p>

            <Link
              href={sec.url}
              className="mt-4 w-fit inline-flex items-center gap-3 px-5 py-2 bg-black text-white text-sm rounded-full hover:scale-105 transition-transform"
            >
              <div className="w-5 h-5">
                <Lottie animationData={eyeBlink} loop autoplay />
              </div>
              Explore
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
