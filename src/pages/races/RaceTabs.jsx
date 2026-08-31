import React from 'react';
import { raceData } from './RaceData';

export default function RaceTabs({ activeTab, setActiveTab, setActiveSection }) {
  return (
    <div className="relative z-10 flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 px-2 sm:px-4">
      {raceData.filter(r => r.id !== 'overview').map(race => (
        <button
          key={race.id}
          onClick={() => {
            setActiveTab(race.id);
            setActiveSection('Overview');
          }}
          className={`codex-tab codex-tab-custom flex items-center gap-2 ${activeTab === race.id ? 'active' : ''}`}
        >
          <img
            src={`/ui/icons/${race.id}-icon.png`}
            alt={`${race.name} Icon`}
            className="w-5 h-5 object-contain"
            onError={(e) => (e.target.style.display = 'none')}
          />
          {race.name.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
