import { Inter } from "next/font/google";
import "@/styles/index.css";
import StoreProvider from "@/store/Provider";
import { Header } from "@/components/Header";
import { Locale } from "@/i18n/config";
import { useTranslate } from "@/i18n/useTranslate";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children, params: { lang } }: { children: React.ReactNode; params: { lang: Locale } }) {
   const translate = await useTranslate(lang);
   return (
      <html lang="en">
         <body className={inter.className}>
            <Header translate={translate.header} />
            <StoreProvider>
               <main>{children}</main>
            </StoreProvider>
         </body>
      </html>
   );
}
