import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  // Accessible route without authentication.
  publicRoutes: [
    "/",
    "/shop",
    "/products/:id",
    "/about",
    "/contact",
    "/api/webhook/clerk",
    "/api/uploadthing",
  ],
  // Routes to be ignored by clerk authentication
  ignoredRoutes: ["/api/webhook/clerk", "/api/uploadthing"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
