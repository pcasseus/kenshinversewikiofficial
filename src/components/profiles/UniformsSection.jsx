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

import ToolsSection from "./ToolsSection";

import {
  filterRecords,
} from "../../utils/profileRecordAccess";

const UniformsSection = ({
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
    activeUniformIndex,
    setActiveUniformIndex,
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
    setActiveUniformIndex(
      0
    );

    setIsBackView(false);

    setEnlarged(false);
  }, [
    character?.slug,
    activeStage,
  ]);

  useEffect(() => {
    if (
      activeUniformIndex >=
      uniforms.length
    ) {
      setActiveUniformIndex(
        0
      );

      setIsBackView(
        false
      );
    }
  }, [
    activeUniformIndex,
    uniforms.length,
  ]);

  if (
    uniforms.length === 0 &&
    tools.length === 0
  ) {
    return null;
  }

  const currentUniform =
    uniforms[
      activeUniformIndex
    ] || null;

  const frontImage =
    currentUniform?.images?.[
      0
    ] || null;

  const backImage =
    currentUniform?.images?.[
      1
    ] || null;

  const currentImage =
    isBackView &&
    backImage
      ? backImage
      : frontImage;

  const hasMultipleUniforms =
    uniforms.length > 1;

  const hasBackView =
    Boolean(
      backImage
    );

  const handlePrevUniform =
    () => {
      if (
        !hasMultipleUniforms
      ) {
        return;
      }

      setActiveUniformIndex(
        (prev) =>
          prev === 0
            ? uniforms.length -
              1
            : prev - 1
      );

      setIsBackView(
        false
      );
    };

  const handleNextUniform =
    () => {
      if (
        !hasMultipleUniforms
      ) {
        return;
      }

      setActiveUniformIndex(
        (prev) =>
          (prev + 1) %
          uniforms.length
      );

      setIsBackView(
        false
      );
    };

  const handleUniformSelect =
    (index) => {
      setActiveUniformIndex(
        index
      );

      setIsBackView(
        false
      );
    };

  const handleToggleView =
    () => {
      if (
        !hasBackView
      ) {
        return;
      }

      setIsBackView(
        (prev) =>
          !prev
      );
    };

  const filteredCharacter = {
    ...character,
    tools,
  };

  return (
    <section className="mb-10 overflow-hidden rounded-lg border border-yellow-500/60 bg-zinc-950">
      {/* SECTION HEADER */}

      <div className="flex flex-col gap-2 border-b border-yellow-500/30 bg-yellow-500/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-1 text-[9px] uppercase tracking-[0.24em] text-zinc-600">
            S.T.A.T.I.C.
            Equipment Archive
          </p>

          <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
            Equipment &
            Uniforms
          </h2>
        </div>

        <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">
          KVI MATERIAL RECORD
        </span>
      </div>

      {/* UNIFORMS */}

      {uniforms.length >
        0 &&
        currentUniform && (
          <div className="p-5 sm:p-6">
            <div className="mb-5 flex flex-col gap-3 border-b border-yellow-500/20 pb-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-1 text-[9px] uppercase tracking-[0.22em] text-zinc-600">
                  Uniform Record
                </p>

                <h3 className="text-base font-bold uppercase tracking-[0.15em] text-yellow-300">
                  {currentUniform.name ||
                    "Unnamed Uniform"}
                </h3>
              </div>

              {uniforms.length >
                1 && (
                <div className="flex flex-wrap gap-2">
                  {uniforms.map(
                    (
                      uniform,
                      index
                    ) => (
                      <button
                        key={
                          uniform.id ||
                          `${uniform.name}-${index}`
                        }
                        type="button"
                        onClick={() =>
                          handleUniformSelect(
                            index
                          )
                        }
                        className={`rounded border px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] transition ${
                          index ===
                          activeUniformIndex
                            ? "border-yellow-400 bg-yellow-400 text-black"
                            : "border-yellow-700/70 bg-black text-yellow-300 hover:border-yellow-400 hover:bg-yellow-500/10"
                        }`}
                      >
                        {uniform.name ||
                          `Uniform ${
                            index +
                            1
                          }`}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(300px,0.8fr)_minmax(0,1.2fr)]">
              {/* VISUAL RECORD */}

              <div className="min-w-0 overflow-hidden rounded-lg border border-cyan-500/40 bg-black">
                <div className="flex items-center justify-between border-b border-cyan-500/20 px-4 py-3">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                    Visual Record
                  </span>

                  <span className="text-[9px] uppercase tracking-widest text-zinc-600">
                    {isBackView
                      ? "Rear"
                      : "Front"}
                  </span>
                </div>

                <div
                  className={`relative flex min-h-[360px] items-center justify-center overflow-hidden p-5 ${
                    currentImage
                      ? "cursor-pointer"
                      : ""
                  }`}
                  style={{
                    backgroundColor:
                      "#000",

                    backgroundImage: `
                      linear-gradient(rgba(0,255,255,0.07) 1px, transparent 1px),
                      linear-gradient(to right, rgba(0,255,255,0.07) 1px, transparent 1px)
                    `,

                    backgroundSize:
                      "30px 30px",
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
                        className="max-h-[420px] w-full object-contain"
                      />

                      <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded border border-cyan-500/30 bg-black/80 px-2 py-1 text-[9px] uppercase tracking-widest text-cyan-300">
                        <Expand
                          size={
                            11
                          }
                        />

                        Expand
                      </div>
                    </>
                  ) : (
                    <div className="px-6 text-center">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-600">
                        Visual Record
                        Unavailable
                      </p>

                      <p className="mt-2 text-[9px] uppercase tracking-widest text-zinc-700">
                        Image pending
                        archive upload
                      </p>
                    </div>
                  )}
                </div>

                {(hasBackView ||
                  hasMultipleUniforms) && (
                  <div className="flex flex-wrap items-center justify-center gap-2 border-t border-cyan-500/20 px-4 py-3">
                    {hasMultipleUniforms && (
                      <button
                        type="button"
                        onClick={
                          handlePrevUniform
                        }
                        className="flex items-center gap-1 rounded px-3 py-2 text-[10px] uppercase tracking-widest text-green-300 transition hover:bg-green-500/10 hover:text-green-200"
                      >
                        <ChevronLeft
                          size={
                            14
                          }
                        />

                        Previous
                      </button>
                    )}

                    {hasBackView && (
                      <button
                        type="button"
                        onClick={
                          handleToggleView
                        }
                        className="flex items-center gap-2 rounded border border-cyan-700/60 px-3 py-2 text-[10px] uppercase tracking-widest text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/10"
                      >
                        <RotateCcw
                          size={
                            13
                          }
                        />

                        {isBackView
                          ? "Show Front"
                          : "Show Back"}
                      </button>
                    )}

                    {hasMultipleUniforms && (
                      <button
                        type="button"
                        onClick={
                          handleNextUniform
                        }
                        className="flex items-center gap-1 rounded px-3 py-2 text-[10px] uppercase tracking-widest text-green-300 transition hover:bg-green-500/10 hover:text-green-200"
                      >
                        Next

                        <ChevronRight
                          size={
                            14
                          }
                        />
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* UNIFORM FILE */}

              <div className="min-w-0 overflow-hidden rounded-lg border border-yellow-500/30 bg-black">
                <div className="border-b border-yellow-500/20 px-5 py-4">
                  <p className="text-[9px] uppercase tracking-[0.22em] text-zinc-600">
                    Equipment File
                  </p>

                  <h4 className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-yellow-300">
                    {currentUniform.name ||
                      "Uniform"}
                  </h4>
                </div>

                <div className="p-5">
                  {currentUniform.description ? (
                    <p className="whitespace-pre-line font-mono text-sm leading-7 text-zinc-300">
                      {
                        currentUniform.description
                      }
                    </p>
                  ) : (
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                      Description
                      pending archive
                      review.
                    </p>
                  )}

                  {currentUniform.label && (
                    <div className="mt-6 border-t border-yellow-500/20 pt-4">
                      <span className="block text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                        Archive
                        Designation
                      </span>

                      <span className="mt-1 block text-xs uppercase tracking-wider text-green-400">
                        {
                          currentUniform.label
                        }
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      {/* TOOLS */}

      {tools.length > 0 && (
        <ToolsSection
          character={
            filteredCharacter
          }
        />
      )}

      {/* ENLARGED UNIFORM VIEW */}

      {enlarged &&
        currentImage &&
        currentUniform && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() =>
              setEnlarged(
                false
              )
            }
          >
            <div
              className="relative w-full max-w-5xl overflow-hidden rounded-lg border border-yellow-500/60 bg-black"
              onClick={(
                event
              ) =>
                event.stopPropagation()
              }
            >
              <div className="flex items-center justify-between border-b border-yellow-500/30 px-4 py-3 sm:px-5">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                    Enlarged Visual
                    Record
                  </p>

                  <h3 className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
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
                  className="flex h-9 w-9 items-center justify-center rounded border border-zinc-700 text-zinc-400 transition hover:border-yellow-400 hover:text-yellow-300"
                  aria-label="Close enlarged uniform view"
                >
                  <X
                    size={18}
                  />
                </button>
              </div>

              <div
                className="flex min-h-[420px] items-center justify-center p-5 sm:p-8"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,255,255,0.06) 1px, transparent 1px),
                    linear-gradient(to right, rgba(0,255,255,0.06) 1px, transparent 1px)
                  `,

                  backgroundSize:
                    "30px 30px",
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
                  className="max-h-[72vh] max-w-full object-contain"
                />
              </div>

              {(hasBackView ||
                hasMultipleUniforms) && (
                <div className="flex flex-wrap items-center justify-center gap-3 border-t border-yellow-500/20 px-4 py-4">
                  {hasMultipleUniforms && (
                    <button
                      type="button"
                      onClick={
                        handlePrevUniform
                      }
                      className="flex items-center gap-1 px-3 py-2 text-[10px] uppercase tracking-widest text-green-300 hover:text-green-200"
                    >
                      <ChevronLeft
                        size={
                          14
                        }
                      />

                      Previous
                    </button>
                  )}

                  {hasBackView && (
                    <button
                      type="button"
                      onClick={
                        handleToggleView
                      }
                      className="flex items-center gap-2 rounded border border-cyan-700/60 px-3 py-2 text-[10px] uppercase tracking-widest text-cyan-300 hover:border-cyan-400"
                    >
                      <RotateCcw
                        size={
                          13
                        }
                      />

                      {isBackView
                        ? "Show Front"
                        : "Show Back"}
                    </button>
                  )}

                  {hasMultipleUniforms && (
                    <button
                      type="button"
                      onClick={
                        handleNextUniform
                      }
                      className="flex items-center gap-1 px-3 py-2 text-[10px] uppercase tracking-widest text-green-300 hover:text-green-200"
                    >
                      Next

                      <ChevronRight
                        size={
                          14
                        }
                      />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
    </section>
  );
};

export default UniformsSection;