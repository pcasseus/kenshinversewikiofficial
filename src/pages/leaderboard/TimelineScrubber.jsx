export default function TimelineScrubber({ phase, setPhase }) {
  const phases = ["START", "MID", "END"];

  return (
    <div className="timeline-wrap">
      {phases.map((label, i) => (
        <button
          key={label}
          className={`timeline-btn ${phase === i ? "active" : ""}`}
          onClick={() => setPhase(i)}
        >
          {label}
        </button>
      ))}

      <style>{`
        .timeline-wrap {
          display: flex;
          justify-content: center;
          gap: 18px;
          margin: 18px 0 36px;
        }

        .timeline-btn {
          padding: 10px 26px;
          border-radius: 999px;
          border: 1px solid rgba(255,200,66,0.45);
          background: transparent;
          color: #f5c842;
          font-weight: 800;
          letter-spacing: .14em;
          cursor: pointer;
        }

        .timeline-btn.active {
          background: #f5c842;
          color: #000;
        }

        /* ---------------- MOBILE ENHANCEMENTS ---------------- */

        @media (max-width: 700px) {
          .timeline-wrap {
            gap: 12px;
            margin: 16px 0 28px;
            flex-wrap: wrap;
          }

          .timeline-btn {
            padding: 8px 20px;
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .timeline-wrap {
            gap: 10px;
            margin: 14px 0 24px;
          }

          .timeline-btn {
            padding: 7px 18px;
            font-size: 11px;
            letter-spacing: 0.12em;
          }
        }
      `}</style>
    </div>
  );
}
