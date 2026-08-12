"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { NavLink } from "@/types";

function getHashId(href: string): string | null {
  if (href.startsWith("/#")) return href.slice(2);
  if (href.startsWith("#")) return href.slice(1);
  return null;
}

function isPathLink(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("/#");
}

function getSpySectionId(link: NavLink): string | null {
  if (link.sectionId) return link.sectionId;
  return getHashId(link.href);
}

export function useActiveNavLink(links: readonly NavLink[]): string {
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const routeMatch = links.find(
      (link) =>
        isPathLink(link.href) &&
        link.href !== "/" &&
        (pathname === link.href || pathname.startsWith(`${link.href}/`)),
    );

    if (routeMatch) {
      setActiveHref(routeMatch.href);
      return;
    }

    if (pathname !== "/") {
      setActiveHref("");
      return;
    }

    const hashTargets = links
      .map((link) => {
        const id = getSpySectionId(link);
        if (!id) return null;
        const element = document.getElementById(id);
        return element ? { href: link.href, element } : null;
      })
      .filter(Boolean) as { href: string; element: HTMLElement }[];

    const homeLink = links.find((link) => link.href === "/");
    const ratios = new Map<Element, number>();

    const syncActive = () => {
      let bestHref = "";
      let bestRatio = 0;

      for (const target of hashTargets) {
        const ratio = ratios.get(target.element) ?? 0;
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestHref = target.href;
        }
      }

      if (bestHref) {
        setActiveHref(bestHref);
      }
    };

    setActiveHref(homeLink?.href ?? "");

    if (hashTargets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(
            entry.target,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        }
        syncActive();
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    hashTargets.forEach(({ element }) => observer.observe(element));

    return () => observer.disconnect();
  }, [links, pathname]);

  return activeHref;
}
