export const Config = {
   defaultLocale: "en",
   locales: ["en", "tr"],
} as const;

export type Locale = (typeof Config)["locales"][number];
