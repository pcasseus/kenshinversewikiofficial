import React, { useEffect, useState } from "react";

const Footer = ({ characterName }) => {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <footer className="w-full border-t border-green-700 bg-gradient-to-r from-black via-zinc-900 to-black font-mono text-[10px] tracking-widest text-green-400 shadow-inner shadow-green-700 sm:text-xs">
      <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-2 px-3 py-3 sm:px-5 lg:flex-row lg:items-center lg:justify-between lg:px-6">
        <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-green-500">UNIT:</span>
          <span className="font-bold text-green-300">
            KENSHIN_CORE [ACTIVE]
          </span>

          {characterName && (
            <>
              <span className="text-green-500">|</span>
              <span className="break-words text-green-300">
                Analyzing {characterName.toUpperCase()}
              </span>
            </>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-green-300">
          <div className="flex items-center gap-1">
            <span className="text-green-500">DB:</span>
            <span>Sync [✓]</span>
          </div>

          <div className="hidden items-center gap-1 sm:flex">
            <span className="text-green-500">Net:</span>
            <span>StaticNet uplink secured</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-green-500">Time:</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;