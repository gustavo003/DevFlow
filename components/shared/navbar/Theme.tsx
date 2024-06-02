"use client";
import { useTheme } from "@/context/ThemeProvider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { themes } from "@/constants";
const Theme = () => {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger>
          {mode === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              alt="sun"
              height={20}
              width={20}
              className="active-theme"
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              alt="moon"
              height={20}
              width={20}
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent
          className="absolute -right-12 mt-3 min-w-[120px] rounded border py-2
        dark:border-dark-400 dark:bg-dark-300
        "
        >
          {themes.map((item) => {
            return (
              <MenubarItem
                key={item.value}
                className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
                onClick={() => {
                  setMode(item.value);
                  if (item.value !== "system") {
                    localStorage.setItem("theme", item.value);
                  } else localStorage.removeItem("theme");
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.value}
                  height={16}
                  width={16}
                  className={`${mode === item.value && "active-theme"}`}
                />
                <p
                  className={`body-semibold text-light-500 ${
                    mode === item.value
                      ? "text-primary-500"
                      : "text-dark100_light900"
                  }`}
                >
                  {item.label}
                </p>
              </MenubarItem>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
