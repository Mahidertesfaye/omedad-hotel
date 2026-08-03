"use client";

import { useEffect, useState } from "react";
import type { NavLink } from "@/types";

export function useActiveNavLink(links: readonly NavLink[]): string {
  const [activeHref, setActiveHref] = useState(links[0]?.href ?? "");

  useEffect(() => {
    const sections = links
      .map((link) => {
        const id = link.href.replace("#", "");
        const element = document.getElementById(id);
        return element ? { href: link.href, element } : null;
      })
      .filter(Boolean) as { href: string; element: HTMLElement }[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach(({ element }) => observer.observe(element));

    return () => observer.disconnect();
  }, [links]);

  return activeHref;
}
