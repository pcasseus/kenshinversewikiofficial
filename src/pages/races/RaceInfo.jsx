import React from 'react';

export default function RaceInfo({ activeRace, activeTab, activeSection, setActiveSection, contentSections, clock }) {
  const sectionContent = {
    Overview: activeRace.blocks,
    Origin: activeRace.origin || ['No origin data available.'],
    Structure: activeRace.structure || ['No structure data available.'],
    Events: activeRace.events || ['No historical events recorded.'],
    Genome: activeRace.genome || ['Genome visualization not loaded.'],
  };

  return (
    <div className="codex-frame flex flex-col relative px-2 sm:px-4">

      {/* Mobile tab buttons */}
      <div className="flex lg:hidden flex-wrap justify-center gap-2 mb-4">
        {contentSections.map(section => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`codex-tab text-xs px-3 py-1 ${activeSection === section ? 'active' : ''}`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Desktop side tab buttons */}
      <div className="hidden lg:flex absolute right-[-160px] top-0 flex-col gap-3 text-xs">
        {contentSections.map(section => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`codex-tab w-32 text-left ${activeSection === section ? 'active' : ''}`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Header */}
      <div className="codex-header mb-2">
        {activeRace.name} / {activeSection}
      </div>

      {/* Scrollable text content */}
      <div className="scroll-section overflow-y-auto custom-scroll pr-2 mb-4 max-h-[60vh] md:max-h-[500px] text-sm leading-relaxed space-y-3">
        {(sectionContent[activeSection] || []).map((p, i) => (
          <p key={i} className="text-[#00ff9f]">{p}</p>
        ))}
      </div>

      {/* Footer info */}
      <div className="border-t border-[#00ff9f33] pt-3 text-xs text-[#00ff9f99] space-y-2 mt-auto">
        <div className="text-[#00ffaa]"> access override — decrypt_{activeSection.toLowerCase()}.log</div>
        <div className="text-[#00ffaa88]"> file_path: /labs/genome/sec_race-{activeTab}/{activeSection.toLowerCase()}</div>
        <div className="text-[#00ffaa55]"> last_access: 2025-07-01T01:{clock}</div>
      </div>
    </div>
  );
}
