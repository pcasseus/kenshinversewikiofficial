import { useState } from "react";

export const useIntroPhase = () => {
  const [phase, setPhase] = useState("intro");
  const [replayKey, setReplayKey] = useState(0);

  return {
    phase,
    replayKey,
    markIntroComplete: () => setPhase("profile"),
    replayIntro: () => {
      setPhase("intro");
      setReplayKey((prev) => prev + 1);
    },
  };
};
