import { i18n } from "@/i18n.config";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookieLocale = request.cookies.get("locale")?.value;
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;
  const locale = pathname.split("/")[1];

  //-------------------------------------------------------------- handle locale
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  if (pathnameIsMissingLocale && !cookieLocale) {
    response.cookies.set("locale", "fa");
    return NextResponse.redirect(
      new URL(
        `/fa${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  } else if (
    pathnameIsMissingLocale &&
    (cookieLocale === "fa" || cookieLocale === "en")
  ) {
    return NextResponse.redirect(
      new URL(
        `/${cookieLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  } else if (locale === "fa" || locale === "en") {
    response.cookies.set("locale", locale);
  }
}

//---------------------------------------------------
export const config = {
  matcher: [
    "/",
    "/((?!api|_next/static|fonts|locales|_next/image|images|favicon.ico).*)",
  ],
};
