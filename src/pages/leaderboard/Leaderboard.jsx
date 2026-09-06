import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  PHASES,
  PHASE_LABELS,
  getRankedPhase,
} from "./leaderboardData";

import { useLeaderboardEngine } from "./useLeaderboardEngine";

import PowerIndexHeader from "./PowerIndexHeader";
import PowerIndexTerminal from "./PowerIndexTerminal";
import SpoilerGate from "./SpoilerGate";

export default function Leaderboard() {
  const [phase, setPhase] = useState(0);

  const [
    selectedSlug,
    setSelectedSlug,
  ] = useState(null);

  /*
    Always begin at the spoiler warning when
    this page is freshly entered/mounted.
  */
  const [
    spoilersAccepted,
    setSpoilersAccepted,
  ] = useState(false);

  const ranked = useMemo(() => {
    return getRankedPhase(phase);
  }, [phase]);

  const {
    rankings,
    stats,
  } = useLeaderboardEngine(
    ranked,
    phase
  );

  const phaseKey =
    PHASES[phase];

  const phaseInfo =
    PHASE_LABELS[phaseKey];

  useEffect(() => {
    if (!rankings.length) {
      setSelectedSlug(null);
      return;
    }

    const selectedExists =
      rankings.some(
        (entry) =>
          entry.slug ===
          selectedSlug
      );

    if (!selectedExists) {
      setSelectedSlug(
        rankings[0].slug
      );
    }
  }, [
    rankings,
    selectedSlug,
  ]);

  const selectedEntry =
    rankings.find(
      (entry) =>
        entry.slug ===
        selectedSlug
    ) ?? null;

  const acceptSpoilers = () => {
    setSpoilersAccepted(true);
  };

  const leaveArchive = () => {
    window.history.back();
  };

  if (!spoilersAccepted) {
    return (
      <SpoilerGate
        onContinue={
          acceptSpoilers
        }
        onBack={
          leaveArchive
        }
      />
    );
  }

  return (
    <main className="pi-page">
      <div className="pi-page-shell">
        <PowerIndexHeader />

        <PowerIndexTerminal
          phase={phase}
          setPhase={setPhase}
          phaseInfo={phaseInfo}
          rankings={rankings}
          stats={stats}
          selectedSlug={
            selectedSlug
          }
          selectedEntry={
            selectedEntry
          }
          onSelectSubject={
            setSelectedSlug
          }
        />
      </div>

      <style>{`
        .pi-page {
          min-height: 100vh;

          padding:
            16px
            10px
            74px;

          color: #e9f3eb;
        }

        .pi-page-shell {
          width:
            min(
              calc(
                100vw - 24px
              ),
              1740px
            );

          margin:
            0
            auto;
        }

        @media (
          max-width: 700px
        ) {
          .pi-page {
            padding:
              8px
              4px
              56px;
          }

          .pi-page-shell {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}