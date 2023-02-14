"use client";
import React, { useState } from "react";
import { Button, Link } from "react-scroll";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const NAV_ITEMS = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Projects", page: "projects" },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  // navbar whether open or not for mobile view
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full  mx-auto bg-white px-4 sm:px-20 fixed top-0 z-50 shadow dark:bg-stone-900 dark:border-b dark:border-stone-600 ">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3">
            <div className="md:py-5 md:block">
              <h2 className="text-2xl font-bold">Balint Korosi</h2>
            </div>
            <div className="md:hidden">
              <button>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center  justify-center md:flex md:space-x-6">
              {NAV_ITEMS.map((item, idx) => {
                return <a key={idx}>{item.label}</a>;
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;