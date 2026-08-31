import React, { useState, useMemo } from "react";
import PsychEvaluationSection from "./PsychEvaluationSection";

const ProfileHeader = ({ character }) => {
  if (!character) return null;

  const visuals = character?.stats?.bookVisuals || {};
  const books = Object.keys(visuals);
  const [activeBook, setActiveBook] = useState(books[0] || null);
  const [flipped, setFlipped] = useState(false);

  const data = useMemo(() => {
    if (!activeBook) return null;
    return visuals[activeBook];
  }, [activeBook, visuals]);

  const aliases = character.aliases || [];

  return (
    <section className="mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start">

        {/* LEFT COLUMN */}
        <aside className="space-y-4">
          <button
            onClick={() => setFlipped((p) => !p)}
            className="w-full text-xs tracking-widest border border-yellow-500 text-yellow-400 py-2 rounded hover:bg-yellow-500 hover:text-black transition"
          >
            {flipped ? "VIEW LIVE-ACTION FANCAST" : "VIEW BOOK VISUAL IDENTIFIER"}
          </button>

          {/* FLIP CARD */}
          <div className="relative w-full" style={{ perspective: "1400px" }}>
            <div
              className="relative transition-transform duration-700"
              style={{
                transformStyle: "preserve-3d",
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* FRONT */}
              <div
                className="border border-yellow-500 rounded-md bg-black/40 p-3"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full object-cover rounded"
                />

                {character.fancast?.actor && (
                  <p className="mt-3 text-xs text-center text-yellow-400 tracking-widest uppercase">
                    Live-Action Fancast: {character.fancast.actor}
                  </p>
                )}
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 border border-green-500 rounded-md bg-black/60 p-4 flex flex-col"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <h3 className="text-green-400 text-xs tracking-widest uppercase mb-3">
                  Book Visual Identifier
                </h3>

                {/* BOOK TOGGLES */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  {books.map((book) => (
                    <button
                      key={book}
                      onClick={() => setActiveBook(book)}
                      className={`px-3 py-1 text-xs border rounded tracking-widest ${
                        activeBook === book
                          ? "border-green-400 text-green-300 bg-green-900/30"
                          : "border-zinc-600 text-zinc-400"
                      }`}
                    >
                      Book {book}
                    </button>
                  ))}
                </div>

                {/* CONTENT */}
                {data && (
                  <div className="flex-1 overflow-y-auto pr-2 space-y-4 text-sm text-gray-300 font-mono">

                    {/* CORE VISUAL DATA */}
                    <div className="space-y-1">
                      <p><span className="text-green-400">Height:</span> {data.height}</p>
                      <p><span className="text-green-400">Physique:</span> {data.physique}</p>
                      <p><span className="text-green-400">Eyes:</span> {data.eyes}</p>
                      <p><span className="text-green-400">Skin Tone:</span> {data.skinTone}</p>
                    </div>

                    {/* HAIR */}
                    {data.hair && (
                      <div className="pt-3 border-t border-green-400/30 space-y-3">
                        <h4 className="text-green-400 text-xs tracking-widest uppercase">
                          Hair
                        </h4>

                        {typeof data.hair === "string" && (
                          <p className="text-xs leading-relaxed text-gray-300">
                            {data.hair}
                          </p>
                        )}

                        {typeof data.hair === "object" && !data.hair.style &&
                          Object.values(data.hair).map((phase, index) => (
                            <div
                              key={index}
                              className="border border-green-400/20 rounded p-2 bg-black/40"
                            >
                              <p className="text-green-300 text-xs tracking-widest uppercase mb-1">
                                {phase.label}
                              </p>
                              <p className="text-xs leading-relaxed text-gray-300">
                                {phase.style}
                              </p>
                            </div>
                          ))
                        }

                        {data.hair.style && (
                          <div className="border border-green-400/20 rounded p-2 bg-black/40">
                            <p className="text-xs leading-relaxed text-gray-300">
                              {data.hair.style}
                              {data.hair.color ? `, ${data.hair.color}` : ""}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* FACIAL HAIR */}
                    {data.facialHair && (
                      <div className="pt-3 border-t border-green-400/30">
                        <h4 className="text-green-400 text-xs tracking-widest uppercase mb-1">
                          Facial Hair
                        </h4>
                        <p className="text-xs leading-relaxed text-gray-300">
                          {data.facialHair}
                        </p>
                      </div>
                    )}

                    {/* TATTOO RECORD */}
                    {(data.tattoo || Array.isArray(data.tattoos)) && (
                      <div className="pt-3 border-t border-green-400/30">
                        <h4 className="text-green-400 text-xs tracking-widest uppercase mb-2">
                          Tattoo Record
                        </h4>

                        {/* Single tattoo string */}
                        {typeof data.tattoo === "string" && (
                          <p className="text-xs leading-relaxed text-gray-300">
                            {data.tattoo}
                          </p>
                        )}

                        {/* Multiple tattoos */}
                        {Array.isArray(data.tattoos) && (
                          <ul className="space-y-2 text-xs leading-relaxed">
                            {data.tattoos.map((tattoo, index) => (
                              <li key={index}>{tattoo}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    {/* SCARRING RECORD */}
                    {Array.isArray(data.scars) && data.scars.length > 0 && (
                      <div className="pt-3 border-t border-green-400/30">
                        <h4 className="text-green-400 text-xs tracking-widest uppercase mb-2">
                          Scarring Record
                        </h4>

                        <ul className="space-y-2 text-xs leading-relaxed">
                          {data.scars.map((scar) => (
                            <li key={scar.id}>
                              <span className="text-green-300">
                                {scar.location}:
                              </span>{" "}
                              {scar.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* FANCAST NOTICE */}
          {character.fancast?.note && (
            <div className="text-[11px] text-gray-500 border border-zinc-800 rounded px-3 py-2 bg-black/50">
              <span className="block text-yellow-400 uppercase tracking-widest mb-1">
                Fancast Notice
              </span>
              {character.fancast.note}
            </div>
          )}
        </aside>

        {/* RIGHT COLUMN */}
        <main className="space-y-8">
          <div>
            <h1 className="text-yellow-400 text-4xl font-bold uppercase tracking-widest leading-none mb-1">
              {character.name}
            </h1>

            <div className="text-xs tracking-widest text-zinc-400 uppercase leading-none">
              {aliases.length ? aliases.join(" • ") : "No known aliases on record"}
            </div>
          </div>

          <div className="relative bg-gradient-to-b from-black to-zinc-900 border border-yellow-400 rounded-lg shadow-inner">
            <div className="absolute top-0 left-0 px-4 py-1 bg-yellow-400 text-black text-xs font-bold tracking-widest rounded-br">
              BIOGRAPHY_LOG // ORIGIN
            </div>

            <div className="pt-10 px-5 pb-4 max-h-[320px] overflow-y-auto font-mono text-sm text-gray-200 leading-relaxed">
              {character.bio}
            </div>

            <div className="border-t border-yellow-400/40 px-5 py-3 text-xs text-zinc-400 flex justify-between">
              <span>
                <span className="text-yellow-400">Born:</span>{" "}
                {character.birthDate || "Classified"}
              </span>
              <span>
                <span className="text-yellow-400">Origin:</span>{" "}
                {character.stats?.base?.placeOfBirth || "Unknown"}
              </span>
            </div>
          </div>

          <PsychEvaluationSection character={character} />
        </main>
      </div>
    </section>
  );
};

export default ProfileHeader;
