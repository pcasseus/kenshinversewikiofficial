import React, { useState, useEffect } from "react";
import psychProfiles from "../data/characters/psychProfiles";

const PsychEvaluationSection = ({ character }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTrait, setActiveTrait] = useState(null);

  if (!character?.slug) return null;

  const profile = psychProfiles?.[character.slug];
  if (!profile) return null;

  const { notes, traits } = profile;

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const toggleTrait = (index) => {
    setActiveTrait(activeTrait === index ? null : index);
  };

  return (
    <>
      {/* PSYCHOLOGICAL EVALUATION */}
      <section className="mt-10">
        <div className="relative bg-gradient-to-b from-black to-zinc-900 border border-yellow-400 rounded-lg shadow-inner">
          
          {/* HEADER TAG */}
          <div className="absolute top-0 left-0 px-4 py-1 bg-yellow-400 text-black text-xs font-bold tracking-widest rounded-br">
            PSYCHOLOGICAL_EVALUATION // ASSESSMENT
          </div>

          {/* BODY */}
          <div className="pt-10 px-5 pb-6 font-mono text-sm text-gray-200 leading-relaxed">
            {Array.isArray(notes) && notes.length > 0 ? (
              <ul className="space-y-4 list-disc list-inside">
                {notes.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            ) : (
              <p className="text-zinc-400 italic">
                Psychological data unavailable.
              </p>
            )}

            {/* ACTION */}
            <div className="mt-6">
              <button
                onClick={() => setModalOpen(true)}
                className="px-4 py-2 text-xs tracking-widest uppercase border border-yellow-400 text-yellow-300 rounded hover:bg-yellow-400 hover:text-black transition"
              >
                View Personality & Traits
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 px-4">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-black border border-yellow-400 rounded shadow-2xl">
            
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-yellow-400">
              <h3 className="text-white text-sm tracking-widest uppercase">
                Personality & Trait Analysis
              </h3>

              <button
                onClick={() => {
                  setModalOpen(false);
                  setActiveTrait(null);
                }}
                className="px-3 py-1 border border-yellow-400 text-yellow-300 rounded text-xs tracking-widest hover:bg-yellow-400 hover:text-black transition"
              >
                Close
              </button>
            </div>

            {/* MODAL CONTENT */}
            <div className="px-6 py-6 space-y-3 text-sm text-white font-mono">
              {traits && traits.length > 0 ? (
                traits.map((trait, idx) => {
                  const isOpen = activeTrait === idx;

                  return (
                    <div
                      key={idx}
                      className="border border-yellow-400/40 rounded"
                    >
                      {/* TRAIT BUTTON */}
                      <button
                        onClick={() => toggleTrait(idx)}
                        className="w-full flex items-center justify-between px-4 py-3 text-left text-xs uppercase tracking-widest text-yellow-400 hover:bg-yellow-400/10 transition"
                        aria-expanded={isOpen}
                      >
                        <span>{trait.name}</span>
                        <span className="text-yellow-300">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {/* DROPDOWN CONTENT */}
                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-gray-200 leading-relaxed text-sm">
                          {trait.description}
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <p className="italic text-zinc-400">
                  No personality traits on record.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PsychEvaluationSection;
