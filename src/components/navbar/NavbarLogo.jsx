import React from "react";
import { Link } from "react-router-dom";

export default function NavbarLogo() {
  return (
    <Link
      to="/"
      className="cursor-glow min-w-0 truncate text-[0.85rem] font-extrabold uppercase tracking-[0.18em] text-yellow-400 transition hover:text-yellow-300 sm:text-[1rem] sm:tracking-[0.25em] lg:text-[1.2rem] lg:tracking-[0.3em]"
    >
      The KenshinVerse
    </Link>
  );
}