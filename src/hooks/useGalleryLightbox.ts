"use client";

import { useCallback, useEffect, useState } from "react";
import { useBodyScrollLock } from "./useBodyScrollLock";
import { useEscapeKey } from "./useEscapeKey";

interface UseGalleryLightboxReturn {
  activeIndex: number | null;
  isOpen: boolean;
  open: (index: number) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
}

export function useGalleryLightbox(
  itemCount: number,
): UseGalleryLightboxReturn {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const open = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const close = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const next = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current + 1) % itemCount;
    });
  }, [itemCount]);

  const prev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current - 1 + itemCount) % itemCount;
    });
  }, [itemCount]);

  useBodyScrollLock(isOpen);
  useEscapeKey(close, isOpen);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, next, prev]);

  return { activeIndex, isOpen, open, close, next, prev };
}
