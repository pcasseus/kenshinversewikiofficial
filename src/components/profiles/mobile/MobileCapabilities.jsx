import React, {
  useMemo,
  useState,
} from "react";

import MobileAbilityDomains from "./MobileAbilityDomains";
import MobileWeaknesses from "./MobileWeaknesses";

import {
  getAbilityDomainName,
  getWeaknessDomainName,
} from "./mobileCapabilityUtils";

import {
  filterRecords,
  isHumanRace,
} from "../../../utils/profileRecordAccess";

const MobileCapabilities = ({
  character,
  raceDisplay,
  setSelectedAbility,
  selectedBooks = [1],
  activeStage = "beginning",
}) => {
  const [
    expandedDomains,
    setExpandedDomains,
  ] = useState(
    () => new Set()
  );

  const [
    expandedAbilities,
    setExpandedAbilities,
  ] = useState(
    () => new Set()
  );

  const humanRecord =
    isHumanRace(
      raceDisplay
    );

  const corePower =
    humanRecord
      ? character?.specialty ||
        character?.role ||
        null
      : character?.corePower ||
        character?.primaryPower ||
        null;

  const visibleAbilities =
    useMemo(
      () =>
        filterRecords(
          character?.abilities,
          activeStage,
          selectedBooks
        ),
      [
        character?.abilities,
        activeStage,
        selectedBooks,
      ]
    );

  const visibleWeaknesses =
    useMemo(
      () =>
        filterRecords(
          character?.weaknesses,
          activeStage,
          selectedBooks
        ),
      [
        character?.weaknesses,
        activeStage,
        selectedBooks,
      ]
    );

  const abilityDomains =
    useMemo(() => {
      const grouped =
        visibleAbilities.reduce(
          (
            acc,
            ability
          ) => {
            const domain =
              getAbilityDomainName(
                character,
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

      return Object.entries(
        grouped
      );
    }, [
      visibleAbilities,
      character,
    ]);

  const weaknessDomains =
    useMemo(() => {
      const grouped =
        visibleWeaknesses.reduce(
          (
            acc,
            weakness
          ) => {
            const domain =
              getWeaknessDomainName(
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

      return Object.entries(
        grouped
      );
    }, [
      visibleWeaknesses,
    ]);

  const toggleDomain = (
    domain
  ) => {
    setExpandedDomains(
      (current) => {
        const next =
          new Set(
            current
          );

        if (
          next.has(domain)
        ) {
          next.delete(
            domain
          );
        } else {
          next.add(
            domain
          );
        }

        return next;
      }
    );
  };

  const toggleAbility = (
    key
  ) => {
    setExpandedAbilities(
      (current) => {
        const next =
          new Set(
            current
          );

        if (
          next.has(key)
        ) {
          next.delete(key);
        } else {
          next.add(key);
        }

        return next;
      }
    );
  };

  if (
    visibleAbilities.length ===
      0 &&
    visibleWeaknesses.length ===
      0
  ) {
    return null;
  }

  return (
    <div className="space-y-5">
      <MobileAbilityDomains
        character={
          character
        }
        humanRecord={
          humanRecord
        }
        corePower={
          corePower
        }
        abilityDomains={
          abilityDomains
        }
        selectedBooks={
          selectedBooks
        }
        activeStage={
          activeStage
        }
        expandedDomains={
          expandedDomains
        }
        expandedAbilities={
          expandedAbilities
        }
        toggleDomain={
          toggleDomain
        }
        toggleAbility={
          toggleAbility
        }
        setSelectedAbility={
          setSelectedAbility
        }
      />

      <MobileWeaknesses
        humanRecord={
          humanRecord
        }
        raceDisplay={
          raceDisplay
        }
        weaknessDomains={
          weaknessDomains
        }
        selectedBooks={
          selectedBooks
        }
        activeStage={
          activeStage
        }
        setSelectedAbility={
          setSelectedAbility
        }
      />
    </div>
  );
};

export default MobileCapabilities;