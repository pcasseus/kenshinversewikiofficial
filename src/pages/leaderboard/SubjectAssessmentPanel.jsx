function formatSigned(value) {
    if (value == null) {
      return "N/A";
    }
  
    if (value > 0) {
      return `+${value.toLocaleString()}`;
    }
  
    return value.toLocaleString();
  }
  
  function getRankMovement(entry) {
    if (entry.isNew) {
      return "NEW ENTRY";
    }
  
    if (entry.previousRank == null) {
      return "BASELINE";
    }
  
    if (entry.delta > 0) {
      return `▲ ${entry.delta}`;
    }
  
    if (entry.delta < 0) {
      return `▼ ${Math.abs(entry.delta)}`;
    }
  
    return "NO CHANGE";
  }
  
  export default function SubjectAssessmentPanel({
    entry,
    rankings,
    phaseInfo,
  }) {
    if (!entry) {
      return (
        <aside className="subject-panel subject-panel-empty">
          <span className="subject-terminal-prompt">
            &gt; SELECT SUBJECT_
          </span>
  
          <p>
            Select an indexed subject to retrieve the current
            S.T.A.T.I.C. power assessment.
          </p>
  
          <PanelStyles />
        </aside>
      );
    }
  
    const index = rankings.findIndex(
      (candidate) => candidate.slug === entry.slug
    );
  
    const above =
      index > 0
        ? rankings[index - 1]
        : null;
  
    const below =
      index >= 0 &&
      index < rankings.length - 1
        ? rankings[index + 1]
        : null;
  
    const projection =
      entry.projectedOutput;
  
    return (
      <aside className="subject-panel">
        <div className="subject-panel-header">
          <div>
            <span className="subject-kicker">
              SUBJECT ASSESSMENT
            </span>
  
            <h2>
              {entry.name}
            </h2>
  
            <span className="subject-id">
              FILE://PA-
              {entry.slug.toUpperCase()}
            </span>
          </div>
  
          <div className="subject-rank-box">
            <span>
              CURRENT RANK
            </span>
  
            <strong>
              #
              {String(
                entry.rank
              ).padStart(
                2,
                "0"
              )}
            </strong>
          </div>
        </div>
  
        <div className="subject-terminal-rule" />
  
        <div className="subject-metrics">
          <Metric
            label="CURRENT INDEX"
            value={entry.points.toLocaleString()}
          />
  
          <Metric
            label="PREVIOUS INDEX"
            value={
              entry.previousPoints == null
                ? "BASELINE"
                : entry.previousPoints.toLocaleString()
            }
          />
  
          <Metric
            label="INDEX CHANGE"
            value={formatSigned(
              entry.pointDelta
            )}
            tone={
              entry.pointDelta > 0
                ? "positive"
                : entry.pointDelta < 0
                ? "negative"
                : ""
            }
          />
  
          <Metric
            label="RANK MOVEMENT"
            value={getRankMovement(
              entry
            )}
            tone={
              entry.delta > 0
                ? "positive"
                : entry.delta < 0
                ? "negative"
                : ""
            }
          />
        </div>
  
        <section className="assessment-section">
          <div className="assessment-label">
            <span>
              01
            </span>
  
            <strong>
              {phaseInfo.short} ASSESSMENT
            </strong>
          </div>
  
          <p>
            {entry.reason}
          </p>
        </section>
  
        <section className="assessment-section">
          <div className="assessment-label">
            <span>
              02
            </span>
  
            <strong>
              POSITION COMPARISON
            </strong>
          </div>
  
          <div className="comparison-lines">
            {above ? (
              <ComparisonLine
                direction="ABOVE"
                subject={above}
                difference={
                  above.points -
                  entry.points
                }
              />
            ) : (
              <div className="comparison-line top-position">
                <span>
                  ABOVE
                </span>
  
                <strong>
                  NO HIGHER INDEXED SUBJECT
                </strong>
              </div>
            )}
  
            {below ? (
              <ComparisonLine
                direction="BELOW"
                subject={below}
                difference={
                  entry.points -
                  below.points
                }
              />
            ) : (
              <div className="comparison-line">
                <span>
                  BELOW
                </span>
  
                <strong>
                  NO LOWER INDEXED SUBJECT
                </strong>
              </div>
            )}
          </div>
        </section>
  
        <section className="assessment-section assessment-history">
          <div className="assessment-label">
            <span>
              03
            </span>
  
            <strong>
              INDEX HISTORY
            </strong>
          </div>
  
          <div className="history-row">
            <span>
              Previous Rank
            </span>
  
            <strong>
              {entry.previousRank == null
                ? "N/A"
                : `#${String(
                    entry.previousRank
                  ).padStart(
                    2,
                    "0"
                  )}`}
            </strong>
          </div>
  
          <div className="history-row">
            <span>
              Current Rank
            </span>
  
            <strong>
              #
              {String(
                entry.rank
              ).padStart(
                2,
                "0"
              )}
            </strong>
          </div>
  
          <div className="history-row">
            <span>
              Movement
            </span>
  
            <strong>
              {getRankMovement(
                entry
              )}
            </strong>
          </div>
  
          <div className="history-row">
            <span>
              Index Revision
            </span>
  
            <strong>
              {entry.pointDelta == null
                ? "BASELINE"
                : formatSigned(
                    entry.pointDelta
                  )}
            </strong>
          </div>
        </section>
  
        {projection && (
          <section className="assessment-section projection-section">
            <div className="assessment-label">
              <span>
                04
              </span>
  
              <strong>
                PROJECTED OUTPUT
              </strong>
            </div>
  
            <div className="projection-readout">
              <div className="projection-primary">
                <span>
                  PROJECTED INDEX
                </span>
  
                <strong>
                  {projection.label}
                </strong>
              </div>
  
              <div className="projection-confidence">
                <span>
                  CONFIDENCE
                </span>
  
                <strong
                  className={`confidence-${projection.confidence.toLowerCase()}`}
                >
                  {projection.confidence}
                </strong>
              </div>
            </div>
  
            <div className="projection-divider" />
  
            <div className="projection-note-label">
              PROJECTION BASIS
            </div>
  
            <p>
              {projection.basis}
            </p>
  
            <div className="projection-warning">
              <span>
                !
              </span>
  
              <p>
                Projected output represents estimated capability
                based on currently available S.T.A.T.I.C. data.
                It does not alter the subject&apos;s active index.
              </p>
            </div>
          </section>
        )}
  
        <div className="subject-panel-footer">
          <span>
            DATA STATUS
          </span>
  
          <strong>
            VERIFIED // KVI
          </strong>
        </div>
  
        <PanelStyles />
      </aside>
    );
  }
  
  function Metric({
    label,
    value,
    tone = "",
  }) {
    return (
      <div
        className={`subject-metric ${tone}`}
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
  
  function ComparisonLine({
    direction,
    subject,
    difference,
  }) {
    return (
      <div className="comparison-line">
        <span>
          {direction}
        </span>
  
        <div className="comparison-content">
          <strong>
            #
            {String(
              subject.rank
            ).padStart(
              2,
              "0"
            )}{" "}
            {subject.name}
          </strong>
  
          <small>
            {difference.toLocaleString()} index points{" "}
            {direction === "ABOVE"
              ? "above selected subject"
              : "below selected subject"}
          </small>
        </div>
      </div>
    );
  }
  
  function PanelStyles() {
    return (
      <style>{`
        .subject-panel {
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
            linear-gradient(
              180deg,
              rgba(
                61,
                255,
                121,
                0.055
              ),
              transparent 38%
            ),
            rgba(
              0,
              0,
              0,
              0.28
            );
        }
  
        .subject-panel-empty {
          min-height: 280px;
  
          display: flex;
          flex-direction: column;
          justify-content: center;
  
          padding: 28px;
        }
  
        .subject-terminal-prompt {
          margin-bottom: 14px;
  
          color: #9ef2b5;
  
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }
  
        .subject-panel-empty p {
          max-width: 320px;
  
          margin: 0;
  
          color:
            rgba(
              210,
              250,
              220,
              0.68
            );
  
          font-size: 13px;
          line-height: 1.7;
        }
  
        .subject-panel-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
  
          gap: 18px;
  
          padding: 22px;
        }
  
        .subject-kicker {
          display: block;
  
          margin-bottom: 7px;
  
          color:
            rgba(
              183,
              247,
              200,
              0.66
            );
  
          font-size: 9px;
          font-weight: 900;
  
          letter-spacing: 0.16em;
        }
  
        .subject-panel h2 {
          margin:
            0
            0
            7px;
  
          color: #a9f4bd;
  
          font-size: 21px;
          font-weight: 850;
  
          letter-spacing: 0.055em;
  
          text-transform: uppercase;
        }
  
        .subject-id {
          color:
            rgba(
              183,
              247,
              200,
              0.48
            );
  
          font-size: 9px;
          font-weight: 800;
  
          letter-spacing: 0.09em;
        }
  
        .subject-rank-box {
          flex: 0 0 auto;
  
          min-width: 96px;
  
          padding: 12px;
  
          border:
            1px solid
            rgba(
              245,
              200,
              66,
              0.34
            );
  
          text-align: right;
        }
  
        .subject-rank-box span {
          display: block;
  
          margin-bottom: 4px;
  
          color:
            rgba(
              245,
              200,
              66,
              0.62
            );
  
          font-size: 8px;
          font-weight: 900;
        }
  
        .subject-rank-box strong {
          color: #ffd95a;
  
          font-size: 24px;
        }
  
        .subject-terminal-rule {
          height: 1px;
  
          background:
            rgba(
              111,
              255,
              160,
              0.14
            );
        }
  
        .subject-metrics {
          display: grid;
  
          grid-template-columns:
            repeat(
              2,
              1fr
            );
        }
  
        .subject-metric {
          padding: 16px 17px;
  
          border-right:
            1px solid
            rgba(
              111,
              255,
              160,
              0.1
            );
  
          border-bottom:
            1px solid
            rgba(
              111,
              255,
              160,
              0.1
            );
        }
  
        .subject-metric:nth-child(even) {
          border-right: none;
        }
  
        .subject-metric span {
          display: block;
  
          margin-bottom: 6px;
  
          color:
            rgba(
              183,
              247,
              200,
              0.54
            );
  
          font-size: 8px;
          font-weight: 900;
        }
  
        .subject-metric strong {
          color:
            rgba(
              244,
              252,
              246,
              0.92
            );
  
          font-size: 14px;
          font-weight: 850;
        }
  
        .subject-metric.positive strong {
          color: #9ff0b3;
        }
  
        .subject-metric.negative strong {
          color: #ec9898;
        }
  
        .assessment-section {
          padding: 21px 22px;
  
          border-bottom:
            1px solid
            rgba(
              111,
              255,
              160,
              0.1
            );
        }
  
        .assessment-label {
          display: flex;
          align-items: center;
  
          gap: 10px;
  
          margin-bottom: 13px;
        }
  
        .assessment-label span {
          color:
            rgba(
              245,
              200,
              66,
              0.66
            );
  
          font-size: 9px;
          font-weight: 900;
        }
  
        .assessment-label strong {
          color:
            rgba(
              190,
              249,
              207,
              0.78
            );
  
          font-size: 9px;
          font-weight: 900;
  
          letter-spacing: 0.11em;
        }
  
        .assessment-section p {
          margin: 0;
  
          color:
            rgba(
              235,
              246,
              238,
              0.8
            );
  
          font-size: 12px;
          line-height: 1.78;
        }
  
        .comparison-lines {
          display: flex;
          flex-direction: column;
  
          gap: 11px;
        }
  
        .comparison-line {
          display: grid;
  
          grid-template-columns:
            56px
            1fr;
  
          gap: 11px;
        }
  
        .comparison-line > span {
          color:
            rgba(
              183,
              247,
              200,
              0.52
            );
  
          font-size: 8px;
          font-weight: 900;
        }
  
        .comparison-content {
          display: flex;
          flex-direction: column;
  
          gap: 4px;
        }
  
        .comparison-content strong {
          color:
            rgba(
              244,
              252,
              246,
              0.9
            );
  
          font-size: 12px;
        }
  
        .comparison-content small {
          color:
            rgba(
              194,
              244,
              207,
              0.62
            );
  
          font-size: 10px;
          line-height: 1.55;
        }
  
        .top-position strong {
          color: #ffd95a;
  
          font-size: 11px;
        }
  
        .history-row {
          display: flex;
          justify-content: space-between;
  
          gap: 14px;
  
          padding:
            6px
            0;
  
          font-size: 11px;
        }
  
        .history-row span {
          color:
            rgba(
              183,
              247,
              200,
              0.54
            );
        }
  
        .history-row strong {
          color:
            rgba(
              244,
              252,
              246,
              0.86
            );
        }
  
        .projection-section {
          background:
            linear-gradient(
              135deg,
              rgba(
                245,
                200,
                66,
                0.04
              ),
              transparent 55%
            );
        }
  
        .projection-readout {
          display: grid;
  
          grid-template-columns:
            minmax(
              0,
              1fr
            )
            auto;
  
          gap: 15px;
        }
  
        .projection-primary,
        .projection-confidence {
          display: flex;
          flex-direction: column;
          justify-content: center;
  
          gap: 6px;
  
          padding: 13px 14px;
  
          border:
            1px solid
            rgba(
              245,
              200,
              66,
              0.2
            );
  
          background:
            rgba(
              0,
              0,
              0,
              0.2
            );
        }
  
        .projection-primary span,
        .projection-confidence span {
          color:
            rgba(
              245,
              200,
              66,
              0.56
            );
  
          font-size: 8px;
          font-weight: 900;
        }
  
        .projection-primary strong {
          color: #ffd95a;
  
          font-size: 23px;
          font-weight: 900;
        }
  
        .projection-confidence {
          min-width: 105px;
        }
  
        .projection-confidence strong {
          font-size: 12px;
          font-weight: 900;
        }
  
        .confidence-high {
          color: #9ff0b3;
        }
  
        .confidence-moderate {
          color: #ffd95a;
        }
  
        .confidence-low {
          color: #ec9898;
        }
  
        .projection-divider {
          height: 1px;
  
          margin:
            16px
            0
            13px;
  
          background:
            linear-gradient(
              90deg,
              rgba(
                245,
                200,
                66,
                0.3
              ),
              transparent
            );
        }
  
        .projection-note-label {
          margin-bottom: 8px;
  
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
  
        .projection-warning {
          display: grid;
  
          grid-template-columns:
            22px
            1fr;
  
          gap: 9px;
  
          margin-top: 14px;
  
          padding: 10px;
  
          border-left:
            1px solid
            rgba(
              245,
              200,
              66,
              0.32
            );
  
          background:
            rgba(
              245,
              200,
              66,
              0.03
            );
        }
  
        .projection-warning > span {
          width: 20px;
          height: 20px;
  
          display: grid;
          place-items: center;
  
          border:
            1px solid
            rgba(
              245,
              200,
              66,
              0.32
            );
  
          color: #ffd95a;
  
          font-size: 10px;
          font-weight: 900;
        }
  
        .projection-warning p {
          color:
            rgba(
              245,
              225,
              167,
              0.58
            );
  
          font-size: 9px;
          line-height: 1.6;
        }
  
        .subject-panel-footer {
          display: flex;
          justify-content: space-between;
  
          gap: 10px;
  
          padding: 13px 20px;
  
          background:
            rgba(
              111,
              255,
              160,
              0.024
            );
  
          font-size: 8px;
          font-weight: 900;
        }
  
        .subject-panel-footer span {
          color:
            rgba(
              183,
              247,
              200,
              0.46
            );
        }
  
        .subject-panel-footer strong {
          color:
            rgba(
              158,
              242,
              181,
              0.78
            );
        }
  
        @media (
          max-width: 500px
        ) {
          .subject-panel-header {
            padding: 17px;
          }
  
          .subject-panel h2 {
            font-size: 18px;
          }
  
          .subject-metrics {
            grid-template-columns:
              1fr;
          }
  
          .subject-metric {
            border-right: none;
          }
  
          .assessment-section {
            padding: 17px;
          }
  
          .projection-readout {
            grid-template-columns:
              1fr;
          }
  
          .projection-confidence {
            min-width: 0;
          }
        }
      `}</style>
    );
  }