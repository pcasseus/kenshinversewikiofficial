import React from "react";

import {
  ChevronDown,
} from "lucide-react";

import MobileAbilityRecord from "./MobileAbilityRecord";

import {
  CURRENT_RELEASE,
} from "../../../utils/profileRecordAccess";

const MobileAbilityDomains = ({
  character,
  humanRecord = false,
  corePower,
  abilityDomains,
  selectedBooks,
  activeStage,
  expandedDomains,
  expandedAbilities,
  toggleDomain,
  toggleAbility,
  setSelectedAbility,
}) => {
  if (
    abilityDomains.length ===
    0
  ) {
    return null;
  }

  const totalAbilities =
    abilityDomains.reduce(
      (
        total,
        [, abilities]
      ) =>
        total +
        abilities.length,
      0
    );

  const archiveLabel =
    humanRecord
      ? "Personnel Expertise Analysis"
      : "Capability Analysis";

  const sectionTitle =
    humanRecord
      ? "Skills & Expertise"
      : "Power Record";

  const recordLabel =
    humanRecord
      ? "expertise records indexed"
      : "primary records indexed";

  const coreLabel =
    humanRecord
      ? "Primary Expertise"
      : "Core Power";

  const domainLabel =
    humanRecord
      ? "Expertise Domain"
      : "Capability Domain";

  return (
    <section className="overflow-hidden rounded-lg border border-cyan-500/60 bg-zinc-950">
      <div
        className="border-b border-cyan-500/25 px-4 py-4"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0,255,255,0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              to right,
              rgba(0,255,255,0.035) 1px,
              transparent 1px
            )
          `,
          backgroundSize:
            "24px 24px",
        }}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
          S.T.A.T.I.C.{" "}
          {archiveLabel}
        </p>

        <div className="mt-2 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-lg font-black uppercase tracking-[0.12em] text-cyan-300">
              {sectionTitle}
            </h2>

            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-zinc-500">
              {totalAbilities}{" "}
              {recordLabel}
            </p>
          </div>

          <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-cyan-600">
            {CURRENT_RELEASE}
          </span>
        </div>
      </div>

      {corePower && (
        <div className="border-b border-cyan-500/25 bg-cyan-950/[0.08] px-4 py-4">
          <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-cyan-600">
            {coreLabel}
          </span>

          <span className="mt-1 block text-base font-bold uppercase tracking-[0.08em] text-cyan-100">
            {corePower}
          </span>
        </div>
      )}

      <div>
        {abilityDomains.map(
          ([
            domain,
            domainAbilities,
          ]) => {
            const expanded =
              expandedDomains.has(
                domain
              );

            return (
              <div
                key={domain}
                className="border-b border-cyan-900/35 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() =>
                    toggleDomain(
                      domain
                    )
                  }
                  className="flex w-full items-center gap-3 bg-black px-4 py-4 text-left"
                >
                  <div className="min-w-0 flex-1">
                    <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-cyan-600">
                      {domainLabel}
                    </span>

                    <span className="mt-1 block text-sm font-bold uppercase tracking-[0.08em] text-cyan-200">
                      {domain}
                    </span>
                  </div>

                  <span className="shrink-0 text-[9px] font-bold uppercase tracking-[0.1em] text-zinc-500">
                    {
                      domainAbilities.length
                    }{" "}
                    records
                  </span>

                  <ChevronDown
                    size={17}
                    className={`shrink-0 text-cyan-400 transition-transform ${
                      expanded
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {expanded && (
                  <div className="border-t border-cyan-900/40">
                    {domainAbilities.map(
                      (
                        ability,
                        index
                      ) => (
                        <MobileAbilityRecord
                          key={`${ability.name}-${index}`}
                          character={
                            character
                          }
                          ability={
                            ability
                          }
                          domain={
                            domain
                          }
                          index={
                            index
                          }
                          selectedBooks={
                            selectedBooks
                          }
                          activeStage={
                            activeStage
                          }
                          expandedAbilities={
                            expandedAbilities
                          }
                          toggleAbility={
                            toggleAbility
                          }
                          setSelectedAbility={
                            setSelectedAbility
                          }
                        />
                      )
                    )}
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default MobileAbilityDomains;