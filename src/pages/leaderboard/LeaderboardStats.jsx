export default function LeaderboardStats({
  stats,
  rankings,
}) {
  const topSubject =
    rankings[0] ?? null;

  return (
    <section className="index-summary">
      <div className="summary-heading">
        <span>
          INDEX SUMMARY
        </span>

        <span>
          AUTO-GENERATED ANALYSIS
        </span>
      </div>

      <div className="summary-grid">
        <SummaryCell
          label="TOP SUBJECT"
          value={
            topSubject
              ? `#01 ${topSubject.name}`
              : "N/A"
          }
        />

        <SummaryCell
          label="LARGEST RANK GAIN"
          value={
            stats.biggestGainer
              ? `${stats.biggestGainer.name} // +${stats.biggestGainer.delta}`
              : "NO CHANGE DATA"
          }
        />

        <SummaryCell
          label="LARGEST INDEX INCREASE"
          value={
            stats.biggestPointGain
              ? `${stats.biggestPointGain.name} // +${stats.biggestPointGain.pointDelta.toLocaleString()}`
              : "NO CHANGE DATA"
          }
        />

        <SummaryCell
          label="NEW INDEX ENTRIES"
          value={String(
            stats.newEntries.length
          )}
        />
      </div>

      <style>{`
        .index-summary {
          margin-top: 20px;

          border:
            1px solid
            rgba(
              111,
              255,
              160,
              0.15
            );

          border-radius: 4px;
        }

        .summary-heading {
          display: flex;
          justify-content: space-between;

          gap: 12px;

          padding:
            11px
            14px;

          border-bottom:
            1px solid
            rgba(
              111,
              255,
              160,
              0.1
            );

          color:
            rgba(
              188,
              248,
              205,
              0.56
            );

          font-size: 9px;
          font-weight: 900;

          letter-spacing: 0.11em;
        }

        .summary-grid {
          display: grid;

          grid-template-columns:
            repeat(
              4,
              1fr
            );
        }

        .summary-cell {
          min-width: 0;

          padding:
            14px
            15px;

          border-right:
            1px solid
            rgba(
              111,
              255,
              160,
              0.09
            );
        }

        .summary-cell:last-child {
          border-right: none;
        }

        .summary-cell span {
          display: block;

          margin-bottom: 7px;

          color:
            rgba(
              186,
              247,
              203,
              0.5
            );

          font-size: 8px;
          font-weight: 900;

          letter-spacing: 0.09em;
        }

        .summary-cell strong {
          overflow: hidden;

          display: block;

          color:
            rgba(
              239,
              250,
              242,
              0.84
            );

          font-size: 11px;
          font-weight: 850;

          text-overflow:
            ellipsis;

          white-space: nowrap;
        }

        @media (
          max-width: 700px
        ) {
          .summary-grid {
            grid-template-columns:
              repeat(
                2,
                1fr
              );
          }

          .summary-cell:nth-child(2) {
            border-right: none;
          }

          .summary-cell:nth-child(-n + 2) {
            border-bottom:
              1px solid
              rgba(
                111,
                255,
                160,
                0.09
              );
          }
        }

        @media (
          max-width: 440px
        ) {
          .summary-grid {
            grid-template-columns:
              1fr;
          }

          .summary-cell {
            border-right: none;

            border-bottom:
              1px solid
              rgba(
                111,
                255,
                160,
                0.09
              );
          }

          .summary-cell:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
}

function SummaryCell({
  label,
  value,
}) {
  return (
    <div className="summary-cell">
      <span>
        {label}
      </span>

      <strong>
        {value}
      </strong>
    </div>
  );
}