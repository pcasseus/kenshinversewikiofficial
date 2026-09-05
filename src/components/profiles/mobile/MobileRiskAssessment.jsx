import React, {
  useMemo,
} from "react";

import {
  CURRENT_RELEASE,
  DOSSIER_STAGES,
  normalizeStage,
} from "../../../utils/profileRecordAccess";

const STAGE_LABELS = {
  beginning: "Beginning",
  middle: "Middle",
  end: "End",
};

const RISK_LEVELS = [
  "Minimal",
  "Guarded",
  "Elevated",
  "Severe",
  "Extreme",
];

const getRiskLevelIndex = (
  rating
) => {
  const index =
    RISK_LEVELS.findIndex(
      (level) =>
        level.toLowerCase() ===
        String(
          rating || ""
        ).toLowerCase()
    );

  return index >= 0
    ? index
    : 0;
};

const MobileRiskAssessment = ({
  character,
  activeStage = "beginning",
}) => {
  const riskRecord =
    character?.psychProfile
      ?.riskAssessment?.[
        CURRENT_RELEASE
      ];

  const availableStages =
    useMemo(() => {
      if (
        !riskRecord ||
        typeof riskRecord !==
          "object"
      ) {
        return [];
      }

      return DOSSIER_STAGES.filter(
        (stage) =>
          riskRecord[stage] &&
          typeof riskRecord[
            stage
          ] === "object"
      );
    }, [riskRecord]);

  if (
    availableStages.length ===
    0
  ) {
    return null;
  }

  const normalizedStage =
    normalizeStage(
      activeStage
    );

  const selectedIndex =
    DOSSIER_STAGES.indexOf(
      normalizedStage
    );

  let resolvedStage = null;

  for (
    let index =
      selectedIndex;
    index >= 0;
    index -= 1
  ) {
    const candidate =
      DOSSIER_STAGES[
        index
      ];

    if (
      availableStages.includes(
        candidate
      )
    ) {
      resolvedStage =
        candidate;
      break;
    }
  }

  if (!resolvedStage) {
    resolvedStage =
      availableStages[0];
  }

  const activeRisk =
    riskRecord?.[
      resolvedStage
    ];

  if (!activeRisk) {
    return null;
  }

  const activeIndex =
    getRiskLevelIndex(
      activeRisk.rating
    );

  return (
    <section className="overflow-hidden rounded-lg border border-yellow-600/60 bg-zinc-950">
      <div className="border-b border-yellow-600/25 bg-yellow-500/[0.04] px-4 py-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
          S.T.A.T.I.C.
          Psychological Analysis
        </p>

        <div className="mt-2 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-base font-black uppercase tracking-[0.12em] text-yellow-300">
              Risk Assessment
            </h2>

            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-zinc-500">
              Operational concern
              record
            </p>
          </div>

          <div className="text-right">
            <span className="block text-[9px] font-bold uppercase tracking-[0.12em] text-yellow-600">
              {CURRENT_RELEASE}
            </span>

            <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.1em] text-zinc-600">
              {
                STAGE_LABELS[
                  resolvedStage
                ] ||
                resolvedStage
              }
            </span>
          </div>
        </div>
      </div>

      <div className="border-b border-yellow-700/25 bg-black/40 px-4 py-4">
        <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-zinc-500">
          Current Classification
        </span>

        <span className="mt-1 block text-lg font-black uppercase tracking-[0.08em] text-yellow-300">
          {activeRisk.rating}{" "}
          Concern
        </span>
      </div>

      <div className="px-4 py-5">
        <div className="space-y-2">
          {RISK_LEVELS.map(
            (
              level,
              index
            ) => {
              const filled =
                index <=
                activeIndex;

              const current =
                index ===
                activeIndex;

              return (
                <div
                  key={level}
                  className="flex items-center gap-3"
                >
                  <span
                    className={`w-[70px] shrink-0 text-[9px] font-bold uppercase tracking-[0.1em] ${
                      current
                        ? "text-yellow-300"
                        : "text-zinc-500"
                    }`}
                  >
                    {level}
                  </span>

                  <div
                    className={`h-2 flex-1 border ${
                      current
                        ? "border-yellow-300"
                        : "border-zinc-800"
                    } ${
                      filled
                        ? "bg-yellow-500/40"
                        : "bg-zinc-900"
                    }`}
                  />
                </div>
              );
            }
          )}
        </div>

        <p className="mt-5 border-t border-yellow-900/30 pt-4 font-mono text-[11px] leading-5 text-zinc-400">
          Rating reflects the
          level of operational
          concern assigned to the
          subject by S.T.A.T.I.C.
          It does not measure
          morality or raw power.
        </p>
      </div>
    </section>
  );
};

export default MobileRiskAssessment;