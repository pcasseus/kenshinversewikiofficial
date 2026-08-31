import React, { useState } from "react";
import { X } from "lucide-react";
import ToolsSection from "./ToolsSection";

const UniformsSection = ({ character, setSelectedItem }) => {
  const uniforms = character.uniforms || [];
  const [activeUniformIndex, setActiveUniformIndex] = useState(0);
  const [isBackView, setIsBackView] = useState(false);
  const [enlarged, setEnlarged] = useState(false);

  const currentUniform = uniforms[activeUniformIndex];

  const handlePrevUniform = () => {
    setActiveUniformIndex((prev) =>
      prev === 0 ? uniforms.length - 1 : prev - 1
    );
    setIsBackView(false);
  };

  const handleNextUniform = () => {
    setActiveUniformIndex((prev) => (prev + 1) % uniforms.length);
    setIsBackView(false);
  };

  const handleToggleView = () => {
    setIsBackView((prev) => !prev);
  };

  return (
    <section
      className="border border-yellow-500 rounded-xl p-6 mb-10"
      style={{
        background: "linear-gradient(to bottom, #111 0%, #050505 100%)",
      }}
    >
      <h2 className="text-yellow-300 text-xl font-bold mb-6 text-center tracking-widest">
        UNIFORMS
      </h2>

      {/* Viewer + Description */}
      <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
        {/* SUIT VIEWER */}
        <div className="w-full md:w-1/2 relative border border-yellow-500 rounded-lg p-4 pt-10 bg-black">
          {/* Tabs */}
          <div className="absolute top-0 left-0 w-full flex justify-center gap-2 -translate-y-1/2">
            {uniforms.map((uniform, index) => (
              <button
                key={uniform.id}
                onClick={() => {
                  setActiveUniformIndex(index);
                  setIsBackView(false);
                }}
                className={`px-3 py-1 text-xs font-mono uppercase border border-yellow-500 rounded-t-md ${
                  index === activeUniformIndex
                    ? "bg-yellow-500 text-black font-bold border-b-transparent"
                    : "bg-zinc-900 text-yellow-300 hover:bg-yellow-700"
                }`}
              >
                {uniform.name}
              </button>
            ))}
          </div>

          {/* Suit Render (GRID ONLY HERE) */}
          <div
            className="relative mt-4 p-4 rounded cursor-pointer"
            style={{
              backgroundColor: "#000",
              backgroundImage: `
                linear-gradient(#00ffff14 1px, transparent 1px),
                linear-gradient(to right, #00ffff14 1px, transparent 1px)
              `,
              backgroundSize: "30px 30px",
              border: "1px solid #00ffff44",
              minHeight: "260px",
            }}
            onClick={() => uniforms.length > 0 && setEnlarged(true)}
          >
            {uniforms.length > 0 ? (
              <>
                <img
                  src={currentUniform.images?.[isBackView ? 1 : 0]}
                  alt={currentUniform.name}
                  className="h-64 mx-auto object-contain"
                />
                <div className="text-green-400 mt-2 text-xs font-mono uppercase tracking-wide text-center">
                  {currentUniform.label}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-yellow-400 font-mono">
                NO UNIFORMS AVAILABLE
              </div>
            )}
          </div>

          {/* Controls */}
          {uniforms.length > 0 && (
            <div className="flex justify-center gap-6 mt-4 text-sm font-mono">
              <button
                onClick={handlePrevUniform}
                className="text-green-300 hover:text-green-500"
              >
                ◀ Prev
              </button>
              <button
                onClick={handleToggleView}
                className="text-cyan-300 hover:text-cyan-100 underline"
              >
                {isBackView ? "Show Front" : "Show Back"}
              </button>
              <button
                onClick={handleNextUniform}
                className="text-green-300 hover:text-green-500"
              >
                Next ▶
              </button>
            </div>
          )}
        </div>

        {/* DESCRIPTION (GRID ONLY HERE) */}
        <div
          className="w-full md:w-1/2 border border-yellow-500 rounded-lg p-4 bg-black overflow-y-auto"
          style={{
            backgroundImage: `
              linear-gradient(#00ffff14 1px, transparent 1px),
              linear-gradient(to right, #00ffff14 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
            border: "1px solid #00ffff44",
            minHeight: "260px",
            maxHeight: "520px",
          }}
        >
          {uniforms.length > 0 ? (
            <>
              <h3 className="text-yellow-300 font-mono uppercase mb-2 tracking-wide">
                {currentUniform.name}
              </h3>
              <p className="text-yellow-100 text-sm font-mono leading-relaxed whitespace-pre-wrap">
                {currentUniform.description}
              </p>
            </>
          ) : (
            <span className="text-yellow-400 font-mono">
              NO DESCRIPTION AVAILABLE
            </span>
          )}
        </div>
      </div>

      {/* TOOLS (kept intact) */}
      <div className="mt-10">
        <ToolsSection
          character={character}
          setSelectedItem={setSelectedItem}
        />
      </div>

      {/* ENLARGED VIEW */}
      {enlarged && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50">
          <div className="relative bg-black border border-yellow-500 rounded-lg p-6 max-w-4xl w-full">
            <button
              onClick={() => setEnlarged(false)}
              className="absolute -top-10 right-0 text-yellow-400 hover:text-yellow-200"
            >
              <X size={32} />
            </button>
            <img
              src={currentUniform.images?.[isBackView ? 1 : 0]}
              alt={currentUniform.name}
              className="max-h-[75vh] mx-auto object-contain"
            />
            <div className="flex justify-center gap-8 mt-6 text-sm font-mono">
              <button
                onClick={handlePrevUniform}
                className="text-green-300 hover:text-green-500"
              >
                ◀ Prev
              </button>
              <button
                onClick={handleToggleView}
                className="text-cyan-300 hover:text-cyan-100 underline"
              >
                {isBackView ? "Show Front" : "Show Back"}
              </button>
              <button
                onClick={handleNextUniform}
                className="text-green-300 hover:text-green-500"
              >
                Next ▶
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UniformsSection;
