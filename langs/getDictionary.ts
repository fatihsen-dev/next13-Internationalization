import "server-only";
import type { Locale } from "./config";

const dictionaries = {
   en: () => import("./files/en.json").then((module) => module.default),
   tr: () => import("./files/tr.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
