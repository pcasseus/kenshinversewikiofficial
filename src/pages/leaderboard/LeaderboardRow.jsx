import { useCountUp } from "./useCountUp";

function Movement({ entry }) {
  if (entry.isNew) {
    return (
      <span className="pi-row-move pi-row-move-new">
        NEW
      </span>
    );
  }

  if (entry.delta > 0) {
    return (
      <span className="pi-row-move pi-row-move-up">
        ▲ {entry.delta}
      </span>
    );
  }

  if (entry.delta < 0) {
    return (
      <span className="pi-row-move pi-row-move-down">
        ▼ {Math.abs(entry.delta)}
      </span>
    );
  }

  return (
    <span className="pi-row-move pi-row-move-flat">
      —
    </span>
  );
}

export default function LeaderboardRow({
  entry,
  selected,
  onSelect,
}) {
  const indexScore =
    useCountUp(entry.points);

  return (
    <button
      id={`row-${entry.slug}`}
      type="button"
      className={`pi-subject-row ${
        selected ? "selected" : ""
      }`}
      onClick={() =>
        onSelect(entry.slug)
      }
    >
      <div className="pi-subject-main">
        <span className="pi-subject-selector">
          {selected ? ">" : ""}
        </span>

        <span className="pi-subject-rank">
          #
          {String(
            entry.rank
          ).padStart(2, "0")}
        </span>

        <div className="pi-subject-name">
          <strong>
            {entry.name}
          </strong>

          <small>
            SUBJECT://
            {entry.slug.toUpperCase()}
          </small>
        </div>
      </div>

      <div className="pi-subject-data">
        <Movement
          entry={entry}
        />

        <div className="pi-subject-score">
          <strong>
            {indexScore.toLocaleString()}
          </strong>

          <span>
            SCORE
          </span>
        </div>
      </div>

      <style>{`
        .pi-subject-row {
          position: relative;

          width: 100% !important;
          min-height: 62px;

          display: flex !important;
          flex-direction:
            row !important;

          align-items: center;
          justify-content:
            space-between;

          gap: 16px;

          margin: 0 !important;

          padding:
            10px 16px !important;

          border: 0 !important;

          border-bottom:
            1px solid
            rgba(
              111,
              255,
              160,
              0.1
            ) !important;

          border-radius:
            0 !important;

          background:
            transparent !important;

          color: inherit;

          font: inherit;

          text-align: left;

          appearance: none;

          cursor: pointer;
        }

        .pi-subject-row:last-child {
          border-bottom:
            none !important;
        }

        .pi-subject-row:hover {
          background:
            rgba(
              77,
              255,
              132,
              0.055
            ) !important;
        }

        .pi-subject-row.selected {
          background:
            linear-gradient(
              90deg,
              rgba(
                80,
                255,
                134,
                0.13
              ),
              rgba(
                80,
                255,
                134,
                0.02
              )
            ) !important;

          box-shadow:
            inset
            2px
            0
            0
            #a8f8be;
        }

        .pi-subject-main {
          min-width: 0;

          flex: 1 1 auto;

          display: flex;
          align-items: center;

          gap: 13px;
        }

        .pi-subject-selector {
          flex: 0 0 12px;

          color: #a8f8be;

          font-size: 14px;
          font-weight: 900;

          text-shadow:
            0 0 8px
            rgba(
              112,
              246,
              151,
              0.22
            );
        }

        .pi-subject-rank {
          flex: 0 0 54px;

          color: #ffd95a;

          font-size: 16px;
          font-weight: 900;

          font-variant-numeric:
            tabular-nums;
        }

        .pi-subject-name {
          min-width: 0;

          display: flex;
          flex-direction: column;

          gap: 3px;
        }

        .pi-subject-name strong {
          overflow: hidden;

          color: #effff2;

          font-size: 13px;
          font-weight: 850;

          letter-spacing: 0.02em;

          text-overflow:
            ellipsis;

          white-space:
            nowrap;
        }

        .pi-subject-row.selected
          .pi-subject-name
          strong {
          color: #b0f7c3;
        }

        .pi-subject-name small {
          overflow: hidden;

          color:
            rgba(
              194,
              255,
              210,
              0.44
            );

          font-size: 7px;
          font-weight: 800;

          letter-spacing: 0.1em;

          text-overflow:
            ellipsis;

          white-space:
            nowrap;
        }

        .pi-subject-data {
          flex: 0 0 auto;

          display: grid;

          grid-template-columns:
            90px
            112px;

          align-items: center;

          gap: 10px;
        }

        .pi-row-move {
          justify-self: center;

          min-width: 40px;

          display: inline-flex;
          justify-content: center;

          padding: 3px 6px;

          border-radius: 3px;

          font-size: 8px;
          font-weight: 900;

          letter-spacing: 0.06em;

          font-variant-numeric:
            tabular-nums;
        }

        .pi-row-move-up {
          color: #a8f5bd;

          border:
            1px solid
            rgba(
              168,
              245,
              189,
              0.32
            );
        }

        .pi-row-move-down {
          color: #f09d9d;

          border:
            1px solid
            rgba(
              240,
              157,
              157,
              0.3
            );
        }

        .pi-row-move-new {
          color: #ffd95a;

          border:
            1px solid
            rgba(
              255,
              217,
              90,
              0.34
            );
        }

        .pi-row-move-flat {
          color:
            rgba(
              255,
              255,
              255,
              0.42
            );
        }

        .pi-subject-score {
          display: flex;
          align-items: baseline;

          justify-content:
            flex-end;

          gap: 6px;

          white-space: nowrap;

          font-variant-numeric:
            tabular-nums;
        }

        .pi-subject-score strong {
          color: #f8fff9;

          font-size: 14px;
          font-weight: 900;
        }

        .pi-subject-score span {
          color:
            rgba(
              255,
              217,
              90,
              0.66
            );

          font-size: 7px;
          font-weight: 900;

          letter-spacing: 0.08em;
        }

        @media (
          max-width: 600px
        ) {
          .pi-subject-row {
            min-height: 58px;

            gap: 8px;

            padding:
              9px 10px !important;
          }

          .pi-subject-main {
            gap: 7px;
          }

          .pi-subject-rank {
            flex-basis: 40px;

            font-size: 13px;
          }

          .pi-subject-name strong {
            font-size: 11px;
          }

          .pi-subject-name small {
            display: none;
          }

          .pi-subject-data {
            grid-template-columns:
              70px;

            gap: 0;
          }

          .pi-row-move {
            display: none;
          }

          .pi-subject-score {
            flex-direction:
              column;

            align-items:
              flex-end;

            gap: 0;
          }

          .pi-subject-score strong {
            font-size: 10px;
          }

          .pi-subject-score span {
            font-size: 6px;
          }
        }

        @media (
          max-width: 400px
        ) {
          .pi-subject-selector {
            display: none;
          }

          .pi-subject-rank {
            flex-basis: 36px;
          }
        }
      `}</style>
    </button>
  );
}