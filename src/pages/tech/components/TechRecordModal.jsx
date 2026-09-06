import React from "react";
import ClassificationBadge from "../../../components/lore/ClassificationBadge";

export default function TechRecordModal({ record, onClose }) {
  if (!record) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm px-4 pt-24 sm:pt-28 pb-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="max-w-4xl mx-auto border border-cyan-800 bg-black rounded-2xl shadow-2xl overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="border-b border-cyan-950 bg-cyan-950/20 p-5 sm:p-7">
          <div className="flex items-start justify-between gap-5">
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-800">
                Technology Record
              </p>

              <h2 className="mt-2 text-2xl sm:text-3xl font-black text-cyan-300">
                {record.title}
              </h2>

              <div className="mt-3 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider">
                <span className="border border-gray-800 text-gray-500 px-2 py-1 rounded">
                  {record.type}
                </span>

                <span className="border border-gray-800 text-gray-500 px-2 py-1 rounded">
                  {record.origin}
                </span>

                <span className="border border-gray-800 text-gray-500 px-2 py-1 rounded">
                  {record.era}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="shrink-0 border border-cyan-950 text-cyan-600 hover:text-cyan-300 hover:border-cyan-700 rounded-lg px-3 py-2 text-sm transition-colors"
              aria-label="Close technology record"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 lg:p-8">
          {/* Classification / Status */}
          <div className="flex flex-wrap gap-3 mb-7">
            <ClassificationBadge classification={record.classification} />

            <span className="border border-green-900 text-green-500 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest">
              {record.status}
            </span>
          </div>

          {/* Summary */}
          <TechSection title="Database Summary">
            <p className="text-gray-300 leading-relaxed">
              {record.summary}
            </p>
          </TechSection>

          {/* Full Record */}
          <TechSection title="Full Record">
            <p className="text-gray-400 leading-relaxed">
              {record.details}
            </p>
          </TechSection>

          {/* Capabilities */}
          <TechSection title="Capabilities">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {record.capabilities?.map((capability) => (
                <div
                  key={capability}
                  className="border border-cyan-950 bg-cyan-950/10 rounded-lg px-3 py-3 text-xs text-cyan-300"
                >
                  {capability}
                </div>
              ))}
            </div>
          </TechSection>

          {/* Limitations */}
          <TechSection title="Limitations">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {record.limitations?.map((limitation) => (
                <div
                  key={limitation}
                  className="border border-red-950 bg-red-950/10 rounded-lg px-3 py-3 text-xs text-red-300"
                >
                  {limitation}
                </div>
              ))}
            </div>
          </TechSection>

          {/* Associated Personnel */}
          <TechSection title="Associated Personnel">
            <div className="flex flex-wrap gap-2">
              {record.keyFigures?.map((person) => (
                <span
                  key={person}
                  className="border border-cyan-950 bg-cyan-950/20 text-cyan-400 rounded-md px-3 py-2 text-xs"
                >
                  {person}
                </span>
              ))}
            </div>
          </TechSection>

          {/* Related Records */}
          <TechSection title="Related Records">
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
          </TechSection>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-cyan-950 bg-cyan-950/10 p-4 text-center">
          <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-green-700">
            End of Technology Record
          </p>
        </div>
      </div>
    </div>
  );
}

function TechSection({ title, children }) {
  return (
    <section className="mb-8 last:mb-0">
      <h3 className="text-xs uppercase tracking-[0.25em] text-cyan-700 border-b border-cyan-950 pb-2 mb-4">
        {title}
      </h3>

      {children}
    </section>
  );
}