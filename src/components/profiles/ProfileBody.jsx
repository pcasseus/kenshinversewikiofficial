import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import { allCharacters } from "../data/characterList";

import ProfileHeader from "./ProfileHeader";
import AbilitiesSection from "./AbilitiesSection";
import WeaknessesSection from "./WeaknessesSection";
import RelationshipsSection from "./RelationshipsSection";
import UniformsSection from "./UniformsSection";
import Modal from "./Modal";
import MobileProfile from "./mobile/MobileProfile";

import {
  CURRENT_RELEASE,
  DOSSIER_STAGES,
  getLatestRevealedStage,
  isHumanRace,
} from "../../utils/profileRecordAccess";

const getOperativeId = (slug) => {
  const index = allCharacters.findIndex(
    (character) => character.slug === slug
  );

  if (index === -1) {
    return "#000";
  }

  return `#${String(index + 1).padStart(3, "0")}`;
};

const getLegacyRace = (character) => {
  const race = character?.race;

  if (!race) {
    return character?.class || "Unknown";
  }

  if (typeof race === "string") {
    return race.trim() || "Unknown";
  }

  const initial =
    typeof race.initial === "string"
      ? race.initial.trim()
      : "";

  if (initial) {
    return initial;
  }

  return character?.class || "Unknown";
};

const getRaceRecord = (character) => {
  const race = character?.race;

  if (
    !race ||
    typeof race !== "object" ||
    Array.isArray(race)
  ) {
    return null;
  }

  const releaseRace = race?.[CURRENT_RELEASE];

  if (
    !releaseRace ||
    typeof releaseRace !== "object" ||
    Array.isArray(releaseRace)
  ) {
    return null;
  }

  const values = {};

  let inheritedValue = "";

  DOSSIER_STAGES.forEach((stage) => {
    const rawValue = releaseRace[stage];

    const explicitValue =
      typeof rawValue === "string"
        ? rawValue.trim()
        : "";

    if (explicitValue) {
      inheritedValue = explicitValue;
    }

    if (inheritedValue) {
      values[stage] = inheritedValue;
    }
  });

  const populatedStages =
    DOSSIER_STAGES.filter(
      (stage) =>
        typeof values[stage] === "string" &&
        values[stage].trim() !== ""
    );

  if (populatedStages.length === 0) {
    return null;
  }

  const transitions = [];

  populatedStages.forEach((stage) => {
    const value = values[stage];

    const previous =
      transitions[
        transitions.length - 1
      ];

    const sameAsPrevious =
      previous &&
      previous.value
        .trim()
        .toLowerCase() ===
        value
          .trim()
          .toLowerCase();

    if (sameAsPrevious) {
      return;
    }

    transitions.push({
      stage,
      value,
    });
  });

  return {
    values,

    stages:
      transitions.map(
        (entry) => entry.stage
      ),

    transitions,

    hasProgression:
      transitions.length > 1,
  };
};

const getMobileRaceRecord = (
  character,
  raceRecord
) => {
  const fallback =
    getLegacyRace(character);

  if (!raceRecord) {
    return {
      display: fallback,
      stages: [],
      hasProgression: false,
    };
  }

  const stages =
    Array.isArray(
      raceRecord.transitions
    )
      ? raceRecord.transitions
      : [];

  return {
    display:
      stages[0]?.value ||
      fallback,

    stages,

    hasProgression:
      raceRecord.hasProgression === true,
  };
};

