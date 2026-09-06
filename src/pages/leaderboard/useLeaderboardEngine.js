import { useMemo } from "react";
import { PHASES, getRankedPhase } from "./leaderboardData";

function buildEntryMap(entries) {
  return entries.reduce((map, entry) => {
    map[entry.slug] = entry;
    return map;
  }, {});
}

function findDebut(slug) {
  for (
    let phaseIndex = 0;
    phaseIndex < PHASES.length;
    phaseIndex += 1
  ) {
    const rankedPhase = getRankedPhase(phaseIndex);

    const entry = rankedPhase.find(
      (character) => character.slug === slug
    );

    if (entry) {
      return {
        debutPhase: phaseIndex,
        debutRank: entry.rank,
      };
    }
  }

  return {
    debutPhase: null,
    debutRank: null,
  };
}

function getNumberOneStreak(slug, currentPhaseIndex) {
  let streak = 0;

  for (
    let phaseIndex = 0;
    phaseIndex <= currentPhaseIndex;
    phaseIndex += 1
  ) {
    const rankedPhase = getRankedPhase(phaseIndex);

    const entry = rankedPhase.find(
      (character) => character.slug === slug
    );

    if (entry?.rank === 1) {
      streak += 1;
    }
  }

  return streak;
}

export function useLeaderboardEngine(ranks, phaseIndex) {
  return useMemo(() => {
    const previousEntries =
      phaseIndex > 0
        ? buildEntryMap(getRankedPhase(phaseIndex - 1))
        : {};

    const enriched = ranks.map((entry) => {
      const previousEntry = previousEntries[entry.slug];

      const { debutPhase, debutRank } = findDebut(entry.slug);

      const rankDelta =
        previousEntry != null
          ? previousEntry.rank - entry.rank
          : 0;

      const pointDelta =
        previousEntry != null
          ? entry.points - previousEntry.points
          : null;

      const streak = getNumberOneStreak(
        entry.slug,
        phaseIndex
      );

      return {
        ...entry,

        previousRank:
          previousEntry?.rank ?? null,

        previousPoints:
          previousEntry?.points ?? null,

        delta: rankDelta,

        pointDelta,

        isNew:
          debutPhase === phaseIndex,

        debutPhase,

        debutRank,

        streak,

        shockwave:
          rankDelta >= 5,
      };
    });

    const biggestGainer =
      phaseIndex === 0
        ? null
        : enriched.reduce((best, current) => {
            if (current.previousRank == null) {
              return best;
            }

            if (!best || current.delta > best.delta) {
              return current;
            }

            return best;
          }, null);

    const biggestDrop =
      phaseIndex === 0
        ? null
        : enriched.reduce((worst, current) => {
            if (current.previousRank == null) {
              return worst;
            }

            if (!worst || current.delta < worst.delta) {
              return current;
            }

            return worst;
          }, null);

    const biggestPointGain =
      phaseIndex === 0
        ? null
        : enriched.reduce((best, current) => {
            if (current.pointDelta == null) {
              return best;
            }

            if (
              !best ||
              current.pointDelta > best.pointDelta
            ) {
              return current;
            }

            return best;
          }, null);

    const consistentOne = enriched
      .filter(
        (entry) =>
          entry.rank === 1 &&
          entry.streak >= 2
      )
      .sort(
        (a, b) =>
          b.streak - a.streak
      )[0];

    const newEntries = enriched
      .filter(
        (entry) =>
          entry.debutPhase === phaseIndex
      )
      .map((entry) => ({
        name: entry.name,
        slug: entry.slug,
        debutRank: entry.debutRank,
        debutPhase: entry.debutPhase,
      }))
      .sort(
        (a, b) =>
          a.debutRank - b.debutRank
      );

    return {
      rankings: enriched,

      stats: {
        biggestGainer:
          biggestGainer?.delta > 0
            ? biggestGainer
            : null,

        biggestDrop:
          biggestDrop?.delta < 0
            ? biggestDrop
            : null,

        biggestPointGain:
          biggestPointGain?.pointDelta > 0
            ? biggestPointGain
            : null,

        consistentOne:
          consistentOne ?? null,

        newEntries,
      },
    };
  }, [ranks, phaseIndex]);
}