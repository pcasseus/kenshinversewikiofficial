import { useEffect, useRef, useState } from "react";

const OVERRIDE_CODES = [
  'OVERRIDE CODE: SPECTER-DELTA ENGAGED',
  'OVERRIDE CODE: OMEGA-4 PROTOCOL ACCEPTED',
  'OVERRIDE CODE: FENRIR KEY VERIFIED',
  'OVERRIDE CODE: ZETA-BLACK DIRECTIVE AUTHORIZED',
  'OVERRIDE CODE: HELIX COMMAND INITIATED',
  'OVERRIDE CODE: SIGMA-FIVE CLEARANCE GRANTED',
  'OVERRIDE CODE: TEMPEST VAULT OVERRIDE CONFIRMED',
  'OVERRIDE CODE: ECHO-SIX BREACH ENGAGED',
  'OVERRIDE CODE: VOIDSTATE PRIME ENABLED',
  'OVERRIDE CODE: AETHER CIRCUIT OPENED',

  // S.T.A.T.I.C.-related
  'OVERRIDE CODE: STATIC-VORTEX KEY ACCEPTED',
  'OVERRIDE CODE: STATIC-SHARD UPLINK GRANTED',
  'OVERRIDE CODE: PROJECT STATICFALL ACCESS APPROVED',
  'OVERRIDE CODE: STX-ALPHA VAULT UNLOCKED',
  'OVERRIDE CODE: STATIC-RELIC CLEARANCE ISSUED',
]

export function useAccessIntro(name, onComplete, forceExit) {
  const [shouldRender, setShouldRender] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [overrideText] = useState(() => {
    return OVERRIDE_CODES[Math.floor(Math.random() * OVERRIDE_CODES.length)];
  });

  const hasStarted = useRef(false);
  const timeoutRef = useRef(null);

  const LINE_DELAYS = [1600, 3200, 3300];

  const unlockScroll = () => {
    document.body.style.overflow = "auto";
    const el = document.querySelector(".access-intro");
    if (el) el.classList.add("scroll-unlocked");
  };

  const exitEarly = () => {
    clearTimeout(timeoutRef.current);
    setExiting(true);
    unlockScroll();
    setTimeout(() => onComplete?.(), 1000);
  };

  const runSequence = async () => {
    for (let i = 0; i <= 2; i++) {
      await new Promise((res) => setTimeout(res, LINE_DELAYS[i]));
      setCurrentLine(i);
    }

    setTimeout(() => {
      setExiting(true);
      unlockScroll();
      setTimeout(() => {
        onComplete?.();
      }, 1000);
    }, 2500);
  };

  useEffect(() => {
    if (forceExit) exitEarly();
  }, [forceExit]);

  useEffect(() => {
    if (!shouldRender || hasStarted.current) return;
    hasStarted.current = true;
    document.body.style.overflow = "hidden";
    runSequence();
  }, [shouldRender]);

  return {
    shouldRender,
    exiting,
    currentLine,
    exitEarly,
    overrideText,
  };
}
