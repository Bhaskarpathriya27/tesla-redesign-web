"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "../ui/Marque";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const items = ["TESLA | ", "INNOVATIVE - ", "FUTURISTIC - ", "SUSTAINABLE"];

  return (
    <footer className="w-full bg-[#e2e2e2] text-black">
      {/* Top footer content */}
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-0 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* Left: nav + social columns */}
          <div className="grid gap-10 sm:grid-cols-2 text-sm">
            <div>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Vehicles
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Energy
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-4">
                <li>
                  <Link href="https://facebook.com" className="hover:underline">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com" className="hover:underline">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="https://linkedin.com" className="hover:underline">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://instagram.com"
                    className="hover:underline"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="https://youtube.com" className="hover:underline">
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: newsletter block */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-normal leading-snug">
              Our newsletters are a concentrated blast of all the latest
              insights from Tesla.
            </h3>
            <p className="text-sm text-neutral-700">
              No spam – Unsubscribe anytime.
            </p>

            <form className="mt-4 flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="First name"
                className="h-11 w-full sm:w-40 rounded-md border border-neutral-300 bg-white px-3 text-sm outline-none focus:border-black"
              />
              <input
                type="text"
                placeholder="Last name"
                className="h-11 w-full sm:w-40 rounded-md border border-neutral-300 bg-white px-3 text-sm outline-none focus:border-black"
              />
              <button
                type="submit"
                className="h-11 px-6 rounded-md bg-black text-white text-sm font-medium hover:bg-neutral-900 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* <Marquee items={items} className="" /> */}
    </footer>
  );
}
