import { Locale } from "@/i18n/config";
import { useTranslate } from "@/i18n/useTranslate";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
   title: "Server",
};

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
   const translate = await useTranslate(lang);

   return (
      <div>
         <p>{translate.server_side.text}</p>
         <Link href="/">Back</Link>
      </div>
   );
}
