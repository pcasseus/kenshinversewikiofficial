export default function LeaderboardStats({ stats }) {
  const newEntries =
    stats.newEntries && stats.newEntries.length > 0
      ? stats.newEntries
      : stats.newEntry
      ? [stats.newEntry]
      : [];

  return (
    <aside className="lb-stats">
      <h3>ANALYSIS</h3>

      <Stat label="Biggest Gainer" value={stats.biggestGainer} />
      <Stat label="Biggest Drop" value={stats.biggestDrop} />

      {stats.consistentOne && (
        <div className="stat highlight">
          <div className="label">Consistent #1</div>
          <strong>{stats.consistentOne.name}</strong>
          <div className="sub">
            {stats.consistentOne.streak} phases
          </div>
        </div>
      )}

      {newEntries.length > 0 && (
        <div className="stat">
          <div className="label">New Entries</div>

          <div className="entries">
            {newEntries.map((entry) => (
              <div key={entry.name} className="entry">
                <strong>{entry.name}</strong>
                <span className="debut">
                  Debuted at #{entry.debutRank}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .lb-stats {
          padding: 20px;
          border-radius: 14px;
          border: 1px solid rgba(255,200,66,0.25);
        }

        .lb-stats h3 {
          font-size: 12px;
          letter-spacing: 0.14em;
          color: #f5c842;
          margin-bottom: 16px;
        }

        .stat {
          margin-bottom: 16px;
        }

        .highlight {
          border-left: 3px solid #f5c842;
          padding-left: 12px;
        }

        .label {
          font-size: 11px;
          opacity: 0.6;
          margin-bottom: 6px;
        }

        .sub {
          font-size: 12px;
          opacity: 0.55;
        }

        .entries {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .entry {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          gap: 12px;
        }

        .debut {
          opacity: 0.65;
          font-size: 12px;
          white-space: nowrap;
        }

        /* ---------------- MOBILE ENHANCEMENTS ---------------- */

        @media (max-width: 700px) {
          .lb-stats {
            padding: 16px;
          }

          .lb-stats h3 {
            text-align: center;
          }

          .entry {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .lb-stats {
            padding: 14px;
          }

          .stat {
            margin-bottom: 14px;
          }

          .entry {
            flex-direction: column;
            align-items: flex-start;
            gap: 2px;
          }

          .debut {
            font-size: 11px;
          }
        }
      `}</style>
    </aside>
  );
}

function Stat({ label, value }) {
  if (!value) return null;

  return (
    <div className="stat">
      <div className="label">{label}</div>
      <strong>
        {value.name} ({value.delta > 0 ? "+" : ""}
        {value.delta})
      </strong>
    </div>
  );
}
