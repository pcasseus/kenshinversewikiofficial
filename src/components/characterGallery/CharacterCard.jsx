import React from "react";
import { useNavigate } from "react-router-dom";
import getBorderGlow from "./getBorderGlow";

const CharacterCard = ({ character, isLocked }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isLocked) {
      navigate(`/characters/${character.slug}`, {
        state: { fromGallery: true }
      });
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`relative block group ${
        isLocked ? "cursor-not-allowed opacity-90" : "cursor-pointer"
      }`}
    >
      <div
        className={`bg-zinc-900 border rounded-lg shadow-lg flex flex-col overflow-hidden h-[520px] sm:h-[620px] transition duration-300 ${getBorderGlow(
          character.division
        )}`}
      >
        {/* Hover overlay only for unlocked cards */}
        {!isLocked && (
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
            <span className="text-yellow-300 font-bold uppercase text-sm tracking-widest">
              View Profile
            </span>
          </div>
        )}

        <div className="w-full h-[390px] sm:h-[510px] overflow-hidden">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="p-4 border-t border-yellow-400 mt-auto z-30 bg-black">
          <h2 className="text-lg font-bold uppercase text-yellow-300 tracking-wide truncate">
            {character.name}
          </h2>
          <p className="text-sm text-gray-300 mt-1">
            Division: <span className="text-yellow-500">{character.division}</span>
          </p>
          {!isLocked ? (
            <p className="mt-3 text-xs italic text-yellow-200 border-t border-zinc-700 pt-2">
              Tap to access full dossier →
            </p>
          ) : (
            <p className="mt-3 text-xs italic text-red-400 border-t border-zinc-700 pt-2">
              Locked for Revamp
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
