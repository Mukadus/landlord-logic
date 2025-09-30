import { NextResponse } from "next/server";
import { TOKEN_COOKIE_NAME } from "./resources/utils/cookie";

export default function middleware(req) {
  const { cookies, nextUrl } = req;

  const privateRoutes = [
    "/dashboard",
    "/landlord-insights",
    "/tenant-profiles",
    "/contractor-profiles",
    "/job-requests",
    "/subscription-management",
    "/complains-management",
    "/notifications-center",
    "/profile",
  ];

  if (cookies.has(TOKEN_COOKIE_NAME)) {
    if (nextUrl.pathname === "/") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  } else {
    if (privateRoutes.includes(nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Apply middleware to all pages except:
    // - API routes
    // - Static assets (_next/static, _next/image, static, images, fonts, svgs, etc.)
    // - Favicon and other public assets
    "/((?!api/|_next/|static/|public/|favicon.ico|images/|fonts/|svgs/|icon.png).*)",
  ],
};
