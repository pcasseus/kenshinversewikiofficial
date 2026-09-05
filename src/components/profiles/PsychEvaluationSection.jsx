import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const CURRENT_RELEASE = "KVI";

const RISK_STAGES = [
  "beginning",
  "middle",
  "end",
];

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

const getRiskLevelIndex = (rating) => {
  const index = RISK_LEVELS.findIndex(
    (level) =>
      level.toLowerCase() ===
      String(rating || "").toLowerCase()
  );

  return index >= 0 ? index : 0;
};

const PsychEvaluationSection = ({
  character,
}) => {
  const profile =
    character?.psychProfile;

  const notes = Array.isArray(
    profile?.notes
  )
    ? profile.notes
    : [];

  const traits = Array.isArray(
    profile?.traits
  )
    ? profile.traits
    : [];

  const riskRecord =
    profile?.riskAssessment?.[
      CURRENT_RELEASE
    ];

  const availableRiskStages =
    useMemo(() => {
      if (
        !riskRecord ||
        typeof riskRecord !== "object"
      ) {
        return [];
      }

      return RISK_STAGES.filter(
        (stage) =>
          riskRecord[stage] &&
          typeof riskRecord[stage] ===
            "object"
      );
    }, [riskRecord]);

  const [
    selectedRiskStage,
    setSelectedRiskStage,
  ] = useState(
    availableRiskStages[0] ||
      "beginning"
  );

  useEffect(() => {
    if (
      availableRiskStages.length >
        0 &&
      !availableRiskStages.includes(
        selectedRiskStage
      )
    ) {
      setSelectedRiskStage(
        availableRiskStages[0]
      );
    }
  }, [
    availableRiskStages,
    selectedRiskStage,
  ]);

  const activeRisk =
    availableRiskStages.length > 0
      ? riskRecord?.[
          selectedRiskStage
        ] ||
        riskRecord?.[
          availableRiskStages[0]
        ]
      : null;

  const findings = useMemo(() => {
    const behavioralFindings =
      notes.map((note, index) => ({
        id: `behavior-${index}`,
        type: "Observed Pattern",
        name: `Behavioral Finding ${String(
          index + 1
        ).padStart(2, "0")}`,
        description: note,
      }));

    const personalityFindings =
      traits.map((trait, index) => ({
        id: `trait-${index}`,
        type: "Personality Analysis",
        name:
          trait?.name ||
          `Trait ${String(
            index + 1
          ).padStart(2, "0")}`,
        description:
          trait?.description ||
          "No additional analysis available.",
      }));

    return [
      ...behavioralFindings,
      ...personalityFindings,
    ];
  }, [notes, traits]);

  const [
    activeFindingIndex,
    setActiveFindingIndex,
  ] = useState(0);

  useEffect(() => {
    setActiveFindingIndex(0);
  }, [character?.slug]);

  useEffect(() => {
    if (
      findings.length > 0 &&
      activeFindingIndex >=
        findings.length
    ) {
      setActiveFindingIndex(0);
    }
  }, [
    findings,
    activeFindingIndex,
  ]);

  if (
    !profile ||
    (findings.length === 0 &&
      !activeRisk)
  ) {
    return null;
  }

  const activeRiskIndex =
    getRiskLevelIndex(
      activeRisk?.rating
    );

  const activeFinding =
    findings[
      activeFindingIndex
    ] || null;

  const goPrevious = () => {
    if (findings.length <= 1) {
      return;
    }

    setActiveFindingIndex(
      (current) =>
        current === 0
          ? findings.length - 1
          : current - 1
    );
  };

  const goNext = () => {
    if (findings.length <= 1) {
      return;
    }

    setActiveFindingIndex(
      (current) =>
        current ===
        findings.length - 1
          ? 0
          : current + 1
    );
  };

  return (
    <section className="overflow-hidden rounded-lg border border-yellow-500/60 bg-zinc-950">
      {/* HEADER */}

      <div className="flex flex-col gap-2 border-b border-yellow-500/20 bg-yellow-500/[0.04] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-1 text-[10px] uppercase tracking-[0.18em] text-zinc-500">
            S.T.A.T.I.C.
            Psychological Record
          </p>

          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
            Psychological History
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[10px] uppercase tracking-[0.16em] text-zinc-500">
          <span>
            {CURRENT_RELEASE} Record
          </span>

          {findings.length > 0 && (
            <span>
              {findings.length} Findings
              Indexed
            </span>
          )}
        </div>
      </div>

      {/* RISK ASSESSMENT */}

      {activeRisk && (
        <div className="border-b border-yellow-500/15 bg-black/30 px-5 py-5 sm:px-6">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                S.T.A.T.I.C. Risk
                Assessment
              </p>

              <p className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-yellow-300">
                {activeRisk.rating}{" "}
                Concern
              </p>
            </div>

            <span className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
              {CURRENT_RELEASE}{" "}
              {
                STAGE_LABELS[
                  selectedRiskStage
                ]
              }
            </span>
          </div>

          {/* KVI PROGRESSION */}

          {availableRiskStages.length >
            1 && (
            <div className="mb-5 grid overflow-hidden rounded border border-yellow-700/40 sm:grid-cols-3">
              {availableRiskStages.map(
                (stage, index) => {
                  const selected =
                    stage ===
                    selectedRiskStage;

                  return (
                    <button
                      key={stage}
                      type="button"
                      onClick={() =>
                        setSelectedRiskStage(
                          stage
                        )
                      }
                      className={`relative px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.16em] transition ${
                        index > 0
                          ? "border-t border-yellow-700/30 sm:border-l sm:border-t-0"
                          : ""
                      } ${
                        selected
                          ? "bg-yellow-500/10 text-yellow-300"
                          : "bg-black text-zinc-500 hover:bg-yellow-500/5 hover:text-yellow-400"
                      }`}
                    >
                      {
                        STAGE_LABELS[
                          stage
                        ]
                      }

                      {selected && (
                        <span className="absolute inset-x-0 bottom-0 h-px bg-yellow-400" />
                      )}
                    </button>
                  );
                }
              )}
            </div>
          )}

          {/* RISK SCALE */}

          <div>
            <div className="grid grid-cols-5 gap-1.5">
              {RISK_LEVELS.map(
                (level, index) => {
                  const active =
                    index <=
                    activeRiskIndex;

                  const current =
                    index ===
                    activeRiskIndex;

                  return (
                    <div
                      key={level}
                      className={`h-3 border ${
                        current
                          ? "border-yellow-300"
                          : "border-zinc-800"
                      } ${
                        active
                          ? "bg-yellow-500/40"
                          : "bg-zinc-900"
                      }`}
                    />
                  );
                }
              )}
            </div>

            <div className="mt-2 grid grid-cols-5 gap-1.5">
              {RISK_LEVELS.map(
                (level, index) => (
                  <span
                    key={level}
                    className={`text-center text-[9px] font-medium uppercase tracking-[0.1em] ${
                      index ===
                      activeRiskIndex
                        ? "text-yellow-300"
                        : "text-zinc-500"
                    }`}
                  >
                    {level}
                  </span>
                )
              )}
            </div>
          </div>

          <p className="mt-4 max-w-3xl font-mono text-[11px] leading-5 text-zinc-400">
            Rating reflects the level
            of operational concern
            assigned to the subject by
            S.T.A.T.I.C. It does not
            measure morality or raw
            power.
          </p>
        </div>
      )}

      {/* PSYCHOLOGICAL FINDINGS */}

      {activeFinding && (
        <div className="px-5 py-5 sm:px-6 sm:py-6">
          {/* FINDINGS HEADER */}

          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                Behavioral & Personality
                Analysis
              </p>

              <h3 className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
                Psychological Findings
              </h3>
            </div>

            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">
              {String(
                activeFindingIndex + 1
              ).padStart(2, "0")}
              {" / "}
              {String(
                findings.length
              ).padStart(2, "0")}
            </span>
          </div>

          {/* CAROUSEL RECORD */}

          <div className="overflow-hidden rounded border border-yellow-700/45 bg-black">
            <div className="border-b border-yellow-700/30 bg-yellow-500/[0.03] px-5 py-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                    {activeFinding.type}
                  </span>

                  <h4 className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-yellow-300">
                    {activeFinding.name}
                  </h4>
                </div>

                <span className="text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                  Record{" "}
                  {String(
                    activeFindingIndex +
                      1
                  ).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="min-h-[130px] px-5 py-5 sm:min-h-[150px] sm:px-6">
              <p className="font-mono text-sm leading-7 text-zinc-300">
                {
                  activeFinding.description
                }
              </p>
            </div>

            {/* CAROUSEL CONTROLS */}

            {findings.length > 1 && (
              <div className="flex flex-col gap-4 border-t border-yellow-700/25 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={goPrevious}
                  className="inline-flex items-center justify-center gap-2 rounded border border-yellow-700/60 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-yellow-300 transition hover:border-yellow-400 hover:bg-yellow-500 hover:text-black"
                  aria-label="Previous psychological finding"
                >
                  <ChevronLeft
                    size={15}
                  />

                  Previous
                </button>

                {/* POSITION INDICATORS */}

                <div className="flex flex-wrap items-center justify-center gap-1.5">
                  {findings.map(
                    (finding, index) => (
                      <button
                        key={finding.id}
                        type="button"
                        onClick={() =>
                          setActiveFindingIndex(
                            index
                          )
                        }
                        className={`h-2 rounded-full transition-all ${
                          index ===
                          activeFindingIndex
                            ? "w-5 bg-yellow-400"
                            : "w-2 bg-zinc-700 hover:bg-zinc-500"
                        }`}
                        aria-label={`View psychological finding ${
                          index + 1
                        }`}
                        aria-current={
                          index ===
                          activeFindingIndex
                            ? "true"
                            : undefined
                        }
                      />
                    )
                  )}
                </div>

                <button
                  type="button"
                  onClick={goNext}
                  className="inline-flex items-center justify-center gap-2 rounded border border-yellow-700/60 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-yellow-300 transition hover:border-yellow-400 hover:bg-yellow-500 hover:text-black"
                  aria-label="Next psychological finding"
                >
                  Next

                  <ChevronRight
                    size={15}
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default PsychEvaluationSection;