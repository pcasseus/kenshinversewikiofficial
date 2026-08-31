import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import POIEntry from './poi/POIEntry';
import POIMap from './poi/POIMap';

export default function POIHub() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              <POIEntry />
            </motion.div>
          }
        />
        <Route
          path="/map"
          element={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
            >
              <POIMap />
            </motion.div>
          }
        />
        <Route path="*" element={<Navigate to="/lore/pois" replace />} />
      </Routes>
    </AnimatePresence>
  );
}
