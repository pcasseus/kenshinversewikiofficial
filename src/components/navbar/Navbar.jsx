import React, { useState, useEffect } from "react";
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

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Username sync
  useEffect(() => {
    if (!isAuthenticated || !uid) return;
    const ref = doc(db, "users", uid);
    const unsub = onSnapshot(ref, (snap) => {
      const data = snap.data();
      if (data?.username) setUsername(data.username);
    });
    return () => unsub();
  }, [isAuthenticated, uid]);

  const handleLogout = async () => {
    await signOut(auth);
    setUsername(null);
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
      className={`site-navbar ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-black"
      } text-green-300 font-mono border-b border-yellow-500 sticky top-0 z-[999] transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 relative">
        <NavbarLogo />

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-yellow-400 sm:hidden text-2xl"
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-5 text-xs sm:text-sm uppercase tracking-wide">
          <Link to="/characters" className={navLinkClass("/characters")}>
            <span className="inline-block h-2 w-1 bg-yellow-400 rounded-sm animate-pulse" />
            Character Gallery
          </Link>

          <Link to="/lore" className={navLinkClass("/lore")}>
            <span className="inline-block h-2 w-1 bg-yellow-400 rounded-sm animate-pulse" />
            Lore
          </Link>

          {/* NEW: Trilogy I Page */}
          <Link to="/trilogy-1" className={navLinkClass("/trilogy-1")}>
            <span className="inline-block h-2 w-1 bg-yellow-400 rounded-sm animate-pulse" />
            Trilogy I
          </Link>

          <Link to="/broadcast" className={navLinkClass("/broadcast")}>
            <span className="inline-block h-2 w-1 bg-yellow-400 rounded-sm animate-pulse" />
            Broadcast
          </Link>

          <Link to="/about" className={navLinkClass("/about")}>
            <span className="inline-block h-2 w-1 bg-yellow-400 rounded-sm animate-pulse" />
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

      {/* Mobile Menu */}
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
