// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🔐 Firebase Auth Context
import { FirebaseProvider } from "./contexts/FirebaseProvider";

// 🧱 Core Components
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";

// 🧠 Responsive Home Interface
import ResponsiveInterface from "./components/home/ResponsiveInterface";

// 👤 Characters
import CharacterGallery from "./components/CharacterGallery";
import SecureCharacterProfile from "./components/profiles/SecureCharacterProfile";

// 📺 Broadcast
import Broadcast from "./pages/broadcast/Broadcast";

// 🧭 Lore
import Lore from "./pages/Lore";
import Races from "./pages/races/Races";
import POIHub from "./pages/POIHub";
import Leaderboard from "./pages/leaderboard/Leaderboard"

// 📘 Trilogies
import TrilogyOne from "./pages/trilogies/TrilogyOne";

// 🔐 Auth Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

// 📄 About
import About from "./pages/About";

// 🗣 Voice Preloader
import { usePreloadVoices } from "./utils/usePreloadVoices";

function App() {
  usePreloadVoices();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    document.body.style.overflow = "auto";
  }, []);

  return (
    <FirebaseProvider>
      <Router>
        <ScrollToTop />

        <div className="min-h-screen bg-black text-green-400 font-mono">
          <Navbar />

          <main className="px-6 py-8">
            <Routes>
              {/* 🌐 Home */}
              <Route path="/" element={<ResponsiveInterface />} />

              {/* 👤 Characters */}
              <Route path="/characters" element={<CharacterGallery />} />
              <Route
                path="/characters/:slug"
                element={<SecureCharacterProfile />}
              />

              {/* 📺 Broadcast */}
              <Route path="/broadcast" element={<Broadcast />} />

              {/* 📘 Trilogy Hub */}
              <Route path="/trilogy-1" element={<TrilogyOne />} />

              {/* 🧭 Lore */}
              <Route path="/lore" element={<Lore />} />
              <Route path="/lore/races" element={<Races />} />
              <Route path="/lore/pois/*" element={<POIHub />} />
              <Route path="/lore/leaderboard" element={<Leaderboard />} />


              {/* 🔐 Auth */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              {/* 📄 About */}
              <Route path="/about" element={<About />} />

              {/* 🛑 404 */}
              <Route
                path="*"
                element={
                  <div className="text-center text-red-500 text-xl py-20">
                    404 — Page not found
                  </div>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </FirebaseProvider>
  );
}

export default App;
