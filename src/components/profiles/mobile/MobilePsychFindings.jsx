import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const MobilePsychFindings = ({
  character,
}) => {
  const profile =
    character?.psychProfile;

  const findings =
    useMemo(() => {
      const notes = Array.isArray(
        profile?.notes
      )
        ? profile.notes
        : [];

      const traits = Array.isArray(
        profile?.traits
      )
        ? profile.traits
        : [];

      const behavioral =
        notes.map(
          (
            note,
            index
          ) => ({
            id: `behavior-${index}`,

            type:
              "Observed Pattern",

            name: `Behavioral Finding ${String(
              index + 1
            ).padStart(
              2,
              "0"
            )}`,

            description:
              note,
          })
        );

      const personality =
        traits.map(
          (
            trait,
            index
          ) => ({
            id: `trait-${index}`,

            type:
              "Personality Analysis",

            name:
              trait?.name ||
              `Trait ${String(
                index + 1
              ).padStart(
                2,
                "0"
              )}`,

            description:
              trait?.description ||
              "No additional analysis available.",
          })
        );

      return [
        ...behavioral,
        ...personality,
      ];
    }, [profile]);

  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [character?.slug]);

  useEffect(() => {
    if (
      findings.length > 0 &&
      activeIndex >=
        findings.length
    ) {
      setActiveIndex(0);
    }
  }, [
    findings,
    activeIndex,
  ]);

  if (
    findings.length === 0
  ) {
    return null;
  }

  const activeFinding =
    findings[
      activeIndex
    ];

  const goPrevious = () => {
    setActiveIndex(
      (current) =>
        current === 0
          ? findings.length - 1
          : current - 1
    );
  };

  const goNext = () => {
    setActiveIndex(
      (current) =>
        current ===
        findings.length - 1
          ? 0
          : current + 1
    );
  };

  return (
    <section className="overflow-hidden rounded-lg border border-yellow-700/55 bg-zinc-950">
      {/* SECTION HEADER */}

      <div className="border-b border-yellow-700/25 bg-yellow-500/[0.03] px-4 py-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
          Behavioral &
          Personality Analysis
        </p>

        <div className="mt-2 flex items-end justify-between gap-4">
          <h2 className="text-base font-black uppercase tracking-[0.12em] text-yellow-300">
            Findings
          </h2>

          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-500">
            {String(
              activeIndex + 1
            ).padStart(
              2,
              "0"
            )}
            {" / "}
            {String(
              findings.length
            ).padStart(
              2,
              "0"
            )}
          </span>
        </div>
      </div>

      {/* ACTIVE FINDING */}

      <div className="bg-black">
        <div className="border-b border-yellow-800/30 px-4 py-4">
          <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-zinc-500">
            {
              activeFinding.type
            }
          </span>

          <h3 className="mt-1 text-sm font-bold uppercase leading-6 tracking-[0.08em] text-yellow-200">
            {
              activeFinding.name
            }
          </h3>
        </div>

        <div className="min-h-[170px] px-4 py-5">
          <p className="font-mono text-sm leading-7 text-zinc-300">
            {
              activeFinding.description
            }
          </p>
        </div>
      </div>

      {/* DOT NAV */}

      {findings.length > 1 && (
        <>
          <div className="flex flex-wrap items-center justify-center gap-2 border-t border-yellow-900/25 bg-black px-4 py-4">
            {findings.map(
              (
                finding,
                index
              ) => (
                <button
                  key={
                    finding.id
                  }
                  type="button"
                  onClick={() =>
                    setActiveIndex(
                      index
                    )
                  }
                  className={`h-2 rounded-full transition-all ${
                    index ===
                    activeIndex
                      ? "w-6 bg-yellow-400"
                      : "w-2 bg-zinc-700"
                  }`}
                  aria-label={`View psychological finding ${
                    index + 1
                  }`}
                  aria-current={
                    index ===
                    activeIndex
                      ? "true"
                      : undefined
                  }
                />
              )
            )}
          </div>

          {/* CONTROLS */}

          <div className="grid grid-cols-2 border-t border-yellow-800/30">
            <button
              type="button"
              onClick={
                goPrevious
              }
              className="flex min-h-[48px] items-center justify-center gap-2 border-r border-yellow-800/30 bg-black px-3 text-[9px] font-bold uppercase tracking-[0.12em] text-yellow-300 transition hover:bg-yellow-500/10"
            >
              <ChevronLeft
                size={15}
              />

              Previous
            </button>

            <button
              type="button"
              onClick={
                goNext
              }
              className="flex min-h-[48px] items-center justify-center gap-2 bg-black px-3 text-[9px] font-bold uppercase tracking-[0.12em] text-yellow-300 transition hover:bg-yellow-500/10"
            >
              Next

              <ChevronRight
                size={15}
              />
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default MobilePsychFindings;