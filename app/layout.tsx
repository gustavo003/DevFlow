/* eslint-disable no-undef */
/* eslint-disable camelcase */
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

import { Inter, Space_Grotesk } from "next/font/google";
import { type Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space_grotesk",
});
export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "A communit-driven platform for asking and answering programming questions",

  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};
function Header() {
  return (
    <header
      style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
    >
      <h1>My App</h1>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </header>
  );
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          elements: {
            formButtonPrimary: "primary-gradient",
            footerActionLink: "primary-text-gradient, hover:text-primary-500",
          },
        }}
      >
        <body className={`${inter.variable}  ${spaceGrotesk.variable}`}>
          <Header />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
