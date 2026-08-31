import React, { useState } from "react";

const Modal = ({
  title,
  children,
  onClose,
  tabbed = false,
  baseContent,
  evolvedContent,
  selectedBooks = [],
  theme = "default", // "power" | "danger" | "default"
}) => {
  const [activeTab, setActiveTab] = useState("base");

  const isPower = theme === "power";
  const isDanger = theme === "danger";

  const isLocked = (bookList) => {
    if (!bookList || !Array.isArray(bookList)) return false;
    return !bookList.some((b) => selectedBooks.includes(b));
  };

  const renderTabs = () => {
    const tabs = [{ id: "base", label: "Base Form" }];

    if (Array.isArray(evolvedContent)) {
      evolvedContent.forEach((entry, idx) => {
        const locked = isLocked(entry?.books);
        tabs.push({
          id: `evolved-${idx}`,
          label: `${entry?.title || `Evolved ${idx + 1}`}${locked ? " 🔒" : ""}`,
        });
      });
    }

    return (
      <div className="flex gap-3 mb-5 flex-wrap">
        {tabs.map(({ id, label }) => {
          const active = activeTab === id;

          let styles =
            "px-4 py-1 rounded border transition font-mono tracking-wider";

          if (isDanger) {
            styles += active
              ? " bg-red-600 text-black border-red-500"
              : " bg-black text-red-300 border-red-700 hover:border-red-500";
          } else if (isPower) {
            styles += active
              ? " bg-cyan-400 text-black border-cyan-300"
              : " bg-black text-cyan-300 border-cyan-700 hover:border-cyan-400";
          } else {
            styles += active
              ? " bg-yellow-400 text-black border-yellow-300"
              : " bg-black text-yellow-300 border-yellow-700 hover:border-yellow-400";
          }

          return (
            <button
              key={id}
              className={styles}
              onClick={() => setActiveTab(id)}
            >
              {label}
            </button>
          );
        })}
      </div>
    );
  };

  const renderContent = () => {
    if (!tabbed) return children;
    if (activeTab === "base") return baseContent;

    const idx = parseInt(activeTab.split("-")[1], 10);
    const content = evolvedContent[idx];
    const locked = isLocked(content?.books);

    if (locked) {
      return (
        <p className="italic text-red-400">
          🔒 Locked — Activate Book {content?.books?.join(", ") || "?"}
        </p>
      );
    }

    return (
      <>
        <p className="mb-3">{content?.description}</p>
        {content?.book && (
          <p className="text-sm opacity-80">
            Evolves In: <strong>{content.book}</strong>
          </p>
        )}
      </>
    );
  };

  /* ===============================
     THEME STYLES
  =============================== */

  let borderColor = "border-zinc-700";
  let titleColor = "text-white";
  let glow = "";

  if (isDanger) {
    borderColor = "border-red-600";
    titleColor = "text-red-400";
    glow = "shadow-[0_0_30px_rgba(255,0,0,0.45)]";
  } else if (isPower) {
    borderColor = "border-cyan-400";
    titleColor = "text-cyan-300";
    glow = "shadow-[0_0_30px_rgba(0,200,255,0.35)]";
  }

  return (
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999] px-4 animate-fade-in">
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 rounded-lg font-mono tracking-wide bg-black text-white border ${borderColor} ${glow}`}
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className={`absolute top-3 right-4 text-xl transition ${
            isDanger
              ? "text-red-400 hover:text-red-200"
              : isPower
              ? "text-cyan-300 hover:text-cyan-100"
              : "text-yellow-300 hover:text-yellow-100"
          }`}
        >
          ✕
        </button>

        {/* TITLE */}
        <h2
          className={`text-xl font-bold mb-5 uppercase tracking-widest ${titleColor}`}
        >
          {title}
        </h2>

        {/* TABS */}
        {tabbed && renderTabs()}

        {/* CONTENT */}
        <div className="text-sm leading-relaxed whitespace-pre-line">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
