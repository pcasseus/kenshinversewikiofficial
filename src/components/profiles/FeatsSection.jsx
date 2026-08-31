import React, { useMemo, useRef, useState, useEffect } from "react";

const FEATS_PER_PAGE = 8;
const FEATS_LOCKED = true; // 🔒 toggle off when ready to launch

const FeatsSection = ({ character }) => {
  const featsByBook = character?.feats || {};

  const [selectedBook, setSelectedBook] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDir, setFlipDir] = useState("next");
  const flipTimer = useRef(null);

  const toggleBook = (key) => {
    if (FEATS_LOCKED) return;
    setPageIndex(0);
    setSelectedBook((prev) => (prev === key ? null : key));
  };

  const hasAnySelected = selectedBook !== null && !FEATS_LOCKED;

  const activeFeats = useMemo(() => {
    if (!hasAnySelected) return [];

    if (selectedBook === "all") {
      return Object.values(featsByBook).flat().filter(Boolean);
    }

    return Array.isArray(featsByBook[selectedBook])
      ? featsByBook[selectedBook]
      : [];
  }, [featsByBook, selectedBook, hasAnySelected]);

  const totalPages = Math.max(
    1,
    Math.ceil(activeFeats.length / FEATS_PER_PAGE)
  );

  const safePage = Math.min(pageIndex, totalPages - 1);

  useEffect(() => {
    if (pageIndex !== safePage) setPageIndex(safePage);
  }, [safePage, pageIndex]);

  const pageSlice = activeFeats.slice(
    safePage * FEATS_PER_PAGE,
    safePage * FEATS_PER_PAGE + FEATS_PER_PAGE
  );

  const leftPage = pageSlice.slice(0, 4);
  const rightPage = pageSlice.slice(4, 8);

  const canPrev = hasAnySelected && safePage > 0 && !isFlipping;
  const canNext = hasAnySelected && safePage < totalPages - 1 && !isFlipping;

  const runFlip = (dir) => {
    if (FEATS_LOCKED || isFlipping) return;
    if ((dir === "next" && !canNext) || (dir === "prev" && !canPrev)) return;

    setFlipDir(dir);
    setIsFlipping(true);

    if (flipTimer.current) clearTimeout(flipTimer.current);
    flipTimer.current = setTimeout(() => {
      setPageIndex((p) =>
        dir === "next" ? p + 1 : Math.max(p - 1, 0)
      );
      setIsFlipping(false);
    }, 720);
  };

  useEffect(() => {
    return () => flipTimer.current && clearTimeout(flipTimer.current);
  }, []);

  return (
    <section className="relative border border-yellow-500 rounded overflow-hidden flex w-full mb-32 featsRoot">
      <style>{`
        .featsWrap {
          background: radial-gradient(circle at top, #080808, #020202 70%);
        }

        .lockedDim {
          filter: blur(3px) brightness(0.4);
          pointer-events: none;
          user-select: none;
        }

        .lockOverlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
        }

        .lockBox {
          border: 2px solid #facc15;
          padding: 36px 42px;
          border-radius: 10px;
          text-align: center;
          background: radial-gradient(circle at top, #111, #000);
          box-shadow: 0 0 40px rgba(250,204,21,0.35);
          max-width: 420px;
        }

        .lockIcon {
          font-size: 44px;
          margin-bottom: 14px;
        }

        .lockTitle {
          font-family: monospace;
          letter-spacing: 0.35em;
          color: #facc15;
          font-size: 12px;
          margin-bottom: 14px;
        }

        .lockDesc {
          font-family: monospace;
          font-size: 13px;
          line-height: 1.7;
          color: #e5e5e5;
          opacity: 0.85;
        }

        .sidebarGrid {
          background-color: #000;
          background-image:
            linear-gradient(rgba(255,196,0,0.12) 1px, transparent 1px),
            linear-gradient(to right, rgba(255,196,0,0.12) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .page {
          position: relative;
          background: linear-gradient(#f7e7d6, #efddc8);
          color: #141414;
          border-radius: 6px;
          padding: 36px 40px;
          box-shadow:
            inset 0 0 0 1px rgba(0,0,0,0.14),
            0 12px 24px rgba(0,0,0,0.45);
        }

        .featBlock {
          margin-bottom: 22px;
          padding-bottom: 22px;
          border-bottom: 1px solid rgba(0,0,0,0.18);
        }

        .featText {
          font-family: Georgia, serif;
          font-size: 17px;
          line-height: 1.75;
        }

        @media (max-width: 900px) {
          .featsRoot { flex-direction: column; }
          .desktopOnly { display: none; }
          .mobileOnly { display: block; }
          .page { padding: 24px; }
          .featText { font-size: 15px; }
        }

        .mobileOnly { display: none; }
      `}</style>

      {/* 🔒 LOCK OVERLAY */}
      {FEATS_LOCKED && (
        <div className="lockOverlay">
          <div className="lockBox">
            <div className="lockIcon">🔒</div>
            <div className="lockTitle">FEATS ARCHIVE LOCKED</div>
            <div className="lockDesc">
              This section will not be available until the website’s official
              launch in 2026.
              <br />
              <br />
              Content shown here is currently sealed.
            </div>
          </div>
        </div>
      )}

      {/* CONTENT (DIMMED WHEN LOCKED) */}
      <div className={FEATS_LOCKED ? "lockedDim flex w-full" : "flex w-full"}>
        {/* SIDEBAR */}
        <div className="w-48 border-r border-yellow-500 sidebarGrid desktopOnly">
          {["Book 1", "Book 2", "Book 3", "All Books"].map((label) => (
            <div
              key={label}
              className="px-5 py-5 font-mono uppercase tracking-widest border-b border-yellow-500 text-yellow-700 cursor-not-allowed"
            >
              🔒 {label}
            </div>
          ))}
        </div>

        {/* BODY */}
        <div className="flex-1 featsWrap p-6">
          <div className="page">
            <div className="featBlock">
              <p className="featText">
                Archive sealed.
              </p>
            </div>
            <div className="featBlock">
              <p className="featText">
                Access will be granted at official launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatsSection;
