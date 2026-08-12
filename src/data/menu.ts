import type { MenuCategory, MenuItem } from "@/types/menu";

/**
 * Demo dining menu for the dedicated Menu page.
 * Placeholder dishes only — not the hotel's real menu.
 * Replace with official Omedad Hotel offerings when available.
 */

const MENU_IMAGE = {
  src: "/images/restaurant/placeholder.svg",
  alt: "Dish placeholder — photography to be added",
} as const;

export const MENU_PAGE_CONTENT = {
  title: "Dining at Omedad",
  subtitle:
    "Discover a selection of Ethiopian favorites and international cuisine.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Dining", href: "/menu" },
  ],
  demoNotice:
    "Demo menu for design and browsing. Dishes, prices, and descriptions will be replaced with the hotel’s official restaurant menu.",
} as const;

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: "breakfast", label: "Breakfast" },
  { id: "starters", label: "Starters" },
  { id: "main-courses", label: "Main Courses" },
  { id: "ethiopian-specialties", label: "Ethiopian Specialties" },
  { id: "international-cuisine", label: "International Cuisine" },
  { id: "desserts", label: "Desserts" },
  { id: "hot-beverages", label: "Hot Beverages" },
  { id: "cold-beverages", label: "Cold Beverages" },
  { id: "coffee", label: "Coffee" },
];

