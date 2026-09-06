// src/components/lore/ClassificationBadge.jsx

import React from "react";

export default function ClassificationBadge({ classification }) {
  const styles = {
    Declassified: "border-green-800 text-green-400 bg-green-950/20",
    Restricted: "border-yellow-800 text-yellow-400 bg-yellow-950/20",
    Classified: "border-red-900 text-red-400 bg-red-950/20",
  };

  const style =
    styles[classification] ||
    "border-gray-800 text-gray-400 bg-gray-950";

  return (
    <span
      className={`shrink-0 border rounded-full px-3 py-1 text-[9px] sm:text-[10px] uppercase tracking-widest ${style}`}
    >
      {classification}
    </span>
  );
}