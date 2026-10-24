/// <reference types="vite/client" />

// Only allow the variables declared in ImportMetaEnv (typos become errors).
interface ViteTypeOptions {
  strictImportMetaEnv: unknown;
}

// Our environment variables. Remember all have string values.
interface ImportMetaEnv {
  readonly VITE_SHOP_NAME: string;
  readonly VITE_API_BASE: string;
  readonly VITE_SHOW_OFFERS: string;
}
