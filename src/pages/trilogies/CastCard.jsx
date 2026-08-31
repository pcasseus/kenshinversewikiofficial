import React from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

const PHASE_THEME = {
  1: {
    border: "border-pink-200/40",
    bar: "bg-pink-200/50 backdrop-blur-md",
    text: "text-pink-100",
  },
  2: {
    border: "border-slate-400/40",
    bar: "bg-slate-300/40 backdrop-blur-md",
    text: "text-slate-200",
  },
  3: {
    border: "border-emerald-300/40",
    bar: "bg-emerald-200/40 backdrop-blur-md",
    text: "text-emerald-200",
  },
};

export default function CastCard({ character, phase = 1, onLocked }) {
  const navigate = useNavigate();
  const theme = PHASE_THEME[phase];

  const handleClick = () => {
    if (character.comingSoon) {
      onLocked?.(character.name);
      return;
    }
    navigate(`/characters/${character.slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`relative ${
        character.comingSoon ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <div
        className={`relative w-[140px] sm:w-[150px] aspect-[2/3] rounded-xl overflow-hidden border ${theme.border} bg-black transition hover:-translate-y-1`}
      >
        {/* Image */}
        <img
          src={character.image}
          alt={character.name}
          className={`w-full h-full object-cover ${
            character.comingSoon && "grayscale opacity-60"
          }`}
          style={{ objectPosition: "50% 18%" }}
        />

        {/* NAME BAR — FIXED */}
        <div
          className={`absolute right-0 top-0 h-full w-8 flex items-center justify-center ${theme.bar}`}
        >
          <span
            className="
              [writing-mode:vertical-rl]
              rotate-180
              text-[16px]
              font-serif
              tracking-[0.18em]
              text-black
              select-none
            "
          >
            {character.name}
          </span>
        </div>

        {/* ROLE BADGE */}
        <div
          className={`absolute bottom-2 left-2 text-[9px] px-2 py-0.5 rounded-full bg-black/70 ${theme.text} uppercase tracking-widest`}
        >
          {character.role}
        </div>

        {/* LOCKED OVERLAY */}
        {character.comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <Lock size={18} className={theme.text} />
          </div>
        )}
      </div>
    </div>
  );
}
