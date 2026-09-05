import React from "react";

import {
  ChevronDown,
  ChevronRight,
  TriangleAlert,
} from "lucide-react";

import {
  getVisibleSubAbilities,
  isSpoilerEntry,
  normalizeClassification,
  prepareAbilityForModal,
} from "./mobileCapabilityUtils";

const MobileAbilityRecord = ({
  character,
  ability,
  domain,
  index,
  selectedBooks,
  expandedAbilities,
  toggleAbility,
  setSelectedAbility,
  parentPath = null,
  depth = 0,
  isSubAbility = false,
}) => {
  const visibleSubs =
    getVisibleSubAbilities(
      ability,
      selectedBooks
    );

  const hasSub =
    visibleSubs.length > 0;

  const abilityKey =
    parentPath
      ? `${parentPath}::${ability.name}`
      : `${domain}::${ability.name}`;

  const expanded =
    expandedAbilities.has(
      abilityKey
    );

  const spoiler =
    isSpoilerEntry(ability);

  const leftPadding =
    isSubAbility
      ? 12 +
        Math.min(
          depth * 12,
          36
        )
      : 16;

  return (
    <div className="min-w-0">
      <div className="relative">
        <button
          type="button"
          onClick={() =>
            setSelectedAbility(
              prepareAbilityForModal(
                character,
                ability,
                domain
              )
            )
          }
          className={`flex min-h-[52px] w-full items-center gap-3 border-b text-left transition ${
            spoiler
              ? "border-amber-900/40 bg-amber-950/[0.05]"
              : "border-cyan-900/30 bg-[#050708]"
          }`}
          style={{
            paddingTop: "12px",
            paddingBottom: "12px",
            paddingLeft: `${leftPadding}px`,
            paddingRight: hasSub
              ? "48px"
              : "16px",
          }}
        >
          {!isSubAbility && (
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-cyan-900/60 bg-black font-mono text-[9px] text-cyan-600">
              {String(
                index + 1
              ).padStart(2, "0")}
            </span>
          )}

          <span className="min-w-0 flex-1">
            <span
              className={`block leading-5 text-cyan-100 ${
                isSubAbility
                  ? "text-xs"
                  : "text-sm"
              }`}
            >
              {ability.name}
            </span>

            {!isSubAbility &&
              ability.classification && (
                <span className="mt-0.5 block text-[8px] font-bold uppercase tracking-[0.1em] text-zinc-600">
                  {normalizeClassification(
                    ability.classification
                  )}
                </span>
              )}
          </span>

          {spoiler && (
            <span className="flex shrink-0 items-center gap-1 text-[8px] font-bold uppercase tracking-[0.1em] text-amber-400">
              <TriangleAlert
                size={11}
              />

              Spoiler
            </span>
          )}

          {!hasSub && (
            <ChevronRight
              size={
                isSubAbility
                  ? 14
                  : 16
              }
              className="shrink-0 text-cyan-600"
            />
          )}
        </button>

        {hasSub && (
          <button
            type="button"
            onClick={() =>
              toggleAbility(
                abilityKey
              )
            }
            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-cyan-300"
            aria-label={`${
              expanded
                ? "Collapse"
                : "Expand"
            } ${ability.name}`}
          >
            <ChevronDown
              size={17}
              className={`transition-transform ${
                expanded
                  ? "rotate-180"
                  : ""
              }`}
            />
          </button>
        )}
      </div>

      {hasSub && expanded && (
        <div
          className={`bg-black/40 ${
            isSubAbility
              ? "border-l border-cyan-500/20"
              : "border-t border-cyan-900/25 pl-4"
          }`}
        >
          {visibleSubs.map(
            (
              sub,
              subIndex
            ) => (
              <MobileAbilityRecord
                key={`${abilityKey}::${sub.name}-${subIndex}`}
                character={
                  character
                }
                ability={sub}
                domain={domain}
                index={subIndex}
                selectedBooks={
                  selectedBooks
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
                parentPath={
                  abilityKey
                }
                depth={depth + 1}
                isSubAbility
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default MobileAbilityRecord;