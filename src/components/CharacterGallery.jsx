import React, { useState } from "react";
import CharacterCard from "../components/characterGallery/CharacterCard";
import CharacterFilters from "../components/characterGallery/CharacterFilters";
import KenshinBanner from "../components/characterGallery/KenshinBanner";
import { useNavigate } from "react-router-dom";
import { allCharacters } from "./data/characterList.js";
import { Lock } from "lucide-react";

function CharacterGallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [divisionFilter, setDivisionFilter] = useState("All");
  const [selectedBooks, setSelectedBooks] = useState(["Book 1"]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lockedChar, setLockedChar] = useState(null);
  const navigate = useNavigate();

  const normalizedSearch = searchTerm.toLowerCase().trim();

  // Toggle which books are active (multi-select)
  const toggleBook = (book) => {
    setSelectedBooks((prev) =>
      prev.includes(book) ? prev.filter((b) => b !== book) : [...prev, book]
    );
  };

  // Filtering logic
  const filtered = allCharacters.filter((char) => {
    const nameMatch = char.name.toLowerCase().includes(normalizedSearch);
    const roleMatch = roleFilter === "All" || char.role === roleFilter;
    const divisionMatch = divisionFilter === "All" || char.division === divisionFilter;
    const bookMatch = selectedBooks.includes(char.book);
    return nameMatch && roleMatch && divisionMatch && bookMatch;
  });

  const suggested = searchTerm
    ? allCharacters
        .filter((char) => char.name.toLowerCase().includes(normalizedSearch))
        .slice(0, 3)
    : [];

  // Card click handling (locked vs unlocked)
  const handleCardClick = (char) => {
    if (char.comingSoon) {
      setLockedChar(char.name);
      setIsModalOpen(true);
    } else {
      window.__kenshin_entrySource = "fromGallery";
      navigate(`/characters/${char.slug}`, { state: { fromGallery: true } });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-mono px-4 sm:px-6 py-12 overflow-hidden">
      {/* --- Cinematic Banner --- */}
      <KenshinBanner />

      {/* --- Book Filters --- */}
      <div className="relative z-10 flex justify-center gap-4 mb-10 flex-wrap">
        {["Book 1", "Book 2", "Book 3"].map((book) => {
          const isActive = selectedBooks.includes(book);
          return (
            <button
              key={book}
              onClick={() => toggleBook(book)}
              className={`px-5 py-2 rounded font-bold text-sm sm:text-base tracking-wide transition-all border
                ${
                  isActive
                    ? "bg-gradient-to-r from-green-400 to-emerald-600 text-black border-green-400 shadow-[0_0_12px_rgba(0,255,0,0.5)]"
                    : "bg-gradient-to-r from-red-700 to-red-900 text-white border-red-700 hover:opacity-90"
                }`}
            >
              {book}
            </button>
          );
        })}
      </div>

      {/* --- Filters --- */}
      <CharacterFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        roleFilter={roleFilter}
        setRoleFilter={setRoleFilter}
        divisionFilter={divisionFilter}
        setDivisionFilter={setDivisionFilter}
        suggested={suggested}
      />

      {/* --- Character Grid --- */}
      <div className="relative z-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
        {filtered.map((char) => (
          <div
            key={char.slug}
            onClick={() => !char.comingSoon && handleCardClick(char)}
            className={`relative transition-transform hover:scale-[1.02] ${
              char.comingSoon ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <CharacterCard character={char} isLocked={char.comingSoon} />

            {/* Locked Overlay */}
            {char.comingSoon && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 rounded-lg z-20">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLockedChar(char.name);
                    setIsModalOpen(true);
                  }}
                  className="flex flex-col items-center justify-center gap-1 text-yellow-400 font-bold px-3 py-2 bg-zinc-800/80 rounded border border-yellow-500 hover:bg-yellow-500 hover:text-black transition"
                >
                  <Lock className="w-5 h-5" />
                  Locked
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* --- Locked Character Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-zinc-900 border border-yellow-500 rounded-lg p-6 max-w-md mx-4 text-center shadow-lg">
            <h2 className="text-yellow-400 font-bold text-lg mb-3">Character Locked</h2>
            <p className="text-yellow-200 text-sm mb-6 leading-relaxed">
              The character{" "}
              <span className="text-yellow-400">{lockedChar}</span> is currently locked
              due to a revamp of their page in progress. It will be announced when their
              profile becomes available.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-5 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CharacterGallery;
