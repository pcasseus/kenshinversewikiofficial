import React, {
  useMemo,
  useState,
} from "react";

import { ChevronDown } from "lucide-react";

import RelationshipsSection from "../RelationshipsSection";

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

const getAppearanceStages = (
  character
) => {
  const releaseAppearance =
    character?.stats?.appearance?.[
      CURRENT_RELEASE
    ];

  if (
    !releaseAppearance ||
    typeof releaseAppearance !==
      "object"
  ) {
    return [];
  }

  return APPEARANCE_STAGES.filter(
    (stage) =>
      releaseAppearance[stage] &&
      typeof releaseAppearance[
        stage
      ] === "object"
  );
};

const mergeAppearanceStages = (
  character,
  targetStage
) => {
  const releaseAppearance =
    character?.stats?.appearance?.[
      CURRENT_RELEASE
    ];

  if (
    !releaseAppearance ||
    typeof releaseAppearance !==
      "object"
  ) {
    return null;
  }

  const targetIndex =
    APPEARANCE_STAGES.indexOf(
      targetStage
    );

  if (targetIndex === -1) {
    return null;
  }

  let merged = {};

  APPEARANCE_STAGES.slice(
    0,
    targetIndex + 1
  ).forEach((stage) => {
    const record =
      releaseAppearance[stage];

    if (
      record &&
      typeof record === "object"
    ) {
      merged = {
        ...merged,
        ...record,

        hair: {
          ...(merged.hair || {}),
          ...(record.hair || {}),
        },

        identifyingMarks: {
          ...(merged.identifyingMarks ||
            {}),
          ...(record.identifyingMarks ||
            {}),
        },
      };
    }
  });

  return merged;
};

const getLegacyAppearance = (
  character
) => {
  const base =
    character?.stats?.base;

  if (!base) {
    return null;
  }

  return {
    height: base.height,
    build: base.build,
    eyes: base.eyes,
    skinTone: base.skinTone,

    hair: {
      style: base.hair,
      color: base.hairColor,
      facialHair: base.facialHair,
    },

    identifyingMarks: {
      summary:
        base.identifyingMarks ||
        base.scars ||
        base.distinguishingMarks,
    },
  };
};

const getBiographyText = (
  character
) => {
  const bio = character?.bio;

  if (!bio) {
    return "";
  }

  if (typeof bio === "string") {
    return bio;
  }

  if (
    typeof bio.biography === "string"
  ) {
    return bio.biography;
  }

  if (
    typeof bio.summary === "string"
  ) {
    return bio.summary;
  }

  if (
    typeof bio.description === "string"
  ) {
    return bio.description;
  }

  return "";
};

const getParagraphs = (content) => {
  if (
    typeof content !== "string" ||
    content.trim() === ""
  ) {
    return [];
  }

  return content
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) =>
      paragraph
        .replace(/\s*\n\s*/g, " ")
        .replace(/\s{2,}/g, " ")
        .trim()
    )
    .filter(Boolean);
};

