import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import { useFirebase } from "../../contexts/FirebaseProvider";
import NavbarLogo from "./NavbarLogo";
import NavbarMobileMenu from "./NavbarMobileMenu";
import NavbarUserBlock from "./NavbarUserBlock";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [username, setUsername] = useState(null);
  const [editingName, setEditingName] = useState(false);

  const { uid, user, isAuthenticated, loading } = useFirebase();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isAuthenticated || !uid) return;

    const ref = doc(db, "users", uid);

    const unsub = onSnapshot(ref, (snap) => {
      const data = snap.data();

      if (data?.username) {
        setUsername(data.username);
      }
    });

    return () => unsub();
  }, [isAuthenticated, uid]);

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

  const handleLogout = async () => {
    await signOut(auth);
    setUsername(null);
    setMobileOpen(false);
    navigate("/login");
  };

  const saveUsername = async () => {
    if (!uid || !username) return;

    await updateDoc(doc(db, "users", uid), { username });
    setEditingName(false);
  };

  const navLinkClass = (path) =>
    `relative group flex items-center gap-1 transition ${
      location.pathname === path
        ? "text-yellow-400 after:scale-x-100"
        : "hover:text-yellow-300"
    } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-yellow-400 after:scale-x-0 after:transition-transform after:origin-left group-hover:after:scale-x-100`;

  if (loading) return null;

  return (
    <header
      className={`site-navbar sticky top-0 z-[999] w-full border-b border-yellow-500 font-mono text-green-300 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 shadow-lg backdrop-blur-md"
          : "bg-black"
      }`}
    >
      <div className="mx-auto flex min-h-[56px] w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <NavbarLogo />

        {/* Mobile / tablet toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-yellow-500/60 text-xl text-yellow-400 transition hover:bg-yellow-500/10 lg:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "×" : "☰"}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-5 text-xs uppercase tracking-wide lg:flex">
          <Link to="/characters" className={navLinkClass("/characters")}>
            <span className="inline-block h-2 w-1 rounded-sm bg-yellow-400 animate-pulse" />
            Character Gallery
          </Link>

          <Link to="/lore" className={navLinkClass("/lore")}>
            <span className="inline-block h-2 w-1 rounded-sm bg-yellow-400 animate-pulse" />
            Lore
          </Link>

          <Link to="/trilogy-1" className={navLinkClass("/trilogy-1")}>
            <span className="inline-block h-2 w-1 rounded-sm bg-yellow-400 animate-pulse" />
            Trilogy I
          </Link>

          <Link to="/broadcast" className={navLinkClass("/broadcast")}>
            <span className="inline-block h-2 w-1 rounded-sm bg-yellow-400 animate-pulse" />
            Broadcast
          </Link>

          <Link to="/about" className={navLinkClass("/about")}>
            <span className="inline-block h-2 w-1 rounded-sm bg-yellow-400 animate-pulse" />
            About the Creator
          </Link>

          <NavbarUserBlock
            isAuthenticated={isAuthenticated}
            username={username}
            user={user}
            editingName={editingName}
            setEditingName={setEditingName}
            setUsername={setUsername}
            saveUsername={saveUsername}
            handleLogout={handleLogout}
            navLinkClass={navLinkClass}
          />
        </nav>
      </div>

      <NavbarMobileMenu
        open={mobileOpen}
        isAuthenticated={isAuthenticated}
        user={user}
        username={username}
        handleLogout={handleLogout}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}