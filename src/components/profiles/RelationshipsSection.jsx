import React, { useState } from "react";

import { ArrowRight, X } from "lucide-react";

import { Link } from "react-router-dom";

const CURRENT_RELEASE = "KVI";

const RelationshipsSection = ({ character }) => {
  const affiliations = Array.isArray(character?.relationships)
    ? character.relationships.filter((relation) => {
        if (!relation) {
          return false;
        }

        /*
         * Legacy records without a release tag are
         * treated as KVI until they are migrated.
         */
        if (!relation.release) {
          return true;
        }

        return relation.release === CURRENT_RELEASE;
      })
    : [];

  const [selectedRelation, setSelectedRelation] = useState(null);

  if (affiliations.length === 0) {
    return null;
  }

  return (
    <section className="overflow-hidden rounded-lg border border-yellow-500/60 bg-zinc-950">
      {/* HEADER */}

      <div className="flex flex-col gap-2 border-b border-yellow-500/30 bg-yellow-500/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-1 text-[9px] uppercase tracking-[0.24em] text-zinc-600">
            S.T.A.T.I.C. Association Record
          </p>

          <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
            Affiliations
          </h2>
        </div>

        <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">
          KVI Confirmed Contacts
        </span>
      </div>

      {/* AFFILIATION LIST */}

      <div className="px-5 py-5 sm:px-6">
        <div className="flex flex-wrap gap-2.5">
          {affiliations.map((relation, index) => (
            <button
              key={`${relation.name}-${index}`}
              type="button"
              onClick={() => setSelectedRelation(relation)}
              className="
                rounded
                border
                border-yellow-700/80
                bg-black
                px-4
                py-2
                text-xs
                font-bold
                tracking-wide
                text-yellow-200
                transition
                hover:border-yellow-400
                hover:bg-yellow-500
                hover:text-black
              "
            >
              {relation.name}
            </button>
          ))}
        </div>
      </div>

      {/* AFFILIATION MODAL */}

      {selectedRelation && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedRelation(null)}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-lg border border-yellow-500/60 bg-zinc-950 shadow-[0_0_35px_rgba(234,179,8,0.15)]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* MODAL HEADER */}

            <div className="flex items-center justify-between border-b border-yellow-500/30 bg-yellow-500/5 px-5 py-4">
              <div>
                <p className="text-[9px] uppercase tracking-[0.22em] text-zinc-600">
                  Affiliation Record
                </p>

                <h3 className="mt-1 text-base font-bold uppercase tracking-[0.15em] text-yellow-300">
                  {selectedRelation.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedRelation(null)}
                className="flex h-9 w-9 items-center justify-center rounded border border-zinc-700 text-zinc-400 transition hover:border-yellow-400 hover:text-yellow-300"
                aria-label="Close affiliation details"
              >
                <X size={18} />
              </button>
            </div>

            {/* MODAL BODY */}

            <div className="p-5 sm:p-6">
              {selectedRelation.role && (
                <div className="mb-5 border-b border-yellow-500/20 pb-5">
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                    Relationship
                  </span>

                  <span className="mt-1 block text-xs font-bold uppercase tracking-wide text-yellow-400">
                    {selectedRelation.role}
                  </span>
                </div>
              )}

              {selectedRelation.description ? (
                <p className="whitespace-pre-line text-sm leading-7 text-zinc-300">
                  {selectedRelation.description}
                </p>
              ) : (
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  Additional affiliation details unavailable.
                </p>
              )}

              {selectedRelation.link &&
                selectedRelation.link.trim() !== "" && (
                  <div className="mt-6 border-t border-yellow-500/20 pt-5">
                    <Link
                      to={selectedRelation.link}
                      onClick={() => setSelectedRelation(null)}
                      className="inline-flex items-center gap-2 rounded border border-yellow-500 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-yellow-300 transition hover:bg-yellow-500 hover:text-black"
                    >
                      View Dossier
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RelationshipsSection;