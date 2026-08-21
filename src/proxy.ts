import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ADMIN_SESSION_COOKIE, ADMIN_SESSION_TOKEN } from "@/lib/admin-session";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The login form itself lives at /admin — let it through so it can render.
  if (pathname === "/admin") {
    return NextResponse.next();
  }

  const authed =
    request.cookies.get(ADMIN_SESSION_COOKIE)?.value === ADMIN_SESSION_TOKEN;

  if (!authed) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