const MobileOverview = ({
  character,
}) => {
  const availableAppearanceStages =
    useMemo(
      () =>
        getAppearanceStages(
          character
        ),
      [character]
    );

  const [
    appearanceStage,
    setAppearanceStage,
  ] = useState(
    availableAppearanceStages[0] ||
      "beginning"
  );

  const [bioExpanded, setBioExpanded] =
    useState(false);

  const appearance =
    availableAppearanceStages.length >
    0
      ? mergeAppearanceStages(
          character,
          appearanceStage
        )
      : getLegacyAppearance(
          character
        );

  const biography =
    getBiographyText(character);

  const biographyParagraphs =
    getParagraphs(biography);

  const visibleBiographyParagraphs =
    bioExpanded
      ? biographyParagraphs
      : biographyParagraphs.slice(
          0,
          2
        );

  const traits = Array.isArray(
    character?.personalityTraits
  )
    ? character.personalityTraits.filter(
        Boolean
      )
    : Array.isArray(
          character?.traits
        )
      ? character.traits.filter(
          Boolean
        )
      : [];

  const appearanceRows = [
    {
      label: "Height",
      value: appearance?.height,
    },
    {
      label: "Build",
      value: appearance?.build,
    },
    {
      label: "Eyes",
      value: appearance?.eyes,
    },
    {
      label: "Skin Tone",
      value: appearance?.skinTone,
    },
    {
      label: "Hair",
      value:
        appearance?.hair?.style,
    },
    {
      label: "Hair Color",
      value:
        appearance?.hair?.color,
    },
    {
      label: "Facial Hair",
      value:
        appearance?.hair
          ?.facialHair,
    },
    {
      label: "Identifying Marks",
      value:
        appearance
          ?.identifyingMarks
          ?.summary,
    },
  ].filter(
    (entry) =>
      entry.value !== undefined &&
      entry.value !== null &&
      String(entry.value).trim() !== ""
  );

  return (
    <div className="space-y-5">
      {/* IN-UNIVERSE LOOK */}

      {appearance &&
        appearanceRows.length > 0 && (
          <section className="overflow-hidden rounded-lg border border-green-700/60 bg-zinc-950">
            <div className="border-b border-green-700/30 bg-green-950/10 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
                Visual Identification
              </p>

              <h2 className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-green-300">
                In-Universe Look
              </h2>
            </div>

            {availableAppearanceStages.length >
              1 && (
              <div
                className="grid border-b border-green-700/30 bg-black"
                style={{
                  gridTemplateColumns: `repeat(${availableAppearanceStages.length}, minmax(0, 1fr))`,
                }}
              >
                {availableAppearanceStages.map(
                  (stage, index) => {
                    const active =
                      appearanceStage ===
                      stage;

                    return (
                      <button
                        key={stage}
                        type="button"
                        onClick={() =>
                          setAppearanceStage(
                            stage
                          )
                        }
                        className={`relative px-3 py-3 text-[10px] font-bold uppercase tracking-[0.12em] ${
                          index > 0
                            ? "border-l border-green-900/50"
                            : ""
                        } ${
                          active
                            ? "bg-green-950/30 text-green-300"
                            : "text-zinc-400"
                        }`}
                      >
                        {
                          STAGE_LABELS[
                            stage
                          ]
                        }

                        {active && (
                          <span className="absolute inset-x-0 bottom-0 h-px bg-green-400" />
                        )}
                      </button>
                    );
                  }
                )}
              </div>
            )}

            <div className="divide-y divide-zinc-800/80 px-4">
              {appearanceRows.map(
                (entry) => (
                  <div
                    key={entry.label}
                    className="grid grid-cols-[105px_minmax(0,1fr)] gap-4 py-3"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-400">
                      {entry.label}
                    </span>

                    <span className="text-sm leading-6 text-zinc-200">
                      {entry.value}
                    </span>
                  </div>
                )
              )}
            </div>

            {/* BIRTH RECORD */}

            <div className="grid grid-cols-2 border-t border-green-700/30">
              <div className="border-r border-green-700/30 px-4 py-3">
                <span className="block text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-400">
                  Date of Birth
                </span>

                <span className="mt-1 block text-xs text-green-200">
                  {character?.birthDate ||
                    "Classified"}
                </span>
              </div>

              <div className="px-4 py-3">
                <span className="block text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-400">
                  Place of Birth
                </span>

                <span className="mt-1 block text-xs text-green-200">
                  {character?.stats?.base
                    ?.placeOfBirth ||
                    "Unknown"}
                </span>
              </div>
            </div>
          </section>
        )}

      {/* SURFACE PERSONALITY */}

      {traits.length > 0 && (
        <section className="overflow-hidden rounded-lg border border-yellow-700/50 bg-zinc-950">
          <div className="border-b border-yellow-700/25 bg-yellow-500/[0.03] px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
              Behavioral Snapshot
            </p>

            <h2 className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-yellow-300">
              Personality
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 p-4">
            {traits.map(
              (trait, index) => {
                const label =
                  typeof trait ===
                  "string"
                    ? trait
                    : trait?.name;

                if (!label) {
                  return null;
                }

                return (
                  <span
                    key={`${label}-${index}`}
                    className="rounded border border-yellow-700/60 bg-black px-3 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-yellow-200"
                  >
                    {label}
                  </span>
                );
              }
            )}
          </div>
        </section>
      )}

      {/* SUBJECT RECORD */}

      {biographyParagraphs.length >
        0 && (
        <section className="overflow-hidden rounded-lg border border-green-700/50 bg-zinc-950">
          <div className="border-b border-green-700/25 bg-green-950/10 px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
              Personnel Record
            </p>

            <h2 className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-green-300">
              Subject Biography
            </h2>
          </div>

          <div className="p-4">
            <div className="space-y-4">
              {visibleBiographyParagraphs.map(
                (
                  paragraph,
                  index
                ) => (
                  <p
                    key={`${index}-${paragraph.slice(
                      0,
                      20
                    )}`}
                    className="text-sm leading-7 text-zinc-300"
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>

            {biographyParagraphs.length >
              2 && (
              <button
                type="button"
                onClick={() =>
                  setBioExpanded(
                    (current) =>
                      !current
                  )
                }
                className="mt-5 flex w-full items-center justify-center gap-2 rounded border border-green-700/60 bg-black px-4 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-green-300 transition hover:border-green-400 hover:bg-green-950/20"
              >
                {bioExpanded
                  ? "Collapse Record"
                  : "Read Full Record"}

                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    bioExpanded
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>
            )}
          </div>
        </section>
      )}

      {/* AFFILIATIONS */}

      <RelationshipsSection
        character={character}
      />
    </div>
  );
};

export default MobileOverview;