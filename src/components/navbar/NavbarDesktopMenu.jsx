// src/components/navbar/NavbarDesktopMenu.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";

import {
  isNavItemActive,
  navItems,
} from "./navItems";

export default function NavbarDesktopMenu({
  theme,
}) {
  const location = useLocation();

  return (
    <nav
      className="hidden items-center gap-5 text-xs uppercase tracking-wide lg:flex"
      aria-label="Primary navigation"
    >
      {navItems.map((item) => {
        const isActive = isNavItemActive(
          location.pathname,
          item
        );

        return (
          <Link
            key={item.path}
            to={item.path}
            aria-current={isActive ? "page" : undefined}
            className={`relative group flex items-center gap-1 transition ${
              isActive
                ? `${theme.activeText} after:scale-x-100`
                : theme.hoverText
            } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:transition-transform after:origin-left group-hover:after:scale-x-100`}
          >
            <span
              className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left transition-transform ${
                theme.marker
              } ${
                isActive
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            />

            <span
              className={`inline-block h-2 w-1 rounded-sm transition ${theme.marker} ${
                isActive
                  ? theme.markerGlow
                  : "animate-pulse"
              }`}
            />

            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}