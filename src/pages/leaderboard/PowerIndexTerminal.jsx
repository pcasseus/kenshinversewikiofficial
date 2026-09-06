import StaticTerminalFrame from "./StaticTerminalFrame";
import TimelineScrubber from "./TimelineScrubber";
import LeaderboardRow from "./LeaderboardRow";
import LeaderboardStats from "./LeaderboardStats";
import SubjectAssessmentPanel from "./SubjectAssessmentPanel";

import { useFlipPositions } from "./useFlipPositions";

export default function PowerIndexTerminal({
  phase,
  setPhase,
  phaseInfo,
  rankings,
  stats,
  selectedSlug,
  selectedEntry,
  onSelectSubject,
}) {
  useFlipPositions(rankings);

  return (
    <StaticTerminalFrame
      phaseInfo={phaseInfo}
    >
      <header className="pi-terminal-main-header">
        <div>
          <span className="pi-terminal-code">
            S.T.A.T.I.C. // POWER ASSESSMENT NETWORK
          </span>

          <h2>
            SUBJECT POWER INDEX
          </h2>

          <p>
            Comparative ranking of demonstrated combat capability,
            observed performance, versatility, and confirmed threat
            potential.
          </p>
        </div>

        <div className="pi-terminal-archive">
          <span>
            ARCHIVE
          </span>

          <strong>
            KVI
          </strong>
        </div>
      </header>

      <section className="pi-terminal-status">
        <StatusCell
          label="SYSTEM"
          value="ONLINE"
          active
        />

        <StatusCell
          label="SNAPSHOT"
          value={
            phaseInfo.title
          }
        />

        <StatusCell
          label="SUBJECTS"
          value={String(
            rankings.length
          )}
        />

        <StatusCell
          label="MODEL"
          value="COMPARATIVE"
        />
      </section>

      <TimelineScrubber
        phase={phase}
        setPhase={setPhase}
      />

      <div className="pi-terminal-phase">
        <strong>
          &gt; {phaseInfo.code}
        </strong>

        <span>
          {phaseInfo.description}
        </span>
      </div>

      <div className="pi-terminal-body">
        <section className="pi-terminal-ranking">
          <div className="pi-terminal-ranking-top">
            <span>
              CURRENT RANKING
            </span>

            <span>
              SELECT SUBJECT TO OPEN FILE
            </span>
          </div>

          <div className="pi-terminal-columns">
            <span>
              SUBJECT
            </span>

            <span>
              MOVE
            </span>

            <span>
              INDEX SCORE
            </span>
          </div>

          <div className="pi-terminal-rows">
            {rankings.map(
              (entry) => (
                <LeaderboardRow
                  key={
                    entry.slug
                  }
                  entry={entry}
                  selected={
                    entry.slug ===
                    selectedSlug
                  }
                  onSelect={
                    onSelectSubject
                  }
                />
              )
            )}
          </div>
        </section>

        <SubjectAssessmentPanel
          entry={
            selectedEntry
          }
          rankings={
            rankings
          }
          phaseInfo={
            phaseInfo
          }
        />
      </div>

      <LeaderboardStats
        stats={stats}
        rankings={rankings}
      />

      <style>{`
        .pi-terminal-main-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;

          gap: 22px;

          margin-bottom: 20px;
        }

        .pi-terminal-code {
          display: block;

          margin-bottom: 8px;

          color:
            rgba(
              179,
              255,
              201,
              0.8
            );

          font-size: 10px;
          font-weight: 900;

          letter-spacing: 0.14em;
        }

        .pi-terminal-main-header h2 {
          margin:
            0
            0
            7px;

          color: #a8f8be;

          font-size:
            clamp(
              28px,
              3vw,
              38px
            );

          font-weight: 850;

          letter-spacing: 0.1em;

          text-shadow:
            0
            0
            14px
            rgba(
              112,
              246,
              151,
              0.18
            );
        }

        .pi-terminal-main-header p {
          max-width: 760px;

          margin: 0;

          color:
            rgba(
              210,
              255,
              221,
              0.74
            );

          font-size: 13px;
          line-height: 1.65;
        }

        .pi-terminal-archive {
          flex: 0 0 auto;

          min-width: 96px;

          padding:
            12px
            14px;

          border:
            1px solid
            rgba(
              245,
              200,
              66,
              0.36
            );

          text-align: right;
        }

        .pi-terminal-archive span {
          display: block;

          margin-bottom: 3px;

          color:
            rgba(
              245,
              200,
              66,
              0.6
            );

          font-size: 8px;
          font-weight: 900;
        }

        .pi-terminal-archive strong {
          color: #ffd95a;

          font-size: 22px;
        }

        .pi-terminal-status {
          display: grid;

          grid-template-columns:
            repeat(
              4,
              minmax(0, 1fr)
            );

          margin-bottom: 18px;

          border-top:
            1px solid
            rgba(
              111,
              255,
              160,
              0.17
            );

          border-bottom:
            1px solid
            rgba(
              111,
              255,
              160,
              0.17
            );
        }

        .pi-terminal-status-cell {
          min-width: 0;

          padding:
            13px
            15px;

          border-right:
            1px solid
            rgba(
              111,
              255,
              160,
              0.1
            );
        }

        .pi-terminal-status-cell:last-child {
          border-right: none;
        }

        .pi-terminal-status-cell span {
          display: block;

          margin-bottom: 5px;

          color:
            rgba(
              188,
              249,
              205,
              0.58
            );

          font-size: 9px;
          font-weight: 900;

          letter-spacing: 0.09em;
        }

        .pi-terminal-status-cell strong {
          overflow: hidden;

          display: block;

          color:
            rgba(
              225,
              255,
              232,
              0.9
            );

          font-size: 12px;
          font-weight: 800;

          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .pi-terminal-status-cell.active
          strong {
          color: #a8f8be;

          text-shadow:
            0
            0
            8px
            rgba(
              112,
              246,
              151,
              0.2
            );
        }

        .pi-terminal-phase {
          display: flex;
          align-items: center;

          gap: 18px;

          margin-bottom: 18px;

          padding:
            13px
            15px;

          border-left:
            2px solid
            rgba(
              141,
              242,
              171,
              0.82
            );

          background:
            rgba(
              111,
              255,
              160,
              0.03
            );
        }

        .pi-terminal-phase strong {
          flex: 0 0 auto;

          color: #9ef2b5;

          font-size: 10px;
          font-weight: 900;
        }

        .pi-terminal-phase span {
          color:
            rgba(
              214,
              255,
              224,
              0.7
            );

          font-size: 12px;
          line-height: 1.5;
        }

        .pi-terminal-body {
          display: grid;

          grid-template-columns:
            minmax(
              0,
              2.2fr
            )
            minmax(
              390px,
              1fr
            );

          gap: 20px;

          align-items: start;
        }

        .pi-terminal-ranking {
          min-width: 0;

          overflow: hidden;

          border:
            1px solid
            rgba(
              111,
              255,
              160,
              0.24
            );

          border-radius: 5px;

          background:
            rgba(
              0,
              0,
              0,
              0.2
            );
        }

        .pi-terminal-ranking-top {
          display: flex;
          justify-content: space-between;

          gap: 12px;

          padding:
            12px
            16px;

          border-bottom:
            1px solid
            rgba(
              111,
              255,
              160,
              0.14
            );

          color:
            rgba(
              199,
              252,
              214,
              0.62
            );

          font-size: 9px;
          font-weight: 900;

          letter-spacing: 0.1em;
        }

        .pi-terminal-columns {
          display: grid;

          grid-template-columns:
            minmax(
              0,
              1fr
            )
            105px
            135px;

          gap: 12px;

          padding:
            11px
            16px;

          border-bottom:
            1px solid
            rgba(
              111,
              255,
              160,
              0.14
            );

          background:
            rgba(
              111,
              255,
              160,
              0.03
            );

          color:
            rgba(
              200,
              252,
              215,
              0.56
            );

          font-size: 9px;
          font-weight: 900;

          letter-spacing: 0.09em;
        }

        .pi-terminal-columns
          span:nth-child(2) {
          text-align: center;
        }

        .pi-terminal-columns
          span:last-child {
          text-align: right;
        }

        .pi-terminal-rows {
          display: flex !important;

          flex-direction:
            column !important;

          width: 100%;
        }

        @media (
          max-width: 1100px
        ) {
          .pi-terminal-body {
            grid-template-columns:
              1fr;
          }
        }

        @media (
          max-width: 700px
        ) {
          .pi-terminal-status {
            grid-template-columns:
              repeat(
                2,
                1fr
              );
          }

          .pi-terminal-main-header {
            align-items:
              flex-start;
          }
        }

        @media (
          max-width: 500px
        ) {
          .pi-terminal-main-header {
            flex-direction:
              column;
          }

          .pi-terminal-archive {
            width: 100%;

            text-align: left;
          }

          .pi-terminal-phase {
            align-items:
              flex-start;

            flex-direction:
              column;

            gap: 5px;
          }

          .pi-terminal-ranking-top
            span:last-child {
            display: none;
          }

          .pi-terminal-columns {
            grid-template-columns:
              1fr
              82px;
          }

          .pi-terminal-columns
            span:nth-child(2) {
            display: none;
          }
        }
      `}</style>
    </StaticTerminalFrame>
  );
}

function StatusCell({
  label,
  value,
  active = false,
}) {
  return (
    <div
      className={`pi-terminal-status-cell ${
        active ? "active" : ""
      }`}
    >
      <span>
        {label}
      </span>

      <strong>
        {value}
      </strong>
    </div>
  );
}