// src/components/home/IncomingTransmissionPanel.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  BookOpen,
  Globe,
} from "lucide-react";

import AICoreCircle from "../ui/AICoreCircle";

const IncomingTransmissionPanel = () => {
  const navigate = useNavigate();

  const handleAccessWesley = () => {
    window.__kenshin_entrySource = "fromHome";

    navigate("/characters/wesley", {
      state: {
        fromHome: true,
      },
    });
  };

  return (
    <div className="flex h-auto w-full flex-col overflow-hidden rounded-md border border-cyan-400 bg-blue-950/20 px-3 py-5 text-sm text-cyan-200 shadow-[0_0_25px_rgba(0,255,255,0.1)] backdrop-blur sm:px-5 sm:py-7 lg:h-full lg:px-6 lg:py-10 hologram-panel animate-fadeIn">
      {/* Online Header */}
      <div className="relative z-20 text-center text-[9px] font-bold tracking-wider text-cyan-200 sm:text-[10px] lg:text-[11px]">
        KENSHIN_CORE ONLINE
      </div>

      {/* AI Core */}
      <div className="relative z-10 mx-auto mt-2 flex h-[108px] w-[108px] items-center justify-center sm:mt-3 sm:h-[124px] sm:w-[124px] lg:mt-4 lg:h-[144px] lg:w-[144px]">
        <div className="scale-[0.75] sm:scale-[0.86] lg:scale-100">
          <AICoreCircle size={144} />
        </div>
      </div>

      {/* Transmission Header */}
      <div className="mt-4 flex items-center justify-center gap-1 text-center text-[9px] font-bold uppercase tracking-widest text-cyan-400/80 sm:mt-5 sm:text-[10px] lg:mt-8 lg:text-[11px]">
        <span>∴ Incoming Transmission</span>
        <span className="dot-flash">.</span>
        <span className="dot-flash delay-1">.</span>
        <span className="dot-flash delay-2">.</span>
      </div>

      {/* Welcome */}
      <div className="mt-5 text-center text-sm font-semibold leading-snug text-cyan-300 sm:mt-6 sm:text-base lg:mt-7 lg:text-left">
        Welcome to the
        <br />

        <span className="text-base text-white/90 sm:text-lg">
          Kenshinverse Archive.
        </span>
      </div>

      {/* Main Transmission Copy */}
      <div className="mt-5 space-y-4 text-left text-[12px] leading-relaxed tracking-wide text-cyan-400/80 sm:mt-6 sm:text-[13px] lg:mt-7 lg:space-y-5">
        <p>
          You’ve accessed the official Kenshinverse interface, a living archive
          documenting a superhero science-fiction universe hidden beneath the
          surface of an otherwise familiar world.
        </p>

        <p>
          <span className="font-bold text-cyan-300">
            KVI: Hello To Yesterday is the first entry point.
          </span>{" "}
          At the center of its story is Wesley Johnson, a young man simply
          trying to live with the cards he was dealt. But some things refuse to
          stay buried. Wesley is forced to decide whether he’ll continue
          running or finally face the inevitable.
        </p>

        <p>
          Beyond Wesley, KVI introduces a growing cast of heroes, villains, and
          everything in between, each carrying their own conflicts, histories,
          abilities, and paths forward. Their stories may intersect, but their
          evolution is their own.
        </p>

        <p>
          <span className="font-bold text-cyan-300">
            Powers within the Kenshinverse are more than weapons.
          </span>{" "}
          They develop alongside the people who possess them, shaped by their
          limitations, experiences, choices, and the pressure placed upon them.
          Growth is rarely immediate, and rarely free.
        </p>

        <p>
          <span className="font-bold text-cyan-300">
            KVI is only the beginning.
          </span>{" "}
          What starts here is an introduction to a much larger universe of
          extraordinary abilities, hidden histories, evolving characters, and
          conflicts that extend far beyond a single story.
        </p>

        <p>
          Character dossiers, classified records, power data, and connected
          archive entries can be accessed throughout the system.
        </p>

        <p className="mt-2 text-[13px] font-bold italic tracking-wide text-cyan-400 underline-animate sm:text-sm lg:mt-3">
          Welcome to my mind.
        </p>

        <p className="text-[13px] font-bold text-cyan-300 sm:text-sm">
          This is the Kenshinverse Wiki.
        </p>
      </div>

      {/* Recommended Entry Points */}
      <div className="mt-7 pt-1 lg:mt-auto lg:pt-10">
        <div className="space-y-3 border-t border-cyan-700 pt-4 font-mono text-xs text-cyan-300 animate-fadeIn delay-500 sm:space-y-4">
          <div className="text-center text-[10px] uppercase tracking-wide text-cyan-400 sm:text-[11px] lg:text-left">
            Recommended Entry Points
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <button
              type="button"
              onClick={handleAccessWesley}
              className="w-full rounded-md border border-blue-400 bg-blue-900/30 px-3 py-3 text-left shadow-md transition hover:bg-blue-800/30 hover:shadow-blue-500/30 sm:flex-1 sm:px-4"
            >
              <div className="mb-1 flex items-center gap-2 text-[9px] uppercase text-blue-200 sm:text-[10px]">
                <User className="h-3 w-3" />
                Access File
              </div>

              <div className="text-[12px] font-semibold text-blue-100 sm:text-xs">
                Wanna meet the protagonist?
              </div>

              <div className="mt-1 text-[10px] leading-relaxed text-blue-400 sm:text-[11px]">
                View Wesley Johnson’s complete dossier.
              </div>
            </button>

            <button
              type="button"
              onClick={() => navigate("/trilogy-1")}
              className="w-full rounded-md border border-yellow-400 bg-yellow-900/30 px-3 py-3 text-left shadow-md transition hover:bg-yellow-800/30 hover:shadow-yellow-400/30 sm:flex-1 sm:px-4"
            >
              <div className="mb-1 flex items-center gap-2 text-[9px] uppercase text-yellow-200 sm:text-[10px]">
                <BookOpen className="h-3 w-3" />
                Initiate Sequence
              </div>

              <div className="text-[12px] font-semibold text-yellow-100 sm:text-xs">
                Curious how it all starts?
              </div>

              <div className="mt-1 text-[10px] leading-relaxed text-yellow-400 sm:text-[11px]">
                Explore KVI: Hello To Yesterday.
              </div>
            </button>

            <button
              type="button"
              onClick={() => navigate("/lore")}
              className="w-full rounded-md border border-purple-400 bg-purple-900/30 px-3 py-3 text-left shadow-md transition hover:bg-purple-800/30 hover:shadow-purple-400/30 sm:flex-1 sm:px-4"
            >
              <div className="mb-1 flex items-center gap-2 text-[9px] uppercase text-purple-200 sm:text-[10px]">
                <Globe className="h-3 w-3" />
                Run Overview
              </div>

              <div className="text-[12px] font-semibold text-purple-100 sm:text-xs">
                Need a quick primer?
              </div>

              <div className="mt-1 text-[10px] leading-relaxed text-purple-400 sm:text-[11px]">
                Browse key lore, powers, species, and timelines.
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomingTransmissionPanel;