// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Bỏ Clerk hoàn toàn, chỉ cho request đi tiếp
export function middleware(_req: NextRequest) {
  return NextResponse.next();
}

// Giữ nguyên matcher cũ để Next.js biết áp dụng middleware cho route nào
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
