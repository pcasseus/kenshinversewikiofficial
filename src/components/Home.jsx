import React, { useState } from "react";
import "../styles/House.css";

import AIBootup from "../components/home/AIBootup";
import MainInterface from "../components/home/MainInterface";

function Home() {
  const [stage, setStage] = useState(0);
  const [bootKey, setBootKey] = useState(Date.now());
  const [bootComplete, setBootComplete] = useState(() => {
    return sessionStorage.getItem("kenshinverseBootComplete") === "true";
  });

  const handleBootupComplete = () => {
    sessionStorage.setItem("kenshinverseBootComplete", "true");
    setBootComplete(true);
  };

  const handleRedoBootup = () => {
    sessionStorage.removeItem("kenshinverseBootComplete");
    setStage(0);
    setBootComplete(false);
    setBootKey(Date.now());
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-mono overflow-x-hidden flex flex-col">
      <div className="scanlines" />

      {!bootComplete ? (
        <div className="absolute inset-0 bg-black z-50 flex flex-col items-center justify-center">
          <AIBootup
            key={bootKey}
            stage={stage}
            onComplete={handleBootupComplete}
          />
        </div>
      ) : (
        <MainInterface onRedoBootup={handleRedoBootup} />
      )}
    </div>
  );
}

export default Home;
