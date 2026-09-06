const PHASES = [
  {
    label: "START",
    index: 0,
    number: "01",
  },
  {
    label: "MID",
    index: 1,
    number: "02",
  },
  {
    label: "END",
    index: 2,
    number: "03",
  },
];

export default function TimelineScrubber({
  phase,
  setPhase,
}) {
  return (
    <section className="terminal-timeline">
      <div className="timeline-heading">
        <span>
          EVENT INDEX TIMELINE
        </span>

        <span>
          SELECT ARCHIVE SNAPSHOT
        </span>
      </div>

      <div className="timeline-track">
        <div className="timeline-line" />

        {PHASES.map((item) => {
          const active =
            phase === item.index;

          const passed =
            phase > item.index;

          return (
            <button
              key={item.label}
              type="button"
              className={`timeline-node ${
                active
                  ? "active"
                  : ""
              } ${
                passed
                  ? "passed"
                  : ""
              }`}
              onClick={() =>
                setPhase(
                  item.index
                )
              }
              aria-pressed={active}
            >
              <span className="node-dot" />

              <span className="node-number">
                PHASE {item.number}
              </span>

              <strong>
                {item.label}
              </strong>
            </button>
          );
        })}
      </div>

      <style>{`
        .terminal-timeline {
          margin:
            22px
            0
            26px;

          padding:
            18px
            18px
            16px;

          border:
            1px solid
            rgba(
              111,
              255,
              160,
              0.13
            );

          background:
            rgba(
              111,
              255,
              160,
              0.018
            );
        }

        .timeline-heading {
          display: flex;
          justify-content: space-between;

          gap: 12px;

          margin-bottom: 20px;

          color:
            rgba(
              192,
              250,
              209,
              0.55
            );

          font-size: 9px;
          font-weight: 900;

          letter-spacing: 0.12em;
        }

        .timeline-track {
          position: relative;

          display: grid;

          grid-template-columns:
            repeat(
              3,
              1fr
            );
        }

        .timeline-line {
          position: absolute;

          top: 8px;

          left: 16.666%;
          right: 16.666%;

          height: 1px;

          background:
            rgba(
              111,
              255,
              160,
              0.2
            );
        }

        .timeline-node {
          position: relative;

          z-index: 2;

          display: flex;
          flex-direction: column;
          align-items: center;

          gap: 5px;

          padding:
            0
            8px;

          border: 0;

          background:
            transparent;

          color:
            rgba(
              180,
              244,
              198,
              0.45
            );

          cursor: pointer;
        }

        .node-dot {
          width: 17px;
          height: 17px;

          border:
            1px solid
            rgba(
              111,
              255,
              160,
              0.42
            );

          border-radius: 50%;

          background: #020503;

          transition:
            border-color
            160ms
            ease,
            background
            160ms
            ease,
            box-shadow
            160ms
            ease;
        }

        .timeline-node.passed
          .node-dot {
          border-color:
            rgba(
              111,
              255,
              160,
              0.65
            );

          background:
            rgba(
              111,
              255,
              160,
              0.2
            );
        }

        .timeline-node.active
          .node-dot {
          border-color:
            #8eedaa;

          background:
            #8eedaa;

          box-shadow:
            0
            0
            12px
            rgba(
              120,
              228,
              151,
              0.52
            );
        }

        .node-number {
          margin-top: 3px;

          color:
            rgba(
              187,
              247,
              203,
              0.42
            );

          font-size: 8px;
          font-weight: 900;

          letter-spacing: 0.08em;
        }

        .timeline-node strong {
          font-size: 11px;
          font-weight: 900;

          letter-spacing: 0.12em;
        }

        .timeline-node.active
          strong {
          color: #9ef2b5;
        }

        .timeline-node.passed
          strong {
          color:
            rgba(
              158,
              242,
              181,
              0.65
            );
        }

        @media (
          max-width: 500px
        ) {
          .timeline-heading {
            font-size: 8px;
          }

          .timeline-node strong {
            font-size: 10px;
          }

          .node-number {
            font-size: 7px;
          }
        }
      `}</style>
    </section>
  );
}