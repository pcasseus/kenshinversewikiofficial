// src/pages/history/components/ArchiveRecordModal.jsx

import React from "react";
import ClassificationBadge from "../../../components/lore/ClassificationBadge";

export default function ArchiveRecordModal({ record, onClose }) {
  if (!record) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm px-4 pt-24 sm:pt-28 pb-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="max-w-4xl mx-auto border border-yellow-700 bg-black rounded-2xl shadow-2xl overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="border-b border-yellow-900 bg-yellow-950/20 p-5 sm:p-7">
          <div className="flex items-start justify-between gap-5">
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.25em] text-yellow-700">
                Historical Record
              </p>

              <h2 className="mt-2 text-2xl sm:text-3xl font-black text-yellow-300">
                {record.title}
              </h2>

              <div className="mt-3 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider">
                <span className="border border-gray-800 text-gray-500 px-2 py-1 rounded">
                  {record.type}
                </span>

                <span className="border border-gray-800 text-gray-500 px-2 py-1 rounded">
                  {record.era}
                </span>

                <span className="border border-gray-800 text-gray-500 px-2 py-1 rounded">
                  {record.year}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="shrink-0 border border-yellow-900 text-yellow-600 hover:text-yellow-300 hover:border-yellow-600 rounded-lg px-3 py-2 text-sm transition-colors"
              aria-label="Close historical record"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 lg:p-8">
          <div className="flex flex-wrap gap-3 mb-7">
            <ClassificationBadge classification={record.classification} />

            <span className="border border-green-900 text-green-500 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest">
              {record.status}
            </span>
          </div>

          <ArchiveSection title="Archive Summary">
            <p className="text-gray-300 leading-relaxed">
              {record.summary}
            </p>
          </ArchiveSection>

          <ArchiveSection title="Full Record">
            <p className="text-gray-400 leading-relaxed">
              {record.details}
            </p>
          </ArchiveSection>

          <ArchiveSection title="Key Figures">
            <div className="flex flex-wrap gap-2">
              {record.keyFigures?.map((person) => (
                <span
                  key={person}
                  className="border border-yellow-900 bg-yellow-950/20 text-yellow-400 rounded-md px-3 py-2 text-xs"
                >
                  {person}
                </span>
              ))}
            </div>
          </ArchiveSection>

          <ArchiveSection title="Related Records">
            <div className="flex flex-wrap gap-2">
              {record.related?.map((item) => (
                <span
                  key={item}
                  className="border border-gray-800 bg-gray-950 text-gray-400 rounded-md px-3 py-2 text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </ArchiveSection>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-yellow-900 bg-yellow-950/10 p-4 text-center">
          <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-green-700">
            End of Archive Record
          </p>
        </div>
      </div>
    </div>
  );
}

function ArchiveSection({ title, children }) {
  return (
    <section className="mb-8 last:mb-0">
      <h3 className="text-xs uppercase tracking-[0.25em] text-yellow-600 border-b border-yellow-950 pb-2 mb-4">
        {title}
      </h3>

      {children}
    </section>
  );
}