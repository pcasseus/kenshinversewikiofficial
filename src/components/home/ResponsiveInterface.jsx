import React, { useState, useEffect } from "react";
import MainInterface from "./MainInterface";
import MobileInterface from "./MobileInterface";
import MobileLandscapeInterface from "./MobileLandscapeInterface";
import AIBootup from "./AIBootup";

const ResponsiveInterface = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [showBootup, setShowBootup] = useState(false);

  useEffect(() => {
    const updateDeviceInfo = () => {
      const isPhone = window.innerWidth < 768;
      const landscape = isPhone && window.innerWidth > window.innerHeight;
      setIsMobile(isPhone);
      setIsLandscape(landscape);
    };

    updateDeviceInfo();
    window.addEventListener("resize", updateDeviceInfo);
    window.addEventListener("orientationchange", updateDeviceInfo);

    return () => {
      window.removeEventListener("resize", updateDeviceInfo);
      window.removeEventListener("orientationchange", updateDeviceInfo);
    };
  }, []);

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

  const commonProps = { onRedoBootup: handleRedoBootup };

  if (isMobile) {
    return isLandscape ? (
      <MobileLandscapeInterface {...commonProps} />
    ) : (
      <MobileInterface {...commonProps} />
    );
  }

  return <MainInterface {...commonProps} />;
};

export default ResponsiveInterface;
