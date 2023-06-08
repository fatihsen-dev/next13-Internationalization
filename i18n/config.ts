export const langConfig = {
   defaultLocale: "en",
   locales: ["en", "tr"],
} as const;

export type Locale = (typeof langConfig)["locales"][number];
