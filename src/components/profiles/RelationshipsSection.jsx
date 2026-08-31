import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";

const ITEMS_PER_PAGE = 9;

const RelationshipsSection = ({ character }) => {
  const family = (character.relationships || []).filter((rel) =>
    [
      "Father",
      "Adopted Father",
      "Mother",
      "Adopted Mother",
      "Brother",
      "Sister",
      "Bestfriend",
      "Close Friend",
      "Uncle",
      "Aunt",
      "Girlfriend",
      "Boyfriend",
      "Husband",
      "Wife",
    ].some((role) => rel.role.includes(role))
  );

  const [page, setPage] = useState(0);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const totalPages = Math.ceil(family.length / ITEMS_PER_PAGE);
  const startIndex = page * ITEMS_PER_PAGE;
  const currentPageItems = family.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section
      className="relative border border-yellow-600 rounded-xl p-8 mb-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #1f1f1f 0%, #0d0d0d 55%, #000000 100%)",
      }}
    >
      {/* Header */}
      <h2 className="text-yellow-300 text-xl font-bold text-center mb-14 tracking-widest uppercase">
        Family
      </h2>

      {family.length === 0 ? (
        <div className="text-yellow-400 font-mono text-sm uppercase tracking-widest border border-yellow-700 p-6 rounded bg-black text-center">
          No known family data on file.
        </div>
      ) : (
        <>
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {currentPageItems.map((relation, index) => (
              <div
                key={index}
                className="rounded-xl border border-yellow-600 p-6 text-center relative"
                style={{
                  backgroundImage: `
                    linear-gradient(#f5c8421f 1px, transparent 1px),
                    linear-gradient(to right, #f5c8421f 1px, transparent 1px)
                  `,
                  backgroundSize: "28px 28px",
                  backgroundColor: "#000",
                }}
              >
                {/* Image */}
                <img
                  src={relation.image}
                  alt={relation.name}
                  onClick={() => setEnlargedImage(relation.image)}
                  className="w-24 h-24 rounded-full border-2 border-yellow-500 object-cover mx-auto mb-4 cursor-pointer hover:scale-105 transition"
                />

                {/* Name */}
                <div className="text-yellow-200 font-bold text-lg">
                  {relation.name}
                </div>

                {/* Role */}
                <div className="text-yellow-400 italic text-sm mb-4">
                  {relation.role}
                </div>

                {/* Link */}
                {relation.link && relation.link.trim() !== "" && (
                  <a
                    href={relation.link}
                    className="inline-flex items-center gap-1 text-yellow-300 text-xs uppercase font-mono border border-yellow-500 px-3 py-1 rounded hover:bg-yellow-500 hover:text-black transition"
                  >
                    View <ArrowRight size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-6 mt-14">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 0))}
                disabled={page === 0}
                className={`px-4 py-1 text-xs uppercase font-mono border rounded ${
                  page === 0
                    ? "text-gray-600 border-gray-700 cursor-not-allowed"
                    : "text-yellow-300 border-yellow-500 hover:bg-yellow-800"
                }`}
              >
                ◀ Prev
              </button>

              <span className="text-yellow-400 font-mono text-sm">
                Page {page + 1} of {totalPages}
              </span>

              <button
                onClick={() =>
                  setPage((p) => Math.min(p + 1, totalPages - 1))
                }
                disabled={page === totalPages - 1}
                className={`px-4 py-1 text-xs uppercase font-mono border rounded ${
                  page === totalPages - 1
                    ? "text-gray-600 border-gray-700 cursor-not-allowed"
                    : "text-yellow-300 border-yellow-500 hover:bg-yellow-800"
                }`}
              >
                Next ▶
              </button>
            </div>
          )}
        </>
      )}

      {/* Image Lightbox */}
      {enlargedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={() => setEnlargedImage(null)}
              className="absolute -top-8 right-0 text-yellow-400 hover:text-yellow-200"
            >
              <X size={28} />
            </button>
            <img
              src={enlargedImage}
              alt="Enlarged portrait"
              className="max-h-[80vh] max-w-[80vw] rounded-lg border-2 border-yellow-500 shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default RelationshipsSection;
