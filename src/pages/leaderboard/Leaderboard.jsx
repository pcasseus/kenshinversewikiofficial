import { useState, useMemo } from "react";
import { PHASES, leaderboardPhases } from "./leaderboardData";
import { useLeaderboardEngine } from "./useLeaderboardEngine";
import LeaderboardRow from "./LeaderboardRow";
import LeaderboardStats from "./LeaderboardStats";
import TimelineScrubber from "./TimelineScrubber";

const BOOKS = [
  { id: 1, label: "BOOK I", unlocked: true },
  { id: 2, label: "BOOK II", unlocked: false },
  { id: 3, label: "BOOK III", unlocked: false },
];

export default function Leaderboard() {
  const [phase, setPhase] = useState(0);
  const [book, setBook] = useState(1);

  const ranked = useMemo(() => {
    const phaseKey = PHASES[phase];
    return leaderboardPhases[phaseKey]
      .slice()
      .sort((a, b) => b.points - a.points)
      .map((c, i) => ({ ...c, rank: i + 1 }));
  }, [phase]);

  const { rankings, stats } = useLeaderboardEngine(ranked, phase);

  return (
    <div className="lb-root">
      <div className="lb-container">
        {/* HEADER */}
        <header className="lb-header">
          <h1>Kenshinverse Power Index</h1>
          <p>
            Comparative ranking of combat capability, narrative dominance,
            momentum, and influence measured in <strong>Power Points</strong>.
          </p>
        </header>

        {/* BOOK SELECTOR */}
        <div className="book-tabs">
          {BOOKS.map((b) => (
            <button
              key={b.id}
              className={`book-btn ${book === b.id ? "active" : ""} ${
                !b.unlocked ? "locked" : ""
              }`}
              onClick={() => b.unlocked && setBook(b.id)}
              disabled={!b.unlocked}
            >
              {b.label}
              {!b.unlocked && <span className="lock">🔒</span>}
            </button>
          ))}
        </div>

        {/* PHASE SELECTOR */}
        <TimelineScrubber phase={phase} setPhase={setPhase} />

        {/* MAIN GRID */}
        <div className="lb-grid">
          <section className="lb-list">
            {rankings.map((entry) => (
              <LeaderboardRow key={entry.slug} entry={entry} />
            ))}
          </section>

          <LeaderboardStats stats={stats} />
        </div>
      </div>

      <style>{`
        .lb-root {
          padding: 56px 24px 96px;
          color: #e6e6e6;
        }

        .lb-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .lb-header {
          margin-bottom: 28px;
        }

        .lb-header h1 {
          font-size: 28px;
          letter-spacing: 0.18em;
          color: #f5c842;
          margin-bottom: 6px;
        }

        .lb-header p {
          font-size: 14px;
          opacity: 0.7;
          max-width: 760px;
        }

        /* BOOK TABS */
        .book-tabs {
          display: flex;
          gap: 14px;
          margin: 28px 0 10px;
        }

        .book-btn {
          padding: 8px 20px;
          border-radius: 999px;
          background: transparent;
          border: 1px solid rgba(255, 200, 66, 0.4);
          color: #f5c842;
          font-weight: 700;
          letter-spacing: 0.14em;
          cursor: pointer;
          position: relative;
        }

        .book-btn.active {
          background: #f5c842;
          color: #000;
        }

        .book-btn.locked {
          opacity: 0.35;
          cursor: not-allowed;
        }

        .lock {
          margin-left: 6px;
          font-size: 12px;
        }

        /* GRID */
        .lb-grid {
          display: grid;
          grid-template-columns: 3fr 1.3fr;
          gap: 36px;
          align-items: start;
          margin-top: 24px;
        }

        .lb-list {
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(255, 200, 66, 0.25);
        }

        /* ---------------- MOBILE ENHANCEMENTS ---------------- */

        @media (max-width: 900px) {
          .lb-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .lb-root {
            padding: 40px 16px 72px;
          }

          .lb-header h1 {
            font-size: 22px;
            letter-spacing: 0.14em;
          }

          .lb-header p {
            font-size: 13px;
          }

          .book-tabs {
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
          }

          .book-btn {
            padding: 7px 16px;
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .lb-header {
            margin-bottom: 20px;
          }

          .lb-header h1 {
            font-size: 20px;
          }

          .lb-header p {
            font-size: 12px;
          }

          .lb-grid {
            gap: 24px;
          }
        }
      `}</style>
    </div>
  );
}
