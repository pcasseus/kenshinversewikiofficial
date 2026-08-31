import React, { useState } from "react";
import MainInterface from "./MainInterface";
import MobileInterface from "./MobileInterface";
import AIBootup from "./AIBootup";

const ResponsiveInterface = () => {
  const [showBootup, setShowBootup] = useState(false);

  const handleRedoBootup = () => {
    sessionStorage.removeItem("bootupAudioPlayed");
    setShowBootup(true);
  };

  const handleBootComplete = () => {
    setShowBootup(false);
  };

  if (showBootup) {
    return <AIBootup onComplete={handleBootComplete} />;
  }

  const commonProps = {
    onRedoBootup: handleRedoBootup,
  };

  return (
    <>
      <div className="lg:hidden">
        <MobileInterface {...commonProps} />
      </div>

      <div className="hidden lg:block">
        <MainInterface {...commonProps} />
      </div>
    </>
  );
};

export default ResponsiveInterface;