import React, { useState } from "react";
import { X } from "lucide-react";

const ToolsSection = ({ character }) => {
  const tools = character.tools || [];
  const [activeToolIndex, setActiveToolIndex] = useState(0);
  const [enlarged, setEnlarged] = useState(false);

  const currentTool = tools[activeToolIndex];

  const handlePrevTool = () => {
    setActiveToolIndex((prev) =>
      prev === 0 ? tools.length - 1 : prev - 1
    );
  };

  const handleNextTool = () => {
    setActiveToolIndex((prev) => (prev + 1) % tools.length);
  };

  return (
    <div className="mt-12 pt-4 border-t border-yellow-700">
      <h3 className="text-yellow-300 text-lg font-bold mb-4 uppercase tracking-widest">
        Integrated Tools
      </h3>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Tool Description Box */}
        <div
          className="bg-black border border-yellow-500 rounded p-4 shadow-xl w-full md:w-1/2 text-left overflow-y-auto"
          style={{
            backgroundColor: "#000",
            backgroundImage: `
              linear-gradient(#00ffff11 1px, transparent 1px),
              linear-gradient(to right, #00ffff11 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
            border: "1px solid #00ffff44",
            minHeight: "200px",
            maxHeight: "220px",
          }}
        >
          {tools.length > 0 ? (
            <div>
              <h4 className="text-yellow-300 font-bold uppercase text-sm mb-1">
                {currentTool.name}
              </h4>
              <p className="text-yellow-200 text-xs font-mono leading-relaxed">
                {currentTool.description}
              </p>
            </div>
          ) : (
            <span className="text-yellow-400 font-mono uppercase">
              NO TOOLS LOGGED
            </span>
          )}
        </div>

        {/* Tool Image Box */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div
            className="bg-black border border-yellow-500 rounded shadow-xl w-full flex items-center justify-center cursor-pointer"
            style={{
              backgroundColor: "#000",
              backgroundImage: `
                linear-gradient(#00ffff11 1px, transparent 1px),
                linear-gradient(to right, #00ffff11 1px, transparent 1px)
              `,
              backgroundSize: "30px 30px",
              border: "1px solid #00ffff44",
              minHeight: "200px",
            }}
            onClick={() => tools.length > 0 && setEnlarged(true)}
          >
            {tools.length > 0 ? (
              currentTool?.image && (
                <img
                  src={currentTool.image}
                  alt={currentTool.name}
                  className="h-48 mx-auto object-contain p-4"
                />
              )
            ) : (
              <span className="text-yellow-400 font-mono uppercase">
                NO TOOLS LOGGED
              </span>
            )}
          </div>

          {/* Tab Buttons */}
          {tools.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2 justify-center">
              {tools.map((tool, index) => (
                <button
                  key={index}
                  onClick={() => setActiveToolIndex(index)}
                  className={`px-3 py-1 text-xs font-mono uppercase border rounded ${
                    index === activeToolIndex
                      ? "bg-yellow-500 text-black font-bold border-yellow-500"
                      : "text-yellow-300 border-yellow-500 hover:bg-yellow-800"
                  }`}
                >
                  {tool.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Enlarged Modal */}
      {enlarged && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative bg-black border border-yellow-500 rounded-lg p-6 max-w-3xl w-full">
            <button
              onClick={() => setEnlarged(false)}
              className="absolute -top-10 right-0 text-yellow-400 hover:text-yellow-200"
            >
              <X size={32} />
            </button>
            {currentTool?.image && (
              <img
                src={currentTool.image}
                alt={currentTool.name}
                className="max-h-[70vh] mx-auto object-contain"
              />
            )}
            <div className="flex justify-center gap-6 mt-6">
              <button
                onClick={handlePrevTool}
                className="text-green-300 hover:text-green-500"
              >
                ◀ Prev
              </button>
              <button
                onClick={handleNextTool}
                className="text-green-300 hover:text-green-500"
              >
                Next ▶
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolsSection;
