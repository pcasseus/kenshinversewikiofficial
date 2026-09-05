import React from "react";

import {
  CURRENT_RELEASE,
} from "../../../utils/profileRecordAccess";

const STAGE_LABELS = {
  beginning: "Beginning",
  middle: "Middle",
  end: "End",
};

const MobileProfileHeader = ({
  character,
  operativeId,
  raceRecord,
  raceDisplay,
  selectedStage,
  revealedStages,
  stageProtected,
  onStageSelect,
  onRevealStage,
  activeTab,
  setActiveTab,
  tabs,
}) => {
  const hasRaceProgression =
    raceRecord?.hasProgression ===
    true;

  const stages =
    Array.isArray(
      raceRecord?.stages
    )
      ? raceRecord.stages
      : [];

  return (
    <header className="overflow-hidden rounded-lg border border-green-700/60 bg-[#050505]">
      {/* SYSTEM BAR */}

      <div className="flex items-center justify-between gap-3 border-b border-green-700/30 bg-green-950/10 px-4 py-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-green-400">
          Operative{" "}
          {operativeId}
        </span>

        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
          {CURRENT_RELEASE}{" "}
          Record
        </span>
      </div>

      {/* IDENTITY */}

      <div
        className="relative overflow-hidden px-4 py-5"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(34, 197, 94, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              to right,
              rgba(34, 197, 94, 0.035) 1px,
              transparent 1px
            )
          `,
          backgroundSize:
            "24px 24px",
        }}
      >
        <span className="absolute left-3 top-3 h-6 w-6 border-l border-t border-green-700/40" />

        <span className="absolute right-3 top-3 h-6 w-6 border-r border-t border-green-700/40" />

        <div className="relative">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
            S.T.A.T.I.C.
            Personnel Dossier
          </p>

          <h1 className="break-words text-2xl font-black uppercase leading-tight tracking-[0.08em] text-green-300">
            {character.name}
          </h1>

          <div className="mt-4 border-l-2 border-green-600/60 pl-3">
            <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
              Race
            </span>

            <span
              className={`mt-1 block text-sm font-bold uppercase tracking-[0.08em] ${
                stageProtected
                  ? "text-amber-300"
                  : "text-white"
              }`}
            >
              {raceDisplay ||
                "Unknown"}
            </span>
          </div>
        </div>
      </div>

      {/* DOSSIER STAGE */}

      {hasRaceProgression &&
        stages.length > 1 && (
          <div className="border-t border-green-700/30 bg-black">
            <div className="flex items-center justify-between px-4 pb-2 pt-3">
              <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-zinc-500">
                KVI Dossier
                Record
              </span>

              {stageProtected && (
                <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-amber-500">
                  Spoiler Protected
                </span>
              )}
            </div>

            <div
              className="grid border-y border-green-900/40"
              style={{
                gridTemplateColumns: `repeat(${stages.length}, minmax(0, 1fr))`,
              }}
            >
              {stages.map(
                (
                  entry,
                  index
                ) => {
                  const stage =
                    entry.stage;

                  const selected =
                    stage ===
                    selectedStage;

                  const protectedStage =
                    stage !==
                      "beginning" &&
                    !revealedStages.has(
                      stage
                    );

                  return (
                    <button
                      key={
                        stage
                      }
                      type="button"
                      onClick={() =>
                        onStageSelect(
                          stage
                        )
                      }
                      className={`relative min-h-[42px] px-2 py-2 text-[8px] font-bold uppercase tracking-[0.08em] transition ${
                        index > 0
                          ? "border-l border-green-900/40"
                          : ""
                      } ${
                        selected
                          ? "bg-green-950/30 text-green-300"
                          : "text-zinc-500"
                      }`}
                    >
                      {
                        STAGE_LABELS[
                          stage
                        ] ||
                        stage
                      }

                      {protectedStage && (
                        <span className="ml-1 text-amber-400">
                          •
                        </span>
                      )}

                      {selected && (
                        <span className="absolute inset-x-0 bottom-0 h-px bg-green-400" />
                      )}
                    </button>
                  );
                }
              )}
            </div>

            {stageProtected && (
              <div className="p-3">
                <button
                  type="button"
                  onClick={
                    onRevealStage
                  }
                  className="w-full rounded border border-amber-500/60 bg-amber-500/5 px-3 py-3 text-[9px] font-bold uppercase tracking-[0.12em] text-amber-300 transition active:bg-amber-500 active:text-black"
                >
                  Reveal Dossier
                  Record
                </button>
              </div>
            )}
          </div>
        )}

      {/* DOSSIER NAV */}

      <nav
        className="grid border-t border-green-700/30 bg-black"
        style={{
          gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))`,
        }}
        aria-label="Character dossier sections"
      >
        {tabs.map(
          (
            tab,
            index
          ) => {
            const active =
              activeTab ===
              tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() =>
                  setActiveTab(
                    tab.id
                  )
                }
                className={`relative min-w-0 px-1.5 py-3 text-center text-[9px] font-bold uppercase tracking-[0.08em] transition ${
                  index > 0
                    ? "border-l border-green-900/50"
                    : ""
                } ${
                  active
                    ? "bg-green-950/30 text-green-300"
                    : "text-zinc-400 hover:bg-green-950/15 hover:text-green-400"
                }`}
              >
                <span className="block truncate">
                  {tab.label}
                </span>

                {active && (
                  <span className="absolute inset-x-0 bottom-0 h-px bg-green-400" />
                )}
              </button>
            );
          }
        )}
      </nav>
    </header>
  );
};

export default MobileProfileHeader;