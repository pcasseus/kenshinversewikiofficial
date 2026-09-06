// src/components/lore/LoreStatCard.jsx

import React from "react";

export default function LoreStatCard({
  label,
  value,
  accent = "yellow",
}) {
  const accentStyles = {
    yellow: {
      border: "border-yellow-950",
      value: "text-yellow-400",
    },
    cyan: {
      border: "border-cyan-950",
      value: "text-cyan-300",
    },
    green: {
      border: "border-green-950",
      value: "text-green-400",
    },
  };

  const style = accentStyles[accent] || accentStyles.yellow;

  return (
    <div
      className={`border bg-black/60 rounded-xl p-4 sm:p-5 ${style.border}`}
    >
      <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-gray-600">
        {label}
      </p>

      <p className={`mt-2 text-lg sm:text-xl font-bold ${style.value}`}>
        {value}
      </p>
    </div>
  );
}