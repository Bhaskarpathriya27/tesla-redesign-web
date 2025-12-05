// src/app/layout.js
import "./globals.css";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import LenisProvider from "@/components/layout/SmoothScrollProvider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import TransitionProvider from "@/hooks/TransitionProvider";

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const pigarnos = localFont({
  src: [
    {
      path: "../../public/fonts/my-font.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-pigarnos",
  display: "swap",
});

export const metadata = {
  title: "Tesla — Redefined | Futuristic Electric Mobility Experience",
  description:
    "A visionary redesign of Tesla’s digital experience. Explore reimagined electric vehicles, energy products, futuristic UI concepts, and immersive transitions—crafted for a cleaner, smarter, sustainable future.",
  keywords: [
    "Tesla redesign",
    "Tesla UI design",
    "Electric vehicles",
    "EV design concept",
    "Tesla website concept",
    "Futuristic UI",
    "Sustainable mobility",
    "Tesla Powerwall",
    "Tesla Model S",
    "Electric mobility",
  ],
  openGraph: {
    title: "Tesla — Redefined | A Futuristic Website Concept",
    description:
      "Experience a next-generation redesign of Tesla’s website—sleek UI, bold visuals, advanced interactions, and a forward-thinking digital identity.",
    url: "https://tesla-concept-redesigned.vercel.app/",
    siteName: "Tesla Redesign Concept",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tesla — Redefined | Futuristic Electric Mobility Experience",
    description:
      "An immersive Tesla redesign concept featuring modern visuals, clean UI, and futuristic energy & vehicle showcases.",
  },
};

export default function RootLayout({ children }) {
  // add both variables to html so both CSS vars are available
  return (
    <html lang="en" className={`${space.variable} ${pigarnos.variable}`}>
      <body className="antialiased">
        <TransitionProvider>
          <LenisProvider options={{ smooth: true, duration: 1.0 }}>
            <Header />
            {children}
            <Footer />
          </LenisProvider>
        </TransitionProvider>
      </body>
    </html>
  );
}
