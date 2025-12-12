import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const nextIntlMiddleware = createMiddleware(routing);

export default function middleware(
  req: NextRequest
): NextResponse | Promise<NextResponse> {
  return nextIntlMiddleware(req);
}

export const config = {
  matcher: [
    "/",
    "/(ru|en|tk)/:path*",
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
  ],
};
