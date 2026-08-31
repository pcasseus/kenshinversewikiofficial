import { useRef } from "react";

export function useLeaderboardEngine(ranks, phaseIndex) {
  const history = useRef({});

  ranks.forEach((r) => {
    if (!history.current[r.slug]) {
      history.current[r.slug] = {
        ranks: {},
        debutPhase: phaseIndex,
        debutRank: r.rank,
      };
    } else {
      const rec = history.current[r.slug];
      if (phaseIndex < rec.debutPhase) {
        rec.debutPhase = phaseIndex;
        rec.debutRank = r.rank;
      }
    }

    history.current[r.slug].ranks[phaseIndex] = r.rank;
  });

  const enriched = ranks.map((r) => {
    const record = history.current[r.slug];
    const prevRank = record.ranks[phaseIndex - 1];

    const delta = prevRank != null ? prevRank - r.rank : 0;
    const isDebutThisPhase = record.debutPhase === phaseIndex;

    const streak = Object.values(record.ranks).filter(
      (rank) => rank === 1
    ).length;

    return {
      ...r,
      delta,
      isNew: isDebutThisPhase,
      debutRank: record.debutRank,
      debutPhase: record.debutPhase,
      streak,
      shockwave: delta >= 5,
    };
  });

  const biggestGainer = enriched.reduce(
    (best, curr) => (curr.delta > (best?.delta ?? 0) ? curr : best),
    null
  );

  const biggestDrop = enriched.reduce(
    (worst, curr) => (curr.delta < (worst?.delta ?? 0) ? curr : worst),
    null
  );

  const consistentOne = enriched
    .filter((r) => r.rank === 1 && r.streak >= 2)
    .sort((a, b) => b.streak - a.streak)[0];

  const newEntries = enriched
    .filter((r) => r.debutPhase === phaseIndex)
    .map((r) => ({
      name: r.name,
      debutRank: r.debutRank,
      debutPhase: r.debutPhase,
    }))
    .sort((a, b) => a.debutRank - b.debutRank);

  return {
    rankings: enriched,
    stats: {
      biggestGainer,
      biggestDrop,
      consistentOne,
      newEntries,
    },
  };
}
