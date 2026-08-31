// src/pages/poi/components/POIDetailsPanel.jsx
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import DetailsTab from './DetailsTab';
import CharactersTab from './CharactersTab';
import LoreTab from './LoreTab';
import './css/POIDetailsPanel.css';
import './css/POITabs.css';

export default function POIDetailsPanel({ selected }) {
  const [tab, setTab] = useState('details');

  const renderTab = () => {
    switch (tab) {
      case 'details':
        return <DetailsTab selected={selected} />;
      case 'characters':
        return <CharactersTab selected={selected} />;
      case 'lore':
        return <LoreTab selected={selected} />;
      default:
        return null;
    }
  };

  return (
    <aside className="poi-sidebar glass">
      <div className="poi-sidebar-header">
        <h2 className="poi-sidebar-title">{selected.name}</h2>
      </div>

      <div className="poi-sidebar-tabs">
        {[
          { k: 'details', label: 'Details', icon: 'ℹ️' },
          { k: 'characters', label: 'Characters', icon: '👤' },
          { k: 'lore', label: 'Lore', icon: '📖' },
        ].map(({ k, label, icon }) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className={`poi-tab ${tab === k ? 'active' : ''}`}
            aria-pressed={tab === k}
            aria-label={label}
          >
            <span className="poi-tab-ico">{icon}</span>
            <span className="poi-tab-label">{label}</span>
          </button>
        ))}
      </div>

      <div className="poi-sidebar-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
          >
            {renderTab()}
          </motion.div>
        </AnimatePresence>
      </div>
    </aside>
  );
}
