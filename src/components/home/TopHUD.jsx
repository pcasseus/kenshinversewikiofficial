import React, { useEffect, useState } from "react";

const formatDate = () =>
  new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

const TopHUD = ({ onRedoBootup }) => {
  const [now, setNow] = useState(formatDate);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(formatDate());
    }, 60000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative z-30 w-full border-b border-yellow-500 bg-black/70 px-3 py-3 text-sm sm:px-5 lg:px-6">
      <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 text-left">
          <h2 className="break-words font-bold leading-snug text-yellow-300">
            Editing Phase — {now}
          </h2>

          <p className="mt-1 max-w-3xl text-xs leading-relaxed text-gray-300">
            All books complete. Final polishing in progress. Publishing of Book
            1 goal: Spring 2026.
          </p>
        </div>

        <div className="flex min-w-0 flex-col items-start gap-2 text-xs font-mono text-cyan-300 sm:flex-row sm:items-center lg:shrink-0">
          <span className="max-w-full italic leading-snug lg:max-w-md">
            My stories are a place where evolution is earned, not given.
          </span>

          <button
            type="button"
            onClick={onRedoBootup}
            className="shrink-0 rounded border border-yellow-500 px-3 py-2 text-[10px] text-yellow-300 transition hover:bg-yellow-500/10"
          >
            Play Cinematic Intro
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHUD;