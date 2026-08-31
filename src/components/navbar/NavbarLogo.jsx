import React from "react";
import { Link } from "react-router-dom";

export default function NavbarLogo() {
  return (
    <Link
      to="/"
      className="text-yellow-400 text-[1rem] sm:text-[1.4rem] font-extrabold uppercase tracking-[0.3em] hover:text-yellow-300 transition cursor-glow"
    >
      The KenshinVerse
    </Link>
  );
}
