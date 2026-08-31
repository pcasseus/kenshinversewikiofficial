import { useEffect } from "react";

export const usePreloadVoices = () => {
  useEffect(() => {
    const preload = () => {
      window.speechSynthesis.getVoices();
    };

    preload();
    window.speechSynthesis.addEventListener("voiceschanged", preload);

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", preload);
    };
  }, []);
};
