import React from "react";

const CharacterFilters = ({
  searchTerm,
  setSearchTerm,
  suggested,
  onCharacterSelect,
}) => {
  return (
    <div className="relative z-30 mx-auto mb-10 w-full max-w-2xl">
      <div className="relative">
        <input
          type="search"
          placeholder="Search KVI character dossiers..."
          className="w-full rounded border border-yellow-500 bg-black px-4 py-3 text-yellow-300 outline-none transition placeholder:text-zinc-600 focus:border-yellow-300 focus:shadow-[0_0_14px_rgba(234,179,8,0.2)]"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          autoComplete="off"
          aria-label="Search KVI characters"
        />

        {suggested.length > 0 && (
          <ul className="absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded border border-yellow-400 bg-zinc-950 text-sm shadow-xl">
            {suggested.map((character) => (
              <li key={character.slug}>
                <button
                  type="button"
                  onClick={() => onCharacterSelect(character)}
                  className="flex w-full items-center px-4 py-3 text-left text-yellow-200 transition hover:bg-yellow-700/30"
                >
                  <span>{character.name}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CharacterFilters;