export const MENU_ITEMS: MenuItem[] = [
  // Breakfast
  {
    id: "breakfast-01",
    category: "breakfast",
    name: "Omedad Breakfast Plate",
    description:
      "Eggs any style, grilled tomato, sautéed greens, artisan bread, and seasonal fruit.",
    price: 420,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Omedad Breakfast Plate" },
    dietary: ["vegetarian"],
    featured: true,
  },
  {
    id: "breakfast-02",
    category: "breakfast",
    name: "Injera & Scrambled Eggs",
    description:
      "Soft injera with gently scrambled eggs, berbere butter, and fresh herbs.",
    price: 380,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Injera and scrambled eggs" },
    dietary: ["vegetarian"],
  },
  {
    id: "breakfast-03",
    category: "breakfast",
    name: "Bircher Muesli",
    description:
      "Overnight oats with yogurt, honey, toasted almonds, and seasonal berries.",
    price: 320,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Bircher muesli bowl" },
    dietary: ["vegetarian", "contains-nuts"],
  },

  // Starters
  {
    id: "starters-01",
    category: "starters",
    name: "Lentil Sambusas",
    description:
      "Crisp pastry parcels filled with spiced lentils, served with awaze.",
    price: 280,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Lentil sambusas" },
    dietary: ["vegan", "spicy"],
  },
  {
    id: "starters-02",
    category: "starters",
    name: "House Soup of the Day",
    description:
      "A rotating selection prepared daily with seasonal vegetables and herbs.",
    price: 260,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Soup of the day" },
    dietary: ["vegetarian"],
  },
  {
    id: "starters-03",
    category: "starters",
    name: "Garden Salad",
    description:
      "Crisp greens, cucumber, tomatoes, and a light lemon-herb dressing.",
    price: 300,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Garden salad" },
    dietary: ["vegan", "gluten-free"],
  },

  // Main Courses
  {
    id: "main-01",
    category: "main-courses",
    name: "Grilled Nile Perch",
    description:
      "Pan-seared perch with citrus butter, wilted greens, and roasted potatoes.",
    price: 920,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Grilled Nile perch" },
    featured: true,
  },
  {
    id: "main-02",
    category: "main-courses",
    name: "Herb-Roasted Chicken",
    description:
      "Slow-roasted free-range chicken with pan jus and seasonal vegetables.",
    price: 780,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Herb-roasted chicken" },
  },
  {
    id: "main-03",
    category: "main-courses",
    name: "Vegetable Tagine",
    description:
      "Slow-cooked seasonal vegetables with fragrant spices and couscous.",
    price: 640,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Vegetable tagine" },
    dietary: ["vegan"],
  },

  // Ethiopian Specialties
  {
    id: "ethiopian-special-01",
    category: "ethiopian-specialties",
    name: "Doro Wot",
    description:
      "Traditional Ethiopian chicken stew simmered in berbere sauce, served with injera.",
    price: 850,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Doro Wot" },
    dietary: ["spicy"],
    featured: true,
  },
  {
    id: "ethiopian-special-02",
    category: "ethiopian-specialties",
    name: "Beef Tibs",
    description:
      "Sautéed beef with onions, rosemary, and mild chili, served with injera.",
    price: 820,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Beef Tibs" },
    dietary: ["spicy", "gluten-free"],
  },
  {
    id: "ethiopian-special-03",
    category: "ethiopian-specialties",
    name: "Kitfo",
    description:
      "Finely minced beef seasoned with mitmita and niter kibbeh, served with ayib.",
    price: 880,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Kitfo" },
    dietary: ["spicy", "gluten-free"],
    featured: true,
  },
  {
    id: "ethiopian-special-04",
    category: "ethiopian-specialties",
    name: "Shiro",
    description:
      "Silky chickpea stew finished with garlic and berbere, served with injera.",
    price: 520,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Shiro" },
    dietary: ["vegan", "spicy"],
  },
  {
    id: "ethiopian-special-05",
    category: "ethiopian-specialties",
    name: "Vegetarian Combination",
    description:
      "A generous selection of lentil, vegetable, and chickpea dishes on injera.",
    price: 680,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Vegetarian combination platter" },
    dietary: ["vegan"],
  },
  {
    id: "ethiopian-special-06",
    category: "ethiopian-specialties",
    name: "Misir Wot",
    description:
      "Red lentil stew slow-cooked with berbere and clarified butter aromatics.",
    price: 480,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Misir Wot" },
    dietary: ["vegan", "spicy"],
  },

  // International Cuisine
  {
    id: "intl-01",
    category: "international-cuisine",
    name: "Grilled Ribeye Steak",
    description:
      "Prime ribeye with roasted garlic butter, fries, and peppercorn sauce.",
    price: 1450,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Grilled ribeye steak" },
    featured: true,
  },
  {
    id: "intl-02",
    category: "international-cuisine",
    name: "Seafood Linguine",
    description:
      "Linguine with prawns, mussels, and a light tomato-white wine sauce.",
    price: 980,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Seafood linguine" },
  },
  {
    id: "intl-03",
    category: "international-cuisine",
    name: "Mushroom Risotto",
    description:
      "Creamy Arborio rice with wild mushrooms, thyme, and aged Parmesan.",
    price: 720,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Mushroom risotto" },
    dietary: ["vegetarian"],
  },

  // Desserts
  {
    id: "desserts-01",
    category: "desserts",
    name: "Honey Cake",
    description:
      "Layered honey sponge with lightly whipped cream and toasted walnuts.",
    price: 340,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Honey cake" },
    dietary: ["vegetarian", "contains-nuts"],
  },
  {
    id: "desserts-02",
    category: "desserts",
    name: "Chocolate Fondant",
    description:
      "Warm dark chocolate cake with a molten center and vanilla ice cream.",
    price: 380,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Chocolate fondant" },
    dietary: ["vegetarian"],
    featured: true,
  },
  {
    id: "desserts-03",
    category: "desserts",
    name: "Seasonal Fruit Plate",
    description: "A refined selection of ripe local and seasonal fruits.",
    price: 280,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Seasonal fruit plate" },
    dietary: ["vegan", "gluten-free"],
  },

  // Hot Beverages
  {
    id: "hot-01",
    category: "hot-beverages",
    name: "Ethiopian Tea",
    description: "Fragrant black tea with optional fresh ginger or lemon.",
    price: 120,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Ethiopian tea" },
    dietary: ["vegan"],
  },
  {
    id: "hot-02",
    category: "hot-beverages",
    name: "Hot Chocolate",
    description: "Rich cocoa finished with steamed milk and a hint of cinnamon.",
    price: 180,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Hot chocolate" },
    dietary: ["vegetarian"],
  },
  {
    id: "hot-03",
    category: "hot-beverages",
    name: "Herbal Infusion",
    description: "A calming blend of local herbs — ask your server for today’s selection.",
    price: 140,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Herbal infusion" },
    dietary: ["vegan", "gluten-free"],
  },

  // Cold Beverages
  {
    id: "cold-01",
    category: "cold-beverages",
    name: "Fresh Orange Juice",
    description: "Freshly pressed oranges, served chilled.",
    price: 160,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Fresh orange juice" },
    dietary: ["vegan", "gluten-free"],
  },
  {
    id: "cold-02",
    category: "cold-beverages",
    name: "Sparkling Water",
    description: "Chilled sparkling mineral water.",
    price: 100,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Sparkling water" },
    dietary: ["vegan", "gluten-free"],
  },
  {
    id: "cold-03",
    category: "cold-beverages",
    name: "House Lemonade",
    description: "Fresh lemon, a touch of honey, and sparkling water.",
    price: 150,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "House lemonade" },
    dietary: ["vegetarian", "gluten-free"],
  },

  // Coffee
  {
    id: "coffee-01",
    category: "coffee",
    name: "Traditional Coffee Ceremony",
    description:
      "Roasted, ground, and brewed tableside — an invitation to pause and share.",
    price: 450,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Traditional coffee ceremony" },
    dietary: ["vegan"],
    featured: true,
  },
  {
    id: "coffee-02",
    category: "coffee",
    name: "Espresso",
    description: "A concentrated shot of carefully roasted Ethiopian beans.",
    price: 140,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Espresso" },
    dietary: ["vegan"],
  },
  {
    id: "coffee-03",
    category: "coffee",
    name: "Macchiato",
    description: "Espresso marked with a cloud of steamed milk foam.",
    price: 160,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Macchiato" },
    dietary: ["vegetarian"],
  },
  {
    id: "coffee-04",
    category: "coffee",
    name: "Filter Coffee",
    description: "Slow-brewed single-origin coffee, served black or with milk.",
    price: 150,
    currency: "ETB",
    image: { ...MENU_IMAGE, alt: "Filter coffee" },
    dietary: ["vegetarian"],
  },
];

export function getMenuItemsByCategory(categoryId: string): MenuItem[] {
  return MENU_ITEMS.filter((item) => item.category === categoryId);
}

export function getFeaturedMenuItems(): MenuItem[] {
  return MENU_ITEMS.filter((item) => item.featured);
}
