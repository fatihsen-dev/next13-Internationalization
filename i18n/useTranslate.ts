import type { Locale } from "./config";

const dictionaries = {
   en: () => import("@/locales/en.json").then((module) => module.default),
   tr: () => import("@/locales/tr.json").then((module) => module.default),
};

export const useTranslate = async (locale: Locale) => dictionaries[locale]();
