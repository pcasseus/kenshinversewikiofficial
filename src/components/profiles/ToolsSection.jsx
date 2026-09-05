import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from "lucide-react";

const ToolsSection = ({ character }) => {
  const tools = Array.isArray(character?.tools)
    ? character.tools.filter(Boolean)
    : [];

  const [activeToolIndex, setActiveToolIndex] = useState(0);
  const [enlarged, setEnlarged] = useState(false);

  useEffect(() => {
    setActiveToolIndex(0);
    setEnlarged(false);
  }, [character?.slug]);

  useEffect(() => {
    if (activeToolIndex >= tools.length) {
      setActiveToolIndex(0);
    }
  }, [activeToolIndex, tools.length]);

  if (tools.length === 0) {
    return null;
  }

  const currentTool = tools[activeToolIndex] || null;

  if (!currentTool) {
    return null;
  }

  const hasMultipleTools = tools.length > 1;
  const hasImage = Boolean(currentTool.image);

  const handlePrevTool = () => {
    if (!hasMultipleTools) return;

    setActiveToolIndex((prev) =>
      prev === 0 ? tools.length - 1 : prev - 1
    );
  };

  const handleNextTool = () => {
    if (!hasMultipleTools) return;

    setActiveToolIndex(
      (prev) => (prev + 1) % tools.length
    );
  };

  return (
    <div
      className={`border-yellow-500/20 ${
        character?.uniforms?.length > 0
          ? "border-t"
          : ""
      }`}
    >
      <div className="p-5 sm:p-6">
        <div className="mb-5 flex flex-col gap-3 border-b border-yellow-500/20 pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 text-[9px] uppercase tracking-[0.22em] text-zinc-600">
              Equipment Record
            </p>

            <h3 className="text-base font-bold uppercase tracking-[0.15em] text-yellow-300">
              Integrated Tools
            </h3>
          </div>

          {tools.length > 1 && (
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <button
                  key={tool.id || `${tool.name}-${index}`}
                  type="button"
                  onClick={() => setActiveToolIndex(index)}
                  className={`rounded border px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] transition ${
                    index === activeToolIndex
                      ? "border-yellow-400 bg-yellow-400 text-black"
                      : "border-yellow-700/70 bg-black text-yellow-300 hover:border-yellow-400 hover:bg-yellow-500/10"
                  }`}
                >
                  {tool.name || `Tool ${index + 1}`}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)]">
          {/* TOOL FILE */}
          <div className="min-w-0 overflow-hidden rounded-lg border border-yellow-500/30 bg-black">
            <div className="border-b border-yellow-500/20 px-5 py-4">
              <p className="text-[9px] uppercase tracking-[0.22em] text-zinc-600">
                Equipment File
              </p>

              <h4 className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-yellow-300">
                {currentTool.name || "Unnamed Tool"}
              </h4>
            </div>

            <div className="p-5">
              {currentTool.description ? (
                <p className="whitespace-pre-line font-mono text-sm leading-7 text-zinc-300">
                  {currentTool.description}
                </p>
              ) : (
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  Equipment description pending archive review.
                </p>
              )}
            </div>
          </div>

          {/* TOOL VISUAL */}
          <div className="min-w-0 overflow-hidden rounded-lg border border-cyan-500/40 bg-black">
            <div className="flex items-center justify-between border-b border-cyan-500/20 px-4 py-3">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                Visual Record
              </span>

              <span className="text-[9px] uppercase tracking-widest text-zinc-600">
                Equipment
              </span>
            </div>

            <div
              className={`relative flex min-h-[300px] items-center justify-center overflow-hidden p-5 ${
                hasImage ? "cursor-pointer" : ""
              }`}
              style={{
                backgroundColor: "#000",
                backgroundImage: `
                  linear-gradient(rgba(0,255,255,0.07) 1px, transparent 1px),
                  linear-gradient(to right, rgba(0,255,255,0.07) 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px",
              }}
              onClick={() => {
                if (hasImage) {
                  setEnlarged(true);
                }
              }}
            >
              {hasImage ? (
                <>
                  <img
                    src={currentTool.image}
                    alt={currentTool.name || "Equipment"}
                    className="max-h-[320px] w-full object-contain"
                  />

                  <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded border border-cyan-500/30 bg-black/80 px-2 py-1 text-[9px] uppercase tracking-widest text-cyan-300">
                    <Expand size={11} />
                    Expand
                  </div>
                </>
              ) : (
                <div className="px-6 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-600">
                    Visual Record Unavailable
                  </p>

                  <p className="mt-2 text-[9px] uppercase tracking-widest text-zinc-700">
                    Image pending archive upload
                  </p>
                </div>
              )}
            </div>

            {hasMultipleTools && (
              <div className="flex items-center justify-center gap-4 border-t border-cyan-500/20 px-4 py-3">
                <button
                  type="button"
                  onClick={handlePrevTool}
                  className="flex items-center gap-1 px-3 py-2 text-[10px] uppercase tracking-widest text-green-300 transition hover:text-green-200"
                >
                  <ChevronLeft size={14} />
                  Previous
                </button>

                <span className="text-[9px] tracking-widest text-zinc-600">
                  {activeToolIndex + 1} / {tools.length}
                </span>

                <button
                  type="button"
                  onClick={handleNextTool}
                  className="flex items-center gap-1 px-3 py-2 text-[10px] uppercase tracking-widest text-green-300 transition hover:text-green-200"
                >
                  Next
                  <ChevronRight size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ENLARGED TOOL VIEW */}
      {enlarged && hasImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setEnlarged(false)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-lg border border-yellow-500/60 bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-yellow-500/30 px-4 py-3 sm:px-5">
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                  Enlarged Equipment Record
                </p>

                <h3 className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
                  {currentTool.name || "Equipment"}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setEnlarged(false)}
                className="flex h-9 w-9 items-center justify-center rounded border border-zinc-700 text-zinc-400 transition hover:border-yellow-400 hover:text-yellow-300"
                aria-label="Close enlarged equipment view"
              >
                <X size={18} />
              </button>
            </div>

            <div
              className="flex min-h-[420px] items-center justify-center p-5 sm:p-8"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,255,255,0.06) 1px, transparent 1px),
                  linear-gradient(to right, rgba(0,255,255,0.06) 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px",
              }}
            >
              <img
                src={currentTool.image}
                alt={currentTool.name || "Equipment"}
                className="max-h-[72vh] max-w-full object-contain"
              />
            </div>

            {hasMultipleTools && (
              <div className="flex items-center justify-center gap-5 border-t border-yellow-500/20 px-4 py-4">
                <button
                  type="button"
                  onClick={handlePrevTool}
                  className="flex items-center gap-1 px-3 py-2 text-[10px] uppercase tracking-widest text-green-300 hover:text-green-200"
                >
                  <ChevronLeft size={14} />
                  Previous
                </button>

                <span className="text-[9px] tracking-widest text-zinc-600">
                  {activeToolIndex + 1} / {tools.length}
                </span>

                <button
                  type="button"
                  onClick={handleNextTool}
                  className="flex items-center gap-1 px-3 py-2 text-[10px] uppercase tracking-widest text-green-300 hover:text-green-200"
                >
                  Next
                  <ChevronRight size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolsSection;