export default function StaticTerminalFrame({
    children,
    phaseInfo,
  }) {
    return (
      <section className="static-terminal-frame">
        <div className="holo-tablet">
          <span className="tablet-corner corner-tl" />
          <span className="tablet-corner corner-tr" />
          <span className="tablet-corner corner-bl" />
          <span className="tablet-corner corner-br" />
  
          <span className="tablet-side-light side-left" />
          <span className="tablet-side-light side-right" />
  
          <div className="tablet-display">
            <div className="tablet-grid" />
            <div className="tablet-scanlines" />
  
            <header className="tablet-topbar">
              <div className="tablet-brand">
                <span className="tablet-brand-icon">
                  ◢
                </span>
  
                <div className="tablet-brand-copy">
                  <strong>
                    S.T.A.T.I.C.
                  </strong>
  
                  <span>
                    POWER ASSESSMENT TABLET
                  </span>
                </div>
              </div>
  
              <div className="tablet-connection">
                <span className="connection-dot" />
  
                <span>
                  SECURE NETWORK
                </span>
              </div>
            </header>
  
            <div className="tablet-commandbar">
              <div>
                <span>
                  NODE
                </span>
  
                <strong>
                  PA-07
                </strong>
              </div>
  
              <div>
                <span>
                  ARCHIVE
                </span>
  
                <strong>
                  KVI
                </strong>
              </div>
  
              <div>
                <span>
                  SNAPSHOT
                </span>
  
                <strong>
                  {phaseInfo.code}
                </strong>
              </div>
  
              <div>
                <span>
                  CLEARANCE
                </span>
  
                <strong>
                  INTERNAL
                </strong>
              </div>
            </div>
  
            <div className="tablet-content">
              {children}
            </div>
  
            <footer className="tablet-footer">
              <div>
                <span className="footer-pulse" />
  
                <span>
                  HOLOGRAPHIC INTERFACE ACTIVE
                </span>
              </div>
  
              <span>
                S.T.A.T.I.C. // PA-07
              </span>
            </footer>
          </div>
        </div>
  
        <style>{`
          .static-terminal-frame {
            width: 100%;
  
            position: relative;
  
            padding:
              8px
              0
              18px;
          }
  
          /* =========================
             TABLET BODY
             ========================= */
  
          .holo-tablet {
            position: relative;
  
            width: 100%;
  
            padding: 7px;
  
            border:
              1px solid
              rgba(
                122,
                255,
                164,
                0.24
              );
  
            border-radius: 12px;
  
            background:
              linear-gradient(
                145deg,
                rgba(
                  24,
                  32,
                  27,
                  0.96
                ),
                rgba(
                  5,
                  10,
                  7,
                  0.98
                )
              );
  
            box-shadow:
              0
              34px
              85px
              rgba(
                0,
                0,
                0,
                0.52
              ),
              0
              0
              30px
              rgba(
                70,
                255,
                130,
                0.035
              ),
              inset
              0
              0
              0
              1px
              rgba(
                255,
                255,
                255,
                0.035
              );
          }
  
          .holo-tablet::before {
            content: "";
  
            position: absolute;
  
            left: 8%;
            right: 8%;
            bottom: -12px;
  
            height: 15px;
  
            border-radius: 50%;
  
            background:
              rgba(
                76,
                255,
                132,
                0.08
              );
  
            filter:
              blur(
                14px
              );
  
            pointer-events:
              none;
          }
  
          /* =========================
             HOLOGRAPHIC CORNERS
             ========================= */
  
          .tablet-corner {
            position: absolute;
  
            z-index: 10;
  
            width: 24px;
            height: 24px;
  
            pointer-events:
              none;
          }
  
          .corner-tl {
            top: -3px;
            left: -3px;
  
            border-top:
              2px solid
              #7ff0a0;
  
            border-left:
              2px solid
              #7ff0a0;
          }
  
          .corner-tr {
            top: -3px;
            right: -3px;
  
            border-top:
              2px solid
              #7ff0a0;
  
            border-right:
              2px solid
              #7ff0a0;
          }
  
          .corner-bl {
            bottom: -3px;
            left: -3px;
  
            border-bottom:
              2px solid
              #7ff0a0;
  
            border-left:
              2px solid
              #7ff0a0;
          }
  
          .corner-br {
            right: -3px;
            bottom: -3px;
  
            border-right:
              2px solid
              #7ff0a0;
  
            border-bottom:
              2px solid
              #7ff0a0;
          }
  
          .tablet-side-light {
            position: absolute;
  
            z-index: 9;
  
            top: 22%;
            bottom: 22%;
  
            width: 2px;
  
            background:
              linear-gradient(
                transparent,
                #6cf28d,
                transparent
              );
  
            box-shadow:
              0
              0
              10px
              rgba(
                108,
                242,
                141,
                0.5
              );
  
            opacity: 0.52;
  
            pointer-events:
              none;
          }
  
          .side-left {
            left: -2px;
          }
  
          .side-right {
            right: -2px;
          }
  
          /* =========================
             DISPLAY
             ========================= */
  
          .tablet-display {
            position: relative;
  
            overflow: hidden;
  
            border:
              1px solid
              rgba(
                111,
                255,
                160,
                0.22
              );
  
            border-radius: 7px;
  
            background:
              radial-gradient(
                circle
                at
                50%
                -5%,
                rgba(
                  53,
                  180,
                  91,
                  0.075
                ),
                transparent
                38%
              ),
              linear-gradient(
                180deg,
                rgba(
                  8,
                  19,
                  12,
                  0.98
                ),
                rgba(
                  2,
                  8,
                  4,
                  1
                )
              );
  
            box-shadow:
              inset
              0
              0
              48px
              rgba(
                0,
                0,
                0,
                0.7
              );
          }
  
          .tablet-display::after {
            content: "";
  
            position: absolute;
  
            inset: 0;
  
            z-index: 8;
  
            pointer-events:
              none;
  
            background:
              radial-gradient(
                ellipse
                at
                center,
                transparent
                66%,
                rgba(
                  0,
                  0,
                  0,
                  0.16
                )
                100%
              );
          }
  
          /* =========================
             HOLOGRAPHIC TEXTURE
             ========================= */
  
          .tablet-grid {
            position: absolute;
  
            inset: 0;
  
            z-index: 1;
  
            pointer-events:
              none;
  
            opacity: 0.025;
  
            background-image:
              linear-gradient(
                rgba(
                  112,
                  255,
                  156,
                  0.45
                )
                1px,
                transparent
                1px
              ),
              linear-gradient(
                90deg,
                rgba(
                  112,
                  255,
                  156,
                  0.45
                )
                1px,
                transparent
                1px
              );
  
            background-size:
              34px
              34px;
          }
  
          .tablet-scanlines {
            position: absolute;
  
            inset: 0;
  
            z-index: 7;
  
            pointer-events:
              none;
  
            opacity: 0.045;
  
            background:
              repeating-linear-gradient(
                to bottom,
                rgba(
                  255,
                  255,
                  255,
                  0.06
                )
                0,
                rgba(
                  255,
                  255,
                  255,
                  0.06
                )
                1px,
                transparent
                1px,
                transparent
                5px
              );
          }
  
          /* =========================
             TOP BAR
             ========================= */
  
          .tablet-topbar {
            position: relative;
  
            z-index: 3;
  
            min-height: 54px;
  
            display: flex;
            align-items: center;
            justify-content: space-between;
  
            gap: 20px;
  
            padding:
              11px
              18px;
  
            border-bottom:
              1px solid
              rgba(
                111,
                255,
                160,
                0.15
              );
  
            background:
              linear-gradient(
                90deg,
                rgba(
                  83,
                  255,
                  138,
                  0.055
                ),
                transparent
                40%
              );
          }
  
          .tablet-brand {
            display: flex;
            align-items: center;
  
            gap: 12px;
          }
  
          .tablet-brand-icon {
            color: #ffd95a;
  
            font-size: 15px;
  
            text-shadow:
              0
              0
              8px
              rgba(
                245,
                200,
                66,
                0.18
              );
          }
  
          .tablet-brand-copy {
            display: flex;
            align-items: baseline;
  
            gap: 12px;
          }
  
          .tablet-brand-copy strong {
            color: #91efaa;
  
            font-size: 15px;
            font-weight: 900;
  
            letter-spacing: 0.17em;
  
            text-shadow:
              0
              0
              9px
              rgba(
                108,
                242,
                141,
                0.14
              );
          }
  
          .tablet-brand-copy span {
            color:
              rgba(
                187,
                249,
                204,
                0.58
              );
  
            font-size: 9px;
            font-weight: 800;
  
            letter-spacing: 0.13em;
          }
  
          .tablet-connection {
            display: flex;
            align-items: center;
  
            gap: 8px;
  
            color:
              rgba(
                192,
                250,
                209,
                0.72
              );
  
            font-size: 9px;
            font-weight: 900;
  
            letter-spacing: 0.1em;
          }
  
          .connection-dot {
            width: 7px;
            height: 7px;
  
            border-radius: 50%;
  
            background: #71f094;
  
            box-shadow:
              0
              0
              10px
              rgba(
                113,
                240,
                148,
                0.85
              );
  
            animation:
              tabletPulse
              2.2s
              ease-in-out
              infinite;
          }
  
          @keyframes tabletPulse {
            0%,
            100% {
              opacity: 0.72;
            }
  
            50% {
              opacity: 1;
            }
          }
  
          /* =========================
             COMMAND BAR
             ========================= */
  
          .tablet-commandbar {
            position: relative;
  
            z-index: 3;
  
            display: grid;
  
            grid-template-columns:
              repeat(
                4,
                1fr
              );
  
            border-bottom:
              1px solid
              rgba(
                111,
                255,
                160,
                0.11
              );
  
            background:
              rgba(
                111,
                255,
                160,
                0.012
              );
          }
  
          .tablet-commandbar > div {
            min-width: 0;
  
            padding:
              10px
              14px;
  
            border-right:
              1px solid
              rgba(
                111,
                255,
                160,
                0.09
              );
          }
  
          .tablet-commandbar
            > div:last-child {
            border-right: none;
          }
  
          .tablet-commandbar span {
            display: block;
  
            margin-bottom: 3px;
  
            color:
              rgba(
                181,
                245,
                199,
                0.44
              );
  
            font-size: 8px;
            font-weight: 900;
  
            letter-spacing: 0.1em;
          }
  
          .tablet-commandbar strong {
            overflow: hidden;
  
            display: block;
  
            color:
              rgba(
                222,
                255,
                231,
                0.78
              );
  
            font-size: 10px;
            font-weight: 850;
  
            letter-spacing: 0.05em;
  
            text-overflow:
              ellipsis;
  
            white-space: nowrap;
          }
  
          /* =========================
             CONTENT
             ========================= */
  
          .tablet-content {
            position: relative;
  
            z-index: 3;
  
            padding:
              28px
              30px
              30px;
          }
  
          /* =========================
             FOOTER
             ========================= */
  
          .tablet-footer {
            position: relative;
  
            z-index: 3;
  
            min-height: 38px;
  
            display: flex;
            align-items: center;
            justify-content: space-between;
  
            gap: 18px;
  
            padding:
              9px
              17px;
  
            border-top:
              1px solid
              rgba(
                111,
                255,
                160,
                0.11
              );
  
            color:
              rgba(
                187,
                247,
                203,
                0.42
              );
  
            font-size: 8px;
            font-weight: 850;
  
            letter-spacing: 0.1em;
          }
  
          .tablet-footer > div {
            display: flex;
            align-items: center;
  
            gap: 7px;
          }
  
          .footer-pulse {
            width: 5px;
            height: 5px;
  
            border-radius: 50%;
  
            background: #71f094;
  
            box-shadow:
              0
              0
              7px
              rgba(
                113,
                240,
                148,
                0.7
              );
          }
  
          /* =========================
             RESPONSIVE
             ========================= */
  
          @media (
            max-width: 800px
          ) {
            .holo-tablet {
              padding: 5px;
            }
  
            .tablet-content {
              padding:
                20px
                18px
                22px;
            }
  
            .tablet-commandbar {
              grid-template-columns:
                repeat(
                  2,
                  1fr
                );
            }
  
            .tablet-commandbar
              > div:nth-child(-n + 2) {
              border-bottom:
                1px solid
                rgba(
                  111,
                  255,
                  160,
                  0.08
                );
            }
          }
  
          @media (
            max-width: 520px
          ) {
            .tablet-brand-copy {
              display: block;
            }
  
            .tablet-brand-copy span {
              display: none;
            }
  
            .tablet-connection span:last-child {
              display: none;
            }
  
            .tablet-content {
              padding:
                16px
                12px
                18px;
            }
  
            .tablet-footer {
              justify-content: center;
            }
  
            .tablet-footer > span {
              display: none;
            }
          }
        `}</style>
      </section>
    );
  }