import React from "react";

import { allCharacters } from "../data/characterList.js";

const DEFAULT_STYLE = {
  accent: "#facc15",
  secondary: "#22c55e",
  glow: "rgba(234, 179, 8, 0.16)",
  motif: "archive",
  signature: "Personnel Signature",
};

const getInitials = (name = "") => {
  const parts = name
    .trim()
    .split(/[\s-]+/)
    .filter(Boolean);

  if (parts.length === 0) {
    return "?";
  }

  if (parts.length === 1) {
    return parts[0]
      .charAt(0)
      .toUpperCase();
  }

  const first = parts[0]
    .charAt(0)
    .toUpperCase();

  const last = parts[
    parts.length - 1
  ]
    .charAt(0)
    .toUpperCase();

  return `${first}${last}`;
};

const getOperativeId = (slug) => {
  const index = allCharacters.findIndex(
    (entry) => entry.slug === slug
  );

  if (index === -1) {
    return "#000";
  }

  return `#${String(index + 1).padStart(
    3,
    "0"
  )}`;
};

const getMotifStyle = (
  motif,
  accent,
  secondary,
  glow
) => {
  const grid = `
    linear-gradient(
      rgba(34, 197, 94, 0.04) 1px,
      transparent 1px
    ),
    linear-gradient(
      to right,
      rgba(34, 197, 94, 0.04) 1px,
      transparent 1px
    )
  `;

  switch (motif) {
    case "resonance":
      return {
        backgroundImage: `
          radial-gradient(
            circle at center,
            transparent 0 12%,
            ${accent}18 12.5% 13%,
            transparent 13.5% 23%,
            ${accent}14 23.5% 24%,
            transparent 24.5% 35%,
            ${secondary}10 35.5% 36%,
            transparent 36.5%
          ),
          ${grid},
          radial-gradient(
            circle at center,
            ${glow},
            transparent 64%
          )
        `,
        backgroundSize:
          "100% 100%, 30px 30px, 30px 30px, 100% 100%",
      };

    case "fusion":
      return {
        backgroundImage: `
          radial-gradient(
            circle at center,
            ${secondary}32 0%,
            ${accent}22 12%,
            transparent 42%
          ),
          repeating-conic-gradient(
            from 0deg at center,
            ${accent}12 0deg 2deg,
            transparent 2deg 18deg
          ),
          ${grid}
        `,
        backgroundSize:
          "100% 100%, 100% 100%, 30px 30px, 30px 30px",
      };

    case "frost":
      return {
        backgroundImage: `
          linear-gradient(
            60deg,
            transparent 46%,
            ${accent}18 47% 48%,
            transparent 49%
          ),
          linear-gradient(
            -60deg,
            transparent 46%,
            ${secondary}12 47% 48%,
            transparent 49%
          ),
          ${grid},
          radial-gradient(
            circle at center,
            ${glow},
            transparent 65%
          )
        `,
        backgroundSize:
          "42px 72px, 42px 72px, 30px 30px, 30px 30px, 100% 100%",
      };

    case "thermal":
      return {
        backgroundImage: `
          repeating-linear-gradient(
            84deg,
            transparent 0 20px,
            ${accent}0f 21px,
            transparent 23px 42px
          ),
          linear-gradient(
            to top,
            ${glow},
            transparent 68%
          ),
          ${grid}
        `,
        backgroundSize:
          "100% 100%, 100% 100%, 30px 30px, 30px 30px",
      };

    case "neural":
      return {
        backgroundImage: `
          linear-gradient(
            45deg,
            transparent 48%,
            ${accent}14 49% 51%,
            transparent 52%
          ),
          linear-gradient(
            -45deg,
            transparent 48%,
            ${secondary}10 49% 51%,
            transparent 52%
          ),
          ${grid},
          radial-gradient(
            circle at center,
            ${glow},
            transparent 65%
          )
        `,
        backgroundSize:
          "48px 48px, 48px 48px, 30px 30px, 30px 30px, 100% 100%",
      };

    case "energy":
      return {
        backgroundImage: `
          radial-gradient(
            ellipse at center,
            ${accent}24 0%,
            transparent 28%
          ),
          radial-gradient(
            ellipse at center,
            transparent 0 30%,
            ${secondary}18 31% 32%,
            transparent 33% 46%,
            ${accent}12 47% 48%,
            transparent 49%
          ),
          ${grid}
        `,
        backgroundSize:
          "100% 100%, 100% 100%, 30px 30px, 30px 30px",
      };

    case "analysis":
      return {
        backgroundImage: `
          linear-gradient(
            90deg,
            transparent 0 49%,
            ${accent}12 49.5% 50.5%,
            transparent 51%
          ),
          linear-gradient(
            0deg,
            transparent 0 49%,
            ${secondary}10 49.5% 50.5%,
            transparent 51%
          ),
          ${grid},
          radial-gradient(
            circle at center,
            ${glow},
            transparent 68%
          )
        `,
        backgroundSize:
          "120px 120px, 120px 120px, 24px 24px, 24px 24px, 100% 100%",
      };

    case "engineering":
      return {
        backgroundImage: `
          repeating-linear-gradient(
            135deg,
            transparent 0 24px,
            ${accent}10 25px 26px,
            transparent 27px 50px
          ),
          linear-gradient(
            90deg,
            transparent 0 20%,
            ${secondary}0d 20.5% 21%,
            transparent 21.5% 79%,
            ${secondary}0d 79.5% 80%,
            transparent 80.5%
          ),
          ${grid},
          radial-gradient(
            circle at center,
            ${glow},
            transparent 66%
          )
        `,
        backgroundSize:
          "100% 100%, 100% 100%, 30px 30px, 30px 30px, 100% 100%",
      };

    default:
      return {
        backgroundImage: `
          ${grid},
          radial-gradient(
            circle at center,
            ${glow},
            transparent 65%
          )
        `,
        backgroundSize:
          "30px 30px, 30px 30px, 100% 100%",
      };
  }
};

