"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/utils";
import styles from "./NavBackButton.module.css";

interface NavBackButtonProps {
  isScrolled: boolean;
}

export function NavBackButton({ isScrolled }: NavBackButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      className={cn(styles.back, isScrolled && styles.scrolled)}
      onClick={() => router.back()}
      aria-label="Go back"
    >
      <ChevronLeft aria-hidden="true" strokeWidth={1.75} />
    </button>
  );
}
