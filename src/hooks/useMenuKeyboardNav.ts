"use client";

import { useEffect, type RefObject } from "react";

export function useMenuKeyboardNav(
  containerRef: RefObject<HTMLElement | null>,
  isEnabled: boolean,
): void {
  useEffect(() => {
    const container = containerRef.current;
    if (!isEnabled || !container) return;

    const getFocusableLinks = () =>
      Array.from(container.querySelectorAll<HTMLAnchorElement>("a[href]"));

    const handleKeyDown = (event: KeyboardEvent) => {
      const links = getFocusableLinks();
      if (links.length === 0) return;

      const activeIndex = links.indexOf(
        document.activeElement as HTMLAnchorElement,
      );

      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        const nextIndex =
          activeIndex === -1 ? 0 : (activeIndex + 1) % links.length;
        links[nextIndex]?.focus();
      }

      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        const prevIndex =
          activeIndex === -1
            ? links.length - 1
            : (activeIndex - 1 + links.length) % links.length;
        links[prevIndex]?.focus();
      }

      if (event.key === "Home") {
        event.preventDefault();
        links[0]?.focus();
      }

      if (event.key === "End") {
        event.preventDefault();
        links[links.length - 1]?.focus();
      }
    };

    container.addEventListener("keydown", handleKeyDown);

    return () => container.removeEventListener("keydown", handleKeyDown);
  }, [containerRef, isEnabled]);
}
