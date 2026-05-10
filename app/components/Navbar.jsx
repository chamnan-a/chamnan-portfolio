import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const sideMenuRef = useRef(null);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const y = typeof window !== "undefined" ? window.scrollY : 0;
      setIsScroll(y > 50);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white/50 nav-backdrop shadow-sm" : ""
        }`}
      >
        <a href="#top" className="text-2xl font-bold cursor-pointer mr-14">
          Cham Portfolio
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          }`}
        >
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={toggleDarkMode}>
            <Image src={isDark ? assets.sun_icon : assets.moon_icon} alt="Toggle dark mode" className="w-6" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact
            <Image src={assets.arrow_icon} alt="Arrow" className="w-3 dark:invert" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={assets.menu_black}
              alt=""
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* Mobile Menu */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
