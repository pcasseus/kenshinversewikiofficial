import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

const STAGE_ORDER = [
  "beginning",
  "middle",
  "end",
];

const STAGE_LABELS = {
  beginning: "Beginning",
  middle: "Middle",
  end: "End",
};

const SPOILER_STAGES = [
  "middle",
  "end",
];

const Modal = ({
  title,
  children,
  onClose,
  tabbed = false,
  baseContent,
  evolvedContent,
  selectedBooks = [],
  theme = "default",
  domain,
  classification,
  progression,
  release = "KVI",
  discovery = "beginning",
}) => {
  const isPower =
    theme === "power" ||
    theme === "ability";

  const isDanger =
    theme === "danger";

  const [
    revealedStages,
    setRevealedStages,
  ] = useState(() => new Set());

  const normalizedLegacyEvolutions =
    useMemo(() => {
      if (!evolvedContent) {
        return [];
      }

      const entries = Array.isArray(
        evolvedContent
      )
        ? evolvedContent
        : [evolvedContent];

      if (
        !Array.isArray(selectedBooks) ||
        selectedBooks.length === 0
      ) {
        return entries;
      }

      return entries.filter((entry) => {
        if (
          !Array.isArray(entry?.books) ||
          entry.books.length === 0
        ) {
          return true;
        }

        return entry.books.some((book) =>
          selectedBooks.includes(book)
        );
      });
    }, [
      evolvedContent,
      selectedBooks,
    ]);

  const progressionStates =
    useMemo(() => {
      if (progression) {
        return progression;
      }

      if (
        tabbed &&
        normalizedLegacyEvolutions.length >
          0
      ) {
        return {
          beginning: {
            title,

            description:
              typeof baseContent ===
              "string"
                ? baseContent
                : "",
          },

          end: {
            title:
              normalizedLegacyEvolutions[0]
                ?.title || title,

            description:
              normalizedLegacyEvolutions[0]
                ?.description || "",
          },
        };
      }

      return null;
    }, [
      progression,
      tabbed,
      normalizedLegacyEvolutions,
      title,
      baseContent,
    ]);

  const availableStages =
    useMemo(() => {
      if (!progressionStates) {
        return [];
      }

      return STAGE_ORDER.filter(
        (stage) =>
          progressionStates[stage]
      );
    }, [progressionStates]);

  const initialStage =
    availableStages[0] ||
    discovery ||
    "beginning";

  const [
    activeState,
    setActiveState,
  ] = useState(initialStage);

  useEffect(() => {
    setActiveState(
      availableStages[0] ||
        discovery ||
        "beginning"
    );

    setRevealedStages(
      new Set()
    );
  }, [
    title,
    discovery,
    availableStages,
  ]);

  const hasProgression =
    availableStages.length > 1;

  const activeRecord =
    progressionStates?.[
      activeState
    ] || null;

  const currentStage =
    progressionStates
      ? activeState
      : discovery;

  const isSpoilerStage = (stage) =>
    release === "KVI" &&
    SPOILER_STAGES.includes(stage);

  const spoilerProtected =
    isSpoilerStage(currentStage);

  const spoilerRevealed =
    revealedStages.has(
      currentStage
    );

  const revealCurrentStage = () => {
    setRevealedStages(
      (current) => {
        const next = new Set(
          current
        );

        next.add(currentStage);

        return next;
      }
    );
  };

  const renderLongText = (
    content
  ) => {
    if (
      content === null ||
      content === undefined ||
      content === ""
    ) {
      return null;
    }

    if (
      typeof content !== "string"
    ) {
      return content;
    }

    const paragraphs = content
      .trim()
      .split(/\n\s*\n/)
      .map((paragraph) =>
        paragraph
          .replace(/\s*\n\s*/g, " ")
          .replace(/\s{2,}/g, " ")
          .trim()
      )
      .filter(Boolean);

    return (
      <div className="space-y-4">
        {paragraphs.map(
          (
            paragraph,
            index
          ) => (
            <p
              key={`${index}-${paragraph.slice(
                0,
                24
              )}`}
            >
              {paragraph}
            </p>
          )
        )}
      </div>
    );
  };

  const renderProgressionControl =
    () => {
      if (!hasProgression) {
        return null;
      }

      return (
        <div className="mb-6">
          <div className="mb-3 flex items-center gap-3">
            <span
              className={`shrink-0 text-[8px] font-bold uppercase tracking-[0.24em] ${
                isDanger
                  ? "text-red-500"
                  : "text-cyan-500"
              }`}
            >
              {release} Progression
            </span>

            <div
              className={`h-px flex-1 ${
                isDanger
                  ? "bg-red-500/25"
                  : "bg-cyan-500/25"
              }`}
            />
          </div>

          <div
            className={`grid overflow-hidden rounded border bg-black ${
              isDanger
                ? "border-red-700/60"
                : "border-cyan-700/60"
            }`}
            style={{
              gridTemplateColumns: `repeat(${availableStages.length}, minmax(0, 1fr))`,
            }}
          >
            {availableStages.map(
              (
                stage,
                index
              ) => {
                const active =
                  activeState ===
                  stage;

                const locked =
                  isSpoilerStage(
                    stage
                  ) &&
                  !revealedStages.has(
                    stage
                  );

                return (
                  <button
                    key={stage}
                    type="button"
                    onClick={() =>
                      setActiveState(
                        stage
                      )
                    }
                    className={`relative px-4 py-3 text-left transition ${
                      index > 0
                        ? isDanger
                          ? "border-l border-red-700/40"
                          : "border-l border-cyan-700/40"
                        : ""
                    } ${
                      active
                        ? isDanger
                          ? "bg-red-950/40 text-red-100"
                          : "bg-cyan-950/40 text-cyan-100"
                        : isDanger
                          ? "text-zinc-500 hover:bg-red-950/20 hover:text-red-300"
                          : "text-zinc-500 hover:bg-cyan-950/20 hover:text-cyan-300"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-[8px] font-bold uppercase tracking-[0.22em]">
                        {
                          STAGE_LABELS[
                            stage
                          ]
                        }
                      </span>

                      {locked && (
                        <span className="text-[6px] font-bold uppercase tracking-[0.16em] text-amber-400">
                          Spoiler
                        </span>
                      )}
                    </span>

                    {active && (
                      <span
                        className={`absolute inset-x-0 bottom-0 h-px ${
                          isDanger
                            ? "bg-red-300"
                            : "bg-cyan-300"
                        }`}
                      />
                    )}
                  </button>
                );
              }
            )}
          </div>
        </div>
      );
    };

  const renderSpoilerWarning =
    () => (
      <div className="border border-amber-500/50 bg-amber-950/[0.08]">
        <div className="border-b border-amber-500/20 px-5 py-3">
          <p className="text-[8px] font-bold uppercase tracking-[0.24em] text-amber-500">
            KVI Spoiler Protection
          </p>
        </div>

        <div className="px-5 py-6">
          <p className="text-sm leading-7 text-zinc-300">
            This record contains
            information first revealed
            during the{" "}
            <span className="font-bold text-amber-300">
              {
                STAGE_LABELS[
                  currentStage
                ]
              }
            </span>{" "}
            portion of KVI.
          </p>

          <p className="mt-3 text-xs leading-6 text-zinc-500">
            Revealing this record
            may expose character
            developments, abilities,
            transformations, or other
            story information beyond
            the beginning of the book.
          </p>

          <button
            type="button"
            onClick={
              revealCurrentStage
            }
            className="mt-5 w-full rounded border border-amber-500/60 bg-amber-500/10 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-amber-300 transition hover:bg-amber-500 hover:text-black"
          >
            Reveal This Record
          </button>
        </div>
      </div>
    );

  const renderRecord = () => {
    const recordTitle =
      activeRecord?.title ||
      title;

    const recordDescription =
      activeRecord?.description ||
      baseContent ||
      children;

    const stateLabel =
      progressionStates
        ? `${
            STAGE_LABELS[
              activeState
            ] || "Current"
          } State`
        : `${
            STAGE_LABELS[
              discovery
            ] || "Current"
          } Discovery`;

    return (
      <>
        {renderProgressionControl()}

        {spoilerProtected &&
        !spoilerRevealed ? (
          renderSpoilerWarning()
        ) : (
          <div
            className={`border ${
              isDanger
                ? "border-red-900/60 bg-red-950/[0.06]"
                : "border-cyan-900/60 bg-cyan-950/[0.06]"
            }`}
          >
            <div
              className={`border-b px-5 py-3 ${
                isDanger
                  ? "border-red-900/50"
                  : "border-cyan-900/50"
              }`}
            >
              <p className="mb-1 text-[8px] font-bold uppercase tracking-[0.23em] text-zinc-600">
                {stateLabel}
              </p>

              <h3
                className={`text-sm font-bold uppercase tracking-[0.12em] ${
                  isDanger
                    ? "text-red-200"
                    : "text-cyan-200"
                }`}
              >
                {recordTitle}
              </h3>
            </div>

            <div className="px-5 py-5 text-sm leading-7 text-zinc-300">
              {renderLongText(
                recordDescription
              )}
            </div>
          </div>
        )}
      </>
    );
  };

  let borderColor =
    "border-zinc-700";

  let accentColor =
    "text-yellow-300";

  let dividerColor =
    "border-yellow-700/30";

  if (isDanger) {
    borderColor =
      "border-red-600/80";

    accentColor =
      "text-red-400";

    dividerColor =
      "border-red-700/30";
  } else if (isPower) {
    borderColor =
      "border-cyan-500/70";

    accentColor =
      "text-cyan-300";

    dividerColor =
      "border-cyan-500/30";
  }

  const recordLabel = isDanger
    ? "Vulnerability Record"
    : isPower
      ? "Capability Record"
      : "Database Record";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 px-3 py-6 backdrop-blur-[2px] animate-fade-in sm:px-5"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div
        className={`relative max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-lg border bg-[#050708] font-mono text-white shadow-2xl ${borderColor}`}
      >
        <div
          className={`flex items-start justify-between gap-6 border-b px-5 py-4 sm:px-6 ${dividerColor}`}
        >
          <div className="min-w-0">
            <p className="mb-1 text-[8px] uppercase tracking-[0.28em] text-zinc-600">
              S.T.A.T.I.C. //{" "}
              {recordLabel}
            </p>

            <h2
              className={`break-words text-lg font-bold uppercase tracking-[0.16em] sm:text-xl ${accentColor}`}
            >
              {title}
            </h2>

            {(domain ||
              classification) && (
              <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[8px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                {domain && (
                  <span>
                    {domain}
                  </span>
                )}

                {domain &&
                  classification && (
                    <span className="text-zinc-700">
                      //
                    </span>
                  )}

                {classification && (
                  <span>
                    {classification}
                  </span>
                )}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded border border-zinc-800 bg-black text-lg transition hover:border-current ${accentColor}`}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div
          className="max-h-[calc(88vh-90px)] overflow-y-auto p-5 sm:p-6"
          style={{
            backgroundImage: isPower
              ? `
                linear-gradient(rgba(0,255,255,0.025) 1px, transparent 1px),
                linear-gradient(to right, rgba(0,255,255,0.025) 1px, transparent 1px)
              `
              : isDanger
                ? `
                  linear-gradient(rgba(255,0,0,0.025) 1px, transparent 1px),
                  linear-gradient(to right, rgba(255,0,0,0.025) 1px, transparent 1px)
                `
                : "none",

            backgroundSize:
              "28px 28px",
          }}
        >
          {isPower || isDanger
            ? renderRecord()
            : tabbed
              ? renderLongText(
                  baseContent
                )
              : renderLongText(
                  children
                )}
        </div>

        {(isPower ||
          isDanger) && (
          <div
            className={`flex items-center justify-between border-t px-5 py-2 text-[7px] uppercase tracking-[0.2em] text-zinc-700 sm:px-6 ${
              isDanger
                ? "border-red-500/20 bg-red-950/[0.08]"
                : "border-cyan-500/20 bg-cyan-950/[0.08]"
            }`}
          >
            <span>
              S.T.A.T.I.C. Database
            </span>

            <span>
              {release} //{" "}
              {isDanger
                ? "Vulnerability Analysis"
                : "Capability Analysis"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;