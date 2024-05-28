import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const signIn = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL;
const signUp = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL;
const publicRoutes = createRouteMatcher(["/", signIn!, signUp!]);

export default clerkMiddleware((auth, req) => {
  if (!publicRoutes(req) && !auth().userId) {
    // Add custom logic to run before redirecting

    return auth().redirectToSignIn();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
