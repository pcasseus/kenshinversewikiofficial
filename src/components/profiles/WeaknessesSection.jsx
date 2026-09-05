import React from "react";

import {
  ChevronRight,
  TriangleAlert,
} from "lucide-react";

import {
  getWeaknessDomain,
} from "../../utils/weaknessDomains";

import {
  CURRENT_RELEASE,
  filterRecords,
  getDiscoveryStage,
} from "../../utils/profileRecordAccess";

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

const WeaknessesSection = ({
  character,
  raceDisplay,
  setSelectedAbility,
  subVisible,
  toggleSub,
  selectedBooks,
  activeStage = "beginning",
}) => {
  const humanRecord =
    isHumanRace(raceDisplay);

  const weaknesses =
    Array.isArray(
      character?.weaknesses
    )
      ? character.weaknesses
      : [];

  const sectionTitle =
    humanRecord
      ? "Limitations & Vulnerabilities"
      : "Weaknesses";

  const getCurrentProgression =
    (entry) =>
      entry?.progression?.[
        CURRENT_RELEASE
      ] || null;

  const getDomain = (
    weakness
  ) => {
    if (
      typeof weakness?.domain ===
        "string" &&
      weakness.domain.trim()
    ) {
      return weakness.domain.trim();
    }

    return getWeaknessDomain(
      weakness.name
    );
  };

  const prepareWeaknessForModal =
    (
      entry,
      parentDomain = null
    ) => {
      const progression =
        getCurrentProgression(
          entry
        );

      const beginning =
        progression?.beginning ||
        null;

      const middle =
        progression?.middle ||
        null;

      const end =
        progression?.end ||
        null;

      const domain =
        entry.domain ||
        parentDomain ||
        getWeaknessDomain(
          entry.name
        );

      const discovery =
        getDiscoveryStage(
          entry
        );

      const progressionStates =
        {};

      if (progression) {
        if (beginning) {
          progressionStates.beginning =
            {
              title:
                beginning.title ||
                entry.name,

              description:
                beginning.description ||
                entry.description ||
                "",
            };
        }

        if (middle) {
          progressionStates.middle =
            {
              title:
                middle.title ||
                entry.name,

              description:
                middle.description ||
                "",
            };
        }

        if (end) {
          progressionStates.end =
            {
              title:
                end.title ||
                entry.name,

              description:
                end.description ||
                "",
            };
        }
      }

      return {
        ...entry,

        name:
          beginning?.title ||
          entry.name,

        description:
          beginning?.description ||
          entry.description ||
          "",

        domain,

        classification:
          entry.classification ||
          (
            humanRecord
              ? "Limitation"
              : "Vulnerability"
          ),

        discovery,

        __theme: "danger",

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

  const visibleWeaknesses =
    filterRecords(
      weaknesses,
      activeStage,
      selectedBooks
    );

  if (
    visibleWeaknesses.length === 0
  ) {
    return null;
  }

  const grouped =
    visibleWeaknesses.reduce(
      (
        acc,
        weakness
      ) => {
        const domain =
          getDomain(
            weakness
          );

        if (!acc[domain]) {
          acc[domain] = [];
        }

        acc[domain].push(
          weakness
        );

        return acc;
      },
      {}
    );

  return (
    <section className="mb-10 overflow-hidden rounded-lg border border-red-700/70 bg-zinc-950">
      <div className="border-b border-red-700/30 bg-red-950/10 px-5 py-4">
        <p className="mb-1 text-[9px] uppercase tracking-[0.24em] text-zinc-600">
          S.T.A.T.I.C. Vulnerability Analysis
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
          {sectionTitle}
        </h2>
      </div>

      <div className="space-y-8 p-5 sm:p-6">
        {Object.entries(
          grouped
        ).map(
          ([
            domain,
            items,
          ]) => (
            <div key={domain}>
              <div className="mb-4 flex items-center gap-3">
                <h3 className="shrink-0 text-[9px] font-bold uppercase tracking-[0.23em] text-red-400">
                  {domain}
                </h3>

                <div className="h-px flex-1 bg-red-700/40" />
              </div>

              <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
                {items.map(
                  (
                    weakness,
                    index
                  ) => {
                    const critical =
                      weakness.critical ===
                      true;

                    const visibleSubs =
                      filterRecords(
                        weakness?.subWeaknesses,
                        activeStage,
                        selectedBooks
                      );

                    const hasSub =
                      visibleSubs.length > 0;

                    const expanded =
                      subVisible?.[
                        weakness.name
                      ] === true;

                    return (
                      <div
                        key={`${weakness.name}-${index}`}
                        className="min-w-0"
                      >
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedAbility(
                                prepareWeaknessForModal(
                                  weakness,
                                  domain
                                )
                              )
                            }
                            className={`
                              min-h-[46px]
                              w-full
                              rounded
                              border
                              bg-black
                              px-4
                              py-3
                              text-left
                              text-sm
                              transition
                              ${
                                hasSub
                                  ? "pr-11"
                                  : ""
                              }
                              ${
                                critical
                                  ? "border-red-500 text-red-100 shadow-[0_0_16px_rgba(239,68,68,0.15)] hover:bg-red-950/20"
                                  : "border-red-800/80 text-red-300 hover:border-red-500 hover:bg-red-950/20 hover:text-red-100"
                              }
                            `}
                            style={{
                              backgroundImage: `
                                linear-gradient(rgba(255,0,0,0.09) 1px, transparent 1px),
                                linear-gradient(to right, rgba(255,0,0,0.09) 1px, transparent 1px)
                              `,

                              backgroundSize:
                                "22px 22px",
                            }}
                          >
                            <span className="flex items-center gap-2">
                              {critical && (
                                <TriangleAlert
                                  size={14}
                                  className="shrink-0 text-red-400"
                                />
                              )}

                              <span className="min-w-0 flex-1">
                                {
                                  weakness.name
                                }
                              </span>

                              {critical && (
                                <span className="shrink-0 text-[9px] font-bold uppercase tracking-widest text-red-400">
                                  Critical
                                </span>
                              )}
                            </span>
                          </button>

                          {hasSub && (
                            <button
                              type="button"
                              onClick={(event) => {
                                event.stopPropagation();

                                toggleSub(
                                  weakness.name
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
                                text-red-400
                                transition
                                hover:bg-red-600
                                hover:text-black
                              "
                              aria-label={`${
                                expanded
                                  ? "Collapse"
                                  : "Expand"
                              } ${weakness.name}`}
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
                            <div className="mt-2 space-y-2 border-l border-red-700/40 pl-3">
                              {visibleSubs.map(
                                (
                                  sub,
                                  subIndex
                                ) => (
                                  <button
                                    key={`${sub.name}-${subIndex}`}
                                    type="button"
                                    onClick={() =>
                                      setSelectedAbility(
                                        prepareWeaknessForModal(
                                          sub,
                                          domain
                                        )
                                      )
                                    }
                                    className="
                                      w-full
                                      rounded
                                      border
                                      border-red-800/70
                                      bg-black
                                      px-3
                                      py-2
                                      text-left
                                      text-xs
                                      text-red-300
                                      transition
                                      hover:border-red-500
                                      hover:bg-red-950/20
                                      hover:text-red-100
                                    "
                                  >
                                    {
                                      sub.name
                                    }
                                  </button>
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

export default WeaknessesSection;