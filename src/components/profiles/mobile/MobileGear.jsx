import React, {
  useMemo,
} from "react";

import MobileUniforms from "./MobileUniforms";
import MobileTools from "./MobileTools";

import {
  filterRecords,
} from "../../../utils/profileRecordAccess";

const MobileGear = ({
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

  if (
    uniforms.length === 0 &&
    tools.length === 0
  ) {
    return null;
  }

  return (
    <div className="space-y-5">
      <section
        className="overflow-hidden rounded-lg border border-green-700/60 bg-[#050705]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(34,197,94,0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              to right,
              rgba(34,197,94,0.03) 1px,
              transparent 1px
            )
          `,
          backgroundSize:
            "24px 24px",
        }}
      >
        <div className="px-4 py-5">
          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-green-600">
            S.T.A.T.I.C.
            Material Record
          </span>

          <h2 className="mt-2 text-xl font-black uppercase tracking-[0.1em] text-green-300">
            Equipment &
            Uniforms
          </h2>

          <p className="mt-2 max-w-sm text-[11px] leading-5 text-zinc-500">
            Archived uniform,
            equipment, and
            operational tool
            records associated
            with this subject.
          </p>
        </div>
      </section>

      {uniforms.length >
        0 && (
        <MobileUniforms
          character={{
            ...character,
            uniforms,
          }}
          activeStage={
            activeStage
          }
          selectedBooks={
            selectedBooks
          }
        />
      )}

      {tools.length > 0 && (
        <MobileTools
          character={{
            ...character,
            tools,
          }}
          activeStage={
            activeStage
          }
          selectedBooks={
            selectedBooks
          }
        />
      )}
    </div>
  );
};

export default MobileGear;