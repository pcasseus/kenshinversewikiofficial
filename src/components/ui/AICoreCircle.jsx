import React from 'react';
import '../ui/AICoreCircle.css';

const AICoreCircle = ({ isSpeaking = false, size = 160 }) => {
  return (
    <div
      className="ai-circle"
      style={{ width: size, height: size }}
    >
      <div className="ring ring-outer" />
      <div className="ring ring-middle" />
      <div className="ring ring-grid" />
      <div className="ring ring-rotate" />
      <div className="ring ring-glow" />
      <div className="moving-glow" />
      <div className={`core ${isSpeaking ? 'speaking' : ''}`} />
    </div>
  );
};

export default AICoreCircle;
