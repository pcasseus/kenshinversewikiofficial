import React from 'react';

const Footer = ({ characterName }) => (
  <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-black via-zinc-900 to-black text-green-400 text-xs tracking-widest font-mono z-40 border-t border-green-700 shadow-inner shadow-green-700">
    <div className="flex flex-wrap justify-center items-center gap-4 px-4 py-2 sm:justify-between sm:px-6">
      
      {/* UNIT status and character context */}
      <div className="flex items-center gap-3">
        <span className="text-green-500">UNIT:</span>
        <span className="text-green-300 font-bold">KENSHIN_CORE [ACTIVE]</span>
        {characterName && (
          <>
            <span className="text-green-500">|</span>
            <span className="text-green-300">Analyzing {characterName.toUpperCase()}</span>
          </>
        )}
      </div>

      {/* System diagnostics */}
      <div className="hidden sm:flex items-center gap-4">
        <div className="flex items-center gap-1">
          <span className="text-green-500">DB:</span>
          <span className="text-green-300">Sync [✔]</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-green-500">Net:</span>
          <span className="text-green-300">StaticNet uplink secured</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-green-500">Time:</span>
          <span>{new Date().toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
