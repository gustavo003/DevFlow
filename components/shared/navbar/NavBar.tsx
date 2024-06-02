import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Theme from "./Theme";
import GlobalSearch from "../search/GlobalSearch";
const NavBar = () => {
  return (
    <nav
      className="flex-between background-light900_dark200 
  fixed z-50 flex w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12"
    >
      <Link href="/" className="flex items-center gap-1  ">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow Logo"
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev <span className="text-primary-500">Flow</span>
        </p>
      </Link>
      <GlobalSearch />
      <div className="flex-between gap-5">
        <SignedIn>
          <Theme />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "primary-gradient",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <SignInButton>Log In</SignInButton>
        </SignedOut>
        <MobileNav />
      </div>
    </nav>
  );
};

export default NavBar;
