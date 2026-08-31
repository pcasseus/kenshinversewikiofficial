import React from 'react';

export default function LoreTab({ selected }) {
  return (
    <div className="poi-tab-panel">
      {selected.lore?.length > 0 ? (
        <ul className="poi-lore-list">
          {selected.lore.map((entry, i) => (
            <li key={i}>{entry}</li>
          ))}
        </ul>
      ) : (
        <p className="poi-muted">No lore entries recorded yet.</p>
      )}
    </div>
  );
}
