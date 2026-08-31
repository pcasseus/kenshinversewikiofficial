import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CharacterProfile from "./CharacterProfile";

const SecureCharacterProfile = () => {
  const location = useLocation();

  const safeState = location.state || {
    fromGallery: window.__kenshin_entrySource === "fromGallery",
    fromHome: window.__kenshin_entrySource === "fromHome",
  };

  window.__kenshin_entrySource = null;

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  return <CharacterProfile locationState={safeState} />;
};

export default SecureCharacterProfile;
