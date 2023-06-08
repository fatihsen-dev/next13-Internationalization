import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
   const response = NextResponse.json({ message: "success" });
   const locale = req.nextUrl.searchParams.get("locale");
   response.cookies.set("locale", locale || "en");
   return response;
}
