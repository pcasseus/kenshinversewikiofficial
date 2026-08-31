import React from "react";
import { Link } from "react-router-dom";

export default function NavbarMobileMenu({
  open,
  isAuthenticated,
  user,
  username,
  handleLogout,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="sm:hidden fixed inset-x-0 top-[56px] bg-black/95 backdrop-blur-md border-t border-yellow-500 z-[998] animate-fadeIn">
      <div className="px-6 py-6 font-mono text-sm text-yellow-300 space-y-6">

        {/* ===== Primary Navigation ===== */}
        <div className="space-y-4">
          <MobileLink to="/characters" label="Character Gallery" onClose={onClose} />
          <MobileLink to="/lore" label="Lore Index" onClose={onClose} />
          <MobileLink to="/trilogy-1" label="Trilogy I" onClose={onClose} />
          <MobileLink to="/broadcast" label="Broadcast" onClose={onClose} />
          <MobileLink to="/about" label="About the Creator" onClose={onClose} />
        </div>

        {/* ===== Account Section ===== */}
        <div className="pt-5 border-t border-yellow-800 space-y-4">
          {isAuthenticated ? (
            <>
              <div className="text-cyan-300 font-semibold break-words text-xs tracking-wide">
                Logged in as
              </div>
              <div className="text-yellow-300 font-bold break-words">
                {username || user?.email}
              </div>

              <button
                onClick={() => {
                  handleLogout();
                  onClose();
                }}
                className="w-full mt-2 text-center text-red-400 border border-red-500 px-4 py-3 rounded-lg hover:bg-red-500 hover:text-black transition uppercase font-bold tracking-wide"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="space-y-3">
              <Link
                to="/login"
                onClick={onClose}
                className="block w-full text-center border border-yellow-400 text-yellow-300 px-4 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition uppercase font-bold tracking-wide"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={onClose}
                className="block w-full text-center border border-yellow-400 text-yellow-300 px-4 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition uppercase font-bold tracking-wide"
              >
                Register
              </Link>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

/* ===== Helper Component ===== */
function MobileLink({ to, label, onClose }) {
  return (
    <Link
      to={to}
      onClick={onClose}
      className="block w-full px-4 py-3 rounded-lg border border-yellow-700 bg-yellow-900/30 hover:bg-yellow-800/40 hover:border-yellow-500 transition text-yellow-300 font-semibold tracking-wide"
    >
      {label}
    </Link>
  );
}
