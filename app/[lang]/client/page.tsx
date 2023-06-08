"use client";
import { Locale } from "@/i18n/config";
import { useTranslate } from "@/i18n/useTranslate";
import { Helmet } from "react-helmet";
import Link from "next/link";

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
   const translate = await useTranslate(lang);
   return (
      <>
         <Helmet>
            <title>Client Side</title>
         </Helmet>
         <div>
            <p>{translate.client_side.text}</p>
            <Link href="/">Back</Link>
         </div>
      </>
   );
}
