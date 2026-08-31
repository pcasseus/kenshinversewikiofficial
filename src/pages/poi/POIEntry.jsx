import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import { useNavigate } from 'react-router-dom';
import './css/POIEntry.css';

export default function POIEntry() {
  const globeEl = useRef();
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!globeEl.current) return;
    const controls = globeEl.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
  }, []);

  return (
    <div className="poi-entry-container">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundColor="black"
        width={windowSize.width}
        height={windowSize.height}
        className="poi-globe"
      />

      {/* Scanlines + vignette */}
      <div className="poi-entry-scanlines" />
      <div className="poi-entry-vignette" />

      <div className="poi-entry-overlay glass">
        <h1 className="poi-entry-title typewriter">ACCESS TERMINAL: KENSHINVERSE</h1>
        <p className="poi-entry-sub glow">Spinning up global interface… establishing secure channel</p>

        <button
          className="poi-entry-button holo pulse"
          onClick={() => navigate('/lore/pois/map')}
        >
          ENTER INTERFACE →
        </button>

        <div className="poi-entry-hints">
          <span className="dot online" /> STATUS: ONLINE
          <span className="sep" />
          <span className="kbd">ESC</span> to exit
        </div>
      </div>
    </div>
  );
}
