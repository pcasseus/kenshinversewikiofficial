import React from "react";

const TopHUD = ({ onRedoBootup }) => {
  const now = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 py-3 bg-black/70 border-b border-yellow-500 z-30 text-sm gap-y-2 sm:gap-y-0">
      {/* Left Side: Banner Info */}
      <div className="text-left w-full sm:w-auto">
        <h2 className="text-yellow-300 font-bold leading-snug">
          Editing Phase — {now}
        </h2>
        <p className="text-gray-300 text-xs mt-1 sm:mt-0">
          All books complete. Final polishing in progress. Publishing of Book 1 goal: Spring 2026.
        </p>
      </div>

      {/* Right Side: Tagline + Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 text-xs text-cyan-300 font-mono w-full sm:w-auto">
        <span className="italic leading-snug sm:whitespace-nowrap">
          My stories are a place where evolution is earned, not given.
        </span>
        <button
          onClick={onRedoBootup}
          className="text-yellow-300 border border-yellow-500 text-[10px] px-3 py-1 rounded hover:bg-yellow-500/10 transition"
        >
          Play Cinematic Intro
        </button>
      </div>
    </div>
  );
};

export default TopHUD;
