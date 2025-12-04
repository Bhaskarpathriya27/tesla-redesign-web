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
  title: "Neo Mobility",
  description: "Redefining urban mobility with electric innovation.",
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
