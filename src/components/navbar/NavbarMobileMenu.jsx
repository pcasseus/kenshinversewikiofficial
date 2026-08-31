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
    <div className="fixed inset-x-0 bottom-0 top-[57px] z-[998] overflow-y-auto border-t border-yellow-500 bg-black/95 backdrop-blur-md lg:hidden">
      <div className="mx-auto w-full max-w-2xl px-4 py-5 font-mono text-sm text-yellow-300 sm:px-6">
        <nav className="space-y-3" aria-label="Mobile navigation">
          <MobileLink
            to="/characters"
            label="Character Gallery"
            onClose={onClose}
          />
          <MobileLink to="/lore" label="Lore Index" onClose={onClose} />
          <MobileLink
            to="/trilogy-1"
            label="Trilogy I"
            onClose={onClose}
          />
          <MobileLink
            to="/broadcast"
            label="Broadcast"
            onClose={onClose}
          />
          <MobileLink
            to="/about"
            label="About the Creator"
            onClose={onClose}
          />
        </nav>

        <div className="mt-6 space-y-4 border-t border-yellow-800 pt-5">
          {isAuthenticated ? (
            <>
              <div>
                <div className="text-xs font-semibold tracking-wide text-cyan-300">
                  Logged in as
                </div>

                <div className="mt-1 break-all font-bold text-yellow-300">
                  {username || user?.email}
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  handleLogout();
                  onClose();
                }}
                className="w-full rounded-lg border border-red-500 px-4 py-3 text-center font-bold uppercase tracking-wide text-red-400 transition hover:bg-red-500 hover:text-black"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Link
                to="/login"
                onClick={onClose}
                className="block w-full rounded-lg border border-yellow-400 px-4 py-3 text-center font-bold uppercase tracking-wide text-yellow-300 transition hover:bg-yellow-500 hover:text-black"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={onClose}
                className="block w-full rounded-lg border border-yellow-400 px-4 py-3 text-center font-bold uppercase tracking-wide text-yellow-300 transition hover:bg-yellow-500 hover:text-black"
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

function MobileLink({ to, label, onClose }) {
  return (
    <Link
      to={to}
      onClick={onClose}
      className="block w-full rounded-lg border border-yellow-700 bg-yellow-900/20 px-4 py-3 font-semibold tracking-wide text-yellow-300 transition hover:border-yellow-500 hover:bg-yellow-800/30"
    >
      {label}
    </Link>
  );
}