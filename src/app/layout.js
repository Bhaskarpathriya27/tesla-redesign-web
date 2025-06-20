// app/layout.js
// import Footer from "@/components/layout/Footer";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import NewHeader from "@/components/layout/HeaderNew";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import { Urbanist } from "next/font/google";

// ✅ Load font with weights
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Neo Mobility",
  description: "Redefining urban mobility with electric innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} `}>
        <SmoothScrollProvider>
          <NewHeader />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
