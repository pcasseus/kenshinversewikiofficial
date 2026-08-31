import { useEffect, useRef } from "react";

export function useLeaderboardRanks(ranks) {
  const prevRanksRef = useRef({});

  const enriched = ranks.map((entry) => {
    const prevRank = prevRanksRef.current[entry.slug];
    const delta = prevRank != null ? prevRank - entry.rank : null;

    return {
      ...entry,
      delta,
      isNew: prevRank == null,
    };
  });

  useEffect(() => {
    prevRanksRef.current = ranks.reduce((acc, r) => {
      acc[r.slug] = r.rank;
      return acc;
    }, {});
  }, [ranks]);

  return enriched;
}
