// src/App.jsx

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Core Components
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";

// Responsive Home Interface
import ResponsiveInterface from "./components/home/ResponsiveInterface";

// Characters
import CharacterGallery from "./components/CharacterGallery";
import SecureCharacterProfile from "./components/profiles/SecureCharacterProfile";

// Broadcast
import Broadcast from "./pages/broadcast/Broadcast";

// Lore
import Lore from "./pages/Lore";
import Races from "./pages/races/Races";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import HistoricalArchives from "./pages/history/HistoricalArchives";
import TechArtifacts from "./pages/tech/TechArtifacts";

// Trilogies
import TrilogyOne from "./pages/trilogies/TrilogyOne";

// About
import About from "./pages/About";

// Voice Preloader
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
    <Router>
      <ScrollToTop />

      <div className="min-h-screen bg-black text-green-400 font-mono">
        <Navbar />

        <main className="w-full min-w-0">
          <Routes>
            {/* Home */}
            <Route
              path="/"
              element={<ResponsiveInterface />}
            />

            {/* Characters */}
            <Route
              path="/characters"
              element={<CharacterGallery />}
            />

            <Route
              path="/characters/:slug"
              element={<SecureCharacterProfile />}
            />

            {/* Broadcast */}
            <Route
              path="/broadcast"
              element={<Broadcast />}
            />

            {/* Trilogy Hub */}
            <Route
              path="/trilogy-1"
              element={<TrilogyOne />}
            />

            {/* Lore */}
            <Route
              path="/lore"
              element={<Lore />}
            />

            <Route
              path="/lore/races"
              element={<Races />}
            />

            <Route
              path="/lore/leaderboard"
              element={<Leaderboard />}
            />

            <Route
              path="/lore/history"
              element={<HistoricalArchives />}
            />

            <Route
              path="/lore/tech"
              element={<TechArtifacts />}
            />

            {/* About */}
            <Route
              path="/about"
              element={<About />}
            />

            {/* 404 */}
            <Route
              path="*"
              element={
                <div className="px-4 py-20 text-center text-xl text-red-500 sm:px-6">
                  404 — Page not found
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;