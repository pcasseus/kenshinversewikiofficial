import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import MobileProfileHeader from "./MobileProfileHeader";
import MobileOverview from "./MobileOverview";
import MobileCapabilities from "./MobileCapabilities";
import MobilePsychology from "./MobilePsychology";
import MobileGear from "./MobileGear";

import {
  DOSSIER_STAGES,
  filterRecords,
  getLatestRevealedStage,
  isHumanRace,
  normalizeStage,
} from "../../../utils/profileRecordAccess";

const MobileProfile = ({
  character,
  operativeId,
  raceRecord,
  setSelectedAbility,
  selectedBooks = [1],
}) => {
  const raceStages =
    Array.isArray(
      raceRecord?.stages
    )
      ? raceRecord.stages
      : [];

  const initialStage =
    raceStages[0]?.stage ||
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

  const [
    activeTab,
    setActiveTab,
  ] = useState(
    "overview"
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

    setActiveTab(
      "overview"
    );
  }, [
    character?.slug,
    initialStage,
  ]);

  const selectedStageProtected =
    selectedStage !==
      "beginning" &&
    !revealedStages.has(
      selectedStage
    );

  const visibleStage =
    selectedStageProtected
      ? getLatestRevealedStage(
          selectedStage,
          revealedStages
        )
      : selectedStage;

  const getRaceForStage = (
    stage
  ) => {
    const normalized =
      normalizeStage(
        stage
      );

    const exact =
      raceStages.find(
        (entry) =>
          entry.stage ===
          normalized
      );

    if (exact?.value) {
      return exact.value;
    }

    const selectedIndex =
      DOSSIER_STAGES.indexOf(
        normalized
      );

    for (
      let index =
        selectedIndex;
      index >= 0;
      index -= 1
    ) {
      const fallbackStage =
        DOSSIER_STAGES[
          index
        ];

      const fallback =
        raceStages.find(
          (entry) =>
            entry.stage ===
            fallbackStage
        );

      if (
        fallback?.value
      ) {
        return fallback.value;
      }
    }

    return (
      raceRecord?.display ||
      character?.class ||
      "Unknown"
    );
  };

  const visibleRace =
    getRaceForStage(
      visibleStage
    );

  const displayRace =
    selectedStageProtected
      ? "CLASSIFIED"
      : getRaceForStage(
          selectedStage
        );

  const humanDossier =
    isHumanRace(
      visibleRace
    );

  const visibleAbilities =
    useMemo(
      () =>
        filterRecords(
          character?.abilities,
          visibleStage,
          selectedBooks
        ),
      [
        character?.abilities,
        visibleStage,
        selectedBooks,
      ]
    );

  const visibleWeaknesses =
    useMemo(
      () =>
        filterRecords(
          character?.weaknesses,
          visibleStage,
          selectedBooks
        ),
      [
        character?.weaknesses,
        visibleStage,
        selectedBooks,
      ]
    );

  const visibleUniforms =
    useMemo(
      () =>
        filterRecords(
          character?.uniforms,
          visibleStage,
          selectedBooks
        ),
      [
        character?.uniforms,
        visibleStage,
        selectedBooks,
      ]
    );

  const visibleTools =
    useMemo(
      () =>
        filterRecords(
          character?.tools,
          visibleStage,
          selectedBooks
        ),
      [
        character?.tools,
        visibleStage,
        selectedBooks,
      ]
    );

  const hasCapabilities =
    visibleAbilities.length > 0 ||
    visibleWeaknesses.length > 0;

  const hasGear =
    visibleUniforms.length > 0 ||
    visibleTools.length > 0;

  const tabs = useMemo(() => {
    const availableTabs = [
      {
        id: "overview",
        label: "Overview",
      },
    ];

    if (
      hasCapabilities
    ) {
      availableTabs.push({
        id: "capabilities",

        label:
          humanDossier
            ? "Skills"
            : "Power",
      });
    }

    if (
      character?.psychProfile
    ) {
      availableTabs.push({
        id: "psych",
        label: "Psych",
      });
    }

    if (hasGear) {
      availableTabs.push({
        id: "gear",
        label: "Gear",
      });
    }

    return availableTabs;
  }, [
    character?.psychProfile,
    hasCapabilities,
    hasGear,
    humanDossier,
  ]);

  useEffect(() => {
    const tabStillExists =
      tabs.some(
        (tab) =>
          tab.id ===
          activeTab
      );

    if (
      !tabStillExists
    ) {
      setActiveTab(
        "overview"
      );
    }
  }, [
    tabs,
    activeTab,
  ]);

  const handleTabChange = (
    tabId
  ) => {
    const exists =
      tabs.some(
        (tab) =>
          tab.id === tabId
      );

    if (!exists) {
      return;
    }

    setActiveTab(
      tabId
    );

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const handleStageSelect = (
    stage
  ) => {
    setSelectedStage(
      normalizeStage(
        stage
      )
    );

    setActiveTab(
      "overview"
    );
  };

  const revealSelectedStage =
    () => {
      const target =
        normalizeStage(
          selectedStage
        );

      const targetIndex =
        DOSSIER_STAGES.indexOf(
          target
        );

      setRevealedStages(
        (current) => {
          const next =
            new Set(
              current
            );

          DOSSIER_STAGES
            .slice(
              0,
              targetIndex + 1
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
    <div className="w-full min-w-0">
      <div className="mx-auto w-full max-w-xl px-3 pb-20 pt-3 sm:px-5">
        <MobileProfileHeader
          character={
            character
          }
          operativeId={
            operativeId
          }
          raceRecord={
            raceRecord
          }
          raceDisplay={
            displayRace
          }
          selectedStage={
            selectedStage
          }
          revealedStages={
            revealedStages
          }
          stageProtected={
            selectedStageProtected
          }
          onStageSelect={
            handleStageSelect
          }
          onRevealStage={
            revealSelectedStage
          }
          activeTab={
            activeTab
          }
          setActiveTab={
            handleTabChange
          }
          tabs={tabs}
        />

        <main className="mt-5">
          {activeTab ===
            "overview" && (
            <MobileOverview
              character={
                character
              }
            />
          )}

          {activeTab ===
            "capabilities" &&
            hasCapabilities && (
              <MobileCapabilities
                character={
                  character
                }
                raceDisplay={
                  visibleRace
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
            )}

          {activeTab ===
            "psych" && (
            <MobilePsychology
              character={
                character
              }
              activeStage={
                visibleStage
              }
            />
          )}

          {activeTab ===
            "gear" &&
            hasGear && (
              <MobileGear
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
            )}
        </main>
      </div>
    </div>
  );
};

export default MobileProfile;