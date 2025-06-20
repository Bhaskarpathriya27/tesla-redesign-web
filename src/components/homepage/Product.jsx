import { useEffect, useState } from "react";
import MobileProductScroll from "./MobileProductScroll";
import TeslaScrollEffect from "./TeslaScrollSections";

export default function ProductPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className={`${isMobile ? "block" : "hidden"}`}>
        <MobileProductScroll />
      </div>
      <div className={`${isMobile ? "hidden" : "block"}`}>
        <TeslaScrollEffect />
      </div>
    </div>
  );
}
