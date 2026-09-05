import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from "lucide-react";

import {
  filterRecords,
} from "../../../utils/profileRecordAccess";

const MobileTools = ({
  character,
  activeStage = "beginning",
  selectedBooks = [1],
}) => {
  const tools =
    useMemo(
      () =>
        filterRecords(
          character?.tools,
          activeStage,
          selectedBooks
        ),
      [
        character?.tools,
        activeStage,
        selectedBooks,
      ]
    );

  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  const [
    enlarged,
    setEnlarged,
  ] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
    setEnlarged(false);
  }, [
    character?.slug,
    activeStage,
  ]);

  useEffect(() => {
    if (
      activeIndex >=
      tools.length
    ) {
      setActiveIndex(0);
    }
  }, [
    activeIndex,
    tools.length,
  ]);

  if (
    tools.length === 0
  ) {
    return null;
  }

  const currentTool =
    tools[
      activeIndex
    ];

  if (!currentTool) {
    return null;
  }

  const hasMultiple =
    tools.length > 1;

  const hasImage =
    Boolean(
      currentTool.image
    );

  const handlePrevious =
    () => {
      if (!hasMultiple) {
        return;
      }

      setActiveIndex(
        (current) =>
          current === 0
            ? tools.length -
              1
            : current - 1
      );
    };

  const handleNext = () => {
    if (!hasMultiple) {
      return;
    }

    setActiveIndex(
      (current) =>
        (current + 1) %
        tools.length
    );
  };

  return (
    <>
      <section className="overflow-hidden rounded-lg border border-green-700/60 bg-zinc-950">
        <div className="border-b border-green-700/25 bg-green-950/[0.08] px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
            S.T.A.T.I.C.
            Equipment Archive
          </p>

          <div className="mt-2 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-base font-black uppercase tracking-[0.12em] text-green-300">
                Tools
              </h2>

              <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-zinc-500">
                Integrated
                equipment
              </p>
            </div>

            <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-green-600">
              {String(
                activeIndex + 1
              ).padStart(
                2,
                "0"
              )}
              {" / "}
              {String(
                tools.length
              ).padStart(
                2,
                "0"
              )}
            </span>
          </div>
        </div>

        <div
          className={`relative flex min-h-[240px] items-center justify-center border-b border-green-800/30 bg-black p-4 ${
            hasImage
              ? "cursor-pointer"
              : ""
          }`}
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(0,255,255,0.045) 1px,
                transparent 1px
              ),
              linear-gradient(
                to right,
                rgba(0,255,255,0.045) 1px,
                transparent 1px
              )
            `,
            backgroundSize:
              "28px 28px",
          }}
          onClick={() => {
            if (hasImage) {
              setEnlarged(
                true
              );
            }
          }}
        >
          {hasImage ? (
            <>
              <img
                src={
                  currentTool.image
                }
                alt={
                  currentTool.name ||
                  "Equipment"
                }
                className="max-h-[280px] w-full object-contain"
              />

              <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded border border-cyan-700/50 bg-black/85 px-2 py-1.5 text-[8px] font-bold uppercase tracking-[0.1em] text-cyan-300">
                <Expand
                  size={11}
                />

                Expand
              </span>
            </>
          ) : (
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                Equipment visual
                unavailable
              </p>
            </div>
          )}
        </div>

        <div className="px-4 py-5">
          <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-zinc-500">
            Equipment File
          </p>

          <h3 className="mt-1 text-base font-bold uppercase tracking-[0.08em] text-green-200">
            {currentTool.name ||
              "Equipment"}
          </h3>

          {currentTool.description ? (
            <p className="mt-4 whitespace-pre-line font-mono text-sm leading-7 text-zinc-300">
              {
                currentTool.description
              }
            </p>
          ) : (
            <p className="mt-4 text-[10px] uppercase tracking-[0.12em] text-zinc-600">
              Description pending
              archive review.
            </p>
          )}
        </div>

        {hasMultiple && (
          <div className="grid grid-cols-2 border-t border-green-800/30 bg-black">
            <button
              type="button"
              onClick={
                handlePrevious
              }
              className="flex min-h-[48px] items-center justify-center gap-2 border-r border-green-800/30 text-[9px] font-bold uppercase tracking-[0.1em] text-green-300"
            >
              <ChevronLeft
                size={15}
              />

              Previous
            </button>

            <button
              type="button"
              onClick={
                handleNext
              }
              className="flex min-h-[48px] items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-[0.1em] text-green-300"
            >
              Next

              <ChevronRight
                size={15}
              />
            </button>
          </div>
        )}
      </section>

      {enlarged &&
        hasImage && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-3 backdrop-blur-sm"
            onClick={() =>
              setEnlarged(
                false
              )
            }
          >
            <div
              className="w-full max-w-xl overflow-hidden rounded-lg border border-green-600/60 bg-black"
              onClick={(
                event
              ) =>
                event.stopPropagation()
              }
            >
              <div className="flex items-center justify-between border-b border-green-800/30 px-4 py-3">
                <div className="min-w-0">
                  <p className="text-[8px] uppercase tracking-[0.14em] text-zinc-500">
                    Enlarged
                    Equipment Record
                  </p>

                  <h3 className="mt-1 truncate text-xs font-bold uppercase tracking-[0.1em] text-green-300">
                    {
                      currentTool.name
                    }
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setEnlarged(
                      false
                    )
                  }
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-zinc-700 text-zinc-300"
                  aria-label="Close enlarged tool view"
                >
                  <X
                    size={18}
                  />
                </button>
              </div>

              <div
                className="flex min-h-[420px] items-center justify-center p-4"
                style={{
                  backgroundImage: `
                    linear-gradient(
                      rgba(0,255,255,0.05) 1px,
                      transparent 1px
                    ),
                    linear-gradient(
                      to right,
                      rgba(0,255,255,0.05) 1px,
                      transparent 1px
                    )
                  `,
                  backgroundSize:
                    "28px 28px",
                }}
              >
                <img
                  src={
                    currentTool.image
                  }
                  alt={
                    currentTool.name ||
                    "Equipment"
                  }
                  className="max-h-[70vh] max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default MobileTools;