// src/components/navbar/Navbar.jsx

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import NavbarLogo from "./NavbarLogo";
import NavbarDesktopMenu from "./NavbarDesktopMenu";
import NavbarMobileMenu from "./NavbarMobileMenu";

import { getNavbarTheme } from "./navbarTheme";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const theme = getNavbarTheme(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`site-navbar sticky top-0 z-[999] w-full border-b font-mono text-green-300 transition-all duration-300 ${theme.border} ${
        scrolled
          ? "bg-black/90 shadow-lg backdrop-blur-md"
          : "bg-black"
      }`}
    >
      <div className="mx-auto flex min-h-[56px] w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <NavbarLogo />

        <NavbarDesktopMenu theme={theme} />

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md border text-xl transition lg:hidden ${theme.buttonBorder} ${theme.buttonText} ${theme.buttonHover}`}
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "×" : "☰"}
        </button>
      </div>

      <NavbarMobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        theme={theme}
      />
    </header>
  );
}