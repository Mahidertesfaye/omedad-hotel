"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import type { MenuCategory, MenuCategoryId } from "@/types/menu";
import { cn } from "@/utils";
import styles from "./MenuCategoryNav.module.css";

interface MenuCategoryNavProps {
  categories: readonly MenuCategory[];
}

export function MenuCategoryNav({ categories }: MenuCategoryNavProps) {
  const [activeId, setActiveId] = useState<MenuCategoryId>(
    categories[0]?.id ?? "breakfast",
  );  const [isStuck, setIsStuck] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
      },
      { threshold: [1] },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = categories
      .map((category) => {
        const element = document.getElementById(`menu-${category.id}`);
        return element ? { id: category.id, element } : null;
      })
      .filter(Boolean) as { id: string; element: HTMLElement }[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const nextId = visible[0].target.id.replace(
            /^menu-/,
            "",
          ) as MenuCategoryId;
          setActiveId(nextId);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach(({ element }) => observer.observe(element));
    return () => observer.disconnect();
  }, [categories]);

  const handleClick = (
    event: MouseEvent<HTMLAnchorElement>,
    categoryId: MenuCategoryId,
  ) => {
    event.preventDefault();
    const target = document.getElementById(`menu-${categoryId}`);
    if (!target) return;

    setActiveId(categoryId);
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#menu-${categoryId}`);
    }
  };

  return (
    <>
      <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />
      <nav
        className={cn(styles.nav, isStuck && styles.stuck)}
        aria-label="Menu categories"
      >
        <div className={styles.scroller}>
          <ul className={styles.list}>
            {categories.map((category) => {
              const isActive = activeId === category.id;

              return (
                <li key={category.id}>
                  <a
                    href={`#menu-${category.id}`}
                    className={cn(styles.link, isActive && styles.active)}
                    aria-current={isActive ? "true" : undefined}
                    onClick={(event) => handleClick(event, category.id)}
                  >
                    {category.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
