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
      const homeLink = links.find((link) => link.href === "/");
      setActiveHref(homeLink?.href ?? "");
      return;
    }

    const hashTargets = links
      .map((link) => {
        const id = getHashId(link.href);
        if (!id) return null;
        const element = document.getElementById(id);
        return element ? { href: link.href, element } : null;
      })
      .filter(Boolean) as { href: string; element: HTMLElement }[];

    const homeLink = links.find((link) => link.href === "/");
    setActiveHref(homeLink?.href ?? links[0]?.href ?? "");

    if (hashTargets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const match = hashTargets.find(
            (target) => target.element === visible[0].target,
          );
          if (match) {
            setActiveHref(match.href);
            return;
          }
        }

        if (window.scrollY < 120 && homeLink) {
          setActiveHref(homeLink.href);
        }
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
