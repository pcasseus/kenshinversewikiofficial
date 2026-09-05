import {
  getAbilityDomain,
} from "../../../utils/abilityDomains";

import {
  getWeaknessDomain,
} from "../../../utils/weaknessDomains";

import {
  CURRENT_RELEASE,
  LEGACY_CURRENT_BOOK,
  getDiscoveryStage,
  isCurrentRelease,
  isHumanRace,
} from "../../../utils/profileRecordAccess";

export {
  CURRENT_RELEASE,
  LEGACY_CURRENT_BOOK,
};

export const SPOILER_STAGES = [
  "middle",
  "end",
];

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

export const normalizeClassification = (
  classification
) => {
  if (
    typeof classification !==
      "string" ||
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

export const isSpoilerEntry = (
  entry
) =>
  SPOILER_STAGES.includes(
    getDiscoveryStage(entry)
  );

export const getAbilityDomainName = (
  character,
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

export const getWeaknessDomainName = (
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

const getCurrentProgression = (
  entry
) =>
  entry?.progression?.[
    CURRENT_RELEASE
  ] || null;

export const prepareAbilityForModal = (
  character,
  entry,
  parentDomain = null
) => {
  const progression =
    getCurrentProgression(entry);

  const domain =
    entry.domain ||
    parentDomain ||
    getAbilityDomain(
      character.slug,
      entry.name
    );

  const discovery =
    getDiscoveryStage(entry);

  const progressionStates = {};

  if (progression) {
    const beginning =
      progression.beginning || null;

    const middle =
      progression.middle || null;

    const end =
      progression.end || null;

    if (beginning) {
      progressionStates.beginning = {
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
      progressionStates.middle = {
        title:
          middle.title ||
          entry.name,

        description:
          middle.description || "",
      };
    }

    if (end) {
      progressionStates.end = {
        title:
          end.title ||
          entry.name,

        description:
          end.description || "",
      };
    }
  }

  return {
    ...entry,

    name: entry.name,

    description:
      entry.description || "",

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

export const prepareWeaknessForModal = (
  entry,
  parentDomain = null,
  raceDisplay = null
) => {
  const progression =
    getCurrentProgression(entry);

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
    getDiscoveryStage(entry);

  const humanRecord =
    isHumanRace(raceDisplay);

  const progressionStates = {};

  if (progression) {
    if (beginning) {
      progressionStates.beginning = {
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
      progressionStates.middle = {
        title:
          middle.title ||
          entry.name,

        description:
          middle.description || "",
      };
    }

    if (end) {
      progressionStates.end = {
        title:
          end.title ||
          entry.name,

        description:
          end.description || "",
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

export const getVisibleSubAbilities = (
  entry,
  selectedBooks = [
    LEGACY_CURRENT_BOOK,
  ]
) =>
  Array.isArray(
    entry?.subAbilities
  )
    ? entry.subAbilities.filter(
        (sub) =>
          isCurrentRelease(
            sub,
            selectedBooks
          )
      )
    : [];