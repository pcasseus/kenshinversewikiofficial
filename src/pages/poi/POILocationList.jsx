import React, { useState } from 'react';
import { locations } from './locations';
import './css/POILocationList.css';

export default function POILocationList({ selected, setSelected }) {
  const [showWarning, setShowWarning] = useState(true);
  const [confirmReveal, setConfirmReveal] = useState(false);

  const handleRevealClick = () => {
    const ok = window.confirm(
      'These locations contain major spoilers from all three books. Are you absolutely sure you want to reveal them?'
    );
    if (ok) setConfirmReveal(true);
  };

  if (showWarning && !confirmReveal) {
    return (
      <div className="poi-spoiler-block glass">
        <div className="poi-spoiler-warning">
          ⚠️ Warning: This list contains major location spoilers across all three books.
          Viewing these may spoil critical plot points and twists.
        </div>
        <button className="poi-spoiler-btn" onClick={() => setShowWarning(false)}>
          Continue
        </button>
      </div>
    );
  }

  if (!confirmReveal) {
    return (
      <div className="poi-spoiler-block glass">
        <div className="poi-spoiler-warning">
          Are you sure you want to reveal these locations? This will unlock spoiler-heavy content.
        </div>
        <button className="poi-spoiler-btn" onClick={handleRevealClick}>
          Yes, Reveal Locations
        </button>
      </div>
    );
  }

  return (
    <div className="poi-list-sidebar glass">
      <div className="poi-list-title">ACCESS POINTS</div>
      <ul className="poi-list-scroll">
        {locations.map((loc) => (
          <li
            key={loc.slug}
            onClick={() => setSelected(loc)}
            className={`poi-list-item ${selected.slug === loc.slug ? 'active' : ''}`}
          >
            <span className="poi-dot" />
            <span className="poi-list-name">{loc.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
