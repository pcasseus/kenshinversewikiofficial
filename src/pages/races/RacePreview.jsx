import React from 'react';

const threatLevels = {
  humans: 15,
  deviants: 85,
  unnaturals: 75,
  robots: 25,
  synthoids: 100,
};

export default function RacePreview({ activeRace }) {
  return (
    <div className="codex-frame flex flex-col items-center justify-between text-xs gap-4 relative">
      <div className="relative w-full flex justify-center">
        <img
          src={`/races/${activeRace.id}.png`}
          alt={`${activeRace.name} image`}
          className="w-full max-w-xs object-contain opacity-80 relative z-10"
        />
        <div className="absolute inset-0 border border-[#00ff9f33] pointer-events-none hologram-overlay" />
      </div>
      <div className="text-[#00ff9faa] leading-tight tracking-wider text-[10px] whitespace-pre-wrap text-left">
        {'ATGCGTACG  GTAGCTGAA  AGGGGTCC\nCTTAGGCTA  TTACGGTCA  CGTACTAGG\n\n> SUPPRESSED SEQUENCE\n> MUTATION INDEX: ANOMALOUS_β.41.X'}
      </div>
      <div className="w-full">
        <div className="uppercase text-[11px] text-[#00ffaa88] mb-1">Threat Level</div>
        <div className="w-full h-3 bg-[#00332e] border border-[#00ff9f66] relative overflow-hidden">
          <div
            className="h-full bg-[#00ff9f] threat-meter"
            style={{ width: `${threatLevels[activeRace.id] || 40}%` }}
          />
        </div>
      </div>
    </div>
  );
}
