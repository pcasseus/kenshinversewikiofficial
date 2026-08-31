import React from "react";
import { getWeaknessDomain } from "../../utils/weaknessDomains";

const WeaknessesSection = ({
  character,
  setSelectedAbility,
  subVisible,
  toggleSub,
  selectedBooks,
}) => {
  const weaknesses = Array.isArray(character?.weaknesses)
    ? character.weaknesses
    : [];

  const isBookMatch = (books = []) =>
    books.some((b) => selectedBooks.includes(b));

  const visible = weaknesses.filter((w) => isBookMatch(w.books));

  const grouped = visible.reduce((acc, w) => {
    const domain = getWeaknessDomain(w.name);
    if (!acc[domain]) acc[domain] = [];
    acc[domain].push(w);
    return acc;
  }, {});

  return (
    <section className="rounded border border-red-700 p-6 mb-10 bg-gradient-to-b from-black to-zinc-900">
      {/* HEADER */}
      <h2 className="text-red-400 text-xl font-bold mb-8 uppercase tracking-widest">
        Weaknesses
      </h2>

      <div className="space-y-10">
        {Object.entries(grouped).map(([domain, items]) => (
          <div key={domain}>
            {/* DOMAIN HEADER */}
            <h3 className="text-red-300 text-xs uppercase tracking-widest border-b border-red-700/60 pb-1 mb-4">
              {domain}
            </h3>

            <div className="grid gap-3">
              {items.map((weakness, idx) => {
                const critical = weakness.critical === true;
                const hasSub =
                  Array.isArray(weakness.subWeaknesses) &&
                  weakness.subWeaknesses.length > 0;

                return (
                  <div key={`${weakness.name}-${idx}`} className="relative">
                    {/* MAIN WEAKNESS BUTTON */}
                    <button
                      onClick={() =>
                        setSelectedAbility({
                          ...weakness,
                          __theme: "danger",
                        })
                      }
                      className={`w-full flex justify-between items-center px-4 py-2 rounded border text-left pr-10 transition-all duration-200
                        ${
                          critical
                            ? "border-red-500 text-red-200 shadow-[0_0_14px_rgba(255,0,0,0.45)]"
                            : "border-red-700 text-red-300 hover:text-red-100"
                        }
                      `}
                      style={{
                        backgroundColor: "#0b0b0b",
                        backgroundImage: `
                          linear-gradient(rgba(255,0,0,0.22) 1px, transparent 1px),
                          linear-gradient(to right, rgba(255,0,0,0.22) 1px, transparent 1px)
                        `,
                        backgroundSize: "22px 22px",
                      }}
                    >
                      <span>{weakness.name}</span>

                      {critical && (
                        <span className="text-xs font-bold tracking-widest text-red-400">
                          CRITICAL
                        </span>
                      )}
                    </button>

                    {/* SUB TOGGLE */}
                    {hasSub && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSub(weakness.name);
                        }}
                        className="absolute top-2 right-2 text-red-400 hover:text-black hover:bg-red-600 p-1 rounded transition"
                        title="Expand sub-weaknesses"
                      >
                        ▶
                      </button>
                    )}

                    {/* SUB-WEAKNESSES */}
                    {hasSub && subVisible[weakness.name] && (
                      <div className="pl-5 mt-3 space-y-2">
                        {weakness.subWeaknesses.map((sub, sidx) => {
                          if (!isBookMatch(sub.books)) return null;

                          return (
                            <button
                              key={`${sub.name}-${sidx}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedAbility({
                                  ...sub,
                                  __theme: "danger",
                                });
                              }}
                              className="w-full text-left border border-red-700 text-red-300 px-3 py-1 rounded transition text-sm hover:text-black hover:bg-red-600"
                              style={{
                                backgroundColor: "#0b0b0b",
                                backgroundImage: `
                                  linear-gradient(rgba(255,0,0,0.18) 1px, transparent 1px),
                                  linear-gradient(to right, rgba(255,0,0,0.18) 1px, transparent 1px)
                                `,
                                backgroundSize: "20px 20px",
                              }}
                            >
                              ⚠ {sub.name}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeaknessesSection;
