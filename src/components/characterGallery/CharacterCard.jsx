import React from "react";
import { Lock } from "lucide-react";

const CharacterCard = ({ character, isLocked }) => {
  return (
    <article
      className={`group relative block ${
        isLocked ? "cursor-not-allowed opacity-90" : "cursor-pointer"
      }`}
    >
      <div className="flex h-[520px] flex-col overflow-hidden rounded-lg border border-yellow-500/50 bg-zinc-900 shadow-lg shadow-yellow-500/10 transition duration-300 sm:h-[620px]">
        {!isLocked && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="text-sm font-bold uppercase tracking-widest text-yellow-300">
              View Profile
            </span>
          </div>
        )}

        <div className="relative h-[390px] w-full overflow-hidden bg-zinc-950 sm:h-[510px]">
          {character.image ? (
            <img
              src={character.image}
              alt={character.name}
              className={`h-full w-full object-cover object-top ${
                isLocked ? "grayscale-[30%]" : ""
              }`}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_center,_rgba(234,179,8,0.08),_transparent_65%)] px-6 text-center">
              <Lock className="h-9 w-9 text-yellow-500/70" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-500/70">
                Classified Image
              </span>
            </div>
          )}
        </div>

        <div className="z-30 mt-auto border-t border-yellow-400 bg-black p-4">
          <h2 className="truncate text-lg font-bold uppercase tracking-wide text-yellow-300">
            {character.name}
          </h2>

          {!isLocked ? (
            <p className="mt-3 border-t border-zinc-700 pt-2 text-xs italic text-yellow-200">
              Tap to access full dossier →
            </p>
          ) : (
            <p className="mt-3 border-t border-zinc-700 pt-2 text-xs italic text-red-400">
              Dossier Locked
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

export default CharacterCard;