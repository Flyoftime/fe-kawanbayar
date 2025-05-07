// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const isLoginPage = request.nextUrl.pathname.startsWith("/(auth)/signin");

  // Jika tidak ada token dan bukan halaman login, redirect ke signin
  if (!token && !isLoginPage) {
    return NextResponse.redirect(new URL("/(auth)/signin", request.url));
  }

  // Jika sudah login dan mengakses halaman signin, redirect ke halaman utama
  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Lindungi semua halaman kecuali signin
    "/((?!_next|favicon.ico|globals.css).*)",
  ],
};
