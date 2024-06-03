import React from "react";
import NavBar from "@/components/shared/navbar/NavBar";
import LeftSideBar from "@/components/shared/sidebar/LeftSideBar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <NavBar />
      <div className="flex items-stretch">
        <LeftSideBar />
        <section className="flex min-h-screen flex-1 flex-col p-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        RightSideBar
      </div>
    </main>
  );
};

export default Layout;
