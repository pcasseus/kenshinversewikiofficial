import React from "react";
import { Link } from "react-router-dom";

export default function NavbarLogo() {
  return (
    <Link
      to="/"
      aria-label="Kenshinverse home"
      className="cursor-glow min-w-0 shrink-0 truncate text-[0.82rem] font-extrabold uppercase tracking-[0.16em] text-yellow-400 transition-colors duration-200 hover:text-yellow-300 sm:text-[0.95rem] sm:tracking-[0.22em] lg:text-[1.05rem] lg:tracking-[0.26em]"
    >
      The KenshinVerse
    </Link>
  );
}