import { Locale } from "@/i18n/config";
import { useTranslate } from "@/i18n/useTranslate";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
   title: "Home",
};

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
   const translate = await useTranslate(lang);
   return (
      <div>
         <h2>{translate.home.page_name}</h2>
         <div className="flex items-center gap-2">
            <Link href="/client">Client Side</Link>
            <Link href="/server">Server Side</Link>
         </div>
      </div>
   );
}
