import React, { useState } from "react";
import { X, AlertTriangle } from "lucide-react";
import { usePhaseCast } from "./usePhaseCast";
import CastGrid from "./CastGrid";

export default function TrilogyCastModal({ phase, onClose }) {
  const {
    mainCast = [],
    supportingCast = [],
    antagonistCast = [],
  } = usePhaseCast(phase);

  const [activeTab, setActiveTab] = useState("main");

  const getActiveCast = () => {
    if (activeTab === "main") return mainCast;
    if (activeTab === "supporting") return supportingCast;
    return antagonistCast;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative w-full max-w-5xl max-h-[85vh] overflow-hidden rounded-3xl border border-white/20 bg-black shadow-2xl">

        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
          <h2 className="text-lg tracking-widest uppercase">
            Phase {phase} Cast
          </h2>

          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* TABS */}
        <div className="flex gap-3 px-6 py-4">
          <Tab label="Main Cast" active={activeTab === "main"} onClick={() => setActiveTab("main")} />
          <Tab label="Supporting" active={activeTab === "supporting"} onClick={() => setActiveTab("supporting")} />
          <Tab label="Antagonists" active={activeTab === "antagonists"} onClick={() => setActiveTab("antagonists")} />
        </div>

        {/* SPOILER WARNING */}
        {activeTab === "antagonists" && (
          <div className="mx-6 mb-4 flex items-center gap-2 text-xs text-yellow-300">
            <AlertTriangle size={14} />
            Antagonist identities may contain spoilers
          </div>
        )}

        {/* CONTENT */}
        <div className="px-6 pb-6 overflow-y-auto max-h-[60vh]">
          <CastGrid
            cast={getActiveCast()}
            blurred={activeTab === "antagonists"}
          />
        </div>
      </div>
    </div>
  );
}

function Tab({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border transition
        ${active
          ? "bg-white text-black border-white"
          : "border-white/30 text-white/70 hover:text-white"
        }`}
    >
      {label}
    </button>
  );
}
