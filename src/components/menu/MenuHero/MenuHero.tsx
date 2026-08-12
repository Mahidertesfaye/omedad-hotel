"use client";

import { PageHero } from "@/components/ui/PageHero";
import { MENU_PAGE_CONTENT } from "@/data/menu";

export function MenuHero() {
  return (
    <PageHero
      title={MENU_PAGE_CONTENT.title}
      description={MENU_PAGE_CONTENT.subtitle}
      breadcrumb={MENU_PAGE_CONTENT.breadcrumb}
      imageSrc="/images/restaurant/placeholder.svg"
      headingId="menu-hero-heading"
      pattern="weave"
    />
  );
}
