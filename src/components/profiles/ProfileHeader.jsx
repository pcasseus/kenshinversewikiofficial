import React, {
  useMemo,
  useState,
} from "react";

import PsychEvaluationSection from "./PsychEvaluationSection";

const CURRENT_RELEASE = "KVI";

const APPEARANCE_STAGES = [
  "beginning",
  "middle",
  "end",
];

const STAGE_LABELS = {
  beginning: "Beginning",
  middle: "Middle",
  end: "End",
};

const ProfileHeader = ({ character }) => {
  const [showFancast, setShowFancast] =
    useState(false);

  const appearanceRecord = useMemo(() => {
    const appearance =
      character?.stats?.appearance?.[
        CURRENT_RELEASE
      ];

    if (
      appearance &&
      typeof appearance === "object"
    ) {
      return appearance;
    }

    /*
     * Temporary support for character files that
     * still use the old bookVisuals structure.
     */
    const legacyVisuals =
      character?.stats?.bookVisuals;

    if (
      !legacyVisuals ||
      typeof legacyVisuals !== "object"
    ) {
      return null;
    }

    const legacyKVI =
      legacyVisuals[1] ||
      legacyVisuals["1"] ||
      legacyVisuals["Book 1"] ||
      legacyVisuals.KVI ||
      null;

    if (!legacyKVI) {
      return null;
    }

    return {
      beginning: {
        ...legacyKVI,

        identifyingMarks: {
          summary:
            legacyKVI.identifyingMarks
              ?.summary || null,

          scars: Array.isArray(
            legacyKVI.scars
          )
            ? legacyKVI.scars
            : [],
        },
      },
    };
  }, [character]);

  const availableStages = useMemo(() => {
    if (!appearanceRecord) {
      return [];
    }

    return APPEARANCE_STAGES.filter(
      (stage) =>
        appearanceRecord[stage] &&
        typeof appearanceRecord[stage] ===
          "object"
    );
  }, [appearanceRecord]);

  const [selectedStage, setSelectedStage] =
    useState("beginning");

  const activeStage =
    availableStages.includes(selectedStage)
      ? selectedStage
      : availableStages[0] ||
        "beginning";

  const visualData = useMemo(() => {
    if (
      !appearanceRecord ||
      availableStages.length === 0
    ) {
      return null;
    }

    const activeIndex =
      APPEARANCE_STAGES.indexOf(
        activeStage
      );

    return APPEARANCE_STAGES.slice(
      0,
      activeIndex + 1
    ).reduce((result, stage) => {
      const stageData =
        appearanceRecord[stage];

      if (!stageData) {
        return result;
      }

      const nextResult = {
        ...result,
        ...stageData,
      };

      if (
        result.hair ||
        stageData.hair
      ) {
        nextResult.hair = {
          ...(typeof result.hair ===
          "object"
            ? result.hair
            : {}),
          ...(typeof stageData.hair ===
          "object"
            ? stageData.hair
            : {}),
        };
      }

      if (
        result.identifyingMarks ||
        stageData.identifyingMarks
      ) {
        nextResult.identifyingMarks = {
          ...(result.identifyingMarks ||
            {}),
          ...(stageData.identifyingMarks ||
            {}),
        };
      }

      return nextResult;
    }, {});
  }, [
    appearanceRecord,
    availableStages,
    activeStage,
  ]);

  if (!character) {
    return null;
  }

  const aliases = Array.isArray(
    character.aliases
  )
    ? character.aliases
    : [];

  const surfaceTraits = Array.isArray(
    character?.psychProfile
      ?.surfaceTraits
  )
    ? character.psychProfile
        .surfaceTraits
    : [];

  const renderHair = () => {
    if (!visualData?.hair) {
      return null;
    }

    if (
      typeof visualData.hair === "string"
    ) {
      return visualData.hair;
    }

    const values = [
      visualData.hair.style,
      visualData.hair.color,
    ].filter(Boolean);

    return values.length > 0
      ? values.join(" / ")
      : null;
  };

  const hair = renderHair();

  const facialHair =
    visualData?.facialHair ||
    (typeof visualData?.hair === "object"
      ? visualData.hair.facialHair
      : null);

  const identifyingMarks =
    visualData?.identifyingMarks
      ?.summary || null;

  const hasMultipleStages =
    availableStages.length > 1;

  const birthDate =
    character.birthDate ||
    "Classified";

  const placeOfBirth =
    character.stats?.base
      ?.placeOfBirth || "Unknown";

  return (
    <section className="mb-8 sm:mb-10 lg:mb-12">
      {/* DOSSIER BAR */}

      <div className="mb-6 border-y border-green-700/60 bg-green-950/10 px-4 py-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-green-400">
            S.T.A.T.I.C. Personnel
            Dossier
          </span>

          <span className="text-[9px] uppercase tracking-[0.24em] text-zinc-500">
            KVI Archive // Active
            Record
          </span>
        </div>
      </div>

      {/* PRIMARY DOSSIER */}

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[340px_minmax(0,1fr)] xl:grid-cols-[380px_minmax(0,1fr)] xl:gap-12">
        {/* LEFT COLUMN */}

        <aside className="min-w-0">
          <div className="overflow-hidden rounded-lg border border-yellow-500/70 bg-zinc-950">
            {/* VISUAL HEADER */}

            <div className="flex items-center justify-between gap-4 border-b border-yellow-500/30 bg-yellow-500/5 px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-400">
                {showFancast
                  ? "Live-Action Reference"
                  : "In-Universe Look"}
              </span>

              <span className="shrink-0 text-[9px] uppercase tracking-widest text-zinc-600">
                {showFancast
                  ? "Non-Canon"
                  : `${CURRENT_RELEASE} Record`}
              </span>
            </div>

            {/* CANON VISUAL DESCRIPTION */}

            {!showFancast && (
              <>
                {hasMultipleStages && (
                  <div className="border-b border-yellow-500/20 bg-black px-4 py-3">
                    <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.22em] text-zinc-600">
                      {
                        CURRENT_RELEASE
                      }{" "}
                      Appearance
                    </p>

                    <div
                      className="grid overflow-hidden rounded border border-yellow-700/50"
                      style={{
                        gridTemplateColumns: `repeat(${availableStages.length}, minmax(0, 1fr))`,
                      }}
                    >
                      {availableStages.map(
                        (
                          stage,
                          index
                        ) => (
                          <button
                            key={stage}
                            type="button"
                            onClick={() =>
                              setSelectedStage(
                                stage
                              )
                            }
                            className={`relative px-2 py-2 text-center text-[8px] font-bold uppercase tracking-[0.18em] transition ${
                              index > 0
                                ? "border-l border-yellow-700/40"
                                : ""
                            } ${
                              activeStage ===
                              stage
                                ? "bg-yellow-500/10 text-yellow-300"
                                : "text-zinc-600 hover:bg-yellow-500/5 hover:text-yellow-500"
                            }`}
                          >
                            {
                              STAGE_LABELS[
                                stage
                              ]
                            }

                            {activeStage ===
                              stage && (
                              <span className="absolute inset-x-0 bottom-0 h-px bg-yellow-400" />
                            )}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                )}

                <div
                  className="p-4"
                  style={{
                    backgroundColor:
                      "#000",

                    backgroundImage: `
                      linear-gradient(rgba(34,197,94,0.055) 1px, transparent 1px),
                      linear-gradient(to right, rgba(34,197,94,0.055) 1px, transparent 1px)
                    `,

                    backgroundSize:
                      "28px 28px",
                  }}
                >
                  {visualData ? (
                    <div className="space-y-3 font-mono">
                      {visualData.height && (
                        <RecordItem
                          label="Height"
                          value={
                            visualData.height
                          }
                        />
                      )}

                      {(visualData.build ||
                        visualData.physique) && (
                        <RecordItem
                          label="Build"
                          value={
                            visualData.build ||
                            visualData.physique
                          }
                        />
                      )}

                      {visualData.eyes && (
                        <RecordItem
                          label="Eyes"
                          value={
                            visualData.eyes
                          }
                        />
                      )}

                      {visualData.skinTone && (
                        <RecordItem
                          label="Skin Tone"
                          value={
                            visualData.skinTone
                          }
                        />
                      )}

                      {hair && (
                        <RecordItem
                          label="Hair"
                          value={hair}
                        />
                      )}

                      {facialHair && (
                        <RecordItem
                          label="Facial Hair"
                          value={
                            facialHair
                          }
                        />
                      )}

                      {identifyingMarks && (
                        <RecordItem
                          label="Identifying Marks"
                          value={
                            identifyingMarks
                          }
                          last
                        />
                      )}
                    </div>
                  ) : (
                    <div className="flex min-h-[280px] items-center justify-center px-5 text-center">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-600">
                          Physical record
                          incomplete
                        </p>

                        <p className="mt-2 text-[9px] uppercase tracking-widest text-zinc-700">
                          Canon description
                          pending
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* PERSONALITY PROFILE */}

                {surfaceTraits.length >
                  0 && (
                  <div className="border-t border-yellow-500/30 bg-black px-4 py-4">
                    <p className="mb-3 text-[8px] font-bold uppercase tracking-[0.22em] text-zinc-600">
                      Personality Profile
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {surfaceTraits.map(
                        (trait) => (
                          <span
                            key={trait}
                            className="rounded border border-green-800/60 bg-green-950/10 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-green-300"
                          >
                            {trait}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* BIRTH RECORD */}

                <div className="grid grid-cols-2 gap-px border-t border-yellow-500/30 bg-yellow-500/20">
                  <div className="min-w-0 bg-black px-4 py-3">
                    <span className="block text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                      Date of Birth
                    </span>

                    <span className="mt-1 block break-words font-mono text-[11px] leading-5 text-yellow-300">
                      {birthDate}
                    </span>
                  </div>

                  <div className="min-w-0 bg-black px-4 py-3">
                    <span className="block text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                      Place of Birth
                    </span>

                    <span className="mt-1 block break-words font-mono text-[11px] leading-5 text-yellow-300">
                      {placeOfBirth}
                    </span>
                  </div>
                </div>
              </>
            )}

            {/* FANCAST */}

            {showFancast && (
              <div className="bg-black p-3">
                {character.image ? (
                  <img
                    src={
                      character.image
                    }
                    alt={`${character.name} live-action fancast reference`}
                    className="block w-full rounded object-cover object-top"
                  />
                ) : (
                  <div className="flex min-h-[420px] items-center justify-center rounded border border-zinc-800 px-5 text-center">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                      Fancast image
                      unavailable
                    </span>
                  </div>
                )}

                {character.fancast
                  ?.actor && (
                  <div className="px-3 py-4 text-center">
                    <span className="block text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                      Live-Action
                      Reference
                    </span>

                    <span className="mt-1 block text-xs font-bold uppercase tracking-[0.14em] text-yellow-300">
                      {
                        character
                          .fancast
                          .actor
                      }
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* TOGGLE */}

            {character.fancast && (
              <button
                type="button"
                onClick={() =>
                  setShowFancast(
                    (current) =>
                      !current
                  )
                }
                className="w-full border-t border-yellow-500/30 bg-yellow-500/5 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
              >
                {showFancast
                  ? "Return to In-Universe Look"
                  : "View Live-Action Fancast"}
              </button>
            )}
          </div>

          {/* FANCAST DISCLAIMER */}

          {showFancast &&
            character.fancast
              ?.note && (
              <div className="mt-4 rounded border border-zinc-800 bg-black/60 px-4 py-3 text-[10px] leading-relaxed text-zinc-500">
                <span className="mb-1 block uppercase tracking-[0.2em] text-yellow-500">
                  Fancast Notice
                </span>

                {
                  character.fancast
                    .note
                }
              </div>
            )}
        </aside>

        {/* RIGHT COLUMN */}

        <main className="min-w-0">
          {/* IDENTITY */}

          <div className="mb-4 border-b border-yellow-500/50 pb-5">
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-600">
              Subject Identification
            </p>

            <h1 className="break-words text-3xl font-black uppercase leading-tight tracking-[0.08em] text-yellow-400 sm:text-4xl xl:text-5xl">
              {character.name}
            </h1>

            <div className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-400">
              {aliases.length > 0
                ? aliases.join(
                    " • "
                  )
                : "No known aliases on record"}
            </div>
          </div>

          {/* SUBJECT RECORD */}

          <section className="overflow-hidden rounded-lg border border-yellow-500/60 bg-zinc-950">
            <div className="flex items-center justify-between border-b border-yellow-500/30 bg-yellow-500/5 px-5 py-4">
              <div>
                <p className="mb-1 text-[9px] uppercase tracking-[0.22em] text-zinc-600">
                  S.T.A.T.I.C.
                  Personnel Archive
                </p>

                <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-yellow-300">
                  Subject Record
                </h2>
              </div>

              <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                KVI
              </span>
            </div>

            {/* BIOGRAPHY */}

            <div className="px-5 py-5">
              <div className="mb-4">
                <p className="text-[9px] uppercase tracking-[0.22em] text-zinc-600">
                  Biographical Record
                </p>
              </div>

              {character.bio ? (
                <p className="whitespace-pre-line font-mono text-sm leading-7 text-zinc-300">
                  {character.bio}
                </p>
              ) : (
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  Biography record
                  pending.
                </p>
              )}
            </div>
          </section>
        </main>
      </div>

      {/* PSYCHOLOGICAL HISTORY */}

      <div className="mt-6">
        <PsychEvaluationSection
          character={character}
        />
      </div>
    </section>
  );
};

const RecordItem = ({
  label,
  value,
  last = false,
}) => (
  <div
    className={
      last
        ? "pb-1"
        : "border-b border-green-500/15 pb-3"
    }
  >
    <span className="block text-[9px] uppercase tracking-[0.2em] text-green-500">
      {label}
    </span>

    <span className="mt-1 block text-xs leading-5 text-zinc-300">
      {value}
    </span>
  </div>
);

export default ProfileHeader;