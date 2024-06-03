"use client";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
const NavContent = () => {
  const path = usePathname();
  return (
    <section className=" flex h-full flex-col items-stretch gap-6 pt-6">
      {sidebarLinks.map((item) => {
        const isActive =
          (path.includes(item.route) && item.route.length > 1) ||
          path === item.route;

        return (
          <Link
            key={item.route}
            href={item.route}
            className={` ${
              isActive
                ? " primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900"
            } flex items-center justify-start gap-4 bg-transparent p-4`}
          >
            <Image
              src={item.imgURL}
              alt={item.label}
              width={20}
              height={20}
              className={`${isActive ? "" : "invert-colors"}`}
            />
            <p
              className={`max-lg:hidden ${isActive ? "base-bold" : "base-medium"}`}
            >
              {item.label}
            </p>
          </Link>
        );
      })}
    </section>
  );
};

const Sidebar = () => {
  return (
    <aside
      className="background-light900_dark200
     light-border sticky left-0 top-0 flex h-screen 
     flex-col justify-between overflow-y-auto border-r
      p-6 pt-36 shadow-light-300 dark:shadow-none max-lg:items-start max-sm:hidden lg:w-[266px]"
    >
      <div>
        <NavContent />
      </div>
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button
              className="small-medium btn-secondary w-full min-w-[41px] 
            rounded-lg px-4 py-3 shadow-none"
            >
              <Image
                className="invert-colors lg:hidden"
                height={20}
                width={20}
                src="/assets/icons/account.svg"
                alt="log in"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="text-dark400_light900 small-medium btn-tertiary light-border-2 w-full min-w-[41px] rounded-lg px-4 py-3 shadow-none">
              <Image
                className="invert-colors lg:hidden"
                height={20}
                width={20}
                src="/assets/icons/sign-up.svg"
                alt="sign up"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Sign Up
              </span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </aside>
  );
};

export default Sidebar;
