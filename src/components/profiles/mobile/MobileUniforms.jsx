import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
  Expand,
  RotateCcw,
  X,
} from "lucide-react";

import {
  CURRENT_RELEASE,
  filterRecords,
} from "../../../utils/profileRecordAccess";

const MobileUniforms = ({
  character,
  activeStage = "beginning",
  selectedBooks = [1],
}) => {
  const uniforms =
    useMemo(
      () =>
        filterRecords(
          character?.uniforms,
          activeStage,
          selectedBooks
        ),
      [
        character?.uniforms,
        activeStage,
        selectedBooks,
      ]
    );

  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  const [
    isBackView,
    setIsBackView,
  ] = useState(false);

  const [
    enlarged,
    setEnlarged,
  ] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
    setIsBackView(false);
    setEnlarged(false);
  }, [
    character?.slug,
    activeStage,
  ]);

  useEffect(() => {
    if (
      activeIndex >=
      uniforms.length
    ) {
      setActiveIndex(0);
      setIsBackView(false);
    }
  }, [
    activeIndex,
    uniforms.length,
  ]);

  if (
    uniforms.length === 0
  ) {
    return null;
  }

  const currentUniform =
    uniforms[
      activeIndex
    ];

  if (!currentUniform) {
    return null;
  }

  const frontImage =
    currentUniform?.images?.[
      0
    ] || null;

  const backImage =
    currentUniform?.images?.[
      1
    ] || null;

  const hasBackView =
    Boolean(
      backImage
    );

  const hasMultiple =
    uniforms.length > 1;

  const currentImage =
    isBackView &&
    backImage
      ? backImage
      : frontImage;

  const handlePrevious =
    () => {
      if (!hasMultiple) {
        return;
      }

      setActiveIndex(
        (current) =>
          current === 0
            ? uniforms.length -
              1
            : current - 1
      );

      setIsBackView(false);
    };

  const handleNext = () => {
    if (!hasMultiple) {
      return;
    }

    setActiveIndex(
      (current) =>
        (current + 1) %
        uniforms.length
    );

    setIsBackView(false);
  };

  const handleSelect = (
    index
  ) => {
    setActiveIndex(index);
    setIsBackView(false);
  };

  const toggleView = () => {
    if (!hasBackView) {
      return;
    }

    setIsBackView(
      (current) =>
        !current
    );
  };

  return (
    <>
      <section className="overflow-hidden rounded-lg border border-yellow-600/60 bg-zinc-950">
        <div className="border-b border-yellow-600/25 bg-yellow-500/[0.04] px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
            S.T.A.T.I.C.
            Equipment Archive
          </p>

          <div className="mt-2 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-base font-black uppercase tracking-[0.12em] text-yellow-300">
                Uniforms
              </h2>

              <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-zinc-500">
                Visual & material
                records
              </p>
            </div>

            <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-yellow-600">
              {CURRENT_RELEASE}
            </span>
          </div>
        </div>

        {hasMultiple && (
          <div className="flex gap-2 overflow-x-auto border-b border-yellow-700/25 bg-black px-3 py-3">
            {uniforms.map(
              (
                uniform,
                index
              ) => {
                const active =
                  index ===
                  activeIndex;

                return (
                  <button
                    key={
                      uniform.id ||
                      `${uniform.name}-${index}`
                    }
                    type="button"
                    onClick={() =>
                      handleSelect(
                        index
                      )
                    }
                    className={`shrink-0 rounded border px-3 py-2 text-[9px] font-bold uppercase tracking-[0.1em] transition ${
                      active
                        ? "border-yellow-400 bg-yellow-400 text-black"
                        : "border-yellow-800/60 bg-black text-yellow-300"
                    }`}
                  >
                    {uniform.name ||
                      `Uniform ${
                        index +
                        1
                      }`}
                  </button>
                );
              }
            )}
          </div>
        )}

        <div className="border-b border-cyan-800/30 bg-black">
          <div className="flex items-center justify-between border-b border-cyan-800/25 px-4 py-3">
            <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-cyan-400">
              Visual Record
            </span>

            <span className="text-[9px] uppercase tracking-[0.12em] text-zinc-500">
              {isBackView
                ? "Rear"
                : "Front"}
            </span>
          </div>

          <div
            className={`relative flex min-h-[300px] items-center justify-center p-4 ${
              currentImage
                ? "cursor-pointer"
                : ""
            }`}
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(0,255,255,0.055) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to right,
                  rgba(0,255,255,0.055) 1px,
                  transparent 1px
                )
              `,
              backgroundSize:
                "28px 28px",
            }}
            onClick={() => {
              if (
                currentImage
              ) {
                setEnlarged(
                  true
                );
              }
            }}
          >
            {currentImage ? (
              <>
                <img
                  src={
                    currentImage
                  }
                  alt={`${currentUniform.name || "Uniform"} ${
                    isBackView
                      ? "back"
                      : "front"
                  } view`}
                  className="max-h-[360px] w-full object-contain"
                />

                <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded border border-cyan-700/50 bg-black/85 px-2 py-1.5 text-[8px] font-bold uppercase tracking-[0.1em] text-cyan-300">
                  <Expand
                    size={11}
                  />

                  Expand
                </span>
              </>
            ) : (
              <div className="px-5 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                  Visual record
                  unavailable
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.12em] text-zinc-700">
                  Image pending
                  archive upload
                </p>
              </div>
            )}
          </div>

          {(hasBackView ||
            hasMultiple) && (
            <div className="grid border-t border-cyan-800/25 bg-black">
              <div
                className={`grid ${
                  hasBackView &&
                  hasMultiple
                    ? "grid-cols-3"
                    : hasMultiple
                      ? "grid-cols-2"
                      : "grid-cols-1"
                }`}
              >
                {hasMultiple && (
                  <button
                    type="button"
                    onClick={
                      handlePrevious
                    }
                    className="flex min-h-[46px] items-center justify-center gap-1 border-r border-cyan-900/30 px-2 text-[9px] font-bold uppercase tracking-[0.08em] text-green-300"
                  >
                    <ChevronLeft
                      size={14}
                    />

                    Prev
                  </button>
                )}

                {hasBackView && (
                  <button
                    type="button"
                    onClick={
                      toggleView
                    }
                    className="flex min-h-[46px] items-center justify-center gap-1.5 border-r border-cyan-900/30 px-2 text-[9px] font-bold uppercase tracking-[0.08em] text-cyan-300"
                  >
                    <RotateCcw
                      size={13}
                    />

                    {isBackView
                      ? "Front"
                      : "Rear"}
                  </button>
                )}

                {hasMultiple && (
                  <button
                    type="button"
                    onClick={
                      handleNext
                    }
                    className="flex min-h-[46px] items-center justify-center gap-1 px-2 text-[9px] font-bold uppercase tracking-[0.08em] text-green-300"
                  >
                    Next

                    <ChevronRight
                      size={14}
                    />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="px-4 py-5">
          <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-zinc-500">
            Uniform Record
          </p>

          <h3 className="mt-1 text-base font-bold uppercase tracking-[0.08em] text-yellow-200">
            {currentUniform.name ||
              "Unnamed Uniform"}
          </h3>

          {currentUniform.description ? (
            <p className="mt-4 whitespace-pre-line font-mono text-sm leading-7 text-zinc-300">
              {
                currentUniform.description
              }
            </p>
          ) : (
            <p className="mt-4 text-[10px] uppercase tracking-[0.12em] text-zinc-600">
              Description pending
              archive review.
            </p>
          )}

          {currentUniform.label && (
            <div className="mt-5 border-t border-yellow-800/25 pt-4">
              <span className="block text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-500">
                Archive
                Designation
              </span>

              <span className="mt-1 block text-xs font-bold uppercase tracking-[0.08em] text-green-400">
                {
                  currentUniform.label
                }
              </span>
            </div>
          )}
        </div>
      </section>

      {enlarged &&
        currentImage && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-3 backdrop-blur-sm"
            onClick={() =>
              setEnlarged(
                false
              )
            }
          >
            <div
              className="relative w-full max-w-xl overflow-hidden rounded-lg border border-yellow-500/60 bg-black"
              onClick={(
                event
              ) =>
                event.stopPropagation()
              }
            >
              <div className="flex items-center justify-between border-b border-yellow-700/30 px-4 py-3">
                <div className="min-w-0">
                  <p className="text-[8px] uppercase tracking-[0.14em] text-zinc-500">
                    Enlarged Visual
                    Record
                  </p>

                  <h3 className="mt-1 truncate text-xs font-bold uppercase tracking-[0.1em] text-yellow-300">
                    {
                      currentUniform.name
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
                  aria-label="Close enlarged uniform view"
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
                      rgba(0,255,255,0.055) 1px,
                      transparent 1px
                    ),
                    linear-gradient(
                      to right,
                      rgba(0,255,255,0.055) 1px,
                      transparent 1px
                    )
                  `,
                  backgroundSize:
                    "28px 28px",
                }}
              >
                <img
                  src={
                    currentImage
                  }
                  alt={`${currentUniform.name} ${
                    isBackView
                      ? "back"
                      : "front"
                  } view`}
                  className="max-h-[70vh] max-w-full object-contain"
                />
              </div>

              {hasBackView && (
                <button
                  type="button"
                  onClick={
                    toggleView
                  }
                  className="flex min-h-[48px] w-full items-center justify-center gap-2 border-t border-cyan-800/30 text-[9px] font-bold uppercase tracking-[0.1em] text-cyan-300"
                >
                  <RotateCcw
                    size={14}
                  />

                  {isBackView
                    ? "Show Front"
                    : "Show Rear"}
                </button>
              )}
            </div>
          </div>
        )}
    </>
  );
};

export default MobileUniforms;