import React from "react";
import { getAbilityDomain } from "../../utils/abilityDomains";

const AbilitiesSection = ({
  character,
  setSelectedAbility,
  subVisible,
  toggleSub,
  selectedBooks,
}) => {
  if (!character) return null;

  const abilities = Array.isArray(character.abilities)
    ? character.abilities
    : [];

  const isBookMatch = (entryBooks = []) => {
    if (!Array.isArray(entryBooks)) 
      return false;
    if(!Array.isArray(selectedBooks) || selectedBooks.length === 0)
      return true;
    return entryBooks.some((b) => selectedBooks.includes(b));
  }

  const visibleAbilities = abilities.filter((a) =>
    isBookMatch(a.books)
  );

  const grouped = visibleAbilities.reduce((acc, ability) => {
    const domain = getAbilityDomain(character.slug, ability.name);
    if (!acc[domain]) acc[domain] = [];
    acc[domain].push(ability);
    return acc;
  }, {});

  return (
    <section className="rounded border border-cyan-400 p-6 mb-10 bg-gradient-to-b from-black to-zinc-900">
      {/* HEADER */}
      <h2 className="text-cyan-300 text-xl font-bold mb-2 uppercase tracking-widest">
        Power & Abilities
      </h2>

      <p className="mb-6 text-gray-200">
        <span className="text-cyan-400 font-semibold">
          Primary Power:
        </span>{" "}
        {character.primaryPower}
      </p>

      <div className="space-y-10">
        {Object.entries(grouped).map(([domain, abilities]) => (
          <div key={domain}>
            {/* DOMAIN HEADER */}
            <h3 className="text-cyan-300 text-xs uppercase tracking-widest border-b border-cyan-400/50 pb-1 mb-4">
              {domain}
            </h3>

            <div className="grid gap-3">
              {abilities.map((ability, index) => {
                const hasSub =
                  Array.isArray(ability.subAbilities) &&
                  ability.subAbilities.length > 0;

                return (
                  <div key={`${ability.name}-${index}`} className="relative">
                    {/* MAIN ABILITY BUTTON */}
                    <button
                      onClick={() =>
                        setSelectedAbility({
                          ...ability,
                          __theme: "ability",
                        })
                      }
                      className="w-full flex justify-between items-center px-4 py-2 rounded border text-left pr-10 transition-all duration-200 border-cyan-400 text-cyan-200 hover:text-white"
                      style={{
                        backgroundColor: "#0b0b0b",
                        backgroundImage: `
                          linear-gradient(rgba(0,255,255,0.22) 1px, transparent 1px),
                          linear-gradient(to right, rgba(0,255,255,0.22) 1px, transparent 1px)
                        `,
                        backgroundSize: "22px 22px",
                      }}
                    >
                      <span>{ability.name}</span>
                    </button>

                    {/* SUB TOGGLE */}
                    {hasSub && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSub(ability.name);
                        }}
                        className="absolute top-2 right-2 text-cyan-300 hover:text-black hover:bg-cyan-400 p-1 rounded transition"
                        aria-label="Toggle sub abilities"
                      >
                        <span
                          className={`inline-block transform transition-transform ${
                            subVisible[ability.name] ? "rotate-90" : ""
                          }`}
                        >
                          ▶
                        </span>
                      </button>
                    )}

                    {/* SUB ABILITIES */}
                    {hasSub && subVisible[ability.name] && (
                      <div className="pl-5 mt-3 space-y-2">
                        {ability.subAbilities.map((sub, subIndex) => {
                          if (!isBookMatch(sub.books)) 
                            return null;

                          return (
                            <button
                              key={`${sub.name}-${subIndex}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedAbility({
                                  ...sub,
                                  __theme: "ability",
                                });
                              }}
                              className="
                              w-full text-left text-sm px-3 py-1 rounded border 
                              border-cyan-400 text-cyan-200 
                              transition-all duration-200  
                              hover:bg-cyan-400/20
                              hover:text-cyan-100
                              hover:border-cyan-300
                              "
                              style={{
                                backgroundColor: "#0b0b0b",
                                backgroundImage: `
                                  linear-gradient(rgba(0,255,255,0.18) 1px, transparent 1px),
                                  linear-gradient(to right, rgba(0,255,255,0.18) 1px, transparent 1px)
                                `,
                                backgroundSize: "20px 20px",
                              }}
                            >
                              ▸ {sub.name}
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

export default AbilitiesSection;
