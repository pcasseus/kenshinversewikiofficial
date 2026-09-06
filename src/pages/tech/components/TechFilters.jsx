// src/pages/tech/components/TechFilters.jsx

import React from "react";

export default function TechFilters({
  filters,
  activeFilter,
  onFilterChange,
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = activeFilter === filter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onFilterChange(filter)}
            className={`px-3 py-2 rounded-lg border text-[10px] sm:text-xs uppercase tracking-wider transition-all ${
              isActive
                ? "border-cyan-300 bg-cyan-300 text-black"
                : "border-cyan-950 text-cyan-600 hover:border-cyan-700 hover:text-cyan-300"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}