const ProfileBody = ({
  character,
  subVisible,
  toggleSub,
  selectedAbility,
  setSelectedAbility,
  selectedTrait,
  setSelectedTrait,
}) => {
  const selectedBooks = [1];

  const operativeId =
    getOperativeId(
      character.slug
    );

  const raceRecord =
    useMemo(
      () =>
        getRaceRecord(
          character
        ),
      [character]
    );

  const dossierStages =
    raceRecord?.stages || [];

  const raceTransitions =
    raceRecord?.transitions || [];

  const hasTimeline =
    raceRecord?.hasProgression ===
    true;

  const initialStage =
    dossierStages[0] ||
    "beginning";

  const [
    selectedStage,
    setSelectedStage,
  ] = useState(
    initialStage
  );

  const [
    revealedStages,
    setRevealedStages,
  ] = useState(
    () =>
      new Set([
        "beginning",
      ])
  );

  useEffect(() => {
    setSelectedStage(
      initialStage
    );

    setRevealedStages(
      new Set([
        "beginning",
      ])
    );
  }, [
    character?.slug,
    initialStage,
  ]);

  const fallbackRace =
    getLegacyRace(
      character
    );

  const selectedRace =
    raceRecord?.values?.[
      selectedStage
    ] ||
    fallbackRace;

  const selectedStageIsProtected =
    hasTimeline &&
    selectedStage !==
      "beginning" &&
    !revealedStages.has(
      selectedStage
    );

  const visibleStage =
    selectedStageIsProtected
      ? getLatestRevealedStage(
          selectedStage,
          revealedStages
        )
      : selectedStage;

  const visibleRace =
    raceRecord?.values?.[
      visibleStage
    ] ||
    fallbackRace;

  const raceDisplay =
    selectedStageIsProtected
      ? "CLASSIFIED"
      : selectedRace;

  const humanDossier =
    isHumanRace(
      visibleRace
    );

  const poweredDossier =
    !humanDossier;

  const mobileRaceRecord =
    useMemo(
      () =>
        getMobileRaceRecord(
          character,
          raceRecord
        ),
      [
        character,
        raceRecord,
      ]
    );

  const revealSelectedStage =
    () => {
      setRevealedStages(
        (current) => {
          const next =
            new Set(
              current
            );

          const selectedIndex =
            DOSSIER_STAGES.indexOf(
              selectedStage
            );

          DOSSIER_STAGES
            .slice(
              0,
              selectedIndex + 1
            )
            .forEach(
              (stage) =>
                next.add(
                  stage
                )
            );

          return next;
        }
      );
    };

  return (
    <div className="profile-dossier w-full min-w-0">
      {/* MOBILE DOSSIER */}

      <div className="lg:hidden">
        <MobileProfile
          character={
            character
          }
          operativeId={
            operativeId
          }
          raceRecord={
            mobileRaceRecord
          }
          setSelectedAbility={
            setSelectedAbility
          }
          selectedBooks={
            selectedBooks
          }
        />
      </div>

      {/* DESKTOP DOSSIER */}

      <div className="hidden lg:block">
        <div className="mx-auto w-full max-w-[1800px] px-3 pb-24 pt-5 sm:px-5 sm:pt-6 lg:px-6 lg:pt-7">
          {/* OPERATIVE HEADER */}

          <div className="mb-5 border-b border-green-700 pb-3">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div className="min-w-0 text-xs tracking-widest text-green-400 sm:text-sm">
                OPERATIVE ID:{" "}
                {operativeId} | RACE:{" "}

                <span
                  className={
                    selectedStageIsProtected
                      ? "text-amber-300"
                      : ""
                  }
                >
                  {
                    raceDisplay
                  }
                </span>
              </div>

              {hasTimeline && (
                <div className="flex flex-col gap-2 lg:items-end">
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                    {
                      CURRENT_RELEASE
                    }{" "}
                    Race Record
                  </span>

                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex overflow-hidden rounded border border-green-800/60 bg-black">
                      {raceTransitions.map(
                        (
                          transition,
                          index
                        ) => {
                          const {
                            stage,
                            value,
                          } =
                            transition;

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
                                `${stage}-${value}`
                              }
                              type="button"
                              onClick={() =>
                                setSelectedStage(
                                  stage
                                )
                              }
                              className={`relative px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] transition ${
                                index > 0
                                  ? "border-l border-green-800/50"
                                  : ""
                              } ${
                                selected
                                  ? "bg-green-500/10 text-green-300"
                                  : "text-zinc-500 hover:bg-green-500/5 hover:text-green-400"
                              }`}
                            >
                              {
                                protectedStage
                                  ? "Classified"
                                  : value
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

                    {selectedStageIsProtected && (
                      <button
                        type="button"
                        onClick={
                          revealSelectedStage
                        }
                        className="rounded border border-amber-500/60 bg-amber-500/5 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-amber-300 transition hover:bg-amber-500 hover:text-black"
                      >
                        Reveal Race
                        Record
                      </button>
                    )}
                  </div>

                  {selectedStageIsProtected && (
                    <span className="text-[9px] uppercase tracking-[0.15em] text-amber-500/80">
                      KVI spoiler
                      protected
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* SUBJECT RECORD */}

          <ProfileHeader
            character={
              character
            }
          />

          {/* HUMAN DOSSIER */}

          {humanDossier && (
            <>
              <AbilitiesSection
                character={
                  character
                }
                raceDisplay={
                  visibleRace
                }
                subVisible={
                  subVisible
                }
                toggleSub={
                  toggleSub
                }
                setSelectedAbility={
                  setSelectedAbility
                }
                selectedBooks={
                  selectedBooks
                }
                activeStage={
                  visibleStage
                }
              />

              <WeaknessesSection
                character={
                  character
                }
                raceDisplay={
                  visibleRace
                }
                setSelectedAbility={
                  setSelectedAbility
                }
                subVisible={
                  subVisible
                }
                toggleSub={
                  toggleSub
                }
                selectedBooks={
                  selectedBooks
                }
                activeStage={
                  visibleStage
                }
              />
            </>
          )}

          {/* POWERED DOSSIER */}

          {poweredDossier && (
            <>
              <AbilitiesSection
                character={
                  character
                }
                raceDisplay={
                  visibleRace
                }
                subVisible={
                  subVisible
                }
                toggleSub={
                  toggleSub
                }
                setSelectedAbility={
                  setSelectedAbility
                }
                selectedBooks={
                  selectedBooks
                }
                activeStage={
                  visibleStage
                }
              />

              <WeaknessesSection
                character={
                  character
                }
                raceDisplay={
                  visibleRace
                }
                setSelectedAbility={
                  setSelectedAbility
                }
                subVisible={
                  subVisible
                }
                toggleSub={
                  toggleSub
                }
                selectedBooks={
                  selectedBooks
                }
                activeStage={
                  visibleStage
                }
              />
            </>
          )}

          {/* AFFILIATIONS */}

          <section className="mt-10">
            <RelationshipsSection
              character={
                character
              }
            />
          </section>

          {/* UNIFORMS + TOOLS */}

          <section className="mt-8">
            <UniformsSection
              character={
                character
              }
              selectedBooks={
                selectedBooks
              }
              activeStage={
                visibleStage
              }
            />
          </section>
        </div>
      </div>

      {/* SHARED ABILITY / WEAKNESS MODAL */}

      {selectedAbility && (
        <Modal
          title={
            selectedAbility.name
          }
          tabbed={
            Boolean(
              selectedAbility.__progression
            ) ||
            Boolean(
              selectedAbility.evolved
            )
          }
          baseContent={
            selectedAbility.description
          }
          evolvedContent={
            selectedAbility.evolved
          }
          selectedBooks={
            selectedBooks
          }
          theme={
            selectedAbility.__theme ||
            "ability"
          }
          domain={
            selectedAbility.domain
          }
          classification={
            selectedAbility.classification
          }
          progression={
            selectedAbility.__progression
          }
          release={
            selectedAbility.__release ||
            CURRENT_RELEASE
          }
          discovery={
            selectedAbility.discovery ||
            "beginning"
          }
          onClose={() =>
            setSelectedAbility(
              null
            )
          }
        >
          {!selectedAbility.__progression &&
            !selectedAbility.evolved && (
              <p className="text-sm text-gray-300">
                {
                  selectedAbility.description
                }
              </p>
            )}
        </Modal>
      )}

      {/* SHARED TRAITS MODAL */}

      {selectedTrait && (
        <Modal
          title={
            selectedTrait.title
          }
          onClose={() =>
            setSelectedTrait(
              null
            )
          }
        >
          <p className="mb-4 text-yellow-300">
            {
              selectedTrait.subtitle
            }
          </p>

          {selectedTrait.entries.map(
            (
              trait,
              idx
            ) => (
              <div
                key={idx}
                className="mb-4"
              >
                <h4 className="mb-1 font-bold uppercase tracking-wider text-lime-300">
                  {
                    trait.name
                  }
                </h4>

                <p className="text-sm text-gray-300">
                  {
                    trait.description
                  }
                </p>
              </div>
            )
          )}
        </Modal>
      )}
    </div>
  );
};

export default ProfileBody;