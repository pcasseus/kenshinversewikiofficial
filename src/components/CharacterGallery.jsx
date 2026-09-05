import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import CharacterCard from "./characterGallery/CharacterCard";
import CharacterFilters from "./characterGallery/CharacterFilters";
import KenshinBanner from "./characterGallery/KenshinBanner";
import { allCharacters } from "./data/characterList.js";

function CharacterGallery() {
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleCharacterSelect = (character) => {
    window.__kenshin_entrySource = "fromGallery";

    navigate(`/characters/${character.slug}`, {
      state: { fromGallery: true },
    });
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
            className="relative cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={() => handleCharacterSelect(character)}
          >
            <CharacterCard character={character} />
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
    </div>
  );
}

export default CharacterGallery;