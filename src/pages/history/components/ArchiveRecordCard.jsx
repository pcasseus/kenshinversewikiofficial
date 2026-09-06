import React from "react";
import ClassificationBadge from "../../../components/lore/ClassificationBadge";

export default function ArchiveRecordCard({ record, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="text-left group relative border border-yellow-900 bg-gradient-to-br from-yellow-950/30 via-black to-black rounded-xl p-5 sm:p-6 shadow-xl overflow-hidden transition-all duration-300 hover:border-yellow-600 hover:-translate-y-1"
    >
      {/* Decorative Corner Glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-700/5 rounded-bl-full pointer-events-none" />

      {/* Record Header */}
      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.2em] text-yellow-700">
            {record.type}
          </p>

          <h3 className="mt-2 text-lg sm:text-xl font-bold text-yellow-300 group-hover:text-yellow-200 transition-colors">
            {record.title}
          </h3>
        </div>

        <ClassificationBadge classification={record.classification} />
      </div>

      {/* Era / Year */}
      <div className="relative mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider">
        <span className="border border-gray-800 text-gray-500 px-2 py-1 rounded">
          {record.era}
        </span>

        <span className="border border-gray-800 text-gray-500 px-2 py-1 rounded">
          {record.year}
        </span>
      </div>

      {/* Summary */}
      <p className="relative mt-4 text-sm text-gray-400 leading-relaxed">
        {record.summary}
      </p>

      {/* Footer */}
      <div className="relative mt-6 pt-4 border-t border-yellow-950 flex items-center justify-between gap-4">
        <span className="text-[10px] uppercase tracking-widest text-gray-600">
          {record.status}
        </span>

        <span className="shrink-0 text-xs text-yellow-500 group-hover:text-yellow-300 transition-colors">
          Open Record →
        </span>
      </div>
    </button>
  );
}