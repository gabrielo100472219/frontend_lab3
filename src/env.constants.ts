export const ENV = {
  SHOP_NAME: import.meta.env.VITE_SHOP_NAME,
  API_BASE: import.meta.env.VITE_API_BASE,
  SHOW_OFFERS: import.meta.env.VITE_SHOW_OFFERS === "true",
} as const;
