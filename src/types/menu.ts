export type MenuCategoryId =
  | "breakfast"
  | "starters"
  | "main-courses"
  | "ethiopian-specialties"
  | "international-cuisine"
  | "desserts"
  | "hot-beverages"
  | "cold-beverages"
  | "coffee";

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
}

export type DietaryTag =
  | "vegetarian"
  | "vegan"
  | "gluten-free"
  | "spicy"
  | "contains-nuts";

export interface MenuItemImage {
  src: string;
  alt: string;
}

export interface MenuItem {
  id: string;
  category: MenuCategoryId;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: MenuItemImage;
  dietary?: DietaryTag[];
  featured?: boolean;
}
