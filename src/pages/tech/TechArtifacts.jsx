import React, { useMemo, useState } from "react";

import {
  techFilters,
  techRecords,
} from "./techArtifactsData";

import TechFilters from "./components/TechFilters";
import TechRecordCard from "./components/TechRecordCard";
import TechRecordModal from "./components/TechRecordModal";

import LoreStatCard from "../../components/lore/LoreStatCard";

export default function TechArtifacts() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecord, setSelectedRecord] = useState(null);

  const filteredRecords = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return techRecords.filter((record) => {
      const matchesFilter =
        activeFilter === "All" || record.type === activeFilter;

      const matchesSearch =
        normalizedSearch.length === 0 ||
        record.title.toLowerCase().includes(normalizedSearch) ||
        record.summary.toLowerCase().includes(normalizedSearch) ||
        record.type.toLowerCase().includes(normalizedSearch) ||
        record.origin.toLowerCase().includes(normalizedSearch) ||
        record.era.toLowerCase().includes(normalizedSearch);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <div className="min-h-screen bg-black text-white font-mono relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff06_1px,transparent_1px)] bg-[length:4px_4px] pointer-events-none" />

      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-cyan-950/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-20">
        <header className="text-center max-w-4xl mx-auto">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-cyan-700 mb-4">
            S.T.A.T.I.C. Technology Database
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-widest text-cyan-300">
            Tech & Artifacts
          </h1>

          <p className="mt-5 text-sm sm:text-base text-gray-400 leading-relaxed">
            Cataloged weapons, experimental systems, alien relics, integrated
            technology, engineered materials, and specialized equipment
            documented within the KVI archive.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-[10px] sm:text-xs uppercase tracking-widest">
            <span className="border border-green-700 text-green-400 px-3 py-1 rounded-full">
              Database Online
            </span>

            <span className="border border-cyan-900 text-cyan-500 px-3 py-1 rounded-full">
              KVI Access Layer
            </span>
          </div>
        </header>

        <section className="mt-12 sm:mt-16">
          <div className="border border-cyan-950 bg-black/70 rounded-2xl p-4 sm:p-6 shadow-2xl">
            <div className="flex flex-col gap-5">
              <div className="w-full lg:max-w-lg">
                <label
                  htmlFor="tech-search"
                  className="block text-[10px] uppercase tracking-[0.25em] text-cyan-700 mb-2"
                >
                  Search Technology Database
                </label>

                <input
                  id="tech-search"
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search technology or artifacts..."
                  className="w-full bg-black border border-cyan-950 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none focus:border-cyan-600 transition-colors"
                />
              </div>

              <TechFilters
                filters={techFilters}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />
            </div>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <LoreStatCard
            label="Cataloged Records"
            value={techRecords.length}
            accent="cyan"
          />

          <LoreStatCard
            label="Visible Records"
            value={filteredRecords.length}
            accent="cyan"
          />

          <LoreStatCard
            label="Database Layer"
            value="KVI"
            accent="cyan"
          />

          <LoreStatCard
            label="Access Status"
            value="Granted"
            accent="cyan"
          />
        </section>

        <section className="mt-10 sm:mt-14">
          <div className="flex items-center justify-between gap-4 border-b border-cyan-950 pb-3 mb-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-800">
                Technology Collection
              </p>

              <h2 className="text-lg sm:text-xl text-cyan-300 font-bold mt-1">
                Database Entries
              </h2>
            </div>

            <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest">
              {filteredRecords.length} Found
            </span>
          </div>

          {filteredRecords.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
              {filteredRecords.map((record) => (
                <TechRecordCard
                  key={record.id}
                  record={record}
                  onOpen={() => setSelectedRecord(record)}
                />
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-cyan-950 rounded-xl p-10 text-center bg-black/60">
              <p className="text-cyan-700 uppercase tracking-widest text-sm">
                No matching records
              </p>

              <p className="text-gray-600 text-xs mt-2">
                Adjust your search terms or database filter.
              </p>
            </div>
          )}
        </section>

        <footer className="mt-16 sm:mt-20 pt-6 border-t border-cyan-950 text-center">
          <p className="text-[10px] sm:text-xs text-green-500 uppercase tracking-[0.25em]">
            Technology Database Access Granted
          </p>
        </footer>
      </div>

      {selectedRecord && (
        <TechRecordModal
          record={selectedRecord}
          onClose={() => setSelectedRecord(null)}
        />
      )}
    </div>
  );
}