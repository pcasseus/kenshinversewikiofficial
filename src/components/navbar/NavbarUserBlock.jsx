import React from "react";
import { Link } from "react-router-dom";

export default function NavbarUserBlock({
  username,
  editingName,
  isAuthenticated,
  user,
  setUsername,
  setEditingName,
  saveUsername,
  handleLogout,
  navLinkClass,
}) {
  if (!isAuthenticated) {
    return (
      <>
        <Link to="/login" className={navLinkClass("/login")}>
          <span className="inline-block h-2 w-1 bg-yellow-400 rounded-sm animate-pulse" />
          Login
        </Link>
        <Link to="/register" className={navLinkClass("/register")}>
          <span className="inline-block h-2 w-1 bg-yellow-400 rounded-sm animate-pulse" />
          Register
        </Link>
      </>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-4 sm:mt-0">
      <div
        className="cursor-pointer group flex flex-col sm:flex-row items-start sm:items-center gap-1 text-cyan-400 font-extrabold tracking-wide hover:brightness-110 transition"
        title="Double-click or tap to edit your username"
        onDoubleClick={() => setEditingName(true)}
      >
        <span className="inline-block h-2 w-1 bg-yellow-400 rounded-sm animate-pulse" />

        {editingName ? (
          <input
            value={username || ""}
            placeholder="Enter username..."
            onChange={(e) => setUsername(e.target.value)}
            onBlur={saveUsername}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveUsername();
            }}
            className="bg-zinc-800 px-2 py-1 rounded text-cyan-300 border border-yellow-600 font-bold w-full sm:w-48 text-sm"
            autoFocus
          />
        ) : (
          <span className="font-comic tracking-wide text-cyan-200 drop-shadow-sm group-hover:underline decoration-dotted flex items-center gap-1 text-sm">
            {username || user?.email || "Unnamed"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-cyan-400 opacity-70 group-hover:opacity-100 transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setEditingName(true)}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13h3l7-7-3-3-7 7v3z" />
            </svg>
          </span>
        )}
      </div>

      <button
        onClick={handleLogout}
        className="mt-2 sm:mt-0 px-3 py-1 border border-red-400 text-red-400 hover:bg-red-500 hover:text-black font-bold rounded transition uppercase text-sm"
      >
        Logout
      </button>
    </div>
  );
}
