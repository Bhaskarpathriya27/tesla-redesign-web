import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#E6F0FF] text-[#1a1a1a] min-h-screen px-6 md:px-16 lg:px-32 py-20 z-10">
      <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-black/10 to-transparent z-0" />

      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="text-5xl md:text-7xl font-normal leading-none tracking-tight text-black">
          BUILT <br /> FOR THE CITY
        </div>
        <div className="text-5xl md:text-7xl font-normal leading-none tracking-tight text-black">
          POWERED <br /> BY DESIGN
        </div>
      </div>

      {/* Grid Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 text-sm">
        <div>
          <p className="font-medium text-black mb-3">Connect</p>
          <ul className="space-y-2 underline underline-offset-4">
            <li>
              <a href="#" className="hover:text-neutral-600">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-600">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-600">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-600">
                YouTube
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-black mb-3">Reach Us</p>
          <p className="mb-4 underline underline-offset-4 hover:text-neutral-600">
            Neo Mobility HQ <br /> New Delhi, India
          </p>
          <p className="mb-2">E: contact@neomobility.in</p>
          <p>P: +91 98765 43210</p>
        </div>

        <div>
          <p className="font-medium text-black mb-3">Explore</p>
          <ul className="space-y-2 underline underline-offset-4">
            <li>
              <a href="#" className="hover:text-neutral-600">
                Our Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-600">
                Technology
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-600">
                Media & Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-600">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-2">
        <p>© 2025 Neo Mobility. All rights reserved.</p>
        <p>
          Designed for the future.{" "}
          <a href="#" className="underline hover:text-black">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}
