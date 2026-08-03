"use client";

import { useEffect, useState } from "react";
import { NAV_SCROLL_THRESHOLD } from "@/constants/navigation";

export function useScrollState(threshold = NAV_SCROLL_THRESHOLD): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}
