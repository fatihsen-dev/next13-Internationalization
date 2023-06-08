"use client";
import { langConfig } from "@/i18n/config";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const LangSwitchButton = () => {
   const pathName = usePathname();
   const router = useRouter();
   const defaultLang = pathName.split("/")[1];

   const languageSwitch = async (lng: string) => {
      try {
         await fetch(`/api/setcookie?locale=${lng}`);
         router.replace(`/${lng}`);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         {langConfig.locales
            .filter((l) => l !== defaultLang)
            .map((locale) => {
               return (
                  <button className="uppercase" key={locale} onClick={() => languageSwitch(locale)}>
                     {locale}
                  </button>
               );
            })}
      </>
   );
};
