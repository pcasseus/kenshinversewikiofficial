import React from "react";

import {
  ChevronRight,
} from "lucide-react";

import {
  getAbilityDomain,
} from "../../utils/abilityDomains";

import {
  CURRENT_RELEASE,
  filterRecords,
  getDiscoveryStage,
} from "../../utils/profileRecordAccess";

const CONTROLLED_CLASSIFICATIONS =
  new Set([
    "Core Ability",
    "Application",
    "Technique",
    "Physiology",
    "Skill",
    "Mobility",
    "Defense",
    "Sensory",
    "Restricted",
  ]);

const CLASSIFICATION_ALIASES = {
  core: "Core Ability",
  "core power": "Core Ability",
  "core ability": "Core Ability",
  power: "Core Ability",

  application: "Application",

  technique: "Technique",
  maneuver: "Technique",

  physiology: "Physiology",
  physiological: "Physiology",

  skill: "Skill",
  expertise: "Skill",
  training: "Skill",

  mobility: "Mobility",
  movement: "Mobility",

  defense: "Defense",
  defensive: "Defense",

  sensory: "Sensory",
  sensing: "Sensory",
  detection: "Sensory",

  restricted: "Restricted",
};

const normalizeClassification = (
  classification
) => {
  if (
    typeof classification !== "string" ||
    classification.trim() === ""
  ) {
    return "Application";
  }

  const trimmed =
    classification.trim();

  if (
    CONTROLLED_CLASSIFICATIONS.has(
      trimmed
    )
  ) {
    return trimmed;
  }

  const alias =
    CLASSIFICATION_ALIASES[
      trimmed.toLowerCase()
    ];

  return alias || trimmed;
};

const isHumanRace = (
  raceDisplay
) => {
  if (
    typeof raceDisplay !== "string"
  ) {
    return false;
  }

  return (
    raceDisplay
      .trim()
      .toLowerCase() === "human"
  );
};

