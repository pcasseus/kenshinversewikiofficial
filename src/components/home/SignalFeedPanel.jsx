import React, { useEffect, useState } from "react";

const getRandomLine = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=+@#$%^&*";
  let line = "";
  for (let i = 0; i < 142; i++) {
    line += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return line;
};

const SignalFeedPanel = () => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prev) => {
        const next = [getRandomLine(), ...prev];
        return next.slice(0, 10);
      });
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-40 sm:h-32 bg-blue-950/20 border border-cyan-400 rounded-md px-3 sm:px-5 py-4 text-xs text-cyan-300 hologram-panel font-mono tracking-widest shadow-[0_0_25px_rgba(0,255,255,0.1)] overflow-hidden animate-fadeIn">
      <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-cyan-400/80 mb-2 text-center sm:text-left">
        ∎ Signal Feed Log
      </div>
      <div className="h-full overflow-hidden flex flex-col space-y-1 pr-1">
        {lines.map((line, index) => (
          <div
            key={index}
            className="w-full text-[9px] sm:text-[10px] text-cyan-400/90 text-left font-mono break-words"
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignalFeedPanel;
