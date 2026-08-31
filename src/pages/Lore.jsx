import React from "react";
import { Link } from "react-router-dom";

export default function Lore() {
  return (
    <div className="min-h-screen bg-black text-white font-mono relative overflow-hidden">
      {/* Archive Paper Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff06_1px,transparent_1px)] bg-[length:4px_4px] pointer-events-none z-0" />

      {/* ================= DESKTOP LAYOUT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 hidden md:block">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-yellow-400 uppercase tracking-widest">
            Lore Index
          </h1>
          <p className="mt-4 text-gray-400 italic max-w-2xl mx-auto">
            A living glossary documenting the races, locations, technologies, and
            historical truths of the{" "}
            <span className="text-blue-300">KenshinVerse</span>.
          </p>
        </div>

        {/* Core Volumes */}
        <section className="mb-24">
          <h2 className="text-sm text-yellow-300 tracking-widest uppercase border-b border-yellow-700 pb-2 mb-8">
            Core Volumes
          </h2>

          <div className="grid grid-cols-2 gap-12">
            {/* ===== RACES — GREEN ===== */}
            <Link
              to="/lore/races"
              className="group relative bg-gradient-to-br from-green-900/85 to-black border border-green-600 rounded-xl p-10 shadow-xl overflow-hidden transition-all duration-500"
            >
              {/* Page Curl */}
              <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-black/40 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <div className="absolute top-0 right-0 h-full w-full origin-right scale-x-0 group-hover:scale-x-100 bg-black/20 transition-transform duration-500" />

              <h3 className="text-2xl font-bold text-green-300 mb-4 tracking-wide">
                🧬 Races
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Definitive records of evolved species, Deviant classifications,
                off-world entities, and hybrid lifeforms that shape the universe.
              </p>

              <span className="absolute bottom-6 right-8 text-[11px] text-green-500 opacity-70">
                Volume I
              </span>
            </Link>

            {/* ===== LEADERBOARD — GOLD ===== */}
            <Link
              to="/lore/leaderboard"
              className="group relative bg-gradient-to-br from-yellow-900/90 to-yellow-950 border border-yellow-600 rounded-xl p-10 shadow-xl overflow-hidden transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-yellow-300 mb-4 tracking-wide">
                🧠 Kenshinverse Leaderboard
              </h3>

              <p className="text-gray-300 leading-relaxed">
                A living strength index tracking the most powerful entities across
                Books I–III. Rankings shift as power evolves, alliances change, and
                limits are broken.
              </p>

              <p className="mt-4 text-yellow-400 text-xs italic">
                Dynamic rankings • Timeline-based • Canon-locked
              </p>

              <span className="absolute bottom-6 right-8 text-[11px] text-yellow-500 opacity-70">
                Power Index
              </span>
            </Link>

            {/* ===== POI — LOCKED ===== */}
            <div className="relative bg-black/70 border border-yellow-800 rounded-xl p-10 shadow-inner">
              <span className="absolute top-4 right-5 text-xs text-red-400 tracking-widest">
                LOCKED
              </span>

              <h3 className="text-2xl font-bold text-yellow-300 mb-4 tracking-wide">
                📍 Points of Interest
              </h3>
              <p className="text-gray-400 leading-relaxed">
                This volume is undergoing a complete reconstruction due to scale,
                continuity, and structural issues within the location system.
              </p>

              <p className="mt-4 text-yellow-600 text-xs italic">
                Revamp underway. Re-entry pending stabilization.
              </p>

              <span className="absolute bottom-6 right-8 text-[11px] text-yellow-700 opacity-50">
                Volume II
              </span>
            </div>
          </div>
        </section>

        {/* Archive Shelf */}
        <section className="mb-24">
          <h2 className="text-sm text-yellow-300 tracking-widest uppercase border-b border-yellow-700 pb-2 mb-8">
            Archive Shelf — Incoming Volumes
          </h2>

          <div className="grid grid-cols-2 gap-8">
            <ArchiveCard
              title="Historical Archives"
              description="Timeline records, classified incidents, and universe-shaping events. Awaiting finalized chronology."
              status="Planned"
            />

            <ArchiveCard
              title="Tech & Artifacts"
              description="Alien relics, experimental technology, Deviant enhancements, and legendary constructs."
              status="Planned"
            />

            <div className="col-span-2">
              <ArchiveCard
                title="Additional Lore Systems"
                description="Expanded glossaries, faction dossiers, cross-book indexing tools, and future codex modules."
                status="In Ideation"
              />
            </div>
          </div>
        </section>

        <footer className="text-xs text-green-400 text-center tracking-widest border-t border-yellow-700 pt-6">
          STATUS: ACCESS GRANTED — LORE ARCHIVE ONLINE
        </footer>
      </div>

      {/* ================= MOBILE LAYOUT ================= */}
      <div className="relative z-10 px-5 py-16 md:hidden">
        {/* Mobile Header */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-yellow-400 uppercase tracking-widest">
            Lore Index
          </h1>

          <p className="mt-3 text-gray-400 italic text-center text-sm max-w-[26rem] mx-auto">
            A living glossary documenting the races, locations, technologies, and
            historical truths of the{" "}
            <span className="text-blue-300">KenshinVerse</span>.
          </p>
        </div>

        {/* Mobile Section Divider */}
        <div className="mt-10">
          <div className="text-[11px] text-yellow-300 tracking-widest uppercase border-b border-yellow-700 pb-2">
            Core Volumes
          </div>

          <div className="mt-6 space-y-6">
            {/* Mobile Races — GREEN */}
            <Link
              to="/lore/races"
              className="block border border-green-600 rounded-xl p-5 bg-gradient-to-br from-green-900/80 to-black shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-green-300 tracking-wide">
                    🧬 Races
                  </h3>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                    Definitive records of evolved species, Deviant classifications,
                    off-world entities, and hybrid lifeforms.
                  </p>
                </div>

                <span className="text-[10px] text-green-400/70 uppercase tracking-widest whitespace-nowrap">
                  Volume I
                </span>
              </div>
            </Link>

            {/* ✅ Mobile Leaderboard — GOLD (WAS MISSING) */}
            <Link
              to="/lore/leaderboard"
              className="block border border-yellow-600 rounded-xl p-5 bg-gradient-to-br from-yellow-900/80 to-yellow-950 shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-yellow-300 tracking-wide">
                    🧠 Kenshinverse Leaderboard
                  </h3>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                    A living strength index tracking the most powerful entities
                    across Books I–III as power evolves and limits break.
                  </p>
                  <p className="mt-3 text-yellow-400 text-[11px] italic">
                    Dynamic rankings • Timeline-based • Canon-locked
                  </p>
                </div>

                <span className="text-[10px] text-yellow-400/70 uppercase tracking-widest whitespace-nowrap">
                  Power Index
                </span>
              </div>
            </Link>

            {/* Mobile POI — LOCKED */}
            <div className="border border-yellow-800 rounded-xl p-5 bg-black/60 shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-yellow-950/30 to-transparent pointer-events-none" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] text-red-400 mb-1 tracking-widest">
                    LOCKED
                  </div>
                  <h3 className="text-lg font-bold text-yellow-300 tracking-wide">
                    📍 Points of Interest
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    Undergoing reconstruction due to scale, continuity, and
                    structural issues in the location system.
                  </p>
                  <p className="mt-3 text-yellow-600 text-[11px] italic">
                    Revamp underway. Re-entry pending stabilization.
                  </p>
                </div>

                <span className="text-[10px] text-yellow-700/60 uppercase tracking-widest whitespace-nowrap">
                  Volume II
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Archive Shelf */}
        <div className="mt-12">
          <div className="text-[11px] text-yellow-300 tracking-widest uppercase border-b border-yellow-700 pb-2">
            Archive Shelf — Incoming Volumes
          </div>

          <div className="mt-6 space-y-5">
            <div className="border border-dashed border-yellow-700 rounded-xl p-5 bg-yellow-950/30 opacity-75">
              <h4 className="text-yellow-300 font-semibold text-sm">
                🔒 Historical Archives
              </h4>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                Timeline records, classified incidents, and universe-shaping events.
              </p>
              <p className="mt-2 text-[11px] text-yellow-600 italic">
                Status: Planned
              </p>
            </div>

            <div className="border border-dashed border-yellow-700 rounded-xl p-5 bg-yellow-950/30 opacity-75">
              <h4 className="text-yellow-300 font-semibold text-sm">
                🔒 Tech & Artifacts
              </h4>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                Alien relics, experimental technology, Deviant enhancements, and
                legendary constructs.
              </p>
              <p className="mt-2 text-[11px] text-yellow-600 italic">
                Status: Planned
              </p>
            </div>

            <div className="border border-dashed border-yellow-700 rounded-xl p-5 bg-yellow-950/30 opacity-75">
              <h4 className="text-yellow-300 font-semibold text-sm">
                🔒 Additional Lore Systems
              </h4>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                Expanded glossaries, faction dossiers, cross-book indexing tools,
                and future codex modules.
              </p>
              <p className="mt-2 text-[11px] text-yellow-600 italic">
                Status: In Ideation
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-16 text-[10px] text-green-400 text-center tracking-widest border-t border-yellow-700 pt-4">
          LORE ARCHIVE ACTIVE
        </footer>
      </div>
    </div>
  );
}

/* ===== Helper ===== */
function ArchiveCard({ title, description, status }) {
  return (
    <div className="border border-dashed border-yellow-700 rounded-lg p-6 bg-yellow-950/40 opacity-70">
      <h4 className="text-lg font-semibold text-yellow-300 mb-2">
        🔒 {title}
      </h4>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      <p className="mt-2 text-xs text-yellow-600 italic">Status: {status}</p>
    </div>
  );
}
