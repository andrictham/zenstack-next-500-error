import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

/**
 * Match protected routes that are meant to be only accessed by an auth’ed user
 */
const isProtectedRoute = createRouteMatcher(["/", "/posts(.*)"]);

/**
 * Clerk middleware, which protects any routes it matches on
 * using `auth().protect()`
 * @see: https://clerk.com/docs/references/nextjs/clerk-middleware
 * @see: https://clerk.com/docs/upgrade-guides/core-2/nextjs#new-middleware-architecture
 */
export default clerkMiddleware(
  (auth, request) => {
    if (isProtectedRoute(request)) {
      auth().protect();
    }

    return NextResponse.next();
  }
);

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
