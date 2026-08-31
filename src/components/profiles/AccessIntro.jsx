import React, { useEffect, useState } from "react";
import AICoreCircle from "../ui/AICoreCircle";
import "./AccessIntro.css";

export default function AccessIntro({ shouldPlay = false, onComplete }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!shouldPlay) return;

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 900); 

    return () => clearTimeout(timer);
  }, [shouldPlay, onComplete]);

  if (!shouldPlay || !visible) return null;

  return (
    <div className="access-unlock-container">
      <AICoreCircle size={120} />
      <div className="unlock-text">
        &gt; ACCESSING SUBJECT FILE...
      </div>
    </div>
  );
}
