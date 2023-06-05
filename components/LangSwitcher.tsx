"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Config } from "@/langs/config";

export default function LangSwitcher() {
   const pathName = usePathname();

   const redirectedPathName = (locale: string): { url: string; activeLang: string } => {
      if (!pathName)
         return {
            url: "/",
            activeLang: "",
         };
      const segments = pathName.split("/");

      segments[1] = locale;
      return {
         url: segments.join("/"),
         activeLang: pathName.split("/")[1],
      };
   };

   return (
      <ul className="flex gap-2 mt-6">
         {Config.locales.map((locale) => {
            return (
               <li className="uppercase rounded-sm px-1 bg-gray-100 border" key={locale}>
                  <Link href={redirectedPathName(locale).url}>
                     {locale} {redirectedPathName(locale).activeLang === locale ? "✅" : ""}
                  </Link>
               </li>
            );
         })}
      </ul>
   );
}
