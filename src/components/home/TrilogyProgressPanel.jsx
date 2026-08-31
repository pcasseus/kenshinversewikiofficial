import React, { useState, useEffect } from "react";

const TrilogyProgressPanel = () => {
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const finalPercent = 100;

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current >= finalPercent) {
        clearInterval(interval);
      } else {
        current += 1;
        setAnimatedPercent(current);
      }
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm bg-black/70 border border-green-600 rounded-lg p-4 backdrop-blur-md animate-fadeIn shadow-lg flex flex-col space-y-3 relative overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-green-500/10 blur-2xl rounded-full animate-pulse-spin z-0 pointer-events-none" />

      <div className="text-[10px] text-lime-300 uppercase tracking-wider bg-black/60 px-2 py-1 rounded-sm border border-lime-400 w-fit z-10">
        System Feed: Archive Stable
      </div>

=      <h2 className="text-lg text-green-400 font-bold relative z-10">📗 Trilogy Progress</h2>
      <p className="text-xs text-gray-400 leading-relaxed relative z-10">
        All draft phases completed. The trilogy is now fully written and preserved.
      </p>

      <div className="flex items-center gap-4 relative z-10">
        <div className="relative w-20 h-20">
          <svg className="absolute top-0 left-0 w-full h-full z-10" viewBox="0 0 36 36">
            <path
              className="text-gray-700"
              stroke="currentColor"
              strokeWidth="3.5"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-emerald-400 animate-sweep"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeDasharray={`${animatedPercent}, 100`}
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-emerald-400 font-bold text-xl font-mono z-20">
            {animatedPercent}%
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="flex justify-between text-xs text-emerald-300 font-mono mb-1">
            <span>Draft Completion</span>
          </div>
          <div className="w-full h-3 bg-gray-800 rounded overflow-hidden">
            <div
              className="h-3 bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-100 ease-linear"
              style={{ width: `${animatedPercent}%` }}
            />
          </div>
        </div>
      </div>

      <div className="w-full border border-green-600 rounded-md p-3 bg-black/50 shadow-[0_0_12px_rgba(34,197,94,0.2)] text-sm text-white space-y-2 z-10">
        <div>
          <span className="text-emerald-400 font-bold">✔ Draft Complete</span><br />
          <span className="text-gray-300">October 2023</span><br />
          <span className="text-yellow-200">Book 1: Rise of Iztan</span>
        </div>
        <div>
          <span className="text-emerald-400 font-bold">✔ Draft Complete</span><br />
          <span className="text-gray-300">November 2024</span><br />
          <span className="text-yellow-200">Book 2: A New World Order</span>
        </div>
        <div>
          <span className="text-emerald-400 font-bold">✔ Draft Complete</span><br />
          <span className="text-gray-300">May 2025</span><br />
          <span className="text-yellow-200">Book 3: Invasion</span>
        </div>
      </div>

      <div className="mt-4 border-t border-green-900 pt-3 text-green-300 text-[11px] font-mono z-10">
        <div className="text-green-400 font-bold tracking-wider mb-1">
          STATUS ▸ TRILOGY ARCHIVED
        </div>
        <div className="text-green-200">
          All drafts finalized and preserved.
        </div>
        <div className="text-green-500 italic opacity-70 mt-1">
          Preservation node active.
        </div>
        <div className="text-green-900 italic text-[10px] mt-3 opacity-30">
          📦 Backed up to system archive — Oct 2023, Nov 2024, May 2025
        </div>
      </div>

      <div className="mt-auto pt-8 flex justify-center relative z-10">
        <img
          src="/logo.jpg"
          alt="System Logo"
          className="w-33 h-auto object-contain grayscale brightness-125 opacity-70 hover:opacity-100 transition duration-300 animate-pulse-slow drop-shadow-[0_0_6px_rgba(0,255,0,0.2)]"
        />
      </div>
    </div>
  );
};

export default TrilogyProgressPanel;
