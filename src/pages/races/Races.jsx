import React, { useState, useEffect } from 'react';
import { raceData } from './RaceData';
import './Overview.css';
import RaceTabs from './RaceTabs';
import RacePreview from './RacePreview';
import RaceInfo from './RaceInfo';
import AIWelcome from './AIWelcome';
import './Races.css';

const contentSections = ['Overview', 'Origin', 'Structure', 'Genome'];

export default function Races() {
  const [activeTab, setActiveTab] = useState(raceData[1].id);
  const [activeSection, setActiveSection] = useState('Overview');
  const [clock, setClock] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setClock(now.toISOString().split('T')[1]);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const activeRace = raceData.find(r => r.id === activeTab);

  return (
    <div className="min-h-screen bg-black text-[#00ff9f] font-mono p-4 md:p-6 lg:p-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 noise-overlay" />

      {/* AI Welcome Header */}
      <AIWelcome />

      {/* DNA Terminal clock (now in flow) */}
      <div className="w-full text-left text-xs text-[#00ff9f80] z-10 mb-2">
        DNA_TERMINAL :: {clock}
      </div>

      {/* Race Tabs */}
      <RaceTabs activeTab={activeTab} setActiveTab={setActiveTab} setActiveSection={setActiveSection} />

      {/* Main Responsive Grid */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-6 items-stretch justify-center">
        <div className="w-full lg:w-1/2 max-w-xl mx-auto lg:mx-0">
          <RacePreview activeRace={activeRace} />
        </div>
        <div className="w-full lg:w-1/2 max-w-xl mx-auto lg:mx-0">
          <RaceInfo
            activeRace={activeRace}
            activeTab={activeTab}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            contentSections={contentSections}
            clock={clock}
          />
        </div>
      </div>
    </div>
  );
}
