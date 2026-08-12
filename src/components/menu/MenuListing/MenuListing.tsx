import { Section } from "@/components/common/Section";
import { PageContainer } from "@/components/ui";
import { MenuCategoryNav } from "@/components/menu/MenuCategoryNav";
import { MenuSection } from "@/components/menu/MenuSection";
import {
  MENU_CATEGORIES,
  MENU_PAGE_CONTENT,
  getMenuItemsByCategory,
} from "@/data/menu";
import styles from "./MenuListing.module.css";

export function MenuListing() {
  return (
    <>
      <MenuCategoryNav categories={MENU_CATEGORIES} />

      <Section
        variant="default"
        padding="default"
        ariaLabel="Restaurant menu"
        className={styles.section}
      >
        <PageContainer>
          <p className={styles.notice}>{MENU_PAGE_CONTENT.demoNotice}</p>

          <div className={styles.sections}>
            {MENU_CATEGORIES.map((category, index) => (
              <MenuSection
                key={category.id}
                category={category}
                items={getMenuItemsByCategory(category.id)}
                index={index}
              />
            ))}
          </div>
        </PageContainer>
      </Section>
    </>
  );
}
