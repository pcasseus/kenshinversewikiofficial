import React from "react";
import { useFirebase } from "../../contexts/FirebaseProvider";
import { useNavigate } from "react-router-dom";
import { User, BookOpen, Globe } from "lucide-react";
import AICoreCircle from "../ui/AICoreCircle"; 

const IncomingTransmissionPanel = () => {
  const { user } = useFirebase();
  const navigate = useNavigate();
  const username = user?.displayName || user?.email?.split("@")[0] || "Agent";

  const handleAccessWesley = () => {
    window.__kenshin_entrySource = "fromHome";
    navigate("/characters/wesley", { state: { fromHome: true } });
  };

  return (
    <div className="w-full max-w-6xl h-full bg-blue-950/20 backdrop-blur border border-cyan-400 rounded-md px-4 sm:px-6 py-8 sm:py-10 text-sm text-cyan-200 hologram-panel animate-fadeIn shadow-[0_0_25px_rgba(0,255,255,0.1)] flex flex-col justify-start space-y-6 relative overflow-hidden">
      {/* Online Header */}
      <div className="text-center text-cyan-200 text-[11px] font-bold tracking-wider z-20">
        KENSHIN_CORE ONLINE
      </div>

      {/* AI Circle */}
      <div className="relative mx-auto z-10 -mt-2 scale-[0.8] sm:scale-100">
        <AICoreCircle size={144} />
      </div>

      {/* Transmission Header */}
      <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-cyan-400/80 flex items-center justify-center gap-1 mt-4 text-center">
        <span>∎ Incoming Transmission</span>
        <span className="dot-flash">.</span>
        <span className="dot-flash delay-1">.</span>
        <span className="dot-flash delay-2">.</span>
      </div>

      {/* Welcome Message */}
      <div className="leading-snug font-semibold text-cyan-300 text-base text-center sm:text-left">
        Welcome to the Kenshinverse,<br />
        <span className="text-white/90 text-lg">{username}</span>.
      </div>

      {/* Main Text Content */}
      <div className="mt-1 text-cyan-400/80 text-[13px] leading-relaxed tracking-wide space-y-4 text-left sm:text-justify">
        <p>
          You’ve accessed the official Kenshinverse interface — a living archive
          built to explore every thread of the universe I’ve cultivated.
        </p>
        <p>
          From character origins and their evolving abilities, to detailed lore,
          factions, powers, and the books where their stories blossom — it’s all here.
        </p>
        <p className="text-cyan-400 font-bold italic tracking-wide mt-3 text-sm underline-animate">
          Welcome to my mind.
        </p>
        <p className="text-cyan-300 font-bold text-sm">
          This is the Kenshinverse Wiki. 
        </p>
      </div>

      {/* AI Options Panel */}
      <div className="mt-8 pt-4 border-t border-cyan-700 text-xs font-mono text-cyan-300 space-y-4 animate-fadeIn delay-500">
        <div className="text-cyan-400 tracking-wide uppercase text-[11px] text-center sm:text-left">
          Recommended Entry Points
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleAccessWesley}
            className="w-full sm:flex-1 bg-blue-900/30 border border-blue-400 px-4 py-3 rounded-md text-left hover:bg-blue-800/30 transition shadow-md hover:shadow-blue-500/30"
          >
            <div className="flex items-center gap-2 text-blue-200 text-[10px] uppercase mb-1">
              <User className="w-3 h-3" />
              Access File
            </div>
            <div className="text-blue-100 font-semibold">
              Wanna meet the protagonist?
            </div>
            <div className="text-blue-400 text-[11px]">
              View Wesley Johnson’s complete dossier.
            </div>
          </button>

          <button
            onClick={() => navigate("/trilogy-1")}
            className="w-full sm:flex-1 bg-yellow-900/30 border border-yellow-400 px-4 py-3 rounded-md text-left hover:bg-yellow-800/30 transition shadow-md hover:shadow-yellow-400/30"
          >
            <div className="flex items-center gap-2 text-yellow-200 text-[10px] uppercase mb-1">
              <BookOpen className="w-3 h-3" />
              Initiate Sequence
            </div>
            <div className="text-yellow-100 font-semibold">
              Curious how it all starts?
            </div>
            <div className="text-yellow-400 text-[11px]">
              Read the Trilogy Synopsis'
            </div>
          </button>

          <button
            onClick={() => navigate("/lore")}
            className="w-full sm:flex-1 bg-purple-900/30 border border-purple-400 px-4 py-3 rounded-md text-left hover:bg-purple-800/30 transition shadow-md hover:shadow-purple-400/30"
          >
            <div className="flex items-center gap-2 text-purple-200 text-[10px] uppercase mb-1">
              <Globe className="w-3 h-3" />
              Run Overview
            </div>
            <div className="text-purple-100 font-semibold">
              Need a quick primer?
            </div>
            <div className="text-purple-400 text-[11px]">
              Browse key lore, powers, species, and timelines.
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncomingTransmissionPanel;
