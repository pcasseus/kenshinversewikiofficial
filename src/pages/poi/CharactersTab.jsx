import React from 'react';
import { Link } from 'react-router-dom';

export default function CharactersTab({ selected }) {
  const list = selected.characters || [];
  if (list.length === 0) {
    return <p className="poi-muted">No characters associated.</p>;
  }

  return (
    <div className="poi-tab-panel">
      <div className="poi-char-grid">
        {list.map((char, i) => (
          <Link key={i} to={`/characters/${char.slug}`} className="poi-char-card tilt">
            <div className="poi-char-imgwrap">
              <img src={char.img} alt={char.name} />
            </div>
            <div className="poi-char-meta">
              <span className="poi-char-name">{char.name}</span>
              <span className="poi-char-link">Profile →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
