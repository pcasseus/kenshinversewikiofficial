import {
    SPOILER_WARNING,
  } from "./spoilerWarningData";
  
  export default function SpoilerGate({
    onContinue,
    onBack,
  }) {
    const {
      system,
      command,
      warningCode,
      title,
      primaryMessage,
      secondaryMessage,
      authorizeLabel,
      terminateLabel,
      waitingMessage,
      footerLeft,
      footerRight,
    } = SPOILER_WARNING;
  
    return (
      <main className="pi-spoiler-page">
        <div className="pi-spoiler-hardware">
          <section className="pi-spoiler-screen">
            <div className="pi-spoiler-scanlines" />
  
            <header className="pi-spoiler-topbar">
              <div className="pi-spoiler-brand">
                <strong>
                  {system.organization}
                </strong>
  
                <span>
                  {system.network}
                </span>
              </div>
  
              <div className="pi-spoiler-connection">
                <span className="pi-spoiler-dot" />
  
                <span>
                  {system.connection}
                </span>
              </div>
            </header>
  
            <div className="pi-spoiler-systembar">
              <span>
                NODE://
                {system.node}
              </span>
  
              <span>
                ARCHIVE://
                {system.archive}
              </span>
  
              <span>
                CLEARANCE://
                {system.clearance}
              </span>
            </div>
  
            <div className="pi-spoiler-content">
              <div className="pi-spoiler-command">
                &gt; {command}
              </div>
  
              <div className="pi-spoiler-warning-box">
                <div className="pi-spoiler-warning-symbol">
                  !
                </div>
  
                <span>
                  {warningCode}
                </span>
              </div>
  
              <h1>
                {title}
              </h1>
  
              <p className="pi-spoiler-intro">
                {primaryMessage}
              </p>
  
              <p className="pi-spoiler-secondary">
                {secondaryMessage}
              </p>
  
              <div className="pi-spoiler-actions">
                <button
                  type="button"
                  className="pi-spoiler-authorize"
                  onClick={
                    onContinue
                  }
                >
                  {authorizeLabel}
                </button>
  
                <button
                  type="button"
                  className="pi-spoiler-terminate"
                  onClick={
                    onBack
                  }
                >
                  {terminateLabel}
                </button>
              </div>
  
              <div className="pi-spoiler-awaiting">
                <span>
                  &gt;
                </span>
  
                <span>
                  {waitingMessage}
                </span>
  
                <span className="pi-spoiler-cursor">
                  _
                </span>
              </div>
            </div>
  
            <footer className="pi-spoiler-footer">
              <span>
                {footerLeft}
              </span>
  
              <span>
                {footerRight}
              </span>
            </footer>
          </section>
        </div>
  
        <style>{`
          .pi-spoiler-page {
            min-height:
              calc(
                100vh - 90px
              );
  
            display: flex;
            align-items: center;
            justify-content: center;
  
            padding:
              42px
              18px
              78px;
  
            color: #e8f4eb;
          }
  
          .pi-spoiler-hardware {
            width:
              min(
                94vw,
                760px
              );
  
            padding: 10px;
  
            border:
              1px solid
              rgba(
                120,
                255,
                162,
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
              35px
              90px
              rgba(
                0,
                0,
                0,
                0.62
              ),
              0
              0
              28px
              rgba(
                70,
                255,
                130,
                0.04
              );
          }
  
          .pi-spoiler-screen {
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
                0%,
                rgba(
                  65,
                  255,
                  122,
                  0.065
                ),
                transparent
                46%
              ),
              #020503;
          }
  
          .pi-spoiler-screen::after {
            content: "";
  
            position: absolute;
            inset: 0;
  
            pointer-events: none;
  
            background:
              radial-gradient(
                ellipse
                at
                center,
                transparent 64%,
                rgba(
                  0,
                  0,
                  0,
                  0.24
                )
                100%
              );
          }
  
          .pi-spoiler-scanlines {
            position: absolute;
            inset: 0;
  
            z-index: 5;
  
            pointer-events: none;
  
            opacity: 0.06;
  
            background:
              repeating-linear-gradient(
                to bottom,
                rgba(
                  255,
                  255,
                  255,
                  0.08
                )
                0,
                rgba(
                  255,
                  255,
                  255,
                  0.08
                )
                1px,
                transparent
                1px,
                transparent
                5px
              );
          }
  
          .pi-spoiler-topbar {
            position: relative;
  
            z-index: 2;
  
            min-height: 50px;
  
            display: flex;
            align-items: center;
            justify-content: space-between;
  
            gap: 20px;
  
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
                0.02
              );
          }
  
          .pi-spoiler-brand {
            display: flex;
            align-items: center;
  
            gap: 11px;
          }
  
          .pi-spoiler-brand strong {
            color: #95efad;
  
            font-size: 13px;
            font-weight: 900;
  
            letter-spacing:
              0.16em;
          }
  
          .pi-spoiler-brand span {
            color:
              rgba(
                183,
                247,
                200,
                0.54
              );
  
            font-size: 9px;
            font-weight: 900;
  
            letter-spacing:
              0.13em;
          }
  
          .pi-spoiler-connection {
            display: flex;
            align-items: center;
  
            gap: 7px;
  
            color:
              rgba(
                158,
                242,
                181,
                0.76
              );
  
            font-size: 9px;
            font-weight: 900;
  
            letter-spacing:
              0.1em;
          }
  
          .pi-spoiler-dot {
            width: 7px;
            height: 7px;
  
            border-radius: 50%;
  
            background:
              #84eba0;
  
            box-shadow:
              0
              0
              9px
              rgba(
                132,
                235,
                160,
                0.85
              );
          }
  
          .pi-spoiler-systembar {
            position: relative;
  
            z-index: 2;
  
            display: grid;
  
            grid-template-columns:
              repeat(
                3,
                1fr
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
  
          .pi-spoiler-systembar span {
            padding:
              9px
              13px;
  
            border-right:
              1px solid
              rgba(
                111,
                255,
                160,
                0.08
              );
  
            color:
              rgba(
                183,
                247,
                200,
                0.46
              );
  
            font-size: 8px;
            font-weight: 900;
  
            letter-spacing:
              0.1em;
          }
  
          .pi-spoiler-systembar
            span:last-child {
            border-right: none;
          }
  
          .pi-spoiler-content {
            position: relative;
  
            z-index: 2;
  
            padding:
              34px
              42px
              38px;
  
            text-align: center;
          }
  
          .pi-spoiler-command {
            margin-bottom: 30px;
  
            text-align: left;
  
            color:
              rgba(
                174,
                246,
                194,
                0.62
              );
  
            font-size: 10px;
            font-weight: 900;
  
            letter-spacing:
              0.09em;
          }
  
          .pi-spoiler-warning-box {
            display: flex;
            flex-direction: column;
            align-items: center;
  
            gap: 10px;
  
            margin-bottom: 12px;
          }
  
          .pi-spoiler-warning-symbol {
            width: 56px;
            height: 56px;
  
            display: grid;
            place-items: center;
  
            border:
              1px solid
              rgba(
                245,
                200,
                66,
                0.52
              );
  
            background:
              rgba(
                245,
                200,
                66,
                0.025
              );
  
            color: #ffd95a;
  
            font-size: 26px;
            font-weight: 900;
          }
  
          .pi-spoiler-warning-box span {
            color:
              rgba(
                245,
                200,
                66,
                0.72
              );
  
            font-size: 9px;
            font-weight: 900;
  
            letter-spacing:
              0.15em;
          }
  
          .pi-spoiler-content h1 {
            margin:
              9px
              0
              19px;
  
            color: #a9f4bd;
  
            font-size:
              clamp(
                26px,
                5vw,
                36px
              );
  
            font-weight: 850;
  
            letter-spacing:
              0.09em;
  
            text-transform:
              uppercase;
          }
  
          .pi-spoiler-intro,
          .pi-spoiler-secondary {
            max-width: 580px;
  
            margin:
              0
              auto
              13px;
  
            color:
              rgba(
                226,
                244,
                231,
                0.78
              );
  
            font-size: 13px;
            line-height: 1.75;
          }
  
          .pi-spoiler-secondary {
            color:
              rgba(
                195,
                239,
                207,
                0.62
              );
          }
  
          .pi-spoiler-actions {
            display: flex;
            justify-content: center;
  
            gap: 10px;
  
            margin-top: 28px;
          }
  
          .pi-spoiler-actions button {
            min-width: 175px;
  
            padding:
              11px
              16px;
  
            border-radius: 3px;
  
            font-size: 10px;
            font-weight: 900;
  
            letter-spacing:
              0.1em;
  
            text-transform:
              uppercase;
  
            cursor: pointer;
          }
  
          .pi-spoiler-authorize {
            border:
              1px solid
              #9cf2b3;
  
            background:
              #9cf2b3;
  
            color: #021006;
          }
  
          .pi-spoiler-terminate {
            border:
              1px solid
              rgba(
                156,
                242,
                179,
                0.34
              );
  
            background:
              transparent;
  
            color: #9cf2b3;
          }
  
          .pi-spoiler-awaiting {
            display: flex;
            align-items: center;
  
            gap: 5px;
  
            margin-top: 30px;
  
            padding-top: 14px;
  
            border-top:
              1px solid
              rgba(
                111,
                255,
                160,
                0.09
              );
  
            color:
              rgba(
                174,
                246,
                194,
                0.48
              );
  
            font-size: 9px;
            font-weight: 900;
  
            letter-spacing:
              0.09em;
  
            text-align: left;
          }
  
          .pi-spoiler-cursor {
            color: #96efae;
  
            animation:
              piBlink
              1s
              steps(1)
              infinite;
          }
  
          @keyframes piBlink {
            0%,
            45% {
              opacity: 1;
            }
  
            46%,
            100% {
              opacity: 0;
            }
          }
  
          .pi-spoiler-footer {
            position: relative;
  
            z-index: 2;
  
            display: flex;
            justify-content: space-between;
  
            gap: 14px;
  
            padding:
              10px
              16px;
  
            border-top:
              1px solid
              rgba(
                111,
                255,
                160,
                0.09
              );
  
            color:
              rgba(
                183,
                247,
                200,
                0.38
              );
  
            font-size: 8px;
            font-weight: 900;
  
            letter-spacing:
              0.1em;
          }
  
          @media (
            max-width: 600px
          ) {
            .pi-spoiler-page {
              padding:
                24px
                8px
                60px;
            }
  
            .pi-spoiler-hardware {
              width: 100%;
            }
  
            .pi-spoiler-content {
              padding:
                27px
                18px
                30px;
            }
  
            .pi-spoiler-systembar {
              grid-template-columns:
                1fr;
            }
  
            .pi-spoiler-systembar span {
              border-right: none;
  
              border-bottom:
                1px solid
                rgba(
                  111,
                  255,
                  160,
                  0.07
                );
            }
  
            .pi-spoiler-actions {
              flex-direction: column;
            }
  
            .pi-spoiler-actions button {
              width: 100%;
            }
          }
  
          @media (
            max-width: 430px
          ) {
            .pi-spoiler-brand span {
              display: none;
            }
  
            .pi-spoiler-footer {
              justify-content: center;
            }
  
            .pi-spoiler-footer
              span:last-child {
              display: none;
            }
          }
        `}</style>
      </main>
    );
  }