const AbilitiesSection = ({
  character,
  raceDisplay,
  setSelectedAbility,
  subVisible,
  toggleSub,
  selectedBooks,
  activeStage = "beginning",
}) => {
  if (!character) {
    return null;
  }

  const humanRecord =
    isHumanRace(raceDisplay);

  const abilities =
    Array.isArray(
      character.abilities
    )
      ? character.abilities
      : [];

  const corePower =
    character.corePower ||
    character.primaryPower ||
    null;

  const sectionTitle =
    humanRecord
      ? "Skills & Expertise"
      : "Power & Abilities";

  const coreLabel =
    humanRecord
      ? "Primary Expertise"
      : "Core Power";

  const getCurrentProgression =
    (entry) =>
      entry?.progression?.[
        CURRENT_RELEASE
      ] || null;

  const getDomain = (
    ability
  ) => {
    if (
      typeof ability?.domain ===
        "string" &&
      ability.domain.trim()
    ) {
      return ability.domain.trim();
    }

    return getAbilityDomain(
      character.slug,
      ability.name
    );
  };

  const prepareAbilityForModal =
    (
      entry,
      parentDomain = null
    ) => {
      const progression =
        getCurrentProgression(
          entry
        );

      const domain =
        entry.domain ||
        parentDomain ||
        getAbilityDomain(
          character.slug,
          entry.name
        );

      const discovery =
        getDiscoveryStage(
          entry
        );

      const progressionStates =
        {
          [discovery]: {
            title:
              entry.name,

            description:
              entry.description ||
              "",
          },
        };

      if (progression) {
        if (
          progression.beginning
        ) {
          progressionStates.beginning =
            {
              title:
                progression
                  .beginning
                  .title ||
                entry.name,

              description:
                progression
                  .beginning
                  .description ||
                entry.description ||
                "",
            };
        }

        if (
          progression.middle
        ) {
          progressionStates.middle =
            {
              title:
                progression
                  .middle
                  .title ||
                entry.name,

              description:
                progression
                  .middle
                  .description ||
                "",
            };
        }

        if (progression.end) {
          progressionStates.end =
            {
              title:
                progression.end
                  .title ||
                entry.name,

              description:
                progression.end
                  .description ||
                "",
            };
        }
      }

      return {
        ...entry,

        name: entry.name,

        description:
          entry.description ||
          "",

        domain,

        classification:
          normalizeClassification(
            entry.classification
          ),

        discovery,

        __theme: "ability",

        __release:
          CURRENT_RELEASE,

        __progression:
          Object.keys(
            progressionStates
          ).length > 1
            ? progressionStates
            : null,
      };
    };

  const getVisibleSubAbilities =
    (entry) =>
      filterRecords(
        entry?.subAbilities,
        activeStage,
        selectedBooks
      );

  const getSubKey = (
    entry,
    parentPath
  ) =>
    `${parentPath}::${entry.name}`;

  const renderSubAbility = (
    sub,
    domain,
    parentPath,
    depth = 0,
    index = 0
  ) => {
    const visibleChildren =
      getVisibleSubAbilities(
        sub
      );

    const hasChildren =
      visibleChildren.length > 0;

    const subKey =
      getSubKey(
        sub,
        parentPath
      );

    const expanded =
      subVisible?.[
        subKey
      ] === true;

    const nestedPadding =
      Math.min(
        depth * 10,
        30
      );

    return (
      <div
        key={`${subKey}-${index}`}
        className="min-w-0"
        style={{
          paddingLeft: `${nestedPadding}px`,
        }}
      >
        <div className="relative">
          <button
            type="button"
            onClick={() =>
              setSelectedAbility(
                prepareAbilityForModal(
                  sub,
                  domain
                )
              )
            }
            className={`
              w-full
              rounded
              border
              border-cyan-700/60
              bg-black
              px-3
              py-2
              text-left
              text-xs
              text-cyan-200
              transition
              hover:border-cyan-400
              hover:bg-cyan-950/20
              hover:text-white
              ${
                hasChildren
                  ? "pr-11"
                  : ""
              }
            `}
          >
            {sub.name}
          </button>

          {hasChildren && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();

                toggleSub(
                  subKey
                );
              }}
              className="
                absolute
                right-2
                top-1/2
                flex
                h-7
                w-7
                -translate-y-1/2
                items-center
                justify-center
                rounded
                text-cyan-300
                transition
                hover:bg-cyan-400
                hover:text-black
              "
              aria-label={`${
                expanded
                  ? "Collapse"
                  : "Expand"
              } ${sub.name}`}
            >
              <ChevronRight
                size={15}
                className={`transition-transform duration-200 ${
                  expanded
                    ? "rotate-90"
                    : ""
                }`}
              />
            </button>
          )}
        </div>

        {hasChildren &&
          expanded && (
            <div className="mt-2 space-y-2 border-l border-cyan-500/25 pl-3">
              {visibleChildren.map(
                (
                  child,
                  childIndex
                ) =>
                  renderSubAbility(
                    child,
                    domain,
                    subKey,
                    depth + 1,
                    childIndex
                  )
              )}
            </div>
          )}
      </div>
    );
  };

  const visibleAbilities =
    filterRecords(
      abilities,
      activeStage,
      selectedBooks
    );

  if (
    visibleAbilities.length === 0
  ) {
    return null;
  }

  const grouped =
    visibleAbilities.reduce(
      (
        acc,
        ability
      ) => {
        const domain =
          getDomain(
            ability
          );

        if (!acc[domain]) {
          acc[domain] = [];
        }

        acc[domain].push(
          ability
        );

        return acc;
      },
      {}
    );

  return (
    <section className="mb-10 overflow-hidden rounded-lg border border-cyan-500/70 bg-zinc-950">
      <div className="border-b border-cyan-500/30 bg-cyan-950/10 px-5 py-4">
        <p className="mb-1 text-[9px] uppercase tracking-[0.24em] text-zinc-600">
          S.T.A.T.I.C. Capability Analysis
        </p>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            {sectionTitle}
          </h2>

          {corePower && (
            <div className="flex items-center gap-2 rounded border border-cyan-500/40 bg-cyan-950/20 px-3 py-1.5">
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-cyan-600">
                {coreLabel}
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-200">
                {corePower}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-8 p-5 sm:p-6">
        {Object.entries(
          grouped
        ).map(
          ([
            domain,
            domainAbilities,
          ]) => (
            <div key={domain}>
              <div className="mb-4 flex items-center gap-3">
                <h3 className="shrink-0 text-[9px] font-bold uppercase tracking-[0.23em] text-cyan-400">
                  {domain}
                </h3>

                <div className="h-px flex-1 bg-cyan-500/35" />
              </div>

              <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
                {domainAbilities.map(
                  (
                    ability,
                    index
                  ) => {
                    const visibleSubs =
                      getVisibleSubAbilities(
                        ability
                      );

                    const hasSub =
                      visibleSubs.length > 0;

                    const abilityKey =
                      ability.name;

                    const expanded =
                      subVisible?.[
                        abilityKey
                      ] === true;

                    return (
                      <div
                        key={`${ability.name}-${index}`}
                        className="min-w-0"
                      >
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedAbility(
                                prepareAbilityForModal(
                                  ability,
                                  domain
                                )
                              )
                            }
                            className={`
                              min-h-[46px]
                              w-full
                              rounded
                              border
                              border-cyan-500/70
                              bg-black
                              px-4
                              py-3
                              text-left
                              text-sm
                              text-cyan-100
                              transition
                              hover:border-cyan-300
                              hover:bg-cyan-950/20
                              hover:text-white
                              ${
                                hasSub
                                  ? "pr-11"
                                  : ""
                              }
                            `}
                            style={{
                              backgroundImage: `
                                linear-gradient(rgba(0,255,255,0.10) 1px, transparent 1px),
                                linear-gradient(to right, rgba(0,255,255,0.10) 1px, transparent 1px)
                              `,

                              backgroundSize:
                                "22px 22px",
                            }}
                          >
                            {
                              ability.name
                            }
                          </button>

                          {hasSub && (
                            <button
                              type="button"
                              onClick={(event) => {
                                event.stopPropagation();

                                toggleSub(
                                  abilityKey
                                );
                              }}
                              className="
                                absolute
                                right-2
                                top-1/2
                                flex
                                h-8
                                w-8
                                -translate-y-1/2
                                items-center
                                justify-center
                                rounded
                                text-cyan-300
                                transition
                                hover:bg-cyan-400
                                hover:text-black
                              "
                              aria-label={`${
                                expanded
                                  ? "Collapse"
                                  : "Expand"
                              } ${ability.name}`}
                            >
                              <ChevronRight
                                size={17}
                                className={`transition-transform duration-200 ${
                                  expanded
                                    ? "rotate-90"
                                    : ""
                                }`}
                              />
                            </button>
                          )}
                        </div>

                        {hasSub &&
                          expanded && (
                            <div className="mt-2 space-y-2 border-l border-cyan-500/30 pl-3">
                              {visibleSubs.map(
                                (
                                  sub,
                                  subIndex
                                ) =>
                                  renderSubAbility(
                                    sub,
                                    domain,
                                    abilityKey,
                                    0,
                                    subIndex
                                  )
                              )}
                            </div>
                          )}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default AbilitiesSection;