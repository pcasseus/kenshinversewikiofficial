// src/pages/history/HistoricalArchives.jsx

import React, { useMemo, useState } from "react";

import {
  archiveFilters,
  archiveRecords,
} from "./historicalArchiveData";

import ArchiveFilters from "./components/ArchiveFilters";
import ArchiveRecordCard from "./components/ArchiveRecordCard";
import ArchiveRecordModal from "./components/ArchiveRecordModal";

import LoreStatCard from "../../components/lore/LoreStatCard";

export default function HistoricalArchives() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecord, setSelectedRecord] = useState(null);

  const filteredRecords = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return archiveRecords.filter((record) => {
      const matchesFilter =
        activeFilter === "All" || record.type === activeFilter;

      const matchesSearch =
        normalizedSearch.length === 0 ||
        record.title.toLowerCase().includes(normalizedSearch) ||
        record.summary.toLowerCase().includes(normalizedSearch) ||
        record.era.toLowerCase().includes(normalizedSearch) ||
        record.type.toLowerCase().includes(normalizedSearch);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <div className="min-h-screen bg-black text-white font-mono relative overflow-hidden">
      {/* Archive Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff06_1px,transparent_1px)] bg-[length:4px_4px] pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-yellow-950/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* Header */}
        <header className="text-center max-w-4xl mx-auto">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-yellow-600 mb-4">
            S.T.A.T.I.C. Historical Database
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-widest text-yellow-400">
            Historical Archives
          </h1>

          <p className="mt-5 text-sm sm:text-base text-gray-400 leading-relaxed">
            Declassified incidents, organizational records, research programs,
            historic teams, and documented events preserved within the
            KenshinVerse archive.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-[10px] sm:text-xs uppercase tracking-widest">
            <span className="border border-green-700 text-green-400 px-3 py-1 rounded-full">
              Archive Online
            </span>

            <span className="border border-yellow-800 text-yellow-500 px-3 py-1 rounded-full">
              KVI Access Layer
            </span>
          </div>
        </header>

        {/* Controls */}
        <section className="mt-12 sm:mt-16">
          <div className="border border-yellow-900/80 bg-black/70 rounded-2xl p-4 sm:p-6 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">
              {/* Search */}
              <div className="w-full lg:max-w-md">
                <label
                  htmlFor="history-search"
                  className="block text-[10px] uppercase tracking-[0.25em] text-yellow-600 mb-2"
                >
                  Search Records
                </label>

                <input
                  id="history-search"
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search archive..."
                  className="w-full bg-black border border-yellow-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none focus:border-yellow-500 transition-colors"
                />
              </div>

              {/* Filters */}
              <ArchiveFilters
                filters={archiveFilters}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />
            </div>
          </div>
        </section>

        {/* Archive Stats */}
        <section className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <LoreStatCard
            label="Records Available"
            value={archiveRecords.length}
            accent="yellow"
          />

          <LoreStatCard
            label="Visible Records"
            value={filteredRecords.length}
            accent="yellow"
          />

          <LoreStatCard
            label="Archive Layer"
            value="KVI"
            accent="yellow"
          />

          <LoreStatCard
            label="Access Status"
            value="Granted"
            accent="yellow"
          />
        </section>

        {/* Records */}
        <section className="mt-10 sm:mt-14">
          <div className="flex items-center justify-between gap-4 border-b border-yellow-900 pb-3 mb-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-yellow-700">
                Record Collection
              </p>

              <h2 className="text-lg sm:text-xl text-yellow-300 font-bold mt-1">
                Archive Entries
              </h2>
            </div>

            <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest">
              {filteredRecords.length} Found
            </span>
          </div>

          {filteredRecords.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
              {filteredRecords.map((record) => (
                <ArchiveRecordCard
                  key={record.id}
                  record={record}
                  onOpen={() => setSelectedRecord(record)}
                />
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-yellow-900 rounded-xl p-10 text-center bg-black/60">
              <p className="text-yellow-600 uppercase tracking-widest text-sm">
                No matching archive records
              </p>

              <p className="text-gray-600 text-xs mt-2">
                Adjust your search terms or classification filter.
              </p>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="mt-16 sm:mt-20 pt-6 border-t border-yellow-900 text-center">
          <p className="text-[10px] sm:text-xs text-green-500 uppercase tracking-[0.25em]">
            Historical Archive Access Granted
          </p>
        </footer>
      </div>

      {/* Record Modal */}
      {selectedRecord && (
        <ArchiveRecordModal
          record={selectedRecord}
          onClose={() => setSelectedRecord(null)}
        />
      )}
    </div>
  );
}