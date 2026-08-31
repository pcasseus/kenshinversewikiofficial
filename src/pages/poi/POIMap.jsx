import React, { useRef, useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { locations } from './locations';
import POILocationList from './POILocationList';
import POIDetailsPanel from './POIDetailsPanel';
import './css/POIMapLayout.css';
import './css/POIIcons.css';

function FocusMap({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 8, { animate: true });
  }, [lat, lng, map]);
  return null;
}

export default function POIMap() {
  const mapRef = useRef();
  const [selected, setSelected] = useState(locations[0]);
  const navigate = useNavigate();

  // memoized pin creator so active marker can glow/pulse
  const buildIcon = useMemo(
    () => (isActive) =>
      new L.DivIcon({
        html: `<div class='poi-pin-icon ${isActive ? 'active pulse' : ''}'></div>`,
        className: '',
        iconSize: [24, 24],
        iconAnchor: [12, 24],
      }),
    []
  );

  const resetView = () => {
    if (mapRef.current) mapRef.current.setView([37.8, -96], 4);
  };
  const zoomIn = () => mapRef.current?.zoomIn();
  const zoomOut = () => mapRef.current?.zoomOut();
  const focusOnSelected = () => {
    if (mapRef.current && selected) mapRef.current.setView([selected.lat, selected.lng], 10);
  };
  const moveMap = (dx, dy) => {
    if (!mapRef.current) return;
    const map = mapRef.current;
    const { lat, lng } = map.getCenter();
    map.setView([lat + dy, lng + dx]);
  };

  return (
    <div className="poi-map-fixed-wrapper">
      {/* HEADER */}
      <div className="poi-map-header glass">
        <div className="poi-map-header-inner">
          <button className="poi-map-exit" onClick={() => navigate('/lore/pois')}>
            ← Exit to Access Terminal
          </button>

          <div className="poi-map-center">
            <div className="poi-map-title">KENSHINVERSE POIs</div>
            <div className="poi-map-status">
              STATUS: <span className="online">ONLINE</span>
            </div>
          </div>

          <div className="poi-map-clock">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
        <div className="poi-scanline" />
      </div>

      {/* MAP + SIDEBARS */}
      <div className="poi-map-container">
        <POILocationList selected={selected} setSelected={setSelected} />

        <div className="poi-map-pane">
          <div className="poi-map-wrapper glass">
            <MapContainer
              center={[selected.lat, selected.lng]}
              zoom={6}
              scrollWheelZoom
              zoomControl
              whenCreated={(map) => (mapRef.current = map)}
              className="poi-leaflet"
            >
              {/* Dark sci-fi basemap (Carto Dark Matter) */}
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution="&copy; OpenStreetMap contributors &copy; CARTO"
              />

              {locations.map((loc) => {
                const isActive = selected.slug === loc.slug;
                return (
                  <Marker
                    key={loc.slug}
                    position={[loc.lat, loc.lng]}
                    icon={buildIcon(isActive)}
                    eventHandlers={{ click: () => setSelected(loc) }}
                  >
                    <Popup>
                      <strong>{loc.name}</strong>
                      <br />
                      {loc.description}
                    </Popup>
                  </Marker>
                );
              })}

              <FocusMap lat={selected.lat} lng={selected.lng} />
            </MapContainer>
          </div>

          {/* MAP FOOTER CONTROLS */}
          <div className="poi-map-footer-controls glass">
            <div className="poi-map-btn-group">
              <button onClick={resetView}>Reset</button>
              <button onClick={zoomIn}>Zoom In</button>
              <button onClick={zoomOut}>Zoom Out</button>
              <button onClick={focusOnSelected}>Recenter</button>
            </div>
            <div className="poi-map-btn-move">
              <button onClick={() => moveMap(0, 1)}>↑</button>
              <div>
                <button onClick={() => moveMap(-1, 0)}>←</button>
                <button onClick={() => moveMap(1, 0)}>→</button>
              </div>
              <button onClick={() => moveMap(0, -1)}>↓</button>
            </div>
          </div>
        </div>

        <POIDetailsPanel selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
}
