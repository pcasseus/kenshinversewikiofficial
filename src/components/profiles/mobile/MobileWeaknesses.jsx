import React, {
  useState,
} from "react";

import {
  ChevronDown,
  ChevronRight,
  TriangleAlert,
} from "lucide-react";

import {
  prepareWeaknessForModal,
} from "./mobileCapabilityUtils";

import {
  filterRecords,
} from "../../../utils/profileRecordAccess";

const MobileWeaknesses = ({
  humanRecord = false,
  raceDisplay,
  weaknessDomains,
  selectedBooks,
  activeStage = "beginning",
  setSelectedAbility,
}) => {
  const [
    showWeaknesses,
    setShowWeaknesses,
  ] = useState(false);

  if (
    weaknessDomains.length ===
    0
  ) {
    return null;
  }

  const totalWeaknesses =
    weaknessDomains.reduce(
      (
        total,
        [, weaknesses]
      ) =>
        total +
        weaknesses.length,
      0
    );

  const sectionTitle =
    humanRecord
      ? "Limitations & Vulnerabilities"
      : "Weaknesses";

  const archiveLabel =
    humanRecord
      ? "Personnel Risk Analysis"
      : "Vulnerability Analysis";

  return (
    <section className="overflow-hidden rounded-lg border border-red-700/60 bg-zinc-950">
      <button
        type="button"
        onClick={() =>
          setShowWeaknesses(
            (current) =>
              !current
          )
        }
        className="flex w-full items-center gap-4 bg-red-950/[0.08] px-4 py-4 text-left"
      >
        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-zinc-500">
            S.T.A.T.I.C.{" "}
            {archiveLabel}
          </p>

          <h2 className="mt-1 text-sm font-bold uppercase tracking-[0.12em] text-red-400">
            {sectionTitle}
          </h2>
        </div>

        <span className="shrink-0 text-[9px] font-bold uppercase tracking-[0.1em] text-red-500">
          {totalWeaknesses}{" "}
          records
        </span>

        <ChevronDown
          size={17}
          className={`shrink-0 text-red-400 transition-transform ${
            showWeaknesses
              ? "rotate-180"
              : ""
          }`}
        />
      </button>

      {showWeaknesses && (
        <div className="border-t border-red-800/40">
          {weaknessDomains.map(
            ([
              domain,
              domainWeaknesses,
            ]) => (
              <div
                key={domain}
                className="border-b border-red-900/30 last:border-b-0"
              >
                <div className="bg-black px-4 py-3">
                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-red-500">
                    {domain}
                  </span>
                </div>

                {domainWeaknesses.map(
                  (
                    weakness,
                    index
                  ) => {
                    const critical =
                      weakness.critical ===
                      true;

                    const visibleSubs =
                      filterRecords(
                        weakness?.subWeaknesses,
                        activeStage,
                        selectedBooks
                      );

                    return (
                      <div
                        key={`${weakness.name}-${index}`}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedAbility(
                              prepareWeaknessForModal(
                                weakness,
                                domain,
                                raceDisplay
                              )
                            )
                          }
                          className="flex min-h-[52px] w-full items-center gap-3 border-t border-red-900/25 bg-[#050505] px-4 py-3 text-left"
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-red-900/60 bg-black font-mono text-[9px] text-red-500">
                            {String(
                              index +
                                1
                            ).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <span className="min-w-0 flex-1 text-sm leading-5 text-red-100">
                            {
                              weakness.name
                            }
                          </span>

                          {critical && (
                            <span className="flex shrink-0 items-center gap-1 text-[8px] font-bold uppercase tracking-[0.1em] text-red-400">
                              <TriangleAlert
                                size={
                                  11
                                }
                              />
                              Critical
                            </span>
                          )}

                          <ChevronRight
                            size={16}
                            className="shrink-0 text-red-600"
                          />
                        </button>

                        {visibleSubs.length >
                          0 && (
                          <div className="border-t border-red-900/20 bg-black/30 pl-8">
                            {visibleSubs.map(
                              (
                                sub,
                                subIndex
                              ) => (
                                <button
                                  key={`${sub.name}-${subIndex}`}
                                  type="button"
                                  onClick={() =>
                                    setSelectedAbility(
                                      prepareWeaknessForModal(
                                        sub,
                                        domain,
                                        raceDisplay
                                      )
                                    )
                                  }
                                  className="flex w-full items-center gap-3 border-b border-red-900/20 px-4 py-3 text-left last:border-b-0"
                                >
                                  <span className="min-w-0 flex-1 text-xs leading-5 text-red-200">
                                    {
                                      sub.name
                                    }
                                  </span>

                                  <ChevronRight
                                    size={
                                      14
                                    }
                                    className="shrink-0 text-red-700"
                                  />
                                </button>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            )
          )}
        </div>
      )}
    </section>
  );
};

export default MobileWeaknesses;