const CharacterCard = ({
  character,
}) => {
  const initials = getInitials(
    character?.name
  );

  const operativeId = getOperativeId(
    character?.slug
  );

  const galleryStyle = {
    ...DEFAULT_STYLE,
    ...(character?.galleryStyle || {}),
  };

  const {
    accent,
    secondary,
    glow,
    motif,
    signature,
  } = galleryStyle;

  const motifStyle = getMotifStyle(
    motif,
    accent,
    secondary,
    glow
  );

  return (
    <article className="group relative block cursor-pointer">
      <div
        className="
          relative
          flex
          h-[430px]
          flex-col
          overflow-hidden
          rounded-lg
          border
          bg-[#050505]
          shadow-lg
          transition
          duration-300
          sm:h-[500px]
        "
        style={{
          borderColor: `${accent}80`,
          boxShadow: `0 8px 28px ${glow}`,
        }}
      >
        {/* DOSSIER COVER */}

        <div
          className="
            relative
            flex
            min-h-0
            flex-1
            items-center
            justify-center
            overflow-hidden
            bg-black
          "
          style={motifStyle}
        >
          {/* CHARACTER GLOW */}

          <div
            className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at center, ${glow}, transparent 58%)`,
            }}
          />

          {/* ARCHIVE CORNERS */}

          <span
            className="absolute left-4 top-4 h-8 w-8 border-l border-t"
            style={{
              borderColor: `${accent}80`,
            }}
          />

          <span
            className="absolute right-4 top-4 h-8 w-8 border-r border-t"
            style={{
              borderColor: `${accent}80`,
            }}
          />

          <span
            className="absolute bottom-4 left-4 h-8 w-8 border-b border-l"
            style={{
              borderColor: `${accent}80`,
            }}
          />

          <span
            className="absolute bottom-4 right-4 h-8 w-8 border-b border-r"
            style={{
              borderColor: `${accent}80`,
            }}
          />

          {/* TOP METADATA */}

          <div
            className="absolute inset-x-0 top-0 flex items-center justify-between border-b bg-black/80 px-5 py-4"
            style={{
              borderColor: `${accent}35`,
            }}
          >
            <span
              className="text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{
                color: secondary,
              }}
            >
              Operative {operativeId}
            </span>

            <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              KVI Record
            </span>
          </div>

          {/* INITIAL IDENTIFIER */}

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <span className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500">
              Personnel Identifier
            </span>

            <span
              className="
                select-none
                font-mono
                text-[92px]
                font-black
                leading-none
                tracking-[0.04em]
                transition
                duration-300
                group-hover:scale-105
                sm:text-[118px]
              "
              style={{
                color: accent,
                textShadow: `0 0 24px ${glow}`,
              }}
            >
              {initials}
            </span>

            <div
              className="mt-6 h-px w-32"
              style={{
                background: `linear-gradient(
                  to right,
                  transparent,
                  ${accent},
                  transparent
                )`,
              }}
            />

            <span
              className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{
                color: secondary,
              }}
            >
              {signature}
            </span>
          </div>

          {/* MOTIF LABEL */}

          <span
            className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-[0.2em] opacity-50"
            style={{
              color: accent,
            }}
          >
            {motif} profile
          </span>

          {/* HOVER ACCESS STATE */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-20
              flex
              items-center
              justify-center
              bg-black/80
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
          >
            <div
              className="bg-black px-6 py-3 text-center"
              style={{
                border: `1px solid ${accent}`,
                boxShadow: `0 0 24px ${glow}`,
              }}
            >
              <span
                className="block text-xs font-bold uppercase tracking-[0.22em]"
                style={{
                  color: accent,
                }}
              >
                Access Dossier
              </span>

              <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                Clearance Approved
              </span>
            </div>
          </div>
        </div>

        {/* SUBJECT IDENTIFICATION */}

        <div
          className="relative z-30 border-t bg-black px-4 py-4"
          style={{
            borderColor: accent,
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <span className="mb-1 block text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                Subject
              </span>

              <h2
                className="truncate text-lg font-bold uppercase tracking-wide"
                style={{
                  color: accent,
                }}
              >
                {character.name}
              </h2>
            </div>

            <span
              className="shrink-0 pt-1 text-[9px] font-bold uppercase tracking-[0.16em]"
              style={{
                color: secondary,
              }}
            >
              Active
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-zinc-800 pt-3">
            <span
              className="text-xs italic"
              style={{
                color: `${accent}dd`,
              }}
            >
              Tap to access full dossier
            </span>

            <span
              className="
                text-base
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
              style={{
                color: accent,
              }}
            >
              →
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CharacterCard;