import { NextResponse } from "next/server";

// Protected routes — login chahiye
const protectedRoutes = ["/dashboard", "/generator", "/profile", "/templates"];

// Public only routes — logged in hote toh redirect
const authRoutes = ["/login", "/signup"];

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  // Protected route pe bina token ke gaya
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Already logged in hai tो login/signup pe mat jane do
  if (authRoutes.some((route) => pathname.startsWith(route))) {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/generator/:path*",
    "/profile/:path*",
    "/templates/:path*",
    "/login",
    "/signup",
  ],
};