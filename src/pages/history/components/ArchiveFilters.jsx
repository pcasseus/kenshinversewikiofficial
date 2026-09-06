// src/pages/history/components/ArchiveFilters.jsx

import React from "react";

export default function ArchiveFilters({
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
                ? "border-yellow-400 bg-yellow-400 text-black"
                : "border-yellow-900 text-yellow-500 hover:border-yellow-600 hover:text-yellow-300"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}