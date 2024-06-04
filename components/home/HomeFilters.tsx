"use client";
import { HomePageFilters } from "@/constants/filter";
import { Button } from "../ui/button";
import { useState } from "react";
const HomeFilters = () => {
  const [isActive, setIsActive] = useState("");
  return (
    <div className="mt-10 hidden flex-wrap gap-3 lg:flex">
      {HomePageFilters.map((item) => {
        return (
          <Button
            key={item.value}
            onClick={() => {
              setIsActive(item.value);
            }}
            className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
              isActive === item.value
                ? "bg-primary-100 text-primary-500 dark:bg-dark-400"
                : "background-light800_darkgradient text-light-500  hover:bg-light-800  dark:text-light-500 dark:hover:bg-dark-300"
            }`}
          >
            {item.name}
          </Button>
        );
      })}
    </div>
  );
};

export default HomeFilters;
