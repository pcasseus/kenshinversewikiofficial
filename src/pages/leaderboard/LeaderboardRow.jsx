import { useCountUp } from "./useCountUp";

export default function LeaderboardRow({ entry }) {
  const powerPoints = useCountUp(entry.points);

  return (
    <div
      id={`row-${entry.slug}`}
      className="lb-row"
    >
      <div className="rank">#{entry.rank}</div>

      <img
        className="avatar"
        src={entry.image}
        alt={entry.name}
      />

      <div className="name">
        {entry.name}
        {entry.delta !== 0 && (
          <span
            className={`delta ${
              entry.delta > 0 ? "up" : "down"
            }`}
          >
            {entry.delta > 0
              ? `▲ ${entry.delta}`
              : `▼ ${Math.abs(entry.delta)}`}
          </span>
        )}
      </div>

      <div className="points">
        {powerPoints.toLocaleString()} PP
      </div>

      <style>{`
        .lb-row {
          display: grid;
          grid-template-columns: 60px 44px 1fr 140px;
          align-items: center;
          padding: 14px 18px;
          border-bottom: 1px solid rgba(255,200,66,0.15);
          will-change: transform;
        }

        .rank {
          font-weight: 800;
          color: #f5c842;
        }

        .avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid rgba(255,200,66,0.6);
        }

        .name {
          font-weight: 600;
          white-space: nowrap; /* 🔑 keep full name together */
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .delta {
          font-size: 12px;
          margin-left: 6px;
        }

        .delta.up { color: #22c55e; }
        .delta.down { color: #ef4444; }

        .points {
          text-align: right;
          opacity: 0.8;
          font-variant-numeric: tabular-nums;
          white-space: nowrap;
        }

        /* ---------------- MOBILE ENHANCEMENTS ---------------- */

        @media (max-width: 700px) {
          .lb-row {
            grid-template-columns: 48px 36px 1fr 96px;
            padding: 12px 14px;
          }

          .avatar {
            width: 32px;
            height: 32px;
          }

          .name {
            font-size: 13px;
          }

          .points {
            font-size: 12px;
          }
        }

        @media (max-width: 420px) {
          .lb-row {
            grid-template-columns: 42px 32px 1fr auto;
            padding: 10px 12px;
            gap: 10px;
          }

          .rank {
            font-size: 12px;
          }

          .avatar {
            width: 28px;
            height: 28px;
          }

          .name {
            font-size: 12px;
          }

          .points {
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  );
}
