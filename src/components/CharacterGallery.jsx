import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

import CharacterCard from "./characterGallery/CharacterCard";
import CharacterFilters from "./characterGallery/CharacterFilters";
import KenshinBanner from "./characterGallery/KenshinBanner";
import { allCharacters } from "./data/characterList.js";

function CharacterGallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lockedChar, setLockedChar] = useState(null);

  const navigate = useNavigate();

  const normalizedSearch = searchTerm.toLowerCase().trim();

  const filteredCharacters = useMemo(() => {
    if (!normalizedSearch) {
      return allCharacters;
    }

    return allCharacters.filter((character) =>
      character.name.toLowerCase().includes(normalizedSearch)
    );
  }, [normalizedSearch]);

  const suggestedCharacters = useMemo(() => {
    if (!normalizedSearch) {
      return [];
    }

    return allCharacters
      .filter((character) =>
        character.name.toLowerCase().includes(normalizedSearch)
      )
      .slice(0, 5);
  }, [normalizedSearch]);

  const openLockedModal = (character) => {
    setLockedChar(character.name);
    setIsModalOpen(true);
  };

  const handleCharacterSelect = (character) => {
    if (character.comingSoon) {
      openLockedModal(character);
      return;
    }

    window.__kenshin_entrySource = "fromGallery";

    navigate(`/characters/${character.slug}`, {
      state: { fromGallery: true },
    });
  };

  const closeLockedModal = () => {
    setIsModalOpen(false);
    setLockedChar(null);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black px-4 py-12 font-mono text-white sm:px-6">
      <KenshinBanner />

      <CharacterFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        suggested={suggestedCharacters}
        onCharacterSelect={handleCharacterSelect}
      />

      <div className="relative z-10 mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredCharacters.map((character) => (
          <div
            key={character.slug}
            className={`relative transition-transform ${
              character.comingSoon
                ? "cursor-not-allowed"
                : "cursor-pointer hover:scale-[1.02]"
            }`}
            onClick={() => handleCharacterSelect(character)}
          >
            <CharacterCard
              character={character}
              isLocked={Boolean(character.comingSoon)}
            />

            {character.comingSoon && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-lg bg-black/50">
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    openLockedModal(character);
                  }}
                  className="flex flex-col items-center justify-center gap-1 rounded border border-yellow-500 bg-zinc-800/80 px-3 py-2 font-bold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
                >
                  <Lock className="h-5 w-5" />
                  Locked
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredCharacters.length === 0 && (
        <div className="relative z-10 mt-12 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            No matching KVI dossiers found.
          </p>
        </div>
      )}

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-md"
          onClick={closeLockedModal}
        >
          <div
            className="w-full max-w-md rounded-lg border border-yellow-500 bg-zinc-900 p-6 text-center shadow-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 className="mb-3 text-lg font-bold text-yellow-400">
              Character Locked
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-yellow-200">
              The dossier for{" "}
              <span className="text-yellow-400">{lockedChar}</span> is still
              being prepared for release.
            </p>

            <button
              type="button"
              onClick={closeLockedModal}
              className="rounded bg-yellow-500 px-5 py-2 font-bold text-black transition hover:bg-yellow-400"
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