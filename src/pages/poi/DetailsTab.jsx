import React from 'react';

export default function DetailsTab({ selected }) {
  return (
    <div className="poi-tab-panel">
      <p className="poi-desc">{selected.description}</p>

      <div className="poi-meta">
        <div className="poi-meta-row">
          <span className="poi-meta-k">Latitude</span>
          <span className="poi-meta-v">{selected.lat}</span>
        </div>
        <div className="poi-meta-row">
          <span className="poi-meta-k">Longitude</span>
          <span className="poi-meta-v">{selected.lng}</span>
        </div>
      </div>
    </div>
  );
}
