import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { langConfig } from "@/i18n/config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
   const negotiatorHeaders: Record<string, string> = {};
   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

   let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
   // @ts-ignore locales are readonly
   const locales: string[] = langConfig.locales;
   return matchLocale(languages, locales, langConfig.defaultLocale);
}

export function middleware(request: NextRequest) {
   const pathname = request.nextUrl.pathname;

   const pathnameIsMissingLocale = langConfig.locales.every((locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);

   if (pathnameIsMissingLocale) {
      const locale = getLocale(request);
      const defaultLang = langConfig.locales.find((l) => l === request.cookies.get("locale")?.value);

      if (defaultLang) {
         return NextResponse.redirect(new URL(`/${defaultLang}/${pathname}`, request.url));
      }
      return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
   }
}

export const config = {
   // Matcher ignoring `/_next/` and `/api/`
   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
