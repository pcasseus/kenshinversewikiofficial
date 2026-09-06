// src/components/navbar/NavbarMobileMenu.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";

import {
  isNavItemActive,
  navItems,
} from "./navItems";

export default function NavbarMobileMenu({
  open,
  onClose,
  theme,
}) {
  const location = useLocation();

  if (!open) {
    return null;
  }

  return (
    <div
      className={`fixed inset-x-0 bottom-0 top-[57px] z-[998] overflow-y-auto border-t bg-black/95 backdrop-blur-md lg:hidden ${theme.border}`}
    >
      <div className="mx-auto w-full max-w-2xl px-4 py-5 font-mono text-sm sm:px-6">
        <div
          className={`mb-5 flex items-center justify-between border-b pb-3 ${theme.divider}`}
        >
          <div>
            <p
              className={`text-[9px] font-bold uppercase tracking-[0.24em] ${theme.statusText}`}
            >
              Kenshinverse Navigation
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Public KVI Interface
            </p>
          </div>

          <span className="text-[9px] uppercase tracking-[0.18em] text-green-500">
            Online
          </span>
        </div>

        <nav
          className="space-y-3"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => {
            const isActive = isNavItemActive(
              location.pathname,
              item
            );

            return (
              <MobileLink
                key={item.path}
                to={item.path}
                label={item.label}
                active={isActive}
                onClose={onClose}
                theme={theme}
              />
            );
          })}
        </nav>

        <div
          className={`mt-6 border-t pt-5 ${theme.divider}`}
        >
          <div className="rounded-lg border border-green-800/70 bg-green-950/20 px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-green-500">
                Archive Status
              </p>

              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.85)]" />
            </div>

            <p className="mt-2 text-xs leading-relaxed text-green-300/80">
              Public KVI database access active.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileLink({
  to,
  label,
  active,
  onClose,
  theme,
}) {
  return (
    <Link
      to={to}
      onClick={onClose}
      aria-current={active ? "page" : undefined}
      className={`group relative block w-full overflow-hidden rounded-lg border px-4 py-3 font-semibold tracking-wide transition ${
        active
          ? `${theme.mobileActiveBorder} ${theme.mobileActiveBackground} ${theme.activeText}`
          : `${theme.mobileMutedBorder} ${theme.mobileBackground} ${theme.hoverText}`
      }`}
    >
      <span
        className={`absolute bottom-0 left-0 top-0 w-1 transition ${
          active
            ? `${theme.marker} ${theme.markerGlow}`
            : theme.marker
        }`}
      />

      <div className="flex items-center justify-between gap-4 pl-2">
        <span className="uppercase tracking-[0.12em]">
          {label}
        </span>

        <span
          className={`text-[9px] uppercase tracking-[0.18em] ${
            active
              ? theme.activeText
              : "text-zinc-600"
          }`}
        >
          {active ? "Active" : "Access"}
        </span>
      </div>
    </Link>
  );
}